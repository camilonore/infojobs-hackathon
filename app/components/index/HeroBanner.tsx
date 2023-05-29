import { SearchBar } from '../common/SearchBar'
import styles from '@styles/HeroBanner.module.css'

function HeroBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <h2 className={styles.h2}>Encuentra el trabajo que sueñas</h2>
        <SearchBar />
      </div>
      <img
        className={styles.img}
        src='/applications.png'
        alt='Illustration of a person applicating in infojobs'
      />
    </section>
  )
}

export { HeroBanner }
