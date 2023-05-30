import { RelevantJobCard } from './RelevantJobCard'
import { InfojobsServices } from '@services/infojobsServices'
import type { JobList } from '../../types/infojobsApiTypes'
import styles from '@styles/RelevantJobs.module.css'

async function RelevantJobs() {
  const relevantJobs: JobList = await InfojobsServices.getRelevantJobs()
  return (
    <section>
      <h2 className={styles.h2}>Trabajos Más Relevantes!</h2>
      <main className={styles.main}>
        {relevantJobs.items.map((job) => (
          <RelevantJobCard job={job} key={job.id} />
        ))}
      </main>
    </section>
  )
}

export { RelevantJobs }
