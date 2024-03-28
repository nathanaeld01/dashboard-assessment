import { cn } from "../../lib/utils";

const Card = ({ className, children }) => (
	<div className={cn("card", className)}>{children}</div>
);

const CardHeader = ({ bordered = false, className, children }) => (
	<div className={cn("card-header", bordered && "relative", className)}>
		{children}
		{bordered && (
			<span className="absolute bottom-0 inset-x-0 z-0 w-[calc(100%-2rem)] h-px mx-auto bg-grey-200" />
		)}
	</div>
);

const CardContent = ({ className, children }) => (
	<div className={cn("card-content", className)}>{children}</div>
);

const CardTitle = ({ description, className, children }) => (
	<h2 className={cn("card-title", className)}>
		<span className="text-base font-semibold">{children}</span>
		{description && (
			<span className="text-sm text-grey-600">{description}</span>
		)}
	</h2>
);

export { Card, CardHeader, CardContent, CardTitle };
