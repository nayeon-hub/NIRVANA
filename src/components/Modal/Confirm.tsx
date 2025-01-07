import Modal from './Modal';
import { Button } from '@components/Button';

interface ConfirmProps {
  emoji: string;
  title: string;
  subTitle?: string;
  handleClickConfirm: () => void;
  handleClickCancel: () => void;
  isOpen: boolean;
  confirmLabel?: string;
}

const Confirm = ({
  emoji,
  title,
  subTitle,
  handleClickConfirm,
  handleClickCancel,
  isOpen,
  confirmLabel = '확인'
}: Partial<ConfirmProps>) => {
  return (
    <Modal
      emoji={emoji}
      title={title}
      subTitle={subTitle}
      domReady={isOpen}>
      <Button
        width='120px'
        height='50px'
        bold={true}
        dark={false}
        label='취소'
        handleClick={handleClickCancel}
      />
      <Button
        width='120px'
        height='50px'
        bold={true}
        dark={true}
        label={confirmLabel}
        handleClick={handleClickConfirm}
      />
    </Modal>
  );
};
export default Confirm;
