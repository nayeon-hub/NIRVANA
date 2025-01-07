import { Link } from '@components/Link';
import { Button } from '@components/Button';
import { LandingMain } from '@pages/landing/Landing.style';
import {
  ContentContainer,
  IconContainer,
  NavButtonContainer,
  StyledModalBackground
} from '@components/Modal/Modal.style';

const NotFound = () => {
  return (
    <LandingMain>
      <StyledModalBackground>
        <IconContainer>😢</IconContainer>
        <ContentContainer>
          404! 잘못된 페이지 접근이에요!
          <NavButtonContainer>
            <Link pageLink={'/'}>
              <Button
                width='300px'
                height='50px'
                dark={true}
                bold={true}
                label='메인화면으로 이동하기'
              />
            </Link>
          </NavButtonContainer>
        </ContentContainer>
      </StyledModalBackground>
    </LandingMain>
  );
};

export default NotFound;
