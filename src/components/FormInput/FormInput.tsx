import { useFormContext } from 'react-hook-form';
import {
  Input,
  InputContainer,
  Label,
  StyledTitle,
  InputBox
} from './FormInput.style';

interface FormInputProps {
  name: string;
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

const FormInput = ({
  name,
  type = 'text',
  title,
  placeholder,
  width = '100%'
}: Partial<FormInputProps>) => {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <Label>
        <StyledTitle>{title}</StyledTitle>
      </Label>
      <InputBox>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={type === 'password' ? 'off' : 'on'}
          width={width}
          {...register(name)}
        />
      </InputBox>
    </InputContainer>
  );
};

export default FormInput;
