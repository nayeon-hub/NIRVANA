import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { getEmailCheck } from '@apis/supabase/supabaseClient';

import { EmailInput } from '@components/FormInput';

import { USER_INPUT } from '../constants';
import { FormInputContainer, EmailConfirmButton } from './SignUpForm.style';

const EmailForm = () => {
  const {
    setError,
    clearErrors,
    watch,
    trigger,
    setValue,
    formState: { errors }
  } = useFormContext();
  const [email] = watch(['email']);

  const { mutate, isLoading } = useMutation({
    mutationFn: getEmailCheck,
    cacheTime: 0,
    onSuccess: (response) => {
      if (response.data.length > 0) {
        setError('duplicatedEmail', {
          type: 'isDuplicated',
          message: '중복된 이메일입니다.'
        });
        setValue('duplicatedEmail', true);
      } else {
        setValue('duplicatedEmail', false);
        clearErrors('duplicatedEmail');
      }
    }
  });

  return (
    <FormInputContainer>
      <EmailConfirmButton
        type='button'
        onClick={() => {
          if (errors[USER_INPUT.EMAIL.NAME]) {
            trigger(USER_INPUT.EMAIL.NAME);
          } else {
            setValue('emailCheck', true);
            clearErrors('emailCheck');
            mutate(email);
          }
        }}>
        {isLoading ? '체크 중' : '중복 체크'}
      </EmailConfirmButton>
      <EmailInput
        name={USER_INPUT.EMAIL.NAME}
        placeholder={USER_INPUT.EMAIL.PLACE_HOLDER}
        title={USER_INPUT.EMAIL.TITLE}
        errorMessage={USER_INPUT.EMAIL.ERROR_MESSAGE}
        successMessage={USER_INPUT.EMAIL.SUCCESS_MESSAGE}
        width={'68%'}
      />
    </FormInputContainer>
  );
};

export default EmailForm;
