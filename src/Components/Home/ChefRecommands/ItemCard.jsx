import { Link } from "react-router-dom";

const ItemCard = ({item}) => {
    const {name,image,recipe}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl  my-5 ml-10 md:ml-0 lg:ml-5">
        <figure><img src={image}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          {/* <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">order now</button>
          </div> */}
           <div className="text-center my-5">
       <Link to="/order/salad">
       <button className="btn border-[#2B3440] btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
       </Link>
      </div>
        </div>
      </div>
    );
};

export default ItemCard;