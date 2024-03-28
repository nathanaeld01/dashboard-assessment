import { cn } from "../../lib/utils";

const Card = ({ className, children }) => (
	<div className={cn("card", className)}>{children}</div>
);

const CardHeader = ({ className, children }) => (
	<div className={cn("card-header", className)}>{children}</div>
);

const CardContent = ({ className, children }) => (
	<div className={cn("card-content", className)}>{children}</div>
);

const CardTitle = ({ className, children }) => (
	<h2 className={cn("card-title", className)}>{children}</h2>
);

export { Card, CardHeader, CardContent, CardTitle };
