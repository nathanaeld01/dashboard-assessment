import {
	ContainerIcon,
	DotsVerticalIcon,
	HelpIcon,
	HomeIcon,
	Layer2Icon,
	LogoutIcon,
	SettingIcon,
	SmileIcon,
	TeamIcon,
	UserAddIcon,
	UserIcon,
	ZapIcon,
} from "./icons";
import {
	Dropdown,
	DropdownContent,
	DropdownGroup,
	DropdownItem,
	DropdownTrigger,
} from "./ui/dropdown";

export const CardDropdown = () => {
	return (
		<Dropdown>
			<DropdownTrigger>
				<DotsVerticalIcon className="size-4 m-auto stroke-grey-400" />
			</DropdownTrigger>
			<DropdownContent className="divide-y divide-grey-200">
				<div className="flex px-4 py-3 items-center gap-3">
					<div className="relative">
						<img
							src="/assets/avatar-solid.png"
							alt="Avatar"
							className="size-10 rounded-full"
						/>
						<span className="absolute bottom-0 right-0 size-2.5 bg-success-500 border-[1.5] border-white rounded-full" />
					</div>
					<div className="flex text-sm flex-col">
						<p className="font-semibold">Olivia Rhye</p>
						<span className="text-grey-600">
							olivia@untitledui.com
						</span>
					</div>
				</div>
				<DropdownGroup>
					<DropdownItem shortcut="⌘K->P" icon={<UserIcon />}>
						View Profile
					</DropdownItem>
					<DropdownItem shortcut="⌘S" icon={<SettingIcon />}>
						Settings
					</DropdownItem>
					<DropdownItem shortcut="?" icon={<ZapIcon />}>
						Keyboard Shortcuts
					</DropdownItem>
				</DropdownGroup>
				<DropdownGroup>
					<DropdownItem shortcut="⌘K->C" icon={<HomeIcon />}>
						Company Profile
					</DropdownItem>
					<DropdownItem shortcut="⌘K->T" icon={<TeamIcon />}>
						Team
					</DropdownItem>
					<DropdownItem shortcut="⌘I" icon={<UserAddIcon />}>
						Invite Colleagues
					</DropdownItem>
				</DropdownGroup>
				<DropdownGroup>
					<DropdownItem shortcut="⌘K->C" icon={<Layer2Icon />}>
						Changelog
					</DropdownItem>
					<DropdownItem shortcut="⌘K->S" icon={<SmileIcon />}>
						Slack Community
					</DropdownItem>
					<DropdownItem shortcut="⌘/" icon={<HelpIcon />}>
						Support
					</DropdownItem>
					<DropdownItem shortcut="⌘A" icon={<ContainerIcon />}>
						API
					</DropdownItem>
				</DropdownGroup>
				<DropdownGroup>
					<DropdownItem shortcut="⌥⇧Q" icon={<LogoutIcon />}>
						Log Out
					</DropdownItem>
				</DropdownGroup>
			</DropdownContent>
		</Dropdown>
	);
};
