/* eslint-disable react/prop-types */
import Modal from 'react-modal';

const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

Modal.setAppElement("#root");

const ModalCustom = ({ children, ...props}) => {
    return (
        <Modal  {...props} style={customStyles}>{children}</Modal>
    )
};

export default ModalCustom;