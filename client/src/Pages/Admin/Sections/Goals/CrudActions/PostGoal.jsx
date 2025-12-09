import { postData } from "../../../../../Requests/postData"
import { PostPatchGoal } from "./PostPatchGoal"
import { useEffect } from "react"
import { PostPatchInstance } from "../../../Components/PostPatchInstance"

export function PostGoal({
  handleSubmit,
  allSolutions,
  setAllSolutions,
  setSolutionAction,
  solutionInputs,
  solutionAction,
  reset,
  register,
  errors
}) {
  useEffect(() => {
      if (!solutionAction) return
  
      if (solutionAction === "add") {
        reset({
          solution: "",
          intro: "",
          img: ""
        })
      }
    }, [solutionAction])
  
    const handleSolutionPost = (formData) => {
      console.log(formData)
      postData("/api/solutions", formData, allSolutions, setAllSolutions, setSolutionAction)
    }
  
    return (
      <PostPatchInstance
        patchOrPost={"post"}
        handleInstancePost={handleSolutionPost}
        handleSubmit={handleSubmit}
        inputArray={solutionInputs}
        setInstanceAction={setSolutionAction}
        reset={reset}
        register={register}
        errors={errors}
      />
    )
}
