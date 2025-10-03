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
import { toast } from "sonner"
import { useState } from "react"

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
  const [open, setOpen] = useState(false)

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
    const toastId = toast.loading("Loading...");

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
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(project)
      })
      const result = await res.json()
      console.log(result)
      if (result?.id) {
        toast.success("Project created successful!", { id: toastId });
        setOpen(false)
        window.location.reload();
      }
      else if (result?.code === "P2002") {
        toast.error("Project with this title already exist", { id: toastId });
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
