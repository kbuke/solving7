import { useEffect } from "react"
import { postData } from "../../../../../Requests/postData"
import { PostPatchInstance } from "../../../Components/PostPatchInstance"

export function PostTeam({
  handleSubmit,
  allTeams,
  setAllTeams,
  setTeamAction,
  teamInputs,
  teamAction,
  reset,
  register,
  errors
}) {
  useEffect(() => {
    if (!teamAction) return

    if (teamAction === "add") {
      reset({
        intro: "",
        name: "",
      })
    }
  }, [teamAction])

  const handleTeamPost = (formData) => {
    console.log(formData)
    postData("/api/teams", formData, allTeams, setAllTeams, setTeamAction)
  }

  return (
    <PostPatchInstance
      patchOrPost={"post"}
      handleInstancePost={handleTeamPost}
      handleSubmit={handleSubmit}
      inputArray={teamInputs}
      setInstanceAction={setTeamAction}
      reset={reset}
      register={register}
      errors={errors}
    />
  )
}
