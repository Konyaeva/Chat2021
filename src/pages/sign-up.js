import { useState } from "react";
import { Input, Button } from "@mui/material";
import { firebaseApp } from "../api/firebase";

export const SignUpPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const createUser = () => {
    if (!form.email || !form.password) {
      return;
    }

    return firebaseApp
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password);
  };

  return (
    <div>
      <h1>Sign up</h1>

      <Input
        fullWidth
        placeholder="Введите email..."
        value={form.email}
        inputProps={{
          "data-name": "email",
        }}
        onChange={handleChangeForm}
      />
      <Input
        fullWidth
        placeholder="Введите password..."
        value={form.password}
        inputProps={{
          "data-name": "password",
        }}
        onChange={handleChangeForm}
      />

      <Button onClick={createUser}>Регистрация</Button>
    </div>
  );
};
