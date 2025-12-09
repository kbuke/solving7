export function useDelete(url, setState, instanceId, setDelete){
    console.log(url)
    fetch(url, {
        method: "DELETE"
    })
        .then(r => {
            if(r.ok){
                setState(states => states.filter(state => state.id !== instanceId))
            }
        })
        .then(() => setDelete(null))
}