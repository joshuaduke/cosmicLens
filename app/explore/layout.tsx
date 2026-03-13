import Filter from "@/components/filter";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-1">
			<Filter />
			{/* Place children where you want to render a page or nested layout */}
			<section className="basis-3/4">{children}</section>
		</main>
	);
}
