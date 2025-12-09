import "./SustainabilityPopUp.css"

export function SustainabilityPopUp({
    selectedSustainableGoal,
    setSelectedSustainableGoal
}){
    const unGoalCover = (number) => {
        return(
            `/UN-Logos/${number}/${number}-cover.jpg`
        )
    }
    return(
        <div 
            className="sustainable-popup-container"
        >
            <img 
                src={unGoalCover(selectedSustainableGoal?.id)}
                className="unGoalImg"
                alt={`un-goal-${unGoalCover(selectedSustainableGoal?.id)}-logo`}
            />

            <div>
                <div className="un-sustainable-info-container">
                    <h1>{selectedSustainableGoal?.id} - {selectedSustainableGoal?.goal}</h1>

                    {selectedSustainableGoal?.info
                        ?.split("\n")
                        .map((para, index) => (
                            <p key={index}>
                                {para}
                            </p>
                        ))
                    }
                </div>

                <button 
                    className="close-un-sustainable-button"
                    onClick={() => setSelectedSustainableGoal(null)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}