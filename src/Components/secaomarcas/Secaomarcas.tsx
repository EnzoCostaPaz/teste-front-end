import { type FunctionComponent } from 'react';
import styles from './Secaomarcas.module.scss';

const Secaomarcas: FunctionComponent = () => {
    return (
        <section className={styles.ContainerMarcas}>
            <div className={styles.TitleMarcas}>
                <span>Navegue por marcas</span>
            </div>

            <div className={styles.ListaMarcas}>
                <div className={styles.DivMarca}>
                    <img src='./imgs/LogoEconVerse.png' alt="Logo Econverse" />
                </div>

                <div className={styles.DivMarca}>
                    <img src='./imgs/LogoEconVerse.png' alt="Logo Econverse" />
                </div>

                <div className={styles.DivMarca}>
                    <img src='./imgs/LogoEconVerse.png' alt="Logo Econverse" />
                </div>

                <div className={styles.DivMarca}>
                    <img src='./imgs/LogoEconVerse.png' alt="Logo Econverse" />
                </div>

                <div className={styles.DivMarca}>
                    <img src='./imgs/LogoEconVerse.png' alt="Logo Econverse" />
                </div>
            </div>
        </section>
    )
}
export { Secaomarcas }