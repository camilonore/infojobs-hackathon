import { HeroBanner } from '@components/index/HeroBanner'
import { RelevantJobs } from '@components/index/RelevantJobs'
import { MasonryCategories } from '@components/index/MasonryCategories'
import styles from '@styles/Page.module.css'

export default function Index() {
  return (
    <>
      <main className={styles.main}>
        <HeroBanner />
        <RelevantJobs />
      </main>
      <section className={styles.section}>
        <MasonryCategories />
      </section>
    </>
  )
}
