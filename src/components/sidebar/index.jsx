import { useState } from "react";
import {
	BarChartIcon,
	CheckedIcon,
	HomeIcon,
	Layer3Icon,
	PieChartIcon,
	ProfileIcon,
	SettingIcon,
	TeamIcon,
} from "../icons";
import { SidebarItem } from "./item";
import { SidebarLogo } from "./logo";

export const Sidebar = () => {
	const [activeTab, setActiveTab] = useState("home");

	return (
		<aside className="fixed top-0 left-0 z-50 w-20.5 h-full flex py-8 bg-primary-800 flex-col justify-between">
			<nav className="nav">
				<SidebarLogo className="size-11 mb-6" />
				<div className="nav-wrap">
					<SidebarItem
						variant="primary"
						active={activeTab === "home"}
						onClick={() => setActiveTab("home")}
					>
						<HomeIcon />
					</SidebarItem>
					<SidebarItem
						variant="primary"
						active={activeTab === "bar"}
						onClick={() => setActiveTab("bar")}
					>
						<BarChartIcon />
					</SidebarItem>
					<SidebarItem
						variant="primary"
						active={activeTab === "layer"}
						onClick={() => setActiveTab("layer")}
					>
						<Layer3Icon />
					</SidebarItem>
					<SidebarItem
						variant="primary"
						active={activeTab === "checked"}
						onClick={() => setActiveTab("checked")}
					>
						<CheckedIcon />
					</SidebarItem>
					<SidebarItem
						variant="primary"
						active={activeTab === "pie"}
						onClick={() => setActiveTab("pie")}
					>
						<PieChartIcon />
					</SidebarItem>
					<SidebarItem
						variant="primary"
						active={activeTab === "team"}
						onClick={() => setActiveTab("team")}
					>
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
