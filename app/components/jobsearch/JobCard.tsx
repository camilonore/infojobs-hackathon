import type { JobItem } from '../../types/infojobsApiTypes'
import styles from '@styles/JobCard.module.css'
import { getTimeAgo } from '@utils/index'
import { LocationIcon } from '@icons/LocationIcon'
import { SalaryIcon } from '@icons/SalaryIcon'
import { SuitboxIcon } from '@icons/SuitboxIcon'
import { ClockIcon } from '@icons/ClockIcon'
import { VeryHappyIcon } from '@icons/Faces'
import { HappyIcon } from '@icons/Faces'
import { NeutralIcon } from '@icons/Faces'
import { SadIcon } from '@icons/Faces'

function JobCard({ job }: { job: JobItem }) {
  const faceIcons = {
    0: VeryHappyIcon,
    5: HappyIcon,
    10: NeutralIcon
  }

  const getFaceIcon = (applications: number) => {
    const faceIcon = Object.entries(faceIcons).find(([key]) => {
      const keyNumber = Number(key)
      return applications <= keyNumber
    })
    return faceIcon ? faceIcon[1] : SadIcon
  }
  const {
    author,
    title,
    salaryDescription,
    applications,
    province,
    city,
    updated,
    workDay
  } = job
  const companyLogo = author.logoUrl
    ? author.logoUrl
    : '/dummy-company-logo.png'
  const jobTitle = title.toLocaleLowerCase()
  const jobLocation = `${province.value}, ${city}`
  const parsedDate = Date.parse(updated)
  const timeAgo = getTimeAgo(parsedDate, 'es')

  const FaceIcon = getFaceIcon(Number(applications))

  return (
    <a className={styles.jobCard} href={`jobsearch/${job.id}`}>
      <header className={styles.header}>
        <img src={companyLogo} alt={author.name} />
        <div>
          <h3 className={styles.title}>{jobTitle}</h3>
          <p className={styles.authorName}>{author.name}</p>
        </div>
      </header>
      <p className={styles.location}>
        <LocationIcon className={styles.textIcon} />
        {jobLocation}
      </p>
      <p className={styles.workday}>
        <SuitboxIcon className={styles.textIcon} />
        {`Tipo de jornada: ${workDay.value}`}
      </p>
      <p className={styles.salary}>
        <SalaryIcon className={styles.textIcon} />
        {salaryDescription}
      </p>
      <p className={styles.timeAgo}>
        <ClockIcon className={styles.textIcon} />
        {`Actualizado ${timeAgo}`}
      </p>
      <p className={styles.applications}>
        <FaceIcon />
        {`${applications} Candidatos postulados!`}
      </p>
    </a>
  )
}

export { JobCard }
