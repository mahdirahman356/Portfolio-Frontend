import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:w-[80%] lg:max-w-6xl mx-auto min-h-dvh">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
