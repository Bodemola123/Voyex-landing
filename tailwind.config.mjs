/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
backgroundImage: {
  'sm-bg': "url('/mobilebg.JPG')",
  'md-bg': "url('/stars.svg')",
  'gradient-and-darkstar': "url('/Visual1.svg'), linear-gradient(180deg, #000000 0%, #371866 100%)",
  'gradient-and-smview': "url('/smview.svg'), linear-gradient(180deg, #000000 0%, #371866 100%)"
},

  		fontFamily: {
  			sans: [
  				'DM Sans',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		sm: '320px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px'
  	}
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hide': {
            'scrollbar-width': 'none', /* Hide scrollbar for Firefox */
          },
          '.scrollbar-hide::-webkit-scrollbar': {
            'display': 'none', /* Hide scrollbar for WebKit browsers */
          },
        },
        ['responsive', 'hover'] // This ensures the utility works with all responsive variants
      );
    },
      require("tailwindcss-animate")
],
};
