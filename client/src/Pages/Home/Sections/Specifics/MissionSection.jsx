import { useState } from "react"
import "./MissionSection.css"

export function MissionSection({
    appData
}){
    const [hoverSolutionId, setHoverSolutionId] = useState()

    const allSolutions = appData?.allSolutions

    const generateColumns = () => {
        if(!hoverSolutionId){
            return "1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        }

        return allSolutions.map(solution => 
            solution.id === hoverSolutionId ? "70fr" : "5fr"
        )
        .join(" ")
    }

    return(
        <div className="specific-containers solution-grid" style={{"--columns": generateColumns()}}>
            {allSolutions.map((solution, index) => {
                const solutionProducts = solution?.products
                return(
                    <div
                        className={`solution-card ${
                            hoverSolutionId && hoverSolutionId===solution?.id
                                ?"selected-solution" : "unselected-solution"
                            }`}
                        key={index}
                        style={{
                            backgroundImage: `url(${solution?.img})`
                        }}
                        onMouseEnter={() => setHoverSolutionId(solution?.id)}
                        onMouseLeave={() => setHoverSolutionId(null)}
                    >
                        {
                            hoverSolutionId !== solution.id 
                                ? <div
                                    className="solution-id-cover"
                                >
                                    <h1>
                                        Solution | {solution?.id}
                                    </h1>
                                </div>
                                : <div className="solution-text-container">
                                    <h1>
                                        {solution?.id} - {solution?.solution}
                                    </h1>

                                    <p>
                                        {solution?.intro}
                                    </p>

                                    {
                                        solutionProducts?.length > 0
                                            ? solutionProducts.map((solution, index) => (
                                                <div key={index}>
                                                    <h2>Products</h2>

                                                    <div className="pillar-product-grid">
                                                        <div>
                                                            <img 
                                                                src={solution?.img}
                                                                alt={`${solution?.name}-img`}
                                                                className="pillar-product-img"
                                                            />

                                                            <h4>{solution?.products?.name}</h4>
                                                            <p>{solution?.no_made} {solution?.name} Made</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                            : null
                                    }
                                </div>
                        }
                    </div>
                )})}
        </div>
    )
}