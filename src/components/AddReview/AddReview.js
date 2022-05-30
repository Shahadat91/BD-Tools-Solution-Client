import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://fathomless-spire-40584.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("item added successfully");
      });
  };
  return (
    <div>
      <h2 className="text-center my-5">Please Add Your Review.</h2>
      <form
        className="d-flex flex-column w-50 mx-auto text-center shadow-2xl p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-3"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />

        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-3"
          placeholder="Rating"
          type="number"
          {...register("rating", { required: true })}
        />
        <input
          className="mb-3"
          placeholder="Photo URL"
          type="text"
          {...register("img", { required: true })}
        />
        <input
          className="bg-slate-900 w-50 mx-auto py-2 my-2 text-lg text-white rounded-xl"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
