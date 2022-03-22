module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  important:"#root",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1280px',
      '2xl': '1280px',
    },
    extend: {
      backgroundImage: {
         'bgimage': "url('/src/images/bgimage.jpg')"
       
      },
      height: {
        6.5: '1.675rem',
        'a4': '842px'
      },
      width: {
        22: '5.6rem',
        50: '12.5rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        160: '40rem',
        180: '50rem',
        200: '60rem',
        'a4': '795px'
      },
      height: {
        22: '5.6rem',
        50: '12.5rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        140: '34rem',
        160: '40rem',
        180: '50rem',
        200: '60rem',
        'a4': '795px'
      },
      zIndex: {
        '-10': '-10',
      },
      margin: {
        '7.5': '1.875rem',
        '8.5': '2.25rem',
      },
      padding: {
        '18': '4.5rem',
      },
      spacing: {
        1.75: '0.4375rem',
        8.5: '2.2rem',
      },
      fontSize: {
        '4.5xl': '2.75rem',
        '3.5xl': '2rem',
        '2xs': '14px',
        '3xs': '12px',
        '4xs': '10px',
        '5xs': '8px',
      },
      colors: {
        firstGridBg:"#252525",

        mainText: '#656565',
        secondaryText: '#000000C2',
        main: '#18474A',
        secondary: '#218F96',
        secondaryButtonBg: '#E1ECEC',
        iconBg: '#E9F4F4',
        menuText: '#9F9F9F',
        bgColor: '#F6F6F6',
        alertGreen: '#13ce66',
        alertRed: '#ff4949',
        alertRedBg: '#FFEDED',
        alertBlue: '#508BFF',
        alertYellow: '#FFC350',
        secondBg: '#F0F0F0',
       footerBg:"#252525E5",
       createanaccount:"#4285F4",
       linkedinbutton:"#2867B2",
       microsoftbutton:"#F25022"
      },
    },
  },
  plugins: [],
}
