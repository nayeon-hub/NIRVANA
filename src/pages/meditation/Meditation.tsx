import { useRecoilState } from 'recoil';

import { endButtonPushed } from './states';
import { MeditationPage } from './Meditation.style';
import { ThemePicker } from '@components/ThemePicker';
import { meditationChannelInfo } from './models/channelInfo';
import {
  PrevPostingConfirm,
  MeditationLabel,
  MeditationTimer,
  MeditationTimeSetter,
  MeditationCancelConfirm
} from '@pages/meditation/components';

const Meditation = () => {
  const [confirmCaptured, setConfirmCaptured] = useRecoilState(endButtonPushed);
  const prevPosting = JSON.parse(sessionStorage.getItem('posting'));

  const handleCancelPrevPosting = () => {
    sessionStorage.removeItem('posting');
  };

  const handleCancelCapture = () => {
    setConfirmCaptured(false);
  };

  const handleMeditationCancel = () => {
    location.reload(); // 리팩토링 전 임시방편
  };

  return (
    <>
      <MeditationPage>
        {prevPosting && (
          <PrevPostingConfirm
            prevPostingInfo={prevPosting}
            handleCancelButton={handleCancelPrevPosting}
          />
        )}
        <MeditationLabel />
        <MeditationTimer />
        <MeditationTimeSetter />
        <ThemePicker themeInfo={meditationChannelInfo} />
        {confirmCaptured && (
          <MeditationCancelConfirm
            handleConfirmButton={handleMeditationCancel}
            handleCancelButton={handleCancelCapture}
          />
        )}
      </MeditationPage>
    </>
  );
};

export default Meditation;
