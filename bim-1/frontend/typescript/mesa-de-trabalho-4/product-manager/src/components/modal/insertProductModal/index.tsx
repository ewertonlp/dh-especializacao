import Modal from 'react-modal';

interface Props {
  children: React.ReactNode;
  isModalOpen: boolean;
  onRequestClose: () => void;
  [key: string]: any;
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
};

Modal.setAppElement('#root');

const InsertProductModal = ({
  children,
  isModalOpen,
  onRequestClose,
  ...props
}: Props) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      {...props}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default InsertProductModal;
