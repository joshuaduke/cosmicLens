import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Form from "next/form"

export default function SearchBar() {

	return (
		<Form className="w-full p-8 inset-shadow-sm/15" action="/explore">
			<InputGroup className="max-w-md">
				<InputGroupInput
					name="search"
					placeholder="Search deep space images..."
				/>
				<InputGroupAddon>
					<Search className="ml-2" />
				</InputGroupAddon>
				<Button type="submit">Search </Button>
			</InputGroup>
		</Form>
	);
}
