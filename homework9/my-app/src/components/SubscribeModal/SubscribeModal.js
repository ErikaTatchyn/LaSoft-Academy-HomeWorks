import React from "react";
import { useForm } from "react-hook-form";

import "./SubscribeModal.css";

function SubscribeModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // (() => {
  //   const refs = {
  //     openModalBtn: document.querySelector("[data-modal-open]"),
  //     closeModalBtn: document.querySelector("[data-modal-close]"),
  //     modal: document.querySelector("[data-modal]"),
  //   };

  //   refs.openModalBtn.addEventListener("click", toggleModal);
  //   refs.closeModalBtn.addEventListener("click", toggleModal);

  //   function toggleModal() {
  //     refs.modal.classList.toggle("is-hidden");
  //   }
  // })();

  return (
    <div class="backdrop " data-modal>
      <div class="modal">
        <div class="modal-container">
          <svg class="modal-close-btn">
            <use href="./img/symbol-defs.svg#icon-close"></use>
          </svg>
          <div class="email-inputs-wrapper">
            <h1 class="modal-text">Give us your email to stay tuned!</h1>
            <form class="email-inputs" onSubmit={handleSubmit(onSubmit)}>
              <label class="email-field">
                <input
                  type="email"
                  className="input modal-input"
                  placeholder="email@email.com"
                  {...register("user_email", { required: true })}
                />
              </label>
              <button type="submit" class="button email-form-submit">
                Subscribe
              </button>
            </form>
          </div>
          <p class="text">
            You always can undo that in any of your received emails{" "}
          </p>
        </div>
        <img src="./img/brushes.jpg" alt="brushes" className="modal-img"></img>
      </div>
    </div>
  );
}

export default SubscribeModal;
