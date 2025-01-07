import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ContentContainer,
  IconContainer,
  NavButtonContainer,
  StyledModalBackground,
  StyledDeemBackground
} from './Modal.style';

interface ModalProps {
  emoji: string;
  title: string;
  subTitle?: string;
  children: ReactNode;
  domReady: boolean;
}

const Modal = ({
  emoji,
  title,
  subTitle,
  children,
  domReady
}: Partial<ModalProps>) => {
  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden';
  });

  return (
    domReady &&
    createPortal(
      <StyledDeemBackground>
        <StyledModalBackground>
          <IconContainer>{emoji}</IconContainer>
          <ContentContainer>
            {title}
            <br />
            {subTitle}
          </ContentContainer>
          <NavButtonContainer>{children}</NavButtonContainer>
        </StyledModalBackground>
      </StyledDeemBackground>,
      document.getElementById('root-modal')
    )
  );
};
export default Modal;
