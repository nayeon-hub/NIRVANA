import { useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';

import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { StyledSkipPosting } from './SkipPosting.style';

import { Confirm } from '@components/Modal';

interface MutationParams {
  posting: string;
}

interface SkipPostingProps {
  mutatePosting: UseMutateFunction<void, unknown, MutationParams, unknown>;
}

const SkipPosting = ({ mutatePosting }: SkipPostingProps) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { SKIP_POSTING } = POSTING_DESCRIPTION;

  const handleClickSkipPost = () => {
    setIsConfirmOpen(true);
  };
  const handleClickCancel = () => {
    setIsConfirmOpen(false);
  };

  const handleClickConfirm = () => {
    setIsConfirmOpen(false);
    mutatePosting({ posting: '' });
  };

  return (
    <>
      <Confirm
        emoji='❗️'
        title='포스트 작성을 건너뛸까요?'
        confirmLabel='건너뛰기'
        isOpen={isConfirmOpen}
        handleClickConfirm={handleClickConfirm}
        handleClickCancel={handleClickCancel}
      />
      <StyledSkipPosting onClick={handleClickSkipPost}>
        {SKIP_POSTING}
      </StyledSkipPosting>
    </>
  );
};
export default SkipPosting;
