import { useEffect, useState } from "react";
import { GeneralLayout } from "../../Components/GeneralLayout";
import { PostSection } from "./CrudActions/PostSection";
import { PatchSection } from "./CrudActions/PatchSection";
import { DeleteSection } from "./CrudActions/DeleteSection";
import { useFetch } from "../../../../Requests/useFetch";
import { InputContainer } from "../../Components/InputContainer";

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
    const [sectionPostOrPatch, setSectionPostOrPatch] = useState()
    const [section, setSection] = useState()

    const allHomeSections = appData.allHomeSections
    const setAllHomeSections = appData.setAllHomeSections
    const inputContainer = appData.inputContainer

    // Get selected section when id changes
    useFetch(`/api/homesection/${selectedSectionId}`, setSection, [selectedSectionId, allHomeSections])


    // Define headings for table
    const sectionHeadings = [
        {
            header: "Section", accessor: "heading"
        },
        {
            header: "Info", accessor: "text"
        },
        {
            header: "Img-1", accessor: "img_1",
            render: (value) => (
                value ? <img src={value} alt="" width={80} /> : null
            )
        },
        {
            header: "Img-2", accessor: "img_2",
            render: (value) => (
                value ? <img src={value} alt="" width={80} /> : null
            )
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

    // Define inputs for new or updated instance.
    const sectionInputs = [
        {
            label: "Please enter section title",
            type: "text",
            placeholder: "Please enter section title",
            registerOptions: {
                required: "Please enter a heading",
                validate: value => {
                    const exists = allHomeSections?.some(
                        section => 
                            section.heading.toLowerCase() === value.toLowerCase() &&
                            section.id != selectedSectionId
                    )
                    return !exists || `${value} is already registered`
                }
            },
            name: "heading"
        },

        {
            label: "Please enter section info",
            type: "textarea",
            placeholder: "Please enter section info",
            registerOptions: {required: "Please enter some info"},
            name: "text"
        },

        {
            label: "Please enter image-1",
            type: "text",
            placeholder: "Please enter image-1",
            registerOptions: {},
            name: "img_1"
        },

        {
            label: "Please enter image-2",
            type: "text",
            placeholder: "Please enter image-2",
            registerOptions: {},
            name: "img_2"
        },

        {
            label: "Please enter accessor key",
            type: "text",
            placeholder: "Please enter accessor key",
            registerOptions: {},
            name: "accessor"
        }  
    ]

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
                setPostOrPatch={setSectionPostOrPatch}
            />

            {sectionAction
                ? <div className="popup-container">
                    {sectionAction === "add"
                        ? <PostSection 
                            handleSubmit={handleSubmit}
                            allHomeSections={allHomeSections}
                            setAllHomeSections={setAllHomeSections}
                            setSectionAction={setSectionAction}
                            sectionInputs={sectionInputs}
                            sectionAction={sectionAction}
                            reset={reset}
                            register={register}
                            errors={errors}
                        />
                        : sectionAction === "Edit"
                        ? <PatchSection 
                            deletePatchSection={deletePatchSection}
                            inputContainer={appData?.inputContainer}
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            reset={reset}
                            sectionInputs={sectionInputs}
                            section={section}
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