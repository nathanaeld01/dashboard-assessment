import { createContext, useContext } from "react";

const TabContext = createContext();

const useTab = () => {
	const context = useContext(TabContext);
	if (!context) throw new Error("useTab must be used within TabProvider");

	return context;
};

export { TabContext, useTab };
