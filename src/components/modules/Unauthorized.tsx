import Link from "next/link";
import { Button } from "../ui/button";

const Unauthorized = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-muted">
            <div>
                <h1 className="text-4xl font-bold text-destructive mb-4">403 - Unauthorized</h1>
                <p className="text-lg text-muted-foreground mb-6">
                    You don’t have permission to access this page.
                </p>
                <div className="flex gap-4">
                    <Link href="/">
                        <Button>
                            Go Home
                        </Button>
                    </Link>
                    <Link
                        href="/login">
                        <Button className="bg-muted text-muted-foreground">
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;