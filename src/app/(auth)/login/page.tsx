"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { toast } from "sonner";
import { FieldValues, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";


const loginSchema = z.object({
    email: z
        .email()
        .nonempty("Email is required"),
    password: z
        .string()
        .nonempty("Password is required")
})

const LoginPage = () => {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (values: FieldValues) => {
        const toastId = toast.loading("Logging in...");

        try {
            const result = await signIn("credentials", {
                ...values,
                redirect: false
            });

            if (result?.ok) {
                toast.success("Login successful!", { id: toastId });
                window.location.href = "/dashboard";
            } else {
                toast.error("Invalid email or password", { id: toastId });
            }


        } catch (err) {
            toast.error("Something went wrong. Please try again.", { id: toastId });
            console.error(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-muted">
            <div className="space-y-6 w-full max-w-sm bg-primary-foreground p-8 rounded-lg shadow-md">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 w-full max-w-md"
                    >
                        <h2 className="text-2xl font-bold text-center">Login Your Account</h2>

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
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
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-2">
                            Login
                        </Button>

                        <div className="flex items-center justify-center space-x-2">
                            <div className="h-px w-16 bg-muted-foreground" />
                            <span className="text-sm text-muted-foreground">or continue with</span>
                            <div className="h-px w-16 bg-muted-foreground" />
                        </div>
                    </form>
                </Form>
                {/* Social Login Buttons */}
                <div className="flex flex-col gap-3 mt-4">

                    <Button
                        variant="outline"
                        className="flex items-center justify-center gap-2 bg-muted"
                    >
                        {/* Google */}
                        <Image
                            src="https://img.icons8.com/color/24/google-logo.png"
                            alt="Google"
                            className="w-5 h-5"
                            width={20}
                            height={20}
                        />
                        Login with Google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;