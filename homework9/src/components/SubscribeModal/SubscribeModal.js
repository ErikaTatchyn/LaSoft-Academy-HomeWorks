import React from "react";
import { useForm } from "react-hook-form";

import "./SubscribeModal.css";

function SubscribeModal({ open, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div data-modal className={`backdrop ${!open ? "is-hidden" : ""}`}>
      <div className="modal">
        <div className="modal-container">
          <svg className="modal-close-btn" onClick={onClose}>
            <use href="./img/symbol-defs.svg#icon-close"></use>
          </svg>
          <div className="email-inputs-wrapper">
            <h1 className="modal-text">Give us your email to stay tuned!</h1>
            <form className="email-inputs" onSubmit={handleSubmit(onSubmit)}>
              <label className="email-field">
                <input
                  type="email"
                  className="input modal-input"
                  placeholder="email@email.com"
                  {...register("user_email", { required: true })}
                />
              </label>
              <button type="submit" className="button email-form-submit">
                Subscribe
              </button>
            </form>
          </div>
          <p className="text">
            You always can undo that in any of your received emails{" "}
          </p>
        </div>
        <img src="./img/brushes.jpg" alt="brushes" className="modal-img"></img>
      </div>
    </div>
  );
}

export default SubscribeModal;
