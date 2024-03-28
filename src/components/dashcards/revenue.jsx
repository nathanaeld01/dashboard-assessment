import { RevenueChart } from "../charts/revenue";
import { DotsVerticalIcon } from "../icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Change, ChangeIcon, ChnageText } from "../ui/change";

export const RevenueCard = () => (
	<Card className="col-span-1">
		<CardHeader>
			<CardTitle>Today's Revenue</CardTitle>
			<button type="button" className="relative size-5 flex">
				<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
			</button>
		</CardHeader>
		<CardContent className="flex">
			<Change className="flex-[2]" title="$1280">
				<ChangeIcon type="changeUp">15%</ChangeIcon>
				<ChnageText>last mth</ChnageText>
			</Change>
			<RevenueChart />
		</CardContent>
	</Card>
);
