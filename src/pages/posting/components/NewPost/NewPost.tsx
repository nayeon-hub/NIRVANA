import { useState, useRef, useEffect } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';

import { Button } from '@components/Button';
import { Confirm } from '@components/Modal';

import {
  ButtonContainer,
  PostContainer,
  TextArea,
  TextAreaContainer,
  TextLengthInfo
} from './NewPost.style';
import { POSTING_DESCRIPTION, POSTING_WARNING } from '@pages/posting/constants';

interface MutationParams {
  posting: string;
}

interface NewPostProps {
  isLoading: boolean;
  mutatePosting: UseMutateFunction<void, unknown, MutationParams, unknown>;
}

const NewPost = ({ mutatePosting, isLoading }: NewPostProps) => {
  const { PLACEHOLDER, WRITE } = POSTING_DESCRIPTION;
  const { LIMIT_LENGTH } = POSTING_WARNING;
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [postingValue, setPosting] = useState('');
  const textAreaRef = useRef(null);

  const handlePostButton = () => {
    setIsConfirmOpen(true);
  };

  const handleClickCancel = () => {
    setIsConfirmOpen(false);
  };

  const handleClickConfirm = () => {
    mutatePosting({ posting: postingValue });
  };

  useEffect(() => {
    const widthValue = textAreaRef.current;
    if (widthValue.scrollHeight > widthValue.offsetHeight) {
      widthValue.style.setProperty('height', `${widthValue.offsetHeight + 20}`);
    }
    console.dir(widthValue);
  }, [postingValue]);

  return (
    <>
      <Confirm
        emoji='✏️'
        title='포스트를 발행할까요?'
        confirmLabel='발행'
        isOpen={isConfirmOpen}
        handleClickConfirm={handleClickConfirm}
        handleClickCancel={handleClickCancel}
      />
      <PostContainer>
        <TextAreaContainer>
          <TextArea
            onChange={(event) => {
              if (LIMIT_LENGTH > postingValue.length) {
                setPosting(event.target.value);
              }
            }}
            ref={textAreaRef}
            required
            value={postingValue}
            maxLength={500}
            placeholder={PLACEHOLDER}
          />
          <TextLengthInfo>
            {postingValue.length}/{LIMIT_LENGTH}
          </TextLengthInfo>
        </TextAreaContainer>
        <ButtonContainer>
          <Button
            disabled={postingValue.length === 0 || isLoading}
            width='300px'
            height='50px'
            dark={true}
            label={WRITE}
            bold={true}
            fontSize={16}
            borderRadius={10}
            handleClick={handlePostButton}
          />
        </ButtonContainer>
      </PostContainer>
    </>
  );
};
export default NewPost;
