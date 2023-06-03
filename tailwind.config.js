// eslint-disable-next-line no-undef
module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('flowbite/plugin')
    ],
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        "./node_modules/flowbite/**/*.js"
    ],
    }