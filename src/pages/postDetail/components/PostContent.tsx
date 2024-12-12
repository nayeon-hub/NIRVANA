import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import type { User } from '@/types';

import { Icon } from '@components/Icon';
import { PostHeader } from '@components/PostPreview';
import {
  PostContentBody,
  PostContentHeader,
  PostContentMenuIconContainer,
  PostContentSection,
  PostContentMenu,
  PostEditConfirmButtonContainer
} from './PostContent.style';
import { Toast } from '@components/Toast';
import { putPost, deletePost } from '@apis/supabase/supabaseClient';
import { Button } from '@components/Button';
import { Confirm } from '@components/Confirm';
import { purifyContent } from '@pages/posting/utils';

interface PostContentProps {
  author: User;
  currentUserId: string;
  postId: number;
  createdAt: string;
  content: string;
  meditationTime: number;
}

const PostContent = ({
  author,
  currentUserId,
  postId,
  createdAt,
  content,
  meditationTime
}: PostContentProps) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showContentErrorToast, setShowContentErrorToast] = useState(false);
  const [deleteConfirmOpened, setDeleteConfirmOpened] = useState(false);
  const [contentEditMode, setContentEditMode] = useState(false);
  const contentEditRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpened(!menuOpened);
  };

  const navigate = useNavigate();
  const { mutate: mutateDeletePost, isSuccess: deletePostSuccess } =
    useMutation(deletePost);

  const { mutate: mutatePutPost } = useMutation(putPost);

  if (deletePostSuccess) {
    navigate('/posts');
  }

  const handleEditMenuClick = () => {
    setContentEditMode(true);
    setMenuOpened(false);

    contentEditRef.current?.setAttribute('contenteditable', 'true');
    contentEditRef.current?.focus();
  };

  const handleDeleteMenuClick = () => {
    setMenuOpened(false);
    setDeleteConfirmOpened(true);
  };

  const handleEditCancelClick = () => {
    setContentEditMode(false);
    contentEditRef.current.textContent = content;
    contentEditRef.current?.setAttribute('contenteditable', 'false');
  };

  const handleEditConfirmClick = () => {
    if (contentEditRef.current?.textContent === '') {
      setShowContentErrorToast(true);
    } else {
      setContentEditMode(false);
      contentEditRef.current?.setAttribute('contenteditable', 'false');
      const newCustomTitle = {
        title: purifyContent(contentEditRef.current?.textContent || ''),
        meditationTime
      };

      mutatePutPost({ postData: newCustomTitle.title, postId });
    }
  };

  const handleConfirmCancelClick = () => {
    setDeleteConfirmOpened(false);
  };

  const handleDeleteConfirmClick = () => {
    setDeleteConfirmOpened(false);
    mutateDeletePost({ postId });
  };

  return (
    <>
      {showContentErrorToast && (
        <Toast
          content='게시글의 내용을 입력해주세요.'
          type='WARNING'
        />
      )}
      <PostContentSection>
        <PostContentHeader>
          <PostHeader
            post={{
              _id: postId,
              author,
              createdAt,
              meditationTime
            }}
            noneProfile={false}
            showCommentStatus={false}
          />
          {currentUserId === author?._id && (
            <>
              <PostContentMenuIconContainer
                opened={menuOpened}
                onClick={handleMenuClick}>
                <Icon
                  size={24}
                  name='menu'
                />
              </PostContentMenuIconContainer>
              <PostContentMenu opened={menuOpened}>
                <p onClick={handleDeleteMenuClick}>삭제하기</p>
                <p onClick={handleEditMenuClick}>수정하기</p>
              </PostContentMenu>
            </>
          )}
        </PostContentHeader>
        <PostContentBody ref={contentEditRef}>
          <p>{content}</p>
        </PostContentBody>
        <PostEditConfirmButtonContainer contentEditMode={contentEditMode}>
          <Button
            width='50px'
            height='25px'
            dark={true}
            fontSize={12}
            label='취소'
            handleClick={handleEditCancelClick}
          />
          <Button
            width='50px'
            height='25px'
            dark={true}
            fontSize={12}
            label='저장'
            handleClick={handleEditConfirmClick}
          />
        </PostEditConfirmButtonContainer>
        {deleteConfirmOpened && (
          <Confirm
            emoji='❗'
            content='정말 게시글을 삭제하시겠습니까?'
            contentFontSize={14}
            CancelButton={
              <Button
                width='120px'
                height='50px'
                bold={true}
                dark={false}
                label={'취소'}
                handleClick={handleConfirmCancelClick}
              />
            }
            ConfirmButton={
              <Button
                width='120px'
                height='50px'
                bold={true}
                dark={true}
                label={'삭제'}
                handleClick={handleDeleteConfirmClick}
              />
            }
          />
        )}
      </PostContentSection>
    </>
  );
};

export default PostContent;
