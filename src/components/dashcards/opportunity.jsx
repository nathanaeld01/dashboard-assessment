import { OpportunityChart } from "../charts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const OpportunityCard = () => (
	<Card className="col-span-1">
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
					<div className="flex gap-2 items-center">
						<span className="block size-2 bg-[#10B981] rounded-full" />
						<span>Your Position in Market</span>
					</div>
					<div className="flex gap-2 items-center">
						<span className="block size-2 bg-[#BFDE8D] rounded-full" />
						<span>Total Market Opportunities</span>
					</div>
					<div className="flex gap-2 items-center">
						<span className="block size-2 bg-[#047857] rounded-full" />
						<span>Achievable Market Opportunities</span>
					</div>
				</div>
			</div>
		</CardContent>
	</Card>
);
