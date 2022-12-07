import Select from "react-select";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import MainTitle from "../../components/MainTitle";
import Error from "../../components/Error/Error";
import DescriptionText from "../../components/DescriptionText/DescriptionText";
import api from "../../api";

import "./Apply.css";

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
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await api.post("/form/apply", data);

      navigate("/confirmation");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main>
        <div className="container apply-container">
          <div className="apply-info-container">
            <MainTitle text="Apply to desired course right away!" />
            <DescriptionText text="Select desired course and group, leave us your contact information and we’ll reach out to you for confirmation and letting you know about further steps" />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <label className="field">
                <span className="input-desc">Course</span>
                <div className="input-container">
                  <Controller
                    {...register("course", {
                      required: true,
                    })}
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={options}
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            width: 300,
                            fontSize: 14,
                            borderRadius: 10,
                            boxShadow: "none",
                            borderColor: state.isFocused
                              ? "#1B6C71"
                              : "#C2D2D2",
                          }),
                        }}
                      />
                    )}
                  />
                  {errors.course && <Error />}{" "}
                </div>
              </label>
              <label className="field">
                <span className="input-desc">Group</span>
                <div className="input-container">
                  <Controller
                    control={control}
                    {...register("group", { required: true })}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={groupOptions}
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            width: 300,
                            borderRadius: 10,
                            fontSize: 14,
                            boxShadow: "none",
                            borderColor: state.isFocused
                              ? "#1B6C71"
                              : "#C2D2D2",
                          }),
                        }}
                      />
                    )}
                  />
                  {errors.group && <Error />}
                </div>
              </label>
              <label className="field">
                <span className="input-desc">Full name</span>
                <div className="input-container">
                  <input
                    type="text"
                    className="input"
                    placeholder=""
                    {...register("userName", {
                      required: true,
                      minLength: 4,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    aria-invalid={errors.userName ? "true" : "false"}
                  />
                  {errors.userName && <Error />}
                </div>
              </label>
              <label className="field">
                <span className="input-desc">E-mail</span>
                <div className="input-container">
                  <input
                    type="email"
                    className="input"
                    placeholder="email@email.com"
                    {...register("userEmail", { required: true })}
                  />
                  {errors.userEmail && <Error />}
                </div>
              </label>
              <label className="field">
                <span className="input-desc">Phone number</span>
                <div className="input-container">
                  <input
                    type="tel"
                    className="input"
                    placeholder="(___)___-__-__"
                    {...register("userPhone", {
                      pattern: /^[0-9]+$/i,
                      required: true,
                      minLength: 9,
                    })}
                  />
                  {errors.userPhone && <Error />}
                </div>
              </label>

              <input
                type="submit"
                className="form-button"
                value="Apply"
                disabled={isDirty && !isValid}
              />
            </form>
          </div>
          <img src="./img/apply.jpg" alt="course" className="apply-img" />
        </div>
      </main>
    </>
  );
}
