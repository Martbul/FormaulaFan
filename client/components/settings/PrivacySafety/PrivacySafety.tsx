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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { PadlockIcon } from "@/utils/svgIcons";

const PrivacySafety = ({ user }) => {
  return (
    <div className="mx-auto w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
      <div className="grid gap-6">
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Update your password and two-factor authentication.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" className="w-full" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="two-factor">Two-Factor Auth</Label>
                  <Select>
                    <SelectTrigger
                      id="two-factor"
                      aria-label="Select two-factor authentication"
                    >
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enabled">Enabled</SelectItem>
                      <SelectItem value="disabled">Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How we can use your data</CardTitle>
            <CardDescription>
              Choose what you want to be notified about.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="p-r-image remove-selecting-text">
                    <PadlockIcon className="h-4 w-4" />
                  </div>
                  <div className="p-r-title white-title-color remove-selecting-text">
                    <p>Private Channel</p>
                  </div>
                </div>
                <div>
                  <p className="remove-selecting-text">
                    Only selected memners and roles will be able to see this
                    channel
                  </p>
                </div>
              </div>
              <div className="private-channel-switch">
                <Switch
                  // checked={isPrivateChannel}
                  // onCheckedChange={() => setIsPrivateChannel(!isPrivateChannel)}
                  aria-readonly
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="p-r-image remove-selecting-text">
                    <PadlockIcon className="h-4 w-4" />
                  </div>
                  <div className="p-r-title white-title-color remove-selecting-text">
                    <p>Private Channel</p>
                  </div>
                </div>
                <div>
                  <p className="remove-selecting-text">
                    Only selected memners and roles will be able to see this
                    channel
                  </p>
                </div>
              </div>
              <div className="private-channel-switch">
                <Switch
                  // checked={isPrivateChannel}
                  // onCheckedChange={() => setIsPrivateChannel(!isPrivateChannel)}
                  aria-readonly
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="p-r-image remove-selecting-text">
                    <PadlockIcon className="h-4 w-4" />
                  </div>
                  <div className="p-r-title white-title-color remove-selecting-text">
                    <p>Private Channel</p>
                  </div>
                </div>
                <div>
                  <p className="remove-selecting-text">
                    Only selected memners and roles will be able to see this
                    channel
                  </p>
                </div>
              </div>
              <div className="private-channel-switch">
                <Switch
                  // checked={isPrivateChannel}
                  // onCheckedChange={() => setIsPrivateChannel(!isPrivateChannel)}
                  aria-readonly
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="p-r-image remove-selecting-text">
                    <PadlockIcon className="h-4 w-4" />
                  </div>
                  <div className="p-r-title white-title-color remove-selecting-text">
                    <p>Private Channel</p>
                  </div>
                </div>
                <div>
                  <p className="remove-selecting-text">
                    Only selected memners and roles will be able to see this
                    channel
                  </p>
                </div>
              </div>
              <div className="private-channel-switch">
                <Switch
                  // checked={isPrivateChannel}
                  // onCheckedChange={() => setIsPrivateChannel(!isPrivateChannel)}
                  aria-readonly
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <CardFooter>
          <Button className="ml-auto bg-neutral-900 text-neutral-200">
            Save Changes
          </Button>
        </CardFooter>
      </div>
    </div>
  );
};

export default PrivacySafety;
