import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CheckCircle from "./CheckCircle";
import { setModalShow } from "../../redux/features/formSlice";

const FormModal = () => {
  const modalShow = useSelector((state) => state.form.modalShow);
  const dispatch = useDispatch();
  return (
    <Modal show={modalShow} fullscreen>
      <div className="form-modal">
        <div className="form-modal-content">
          <div>
            <CheckCircle width={"80px"} height={"80px"} color={"#77ab59"} />
          </div>
          <div className="modal-content-heading">
            Thank you for providing the feedback
          </div>
          <div className="modal-content-subheading">
            we will work towards imporving your experience
          </div>
          <div className="modal-content-button">
            <Button
              className="content-button"
              onClick={() => dispatch(setModalShow(false))}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FormModal;
