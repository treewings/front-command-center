module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      backgroundImage: {
        "clock-circle": "url('/src/assets/svg/ClockCircle.svg')",
        "3wg": "url('/src/assets/img/background.png')",
      },
      backgroundColor: {
        grayCMDC: "#161616",
        blackCMDC: "#0A0D10",
      },
      boxShadow: {
        "inner-2": "inset 0 .1rem .2rem rgba(0, 0, 0, 0.5)",
      },
      colors: {
        "indigo-450": "#119683",
        "blue-450": "#000AF5",
        "green-450": "#00F519",
        "yellow-450": "#DDFF12",
        "orange-450": "#F56700",
        "red-450": "#FF0606",
        "gray-450": "#141414",
        "brown-450": "#74603B",
      },
      animation: {
        mounting: "scale 0.3s forwards",
        left: "lefting 0.5s forwards",
        top: "toTop 0.5s forwards",
        down: "toDown 0.5s forwards",
        "ping-red": "pingRed 0.8s ease-in-out infinite alternate",
        "pulse-plus": "pulsePlus 0.8s ease-in-out infinite alternate"
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0.6)" },
          initial: { transform: "scale(1)" },
        },
        lefting: {
          "0%": {
            opacity: "0",
            transform: "translateX(-2rem)",
          },
          initial: {
            opacity: "1",
            transform: "initial",
          },
        },
        toTop: {
          "0%": {
            opacity: "0",
            transform: "translateY(1.9rem)",
          },
          initial: {
            opacity: "1",
            transform: "initial",
          },
        },
        toDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-1.9rem)",
          },
          initial: {
            opacity: "1",
            transform: "initial",
          },
        },
        pingRed: {
          "0%": {
            boxShadow: "0px 0px 0px 0px #FF2D2D",
          },
          "100%": {
            boxShadow: "0px 0px .3rem .05rem #FF2D2D",
          },
        },
        pulsePlus: {
          "0%": {
            opacity: 0.2,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      borderWidth: {
        3: ".1875rem",
        20: "20px",
        6: ".4rem",
        7: ".5rem",
        8: ".8rem",
      },
      divideWidth: {
        1: ".1rem",
      },
      maxWidth: {
        4: "1rem",
        12: "3rem",
        14: "3.5rem",
        15: "4rem",
        16: "4.5rem",
        17: "5rem",
        18: "5.5rem",
        19: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        42: "10.8rem",
        44: "11rem",
        48: "12rem",
        50: "12.4rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        74: "19rem",
        76: "20rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        102: "25.5rem",
        104: "26rem",
        106: "26.5rem",
        108: "27rem",
        109: "27.5rem",
        110: "28rem",
        111: "29rem",
        112: "30rem",
        113: "31rem",
        114: "33rem",
      },
      maxHeight: {
        4: "1rem",
        12: "3rem",
        14: "3.5rem",
        15: "4rem",
        16: "4.5rem",
        17: "5rem",
        18: "5.5rem",
        19: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        42: "10.8rem",
        44: "11rem",
        48: "12rem",
        50: "12.4rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        74: "19rem",
        76: "20rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        102: "25.5rem",
        104: "26rem",
        106: "26.5rem",
        108: "27rem",
        109: "27.5rem",
        110: "28rem",
        111: "29rem",
        112: "30rem",
        113: "31rem",
        114: "33rem",
        115: "34rem",
        116: "35rem",
      },
      minHeight: {
        4: "1rem",
        12: "3rem",
        14: "3.5rem",
        15: "4rem",
        16: "5rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        42: "10.8rem",
        44: "11rem",
        48: "12rem",
        50: "12.4rem",
        52: "13rem",
        56: "14rem",
      },
      minWidth: {
        4: "1rem",
        12: "3rem",
        14: "3.5rem",
        15: "4rem",
        16: "5rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        42: "10.8rem",
        44: "11rem",
        48: "12rem",
        50: "12.4rem",
        52: "13rem",
        56: "14rem",
        screen: "100vw",
      },
      height: {
        13: "3.125rem",
        15: "4rem",
        16: "5rem",
        22: "5.7rem",
        23: "5.95rem",
        26: "6.5rem",
        42: "10.8rem",
        50: "12.4rem",
        65: "17rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        102: "25.5rem",
        104: "26rem",
        106: "26.5rem",
        108: "27rem",
        109: "27.5rem",
        110: "28rem",
        111: "29rem",
        117: "36rem",
        140: "46rem",
        "9/11.5": "79%",
      },
      width: {
        13: "3.125rem",
        15: "4rem",
        16: "5rem",
        22: "5.7rem",
        23: "5.95rem",
        42: "10.8rem",
        50: "12.4rem",
        74: "19rem",
        104: "26rem",
        106: "26.5rem",
        108: "27rem",
        109: "27.5rem",
        110: "28rem",
        111: "29rem",
        140: "46rem",
        "9/11.5": "79%",
      },
      fontSize: {
        min: ".45rem",
        xsm: ".56rem",
        xslg: ".7rem",
      },
      marginTop: {
        1.5: ".40rem",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      "Nunito-sans": ["Nunito Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
