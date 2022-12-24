import React from "react";

const Modal = ({ children, saveBtnTxt, closeBtnTxt, showFooter, className, modalBody }) => {
  return (
    <div>
      <div
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="cursor-pointer"
      >
        {children}
      </div>

      <div
        className={`${className} modal fade`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{modalBody}</div>
            {showFooter && (
              <div className="modal-footer">
                {closeBtnTxt && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    {closeBtnTxt}
                  </button>
                )}
                {saveBtnTxt && (
                  <button type="button" className="btn btn-primary">
                    {saveBtnTxt}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
