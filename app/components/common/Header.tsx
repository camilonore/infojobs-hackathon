import { ArrowRightIcon } from '@icons/ArrowRightIcon'
import styles from '@styles/Header.module.css'
import buttonStyles from '@styles/Button.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <a href='/'>
        <img src='/infojobsLogo.svg' alt='Infojobs' />
      </a>
      <ul className={styles.ul}>
        <li>Empleos</li>
        <li>Salarios</li>
        <li>Cursos</li>
      </ul>
      <a href='/' className={buttonStyles.button}>
        Iniciar Sesión
        <ArrowRightIcon />
      </a>
    </header>
  )
}

export { Header }
