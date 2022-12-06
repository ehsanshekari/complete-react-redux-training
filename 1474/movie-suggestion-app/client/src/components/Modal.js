import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="modal fade show"
      id="exampleModalLive"
      tabindex="-1"
      aria-labelledby="exampleModalLiveLabel"
      style={{ display: 'block', backgroundColor: '#F2F2F2' }}
      aria-modal="true"
      role="dialog"
      onClick={props.onCancel}
    >
      <div
        className="modal-dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLiveLabel">
              {props.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.onCancel}
            ></button>
          </div>
          <div className="modal-body">{props.body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={props.onCancel}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.onApply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
