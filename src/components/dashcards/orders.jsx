import { CardDropdown } from "../card-dropdown";
import { OrderChart } from "../charts/order";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Change, ChangeIcon, ChangeText } from "../ui/change";

export const OrdersCard = () => (
	<Card className="col-span-4">
		<CardHeader>
			<CardTitle>Today's Orders</CardTitle>
			<CardDropdown />
		</CardHeader>
		<CardContent className="flex">
			<Change className="flex-[2]" title="14">
				<ChangeIcon type="trendUp">10%</ChangeIcon>
				<ChangeText>last mth</ChangeText>
			</Change>
			<OrderChart />
		</CardContent>
	</Card>
);
