import {
	BarChartIcon,
	CheckedIcon,
	HomeIcon,
	LayerIcon,
	PieChartIcon,
	ProfileIcon,
	SettingIcon,
	TeamIcon,
} from "../svgs";
import { SidebarItem } from "./item";
import { SidebarLogo } from "./logo";

export const Sidebar = () => {
	return (
		<aside className="w-20.5 h-full flex py-8 flex-col justify-between">
			<nav className="nav">
				<SidebarLogo className="size-11 mb-6" />
				<div className="nav-wrap">
					<SidebarItem variant="primary" active>
						<HomeIcon />
					</SidebarItem>
					<SidebarItem variant="primary">
						<BarChartIcon />
					</SidebarItem>
					<SidebarItem variant="primary">
						<LayerIcon />
					</SidebarItem>
					<SidebarItem variant="primary">
						<CheckedIcon />
					</SidebarItem>
					<SidebarItem variant="primary">
						<PieChartIcon />
					</SidebarItem>
					<SidebarItem variant="primary">
						<TeamIcon />
					</SidebarItem>
				</div>
			</nav>
			<div className="nav">
				<div className="nav-wrap">
					<SidebarItem variant="primary" className="text-grey-300">
						<ProfileIcon className="nav-icon !stroke-primary-300" />
					</SidebarItem>
					<SidebarItem variant="primary" className="text-grey-300">
						<SettingIcon className="nav-icon !stroke-primary-300" />
					</SidebarItem>
				</div>
				<button
					type="button"
					className="size-12 mt-6 bg-[#CFCBDC] rounded-full overflow-hidden focus:ring-4 focus:ring-grey-100"
				>
					<img
						src="/assets/avatar.png"
						alt="sidebar avatar"
						className="size-full border border-grey-900/[0.08] rounded-full"
					/>
				</button>
			</div>
		</aside>
	);
};
