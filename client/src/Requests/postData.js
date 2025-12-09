export function postData(
    url, information, prevState, setState, setAction
){
    console.log("I hear you loud and clear")
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(information)
    })
        .then(r => r.json()
        .then(newAddition => {
            setState([...prevState, newAddition])
        })
    )
    setAction(null)
}