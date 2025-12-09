import { postData } from "../../../../../Requests/postData"
import { PostPatchInstance } from "../../../Components/PostPatchInstance"
import { useEffect } from "react"

export function PostSection({
  handleSubmit,
  allHomeSections,
  setAllHomeSections,
  setSectionAction,
  sectionInputs,
  sectionAction,
  reset,
  register,
  errors
}) {
  //Reset post data after every action change
  useEffect(() => {
    if (!sectionAction) return

    if (sectionAction === "add") {
      reset({
        heading: "",
        text: "",
        img_1: "",
        img_2: "",
        accessor: "",
      })
    }
  }, [sectionAction])

  const handleSectionPost = (formData) => {
    console.log(formData)
    postData(
      "/api/homesection",
      formData,
      allHomeSections,
      setAllHomeSections,
      setSectionAction
    )
  }

  return (
    <PostPatchInstance
      patchOrPost={"post"}
      handleInstancePost={handleSectionPost}
      handleInstancePatch={() => {}}
      handleSubmit={handleSubmit}
      inputArray={sectionInputs}
      setInstanceAction={setSectionAction}
      reset={reset}
      register={register}
      errors={errors}
    />
  )
}
