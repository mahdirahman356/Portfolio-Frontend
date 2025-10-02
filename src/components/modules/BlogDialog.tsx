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
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

const blogPostSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required"),
  content: z
    .string()
    .nonempty("Content is required")
})

export default function BlogDialog() {

  const form = useForm<z.infer<typeof blogPostSchema>>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      content: ""
    }
  });

  const onSubmit = async (values: FieldValues) => {
    // const toastId = toast.loading("Logging in...");

    try {
      const slug = values.title.toLowerCase().split(" ").join("-")
      const blog = {
        ...values,
        slug
      }

      console.log(blog)
      // if (result?.ok) {
      //     toast.success("Login successful!", { id: toastId });
      //     window.location.href = "/dashboard";
      // } else {
      //     toast.error("Invalid email or password", { id: toastId });
      // }


    } catch (err) {
      // toast.error("Something went wrong. Please try again.", { id: toastId });
      console.error(err);
    }
  }; return (
    <Dialog>
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
            {/* Email */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
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
            {/* Password */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
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
