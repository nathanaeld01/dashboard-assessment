import clsx from "clsx";

export const SidebarItem = ({ active, children }) => {
	return (
		<button
			type="button"
			className={clsx("nav-item", active ? "active" : "")}
		>
			{children}
		</button>
	);
};
