import "./App.css"

import { useState } from "react"
import { useFetch } from "./Requests/useFetch"
import { Outlet } from "react-router"

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

  useFetch("/api/teams", setAllTeams)
  useFetch("/api/teammember", setAllTeamMembers)
  useFetch("/api/solutions", setAllSolutions)
  useFetch("/api/products", setAllProducts)
  useFetch("/api/donors", setAllDonors)
  useFetch("/api/sustainabilities", setAllUNSustainableGoals)
  useFetch("/api/homesection", setAllHomeSections)
  useFetch("/api/sustainablesolutions", setAllSustainableSolutions)

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
            allTeamMembers: allTeamMembers, setAllTeamMembers: setAllTeamMembers
          }
        }
      />
    </>
  )
}

export default App
