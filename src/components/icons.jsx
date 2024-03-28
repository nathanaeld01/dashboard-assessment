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

const LayerIcon = ({ className }) => (
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

export {
	ArrowRightIcon,
	ArrowUpIcon,
	BarChartIcon,
	CheckedIcon,
	ConfigureIcon,
	DotsVerticalIcon,
	DownloadCloudIcon,
	HomeIcon,
	LayerIcon,
	PieChartIcon,
	ProfileIcon,
	SearchIcon,
	SettingIcon,
	TeamIcon,
	TrendUpIcon,
};
