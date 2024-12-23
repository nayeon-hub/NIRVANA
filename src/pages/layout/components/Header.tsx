import { useRecoilState } from 'recoil';
import {
  HeaderLayout,
  HeaderNavSection,
  HeaderSearchSection
} from './Header.style';
import { PathNav, EtcNav, Search } from '@pages/layout/components';
import { openSearch } from '../states/openSearch';

interface HeaderProps {
  pathStatus?: 'back' | 'home';
}

const Header = ({ pathStatus }: HeaderProps) => {
  const [showSearchBox, setShowSearchBox] = useRecoilState(openSearch);

  const handleOpenSearchBox = () => {
    setShowSearchBox(true);
  };

  const handleCloseSearchBox = () => {
    setShowSearchBox(false);
  };

  return (
    <HeaderLayout>
      {showSearchBox ? (
        <HeaderSearchSection>
          <Search
            showSearchBox={showSearchBox}
            handleShowSearchBox={handleCloseSearchBox}
          />
        </HeaderSearchSection>
      ) : (
        <HeaderNavSection>
          <PathNav pathStatus={pathStatus} />
          <EtcNav
            pathStatus={pathStatus}
            handleOpenSearchBox={handleOpenSearchBox}
            showSearchBox={showSearchBox}
          />
        </HeaderNavSection>
      )}
    </HeaderLayout>
  );
};

export default Header;
