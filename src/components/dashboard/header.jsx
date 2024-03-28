import { ConfigureIcon, DownloadCloudIcon, SearchIcon } from "../icons";
import { Button } from "../ui/button";

export const DashboardHeader = () => {
	return (
		<div className="h-15 border-b border-b-grey-300">
			<header className="flex justify-between items-center">
				<h1 className="text-2xl text-grey-900 font-semibold">
					Dashboard
				</h1>
				<div className="flex gap-4">
					<Button variant="ghost" icon={<SearchIcon />} />
					<Button variant="secondary" leadingIcon={<ConfigureIcon />}>
						Customize
					</Button>
					<Button
						variant="secondary"
						leadingIcon={<DownloadCloudIcon />}
					>
						Export
					</Button>
				</div>
			</header>
		</div>
	);
};
