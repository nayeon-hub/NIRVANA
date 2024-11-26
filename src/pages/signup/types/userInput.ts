export type UserInputType = {
  EMAIL: {
    NAME: 'email';
    PLACE_HOLDER: '이메일을 입력해주세요.';
    TITLE: '이메일';
    ERROR_MESSAGE: '이메일 형식을 확인해주세요.';
    SUCCESS_MESSAGE: '사용 가능한 이메일입니다.';
  };
  NICKNAME: {
    NAME: 'nickname';
    PLACE_HOLDER: '사용할 닉네임을 입력해주세요.';
    TITLE: '닉네임';
    ERROR_MESSAGE: '사용할 수 없는 닉네임 입니다.';
    SUCCESS_MESSAGE: '멋진 닉네임이네요!';
  };
  PASSWORD: {
    NAME: 'password';
    PLACE_HOLDER: '비밀번호를 입력해주세요.';
    TITLE: '비밀번호';
    ERROR_MESSAGE: '비밀번호는 8자 이상 32자 이하여야 하며\n영문자 숫자 특수기호 중 두개이상 포함해야 합니다.';
    SUCCESS_MESSAGE: '안전한 비밀번호네요!';
    TYPE: 'password';
  };
  PASSWORD_CONFIRM: {
    NAME: 'passwordConfirm';
    PLACE_HOLDER: '비밀번호를 한번 더 입력해주세요.';
    TITLE: '비밀번호 확인';
    ERROR_MESSAGE: '비밀번호가 일치하지 않습니다.';
    SUCCESS_MESSAGE: '비밀번호가 일치합니다.';
    TYPE: 'password';
  };
};

