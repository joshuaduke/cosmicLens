import { Button } from "@/components/ui/button";
import { Telescope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">{/* Hero Section*/}
        <section className="containter mx-auto px-4 py-32">
          <h2 className="text-black">Welcome to CosmicLens</h2> 
          <Link href={"/search"}>
            <Button>Explore the Universe <Telescope className="ml-2"/> </Button>
          </Link>
          
        </section>
      </main>
    </div>
  );
}
