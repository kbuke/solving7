import { useState } from "react";

export function MissionProducts({
    appData,
    register,
    handleSubmit,
    errors
}){
    const [missionProductAction, setMissionProductAction] = useState()
    const [missionId, setMissionId] = useState()
    const [productId, setProductId] = useState()

    const missionProductHeader = [
        {
            header: "Product", accessor: "name"
        }
    ]

    
}