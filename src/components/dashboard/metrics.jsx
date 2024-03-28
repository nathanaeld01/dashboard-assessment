import { OrderChart, RevenureChart } from "../charts";
import { DotsVerticalIcon } from "../icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Change, ChangeIcon, ChnageText } from "../ui/change";

export const DashboardMetrics = () => {
	return (
		<div className="metrics-wrap">
			<Card className="flex-1">
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
					<RevenureChart />
				</CardContent>
			</Card>
			<Card className="flex-1">
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
			<Card className="flex-1">
				<CardHeader>
					<CardTitle>Avg. Order Value</CardTitle>
					<button type="button" className="relative size-5 flex">
						<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
					</button>
				</CardHeader>
				<CardContent className="flex justify-between items-center">
					<Change className="flex-[2]" title="$91.42">
						<ChangeIcon type="changeUp">20%</ChangeIcon>
						<ChnageText>last mth</ChnageText>
					</Change>
					<RevenureChart />
				</CardContent>
			</Card>
		</div>
	);
};
