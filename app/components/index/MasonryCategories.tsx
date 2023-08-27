import { InfojobsServices } from '@services/infojobsServices'
import styles from '@styles/MasonryCategories.module.css'
import type { Facet } from '../../types/infojobsApiTypes'

async function MasonryCategories() {
  const facets: Facet[] = await InfojobsServices.getFacets()
  return (
    <div className={styles.jobsContainer}>
      <p className={styles.sectionTitle}>Los Empleos Más Demandados</p>
      <div className={styles.categoriesContainer}>
        {facets.map((facet) => {
          if (facet.name == 'Categoría') {
            const categories = facet.values.slice(0, 8)
            return categories.map((category, idx) => {
              const path = category.key.toString()
              const className = `${styles.categoryCard} ${
                styles[`place${idx}`]
              }`
              return (
                <>
                  <a className={className} href={`jobsearch?category=${path}`}>
                    <p className={styles.title}>{category.value}</p>
                    <p className={styles.count}>{category.count} Empleos</p>
                    <img src={`image${idx}.webp`} alt='' />
                  </a>
                </>
              )
            })
          }
        })}
      </div>
    </div>
  )
}

export { MasonryCategories }
