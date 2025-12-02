import { useDelete } from "../../../../../Requests/useDelete"

export function DeleteSection({
    deletePatchSection,
    handleSubmit
}){
    const handleDeleteSection = () => {
        useDelete(
            `/api/homesection/${deletePatchSection?.selectedSectionId}`,
            deletePatchSection.setAllHomeSections,
            deletePatchSection.selectedSectionId,
            deletePatchSection.setSectionAction
        )
    }

    return(
        <form
            className="admin-form popup-form"
            onSubmit={handleSubmit(handleDeleteSection)}
        >
            <h1>
                Confirm Deletion of Section: {deletePatchSection.selectedSectionName}
            </h1>

            <div className="form-button-container">
                <button className="form-button form-submit-button">
                    Delete
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => deletePatchTeam.setSectionAction(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}