import { ChangeIcon } from "./change";

export const Performance = ({ title, type, typeText, children }) => (
	<div className="flex flex-col gap-2">
		<h4 className="font-medium text-sm text-grey-600">{children}</h4>
		<div className="flex gap-2">
			<h3 className="text-3xl font-semibold">{title}</h3>
			<ChangeIcon type={type} className="items-start">
				{typeText}
			</ChangeIcon>
		</div>
	</div>
);
