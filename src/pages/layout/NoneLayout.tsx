import { Outlet } from 'react-router';
import { LayoutContainer } from './Layout.style';

const NoneLayout = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};

export default NoneLayout;
