import { useLayoutEffect, useState } from "react";

import { TabContext, useTab } from "../../context/tab-context";
import { cn } from "../../lib/utils";

const Tabs = ({ onChange, children }) => {
	const [activeTab, setActiveTab] = useState("");

	useLayoutEffect(() => {
		if (onChange) onChange(activeTab);
	}, [activeTab, onChange]);

	return (
		<TabContext.Provider value={{ activeTab, setActiveTab }}>
			{children}
		</TabContext.Provider>
	);
};

const TabItem = ({ index, defaultTab, className, activeClasses, children }) => {
	const { activeTab, setActiveTab } = useTab();

	useLayoutEffect(() => {
		if (defaultTab) setActiveTab(index);
	}, [defaultTab, index, setActiveTab]);

	return (
		<button
			type="button"
			className={cn(className, activeTab === index && activeClasses)}
			onClick={() => setActiveTab(index)}
		>
			{children}
		</button>
	);
};

const TabContent = ({ index, className, children }) => {
	const { activeTab } = useTab();

	return (
		<div
			className={cn(activeTab === index ? "block" : "hidden", className)}
		>
			{children}
		</div>
	);
};

export { Tabs, TabItem, TabContent };
