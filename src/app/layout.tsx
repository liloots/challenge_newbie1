import './globals.css'
import { Montserrat, Fraunces } from '@next/font/google'
import { DefaultBody } from '../components/default-page-layout'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['500', '700']
})
const fraunces = Fraunces({ 
  subsets: ['latin'],
  weight: ['700']
})

export const metadata = {
  title: 'Product preview card component',
  description: 'Product preview card component - Newbie Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <DefaultBody className={montserrat.className}>{children}</DefaultBody>
    </html>
  )
}
