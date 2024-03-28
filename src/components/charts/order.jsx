export const OrderChart = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="flex-1"
		fill="none"
		viewBox="0 0 130 66"
	>
		<path fill="url(#order-gradient)" d="M35 27 1 65h128V1L94 39 35 27Z" />
		<path
			className="fill-success-500"
			d="M130 .26a1 1 0 0 0-1.4.06l-35 38-58-12a1 1 0 0 0-.95.3l-34 38a1 1 0 0 0 .08 1.4 1 1 0 0 0 1.4-.07l34-38 58 12a1 1 0 0 0 .94-.3l35-38a1 1 0 0 0-.06-1.4z"
		/>
		<path
			className="fill-success-500 opacity-[.2]"
			d="M36 17c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zm0 2c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zm58 8c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11c0-4.5-2.7-8.4-6.6-10-1.4-.59-2.9-.92-4.4-.92zm0 2c1.3 0 2.5.27 3.6.76a8.96 8.96 0 0 1-3.6 17.2c-5 0-9-4-9-9s4-9 9-9z"
		/>
		<path
			className="stroke-2 stroke-success-500 fill-white"
			d="M36 23c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm58 10c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"
		/>
		<defs>
			<linearGradient
				id="order-gradient"
				x1="0%"
				y1="0%"
				x2="0%"
				y2="100%"
			>
				<stop offset="0%" stopColor="#ecfdf3" />
				<stop offset="100%" stopColor="#ecfdf3" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
);
