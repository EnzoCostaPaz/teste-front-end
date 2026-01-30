import React, { type FunctionComponent } from 'react';
import styles from './Opcoesprodutos.module.scss';


const OpcaoProduto: FunctionComponent = () => {
    return (
        <>
            <div className={styles.CategoriaProdutos}>
                <div className={styles.CategoriaItem}>
                    <div className={styles.CaixaCategoriaItemEspecial}>
                        <div className={styles.ImagemItem}>
                            <img src='./imgs/images/TechImage.png' alt="" />
                        </div>
                    </div>
                    <span className={styles.TechTitle}>Tecnologia</span>

                </div>

                <div className={styles.CategoriaItem}>
                    <div className={styles.CaixaCategoriaItem}>
                        <div className={styles.ImagemItem}>
                            <img src='./imgs/images/MercadoImage.png' alt="" />
                        </div>
                    </div>
                    <span className={styles.TitleCategoria}>Supermercado</span>
                </div>

                <div className={styles.CategoriaItem}>
                    <div className={styles.CaixaCategoriaItem}>
                        <div className={styles.ImagemItem}>
                            <img src='./imgs/images/BebidaImage.png' alt="" />
                        </div>
                    </div>
                    <span className={styles.TitleCategoria}>Bebidas</span>
                </div>

                <div className={styles.CategoriaItem}>
                    <div className={styles.CaixaCategoriaItem}>
                        <div className={styles.ImagemItem}>
                            <img src='./imgs/images/FerramentaImage.png' alt="" />
                        </div>
                    </div>
                    <span className={styles.TitleCategoria}>Ferramentas</span>
                </div>
                <div className={styles.CategoriaItem}>
                    <div className={styles.CaixaCategoriaItem}>
                        <div className={styles.ImagemItem}>
                            <img src='./imgs/images/SaudeImage.png' alt="" />
                        </div>
                    </div>
                    <span className={styles.TitleCategoria}>Saúde</span>
                </div>

                <div className={styles.CategoriaItem}>
                    <div className={styles.CaixaCategoriaItem}>
                        <div className={styles.ImagemItem}>
                            <img src='./imgs/images/EsporteImage.png' alt="" />
                        </div>
                    </div>
                    <span className={styles.TitleCategoria}>Esportes e Fitness</span>
                </div>

                <div className={styles.CategoriaItem}>
                    <div className={styles.CaixaCategoriaItem}>
                        <div className={styles.ImagemItem}>
                            <img src='./imgs/images/RoupaImage.png' alt="" />
                        </div>
                    </div>
                    <span className={styles.TitleCategoria}>Moda</span>
                </div>
            </div>
        </>
    )
}

export { OpcaoProduto };