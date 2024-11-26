import { useFormContext } from 'react-hook-form';
import {
  ErrorMessage,
  Input,
  InputContainer,
  Label,
  StyledTitle,
  InputBox
} from '@components/FormInput/FormInput.style';

interface LoginFormData {
  email: string;
  password: string;
}

interface PasswordLoginInputProps {
  name: 'password';
  type: string;
  success: boolean;
  placeholder: string;
  title: string;
  width: string;
}

const PasswordLoginInput = ({
  name,
  type = 'text',
  title,
  placeholder,
  width = '100%'
}: Partial<PasswordLoginInputProps>) => {
  const {
    register,
    formState: { errors }
  } = useFormContext<LoginFormData>();

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
              message: '비밀번호를 입력해주세요.'
            }
          })}
        />
      </InputBox>
    </InputContainer>
  );
};

export default PasswordLoginInput;
