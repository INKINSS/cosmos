/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		colors: {
    			customGreen: 'rgb(38,133,59)',
    			customGray: 'rgb(138, 138, 138)',
				customGrayLight: 'rgb(70, 70, 70)',
				hoverGreen: 'rgb(34,168,56)',
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			screens :{
				'ssm' : '320px',
			}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
