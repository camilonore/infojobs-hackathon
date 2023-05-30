import type { JobItem } from '../../types/infojobsApiTypes'
import styles from '@styles/RelevantJobCard.module.css'

interface Props {
  job: JobItem
}

function RelevantJobCard({ job }: Props) {
  const { title, city, id, salaryDescription, author } = job

  return (
    <a className={styles.a} href={`jobsearch/${id}`}>
      <div>
        <h3 className={styles.h3}>{title.toLowerCase()}</h3>
        <div className={styles.location}>
          <p>{city}</p>
        </div>
        <p className={styles.salary}>{salaryDescription}</p>
      </div>
      <p className={styles.author}>{author.name}</p>
    </a>
  )
}

export { RelevantJobCard }
