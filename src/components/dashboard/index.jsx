import { Button } from "../button";
import { ConfigureIcon, DownloadCloudIcon, SearchIcon } from "../svgs";

export const Dashboard = () => {
	return (
		<div className="grow h-full pt-3 pl-3">
			<main className="w-full h-full bg-background rounded-tl-4xl p-8">
				<div className="h-15 border-b border-b-grey-300">
					<header className="flex justify-between items-center">
						<h1 className="text-2xl text-grey-900 font-semibold">
							Dashboard
						</h1>
						<div className="flex gap-4">
							<Button variant="ghost" icon={<SearchIcon />} />
							<Button
								variant="primary"
								leadingIcon={<ConfigureIcon />}
							>
								Customize
							</Button>
							<Button
								disabled
								variant="secondary"
								leadingIcon={<DownloadCloudIcon />}
							>
								Export
							</Button>
						</div>
					</header>
				</div>
			</main>
		</div>
	);
};
