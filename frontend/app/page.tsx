import Navbar from "@/components/header/Navbar";
import Footer from '@/components/footer/Footer';
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-secondary flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}