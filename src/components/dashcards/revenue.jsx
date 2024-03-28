import { CardDropdown } from "../card-dropdown";
import { RevenueChart } from "../charts/revenue";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Change, ChangeIcon, ChangeText } from "../ui/change";

export const RevenueCard = () => (
	<Card className="col-span-4">
		<CardHeader>
			<CardTitle>Today's Revenue</CardTitle>
			<CardDropdown />
		</CardHeader>
		<CardContent className="flex">
			<Change className="flex-[2]" title="$1280">
				<ChangeIcon type="changeUp">15%</ChangeIcon>
				<ChangeText>last mth</ChangeText>
			</Change>
			<RevenueChart />
		</CardContent>
	</Card>
);
