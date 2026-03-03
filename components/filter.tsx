"use client";

import {
	Field,
	FieldContent,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
	FieldTitle,
} from "@/components/ui/field";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// type  OptionValue = 'all' | 'hubble' | 'jwst'

type FormFieldName = "startDate" | "endDate";

export default function filter() {
    const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const [open, setOpen] = useState(false);
	const [startDate, setStartDate] = useState<Date | undefined>(undefined);
	const [openEnd, setOpenEnd] = useState(false);

	const [endDate, setEndDate] = useState<Date | undefined>(undefined);
	const [telescope, setTelescope] = useState<string>("all");
	const params = new URLSearchParams(searchParams);
	

	function handleFilter(value: string) {
		// console.log("parameter", value);
		// setTelescope(value);
		

		// if (value === "all") {
		// 	params.set("keywords", "hubble, jwst");
		// } else if (value){
		// 	params.set("keywords", value);
		// } else {
        //     params.delete("keywords");
        // }

		// // updates the URL with the user's filter data
		// replace(`${pathname}?${params.toString()}`);
	}

	function handleDateChange(
		selectedDate: Date | undefined,
		fieldName: FormFieldName,
	) {
        
		// if (fieldName === "startDate") {
		// 	setStartDate(selectedDate);

		// 	if (selectedDate) {
		// 		params.set("year_start", selectedDate.getFullYear().toString());
		// 	} else {
		// 		params.delete("year_start");
		// 	}

		// } else {
        //     setEndDate(selectedDate)

		// 	if (selectedDate) {
		// 		params.set("year_end", selectedDate.getFullYear().toString());
		// 	} else {
		// 		params.delete("year_end");
		// 	}
		// }

		// console.log("DATE", selectedDate);

		// // updates the URL with the user's filter data
		// replace(`${pathname}?${params.toString()}`);
	}

	return (
		/* Filter Section */
		/* Create new filter component and extract to layout */
		<div className="h-screen p-8 min-fit bg-section inset-shadow-sm/15">
			<h2 className="text-2xl">Filters</h2>

			<RadioGroup
				className="max-w-sm"
				onValueChange={handleFilter}
				defaultValue="all"
			>
				<legend>Telescope</legend>
				<FieldLabel htmlFor="all-telescopes" className="border-none">
					<Field orientation="horizontal">
						<RadioGroupItem
							value="all"
							id="all-telescopes"
							checked={telescope === "all"}
						/>
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
							checked={telescope === "hubble"}
						/>
						<FieldContent>
							<FieldTitle>Hubble</FieldTitle>
						</FieldContent>
					</Field>
				</FieldLabel>
				<FieldLabel htmlFor="jwst-telescope">
					<Field orientation="horizontal">
						<RadioGroupItem
							value="jwst"
							id="jwst-telescope"
							checked={telescope === "jwst"}
						/>
						<FieldContent>
							<FieldTitle>JWST</FieldTitle>
						</FieldContent>
					</Field>
				</FieldLabel>
			</RadioGroup>
			<hr />

			{/* ShadCN Date Picker popover*/}
			<Field className="mx-auto w-full">
				<FieldLabel>Date Range</FieldLabel>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							id="startDate"
							className="justify-start font-normal"
						>
							{startDate
								? startDate.toLocaleDateString()
								: "Start date"}
							{/* <CalendarIcon className=""/> */}
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto overflow-hidden p-0"
						align="start"
					>
						<Calendar
							mode="single"
							selected={startDate}
							defaultMonth={startDate}
							captionLayout="dropdown"
							onSelect={(date) => {
								handleDateChange(date, "startDate");
								setOpen(false);
							}}
						/>
					</PopoverContent>
				</Popover>
			</Field>
			<Field className="mx-auto w-full">
				<Popover open={openEnd} onOpenChange={setOpenEnd}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							id="endDate"
							className="justify-start font-normal"
						>
							{endDate
								? endDate.toLocaleDateString()
								: "End date"}
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto overflow-hidden p-0"
						align="start"
					>
						<Calendar
							mode="single"
							selected={endDate}
							defaultMonth={endDate}
							captionLayout="dropdown"
							onSelect={(date) => {
								handleDateChange(date, "endDate");
								setOpenEnd(false);
							}}
						/>
					</PopoverContent>
				</Popover>
			</Field>

			<FieldSet>
				<FieldLegend variant="label">Categories</FieldLegend>
				<FieldGroup className="gap-3">
					<Field orientation={"horizontal"}>
						<Checkbox id="nebulae" name="nebulae" defaultChecked />
						<FieldLabel htmlFor="nebulae" className="font-normal">
							Nebulae
						</FieldLabel>
					</Field>
					<Field orientation={"horizontal"}>
						<Checkbox
							id="galaxies"
							name="galaxies"
							defaultChecked
						/>
						<FieldLabel htmlFor="galaxies" className="font-normal">
							Galaxies
						</FieldLabel>
					</Field>
					<Field orientation={"horizontal"}>
						<Checkbox
							id="star-clusters"
							name="star-clusters"
							defaultChecked
						/>
						<FieldLabel
							htmlFor="star-clusters"
							className="font-normal"
						>
							Star Clusters
						</FieldLabel>
					</Field>
					<Field orientation={"horizontal"}>
						<Checkbox
							id="exoplanets"
							name="exoplanets"
							defaultChecked
						/>
						<FieldLabel
							htmlFor="exoplanets"
							className="font-normal"
						>
							Exoplanets
						</FieldLabel>
					</Field>
				</FieldGroup>
			</FieldSet>

			{/* <fieldset>
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
			</fieldset> */}
		</div>
	);
}
