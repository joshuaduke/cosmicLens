import { Telescope } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/button";

export default function Navbar() {
  return (
		<nav className="border-b border-gray-200 bg-white">
			<div className="container mx-auto flex h-16 items-center px-4 justify-between">
				<div className="flex items-center gap-4">
					<Link
						href={"/"}
						className="flex items-center gap-2 text-xl font-semibold "
					>
						<Telescope />
						<h1>CosmicLens</h1>
					</Link>
				</div>

				<div className="flex items-center gap-8">
					<Link href={"/search"}>Search</Link>
					<Link href={"/search"}>Telescope</Link>
					<Link href={"/search"}>Collections</Link>
					<Link href={"/search"}>About</Link>

					<div>
						<Link className="mr-1" href={"/login"}>
							<Button className="bg-primary">Login</Button>
						</Link>
						<Link href={"/sign-up"}>
							<Button className="bg-primary-soft text-primary ">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
  );
}
