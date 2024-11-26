import { useFormContext } from 'react-hook-form';
import {
  ErrorMessage,
  Input,
  InputContainer,
  Label,
  StyledTitle,
  InputBox
} from '@components/FormInput/FormInput.style';
import { USER_INPUT } from '../../pages/signup/constants';

interface SignUpFormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  emailCheck: boolean;
  duplicatedEmail: boolean;
}

interface PasswordInputProps {
  name: 'password';
  type: string;
  success: boolean;
  placeholder: string;
  title: string;
  width: string;
}

const PasswordInput = ({
  name,
  type = 'text',
  title,
  placeholder,
  width = '100%'
}: Partial<PasswordInputProps>) => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useFormContext<SignUpFormData>();

  let message = null;

  if (errors['password']) {
    message = errors['password'].message;
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
              value:
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]+$/,
              message: '영문 및 숫자, 특수문자를 포함해야 합니다.'
            },
            onBlur: () => {
              trigger(USER_INPUT.PASSWORD.NAME);
            }
          })}
        />
      </InputBox>
    </InputContainer>
  );
};

export default PasswordInput;
