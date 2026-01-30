import { type FunctionComponent } from 'react';
import styles from './Parceiros.module.scss';
import FundoParceiros from '../../assets/FundoParceiros.png';

const Parceiros: FunctionComponent = () => {
    return (
        <>
            <div className={styles.ParceiroContainer}>


                <div
                    className={styles.BlocoParceiro}
                    style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%), url(${FundoParceiros})` }}
                >
                    <div className={styles.ParceirosTitle}>
                        <span>Parceiros</span>
                    </div>

                    <div className={styles.DescricaoParceiros}>
                        <span>Lorem ipsum dolor sit amet, consectetur</span>
                    </div>


                    <div className={styles.ButtomParceiros}>
                        <button className={styles.Buttom}>CONFIRA</button>
                    </div>
                </div>

                <div
                    className={styles.BlocoParceiro}
                    style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%), url(${FundoParceiros})` }}
                >
                    <div className={styles.ParceirosTitle}>
                        <span>Parceiros</span>
                    </div>

                    <div className={styles.DescricaoParceiros}>
                        <span>Lorem ipsum dolor sit amet, consectetur</span>
                    </div>

                    <div className={styles.ButtomParceiros}>
                        <button className={styles.Buttom}>CONFIRA</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Parceiros }