import { useEffect } from "react"
import { postData } from "../../../../../Requests/postData"
import { PostPatchInstance } from "../../../Components/PostPatchInstance"

export function PostUnGoal({
  handleSubmit,
  allUNSustainableGoals,
  setAllUNSustainableGoals,
  setUnAction,
  unInputs,
  unAction,
  reset,
  register,
  errors
}) {
  console.log(unAction)
  useEffect(() => {
    if(!unAction) return; 

    if(unAction === "add"){
      reset({
        goal: "",
        logo: "",
        img: "",
        info: ""
      })
    }
  }, [unAction])

  const handleUnPost = (formData) => {
    postData(
      "/api/sustainabilities",
      formData,
      allUNSustainableGoals,
      setAllUNSustainableGoals,
      setUnAction
    )
  }

  return (
    <PostPatchInstance 
      patchOrPost={"post"}
      handleInstancePost={handleUnPost}
      handleSubmit={handleSubmit}
      inputArray={unInputs}
      setInstanceAction={setUnAction}
      reset={reset}
      register={register}
      errors={errors}
    />
  )
}
