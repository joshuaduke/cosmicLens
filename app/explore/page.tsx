import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
	FieldTitle,
} from "@/components/ui/field";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search } from "lucide-react";
import Link from "next/link";
import SearchBar from "@/components/searchbar";
import SearchResults from "./search";

// search param as props
export default function Explore({searchParams, }: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) {
	return (
		<div className="flex bg-white">
			{/* Filter Section */}
			{/* Create new filter component and extract to layout */}
			<div className="h-screen p-8 min-w-fit bg-section inset-shadow-sm/15">
				<h2 className="text-2xl">Filters</h2>
				<RadioGroup defaultValue="all" className="max-w-sm">
					<legend>Telescope</legend>
					<FieldLabel
						htmlFor="all-telescopes"
						className="border-none"
					>
						<Field orientation="horizontal">
							<RadioGroupItem value="all" id="all-telescopes" />
							<FieldContent>
								<FieldTitle>All</FieldTitle>
							</FieldContent>
						</Field>
					</FieldLabel>
					<FieldLabel htmlFor="hubble-telescope">
						<Field orientation="horizontal">
							<RadioGroupItem
								value="hubble"
								id="hubble-telescope"
							/>
							<FieldContent>
								<FieldTitle>Hubble</FieldTitle>
							</FieldContent>
						</Field>
					</FieldLabel>
					<FieldLabel htmlFor="jwst-telescope">
						<Field orientation="horizontal">
							<RadioGroupItem value="jwst" id="jwst-telescope" />
							<FieldContent>
								<FieldTitle>JWST</FieldTitle>
							</FieldContent>
						</Field>
					</FieldLabel>
				</RadioGroup>
				<hr />
				{/* ShadCN Date Picker popover*/}
				<fieldset>
					<legend>Date Range</legend>
					<div>
						<label htmlFor="">Start Date</label>
						<input type="date" name="" id="" />
					</div>
					<div>
						<label htmlFor="">End Date</label>
						<input type="date" name="" id="" />
					</div>
					<hr />
				</fieldset>

				<fieldset>
					<legend>Categories</legend>
					<div className="grid grid-cols-2"> 
						<div>
							<input type="checkbox" id="galaxies" />
							<label htmlFor="galaxies">Galaxies</label>
						</div>
						<div>
							<input type="checkbox" id="nebulae" />
							<label htmlFor="nebulae">Nebulae</label>
						</div>
						<div>
							<input type="checkbox" id="clusters" />
							<label htmlFor="clusters">Star Clusters</label>
						</div>
						<div>
							<input type="checkbox" id="exoplanets" />
							<label htmlFor="exoplanets">Exoplanets</label>
						</div>
					</div>
				</fieldset>
			</div>
			<div className="flex flex-col w-full">
				<SearchBar/>
				<SearchResults searchParams={searchParams}/>
			</div>

			
		</div>
	);
}
