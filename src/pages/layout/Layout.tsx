import { Outlet } from 'react-router';
import { Gnb, Header } from '@pages/layout/components';
import { LayoutContainer, CommonLayoutContainer } from './Layout.style';

interface LayoutProps {
  headerStatus?: 'back' | 'home';
  header?: boolean;
  nav?: boolean;
}

const Layout = ({ headerStatus, header, nav }: LayoutProps) => {
  return (
    <>
      <CommonLayoutContainer>
        {header ? <Header pathStatus={headerStatus} /> : <></>}
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </CommonLayoutContainer>
      {nav ? <Gnb /> : <></>}
    </>
  );
};

export default Layout;
