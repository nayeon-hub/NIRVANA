import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';
import { DotBadge } from '../Badge';

import logo from '../../assets/logo.svg';

const Layout = styled.div`
  height: 50px;
  background-color: #47346d;
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
`;

const Logo = styled.h1`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 109px;
  height: 17px;
`;

const LeftLayout = styled.div`
  display: flex;
  align-items: center;
`;
const RightLayout = styled.div`
  display: flex;
`;

const BackButton = styled.div`
  background: none;
  border: none;
  outline: none;
  &:before {
    width: 14px;
    height: 14px;
    padding-right: 5px;
  }
`;

const AlertButton = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
`;
const MessageButton = styled.button`
  background: none;
  border: none;
  outline: none;
  align-items: center;
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  const navigate = useNavigate();

  const handleGoToAlert = () => {
    navigate('/alert');
  };

  const handleGoToDM = () => {
    navigate('/message');
  };

  return (
    <Layout>
      <LeftLayout>
        {onClick ? (
          <BackButton onClick={onClick}>
            <Icon
              name={'arrow_back_ios'}
              color={'#fff'}
              size={'23'}
            />
          </BackButton>
        ) : (
          <Logo></Logo>
        )}
      </LeftLayout>
      <RightLayout>
        <AlertButton onClick={handleGoToAlert}>
          <DotBadge
            dot={true}
            color='#ff9900'
            position='top'>
            <Icon
              name={'notifications'}
              color={'#fff'}
              size={'23'}
            />
          </DotBadge>
        </AlertButton>
        <MessageButton onClick={handleGoToDM}>
          <Icon
            name={'chat'}
            color={'#fff'}
            size={'23'}
          />
        </MessageButton>
      </RightLayout>
    </Layout>
  );
};

export default Header;