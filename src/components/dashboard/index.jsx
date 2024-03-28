import { useState } from "react";

import { cn } from "../../lib/utils";
import { AvgOrderCard } from "../dashcards/avg-order";
import { CampaignCard } from "../dashcards/campaign";
import { MarketTrends } from "../dashcards/market-trends";
import { OpportunityCard } from "../dashcards/opportunity";
import { OrdersCard } from "../dashcards/orders";
import { RevenueCard } from "../dashcards/revenue";
import { TrendingCard } from "../dashcards/trending";
import { TabContent, TabItem, Tabs } from "../ui/tabs";
import { DashboardHeader } from "./header";

export const Dashboard = () => {
	const [currentTab, setCurrentTab] = useState("analysis");

	const tabItems = [
		{ index: "analysis", name: "Market Analysis", default: true },
		{ index: "perform", name: "Performance", default: false },
	];

	return (
		<div className="max-w-[calc(100%-5.125rem)] w-full h-full ml-20.5 pt-3 pl-3">
			<main className="w-full h-full bg-background rounded-tl-4xl p-8">
				<DashboardHeader />
				<Tabs onChange={setCurrentTab}>
					<div className="mt-1 mb-8 flex border-b-2 border-b-[#E5E7EB]">
						{tabItems.map((item) => (
							<TabItem
								className={cn(
									"relative py-3.5 px-4.5",
									currentTab === item.index &&
										"font-semibold",
								)}
								defaultTab={item.default}
								index={item.index}
								key={item.index}
							>
								{item.name}
								{currentTab === item.index && (
									<span className="absolute -bottom-px left-0 z-0 w-full h-[2px] bg-[#0082CA]" />
								)}
							</TabItem>
						))}
					</div>
					<TabContent index="analysis">
						<div className="row-wrap">
							<div className="col-wrap">
								<RevenueCard />
								<OrdersCard />
								<AvgOrderCard />
							</div>
							<div className="col-wrap">
								<MarketTrends />
								<OpportunityCard />
							</div>
							<div className="col-wrap">
								<TrendingCard />
								<CampaignCard />
							</div>
						</div>
					</TabContent>
					<TabContent index="perform">
						<div>Performance</div>
					</TabContent>
				</Tabs>
			</main>
		</div>
	);
};
