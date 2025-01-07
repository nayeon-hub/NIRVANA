import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { putUpdatePassword } from '@apis/supabase/supabaseClient';

import { PasswordHint } from '@pages/password-update/components';
import { Alert } from '@components/Modal';
import { Button } from '@components/Button';
import { FormInput } from '@components/FormInput';
import useSessionStorage from '@hooks/useSessionStorage';

import { User } from '@/types';
import { LABEL, PASSWORD_HINT, USER_INPUT, ALERT } from '../constants';
import {
  PasswordUpdateFormContainer,
  ButtonContainer
} from './PasswordUpdateForm.style';
import isPasswordOk from '../validations';

interface PasswordUpdateFormData {
  password: string;
  passwordConfirm: string;
}

const PasswordUpdateForm = () => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const methods = useForm<PasswordUpdateFormData>();
  const { watch } = methods;
  const [password, passwordConfirm] = watch(['password', 'passwordConfirm']);
  const navigate = useNavigate();

  const onSubmit = () => {
    if (isPasswordOk(password) && password === passwordConfirm) {
      putUpdatePassword(password)
        .then(() => setIsOpenAlert(true))
        .catch((error) => console.log(error));
    }
  };

  const onClickAlert = () => {
    setIsOpenAlert(false);

    if (userSessionData.token) {
      navigate(`/profile/${userSessionData._id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Alert
        emoji={ALERT.EMOJI}
        title={ALERT.CONTENT}
        buttonLabel={ALERT.BUTTON_LABEL}
        isOpen={isOpenAlert}
        handleClickAlert={onClickAlert}
      />
      <FormProvider {...methods}>
        <PasswordUpdateFormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <PasswordHint text={PASSWORD_HINT} />
          <FormInput
            name={USER_INPUT.NEW_PASSWORD.NAME}
            placeholder={USER_INPUT.NEW_PASSWORD.PLACE_HOLDER}
            title={USER_INPUT.NEW_PASSWORD.TITLE}
            show={password && password.length > 0}
            success={password && isPasswordOk(password)}
            type={USER_INPUT.NEW_PASSWORD.TYPE}
            errorMessage={USER_INPUT.NEW_PASSWORD.ERROR_MESSAGE}
            successMessage={USER_INPUT.NEW_PASSWORD.SUCCESS_MESSAGE}
          />
          <FormInput
            name={USER_INPUT.NEW_PASSWORD_CONFIRM.NAME}
            placeholder={USER_INPUT.NEW_PASSWORD_CONFIRM.PLACE_HOLDER}
            title={USER_INPUT.NEW_PASSWORD_CONFIRM.TITLE}
            show={password && passwordConfirm.length > 0}
            success={passwordConfirm && password === passwordConfirm}
            type={USER_INPUT.NEW_PASSWORD_CONFIRM.TYPE}
            errorMessage={USER_INPUT.NEW_PASSWORD_CONFIRM.ERROR_MESSAGE}
            successMessage={USER_INPUT.NEW_PASSWORD_CONFIRM.SUCCESS_MESSAGE}
          />
          <ButtonContainer>
            <Button
              label={LABEL.CHANGE_PASSWORD}
              width='300px'
              height='45px'
              bold={false}
              dark={true}
              handleClick={() => methods.handleSubmit(onSubmit)}
            />
          </ButtonContainer>
        </PasswordUpdateFormContainer>
      </FormProvider>
    </>
  );
};

export default PasswordUpdateForm;
