import Image from 'next/image';
import Navigation from '../../components/navigation/Navigation';
import icons from '../../constants/icons';
import './Settings.css'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Settings = () => {
   return (
     <>
       <div className="layout">
         <div className="left">
           <Navigation />
         </div>

         <div className="flex flex-col w-full min-h-screen settings">
           <div className="flex w-full min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
            
             <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto">
               <nav className="text-sm text-muted-foreground grid gap-4 nav-settings">
                 <Link
                   href="#"
                   className="font-semibold text-primary "
                   prefetch={false}
                 >
                   General
                 </Link>
                 <Link href="#" prefetch={false}>
                   Domains
                 </Link>
                 <Link href="#" prefetch={false}>
                   Log Drains
                 </Link>
                 <Link href="#" prefetch={false}>
                   Webhooks
                 </Link>
                 <Link href="#" prefetch={false}>
                   Integrations
                 </Link>
                 <Link href="#" prefetch={false}>
                   Security
                 </Link>
                 <Link href="#" prefetch={false}>
                   Advanced
                 </Link>
               </nav>
               <div className="grid gap-6">
                 <Card>
                   <CardHeader>
                     <CardTitle>Project Name</CardTitle>
                     <CardDescription>
                       Used to identify your project in the dashboard.
                     </CardDescription>
                   </CardHeader>
                   <CardContent>
                     <form>
                       <Input placeholder="Project Name" />
                     </form>
                   </CardContent>
                   <CardFooter className="border-t p-6">
                     <Button>Save</Button>
                   </CardFooter>
                 </Card>
                 <Card>
                   <CardHeader>
                     <CardTitle>Root Directory</CardTitle>
                     <CardDescription>
                       The directory within your project, in which your code is
                       located.
                     </CardDescription>
                   </CardHeader>
                   <CardContent>
                     <form className="flex flex-col gap-4">
                       <Input placeholder="Project Name" defaultValue="/web" />
                       <div className="flex items-center space-x-2">
                         {/* <Checkbox id="include" defaultChecked /> */}
                         <label
                           htmlFor="include"
                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                         >
                           Include files from outside of the Root Directory
                         </label>
                       </div>
                     </form>
                   </CardContent>
                   <CardFooter className="border-t p-6">
                     <Button>Save</Button>
                   </CardFooter>
                 </Card>
                 <Card>
                   <CardHeader>
                     <CardTitle>Notifications</CardTitle>
                     <CardDescription>
                       Choose what you want to be notified about.
                     </CardDescription>
                   </CardHeader>
                   <CardContent className="grid gap-1">
                     <div className="-mx-2 flex items-start gap-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                       <BellIcon className="mt-px h-5 w-5" />
                       <div className="space-y-1">
                         <p className="text-sm font-medium leading-none">
                           Everything
                         </p>
                         <p className="text-sm text-muted-foreground">
                           Email digest, mentions & all activity.
                         </p>
                       </div>
                     </div>
                     <div className="-mx-2 flex items-start gap-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                       <AtSignIcon className="mt-px h-5 w-5" />
                       <div className="space-y-1">
                         <p className="text-sm font-medium leading-none">
                           Available
                         </p>
                         <p className="text-sm text-muted-foreground">
                           Only mentions and comments.
                         </p>
                       </div>
                     </div>
                     <div className="-mx-2 flex items-start gap-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                       <EyeOffIcon className="mt-px h-5 w-5" />
                       <div className="space-y-1">
                         <p className="text-sm font-medium leading-none">
                           Ignoring
                         </p>
                         <p className="text-sm text-muted-foreground">
                           Turn off all notifications.
                         </p>
                       </div>
                     </div>
                   </CardContent>
                 </Card>
                 <Card>
                   <CardHeader>
                     <CardTitle>Danger Zone</CardTitle>
                     <CardDescription>
                       Potentially destructive actions that should be used with
                       caution.
                     </CardDescription>
                   </CardHeader>
                   <CardContent className="grid gap-4">
                     <div className="grid gap-2">
                       <h3 className="text-lg font-semibold">Delete Project</h3>
                       <p className="text-muted-foreground">
                         This will permanently delete your project and all
                         associated data. This action cannot be undone.
                       </p>
                       <Button variant="destructive">Delete Project</Button>
                     </div>
                     <div className="grid gap-2">
                       <h3 className="text-lg font-semibold">
                         Deactivate Account
                       </h3>
                       <p className="text-muted-foreground">
                         This will deactivate your account and remove all your
                         data. You will no longer be able to access your
                         account.
                       </p>
                       <Button variant="destructive">Deactivate Account</Button>
                     </div>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
};


function AtSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function EyeOffIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
}


function FrameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default Settings;