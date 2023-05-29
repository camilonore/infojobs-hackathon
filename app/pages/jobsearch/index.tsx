// import SearchBar from '@components/common/SearchBar'
// import Filters from '@components/jobsearch/Filters'
// import JobCard from '@components/jobsearch/JobCard'
// import Layout from '@layouts/Layout'
// import { InfojobsServices } from 'src/services/infojobsServices'
// const queryEntries = Astro.url.searchParams.toString()
// const query = queryEntries ? `${queryEntries}` : ''
// const jobsFound = await InfojobsServices.searchOffers(query)
// const { currentPage, totalPages, totalResults, items: jobs } = jobsFound

// <Layout title='Ofertas de trabajo'>
//   <SearchBar />
//   <aside>
//     <Filters />
//   </aside>
//   <section className='jobs-container'>
//     {
//       jobs.map((job) => {
//         return <JobCard job={job} />
//       })
//     }
//   </section>
//   <div className='pagination'>
//     <span>Mostrando {currentPage} de {totalPages} páginas</span>
//     <span>Mostrando {totalResults} resultados</span>
//   </div>
// </Layout>

// <style>
//   .jobs-container {
//     max-width: 90%;
//     margin: 20px auto;
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
//     gap: 20px;
//   }
// </style>
