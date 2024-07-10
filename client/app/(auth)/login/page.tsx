"use client";

import "./Login.css";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { Button } from "@/components/ui/button"
import { useAuthContext } from "@/contexts/AuthContext2";
import { signIn } from '../../../services/auth/auth.service';

const Login = () => {
   const { user,setUser } = useAuthContext();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isPending, startTransition] = useTransition();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { id, value } = e.target;
  setForm((prevForm) => ({
    ...prevForm,
    [id]: value,
  }));
};

  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     const result = await signIn(form.email, form.password,setUser)
     console.log(result)
    console.log("Form submitted:", form);
  };


  return (
    <section className="login-layout">
        {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              placeholder="johnDoe@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="password">Password</label>
           
            <Input
              type="password"
              id="password"
              placeholder="mysecretpass"
              value={form.password}
              onChange={handleChange}
            />
              </div>
              
          <Button variant="outline">Button</Button>

        </form>
      </div>
    </section>
  );
};

export default Login;
