'use client'
import { SearchBar } from '@components/common/SearchBar'
import { Filters } from '@components/jobsearch/Filters'
import { JobCard } from '@components/jobsearch/JobCard'
import { InfojobsServices } from '@services/infojobsServices'
import styles from '@styles/JobSearchPage.module.css'
import { useSearchParams } from 'next/navigation'

export default async function Page() {
  const searchParams = useSearchParams()
  const query = searchParams.toString()
  const jobsFound = await InfojobsServices.searchOffers(query)
  const { currentPage, totalPages, totalResults, items: jobs } = jobsFound
  return (
    <>
      <SearchBar />
      <aside>
        <Filters />
      </aside>
      <section className={styles.jobContainer}>
        {jobs.map((job) => {
          return <JobCard job={job} key={job.id} />
        })}
      </section>
      <div className='pagination'>
        <span>
          Mostrando {currentPage} de {totalPages} páginas
        </span>
        <span>Mostrando {totalResults} resultados</span>
      </div>
    </>
  )
}
