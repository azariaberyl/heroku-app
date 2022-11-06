/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "transparent-white":
                    "linear-gradient(90deg, rgba(158,158,158,0) 0%, rgba(221,221,221,0.3533788515406162) 59%, rgba(230,230,230,0.7483368347338936) 72%, rgba(255,255,255) 90%)",
            },
            colors: {
                primary: "#3498FF",
                secondary: "#333354",
                tertiary: "#7c7cb7",
                base: "#F7F7FB",
            },
            boxShadow: {
                "my-shadow-1": "0px 4px 6px rgba(0, 0, 0, 0.05)",
            },
            margin: {
                "10vw": "10vw",
                "20vw": "20vw",
                "30vw": "30vw",
                "40vw": "40vw",
                "50vw": "50vw",
                "60vw": "60vw",
                "70vw": "70vw",
                "80vw": "80vw",
                "90vw": "90vw",
                "100vw": "100vw",
            },
            rotate: {
                20: "20deg",
                25: "25deg",
                30: "30deg",
                35: "30deg",
            },
            flex: {
                1.5: "1.5",
                2: "2",
                3: "3",
            },
            transitionTimingFunction: {},
            transitionProperty: {},
            fontFamily: {
                poppins: ["Poppins"],
            },
            fontSize: {
                10: "10px",
                12: "12px",
                16: "16px",
            },
            zIndex: {
                "-1": "-1",
                100: "100",
                190: "190",
                200: "200",
                300: "300",
                400: "400",
                500: "500",
            },
            width: {
                "120%": "120%",
                "10vw": "10vw",
                "20vw": "20vw",
                "30vw": "30vw",
                "40vw": "40vw",
                "50vw": "50vw",
                "60vw": "60vw",
                "70vw": "70vw",
                "80vw": "80vw",
                "90vw": "90vw",
                "150vw": "150vw",
                "200vw": "200vw",
                "300vw": "300vw",
                "400vw": "400vw",
                "500vw": "500vw",
                "600vw": "600vw",
            },
            height: {
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
                "150vh": "150vh",
                "200vh": "200vh",
                "300vh": "300vh",
                68: "17rem",
            },
            maxHeight: {
                "300px": "300px",
                "400px": "400px",
            },
            maxWidth: {
                "120%": "120%",
                "150px": "150px",
                "200px": "200px",
                "250px": "250px",
            },
            minWidth: {
                "15rem": "15rem",
                "20rem": "20rem",
                "30rem": "30rem",
                "40rem": "40rem",
                "50rem": "50rem",
                "60rem": "60rem",
                "70vw": "70vw",
            },
            minHeight: {
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
                "150vh": "150vh",
                "200vh": "200vh",
                "300vh": "300vh",
            },
        },
    },
    variants: {
        extend: {
            padding: ["group-hover"],
            width: ["hover", "group-hover"],
            transitionProperty: ["hover", "focus"],
            animation: ["hover", "focus"],
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false, // <== to fix tailwind and antdesign css collapse
    },
};
