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
import "./Login.css";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { signIn } from "@/services/auth/auth.service";
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
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-3xl">Sing In</CardTitle>
              <CardDescription>
                Enter your information to sign into an existing account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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

              <Button className="w-full">Sign In</Button>
              <Link href="/signup">
              
              <div className="to-signup">
                <p>Don't have an account? Sing Up</p>
              </div>
              </Link>
              
            </CardContent>
          </Card>
        </form>
      </div>
    </section>
  );
};

export default Login;
