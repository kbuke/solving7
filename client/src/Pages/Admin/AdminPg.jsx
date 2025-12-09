import { useOutletContext } from "react-router"
import { AdminNav } from "./Sections/AdminNav"
import { AdminTeam } from "./Sections/Teams/AdminTeam"
import { AdminGoals } from "./Sections/Goals/AdminGoals"
import { useForm } from "react-hook-form"
import { AdminHomeSection } from "./Sections/HomeSections/AdminHomeSection"
import { SolutionGoals } from "./Sections/SustainableGoals/SolutionGoals"
import { AdminProducts } from "./Sections/Products/AdminProducts"

import "./Admin.css"
import { UnitedNationsGoals } from "./Sections/UnitedNationsGoals/UnitedNationGoals"
import { AdminTeamMembers } from "./Sections/TeamMembers/AdminTeamMembers"

export function AdminPg() {
  const appData = useOutletContext()

  const loggedUser = appData?.loggedUser
  const setLoggedUser = appData?.setLoggedUser

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm()

  return loggedUser ? (
    <div>
      <AdminNav loggedUser={loggedUser} setLoggedUser={setLoggedUser} />

      <AdminHomeSection
        appData={appData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
      />

      <AdminTeam
        appData={appData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
      />

      <AdminTeamMembers 
        appData={appData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
        control={control}
        loggedUser={loggedUser}
      />

      <AdminGoals
        appData={appData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
      />

      <SolutionGoals
        appData={appData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
        control={control}
      />

      <AdminProducts
        appData={appData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
        control={control}
      />

      <UnitedNationsGoals 
        appData={appData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
      />
    </div>
  ) : (
    <h1>You're not allowed here</h1>
  )
}
