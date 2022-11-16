import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../heroes/hooks/useForm";
import { AuthContext } from "../context";

export const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const validationsForm = (formState) => {
    let errors = {};
    if (!formState.name.trim()) {
      errors.name = "User is required";
    }
    if (!formState.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const { name, password, onInputChange, errors, onInputBlur } = useForm(
    {
      name: "",
      password: "",
    },
    validationsForm
  );

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    const lastPath = localStorage.getItem("lastPath") || "/";

    loginUser(name);

    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onLogin} className="formLogin">
        <div className="mb-3">
          <label className="form-label">User</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={onInputChange}
            onBlur={onInputBlur}
            required
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
            onBlur={onInputBlur}
            required
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
