import { useEffect, useState } from 'react';
import styles from './Produtostecnologia.module.scss';
import { ProdutoModal } from '../modal';

interface Produto {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

interface VitrineProps {
    titulo?: string;
    ocultarAbas?: boolean;
    quantidade?: number;
    mostrarVerTodos?: boolean;
}

function ProdutosTecnologia({
    titulo,
    ocultarAbas = false,
    quantidade,
    mostrarVerTodos = false
}: VitrineProps) {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    //Estado do Modal
    // Inicia fechado
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

    useEffect(() => {
        const dadosMocados: Produto[] = [
            {
                "productName": "Iphone 11 PRO MAX BRANCO 1",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 1",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 15000
            },
            {
                "productName": "IPHONE 13 MINI 1",
                "descriptionShort": "IPHONE 13 MINI 1",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 9000
            },
            {
                "productName": "Iphone 11 PRO MAX BRANCO 2",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 2",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 14990
            },
            {
                "productName": "IPHONE 13 MINI 2",
                "descriptionShort": "IPHONE 13 MINI 2",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 12000
            },
            {
                "productName": "Iphone 11 PRO MAX BRANCO 3",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 3",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 4550
            },
            {
                "productName": "IPHONE 13 MINI 3",
                "descriptionShort": "IPHONE 13 MINI 3",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 38000
            },
            {
                "productName": "Iphone 11 PRO MAX BRANCO 4",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 4",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 42000
            },
            {
                "productName": "IPHONE 13 MINI 4",
                "descriptionShort": "IPHONE 13 MINI 4",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 520
            },
            {
                "productName": "Iphone 11 PRO MAX BRANCO 5",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 5",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 149990
            },
            {
                "productName": "IPHONE 13 MINI 5",
                "descriptionShort": "IPHONE 13 MINI 5",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 100000
            }
        ];
        setProdutos(dadosMocados);
    }, []);

    const formatPrice = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };


    const produtosVisiveis = quantidade ? produtos.slice(0, quantidade) : produtos;

    // Função para abrir o modal
    const handleProdutoClick = (produto: Produto) => {
        setProdutoSelecionado(produto);
    };

    return (
        <section className={styles.container}>
            <div className={styles.secaoHeader}>
                <hr className={styles.linhaTitulo} />
                <h2>{titulo || "Produtos relacionados"}</h2>
                <hr className={styles.linhaTitulo} />
            </div>


            {mostrarVerTodos && (
                <div className={styles.linkVerTodosContainer}>
                    <a href="#" className={styles.linkVerTodos}>Ver todos</a>
                </div>
            )}

            {!ocultarAbas && (
                <div className={styles.categoriaProdutos}>
                    <span className={styles.active}>CELULAR</span>
                    <span>ACESSÓRIOS</span>
                    <span>TABLETS</span>
                    <span>NOTEBOOKS</span>
                    <span>TVS</span>
                    <span>VER TODOS</span>
                </div>
            )}

            <div className={styles.gridProdutos}>
                {produtosVisiveis.map((product, index) => (
                    <div key={index} className={styles.Categoriacard} onClick={() => handleProdutoClick(product)}>
                        <div className={styles.containerImagem}>
                            <img src={product.photo} alt={product.productName} />
                        </div>
                        <div className={styles.info}>
                            <p className={styles.descricaoProduto}>{product.descriptionShort}</p>
                            <span className={styles.precoAntigo}>R$ {formatPrice(product.price + 200)}</span>
                            <span className={styles.PrecoAtual}>{formatPrice(product.price)}</span>
                            <span className={styles.installments}>ou 2x de {formatPrice(product.price / 2)} sem juros</span>
                            <span className={styles.entrega}>Frete grátis</span>
                            <button className={styles.botaoCompra}>COMPRAR</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* RENDERIZAÇÃO CONDICIONAL DO MODAL */}
            {/* Se produtoSelecionado NÃO for nulo, mostra o modal */}
            {produtoSelecionado && (
                <ProdutoModal
                    produto={produtoSelecionado}
                    aoFechar={() => setProdutoSelecionado(null)}
                />
            )}
        </section>
    );
}

export { ProdutosTecnologia };