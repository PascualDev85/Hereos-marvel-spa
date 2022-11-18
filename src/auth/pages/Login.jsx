import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../heroes/hooks/useForm";
import { AuthContext } from "../context";

const validationsForm = (formState) => {
  let errors = {};

  if (formState.name.trim().length < 4 || formState.name.trim().length > 12) {
    errors.name = "Must be between 3 and 12 characters";
  } else if (!formState.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const { name, password, onInputChange, errors } = useForm(
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
            required
            autoComplete="off"
          />
          {errors.name && (
            <small className="text-danger m-0">{errors.name}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={errors.name || errors.password}
        >
          Login
        </button>
      </form>
    </div>
  );
};
