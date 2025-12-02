import { useEffect, useState } from "react";
import { useFetch } from "../../../../../Requests/useFetch";
import { usePatch } from "../../../../../Requests/usePatch";
import { PostPatchSection } from "./PostPatchSection";

export function PatchSection({
    deletePatchSection,
    inputContainer,
    register,
    handleSubmit,
    errors,
    reset
}){
    const [section, setSection] = useState()

    useFetch(`/api/homesection/${deletePatchSection?.selectedSectionId}`, setSection)

    useEffect(() => {
        if(section){
            reset({
                heading: section.heading,
                text: section.text,
                img_1: section.img_1,
                img_2: section.img_2,
                accessor: section.accessor
            })
        }
    }, [section, reset])

    const handleSectionPatch = (formData) => {
        console.log(formData)
        const patchData = {
            homeSectionHeading: formData.heading,
            homeSectionText: formData.text,
            homeSectionImg1: formData.img_1,
            homeSectionImg2: formData.img_2,
            accessor: formData.accessor
        }

        usePatch(
            patchData, `/api/homesection/${deletePatchSection?.selectedSectionId}`,
            deletePatchSection?.selectedSectionId, deletePatchSection?.setAllHomeSections,
            deletePatchSection.setSectionAction
        )
    }

    return(
        <PostPatchSection 
            patchOrPost={"patch"}
            allSections={deletePatchSection?.allHomeSections}
            setSectionAction={deletePatchSection?.setSectionAction}
            handleSectionPatch={handleSectionPatch}
            handleSubmit={handleSubmit}
            inputContainer={inputContainer}
            register={register}
            errors={errors}
            section={section}
        />
    )
}