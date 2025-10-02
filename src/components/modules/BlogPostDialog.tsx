"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { toast } from "sonner"
import { useState } from "react"

const blogPostSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required"),
  content: z
    .string()
    .nonempty("Content is required")
})

export default function BlogPostDialog() {

  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof blogPostSchema>>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      content: ""
    }
  });

  const onSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Loading...");

    try {
      const slug = values.title.toLowerCase().split(" ").join("-")
      const blog = {
        ...values,
        slug
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(blog)
      })
      const result = await res.json()
      if (result?.id) {
        toast.success("Blog created successful!", { id: toastId });
        setOpen(false)
        window.location.reload();
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.", { id: toastId });
      console.error(err);
    }
  }; return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="p-3 bg-primary rounded-full"><PlusIcon size={18} /></Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2 mb-6">
          <DialogHeader>
            <DialogTitle className="sm:text-center">Create a New Blog Post</DialogTitle>
          </DialogHeader>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md"
          >
            {/* title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Title"
                      className="rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Content"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2 rounded-md">
              Post
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
