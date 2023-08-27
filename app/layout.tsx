import { Footer } from './components/common/Footer'
import { Header } from './components/common/Header'
import '@styles/globals.css'
import styles from '@styles/RootLayout.module.css'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Infojobs hackathon',
  description: 'Infojobs hackathon'
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='es'>
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
