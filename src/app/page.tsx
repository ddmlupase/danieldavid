import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold font-reddit-sans">Hello, world!</h1>
      </main>
    </div>
  );
}

