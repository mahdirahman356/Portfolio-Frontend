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
import { Textarea } from "../ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { FieldValues, useForm } from "react-hook-form"
import { useEffect, useState } from "react"

export default function BlogUpdateDialog({ slug }: { slug: string }) {

    const [open, setOpen] = useState(false)
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`)
            const data = await res.json()
            setBlog(data)
            form.reset({
                title: data.title || "",
                content: data.content || ""
            })
        }
        fetchPosts()
    }, [slug])

    console.log(blog)

    const form = useForm({
        defaultValues: {
            title: "",
            content: ""
        }
    });

    const onSubmit = async (values: FieldValues) => {
        // const toastId = toast.loading("Logging in...");

        try {
            const slug = values.title.toLowerCase().split(" ").join("-")
            const updatedBlog = {
                ...values,
                slug
            }

            console.log(updatedBlog)
            setOpen(false)
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
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
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
