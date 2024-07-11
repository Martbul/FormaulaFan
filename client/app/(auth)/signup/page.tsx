"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext2";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { signUp } from "@/services/auth/auth.service";
import './Signup.css'
const SignUp = () => {
  
    const router = useRouter();
    const { setUser } = useAuthContext();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isPending, startTransition] = useTransition();

  const [form, setForm] = useState({
      username: "",
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(form)
     const result = await signUp(
       form.username,
       form.email,
       form.password,
       setUser
     );
      if (result) {
        router.replace("/home");
      }
    };
  return (
     <section className="signup-layout">
      <div className="signup-container"><form onSubmit={handleSubmit}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-3xl">Register</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Full name</Label>
            <Input
              id="username"
              type="text"
              placeholder="John Doe"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="johnDoe@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="mysecretpass"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <Button className="w-full">Sign Up</Button>
        </CardContent>
      </Card>
    </form></div></section>
    
  );
}
export default SignUp