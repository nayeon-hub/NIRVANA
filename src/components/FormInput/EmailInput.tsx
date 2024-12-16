import { useFormContext } from 'react-hook-form';

import {
  ErrorMessage,
  Input,
  InputContainer,
  Label,
  StyledTitle,
  InputBox
} from '@/components/FormInput/FormInput.style';
import { USER_INPUT } from '../../pages/signup/constants';

interface SignUpFormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  emailCheck: boolean;
  duplicatedEmail: boolean;
}

interface EmailInputProps {
  name: 'email';
  type: string;
  success: boolean;
  placeholder: string;
  title: string;
  errorMessage: string;
  successMessage: string;
  successColor: string;
  errorColor: string;
  show: boolean;
  width: string;
  registerOptions: object;
}

const EmailInput = ({
  name,
  type = 'text',
  title,
  placeholder,
  errorMessage,
  width = '100%'
}: Partial<EmailInputProps>) => {
  const {
    register,
    trigger,
    setError,
    formState: { errors },
    watch
  } = useFormContext<SignUpFormData>();

  const [email, emailCheck, duplicatedEmail] = watch([
    'email',
    'emailCheck',
    'duplicatedEmail'
  ]);

  let message = null;

  if (errors.email) {
    message = errors.email.message;
  } else if (errors.duplicatedEmail) {
    message = errors.duplicatedEmail.message;
  } else if (errors.emailCheck) {
    message = errors.emailCheck.message;
  }

  return (
    <InputContainer>
      <Label>
        <StyledTitle>{title}</StyledTitle>
        {message ? <ErrorMessage>{message}</ErrorMessage> : <></>}
      </Label>
      <InputBox>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={type === 'password' ? 'off' : 'on'}
          width={width}
          {...register(name, {
            required: {
              value: true,
              message: '필수 응답 항목입니다.'
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: errorMessage
            },
            onBlur: () => {
              if (!email || errors.email) {
                trigger(USER_INPUT.EMAIL.NAME);
              } else if (!emailCheck) {
                setError('emailCheck', {
                  type: 'isChecked',
                  message: '이메일 중복을 확인해주세요'
                });
                trigger('emailCheck');
              } else if (!duplicatedEmail) {
                setError('duplicatedEmail', {
                  type: 'isDuplicated',
                  message: '중복된 이메일입니다.'
                });
                trigger('duplicatedEmail');
              }
            }
          })}
        />
      </InputBox>
    </InputContainer>
  );
};

export default EmailInput;
