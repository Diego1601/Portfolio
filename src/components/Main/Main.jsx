import * as S from "./Main.styled.jsx"
import FotoPerfil from "../../assets/perfil.jpg"
import LinkedinImg from "../../assets/linkedin.png"
import GithubImg from "../../assets/github.png"
import imgSectionSobre from "../../assets/imgSectionSobre.jpg"
import CardPortfolio from "./CardPortfolio.jsx"
import DivHardSkills from "./DivHardSkills.jsx"
import nodejs from "../../assets/nodejs.png"
import visualStudioCode from "../../assets/visualStudioCode.jpeg"
import gitHubLogo from "../../assets/gitHubLogo.png"
import gitLogo from "../../assets/gitLogo.png"
import vercel from "../../assets/vercel.png"
import mcDonalds from "../../assets/mcDonalds.png"
import apiFilmes from "../../assets/apiFilmes.png"
import acerteONumero from "../../assets/acerte.O.Numero.png"


function Main() {
    return (
        <>
            <S.main>
                <S.SectionHome>
                    <S.divHeader>
                        <h4>{'<'}Diego Henrique{'/>'}</h4>
                        <h6>Desenvolvedor Front-End</h6>
                    </S.divHeader>
                    <figure className="figurePerfil" >
                        <img className="imgPerfil" src={FotoPerfil} alt="Foto do Perfil" />
                        <div className="divDescription">
                            <p className="paragrafoDescription">
                                “Você pode criar qualquer coisa: basta escrever” – C. S. Lewis
                            </p>
                            <div className="divRedesSociais">
                                <a href="https://www.linkedin.com/in/diego-henrique97/" target="_blank"><img className="imgRedesSociais" src={LinkedinImg} alt="Linkedin" /></a>

                                <a href="https://github.com/Diego1601" target="_blank"><img className="imgRedesSociais" src={GithubImg} alt="Github" /></a>
                            </div>
                        </div>
                    </figure>
                </S.SectionHome>

                <S.SectionSobre>
                    <div className="titleSobreMim">
                        <h3 className="h3SobreMim">SOBRE MIM</h3>
                        <h5 className="h5SobreMim">Minha vida e trajetória</h5>
                    </div>
                    <div className="descriptionSobreMim">
                        <p>Sou um desenvolvedor front-end iniciante e estudante de Ciência da Computação em constante busca por desafios e inovação.
                        </p>

                        <p>Como desenvolvedor front-end, meu objetivo é mais do que simplesmente criar interfaces bonitas - é proporcionar experiências memoráveis aos usuários, tornando suas interações com a web mais intuitivas, eficientes e agradáveis.
                        </p>

                        <p>Para mim, a tecnologia não é apenas uma carreira, é uma paixão que impulsiona minha busca por excelência em tudo o que faço. </p>

                        <p>Junte-se a mim nesta jornada e vamos moldar o futuro juntos!</p>
                    </div>

                    <figure className="figureSectionSobre">
                        <img src={imgSectionSobre} alt="Tecnologia e Inovação" />
                    </figure>
                </S.SectionSobre>


                <S.SectionHardSkills>
                    <div className="titleHardSkills">
                        <h3 className="h3HardSkills">HARD SKILLS</h3>
                        <h5 className="h5HardSkills">Habilidades Técnicas</h5>
                    </div>

                    <div className="divPaiCardHardSkills">
                        <DivHardSkills
                            title={"HTML"}
                            bgColor1={"#ECBA73"}
                            bgCOlor2={"#c6cfcf"}
                            porcentagem={"30%"}
                        />

                        <DivHardSkills
                            title={"CSS"}
                            bgColor1={"#ECBA73"}
                            bgCOlor2={"#c6cfcf"}
                            porcentagem={"30%"}
                        />


                        <DivHardSkills
                            title={"JAVASCRIPT"}
                            bgColor1={"#ECBA73"}
                            bgCOlor2={"#c6cfcf"}
                            porcentagem={"15%"}
                        />

                        <DivHardSkills
                            title={"REACT"}
                            bgColor1={"#ECBA73"}
                            bgCOlor2={"#c6cfcf"}
                            porcentagem={"12%"}
                        />

                        <DivHardSkills
                            title={"GIT/GITHUB"}
                            bgColor1={"#ECBA73"}
                            bgCOlor2={"#c6cfcf"}
                            porcentagem={"35%"}
                        />

                        <DivHardSkills
                            title={"MYSQL"}
                            bgColor1={"#ECBA73"}
                            bgCOlor2={"#c6cfcf"}
                            porcentagem={"18%"}
                        />
                    </div>
                </S.SectionHardSkills>

                <S.SectionPortfolio>
                    <div className="titlePortfolio">
                        <h3 className="h3Portfolio">PORTFÓLIO</h3>
                        <h5 className="h5Portfolio">Projetos realizados e em andamento</h5>
                    </div>

                    <div className="divPaiCardPortfolio">
                        <CardPortfolio
                            image={mcDonalds}

                            title={"McDonalds - Homepage"}

                            description={"Esta Home do Site McDonalds foi um desafio proposto pela empresa Vai Na Web. Foi satisfatório realizar este desafio, pois, tive a oportunidade de reforçar minhas habilidades e conhecimentos adquiridos durante o curso."}

                            visitarSite={"https://mc-donalds-projeto.vercel.app/"}
                            visitarRepositorio={"https://github.com/Diego1601/McDonalds---Projeto"}
                        />

                        <CardPortfolio
                            image={apiFilmes}

                            title={"API - Filmes"}

                            description={"Este mini site é um projeto que realizei que consome uma API simples de filmes. Ele consiste em buscar as imagens dos filmes junto com seus respectivos títulos."}

                            visitarSite={"https://api-filmes-omega.vercel.app/"}
                            visitarRepositorio={"https://github.com/Diego1601/API---Filmes"}
                        />

                        <CardPortfolio
                            image={acerteONumero}

                            title={"Acerte o Número"}

                            description={"É um sorteador de números. Consiste em receber um número pelo usuário, e o sistema vai gerar um número aleatório, se o número gerado for igual ao número digitado, será exibido uma mensagem de 'Parabéns', caso contrário, será exibido uma mensagem 'Não foi dessa vez'."}

                            visitarSite={"https://acerte-o-numero-sooty.vercel.app/"}
                            visitarRepositorio={"https://github.com/Diego1601/AcerteONumero/blob/main/README.md"}
                        />
                    </div>
                </S.SectionPortfolio>

                <S.SectionTechs>
                    <div className="titleTechs">
                        <h3 className="h3Techs">TECHS</h3>
                        <h5 className="h5Techs">Ferramentas que utilizo</h5>
                    </div>
                    <div className="divPaiFigureTechs">
                        <figure>
                            <img src={nodejs} alt="NodeJS" />
                        </figure>

                        <figure>
                            <img src={visualStudioCode} alt="Visual Studio Code" />
                        </figure>

                        <figure>
                            <img src={gitLogo} alt="Git" />
                        </figure>

                        <figure>
                            <img src={gitHubLogo} alt="GitHub" />
                        </figure>

                        <figure>
                            <img src={vercel} alt="Vercel" />
                        </figure>
                    </div>
                </S.SectionTechs>

                <S.sectionContato>
                    <div className="titleContato">
                        <h3 className="h3Contato">CONTATO</h3>
                        <h5 className="h5Contato">Redes sociais e E-mail</h5>
                    </div>

                    <div className="divPaiContato">
                        <form>
                            <p>E-mail: dieguinho251997@gmail.com</p>
                            <p>Me mande uma mensagem. Vamos formar novas ideias!</p>

                            <address>
                                <a href="mailto:dieguinho251997@gmail.com">
                                    Enviar mensagem
                                </a>
                            </address>
                        </form>

                        <figure className="figureContato">

                            <a href="https://www.linkedin.com/in/diego-henrique97/" target="_blank"><img className="imgContato" src={LinkedinImg} alt="Linkedin" /></a>



                            <a href="https://github.com/Diego1601" target="_blank"><img className="imgContato" src={GithubImg} alt="Github" /></a>
                        </figure>
                    </div>
                </S.sectionContato>
            </S.main>
        </>
    )
}

export default Main;