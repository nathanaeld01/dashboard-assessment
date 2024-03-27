import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const navItemStyles = cva(
	"inline-flex justify-center items-center rounded-md transition-colors duration-200 focus:ring-4",
	{
		variants: {
			variant: {
				default:
					"text-primary-200 bg-white hover:bg-grey-50 focus:ring-grey-100",
				primary:
					"text-primary-200 bg-primary-800 hover:bg-primary-600 focus:ring-shadow-primary",
				grey: "text-primary-200 bg-grey-950 hover:bg-grey-800 focus:ring-shadow-grey",
			},
			size: {
				md: "size-10 p-2.5",
				lg: "size-12 p-3",
			},
			active: {
				true: "",
			},
		},
		compoundVariants: [
			{
				variant: "default",
				active: true,
				className: "text-primary-200 bg-grey-50 hover:bg-grey-100",
			},
			{
				variant: "primary",
				active: true,
				className: "text-white bg-primary-600",
			},
			{
				variant: "grey",
				active: true,
				className: "text-white bg-grey-800",
			},
		],
		defaultVariants: {
			variant: "default",
			size: "lg",
			active: "false",
		},
	},
);

export const SidebarItem = ({ active, variant, size, className, children }) => {
	return (
		<button
			className={cn(navItemStyles({ variant, size, active }), className)}
			type="button"
		>
			{children}
		</button>
	);
};
