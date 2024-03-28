import { cn } from "../../lib/utils";

const Card = ({ className, children }) => (
	<div className={cn("bg-white border border-border rounded-xl", className)}>
		{children}
	</div>
);

const CardHeader = ({ children }) => (
	<div className="flex p-4 justify-between items-center">{children}</div>
);

const CardContent = ({ children }) => (
	<div className="p-4 pt-0">{children}</div>
);

const CardTitle = ({ children }) => (
	<h2 className="text-base font-semibold text-text">{children}</h2>
);

export { Card, CardHeader, CardContent, CardTitle };
