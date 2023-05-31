'use client'
import { ArrowRightIcon } from '@icons/ArrowRightIcon'
import { SearchIcon } from '@icons/SearchIcon'
import styles from '@styles/SearchBar.module.css'

function SearchBar() {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const { jobSearch, city } = Object.fromEntries(formData.entries())
    window.location.href = `/jobsearch?q=${jobSearch}${
      city !== '' ? `&city=${city}` : ''
    }`
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <SearchIcon />
        <input
          required
          type='text'
          name='jobSearch'
          id='jobSearch'
          placeholder='Puesto, empresa o palabras clave'
          className={styles.searchInput}
        />
      </div>
      <input
        type='text'
        name='city'
        id='city'
        placeholder='Ciudad (opcional)'
        className={styles.cityInput}
      />
      <button className={styles.button} type='submit'>
        <ArrowRightIcon />
      </button>
    </form>
  )
}

export { SearchBar }

// <script>
//   const $searchForm = document.getElementById('searchForm') as HTMLFormElement
//   $searchForm.addEventListener('submit', (evt) => {
//     evt.preventDefault()
//     const formData = new FormData($searchForm)
//     const { jobSearch, city } = Object.fromEntries(formData.entries())
//     window.location.href = `/jobsearch?q=${jobSearch}${
//       city !== '' ? `&city=${city}` : ''
//     }`
//   })
// </script>
