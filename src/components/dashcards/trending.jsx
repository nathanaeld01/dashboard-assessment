import { TrendingChart } from "../charts/trending";
import { ArrowRightIcon, TrendUpIcon } from "../icons";
import { DotsVerticalIcon } from "../icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Legend } from "../ui/legend";

export const TrendingCard = () => (
	<Card className="col-span-6">
		<CardHeader bordered>
			<CardTitle>Trending In Your Industry</CardTitle>
			<button type="button" className="relative size-5 flex">
				<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
			</button>
		</CardHeader>
		<CardContent className="!pt-4 flex">
			<div className="size-72">
				<TrendingChart />
			</div>
			<div className="w-max mx-auto flex flex-col items-center justify-between">
				<div className="w-full flex flex-col gap-2.5">
					<h3 className="font-semibold text-2xl">32%</h3>
					<Legend className="bg-[#071C47] text-grey-800">
						Pattern Tiles
					</Legend>
				</div>
				<div className="w-full flex flex-col gap-2.5">
					<h3 className="font-semibold text-2xl">49%</h3>
					<Legend className="bg-[#2C678E] text-grey-800">
						Wooden Floor
					</Legend>
				</div>
				<div className="w-full flex flex-col gap-2.5">
					<h3 className="font-semibold text-2xl">27%</h3>
					<Legend className="bg-[#E1A739] text-grey-800">
						Stone Textured Tiles
					</Legend>
				</div>
			</div>
		</CardContent>
		<div className="m-4 flex p-6 bg-[#EFF6FA] rounded-xl items-center gap-5">
			<TrendUpIcon className="size-9 stroke-[#2C678E]" />
			<span className="text-base text-[#1B5A84]">
				Wooden floor is in trending , set up campaign for wooden tiles
				to reach these users
			</span>
			<ArrowRightIcon className="size-6 stroke-0 fill-[#1C1B1F]" />
		</div>
	</Card>
);
