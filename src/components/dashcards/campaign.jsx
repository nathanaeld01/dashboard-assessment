import { DotsVerticalIcon } from "../icons";
import { Card, CardHeader, CardTitle } from "../ui/card";

export const CampaignCard = () => (
	<Card className="col-span-6">
		<CardHeader bordered>
			<CardTitle>Ad Campaign Performance</CardTitle>
			<button type="button" className="relative size-5 flex">
				<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
			</button>
		</CardHeader>
	</Card>
);
