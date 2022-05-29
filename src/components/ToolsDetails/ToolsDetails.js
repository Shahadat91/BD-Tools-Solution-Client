import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useToolDetails from "../../hooks/useToolDetails";

const ToolsDetails = () => {
  const { toolId } = useParams();
  const [tool] = useToolDetails(toolId);
  const [userInput, setUserInput] = useState();

  useEffect(() => {
    setUserInput(tool.minQuantity);
  }, [tool]);

  return (
    <div className="d-flex flex-wrap justify-center items-center">
      <h2 className="text-center w-full py-4">
        This is Purchase Tools Page. Any One Can Purchase Here.
      </h2>
      <div className="card w-80 shadow-xl">
        <figure className="px-10 pt-10">
          <img className="w-32" src={tool.img} alt="img" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tool.name}</h2>
          <p>{tool.description} </p>
          <small>Price: ${tool.price}</small>
          <small>Min Quantity: {tool.minQuantity}pcs</small>
          <small>Available Quantity: {tool.availableQuantity}pcs</small>

          <label htmlFor="userinput">order item</label>
          <input
            type="number"
            name=""
            value={userInput}
            onChange={(e) => setUserInput(parseInt(e.target.value || null))}
            id="userinput"
          />

          {/* <label htmlFor="">Minimum Order Quantity</label>
          <input type="text" name="" value={tool.minQuantity} id="" />
          <label htmlFor="">Available Quantity</label>
          <input type="text" name="" value={tool.maxQuantity} id="" /> */}
          <div className="card-actions">
            {/* {
              "is true: " +  (userInput<tool.minQuantity) + ' - ' + (userInput > tool.maxQuantity)
            }

            <br/> */}

            {userInput < tool.minQuantity ||
            userInput > tool.availableQuantity ? (
              <button className="btn btn-error disabled">Proceed Order</button>
            ) : (
              <Link className="btn btn-primary" to={`/proceedorder/${toolId}`}>
                Proceed Order
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsDetails;
