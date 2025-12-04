import { useState } from "react";
import { GeneralLayout } from "../../Components/GeneralLayout";
import { PostSection } from "./CrudActions/PostSection";
import { PatchSection } from "./CrudActions/PatchSection";
import { DeleteSection } from "./CrudActions/DeleteSection";

export function AdminHomeSection({
    appData,
    register,
    handleSubmit,
    errors,
    reset
}){
    const [sectionAction, setSectionAction] = useState()
    const [selectedSectionId, setSelectedSectionId] = useState()
    const [selectedSectionName, setSelectedSectionName] = useState()

    const allHomeSections = appData.allHomeSections
    const setAllHomeSections = appData.setAllHomeSections

    const sectionHeadings = [
        {
            header: "Section", accessor: "heading"
        },
        {
            header: "Info", accessor: "text"
        },
        {
            header: "Img-1", accessor: "img_1",
            render: (value) => <img src={value} alt = "" width={80}/>
        },
        {
            header: "Img-2", accessor: "img_2",
            render: (value) => <img src={value} alt="" width={80}/>
        },
        {
            header: "Accessor-Title", accessor: "accessor"
        }
    ]

    const deletePatchSection = {
        selectedSectionId: selectedSectionId,
        setSelectedSectionId: setSelectedSectionId,
        selectedSectionName: selectedSectionName,
        setSelectedSectionName: setSelectedSectionName,
        setSectionAction: setSectionAction,
        setAllHomeSections: setAllHomeSections
    }

    return(
        <div>
            <GeneralLayout 
                title={"Home Sections"}
                tableHeadings={sectionHeadings}
                dataArray={allHomeSections}
                setTableAction={setSectionAction}
                setSelectedCategoryId={setSelectedSectionId}
                setSelectedCategoryName={setSelectedSectionName}
                reset={reset}
            />

            {sectionAction
                ? <div className="popup-container">
                    {sectionAction === "add"
                        ? <PostSection 
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            allHomeSections={allHomeSections}
                            setAllHomeSections={setAllHomeSections}
                            setSectionAction={setSectionAction}
                            inputContainer={appData?.inputContainer}
                        />
                        : sectionAction === "Edit"
                        ? <PatchSection 
                            deletePatchSection={deletePatchSection}
                            inputContainer={appData?.inputContainer}
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            reset={reset}
                        />
                        : <DeleteSection 
                            deletePatchSection={deletePatchSection}
                            handleSubmit={handleSubmit}
                        />
                    }
                </div>
                :
                null
            }
        </div>
    )
}