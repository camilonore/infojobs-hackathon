import { RelevantJobCard } from './RelevantJobCard'
// import { InfojobsServices } from 'src/services/infojobsServices'
// const relevantJobs = await InfojobsServices.getRelevantJobs()
import styles from '@styles/RelevantJobs.module.css'

function RelevantJobs() {
  return (
    <section>
      <h2 className={styles.h2}>Trabajos Más Relevantes!</h2>
      <main className={styles.main}>
        {/* {relevantJobs.items.map((job) => ( */}
        {/*  <RelevantJobCard job={job} /> */}
        {/* ))} */}
      </main>
    </section>
  )
}

export { RelevantJobs }
