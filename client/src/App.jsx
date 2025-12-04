import "./App.css"

import { useState } from "react"
import { useFetch } from "./Requests/useFetch"
import { Outlet } from "react-router"

import { FormGroup } from "./Components/FormGroup"

import ReactSelect from "react-select"

function App() {
  const [loading, setLoading] = useState(false)
  const [allSolutions, setAllSolutions] = useState([])
  const [allHomeSections, setAllHomeSections] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [allSustainableSolutions, setAllSustainableSolutions] = useState([])
  const [allUNSustainableGoals, setAllUNSustainableGoals] = useState([])
  const [allTeams, setAllTeams] = useState([])
  const [allTeamMembers, setAllTeamMembers] = useState([])
  const [allDonors, setAllDonors] = useState([])
  const [loggedUser, setLoggedUser] = useState(null)

  console.log(allSolutions)

  useFetch("/api/session", setLoggedUser)

  useFetch("/api/teams", setAllTeams)
  useFetch("/api/teammember", setAllTeamMembers)
  useFetch("/api/solutions", setAllSolutions, [allSustainableSolutions, allUNSustainableGoals])
  useFetch("/api/products", setAllProducts)
  useFetch("/api/donors", setAllDonors)
  useFetch("/api/sustainabilities", setAllUNSustainableGoals)
  useFetch("/api/homesection", setAllHomeSections)
  useFetch("/api/sustainablesolutions", setAllSustainableSolutions)

  const inputContainer = (
    label, type, placeholder, register, errorMessage,
    renderedOptions, setOptionId, chosenId
  ) => {
    return(
            <div
                className="form-input-div"
            >
                <div
                    className="form-input-grid"
                >
                    <label
                        className="form-input-label"
                    >
                        {label}
                    </label>

                    {type === "textarea"
                        ? <textarea 
                            className="form-text-area"
                            type={type}
                            placeholder={placeholder}
                            {...register}
                        />
                    : type === "text"
                       ? <input 
                            type={type}
                            placeholder={placeholder}
                            {...register}
                        />
                        : <ReactSelect 
                          className="react-select"
                          options={renderedOptions}
                          onChange={option => setOptionId(option.value)}
                          value={renderedOptions.find(option => option.value === chosenId)}
                        />
                    }
                </div>
                {errorMessage ?
                    <FormGroup errorMessage={errorMessage}/>
                    :
                    null
                }
            </div>
        )
  }

  return(
    <>
      <Outlet 
        context={
          {
            allSolutions: allSolutions, setAllSolutions: setAllSolutions,
            allHomeSections: allHomeSections, setAllHomeSections: setAllHomeSections,
            allProducts: allProducts, setAllProducts: setAllProducts,
            allSustainableSolutions: allSustainableSolutions, setAllSustainableSolutions,
            allTeams: allTeams, setAllTeams: setAllTeams,
            allUNSustainableGoals: allUNSustainableGoals, setAllUNSustainableGoals: setAllUNSustainableGoals,
            allTeamMembers: allTeamMembers, setAllTeamMembers: setAllTeamMembers,
            loggedUser: loggedUser, setLoggedUser: setLoggedUser,
            inputContainer: inputContainer
          }
        }
      />
    </>
  )
}

export default App
