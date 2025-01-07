import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LogOutUser } from '@apis/supabase/supabaseClient';

import useSessionStorage from '@hooks/useSessionStorage';
import { Link } from '@components/Link';
import { Confirm } from '@components/Modal';
import { Alert } from '@components/Modal';

import { ALERT } from '@pages/password-update/constants';
import {
  Heading,
  SettingLi,
  SettingRightSideBar,
  SettingSideBarBackground,
  SettingSideBarSection,
  SettingUl
} from './SettingSideBar.style';

interface SettingSideBarProps {
  closeSidebar: () => void;
  sideBarOpened: boolean;
}

const SettingSideBar = ({
  closeSidebar,
  sideBarOpened
}: SettingSideBarProps) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    closeSidebar();
  };

  const navigate = useNavigate();

  const [, , deleteUserValue] = useSessionStorage('userData', {
    _id: '',
    token: ''
  });

  const { mutate } = useMutation(LogOutUser, {
    onSuccess: () => {
      closeSidebar();
      setIsConfirmOpen(false);
      navigate('/', { replace: true });
      deleteUserValue();
    },
    onError: () => {
      setIsAlertOpen(true);
    }
  });

  const handleLogoutClick = () => {
    setIsConfirmOpen(true);
  };

  const onClickCancel = () => {
    closeSidebar();
    setIsConfirmOpen(false);
  };

  const onClickConfirm = () => {
    mutate();
  };

  const onClickAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <>
      <Alert
        emoji={ALERT.EMOJI}
        title={ALERT.CONTENT}
        buttonLabel={ALERT.BUTTON_LABEL}
        isOpen={isAlertOpen}
        handleClickAlert={onClickAlert}
      />
      <Confirm
        emoji='👋🏻'
        title='로그아웃하시겠습니까?'
        isOpen={isConfirmOpen}
        handleClickConfirm={onClickConfirm}
        handleClickCancel={onClickCancel}
      />
      <SettingSideBarSection sideBarOpened={sideBarOpened}>
        <SettingSideBarBackground onClick={handleBackgroundClick} />
        <SettingRightSideBar sideBarOpened={sideBarOpened}>
          <Heading>환경설정</Heading>
          <SettingUl sideBarOpened={sideBarOpened}>
            <SettingLi onClick={closeSidebar}>
              <Link
                pageLink='#edit'
                size={16}>
                <p>프로필 수정</p>
              </Link>
            </SettingLi>
            <SettingLi>
              <Link
                pageLink='/setting/password-update'
                size={16}
                color='black'>
                <p>비밀번호 변경</p>
              </Link>
            </SettingLi>
            <SettingLi onClick={handleLogoutClick}>
              <p>로그아웃</p>
            </SettingLi>
          </SettingUl>
        </SettingRightSideBar>
      </SettingSideBarSection>
    </>
  );
};

export default SettingSideBar;
