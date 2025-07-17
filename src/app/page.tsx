'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
    <Header />
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Acá va a estar la página principal de la revista.
      </main>
      <Footer />
    </div>
  </>
  );
}