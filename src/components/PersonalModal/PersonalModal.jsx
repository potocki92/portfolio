
import {
  CloseModal,
  Col,
  Description,
  Modal,
  ModalInner,
  PersonalModalPortal,
  Row,
} from "./PersonalModal.styled";

const PersonalModal = ({ onClose }) => {
  return (
    <PersonalModalPortal>
      <Modal>
        <CloseModal onClick={onClose}></CloseModal>
        <ModalInner>
          <Description>
            <Row>
              <Col>
                <h3>Personal Info</h3>
              </Col>
            </Row>
          </Description>
        </ModalInner>
      </Modal>
    </PersonalModalPortal>
  );
};

export default PersonalModal;
