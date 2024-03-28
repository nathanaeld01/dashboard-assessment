import { cn } from "../lib/utils";

const CheckedIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 22 22"
	>
		<path d="m5 14 2 2 4.5-4.5M7 7V4.2c0-1.1 0-1.7.2-2.1a2 2 0 0 1 .9-.9C8.5 1 9 1 10.2 1h7.6c1.1 0 1.7 0 2.1.2a2 2 0 0 1 .9.9c.2.4.2 1 .2 2.1v7.6c0 1.1 0 1.7-.2 2.1a2 2 0 0 1-.9.9c-.4.2-1 .2-2.1.2H15M4.2 21h7.6c1.1 0 1.7 0 2.1-.2a2 2 0 0 0 .9-.9c.2-.4.2-1 .2-2.1v-7.6c0-1.1 0-1.7-.2-2.1a2 2 0 0 0-.9-.9c-.4-.2-1-.2-2.1-.2H4.2c-1.1 0-1.7 0-2.1.2a2 2 0 0 0-.9.9C1 8.5 1 9 1 10.2v7.6c0 1.1 0 1.7.2 2.1a2 2 0 0 0 .9.9c.4.2 1 .2 2.1.2Z" />
	</svg>
);

const HomeIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 20 21"
	>
		<path d="M6 16h8M9 1.8 2.2 7l-.8.8a2 2 0 0 0-.3.6L1 9.6v7.2c0 1.1 0 1.7.2 2.1a2 2 0 0 0 .9.9c.4.2 1 .2 2.1.2h11.6c1.1 0 1.7 0 2.1-.2a2 2 0 0 0 .9-.9c.2-.4.2-1 .2-2.1V8.4a2 2 0 0 0-.4-.6l-.8-.8L11 1.8l-.7-.5a1 1 0 0 0-.6 0c-.2 0-.3.2-.7.5Z" />
	</svg>
);

const BarChartIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 20 20"
	>
		<path d="M6 13v2m4-6v6m4-10v10m-8.2 4h8.4c1.7 0 2.5 0 3.2-.3a3 3 0 0 0 1.3-1.3c.3-.7.3-1.5.3-3.2V5.8c0-1.7 0-2.5-.3-3.2a3 3 0 0 0-1.3-1.3c-.7-.3-1.5-.3-3.2-.3H5.8c-1.7 0-2.5 0-3.2.3a3 3 0 0 0-1.3 1.3C1 3.3 1 4.1 1 5.8v8.4c0 1.7 0 2.5.3 3.2a3 3 0 0 0 1.3 1.3c.7.3 1.5.3 3.2.3Z" />
	</svg>
);

const Layer3Icon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 22 22"
	>
		<path d="m1 11 9.6 4.8.3.1h.5L21 11M1 16l9.6 4.8.3.1h.5L21 16M1 6l9.6-4.8.3-.1a.5.5 0 0 1 .2 0h.3L21 6l-9.6 4.8a1 1 0 0 1-.3.1.5.5 0 0 1-.2 0 1 1 0 0 1-.3 0L1 6Z" />
	</svg>
);

const TeamIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 22 20"
	>
		<path d="M21 19v-2a4 4 0 0 0-3-3.9M14.5 1.3a4 4 0 0 1 0 7.4M16 19c0-1.9 0-2.8-.3-3.5a4 4 0 0 0-2.2-2.2C12.8 13 12 13 10 13H7c-1.9 0-2.8 0-3.5.3a4 4 0 0 0-2.2 2.2C1 16.2 1 17 1 19M12.5 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
	</svg>
);

const PieChartIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 22 22"
	>
		<path d="M11 1a10 10 0 0 1 10 10M11 1v10m0-10a10 10 0 1 0 10 10M11 1a10 10 0 0 1 10 10m0 0H11m10 0a10 10 0 0 1-4.1 8L11 11" />
	</svg>
);

const ProfileIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 22 22"
	>
		<path d="M8.1 8.1 4 4m0 14.2 4.3-4.3m5.7 0 4.2 4.3m0-14.2-4.3 4.3M21 11a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
	</svg>
);

const SettingIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 22 22"
	>
		<path d="M11 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M17.727 13.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.635 0V19.1a1.5 1.5 0 0 0-.982-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.635H2.9a1.5 1.5 0 0 0 1.373-.982 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 6.491 3.99l.054.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 0 1 3.636 0V2.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H19.1a1.499 1.499 0 0 0-1.373.91Z" />
	</svg>
);

const SearchIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 18 18"
	>
		<path d="m16.5 16.5-2.92-2.92m2.09-5a7.08 7.08 0 1 1-14.17 0 7.08 7.08 0 0 1 14.17 0Z" />
	</svg>
);

const ConfigureIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 18 18"
	>
		<path d="M11.542 6.5H3.583a2.083 2.083 0 0 1 0-4.167h7.96M6.457 15.667h7.959a2.083 2.083 0 0 0 0-4.167h-7.96M1.5 13.583a2.917 2.917 0 1 0 5.833 0 2.917 2.917 0 0 0-5.833 0Zm15-9.166a2.917 2.917 0 1 1-5.833 0 2.917 2.917 0 0 1 5.833 0Z" />
	</svg>
);

const DownloadCloudIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 20 18"
	>
		<path d="M6.67 13.17 10 16.5m0 0 3.33-3.33M10 16.5V9m6.67 3.95a4.58 4.58 0 0 0-2.92-8.12.52.52 0 0 1-.44-.25 6.25 6.25 0 1 0-9.82 7.58" />
	</svg>
);

const DotsVerticalIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 4 16"
	>
		<path d="M2 8.83a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66ZM2 3a.83.83 0 1 0 0-1.67A.83.83 0 0 0 2 3Zm0 11.67A.83.83 0 1 0 2 13a.83.83 0 0 0 0 1.67Z" />
	</svg>
);

const ArrowUpIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 20 20"
	>
		<path d="M10 15.83V4.17m0 0L4.17 10M10 4.17 15.83 10" />
	</svg>
);

const TrendUpIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 20 20"
	>
		<path d="m18.33 5.83-6.55 6.56c-.33.33-.5.5-.69.56a.83.83 0 0 1-.51 0c-.2-.06-.36-.23-.69-.56l-2.28-2.28c-.33-.33-.5-.5-.69-.56a.83.83 0 0 0-.51 0c-.2.06-.36.23-.69.56l-4.05 4.06m16.66-8.34H12.5m5.83 0v5.84" />
	</svg>
);

const ArrowRightIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 24 24"
	>
		<path d="M16.2 13H4v-2h12.2l-5.6-5.6L12 4l8 8-8 8-1.4-1.4 5.6-5.6Z" />
	</svg>
);

const ContainerIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path d="M13.67 4.85 8 8m0 0L2.33 4.85M8 8v6.33m6-3.62V5.29c0-.22 0-.34-.03-.44a.67.67 0 0 0-.15-.24 1.34 1.34 0 0 0-.37-.25L8.52 1.62c-.2-.1-.29-.16-.39-.18a.67.67 0 0 0-.26 0c-.1.02-.2.08-.39.18L2.55 4.36c-.2.11-.3.17-.37.25a.67.67 0 0 0-.15.24c-.03.1-.03.22-.03.44v5.42c0 .22 0 .34.03.44a.6.6 0 0 0 .15.24c.07.08.17.14.37.25l4.93 2.74c.2.1.29.16.39.18h.26c.1-.02.2-.08.39-.18l4.93-2.74c.2-.11.3-.17.37-.25a.67.67 0 0 0 .15-.24c.03-.1.03-.22.03-.44Z" />
	</svg>
);

const HelpIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path d="M6.06 6a2 2 0 0 1 3.89.67c0 1.33-2 2-2 2M8 11.33h0M14.68 8A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z" />
	</svg>
);

const UserIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path d="M13.33 14c0-.93 0-1.4-.11-1.77a2.67 2.67 0 0 0-1.78-1.78c-.38-.12-.84-.12-1.77-.12H6.33c-.93 0-1.4 0-1.77.12a2.67 2.67 0 0 0-1.78 1.78c-.11.37-.11.84-.11 1.77M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
	</svg>
);

const ZapIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path d="M8.67 1.33 2.73 8.46c-.23.28-.35.42-.35.54a.33.33 0 0 0 .12.26c.1.07.27.07.64.07H8l-.67 5.34 5.94-7.13c.23-.28.35-.42.35-.53a.33.33 0 0 0-.12-.27c-.1-.07-.27-.07-.64-.07H8l.67-5.34Z" />
	</svg>
);

const SmileIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path d="M6 9.33s.88 1 2.33 1c1.46 0 2.34-1 2.34-1M10.17 6h0M6.5 6h0m1.83 7.33a5.67 5.67 0 1 0-5.37-3.85c.07.21.11.32.12.4a.6.6 0 0 1-.02.22c-.02.08-.07.16-.16.33l-1.09 2.02c-.15.28-.23.43-.21.54a.33.33 0 0 0 .15.23c.1.06.26.04.59.01l3.41-.35.2-.02a.65.65 0 0 1 .13.02c.04 0 .1.03.22.08a5.65 5.65 0 0 0 2.03.37ZM10.5 6a.33.33 0 1 1-.67 0 .33.33 0 0 1 .67 0ZM6.83 6a.33.33 0 1 1-.66 0 .33.33 0 0 1 .66 0Z" />
	</svg>
);

const UserAddIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path d="M8 10.33H5c-.93 0-1.4 0-1.77.12a2.67 2.67 0 0 0-1.78 1.78c-.12.37-.12.84-.12 1.77m11.34 0v-4m-2 2h4m-5-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
	</svg>
);

const Layer2Icon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path d="m1.33 9.67 6.43 3.21a.72.72 0 0 0 .18.07.33.33 0 0 0 .12 0 .72.72 0 0 0 .18-.07l6.43-3.21M1.33 6.33l6.43-3.21a.72.72 0 0 1 .18-.07.33.33 0 0 1 .12 0c.05 0 .1.03.18.07l6.43 3.21-6.43 3.22a.72.72 0 0 1-.18.07.33.33 0 0 1-.12 0 .72.72 0 0 1-.18-.07L1.33 6.33Z" />
	</svg>
);

const LogoutIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={cn(
			"size-5 stroke-current stroke-2 transition-colors duration-200",
			className,
		)}
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
		viewBox="0 0 16 16"
	>
		<path d="M10.67 11.33 14 8m0 0-3.33-3.33M14 8H6m0-6h-.8c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87C2 3.52 2 4.08 2 5.2v5.6c0 1.12 0 1.68.22 2.1a2 2 0 0 0 .87.88c.43.22.99.22 2.11.22H6" />
	</svg>
);

export {
	ArrowRightIcon,
	ArrowUpIcon,
	BarChartIcon,
	CheckedIcon,
	ConfigureIcon,
	ContainerIcon,
	DotsVerticalIcon,
	DownloadCloudIcon,
	HelpIcon,
	HomeIcon,
	Layer3Icon,
	Layer2Icon,
	LogoutIcon,
	PieChartIcon,
	ProfileIcon,
	SearchIcon,
	SettingIcon,
	SmileIcon,
	TeamIcon,
	TrendUpIcon,
	UserIcon,
	UserAddIcon,
	ZapIcon,
};
