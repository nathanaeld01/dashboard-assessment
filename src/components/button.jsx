import { cva } from "class-variance-authority";
import { cloneElement } from "react";
import { cn } from "../lib/utils";

const buttonStyles = cva(
	"inline-flex font-semibold justify-center items-center rounded-md disabled:bg-transparent disabled:text-grey-300 transition-colors duration-200",
	{
		variants: {
			variant: {
				primary: "",
				secondary:
					"text-grey-700 border border-grey-300 hover:bg-grey-50 hover:text-grey-800 disabled:border-grey-200 focus:ring-4 focus:ring-grey-100",
				ghost: "text-grey-700 hover:enabled:bg-grey-50 hover:enabled:text-grey-800",
			},
			size: {
				sm: "h-9 px-3.5 py-2 text-sm",
				md: "h-10 px-4 py-2.5 text-sm",
				lg: "h-11 px-4.5 py-2.5 text-base",
				xl: "h-12 px-5 py-3 text-base",
				"2xl": "h-15 px-7 py-4 text-lg",
				icon: "size-10",
			},
			icon: {
				default: "",
				trailing: "flex-row-reverse gap-4",
				leading: "flex-row gap-4",
				only: "",
			},
		},
		defaultVariants: {
			variant: "primary",
			icon: "default",
			size: "md",
		},
	},
);

export const Button = ({
	variant,
	size,
	className,
	type = "button",
	icon,
	leadingIcon,
	trailingIcon,
	content,
	children,
	...props
}) => {
	const iconState = icon
		? "only"
		: leadingIcon
			? "leading"
			: trailingIcon
				? "trailing"
				: "default";

	const Icon = icon || leadingIcon || trailingIcon;

	return (
		<button
			type={type}
			className={cn(
				buttonStyles({
					variant,
					size: icon ? "icon" : size,
					icon: iconState,
				}),
				className,
			)}
			{...props}
		>
			{Icon &&
				cloneElement(Icon, {
					className: "stroke-[1.67]",
				})}
			{children}
		</button>
	);
};
