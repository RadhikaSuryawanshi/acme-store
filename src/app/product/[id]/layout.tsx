import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-gray-50 ">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}
