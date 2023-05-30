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

  // TODO: Change face icon with applications
  const FaceIcon = getFaceIcon(Number(applications))

  return (
    <a className='jobCard' href={`jobsearch/${job.id}`}>
      <header className={styles.header}>
        <img src={companyLogo} alt={author.name} />
        <div>
          <h3 className='title'>{jobTitle}</h3>
          <p className='author-name'>{author.name}</p>
        </div>
      </header>
      <p className='location'>
        <LocationIcon className='text-icon' />
        {jobLocation}
      </p>
      <p className='workday'>
        <SuitboxIcon className='textIcon' />
        {`Tipo de jornada: ${workDay.value}`}
      </p>
      <p className='salary'>
        <SalaryIcon className='textIcon' />
        {salaryDescription}
      </p>
      <p className='time-ago'>
        <ClockIcon className='texIicon' />
        {`Actualizado ${timeAgo}`}
      </p>
      <p className='applications'>
        <FaceIcon />
        {`${applications} Candidatos postulados!`}
      </p>
    </a>
  )
}

export { JobCard }
