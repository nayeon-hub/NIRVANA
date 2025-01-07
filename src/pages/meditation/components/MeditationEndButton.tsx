import { useState } from 'react';
import Confirm from '@components/Modal/Confirm';
import { Button } from '@components/Button';
import { EndButtonContainer } from './MeditationEndButton.style';
import { MeditationStatusType } from '@pages/meditation/types';
import { intervalId, meditationTime } from '@pages/meditation/states';
import { useRecoilState, useSetRecoilState } from 'recoil';

const MeditationEndButton = ({
  statusSetter: meditationStatusSetter
}: {
  statusSetter: React.Dispatch<React.SetStateAction<MeditationStatusType>>;
}) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const setTime = useSetRecoilState(meditationTime);
  const [timerId, setTimerId] = useRecoilState(intervalId);

  const handleClickCancel = () => {
    setIsConfirmOpen(false);
  };

  const handleClickConfirm = () => {
    meditationStatusSetter({ started: false, paused: true, ended: false });
    clearInterval(timerId);
    setTimerId(0);
    setTime(0);
  };
  return (
    <>
      <EndButtonContainer>
        <Button
          width='129px'
          height='49px'
          dark={true}
          bold={false}
          label='명상 끝내기'
          handleClick={() => {
            setIsConfirmOpen(true);
          }}
        />
      </EndButtonContainer>
      <Confirm
        emoji='🧘🏻'
        title='정말 명상을 끝내시겠어요?'
        confirmLabel='끝내기'
        isOpen={isConfirmOpen}
        handleClickConfirm={handleClickConfirm}
        handleClickCancel={handleClickCancel}
      />
    </>
  );
};

export default MeditationEndButton;
