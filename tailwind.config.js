/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		colors: {
			primary: "#293056",
			title: "#101828",
			border: "#EAECF0",
			white: "#ffffff",
			black: "#000000",
			transparent: "transparent",
		},
		extend: {
			width: {
				sidebar: "5.125rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [],
};
