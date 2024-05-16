import localFont from 'next/font/local'

// const foundersGroteskBold = localFont({
//     src: "@/public/fonts/FoundersGrotesk-Bold.otf",
//     variable: "--font-foundersGroteskBold"
// })


// export {
//     foundersGroteskBold
// }


const FoundersGrotesk = localFont({
    src: [
      {
        path: "../../public/fonts/Founders_Grotesk/FoundersGrotesk-Light.otf",
        weight: "300",
        style: "normal",
      },
      {
        path: "../../public/fonts/Founders_Grotesk/FoundersGrotesk-Regular.otf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../../public/fonts/Founders_Grotesk/FoundersGrotesk-Medium.otf",
        weight: "500",
        style: "normal",
      },
     {
       path: "../../public/fonts/Founders_Grotesk/FoundersGrotesk-Bold.otf",
       weight: "600",
       style: "normal",
     },
     {
       path: "../../public/fonts/Founders_Grotesk/FoundersGrotesk-Semibold.otf",
       weight: "700",
       style: "normal",
     },
    ],
    variable: "--font-FoundersGrotesk",
  });

const FoundersGroteskXCond = localFont({
  src: [
    {
      path: "../../public/fonts/Founders_Grotesk/FoundersGroteskXCond-Bold.otf",
      weight: "600",
      style: "normal",
    }
  ],
  variable: "--font-FoundersGroteskXCond",
})


  const NeueMontreal = localFont({
    src: [
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Regular.ttf",
      weight: "400",
      style: "normal",
    }
  ],
    variable: "--font-NeueMontreal",
  });

export {
  FoundersGrotesk,
  NeueMontreal,
  FoundersGroteskXCond
}