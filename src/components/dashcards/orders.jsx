import { OrderChart } from "../charts";
import { DotsVerticalIcon } from "../icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Change, ChangeIcon, ChnageText } from "../ui/change";

export const OrdersCard = () => (
	<Card className="col-span-1">
		<CardHeader>
			<CardTitle>Today's Orders</CardTitle>
			<button type="button" className="relative size-5 flex">
				<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
			</button>
		</CardHeader>
		<CardContent className="flex">
			<Change className="flex-[2]" title="14">
				<ChangeIcon type="trendUp">10%</ChangeIcon>
				<ChnageText>last mth</ChnageText>
			</Change>
			<OrderChart />
		</CardContent>
	</Card>
);
