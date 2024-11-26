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

interface NicknameInputProps {
  name: 'nickname';
  type: string;
  success: boolean;
  placeholder: string;
  title: string;
  width: string;
}

const NicknameInput = ({
  name,
  type = 'text',
  title,
  placeholder,
  width = '100%'
}: Partial<NicknameInputProps>) => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useFormContext<SignUpFormData>();

  let message = null;

  if (errors['nickname']) {
    message = errors['nickname'].message;
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
              value: /^[a-zA-Z0-9가-힣]*$/,
              message: '영어 대소문자 및 한글, 숫자만 가능합니다.'
            },
            minLength: {
              value: 2,
              message: '길이가 2자 이상 필요합니다.'
            },
            maxLength: {
              value: 8,
              message: '길이가 8자 이하만 가능합니다.'
            },
            onBlur: () => {
              trigger(USER_INPUT.NICKNAME.NAME);
            }
          })}
        />
      </InputBox>
    </InputContainer>
  );
};

export default NicknameInput;
