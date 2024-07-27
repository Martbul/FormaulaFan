"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext2";
import { ChangeEvent, FormEvent, useState } from "react";
import { signUp } from "@/services/auth/auth.service";

import Link from "next/link";
import { AnimatedCircleIcon, ChromeIcon, GithubIcon } from "@/utils/svgIcons";

const SignUp = () => {
  const router = useRouter();
  const { setUser } = useAuthContext();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

   const handleSubmit = async (e: FormEvent) => {
     setLoading(true);
     e.preventDefault();
     setError(null);

     const result = await signUp(
       form.username,
       form.email,
       form.password,
       setUser
     );

     if (result.success) {
       router.replace("/posts");
     } else {
       setError(result.message || "An error occurred during signup.");
     }

     setLoading(false);
   };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen">
      <div className=" flex flex-col items-center justify-center p-8 bg-white">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Sing Up</CardTitle>
            <CardDescription>
              Start exploring our Formula 1 world today!
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">
                <GithubIcon className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline">
                <ChromeIcon className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="John Doe"
                className="border border-gray-950 p-2"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="border border-gray-950 p-2"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="mysecretpass"
                className="border border-gray-950 p-2"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </CardContent>
          {error && (
            <div className="flex justify-center text-red-600 font-bold mb-4 px-8">
              <p>{error}</p>
            </div>
          )}
          <CardFooter>
            <Button
              className="w-full bg-zinc-950 text-white hover:bg-zinc-700 border border-black"
              onClick={handleSubmit}
            >
              {loading === false ? (
                "Sing Up"
              ) : (
                <AnimatedCircleIcon className="h-9 w-9" />
              )}
            </Button>
          </CardFooter>

          <div className="mb-4 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium underline"
                prefetch={false}
              >
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
      <div className="bg-zinc-950 flex flex-col items-center justify-center p-8">
        <div className="max-w-md space-y-4">
          <h1 className="text-4xl font-bold text-zinc-200">Formula Fan</h1>
          <p className="text-lg text-gray-300">
            Enjoy the world of Formula 1 from anothr angle
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => router.replace("/posts")}
              variant="outline"
              className="text-primary-foreground hover:bg-neutral-400"
            >
              Continue as Guest
            </Button>

            <Link
              className="flex p-2 rounded-md text-sm font-medium items-center rounded bg-zinc-800 text-gray-200 hover:bg-neutral-600"
              href="/signin"
            >
              Sign In Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SignUp;
