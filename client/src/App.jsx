import "./App.css"

import { useState } from "react"
import { useFetch } from "./Requests/useFetch"

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

  console.log(allSolutions)
}

export default App
