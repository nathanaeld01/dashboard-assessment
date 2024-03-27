/** @type {import('tailwindcss').Config} */
module.exports = {
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
				700: "#333D5E",
				800: "#293056",
				900: "#1F234E",
				950: "#1A1E45",
			},
			grey: {
				100: "#F2F4F7",
				200: "#EAECF0",
				300: "#D5D9E3",
				400: "#98A2B3",
				500: "#9CA3AF",
				600: "#475467",
				900: "#101828",
			},
			success: {
				500: "#17B26A",
			},
			border: "#EAECF0",
			shadow: "#9E77ED",
			white: "#ffffff",
			black: "#000000",
			transparent: "transparent",
		},
		extend: {
			width: {
				20.5: "5.125rem",
				15: "3.75rem",
			},
			height: {
				15: "3.75rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			boxShadow: {
				active: "0 0 0 4px",
			},
			fontFamily: {
				inter: "'Inter', sans-serif",
			},
		},
	},
	plugins: [],
};
