import { useEffect, useState } from "react";

const useReviews = () =>{
    const [reviews, setReviews] = useState();
    useEffect( () =>{
        fetch(`https://fathomless-spire-40584.herokuapp.com/review`)
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[]);
    return [reviews, setReviews];
}

export default useReviews;