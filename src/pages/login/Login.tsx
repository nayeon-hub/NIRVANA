import { Heading, LoginMain, HeadingContentContainer } from './Login.style';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <LoginMain>
      <HeadingContentContainer>
        <Heading />
      </HeadingContentContainer>
      <LoginForm />
    </LoginMain>
  );
};

export default Login;
