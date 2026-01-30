import { useState, type FunctionComponent } from 'react';
import styles from './Banner.module.scss';

const Banner: FunctionComponent = () => {
    return (
        <>
            <div className={styles.DivPromocao}>
                <div className={styles.ImagemFundo}>
                    <div className={styles.ContentPromocao}>
                        <div className={styles.TitlePromocao}>
                            <span>Venha conhecer nossas promoções</span>
                        </div>

                        <div className={styles.SubtitlePromocao}>
                            <span className={styles.TextoAmarelo}>50% off</span>
                            <span> nos produtos</span>
                        </div>

                        <div className={styles.ButtonPromocao}>
                            <button>Ver Produto</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Banner }