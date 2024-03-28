import { CampaignChart } from "../charts/campaign";
import { DotsVerticalIcon } from "../icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Performance } from "../ui/performance";

export const CampaignCard = () => (
	<Card className="flex flex-col col-span-6">
		<CardHeader bordered>
			<CardTitle>Ad Campaign Performance</CardTitle>
			<button type="button" className="relative size-5 flex">
				<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
			</button>
		</CardHeader>
		<CardContent className="grow flex pt-4 flex-col">
			<div className="my-auto flex gap-5 *:flex-1">
				<Performance title="4,862" type="trendUp" typeText="9.2%">
					Total User
				</Performance>
				<Performance title="2,671" type="trendUp" typeText="6.6%">
					Sales
				</Performance>
				<Performance title="82%" type="trendUp" typeText="8.1%">
					Conversion Rate
				</Performance>
			</div>
			<CampaignChart />
		</CardContent>
	</Card>
);
