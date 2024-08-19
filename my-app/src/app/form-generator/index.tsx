"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type Props = {};

export const FormGenerator = (props: Props) => {
  const [open, setOpen] = useState(false);
  const onFormCreate = () => {
    setOpen(true);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={onFormCreate}>Create New Form</Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Form</DialogTitle>
          <form>
            <div className="grid gap-4 py-4">
              <Textarea
                required
                placeholder="Share your form details here"
                id="description"
                name="description"
              />
            </div>
          </form>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"link"}>Create manually</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
