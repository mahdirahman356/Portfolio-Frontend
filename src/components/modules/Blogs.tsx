import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Blogs = () => {
    return (
        <div className="space-y-20">
            <div className="space-y-10">
                <h1 className="text-2xl md:text-3xl font-bold"><span className="text-primary">Reflections and practical</span> <br /> guides from my <br />web-dev journey </h1>
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">Explore My Blogs</span>
                    <span className="p-3 bg-muted rounded-full"><ArrowDown size={18} /></span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                <div>
                    <div className="flex p-3">
                        <Image width={100} height={100} className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm">Tom Hank</h1>
                            <p className="text-sm text-muted-foreground">Creative Director</p>
                        </div>
                    </div>
                    <h1 className="mt-6 text-xl font-semibold">
                        What do you want to know about UI
                    </h1>

                    <hr className="w-32 my-6" />

                    <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                        praesentium, alias nam? Tempore
                    </p>
                    <a className="inline-block mt-4 text-primary hover:underline">Read more</a>
                </div>

                <div>
                    <div className="flex p-3">
                        <Image width={100} height={100} className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm">Tom Hank</h1>
                            <p className="text-sm text-muted-foreground">Creative Director</p>
                        </div>
                    </div>
                    <h1 className="mt-6 text-xl font-semibold">
                        What do you want to know about UI
                    </h1>

                    <hr className="w-32 my-6" />

                    <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                        praesentium, alias nam? Tempore
                    </p>
                    <a className="inline-block mt-4 text-primary hover:underline">Read more</a>
                </div>
                
                <div>
                    <div className="flex p-3">
                        <Image width={100} height={100} className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm">Tom Hank</h1>
                            <p className="text-sm text-muted-foreground">Creative Director</p>
                        </div>
                    </div>
                    <h1 className="mt-6 text-xl font-semibold">
                        What do you want to know about UI
                    </h1>

                    <hr className="w-32 my-6" />

                    <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                        praesentium, alias nam? Tempore
                    </p>
                    <a className="inline-block mt-4 text-primary hover:underline">Read more</a>
                </div>

               
            </div>
        </div>
    );
};

export default Blogs;