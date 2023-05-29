import { Footer } from './components/common/Footer'
import { Header } from './components/common/Header'
import '@styles/globals.css'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Infojobs hackathon',
  description: 'Infojobs hackathon'
}

export default function RootLayout({ children }: Props) {
  console.log({ children })
  return (
    <html lang='es'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
