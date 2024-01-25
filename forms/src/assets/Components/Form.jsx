import React from "react";
import { useForm } from "react-hook-form";
import "./Forms.css"

const Form = () => {
    const [success, setSuccess]=React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit=()=>{
    setSuccess(true)
  }
  return (
    <div>
        {
            success && (
                <div>
                    <p className="success">Registration Subccessful </p>
                </div>
            )
        }
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstname"
          {...register("firstname", { required: "First name is required" })}
        />
        {errors.firstname && <p className="err">{errors.firstname.message}</p>}
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastname"
          {...register("lastname", { required: "Last name is required" })}
        />
        {errors.lastname && <p className="err">{errors.lastname.message}</p>}
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter correct Email",
            },
          })}
        />
        {errors.email && <p className="err">{errors.email.message}</p>}
        <label htmlFor="">Password </label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password should be at least 5 characters",
            },
            maxLength: {
                value: 20,
                message: "Password cannot be more than 20 characters",
              }
          })}
        />
        {errors.password && <p className="err">{errors.password.message}</p>}
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default Form;
