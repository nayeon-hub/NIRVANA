import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { postLogInUser } from '@apis/supabase/supabaseClient';
import useSessionStorage from '@hooks/useSessionStorage';

import { Button } from '@components/Button';
import { EmailLoginInput, PasswordLoginInput } from '@components/FormInput';
import { GoToSignUp } from '../components';
import { LoginFormContainer, ButtonContainer } from './LoginForm.style';
import { ErrorMessage } from '@components/FormInput/FormInput.style';

import { User } from '@/types';
import { USER_INPUT, LABEL } from '../constants';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const methods = useForm<LoginFormData>();
  const { watch, handleSubmit } = methods;
  const [canLogin, setCanLogin] = useState(true);
  const [email, password] = watch(['email', 'password']);
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectTo = search.replace('?redirect=', '');

  const [userSessionData, setUserSessionData] = useSessionStorage<
    Pick<User, '_id' | 'token' | 'image' | 'fullName'>
  >('userData', {
    _id: '',
    token: '',
    image: '',
    fullName: ''
  });

  useEffect(() => {
    if (userSessionData.token) {
      if (redirectTo) {
        navigate(redirectTo);
      } else {
        navigate('/meditation');
      }
    }
  }, [userSessionData.token, navigate, redirectTo, search]);

  const { mutate } = useMutation({
    mutationFn: postLogInUser,
    onSuccess: (response) => {
      const {
        user,
        session: { access_token }
      } = response.data;

      setUserSessionData({
        _id: user.id,
        token: access_token,
        image: user.user_metadata.image,
        fullName: user.user_metadata.fullName
      });
    },
    onError: (error) => {
      setCanLogin(false);
      console.log(error);
    }
  });

  const onSubmit = () => {
    mutate({ email, password });
  };

  return (
    <FormProvider {...methods}>
      <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
        <EmailLoginInput
          name={USER_INPUT.EMAIL.NAME}
          placeholder={USER_INPUT.EMAIL.PLACE_HOLDER}
          title={USER_INPUT.EMAIL.TITLE}
          errorMessage={USER_INPUT.EMAIL.ERROR_MESSAGE}
        />
        <PasswordLoginInput
          name={USER_INPUT.PASSWORD.NAME}
          placeholder={USER_INPUT.PASSWORD.PLACE_HOLDER}
          title={USER_INPUT.PASSWORD.TITLE}
          type={USER_INPUT.PASSWORD.TYPE}
        />
        {canLogin ? (
          <></>
        ) : (
          <ErrorMessage>{USER_INPUT.ERROR_MESSAGE}</ErrorMessage>
        )}
        <ButtonContainer>
          <Button
            label={LABEL.LOG_IN}
            width='300px'
            height='45px'
            bold={false}
            dark={true}
            type='submit'
            handleClick={() => handleSubmit(onSubmit)}
          />
        </ButtonContainer>
        <GoToSignUp />
      </LoginFormContainer>
    </FormProvider>
  );
};

export default LoginForm;
