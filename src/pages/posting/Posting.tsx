import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { Theme } from '@emotion/react';

import { postCreateNewPost } from '@apis/supabase/supabaseClient';
import { Toast } from '@components/Toast';
import { purifyContent } from './utils';
import { NewPost } from './components/NewPost';
import { SkipPosting } from './components/SkipPosting';
import {
  ContentContainer,
  ContentHeader,
  PostingMain,
  ContentPara,
  TimeStrong
} from './Posting.style';

interface MutationParams {
  posting: string;
}

interface ReceiveState {
  totalTime: number;
  channelId: string;
  channelLabel: string;
  channelColor: keyof Theme['color'];
  channelIdx: number;
}

const Posting = () => {
  const navigate = useNavigate();
  const locate = useLocation();
  const { _id } = JSON.parse(sessionStorage.getItem('userData'));
  const [meditationInfo] = useState<ReceiveState>(
    locate.state
      ? locate.state
      : {
          totalTime: 0,
          channelId: '',
          channelLabel: '',
          channelColor: 'linearGradientPurple',
          channelIdx: 0
        }
  );

  const { totalTime, channelLabel, channelId, channelIdx } = meditationInfo;

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: async ({ posting = '' }: MutationParams) => {
      const formData = createPostingForm(posting, channelId);

      await postCreateNewPost(_id, formData);
    },
    onSuccess: () => {
      sessionStorage.removeItem('posting');
      navigate('/posts', {
        state: {
          channelInfo: {
            id: channelId,
            label: channelLabel,
            idx: channelIdx
          }
        }
      });
    }
  });

  const createPostingForm = (posting: string, channelId: string) => {
    const customPosting = {
      title: purifyContent(posting),
      meditationTime: totalTime,
      channel: channelId
    };

    return {
      channel: channelId,
      ...customPosting
    };
  };
  useEffect(() => {
    if (locate.state === null) {
      navigate('/404');
    }
  }, [locate, navigate]);

  return (
    <PostingMain background={meditationInfo.channelColor}>
      {isError && (
        <Toast
          type='ERROR'
          content='글을 발행할 수 없습니다. 잠시 후 다시 시도해주세요.'
        />
      )}
      <ContentHeader>
        <ContentPara>
          총 <TimeStrong>{totalTime}분</TimeStrong> 동안 명상을 진행했어요!
        </ContentPara>
        <ContentPara>
          <u>{channelLabel}</u>에 대해 어떤 생각을 하셨나요?
        </ContentPara>
      </ContentHeader>
      <ContentContainer>
        <NewPost
          mutatePosting={mutate}
          isLoading={isLoading}
        />
        <SkipPosting mutatePosting={mutate} />
      </ContentContainer>
    </PostingMain>
  );
};

export default Posting;
