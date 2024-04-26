import * as S from "./Main.styled"

function DivHardSkills({ title, bgColor1, bgCOlor2, porcentagem }) {

    return (
        <>
            <S.divCardNivel1>
                <h4 className="titleDivCard">{title}</h4>
                <div className="divCardNivel2" style={{ backgroundColor: bgColor1 }}>
                    <p>{porcentagem}</p>
                    <div className="divCardNivel3" style={{ backgroundColor: bgCOlor2 }}>
                    </div>
                </div>
            </S.divCardNivel1>
        </>
    )
}

export default DivHardSkills;