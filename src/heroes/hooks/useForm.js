import { useState } from "react";

export const useForm = (initialForm = {}, validateForm) => {
  const [formState, setFormState] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onInputBlur = (e) => {
    onInputChange(e);
    setErrors(validateForm(formState));
  };

  return {
    ...formState,
    formState,
    errors,
    onInputBlur,
    onInputChange,
    onResetForm,
  };
};
