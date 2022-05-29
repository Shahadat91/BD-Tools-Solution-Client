import { useEffect, useState } from "react"

const useToolDetails = toolId =>{
    const [tool, setTool] = useState({});

    useEffect(() =>{
        const url = `https://fathomless-spire-40584.herokuapp.com/tool/${toolId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTool(data));
    },[toolId]);

    return[tool];
}

export default useToolDetails;