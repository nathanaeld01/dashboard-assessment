import { MarketTrendsChart } from "../charts/market-trend";
import { ButtonGroup, ButtonGroupItem } from "../ui/button-group";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TabItem, Tabs } from "../ui/tabs";

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
			<Tabs>
				<div className="flex p-1 bg-grey-50 border border-grey-200 rounded-lg gap-2">
					<TabItem
						className="inline-flex px-3 py-2 font-semibold text-sm bg-transparent text-grey-500 justify-center items-center"
						activeClasses="bg-white border border-grey-900/10 text-grey-700 rounded-md"
						index="market"
						defaultTab
					>
						Market
					</TabItem>
					<TabItem
						className="inline-flex px-3 py-2 font-semibold text-sm bg-transparent text-grey-500 justify-center items-center"
						activeClasses="bg-white border border-grey-900/10 text-grey-700 rounded-md"
						index="category"
					>
						Category
					</TabItem>
					<TabItem
						className="inline-flex px-3 py-2 font-semibold text-sm bg-transparent text-grey-500 justify-center items-center"
						activeClasses="bg-white border border-grey-900/10 text-grey-700 rounded-md"
						index="products"
					>
						Products
					</TabItem>
					<TabItem
						className="inline-flex px-3 py-2 font-semibold text-sm bg-transparent text-grey-500 justify-center items-center"
						activeClasses="bg-white border border-grey-900/10 text-grey-700 rounded-md"
						index="crossselling"
					>
						Cross Selling
					</TabItem>
					<TabItem
						className="inline-flex px-3 py-2 font-semibold text-sm bg-transparent text-grey-500 justify-center items-center"
						activeClasses="bg-white border border-grey-900/10 text-grey-700 rounded-md"
						index="geography"
					>
						Geography
					</TabItem>
				</div>
			</Tabs>
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
