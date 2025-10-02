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

const projectPostSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required"),
  description: z
    .string()
    .nonempty("Content is required"),
  liveLink: z
    .string()
    .nonempty("Project Live Link is required"),
  repoLink: z
    .string()
    .nonempty("Project Repo Link is required"),
  thumbnail: z
    .string()
    .nonempty("Image is required"),
  features: z
    .string()
    .nonempty("Features is required"),
})

export default function ProjectPostDialog() {

  const form = useForm<z.infer<typeof projectPostSchema>>({
    resolver: zodResolver(projectPostSchema),
    defaultValues: {
      title: "",
      description: "",
      liveLink: "",
      repoLink: "",
      thumbnail: "",
      features: ""
    }
  });

  const onSubmit = async (values: FieldValues) => {
    // const toastId = toast.loading("Logging in...");

    try {
      const slug = values.title.toLowerCase().split(" ").join("-")
      const project = {
        ...values,
        slug,
        features:
          values.features
            .toString()
            .split(",")
            .map((tag: string) => tag.trim()),

      }

      console.log(project)
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
            <DialogTitle className="sm:text-center">Create a New Project</DialogTitle>
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
            {/* description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* live link */}
            <FormField
              control={form.control}
              name="liveLink"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Project Live Link"
                      className="rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* repo link */}
            <FormField
              control={form.control}
              name="repoLink"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Project Repo Link Link"
                      className="rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* thumbnail */}
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Project Image"
                      className="rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* features */}
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Features"
                      className="rounded-md"
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
