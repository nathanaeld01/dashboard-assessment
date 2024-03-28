import { useLayoutEffect, useState } from "react";
import { TabContext, useTab } from "../../context/tab-context";
import { cn } from "../../lib/utils";

const ButtonGroup = ({ children }) => {
	const [activeButton, setActiveButton] = useState("");

	return (
		<TabContext.Provider value={{ activeButton, setActiveButton }}>
			<div className="flex flex-nowrap border border-grey-300 rounded-lg overflow-hidden divide-x divide-grey-300">
				{children}
			</div>
		</TabContext.Provider>
	);
};

const ButtonGroupItem = ({
	index,
	defaultButton = false,
	className,
	children,
}) => {
	const { activeButton, setActiveButton } = useTab();

	useLayoutEffect(() => {
		if (defaultButton) setActiveButton(index);
	}, [defaultButton, index, setActiveButton]);

	return (
		<button
			type="button"
			className={cn(
				"h-10 px-4 py-2.5 font-semibold text-sm text-grey-800",
				activeButton === index && "bg-grey-50",
				className,
			)}
			onClick={() => setActiveButton(index)}
		>
			{children}
		</button>
	);
};

export { ButtonGroup, ButtonGroupItem };
