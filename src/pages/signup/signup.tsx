import { HeadingContentContainer } from '@pages/landing/Landing.style';
import { SignupMain, SignupHeading } from './signup.style';
import SignUpForm from './components/SignUpForm';

const SignUp = () => {
  return (
    <SignupMain>
      <HeadingContentContainer>
        <SignupHeading />
      </HeadingContentContainer>
      <SignUpForm />
    </SignupMain>
  );
};

export default SignUp;
