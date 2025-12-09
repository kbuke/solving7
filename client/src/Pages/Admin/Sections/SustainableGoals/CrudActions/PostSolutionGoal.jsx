
import { postData } from "../../../../../Requests/postData"
import { PostPatchInstance } from "../../../Components/PostPatchInstance"

export function PostSolutionGoal({
  handleSubmit,
  allSustainableSolutions,
  setAllSustainableSolutions,
  setSolutionGoalAction,
  renderedUnOptions,
  solutionGoalAction,
  reset,
  register,
  errors,
  goalId,
  sustainableId,
  control
}) {

  const handleSustainableSolutionPost = (formData) => {
    console.log(formData)
    formData.solutionId = goalId
    formData.sustainableId = sustainableId
    postData(
      "/api/sustainablesolutions",
      formData,
      allSustainableSolutions,
      setAllSustainableSolutions,
      setSolutionGoalAction
    )
  }

  return (
    <PostPatchInstance 
      patchOrPost={"post"}
      handleInstancePost={handleSustainableSolutionPost}
      handleSubmit={handleSubmit}
      inputArray={renderedUnOptions}
      setInstanceAction={setSolutionGoalAction}
      reset={reset}
      register={register}
      errors={errors}
      control={control}
    />
  )
}
