import Filter from "@/components/filter";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex">
			<Filter />
			{/* Place children where you want to render a page or nested layout */}
			<section>{children}</section>
		</main>
	);
}
