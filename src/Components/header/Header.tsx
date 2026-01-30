import { type FunctionComponent } from 'react';
import styles from './Header.module.scss';

const Header: FunctionComponent = () => {
    return (
        <>
            <div className={styles.Garantias}>
                <div className={styles.GarantiaItem}>
                    <img src="./imgs/icon/ShieldCheck.png" alt="Icone Escudo" />
                    <span>Compra</span>
                    <span className={styles.TextoRoxo}> 100% segura</span>
                </div>

                <div className={styles.GarantiaItem}>
                    <img src="./imgs/icon/Truck.png" alt="Icone Caminhão" />
                    <span className={styles.TextoRoxo}>Frete Grátis</span>
                    <span> acima de R$ 200</span>
                </div>

                <div className={styles.GarantiaItem}>
                    <img src="./imgs/icon/CreditCard.png" alt="Icone Cartão" />
                    <span className={styles.TextoRoxo}>Parcele</span>
                    <span> suas compras</span>
                </div>
            </div>

            {/* header */}
            <div className={styles.HeaderMain}>
                {/* Criamos esta div para segurar o conteúdo no centro (1280px) */}
                <div className={styles.HeaderContent}>

                    <div className={styles.LogoEmpresa}>
                        <img src="./imgs/LogoEconVerse.png" alt="Logo da Empresa" />
                    </div>

                    <div className={styles.SearchContainer}>
                        <input
                            type="text"
                            placeholder="O que você está buscando?"
                        />
                        <img src="./imgs/icon/SearchImage.png" alt="Buscar" />
                    </div>

                    <div className={styles.OptionsButtons}>
                        <a href=""><img src="./imgs/icon/BoxImage.png" /></a>
                        <a href=""><img src="./imgs/icon/HeartImage.png" /></a>
                        <a href=""><img src="./imgs/icon/ProfileImage.png" /></a>
                        <a href=""><img src="./imgs/icon/ShoppinImage.png" /></a>
                    </div>

                </div>
            </div>

            <div className={styles.OptionsCategorias}>
                <div className={styles.CategoriaItem}>
                    <span>TODAS AS CATEGORIAS</span>
                </div>
                <div className={styles.CategoriaItem}>
                    <span>SUPERMECADO</span>
                </div>
                <div className={styles.CategoriaItem}>
                    <span>LIVROS</span>
                </div>
                <div className={styles.CategoriaItem}>
                    <span>MODA</span>
                </div>
                <div className={styles.CategoriaItem}>
                    <span>LANÇAMENTOS</span>
                </div>
                <div className={styles.CategoriaItem}>
                    <span>OFERTAS DO DIA</span>
                </div>
                <div className={styles.CategoriaItem}>
                    <img src="./imgs/icon/CrownImage.png" alt="Icone de Coroa" />
                    <span>ASSINATURAS</span>
                </div>
            </div>
        </>
    )
}

export { Header }