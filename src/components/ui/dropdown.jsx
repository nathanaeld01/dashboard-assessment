import { cloneElement, useEffect, useRef, useState } from "react";
import { DropdownContext, useDropdown } from "../../context/dropdown-context";
import { cn } from "../../lib/utils";

const Dropdown = ({ children }) => {
	const [active, setActive] = useState(false);

	return (
		<DropdownContext.Provider value={{ active, setActive }}>
			<div className="relative">{children}</div>
		</DropdownContext.Provider>
	);
};

const DropdownTrigger = ({ children }) => {
	const { active, setActive } = useDropdown();

	return (
		<button
			type="button"
			className="size-5 flex"
			onClick={() => setActive(!active)}
		>
			{children}
		</button>
	);
};

const DropdownContent = ({ className, children }) => {
	const { active, setActive } = useDropdown();
	const containerRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!active || !containerRef.current) return;

			if (!containerRef.current.contains(event.target)) {
				setActive(false);
			}
		};

		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, [active, setActive]);

	return (
		<div
			className={cn(
				"absolute top-full right-0 z-10 mt-2 w-60 bg-white border border-grey-200 rounded-lg shadow-[0_4px_6px_-2px] shadow-grey-900/10",
				active ? "block" : "hidden",
				className,
			)}
			ref={containerRef}
		>
			{children}
		</div>
	);
};

const DropdownGroup = ({ children }) => {
	return <div className="flex py-1 flex-col">{children}</div>;
};

const DropdownItem = ({ icon, shortcut, children }) => {
	const { setActive } = useDropdown();

	return (
		<button
			type="button"
			className="flex px-4 py-2.5 text-sm text-grey-700 items-center gap-2"
			onClick={() => setActive(false)}
		>
			{icon &&
				cloneElement(icon, {
					className: "size-4 stroke-[1.5] stroke-grey-700",
				})}
			{children}
			{shortcut && (
				<span className="ml-auto text-grey-500 text-xs">
					{shortcut}
				</span>
			)}
		</button>
	);
};

export {
	Dropdown,
	DropdownTrigger,
	DropdownContent,
	DropdownGroup,
	DropdownItem,
};
