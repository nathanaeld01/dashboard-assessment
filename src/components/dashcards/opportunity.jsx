import { OpportunityChart } from "../charts/opportunity";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Legend } from "../ui/legend";

export const OpportunityCard = () => (
	<Card className="col-span-4">
		<CardHeader bordered>
			<CardTitle>Industry Opportunities</CardTitle>
		</CardHeader>
		<CardContent>
			<div className="py-7">
				<OpportunityChart />
			</div>
			<div className="flex flex-col divide-y divide-grey-300">
				<h3 className="pb-4 font-semibold text-lg border-b border-b-grey-300">
					You can achieve <span className="text-[#10B981]">44%</span>{" "}
					more opportunities in market
				</h3>
				<div className="flex pt-4 pl-4 flex-col text-sm text-grey-600 gap-2.5">
					<Legend className="bg-[#10B981]">
						Your Position in Market
					</Legend>
					<Legend className="bg-[#BFDE8D]">
						Total Market Opportunities
					</Legend>
					<Legend className="bg-[#047857]">
						Achievable Market Opportunities
					</Legend>
				</div>
			</div>
		</CardContent>
	</Card>
);
