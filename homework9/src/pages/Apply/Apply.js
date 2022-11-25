import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

import MainTitle from "../../components/MainTitle";
import DescriptionText from "../../components/DescriptionText/DescriptionText";

import "./Apply.css";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import { Link } from "react-router-dom";

const options = [
  { value: "Basic Sketching", label: "Basic Sketching" },
  { value: "Watercolor Basics", label: "Watercolor Basics" },
  { value: "Digital Sketching", label: "Digital Sketching" },
];

const groupOptions = [
  { value: "mon/wed/fri 7pm-9pm", label: "mon/wed/fri 7pm-9pm" },
  { value: "mon/wed/fri 6pm-9pm", label: "mon/wed/fri 6pm-9pm" },
  { value: "mon/wed/fri 5pm-9pm", label: "mon/wed/fri 5pm-9pm" },
];

export default function Apply() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* <HeaderBack /> */}
      <main>
        <div className="container apply-container">
          <div className="apply-info-container">
            <MainTitle text="Apply to desired course right away!" />
            <DescriptionText text="Select desired course and group, leave us your contact information and we’ll reach out to you for confirmation and letting you know about further steps" />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <label className="field">
                <span className="input-desc">Course</span>
                <Select
                  options={options}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      width: 300,
                      borderRadius: 10,
                      borderColor: state.isFocused ? "#1B6C71" : "#C2D2D2",
                    }),
                  }}
                />{" "}
              </label>
              <label className="field">
                <span className="input-desc">Group</span>
                <Select
                  options={groupOptions}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      width: 300,
                      borderRadius: 10,
                      borderColor: state.isFocused ? "#1B6C71" : "#C2D2D2",
                    }),
                  }}
                />{" "}
              </label>
              <label className="field">
                <span className="input-desc">Full name</span>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  {...register("user_name", { required: true, minLength: 2 })}
                />
              </label>
              <label className="field">
                <span className="input-desc">E-mail</span>
                <input
                  type="email"
                  className="input"
                  placeholder="email@email.com"
                  {...register("user_email", { required: true })}
                />
              </label>
              <label className="field">
                <span className="input-desc">Phone number</span>
                <input
                  type="tel"
                  className="input"
                  placeholder="(___)___-__-__"
                  {...register("user_phone", { required: true })}
                />
              </label>
              <Link to="/confirmation" className="link">
                <button className="form-button disabled" type="submit">
                  Apply
                </button>
              </Link>
            </form>
          </div>
          <img src="./img/apply.jpg" alt="course" className="apply-img" />
        </div>
      </main>
    </>
  );
}
