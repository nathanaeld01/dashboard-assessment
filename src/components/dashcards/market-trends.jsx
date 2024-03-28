import { MarketTrendsChart } from "../charts/market-trend";
import { ButtonGroup, ButtonGroupItem } from "../ui/button-group";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const MarketTrends = () => (
	<Card className="grid grid-rows-[auto_1fr_auto] col-span-8">
		<CardHeader>
			<CardTitle description="Track how your rating compares to your industry average.">
				Current Market Trends
			</CardTitle>
			<ButtonGroup>
				<ButtonGroupItem index="12months" defaultButton>
					12 Months
				</ButtonGroupItem>
				<ButtonGroupItem index="30days">30 Days</ButtonGroupItem>
				<ButtonGroupItem index="7days">7 Days</ButtonGroupItem>
			</ButtonGroup>
		</CardHeader>
		<CardContent>
			<div className="flex p-1 gap-2">
				<button
					type="button"
					className="inline-flex justify-center items-center"
				>
					Market
				</button>
				<button
					type="button"
					className="inline-flex justify-center items-center"
				>
					Category
				</button>
				<button
					type="button"
					className="inline-flex justify-center items-center"
				>
					Products
				</button>
				<button
					type="button"
					className="inline-flex justify-center items-center"
				>
					Cross Selling
				</button>
				<button
					type="button"
					className="inline-flex justify-center items-center"
				>
					Geography
				</button>
			</div>
			<MarketTrendsChart />
		</CardContent>
		<div className="flex py-3.5 px-4.5 bg-[#FFF8ED] items-center gap-5">
			<img
				src="/assets/commercial.png"
				alt="Commercial Icon"
				className="size-9.5"
			/>
			<div className="flex flex-col">
				<p className="text-base font-semibold">
					Your customer market is increasing! Set up Ad Campaign to
					reach your customers
				</p>
				<span className="text-sm text-grey-600">
					We will guide you through entire setup of Campaign
				</span>
			</div>
		</div>
	</Card>
);
