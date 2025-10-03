import Image from "next/image";
import { Facebook, Github, Instagram, Layers, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Key } from "react";
import { Button } from "../ui/button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const About = async () => {

    const res = await fetch(`${baseUrl}/about.json`, {
        cache: "force-cache"
    })
    const details = await res.json()

    console.log(details)

    return (
        <section className="space-y-20">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between  gap-8">
                <div className="lg:max-w-sm space-y-6">
                    <div>
                        <span className="py-2 px-5 font-semibold bg-primary text-muted rounded-r-3xl rounded-tl-3xl">
                            Hello I&apos;m
                        </span>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{details.name}</h1>
                        <p className="font-semibold text-primary mb-5">{details.title}</p>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex gap-2 text-muted-foreground text-sm">
                            <span className="mt-1"><Mail size={18} /></span>
                            <span>{details.contact.email}</span>
                        </li>
                        <li className="flex gap-2 text-muted-foreground text-sm">
                            <span className="mt-1"><Phone size={18} /></span>
                            <span>{details.contact.phone}</span>
                        </li>
                        <li className="flex gap-2 text-muted-foreground text-sm">
                            <span className="mt-1"><MapPin size={18} /></span>
                            <span>{details.contact.location}</span>
                        </li>
                    </ul>
                    <div className="text-muted flex justify-around sm:w-64">
                        <Link href={`${details.socials.facebook}`}>
                            <Button className="bg-primary p-2 rounded-full">
                                <Facebook size={18} />
                            </Button>
                        </Link>
                        <Link href={`${details.socials.instagram}`}>
                            <Button className="bg-primary p-2 rounded-full">
                                <Instagram size={18} />
                            </Button>
                        </Link>
                        <Link href={`${details.socials.linkedin}`}>
                            <Button className="bg-primary p-2 rounded-full">
                                <Linkedin size={18} />
                            </Button>
                        </Link>
                        <Link href={`${details.socials.github}`}>
                            <Button className="bg-primary p-2 rounded-full">
                                <Github size={18} />
                            </Button>
                        </Link>
                    </div>

                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <Image height={500} width={400} className="w-52 h-52 md:w-96 md:h-96 shadow-2xl object-cover rounded-full" src="/hero-section-image.png" alt="Avatar Image" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-3">About <span className="text-primary">Me</span></h1>
                    <p className="text-muted-foreground lg:w-sm">{details.about}</p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2"><Layers className="text-primary" /> <span>Skills</span></h1>
                    <div className="flex flex-wrap text-primary gap-4 text-sm">
                        {details.skills.map((skill: string, index: Key) => (
                            <span key={index} className="border-primary border-2 p-2 rounded-3xl py-2 px-5"> {skill} </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;