import { cloneElement } from "react";
import { cn } from "../../lib/utils";
import { ArrowUpIcon, TrendUpIcon } from "../icons";

const iconType = {
	changeUp: <ArrowUpIcon />,
	trendUp: <TrendUpIcon />,
};

const Change = ({ title, className, children }) => (
	<div className={cn("flex flex-col gap-4", className)}>
		<h3 className="text-3xl font-semibold">{title}</h3>
		<div className="flex text-sm font-medium items-center">{children}</div>
	</div>
);

const ChangeIcon = ({ type, className, children }) => {
	return (
		<div
			className={cn(
				"flex text-success-500 items-center gap-1",
				className,
			)}
		>
			{cloneElement(iconType[type], { className: "h-5" })}
			<span className="font-semibold text-sm text-success-700">
				{children}
			</span>
		</div>
	);
};

const ChangeText = ({ children }) => <div className="ml-2">{children}</div>;

export { Change, ChangeIcon, ChangeText };
