const RevenureChart = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="flex-1"
		fill="none"
		viewBox="0 0 130 66"
	>
		<path
			fill="url(#a)"
			d="M5.6 57.28 1 65h128V1l-1.82 11.03h-2.42c-.65 1.84-1.99 5.52-2.18 5.52-.2 0-1.46 2.2-2.07 3.31l-5.2 3.31-3.04 4.42-4.85-4.42-2.54-3.3-3.64 7.72h-3.76l-3.15-7.73c-1.2-1.1-3.68-3.3-3.88-3.3-.19 0-1.77-2.21-2.54-3.32h-1.94l-4.6 3.31-4 3.31-1.83 7.73-5.45 3.3-2.79 3.32-3.15 5.51-3.03 7.25H59.8l-3.64.69-3.51-7.94-3.03-5.51H47.8l-3.15-3.31-4.49 3.3h-4.24l-4.24 5.52-4.25 6.62-3.15 6.62-3.39 3.31-4.6-3.3-3.64 3.3L9 60.6l-3.4-3.31Z"
		/>
		<path
			className="stroke-2 stroke-success-500"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m1 65 4.6-7.72 3.4 3.3 3.64-3.3 3.63-3.31 4.6 3.3 3.4-3.3 3.15-6.63 4.25-6.62 4.24-5.51h4.24l4.49-3.31 3.15 3.3h1.82l3.03 5.52 3.51 7.93 3.64-.69h1.33l3.03-7.24 3.15-5.51 2.8-3.31 5.45-3.31 1.81-7.73 4-3.3 4.61-3.32h1.94c.77 1.1 2.35 3.31 2.54 3.31.2 0 2.67 2.2 3.88 3.31l3.15 7.73h3.76l3.64-7.73 2.54 3.31 4.85 4.42 3.03-4.42 5.21-3.3c.61-1.11 1.87-3.32 2.07-3.32.19 0 1.53-3.68 2.18-5.52h2.42L129 1"
		/>
		<path
			className="fill-success-500 opacity-[.2]"
			d="M86 4a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 2c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z"
		/>
		<path
			className="stroke-2 stroke-success-500 fill-white"
			d="M86 10a4.99 4.99 0 1 0 0 10 4.99 4.99 0 1 0 0-10z"
		/>
		<defs>
			<linearGradient id="a" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stopColor="#ecfdf3" />
				<stop offset="100%" stopColor="#ecfdf3" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
);

const OrderChart = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="flex-1"
		fill="none"
		viewBox="0 0 130 66"
	>
		<path fill="url(#a)" d="M35 27 1 65h128V1L94 39 35 27Z" />
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
			<linearGradient id="a" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stopColor="#ecfdf3" />
				<stop offset="100%" stopColor="#ecfdf3" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
);

export { RevenureChart, OrderChart };
