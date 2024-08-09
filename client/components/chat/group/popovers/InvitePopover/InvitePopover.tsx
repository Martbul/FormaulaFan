import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InvitePopover = () => {
  const handleCopy = () => {
    const link = document.getElementById("link") as HTMLInputElement;
    if (link) {
      navigator.clipboard.writeText(link.value);
    }
  };

  return (
    <DialogContent className="border-none bg-[#393a3f] sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-[#ebedf0]">Invite Link</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to join this group
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            className="border-none bg-[#2c2d30] text-[#ebedf0] outline-none"
            id="link"
            defaultValue="https://ui.shadcn.com/docs/installation"
            readOnly
          />
        </div>
        <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
          <span className="sr-only">Copy</span>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="border-none bg-[#2f2f2f] text-[#ebedf0] outline-none"
          >
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default InvitePopover;
