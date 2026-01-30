import { useState } from 'react';
import styles from './Modal.module.scss';

interface Produto {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

interface ModalProps {
    produto: Produto;
    aoFechar: () => void;
}

function ProdutoModal({ produto, aoFechar }: ModalProps) {
    const [quantidade, setQuantidade] = useState(1);

    const formatPrice = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    //Função para aumentar ou diminur 
    const incrementar = () => setQuantidade(prev => prev + 1);
    const decrementar = () => setQuantidade(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <>
            <div className={styles.Overlay} onClick={aoFechar}>
                <div className={styles.ContainerModal} onClick={(e) => e.stopPropagation()}> {/* stopPropagation faz com que o modal não feche quando clicado nele*/}
                    <button className={styles.BotaoFechar} onClick={aoFechar}> X </button>

                    <div className={styles.ModalContent}>
                        <div className={styles.ContainerImage}>
                            <img src={produto.photo} alt={produto.productName} />
                        </div>

                        <div className={styles.ContainerInformacao}>
                            <h2 className={styles.TituloProduto}>{produto.productName}</h2>
                            <span className={styles.PrecoProduto}>{formatPrice(produto.price)}</span>

                            <p className={styles.DescricaoProduto}>
                                {produto.descriptionShort}

                            </p>
                            <a href='#' className={styles.MaisDetalhes}>Veja mais detalhes do produto &gt; </a>

                            <div className={styles.AcoesModal}>
                                <div className={styles.ContadorModal}>
                                    <button onClick={decrementar}>-</button>
                                    <span>{quantidade < 10 ? `0${quantidade}` : quantidade}</span>{/* garantia visual de sempre dois digitos */}
                                    <button onClick={incrementar}>+</button>
                                </div>
                                <button className={styles.ComprarBotao}>COMPRAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ProdutoModal }