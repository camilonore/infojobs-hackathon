'use client'
import { SearchBar } from '@components/common/SearchBar'
import { Filters } from '@components/jobsearch/Filters'
import { JobCard } from '@components/jobsearch/JobCard'
import { InfojobsServices } from '@services/infojobsServices'
import styles from '@styles/JobSearchPage.module.css'
import { useSearchParams } from 'next/navigation'
import { ArrowRightIcon } from '@icons/ArrowRightIcon'
import buttonStyles from '@styles/Button.module.css'
import { ArrowLeftIcon } from '@icons/ArrowLeftIcon'

export default async function JobSearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.toString()
  const jobsFound = await InfojobsServices.searchOffers(query)
  const { currentPage, totalPages, totalResults, items: jobs } = jobsFound
  const prevPageHref = `/jobsearch?${query}&page=${
    currentPage - 1 == 1 ? '' : currentPage - 1
  }`
  const nextPageHref = `/jobsearch?${query}&page=${currentPage + 1}`

  return (
    <>
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
      <main className={styles.main}>
        <aside className={styles.aside}>
          <Filters />
        </aside>
        <section className={styles.jobsContainer}>
          {jobs.map((job) => {
            return <JobCard job={job} key={job.id} />
          })}
        </section>
      </main>
      <div className={styles.pagination}>
        <div className={styles.buttons}>
          {currentPage > 1 && (
            <a href={prevPageHref} className={buttonStyles.button}>
              <ArrowLeftIcon />
              Anterior
            </a>
          )}
          <p>{currentPage}</p>
          {currentPage < totalPages && (
            <a href={nextPageHref} className={buttonStyles.button}>
              Siguiente
              <ArrowRightIcon />
            </a>
          )}
        </div>
        <span>
          Tenemos {totalPages} páginas con {totalResults} resultados para tu
          busqueda!
        </span>
      </div>
    </>
  )
}
