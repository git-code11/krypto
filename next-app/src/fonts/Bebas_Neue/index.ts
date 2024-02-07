import localFont from 'next/font/local'

const bebas_neue = localFont({
    src:[
      {
        path:'./BebasNeue-Regular.ttf',
        weight:"400",
        style:'normal'
      }
    ],
    display: 'swap',
  });

export default bebas_neue;
