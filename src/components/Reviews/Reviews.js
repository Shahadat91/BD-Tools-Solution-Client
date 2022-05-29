import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useReviews from "../../hooks/useReviews";

const Reviews = () => {
  const [reviews] = useReviews([]);

  const makeStar =(rating)=> {
      let _star = [];
      for (let i = 0; i < rating; i++) {
        _star.push(i)
      }
      return _star;
  }


  return (
    <div>
      <h2 className="text-center py-5">What's Our Customer Say!!!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {reviews?.map((review) => (
          <div key={review._id}>
            <div className="flex items-center">
              <h5 className="mr-2">{review.name}</h5>
              <img className="w-12" src={review.img} alt="" />
            </div>

            <div>

            </div>

              <p>
                  {(makeStar(review.rating)||[]).map(i=> <small key={i+review._id}> <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} /> </small> )}
              </p>

            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
