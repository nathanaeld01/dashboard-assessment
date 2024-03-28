import { RevenueChart } from "../charts/revenue";
import { DotsVerticalIcon } from "../icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Change, ChangeIcon, ChangeText } from "../ui/change";

export const AvgOrderCard = () => (
	<Card className="col-span-4">
		<CardHeader>
			<CardTitle>Avg. Order Value</CardTitle>
			<button type="button" className="relative size-5 flex">
				<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
			</button>
		</CardHeader>
		<CardContent className="flex justify-between items-center">
			<Change className="flex-[2]" title="$91.42">
				<ChangeIcon type="changeUp">20%</ChangeIcon>
				<ChangeText>last mth</ChangeText>
			</Change>
			<RevenueChart />
		</CardContent>
	</Card>
);
