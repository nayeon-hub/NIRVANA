import Modal from './Modal';
import { Button } from '@components/Button';
interface AlertProps {
  emoji: string;
  title: string;
  subTitle?: string;
  handleClickAlert: () => void;
  isOpen: boolean;
  buttonLabel?: string;
}

const Alert = ({
  emoji,
  title,
  subTitle,
  handleClickAlert,
  isOpen,
  buttonLabel = '확인'
}: Partial<AlertProps>) => {
  return (
    <Modal
      emoji={emoji}
      title={title}
      subTitle={subTitle}
      domReady={isOpen}>
      <Button
        width='300px'
        height='50px'
        dark={true}
        bold={true}
        label={buttonLabel}
        handleClick={handleClickAlert}
      />
    </Modal>
  );
};
export default Alert;
