import { cn } from "../../lib/utils";

const Card = ({ className, children }) => (
	<div
		className={cn(
			"bg-white text-grey-900 border border-grey-200 rounded-xl shadow-card shadow-grey-900/5",
			className,
		)}
	>
		{children}
	</div>
);

const CardHeader = ({ bordered = false, className, children }) => (
	<div
		className={cn(
			"flex p-4 justify-between items-center",
			bordered && "relative",
			className,
		)}
	>
		{children}
		{bordered && (
			<span className="absolute bottom-0 inset-x-0 z-0 w-[calc(100%-2rem)] h-px mx-auto bg-grey-200" />
		)}
	</div>
);

const CardContent = ({ className, children }) => (
	<div className={cn("p-4 pt-0", className)}>{children}</div>
);

const CardTitle = ({ description, className, children }) => (
	<h2 className={cn("flex flex-col gap-1", className)}>
		<span className="text-base font-semibold">{children}</span>
		{description && (
			<span className="text-sm text-grey-600">{description}</span>
		)}
	</h2>
);

export { Card, CardHeader, CardContent, CardTitle };
