import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import type { User } from '@/types/User';
import useSessionStorage from '@hooks/useSessionStorage';

import { Icon } from '@components/Icon';
import { Button } from '@components/Button';
import { Confirm } from '@components/Modal';

import { GnbLayout, GnbSection, GnbMenu } from './Gnb.style';
import { openSearch } from '../states/openSearch';

const Gnb = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useRecoilState(openSearch);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [{ _id, token }] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

  const handleClickConfirm = () => {
    navigate(`/login?redirect=${pathname}`);
  };

  const handleClickCancel = () => {
    setIsConfirmOpen(false);
  };

  const handleClickButton = (path: string) => {
    if (showSearchBox) {
      setShowSearchBox(false);
    }

    if (!(_id && token) && path === `/profile/`) {
      setIsConfirmOpen(true);
    } else {
      navigate(path);
    }
  };

  const iconInfos = [
    { name: 'home', size: 35, link: '/posts' },
    { name: 'spa', size: 35, link: '/meditation' },
    { name: 'person', size: 35, link: `/profile/${_id}` }
  ];

  return (
    <>
      {isConfirmOpen && (
        <Confirm
          emoji='🔒'
          title='로그인이 필요한 서비스입니다.'
          subTitle='로그인하시겠습니까?'
          isOpen={isConfirmOpen}
          handleClickConfirm={handleClickConfirm}
          handleClickCancel={handleClickCancel}
        />
      )}
      <GnbLayout>
        <GnbSection>
          <GnbMenu>
            {iconInfos.map(({ name, size, link }) => (
              <Button
                key={name}
                width='35px'
                height='35px'
                handleClick={() => {
                  handleClickButton(link);
                }}
                borderRadius={0}
                backgroundColor={'transparent'}>
                <Icon
                  name={name}
                  size={size}
                  fill={link === pathname}
                  color={link === pathname ? 'purpleNormal' : 'black'}
                />
              </Button>
            ))}
          </GnbMenu>
        </GnbSection>
      </GnbLayout>
    </>
  );
};

export default Gnb;
