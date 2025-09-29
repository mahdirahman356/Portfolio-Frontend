import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
    return (
        <header>
            <div className="lg:flex items-center justify-between gap-8">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-xl">
                        <h1 className="text-3xl md:text-5xl font-bold ubuntu mb-6">Hi there i&apos;m <br /> Kashim Rahman <br /> <span className="text-primary">Mahdi</span></h1>
                        <p className=" text-muted-foreground mb-6">I build modern, responsive, and high-performance web applications using the latest technologies like Next.js, React, and Node.js, focusing on creating seamless user experiences, clean code architecture, and scalable solutions for both personal and professional projects.</p>
                        <Link href={"/about"}>
                            <Button>About Me</Button>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex flex-col gap-4 justify-center items-center">
                    <Image height={500} width={400} className="md:w-[500px] md:h-[500px] object-cover rounded-xl" src="/hero-section-image.png" alt="Avatar Image" />
                </div>
            </div>
        </header>

    );
};

export default Hero;