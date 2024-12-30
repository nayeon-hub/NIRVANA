import {
  UnknownErrorContainer,
  UnknownErrorH2,
  UnknownErrorSpan
} from './UnknownError.style';
import { Button } from '@components/Button';

type UnknownErrorProps = {
  onClickRetry: () => void;
};

const UnknownError = ({ onClickRetry }: UnknownErrorProps) => {
  return (
    <UnknownErrorContainer>
      <UnknownErrorH2>잠시 후 다시 시도해주세요!</UnknownErrorH2>
      <UnknownErrorSpan>
        요청사항을 처리하는데<br></br>실패했습니다.
      </UnknownErrorSpan>
      <Button
        width='94px'
        height='35px'
        fontSize={14}
        backgroundColor='purpleDark'
        dark={true}
        handleClick={onClickRetry}>
        다시 시도
      </Button>
    </UnknownErrorContainer>
  );
};

export default UnknownError;
