import { type FunctionComponent } from 'react';
import styles from './Footer.module.scss';

const Footer: FunctionComponent = () => {
    return (
        <div className={styles.ContainerFooter}>
            <footer>
                <div className={styles.NewsletterArea}>

                    {/* Criamos essa DIV para centralizar o conteúdo em 1280px */}
                    <div className={styles.NewsletterContent}>

                        <div className={styles.LadoEsquerdo}>
                            <div className={styles.InscreverTitle}>
                                <span>Inscreva-se na nossa newsletter</span>
                            </div>
                            <div className={styles.InscreverDescription}>
                                <span>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</span>
                            </div>
                        </div>

                        <div className={styles.LadoDireito}>
                            <div className={styles.FormRow}>
                                <input type="text" placeholder='Digite seu nome' className={styles.InputTexto} />
                                <input type="email" placeholder='Digite seu e-mail' className={styles.InputTexto} />
                                <button className={styles.BotaoInscrever}>INSCREVER</button>
                            </div>
                            <div className={styles.TermsRow}>
                                <input type="checkbox" id="termos" />
                                <label htmlFor="termos">Aceito os termos e condições</label>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={styles.ContainerInformacaoFooter}>
                    <div className={styles.FooterContent}>

                        {/* Lado esquerdo */}
                        <div className={styles.FooterLadoEsquerdo}>
                            <div className={styles.DivImage}>
                                <img src='./imgs/LogoEconVerse.png' alt="Logo da empresa" />
                            </div>
                            <div className={styles.DescricaoFooter}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                            <div className={styles.SocialIcons}>
                                <img src="./imgs/icon/instagramImage.png" alt="icone do instagram" className={styles.Icon} />
                                <img src="./imgs/icon/facebookImage.png" alt="icone do Facebook" className={styles.Icon} />
                                <img src="./imgs/icon/linkedinImage.png" alt="icone do Linkedin" className={styles.Icon} />
                            </div>
                        </div>

                        {/* Linha Vertical */}
                        <div className={styles.LinhaVertical}></div>

                        {/* Lado direito */}
                        <div className={styles.FooterLadoDireito}>
                            <div className={styles.ColunaInstitucional}>
                                <span className={styles.Title}>Institucional</span>
                                <ul className={styles.ListaOption}>
                                    <li>Sobre Nós</li>
                                    <li>Movimento</li>
                                    <li>Trabalhe Conosco</li>
                                </ul>
                            </div>

                            <div className={styles.ColunaAjuda}>
                                <span className={styles.Title}>Ajuda</span>
                                <ul className={styles.ListaOption}>
                                    <li>Suporte</li>
                                    <li>Fale Conosco</li>
                                    <li>Perguntas Frequentes</li>
                                </ul>
                            </div>

                            <div className={styles.ColunaTermos}>
                                <span className={styles.Title}>Termos</span>
                                <ul className={styles.ListaOption}>
                                    <li>Termos e Condições</li>
                                    <li>Política de Privacidade</li>
                                    <li>Troca e Devolução</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.UseTerms}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
            </footer>
        </div>
    )
}

export { Footer }