"use client";

import "./Login.css";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { Button } from "@/components/ui/button"
import { useAuthContext } from "@/contexts/AuthContext2";
import { signIn } from '../../../services/auth/auth.service';
import { useRouter } from 'next/navigation'
import Link from "next/link";
const Login = () => {
    const router = useRouter()
   const { setUser } = useAuthContext();
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
    const result = await signIn(form.email, form.password, setUser)
    if (result) {
      router.replace('/home')
    }
  };


  return (
    <section className="login-layout">
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
              
          <Button variant="outline">Sign In</Button>
      <Link href="signup">
        <p> SignUp</p>
      </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
