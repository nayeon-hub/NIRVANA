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

interface PasswordConfirmInputProps {
  name: string;
  type: string;
  success: boolean;
  placeholder: string;
  title: string;
  width: string;
}

const PasswordConfirmInput = ({
  name,
  type = 'text',
  title,
  placeholder,
  width = '100%'
}: Partial<PasswordConfirmInputProps>) => {
  const {
    register,
    trigger,
    watch,
    formState: { errors }
  } = useFormContext();

  const [password] = watch(['password']);
  let message = null;

  if (errors['passwordConfirm']) {
    message = errors['passwordConfirm'].message;
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
            validate: (value) =>
              value === password || '비밀번호가 일치하지 않습니다.',
            onBlur: () => {
              trigger(USER_INPUT.PASSWORD_CONFIRM.NAME);
            }
          })}
        />
      </InputBox>
    </InputContainer>
  );
};

export default PasswordConfirmInput;
