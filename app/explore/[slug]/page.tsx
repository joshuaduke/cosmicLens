import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, PackageOpen } from "lucide-react";

export default async function ImagePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	console.log("Slug", slug);
	// api call to get image details base on NASA ID
	const response = await fetch(
		`https://images-api.nasa.gov/search?q=${slug}`,
	);
	const data = await response.json();

	console.log("data", data);
	//   const post = await getPost(slug)

	return (
		<section className="w-full h-screen bg-red-400 p-8">
			<div className="rounded-lg h-fit bg-amber-200 min-w-[730px]">
				<Image
					className="rounded-t-lg mx-auto object-cover"
					src={data.collection.items[0].links.at(-1).href}
					alt={data.collection.items[0].data[0].description}
					width={1000}
					height={500}
					style={{ width: "100%" }}
				/>
				<div className="p-4">
					<h2 className="text-2xl">{data.collection.items[0].data[0].title}</h2>
					{/* use date fns to format date to Jan 01 2020 */}
					<p className="text-sm">{data.collection.items[0].data[0].date_created}</p>
				</div>
				<hr className="w-11/12 mx-auto "/>
				<div className="flex p-4 justify-between">
					<div className="flex flex-col gap-3">
						<Button> 
							<PackageOpen/>Save to collection
						</Button>
						<Button>
							<Heart/>Add to Favorites
						</Button>
					</div>
					<div>
						<Tabs defaultValue="overview" className="w-[400px]">
							<TabsList>
								<TabsTrigger value="ai-summary">
									AI Summary
								</TabsTrigger>
								<TabsTrigger value="description">
									Description
								</TabsTrigger>
								<TabsTrigger value="fun-facts">
									Fun Facts
								</TabsTrigger>
							</TabsList>
							<TabsContent value="ai-summary">
								<Card>
									<CardHeader>
										<CardTitle>AI Summary</CardTitle>
										<CardDescription>
											View your key metrics and recent
											project activity. Track progress
											across all your active projects.
										</CardDescription>
									</CardHeader>
									<CardContent className="text-sm text-muted-foreground">
										You have 12 active projects and 3
										pending tasks.
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="description">
								<Card>
									<CardHeader>
										<CardTitle>Description</CardTitle>
										<CardDescription>
											Track performance and user
											engagement metrics. Monitor trends
											and identify growth opportunities.
										</CardDescription>
									</CardHeader>
									<CardContent className="text-sm text-muted-foreground">
										{data.collection.items[0].data[0].description}
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="fun-facts">
								<Card>
									<CardHeader>
										<CardTitle>Fun Facts</CardTitle>
										<CardDescription>
											Generate and download your detailed
											reports. Export data in multiple
											formats for analysis.
										</CardDescription>
									</CardHeader>
									<CardContent className="text-sm text-muted-foreground">
										You have 5 reports ready and available
										to export.
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
					{/* <div>
                        ShadCN tabs
                        {data.collection.items[0].data[0].description}</div> */}
				</div>
			</div>
		</section>
	);
}
