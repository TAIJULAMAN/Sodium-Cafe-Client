
const ItemCard = ({item}) => {
    const {name,image,recipe}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">order now</button>
          </div>
        </div>
      </div>
    );
};

export default ItemCard;