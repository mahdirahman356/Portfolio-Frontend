import Image from "next/image";
import { Facebook, Github, Instagram, Layers, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const About = () => {
    return (
        <section className="space-y-20">
            <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center lg:justify-center  gap-8">
                <div className="lg:max-w-sm space-y-6">
                    <div>
                        <span className="py-2 px-5 font-semibold bg-primary text-muted rounded-r-3xl rounded-tl-3xl">
                            Hello I&apos;m
                        </span>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">Kashim Rahman <span className="text-primary">Mahdi</span></h1>
                        <p className="font-semibold text-primary mb-5">Full Stack Web Developer</p>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex gap-2 text-muted-foreground text-sm">
                            <span className="mt-1"><Mail size={18} /></span>
                            <span>mahdi.rahman356@gmail.com</span>
                        </li>
                        <li className="flex gap-2 text-muted-foreground text-sm">
                            <span className="mt-1"><Phone size={18} /></span>
                            <span>+8801321375186</span>
                        </li>
                        <li className="flex gap-2 text-muted-foreground text-sm">
                            <span className="mt-1"><MapPin size={18} /></span>
                            <span>sylhet, sunamganj, mollikpur</span>
                        </li>
                    </ul>
                    <div className="text-muted flex justify-around sm:w-64">
                        <span className="bg-primary p-2 rounded-full"> <Facebook size={18} /></span>
                        <span className="bg-primary p-2 rounded-full"><Instagram size={18} /></span>
                        <span className="bg-primary p-2 rounded-full"><Linkedin size={18} /></span>
                        <span className="bg-primary p-2 rounded-full"><Github size={18} /></span>
                    </div>

                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <Image height={500} width={400} className="w-52 h-52 md:w-80 md:h-80 shadow-2xl object-cover rounded-full" src="/hero-section-image.png" alt="Avatar Image" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-3">About <span className="text-primary">Me</span></h1>
                    <p className="text-muted-foreground lg:w-sm">I build modern, responsive, and high-performance web applications using the latest technologies like Next.js, React, and Node.js, focusing on creating seamless user experiences, clean code architecture, and scalable solutions for both personal and professional projects.</p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2"><Layers className="text-primary" /> <span>Skills</span></h1>
                    <div className="flex flex-wrap text-primary gap-4 text-sm">
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> HTML </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> CSS </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Tailwind CSS </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> JavaScript </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Reactjs </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Nextjs </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> NextAuth </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Firebase </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> TypeScript </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> React Hook Form </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Nodejs </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Expressjs </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> MongoDB </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Mongoose </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Json Web Token </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> PostgreSQL </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Shadcn UI </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Redux </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> TanStack Query </span>
                        <span className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> Zod </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;