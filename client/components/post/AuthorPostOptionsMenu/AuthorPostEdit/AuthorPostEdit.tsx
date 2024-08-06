import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/AuthContext2";
import { editPost } from "@/services/post/post.service";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type EditFormData = {
  textContent: string;
};

const AuthorPostEdit = ({ textContent, postId }) => {
  const { toast } = useToast();

  const { user } = useAuthContext();
  const router = useRouter();

   const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<EditFormData>({
    defaultValues: {
      textContent: textContent,
    },
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (data: EditFormData) => {
      const { textContent } = data;
      const response = await editPost(
        textContent,
        user.email,
        postId as string,
      );
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Successfully edited your post",
      });
    },
  });

  const onSubmit = (data: EditFormData) => {
    mutate(data);
  };

  return (
    <DialogContent className="bg-zinc-800 outline-none border-none text-neutral-200">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div>
            <Input
              id="textContent"
              type="text"
              className="bg-neutral-800 p-4 my-4"
            
              {...register("textContent", {})}
            />
            {errors.textContent && (
              <span className="text-red-600">{errors.textContent.message}</span>
            )}
          </div>
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" className="bg-neutral-200 text-neutral-800">
              Edit
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
export default AuthorPostEdit;
