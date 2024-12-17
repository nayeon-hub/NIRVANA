import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { Logo, PathNavContainer } from './PathNav.style';
import { Link } from '@components/Link';

interface pathNavProps {
  pathStatus: 'back' | 'home';
}

const PathNav = ({ pathStatus }: pathNavProps) => {
  const navigation = useNavigate();

  return (
    <PathNavContainer>
      {pathStatus === 'home' ? (
        <Link
          pageLink='/posts'
          setActiveStyle={false}>
          <Logo />
        </Link>
      ) : (
        <Button
          width='20px'
          height='20px'
          handleClick={() => {
            navigation(-1);
          }}>
          <Icon
            name='arrow_back_ios'
            color='white'
            size={20}
          />
        </Button>
      )}
    </PathNavContainer>
  );
};
export default PathNav;
