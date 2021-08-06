module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#f3c614",
                secondary: "#353535",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
