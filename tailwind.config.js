/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			width: {
				'country-card': '300px'
			},
			height: {
				'country-card': '400px'
			}
		}
	},
	plugins: []
}
