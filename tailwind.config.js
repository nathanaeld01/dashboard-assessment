/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		colors: {
			primary: {
				50: "#F7F8FF",
				100: "#F0F1FF",
				200: "#D5D9EB",
				300: "#B3B8DB",
				400: "#8A93C3",
				500: "#5F6CB2",
				600: "#3E4784",
				700: "#363F72",
				800: "#293056",
				900: "#1F234E",
				950: "#1A1E45",
			},
			grey: {
				50: "#F9FAFB",
				100: "#F2F4F7",
				200: "#EAECF0",
				300: "#D5D9E3",
				400: "#98A2B3",
				500: "#9CA3AF",
				600: "#475467",
				700: "#344054",
				800: "#1D2939",
				900: "#101828",
				950: "#0C111D",
			},
			success: {
				500: "#17B26A",
				700: "#067647",
			},
			border: "#EAECF0",
			background: "#FDFDFD",
			shadow: {
				purple: "#9E77ED",
				violet: "#F4EBFF",
				grey: "#667085",
			},
			white: "#ffffff",
			black: "#000000",
			transparent: "transparent",
		},
		extend: {
			spacing: {
				4.5: "1.125rem",
				9.5: "2.375rem",
				15: "3.75rem",
				20.5: "5.125rem",
				23.5: "5.875rem",
			},
			minHeight: {
				container: "calc(100vh - 0.75rem)",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			boxShadow: {
				active: "0 0 0 4px",
				card: "0 1px 2px 0",
			},
			fontFamily: {
				inter: "'Inter', sans-serif",
			},
			stroke: {
				current: "currentColor",
			},
		},
	},
	plugins: [],
};
