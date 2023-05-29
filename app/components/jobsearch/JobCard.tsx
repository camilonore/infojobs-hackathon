// import type { JobItem } from 'types/infojobsApiTypes'
// import { getTimeAgo } from '@utils/index'
// import LocationIcon from '@icons/LocationIcon'
// import SalaryIcon from '@icons/SalaryIcon'
// import SuitboxIcon from '@icons/SuitboxIcon'
// import ClockIcon from '@icons/ClockIcon'
// import VeryHappyIcon from '@icons/Faces/VeryHappyIcon'
// import HappyIcon from '@icons/Faces/HappyIcon'
// import NeutralIcon from '@icons/Faces/NeutralIcon'
// import SadIcon from '@icons/Faces/SadIcon'

// interface Props {
//   job: JobItem
// }

// const faceIcons = {
//   0: VeryHappyIcon,
//   5: HappyIcon,
//   10: NeutralIcon
// }

// const { job } = Astro.props
// const {
//   author,
//   title,
//   salaryDescription,
//   applications,
//   province,
//   city,
//   updated,
//   workDay
// } = job

// const getFaceIcon = (applications: number) => {
//   const faceIcon = Object.entries(faceIcons).find(([key]) => {
//     const keyNumber = Number(key)
//     return applications <= keyNumber
//   })
//   return faceIcon ? faceIcon[1] : SadIcon
// }

// const FaceIcon = getFaceIcon(Number(applications))
// const companyLogo = author.logoUrl ? author.logoUrl : '/dummy-company-logo.png'
// const jobTitle = title.toLocaleLowerCase()
// const jobLocation = `${province.value}, ${city}`
// const parsedDate = Date.parse(updated)
// const timeAgo = getTimeAgo(parsedDate, 'es')

function JobCard() {
  return (
    <a className='job-card' href={`jobsearch/${job.id}`}>
      <header>
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
        <SuitboxIcon className='text-icon' />
        {`Tipo de jornada: ${workDay.value}`}
      </p>
      <p className='salary'>
        <SalaryIcon className='text-icon' />
        {salaryDescription}
      </p>
      <p className='time-ago'>
        <ClockIcon className='text-icon' />
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

{
  /* <style>
  .job-card {
    padding: 20px;
    border-radius: var(--rounded);
    text-decoration: none;
    color: #000;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in;
  }
  .job-card:hover {
    background-color: var(--primary-color);
    color: #fff;
    transform: translate(0, -2px);
  }
  .job-card:hover .text-icon {
    fill: #fff;
  }
  header {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 15px;
    align-items: center;
  }
  header > img {
    border-radius: var(--rounded);
    object-fit: cover;
    aspect-ratio: 1/1;
    width: 100%;
  }
  header > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
  .title {
    font-weight: bold;
    font-size: var(--text-sm);
    text-transform: capitalize;
  }
  .salary {
    font-weight: bold;
  }
  .author-name,
  .location,
  .salary,
  .workday,
  .time-ago,
  .applications {
    font-size: var(--text-xs);
  }
  .text-icon {
    height: 15px;
  }
  .applications {
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>
<style is:inline>
  .applications > svg {
    height: 16px;
  }
  .job-card:hover .applications > svg > path {
    fill: #fff;
    color: #fff;
  }
</style> */
}
