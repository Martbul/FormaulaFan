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
import { PadlockIcon } from "@/utils/svgIcons";

const ChatSettings = ({ user }) => {
  return (
    <div className=" md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto  ">
      <div className="grid gap-6 ">
       
          

        <Card>
          <CardHeader>
            <CardTitle>How we can use your data</CardTitle>
            <CardDescription>
              Choose what you want to be notified about.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className=" flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="p-r-image remove-selecting-text">
                    <PadlockIcon className="w-4 h-4" />
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
            <div className=" flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="p-r-image remove-selecting-text">
                    <PadlockIcon className="w-4 h-4" />
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
            <div className=" flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="p-r-image remove-selecting-text">
                    <PadlockIcon className="w-4 h-4" />
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
            <div className=" flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="p-r-image remove-selecting-text">
                    <PadlockIcon className="w-4 h-4" />
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
          <Button className="bg-neutral-900 ml-auto text-neutral-200">
            Save Changes
          </Button>
        </CardFooter>
      </div>
    </div>
  );
};

export default ChatSettings;
