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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
const AccountSettings = ({user}) => {
  return (
    <div className=" md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto  ">
      <div className="grid gap-6 ">
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
                 <CardHeader className="flex flex-row justify-between">
                    <div>
                        <CardTitle>User Avatar</CardTitle>
              <CardDescription>Update your profile picture.</CardDescription>
                    </div>
                    <div>
                       <CardTitle>User Cover</CardTitle>
              <CardDescription>Update your profile cover.</CardDescription>
                    </div>
                  
             
              
            </CardHeader>
            <CardContent>
              <div className="flex flex-row justify-between">
                <img
                  alt="User avatar"
                  className="aspect-square w-1/5 rounded-md object-cover"
                  height="30"
                  src={user.picture}
                  width="30"
                       />
                       <div className="bg-green-900 w-56 h-56 ">
                          
                       </div>
                {/* <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                  <Button variant="secondary" size="sm">
                    <TrashIcon className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>My Account</CardTitle>
              <CardDescription>
                View and update your profile information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"
                    defaultValue="John Doe"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full"
                    defaultValue="john@example.com"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    className="w-full"
                    defaultValue="johndoe"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    defaultValue="I'm a software engineer and I love to code!"
                    className="min-h-32"
                  />
                </div>
              </div>
            </CardContent>
          
          </Card>
         
        </div>

    
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
            <CardDescription className="text-red-600">
              Potentially destructive actions that should be used with caution.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-neutral-300">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Delete Account</h3>
              <p className="text-muted-foreground">
                This will permanently delete your project and all associated
                data. This action cannot be undone.
              </p>
              </div>
              
              <Button className="bg-red-700 hover:bg-red-800">Delete Project</Button>
            </div>
            
          </CardContent>
        </Card>
        <CardFooter>
          <Button className="bg-neutral-900 ml-auto text-neutral-200 hover:bg-neutral-950">Save Changes</Button>
        </CardFooter>
      </div>
    </div>
  );
};


export default AccountSettings;
