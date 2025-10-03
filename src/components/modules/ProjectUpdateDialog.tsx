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
import { toast } from "sonner"

export default function ProjectUpdateDialog({ slug }: { slug: string }) {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`)
            const data = await res.json()
            form.reset({
                title: data.title || "",
                description: data.description || "",
                liveLink: data.liveLink || "",
                repoLink: data.repoLink || "",
                thumbnail: data.thumbnail || "",
                features: data.features || "",
            })
        }
        fetchPosts()
    }, [slug])

    const form = useForm({
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
            const updatedSlug = values.title.toLowerCase().split(" ").join("-")
            const updatedProject = {
                ...values,
                slug: updatedSlug,
                features:
                    values.features
                        .toString()
                        .split(",")
                        .map((tag: string) => tag.trim()),
            }

            console.log(updatedProject)
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(updatedProject)
            })
            const result = await res.json()
            console.log(result)
            if (result?.id) {
                toast.success("Project updated successful!", { id: toastId });
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-muted-foreground">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
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
                                    <FormLabel>Title</FormLabel>
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
                                    <FormLabel>Description</FormLabel>
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
                                    <FormLabel>Project Live Link</FormLabel>
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
                                    <FormLabel>Project Repo Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Project Repo Link"
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
                                    <FormLabel>Project Image</FormLabel>
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
                                    <FormLabel>Features</FormLabel>
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
