/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        'poppin': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero-img': "url('https://s3-alpha-sig.figma.com/img/4739/58db/c40deb1cb8f02acdf1bdbd87eb08dffb?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kRuTQ7ZuYhicymkeAf6wS1Orw-pjxDmAcsODhbmRsf3cYl0fSKzAqqLYfvIauf1QrJxV-pb7hBqrtjNcehIs1wbvkDfM2q07B8m2YRi0XESKmpcIZKmkCb6zAlTTLDkvffxtP-mdBvgNCPnzf2FTJzVH4NnYAJ-Ti9ojfC65EsZLW1PzqwxKn4~5N3gwrH4Xql2ARummZ1-m06-Zc6ylNvfPOCXuTxe5YTFVYb0ncIGOBDbkb47cfqey1xRF83ZzTa6qX3SDAv4UMw34S0Fvzp8dk7w8f2tMsJgZL3i8Lxk2r20l4UlAJimK5fyvX26t8HGUqA3-k~cmISIFElUivQ__')",
        'collection-img':"url('https://s3-alpha-sig.figma.com/img/0c6f/e399/3954c0c2ab00519741877c1d8e489fe3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nqxJou584XYwa~McQzFwyMo4Ltxo4YlzstjEK8eaVJBj6BIFRVU4b-hkIroi8O9uj-7FTO2it3M1nUexytBEPyJwzkrXqPQ6~~bRvmh7nmGiJueV4EkjYSnUMeDPoJOjSceSAA4mruol2ZGN9zL~zy5gOiJUH3Qu32bGuDfAuyJVKCF0lFfIvO624M0hNLfjBWPq~TrHus95a7~vXpqvZ-wihfKQm61-hvOhGAfuLQSBw5IwOPHM13pdAXs2e~gP5HkeHC0LtDHEjqAZWee5FuzVssU0EswGe3tR39SmQDiv6RugxcbBl5p87vWUfropzgmRXAUw0iM2TMTRmRvw1g__')",
        'collection-removal-img':"url('https://s3-alpha-sig.figma.com/img/5ad6/f0e0/3cd7126457d642500bb82fdb7faf2b73?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CwNYM0cWwfnc1FjuNNni8U8F-l8RWOl59syW0JZ-SqKS~fmW9f9Pl5L2rs7DYtEj8zdCH~xAoO8CuLQJvWGuRS1xYdMk2Fgg0VmaJk4SMhGi7TbWSlLeeB~vzaCvGIHGPhIXborf2PcNQJdCefiGhoUEL8uAxUG6wWc36KZVSQN6zFQ99Pfy4u0vicc1HIF0vQIGfqKRLygHja88O7RgI0U5euk~LtbPXkJAYJY3H5RznfyVBcMNFAKPLiHmKDYilW7JL-h6-q0-GpfR5Y4NUDz-1pzhGLNkJME4MtyMpYocpV1tjTkGb~6P4Wd-WDbrleDt3-RFv~c4SYcaOEQyfw__')",
        'clothes-png':"url('https://s3-alpha-sig.figma.com/img/63f2/545a/cad562803fd55f8881e4dadbabc405f5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H52U2TsdYPKh6NPBhSmMKL86FU1NxFw33Q1PNGtrwvOm2zJbTzA6ZBtMCVazSj8XjqC0NZocHD--ZSXipojz7foAZj4GigEUx0LrnA05c0GRV0x1RGsJA3btNqh3VNRykFwuCWsojFfYUJQoAgVt5GV9Yh6CB7ZR5o4~Bxpe9IbvsibcTjR6YRiR9UXPSXr7FxNUf9gKP0LJ8I9ZDGwyu1JGFQHDig6oz1JRRijMlUxzFPwigIceLggEJMnLPbFVv2UnjimImi-iA5IsvSosijvDii0q0A8kCcLCmEGYt8TUCiUzkv8jP4ojmjIu1d2Avt6eHasWSY0lvBLJROds9w__')",
        'category-hero-img':"url('https://s3-alpha-sig.figma.com/img/4af9/3f62/bf5d01b5d883bb938dadb5301a3d75b7?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RJ8ScllN58vWK1vPLhIkzWTUJo3b3e7bESeHHLzf4vHuAPMT48-4zS5BW6PZfX-VCGnJxwK1~NAN~wTsXADM3lvuRO84dSOfH0p-3NOtD1r0uvh38VjuXB6J2a6Uuaq4xqgYLa63xx8A~EzXM0l3J9OQk5Zzlu7bqEEvt4WzQXDpLUtiUhncZgZeew0E6HCiOPF9GhMfYcFTzaI7uEEy0Mp3LirEb1ahi4vyrqC931sJGONAKir7M00P9kcq56kGc9tVVND047mwusGDapt1ypTGxSdPvDEcpepiTrVYRYUQYr~0LLqEMoQBXpUkNqtyl5NTzrsIFkjdGxt8ikPUlw__')",
      },
      colors: {
        default:'#7C3FFF',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}