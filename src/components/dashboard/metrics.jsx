import { DotsVerticalIcon } from "../icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const DashboardMetrics = () => {
	return (
		<div className="flex gap-4">
			<Card className="grow">
				<CardHeader>
					<CardTitle>Today's Revenue</CardTitle>
					<button type="button" className="relative size-5 flex">
						<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
					</button>
				</CardHeader>
				<CardContent className="flex">
					<div className="flex flex-col">Lol</div>
					<div />
				</CardContent>
			</Card>
			<Card className="grow">
				<CardHeader>
					<CardTitle>Today's Orders</CardTitle>
					<button type="button" className="relative size-5 flex">
						<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
					</button>
				</CardHeader>
				<CardContent className="flex">
					<div className="flex flex-col">Lol</div>
					<div />
				</CardContent>
			</Card>
			<Card className="grow">
				<CardHeader>
					<CardTitle>Avg. Order Value</CardTitle>
					<button type="button" className="relative size-5 flex">
						<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
					</button>
				</CardHeader>
				<CardContent className="flex">
					<div className="flex flex-col">Lol</div>
					<div />
				</CardContent>
			</Card>
		</div>
	);
};
