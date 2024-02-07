import localFont from 'next/font/local'

const aller = localFont({
    src:[
      {
        path: "./Aller_Std_Lt.ttf",
        weight:"300",
        style:'normal'
      },
      {
        path: "./Aller_Std_LtIt.ttf",
        weight:"300",
        style:'italic'
      },
      {
        path: "./Aller_Std_Rg.ttf",
        weight:"400",
        style:'normal'
      },
      {
        path: "./Aller_Std_It.ttf",
        weight:"400",
        style:'italic'
      },
      {
        path: "./Aller_Std_Bd.ttf",
        weight:"500",
        style:'normal'
      },
      {
        path: "./Aller_Std_BdIt.ttf",
        weight:"500",
        style:'italic'
      },
      {
        path:'./AllerDisplay_Std_Rg.ttf',
        weight:"700",
        style:'normal'
      }
    ],
    display: 'swap',
  });

export default aller;