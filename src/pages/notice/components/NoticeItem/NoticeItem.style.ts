import styled from '@emotion/styled';

const NoticeItemContainer = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter};
  padding: 10px;
  border-bottom: 0.5px solid ${({ theme }) => theme.color['greyLight']};
  margin-bottom: 10px;
  justify-content: flex-start;
`;

const ProfileImage = styled.div<{ profileImage: string }>`
  background-image: url(${({ profileImage }) => profileImage});
  background-color: red;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
`;

const NoticeContent = styled.div`
  flex-direction: column;
  ${({ theme }) => theme.style.flexJustifyCenter}
`;

const Message = styled.div<{ active: boolean }>`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: ${({ theme, active }) =>
    active ? theme.color['greyLight'] : theme.color['black']};
`;

const MessagePreview = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.color['greyLight']};
`;

export {
  NoticeItemContainer,
  ProfileImage,
  NoticeContent,
  Message,
  MessagePreview
};
