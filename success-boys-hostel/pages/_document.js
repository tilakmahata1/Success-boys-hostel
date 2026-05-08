import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Success Boys Hostel - Your Study Home in the Heart of Kathmandu. Safe, affordable, and comfortable student accommodation in Dillibazar, Kathmandu, Nepal." />
        <meta name="keywords" content="hostel kathmandu, student hostel nepal, dillibazar hostel, boys hostel kathmandu, affordable hostel nepal" />
        <meta property="og:title" content="Success Boys Hostel - Dillibazar, Kathmandu" />
        <meta property="og:description" content="Safe, clean, and affordable student hostel in Dillibazar, Kathmandu. Your home away from home." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
