import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { postSignUpUser } from '@apis/supabase/supabaseClient';

import EmailForm from '@pages/signup/components/EmailForm';
import {
  NicknameInput,
  PasswordInput,
  PasswordConfirmInput
} from '@components/FormInput';
import { Alert } from '@components/Alert';
import { Button } from '@components/Button';

import { SignUpFormContainer } from './SignUpForm.style';
import { ButtonContainer } from './SignUpForm.style';
import { USER_INPUT, BUTTON, MODAL } from '../constants';

interface SignUpFormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  emailCheck: boolean;
  duplicatedEmail: boolean;
}

const SignUpForm = () => {
  const [emailErrorCatched, setEmailErrorCatched] = useState<boolean>(false);
  const [signupSucceed, setSignupSucceed] = useState<boolean>(false);
  const methods = useForm<SignUpFormData>({
    defaultValues: {
      emailCheck: false,
      duplicatedEmail: true
    }
  });
  const {
    watch,
    setError,
    trigger,
    formState: { isValid }
  } = methods;
  const [email, nickname, password, emailCheck, duplicatedEmail] = watch([
    'email',
    'nickname',
    'password',
    'emailCheck',
    'duplicatedEmail'
  ]);

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: postSignUpUser,
    cacheTime: 0,
    onSuccess: () => {
      setSignupSucceed(true);
    },
    onError: (error) => {
      console.log(error);
      setEmailErrorCatched(true);
    }
  });

  const onSubmit = () => {
    if (!emailCheck) {
      setError('emailCheck', {
        type: 'isChecked',
        message: '이메일 중복을 확인해주세요'
      });
      trigger('emailCheck');

      return;
    } else if (duplicatedEmail) {
      setError('duplicatedEmail', {
        type: 'isDuplicated',
        message: '중복된 이메일입니다.'
      });
      trigger('duplicatedEmail');

      return;
    }

    if (isValid) {
      mutate({
        email,
        password,
        fullName: nickname
      });
    }
  };

  return (
    <>
      {emailErrorCatched && (
        <Alert
          emoji={MODAL.ERROR.EMOJI}
          content={MODAL.ERROR.CONTENT}
          buttonLabel={MODAL.ERROR.LABEL}
        />
      )}
      {signupSucceed && (
        <Alert
          emoji={MODAL.SUCCESS.EMOJI}
          content={MODAL.SUCCESS.CONTENT}
          buttonLabel={MODAL.SUCCESS.LABEL}
          nextPageLink='/login'
        />
      )}
      <FormProvider {...methods}>
        <SignUpFormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <EmailForm />
          <NicknameInput
            name={USER_INPUT.NICKNAME.NAME}
            placeholder={USER_INPUT.NICKNAME.PLACE_HOLDER}
            title={USER_INPUT.NICKNAME.TITLE}
          />
          <PasswordInput
            name={USER_INPUT.PASSWORD.NAME}
            type={USER_INPUT.PASSWORD.TYPE}
            placeholder={USER_INPUT.PASSWORD.PLACE_HOLDER}
            title={USER_INPUT.PASSWORD.TITLE}
          />
          <PasswordConfirmInput
            name={USER_INPUT.PASSWORD_CONFIRM.NAME}
            type={USER_INPUT.PASSWORD_CONFIRM.TYPE}
            placeholder={USER_INPUT.PASSWORD_CONFIRM.PLACE_HOLDER}
            title={USER_INPUT.PASSWORD_CONFIRM.TITLE}
          />
          <ButtonContainer>
            <Button
              type='button'
              label={BUTTON.LABEL.CANCEL}
              width={125}
              height={42}
              bold={false}
              dark={false}
              handleClick={() => navigate('/')}
            />
            <Button
              type='submit'
              label={BUTTON.LABEL.SIGNUP}
              width={125}
              height={42}
              bold={false}
              dark={true}
              handleClick={() => methods.handleSubmit(onSubmit)}
            />
          </ButtonContainer>
        </SignUpFormContainer>
      </FormProvider>
    </>
  );
};

export default SignUpForm;
