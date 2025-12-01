import "./MissionSection.css"

export function MissionSection({
    appData
}){
    const allSolutions = appData?.allSolutions

    const solutionInfo = (solution, info, products) => {
        return(
            <div>
                <h2 className="secondary-header">
                    {solution}
                </h2>

                <p>{info}</p>
                
                {products 
                    ? <button className="user-button">
                        {products}
                    </button>
                    : null
                }
            </div>
        )
    }

    const solutionImg = (image, imgText) => {
        return(
            <img 
                src={image}
                alt={imgText}
                className="solution-img"
            />
        )
    }

    return(
        allSolutions.map((solution, index) => (
            solution?.id % 2 !== 0?
                <div key={index} className="left-solution-grid">
                    {solutionInfo(
                        `${solution?.id}. ${solution?.solution}`,
                        solution?.intro,
                        solution.products.length > 0
                            ? "Solution"
                            : null
                    )}

                    {solutionImg(
                        solution?.img,
                        `Solution ${solution?.id} img`
                    )}
                </div>
                :
                <div key={index} className="right-solution-grid">
                    {solutionImg(
                        solution?.img,
                        `Solution ${solution?.id} img`
                    )}

                    {solutionInfo(
                        `${solution?.id}. ${solution?.solution}`,
                        solution?.intro,
                        solution.products.length > 0
                            ? "Solution"
                            : null
                    )}
                </div>
        ))
    )
}