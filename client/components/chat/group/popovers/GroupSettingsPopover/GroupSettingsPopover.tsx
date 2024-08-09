import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const GroupSettingsPopover = () => {
  return (
    <DialogContent className="remove-selecting-text h-full max-h-none w-full max-w-none justify-center border-none bg-zinc-900 outline-none">
      <div className="flex h-full">
        <div className="flex w-[240px] flex-col gap-4 border-r bg-muted p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Server Settings</h2>
            <div></div>
          </div>
          <nav className="flex flex-col gap-2">
            <Link
              href="#"
              className="font-medium text-primary"
              prefetch={false}
            >
              General
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              Roles
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              Channels
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              Integrations
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              Moderation
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              Audit Log
            </Link>
          </nav>
        </div>
        <div className="flex w-full flex-row">
          <div className="overflow-y-auto p-8">
            <div className="grid gap-6">
              <div>
                <h3 className="text-lg font-semibold">General</h3>
                <p className="text-muted-foreground">
                  Configure your server's basic settings.
                </p>
                <div className="mt-4 grid gap-4">
                  <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                    <Label htmlFor="server-name">Server Name</Label>
                    <Input id="server-name" defaultValue="My Discord Server" />
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                    <Label htmlFor="server-icon">Server Icon</Label>
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width="48"
                        height="48"
                        className="rounded-full"
                        alt="Server Icon"
                      />
                      <Button variant="outline">Change</Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                    <Label htmlFor="server-region">Server Region</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us-east-1">
                          US East (N. Virginia)
                        </SelectItem>
                        <SelectItem value="us-west-2">
                          US West (Oregon)
                        </SelectItem>
                        <SelectItem value="eu-west-1">EU (Ireland)</SelectItem>
                        <SelectItem value="ap-southeast-2">
                          Asia Pacific (Sydney)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                    <Label htmlFor="server-description">
                      Server Description
                    </Label>
                    <Textarea
                      id="server-description"
                      placeholder="Describe your server"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Roles</h3>
                <p className="text-muted-foreground">
                  Manage the roles and permissions in your server.
                </p>
                <div className="mt-4 grid gap-4">
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                        A
                      </div>
                      <div>
                        <p className="font-medium">Admin</p>
                        <p className="text-sm text-muted-foreground">
                          Full control of the server
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-bold text-secondary-foreground">
                        M
                      </div>
                      <div>
                        <p className="font-medium">Moderator</p>
                        <p className="text-sm text-muted-foreground">
                          Manage members and channels
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-bold text-muted-foreground">
                        U
                      </div>
                      <div>
                        <p className="font-medium">User</p>
                        <p className="text-sm text-muted-foreground">
                          Standard member permissions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline">Add Role</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Channels</h3>
                <p className="text-muted-foreground">
                  Manage the text and voice channels in your server.
                </p>
                <div className="mt-4 grid gap-4">
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="flex items-center gap-4">
                      <HashIcon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">general</p>
                        <p className="text-sm text-muted-foreground">
                          Your main text channel
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="flex items-center gap-4">
                      <HeadphonesIcon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">voice-chat</p>
                        <p className="text-sm text-muted-foreground">
                          Your main voice channel
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="flex items-center gap-4">
                      <HashIcon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">announcements</p>
                        <p className="text-sm text-muted-foreground">
                          Announcements for your server
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline">Add Channel</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <DialogClose>
              <Button variant="ghost" size="icon" className="rounded-full">
                <XIcon className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
function HashIcon(props) {
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
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  );
}

function HeadphonesIcon(props) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
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
  );
}
export default GroupSettingsPopover;
