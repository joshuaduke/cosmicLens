import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Search, Telescope, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	// const data = await fetch(
	// 	`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`,
	// );
	// const response = await data.json();

	// console.log(response);

	return (
		<div className="w-full  bg-main-bg">
			<main className="container mx-auto px-10">
				{/* Hero Section*/}
				<section className="flex flex-col gap-2 mx-auto py-32">
					<div className="border w-fit rounded-md px-2">
						<p className="flex items-center">
							<Brain className="mr-1" size={20} />
							AI-Powered Space Explorer...
						</p>
					</div>

					<div>
						<h1 className="text-5xl">
							Explore the{" "}
							<span>
								Universe <br />
								Through AI{" "}
							</span>
						</h1>
						<p className="mt-2">
							Discover stunning images from NASA's Hubble and JWST
							<br />
							telescopes with AI-generated insights and
							explanations.
						</p>
					</div>

					<div className="flex justify-between items-center">
						<InputGroup className="max-w-md">
							<InputGroupInput placeholder="Search deep space images..." />
							<InputGroupAddon>
								<Search className="ml-2" />
							</InputGroupAddon>
							<Link href={"/explore"}>
								<Button>Search </Button>
							</Link>
						</InputGroup>

						<div className="border border-black rounded-md flex items-center gap-2 pr-4">
							<Image
								src={"/pillars_of_creation.webp"}
								width={70}
								height={70}
								alt="Pillars of creation taken by Hubble"
								className="p-2"
							/>
							<div className="flex flex-col gap-y-1">
								<h3 className="text-xl">Pillars of Creation</h3>
								<div className="flex gap-2 items-center">
									<div className="flex items-center border rounded-md gap-2 p-1">
										<Telescope />
										<span>Hubble</span>
									</div>

									<p>Captured: Apr 1, 2014</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex gap-x-2">
						<p>Examples:</p>
						<ul className="flex gap-x-2">
							<li className="border rounded-sm px-2">Nebula</li>
							<li className="border rounded-sm px-2">Galaxies</li>
							<li className="border rounded-sm px-2">
								JWST 2023
							</li>
							<li className="border rounded-sm px-2">
								Star Cluster
							</li>
						</ul>
					</div>
				</section>
				{/* {Featured Discoveries} */}
				<section>
					<div className="flex py-2 items-center">
						<h2 className="w-64 text-2xl font-bold">
							Feature Discoveries
						</h2>
						<hr className="w-full flex-1" />
					</div>

					<div className="flex justify-between ">
						<div className="flex flex-col border rounded-lg">
							<Image
								src={"/spiralGalaxy.png"}
								width={225}
								height={100}
								alt="Sprial Galaxy NGC 1300"
								className="rounded-t-lg"
							/>

							<div className="p-2">
								<h2 className="font-bold">Spiral Galaxy</h2>
								<p>Hubble . Galaxy</p>
							</div>
						</div>
						<div className="flex flex-col border rounded-lg">
							<Image
								src={"/spiralGalaxy.png"}
								width={225}
								height={100}
								alt="Sprial Galaxy NGC 1300"
								className="rounded-t-lg"
							/>

							<div className="p-2">
								<h2 className="font-bold">Spiral Galaxy</h2>
								<p>Hubble . Galaxy</p>
							</div>
						</div>
						<div className="flex flex-col border rounded-lg">
							<Image
								src={"/spiralGalaxy.png"}
								width={225}
								height={100}
								alt="Sprial Galaxy NGC 1300"
								className="rounded-t-lg"
							/>

							<div className="p-2">
								<h2 className="font-bold">Spiral Galaxy</h2>
								<p>Hubble . Galaxy</p>
							</div>
						</div>
						<div className="flex flex-col border rounded-lg">
							<Image
								src={"/spiralGalaxy.png"}
								width={225}
								height={100}
								alt="Sprial Galaxy NGC 1300"
								className="rounded-t-lg"
							/>

							<div className="p-2">
								<h2 className="font-bold">Spiral Galaxy</h2>
								<p>Hubble . Galaxy</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
