import styles from './LoadingContainer.module.css'

export const LoadingContainer = () => {
  return (
    <div className={`${styles.loadingStlye}`}>
        <img src="https://pa1.aminoapps.com/6828/f2a9ae831922d20344d9d5b7667669dc8fe6e1d7_00.gif" alt="Personaje de anime" />
        <h2 className="text-white">Cargando artículos</h2>
    </div>
  )
}
