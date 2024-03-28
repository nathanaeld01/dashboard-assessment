import { cn } from "../../lib/utils";

export const Legend = ({ className, children }) => (
	<div className="flex text-sm items-center gap-2">
		<span className={cn("block size-2 rounded-full", className)} />
		<span>{children}</span>
	</div>
);
