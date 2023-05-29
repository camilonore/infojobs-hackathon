import { Facebook } from '@icons/Social'
import { Twitter } from '@icons/Social'
import { Youtube } from '@icons/Social'
import styles from '@styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infojobsInfo}>
        <section>
          <p>Nosotros</p>
          <a href=''> Ayuda</a>
          <a href=''> Seguridad</a>
          <a href=''> Condiciones legales</a>
          <a href=''> Política de Privacidad</a>
          <a href=''> Uso del servicio</a>
          <a href=''> Política de cookies</a>
          <a href=''> Gestionar cookies</a>
        </section>

        <section>
          <p>Sobre InfoJobs</p>
          <a href=''> InfoJobs hoy</a>
          <a href=''> Trabaja con nosotros</a>
          <a href=''> Ofertas de empleo</a>
        </section>

        <section>
          <p>+ InfoJobs</p>
          <a href=''> InfoJobs Awards</a>
          <a href=''> InfoJobs Academy</a>
          <a href=''> Orientación laboral</a>
          <a href=''> InfoJobs Formación</a>
          <a href=''> Blog empresas</a>
          <a href=''> Oferte di lavoro in Italia</a>
        </section>

        <section>
          <p>Prensa</p>
          <a href=''> Indicadores de InfoJobs</a>
          <a href=''> Notas de prensa</a>
          <a href=''> Contacto de prensa</a>
        </section>
      </div>
      <div className={styles.socialMedia}>
        <section>
          <p>Redes sociales</p>
          <a href='' title='Facebook' className={styles.iconContainer}>
            <Facebook />
          </a>
          <a href='' title='Twitter' className={styles.iconContainer}>
            <Twitter />
          </a>
          <a href='' title='Youtube' className={styles.iconContainer}>
            <Youtube />
          </a>
        </section>
        <section>
          <p>Descarga la app</p>
          <a href='' title='App Store'>
            <img
              className={styles.storeImage}
              src='/pic-app-store.png'
              alt='App Store'
            />
          </a>
          <a href='' title='Google Play'>
            <img
              className={styles.storeImage}
              src='/pic-google-play.png'
              alt='Google Play'
            />
          </a>
        </section>
      </div>
    </footer>
  )
}

export { Footer }
