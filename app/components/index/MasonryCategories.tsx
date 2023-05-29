// import { InfojobsServices } from 'src/services/infojobsServices'
// const facets = await InfojobsServices.getFacets()

import styles from '@styles/MasonryCategories.module.css'

function MasonryCategories() {
  return (
    <div className={styles.jobsContainer}>
      <p className={styles.sectionTitle}>Los Empleos Más Demandados</p>
      <div className={styles.categoriesContainer}>
        {/* {facets.map((facet) => {
          if (facet.name == 'Categoría') {
            const categories = facet.values.slice(0, 8)
            return categories.map((category, idx) => {
              const path = category.key.toString()
              return (
                <>
                  <a
                    className={`category-card place-${idx}`}
                    href={`jobsearch?category=${path}`}
                  >
                    <p className='title'>{category.value}</p>
                    <p className='count'>{category.count} Empleos</p>
                    <img src={`image${idx}.webp`} alt='' />
                  </a>
                </>
              )
            })
          }
        })} */}
      </div>
    </div>
  )
}

export { MasonryCategories }
