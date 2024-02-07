import localFont from 'next/font/local'

const roboto = localFont({
    src:[
      {
        path: "./Roboto-Light.ttf",
        weight:"300",
        style:'normal'
      },
      {
        path: "./Roboto-LightItalic.ttf",
        weight:"300",
        style:'italic'
      },
      {
        path: "./Roboto-Regular.ttf",
        weight:"400",
        style:'normal'
      },
      {
        path: "./Roboto-Medium.ttf",
        weight:"500",
        style:'normal'
      },
      {
        path: "./Roboto-MediumItalic.ttf",
        weight:"500",
        style:'italic'
      },
      {
        path: "./Roboto-Bold.ttf",
        weight:"700",
        style:'normal'
      },
      {
        path: "./Roboto-BoldItalic.ttf",
        weight:"700",
        style:'italic'
      },
      {
        path: "./Roboto-Black.ttf",
        weight:"900",
        style:'normal'
      }
    ],
    display: 'swap',
  });

export default roboto;