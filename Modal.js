import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Modal.css'

const Modal = (props) => {
  const dispatch = useDispatch();

  const hideModal = (e) => {
    e.preventDefault();
    dispatch({ type: 'HIDE_MODAL' });
  }
  return (
    <>
      <div className='co opacity-75"'>
        {props.isModalVisible && (
          <div>
            <div class="modal-header">
              <h3 class="align-center text-danger">Alert!!</h3>
              <button type="button align-left" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => hideModal(e)}></button>
            </div>
            <div className='text-white'>
              {props.Message}
            </div>

          </div>
        )}
      </div>
    </>
  );
}

export default Modal;