import { useFormContext } from 'react-hook-form';

import {
  ErrorMessage,
  Input,
  InputContainer,
  Label,
  StyledTitle,
  InputBox
} from '@/components/FormInput/FormInput.style';
import { USER_INPUT } from '@pages/login/constants';

interface LoginFormData {
  email: string;
  password: string;
}

interface EmailLoginInputProps {
  name: 'email';
  type: string;
  placeholder: string;
  title: string;
  width: string;
  errorMessage: string;
}

const EmailLoginInput = ({
  name,
  type = 'text',
  title,
  placeholder,
  errorMessage,
  width = '100%'
}: Partial<EmailLoginInputProps>) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch
  } = useFormContext<LoginFormData>();
  const [email] = watch(['email']);

  let message = null;

  if (errors['email']) {
    message = errors['email'].message;
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
              message: '이메일을 입력해주세요'
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: errorMessage
            }
          })}
        />
      </InputBox>
    </InputContainer>
  );
};

export default EmailLoginInput;
