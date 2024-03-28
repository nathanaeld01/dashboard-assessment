import { useState } from "react";

import { cn } from "../../lib/utils";
import { TabContent, TabItem, Tabs } from "../ui/tabs";
import { DashboardHeader } from "./header";
import { DashboardMetrics } from "./metrics";

export const Dashboard = () => {
	const [currentTab, setCurrentTab] = useState("analysis");

	const tabItems = [
		{ index: "analysis", name: "Market Analysis", default: true },
		{ index: "perform", name: "Performance", default: false },
	];

	return (
		<div className="grow h-full pt-3 pl-3">
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
					<div className="overflow-hidden">
						<TabContent index="analysis">
							<DashboardMetrics />
						</TabContent>
						<TabContent index="perform">
							<div>Performance</div>
						</TabContent>
					</div>
				</Tabs>
			</main>
		</div>
	);
};
