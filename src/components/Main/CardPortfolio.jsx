import * as S from "./Main.styled"

function CardPortfolio({ image, title, description, visitarSite, visitarRepositorio }) {
    return (
        <>
            <S.divCardPortfolio>
                <img src={image} alt="Portfólio" />
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="divCardButton">
                    <a href={visitarSite} target="_blank">
                        <button>Site</button>
                    </a>
                    <a href={visitarRepositorio} target="_blank">
                        <button>Repositório</button>
                    </a>
                </div>
            </S.divCardPortfolio>
        </>
    )

}

export default CardPortfolio;