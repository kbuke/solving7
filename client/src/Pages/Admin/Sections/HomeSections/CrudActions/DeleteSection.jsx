import { useDelete } from "../../../../../Requests/useDelete"
import { DeleteInstance } from "../../../Components/DeleteInstance"

export function DeleteSection({
    deletePatchSection,
    handleSubmit
}){

    const handleDeleteSection = () => {
        useDelete(
            `/api/homesection/${deletePatchSection?.selectedSectionId}`,
            deletePatchSection?.setAllHomeSections,
            deletePatchSection?.selectedSectionId,
            deletePatchSection?.setSectionAction
        )
    }

    return(
        <DeleteInstance 
            handleSubmit={handleSubmit}
            handleDeleteInstance={handleDeleteSection}
            setModelAction={deletePatchSection?.setSectionAction}
        />
    )
}