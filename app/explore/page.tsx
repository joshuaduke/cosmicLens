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

	const testing = true;
	return (
		<div className="flex bg-white">

			<div className="flex flex-col w-full">
				<SearchBar/>
				<SearchResults searchParams={searchParams}/>
				
				
			</div>

			
		</div>
	);
}
