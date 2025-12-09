import { useEffect, useState } from "react"
import { usePatch } from "../../../../../Requests/usePatch"
import { PostPatchInstance } from "../../../Components/PostPatchInstance"

export function PatchSection({
  deletePatchSection,
  handleSubmit,
  reset,
  sectionInputs,
  section,
  register
}) {
  
  useEffect(() => {
    if (section) {
      reset({
        heading: section.heading,
        text: section.text,
        img_1: section.img_1,
        img_2: section.img_2,
        accessor: section.accessor,
      })
    }
  }, [section, reset])

  const handleSectionPatch = (formData) => {
    const patchData = {
      homeSectionHeading: formData.heading,
      homeSectionText: formData.text,
      homeSectionImg1: formData.img_1,
      homeSectionImg2: formData.img_2,
      accessor: formData.accessor,
    }

    usePatch(
      patchData,
      `/api/homesection/${deletePatchSection?.selectedSectionId}`,
      deletePatchSection?.selectedSectionId,
      deletePatchSection?.setAllHomeSections,
      deletePatchSection.setSectionAction
    )
  }

  return (
    <PostPatchInstance
      patchOrPost={"patch"}
      handleInstancePatch={handleSectionPatch}
      handleSubmit={handleSubmit}
      inputArray={sectionInputs}
      setInstanceAction={deletePatchSection?.setSectionAction}
      reset={reset}
      register={register}
    />
  )
}
