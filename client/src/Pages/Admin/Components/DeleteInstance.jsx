export function DeleteInstance({
    handleSubmit,
    handleDeleteInstance,
    setModelAction
}){
    return(
        <form
            className="admin-form popup-form"
            onSubmit={(e) => {
                e.preventDefault()
                handleDeleteInstance()
            }}
        >
            <h1>
                Confirm Deletion
            </h1>

            <div className="form-button-container">
                <button className="form-button form-submit-button" type="submit">
                    Delete
                </button>

                <button 
                    className="form-button form-cancel-button"
                    onClick={() => setModelAction(null)}
                    type="button"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}