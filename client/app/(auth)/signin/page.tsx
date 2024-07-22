"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";


import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ChangeEvent, FormEvent, useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { signIn } from "@/services/auth/auth.service";
import { AnimatedCircleIcon, ChromeIcon, GithubIcon } from "@/app/utils/svgIcons";

const Login = () => {
    const router = useRouter()
   const { setUser } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async(e) => {
     setLoading(true);
     e.preventDefault();
    const result = await signIn(form.email, form.password, setUser)
    if (result) {
       setLoading(false);
      router.replace('/posts')  
    }
     setLoading(false);
    setError("some error");
  };

 return (
   <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen">
     <div className="bg-zinc-950 flex flex-col items-center justify-center p-8">
       <div className="max-w-md space-y-4">
         <h1 className="text-4xl font-bold text-zinc-200">Formula Fan</h1>
         <p className="text-lg text-gray-300">
           Enjoy the world of Formula 1 from anothr angle
         </p>
         <div className="flex gap-4">
           <Button
             variant="outline"
             className="text-primary-foreground hover:bg-primary-foreground/10"
           >
             Continue as Guest
           </Button>

           <Link
             className="flex p-2 rounded-md text-sm font-medium items-center rounded bg-zinc-800 text-gray-200 hover:bg-primary-foreground/90"
             href="/signup"
           >
             Sign Up Now
           </Link>
         </div>
       </div>
     </div>
     <div className="flex flex-col items-center justify-center p-8">
       <Card className="w-full max-w-md shadow-lg">
         <CardHeader className="space-y-1">
           <CardTitle className="text-2xl">Sing In</CardTitle>
           <CardDescription>
             Continue exploring our Formula 1 world today!
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
         <CardFooter>
            <Button
                className="w-full bg-zinc-950 text-white hover:bg-zinc-700 border border-black"
                onClick={handleSubmit}
              >
                  {loading === false ? "Sing In":  <AnimatedCircleIcon className="h-9 w-9" />}
              </Button>
          </CardFooter>
     
         <div className="mb-4 text-center">
           <p className="text-sm text-muted-foreground">
             Don't have an account?{" "}
             <Link
               href="/signup"
               className="font-medium underline"
               prefetch={false}
             >
               Sign up
             </Link>
           </p>
         </div>
       </Card>
     </div>
   </div>
 );
}


export default Login;
