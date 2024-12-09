import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '@apis/supabase/supabaseClient';
import useIntersect from '../../hooks/useIntersect';
import { editPostData } from '../../utils/editPostData';

import PostPreviewList from './PostPreviewList';
import { NoPosts } from '../NoPosts';

import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';
import { Toast } from '@components/Toast';
import { SkeletonPosts } from '@components/Skeleton';
import { PostsContainer, PostObserverEndPoint } from './PostContents.style';

interface PostItemsProps {
  channel: ThemeInfoType;
}

const PostItems = ({ channel }: PostItemsProps) => {
  const { data, hasNextPage, fetchNextPage, isFetching, isError, isLoading } =
    useInfiniteQuery(
      ['getChannelPosts', channel.id],
      ({ pageParam: offset = 0 }) => getPosts(channel.id, offset),
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.data.length === 0) return false;
          return pages.length * 10;
        }
      }
    );

  const ref = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      if (hasNextPage && !isFetching) {
        fetchNextPage();
      }
    },
    { threshold: 0.5 }
  );

  return (
    <PostsContainer>
      {data &&
        (data.pages[0].data.length > 0 ? (
          <>
            {data.pages.map((pageData, idx) => (
              <PostPreviewList
                key={idx}
                postsData={editPostData(pageData.data)}
              />
            ))}
            <PostObserverEndPoint ref={ref} />
          </>
        ) : (
          <NoPosts />
        ))}
      {isLoading && <SkeletonPosts />}
      {isError && (
        <Toast
          type={'ERROR'}
          content={'포스트를 불러오는 데 실패했습니다. 다시 시도해주세요.'}
        />
      )}
    </PostsContainer>
  );
};

export default PostItems;
