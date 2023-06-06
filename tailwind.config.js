/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
module.exports = {
    content: [
        './Pages/**/*.cshtml',
        './Views/**/*.cshtml'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        forms
    ],
}