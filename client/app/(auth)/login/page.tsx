import { Label } from '@radix-ui/react-dropdown-menu';
import './Login.css'
import { Input } from "@/components/ui/input"

const Login = () => {
   return (
      <section className="login-layout">
           <div className="login-container">
        <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label >Email</Label>
      <Input type="email" id="email" placeholder="johDoe@gmail.com" />
    </div>
       <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label >Password</Label>
      <Input type="password" id="password" placeholder="mysecretpass" />
    </div>
      </div>
      </section>
    
   );
}
export default Login