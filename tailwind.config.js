const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			screens: {
				desktop: '1440px',
				mobile: '375px',
			},

			fontFamily: {
				sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
			},

			colors: {
				'primary-red': 'hsl(1, 90%, 64%)',
				'primary-blue': 'hsl(219, 85%, 26%)',
				'grayish-blue': {
					'very-light': 'hsl(210, 60%, 98%)',
					'light-1': 'hsl(211, 68%, 94%)',
					'light-2': 'hsl(205, 33%, 90%)',
					normal: 'hsl(219, 14%, 63%)',
					'very-dark': 'hsl(219, 12%, 42%)',
				},
				'dark-blue': 'hsl(224, 21%, 14%)',
			},
		},
	},
	plugins: [],
};
