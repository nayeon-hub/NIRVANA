import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import type { User } from '@/types';

import { AlertButton, SearchButton } from '@pages/layout/components';
import useSessionStorage from '@hooks/useSessionStorage';
import { Confirm } from '@components/Modal';
import { EtcNavContainer } from './IconNav.style';

interface EtcNavProps {
  handleOpenSearchBox: () => void;
  showSearchBox: boolean;
  pathStatus?: 'back' | 'home';
}

const EtcNav = ({
  handleOpenSearchBox,
  showSearchBox,
  pathStatus
}: EtcNavProps) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [{ _id, token }] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickConfirm = () => {
    navigate(`/login?redirect=${pathname}`);
  };

  const handleClickCancel = () => {
    setIsConfirmOpen(false);
  };

  const handleClickAlert = () => {
    if (_id && token) {
      navigate('/notice');
    } else {
      setIsConfirmOpen(true);
    }
  };

  return (
    <>
      <Confirm
        emoji='🔒'
        title='로그인이 필요한 서비스입니다.'
        subTitle='로그인하시겠습니까?'
        isOpen={isConfirmOpen}
        handleClickConfirm={handleClickConfirm}
        handleClickCancel={handleClickCancel}
      />
      <EtcNavContainer>
        {pathStatus ? (
          <>
            {pathStatus === 'home' ? (
              <>
                <SearchButton
                  handleClickButton={handleOpenSearchBox}
                  searchStatus={showSearchBox}
                />
                <AlertButton handleClickAlert={handleClickAlert} />
              </>
            ) : (
              <AlertButton handleClickAlert={handleClickAlert} />
            )}
          </>
        ) : (
          <></>
        )}
      </EtcNavContainer>
    </>
  );
};

export default EtcNav;
