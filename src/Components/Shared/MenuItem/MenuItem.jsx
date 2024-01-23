const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-4 p-2">
      <img className="w-[100px] rounded-lg" src={image} alt="food pic" />
      <div>
        <h1 className="uppercase">{name} ------------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-orange-800">{price}</p>
    </div>
  );
};

export default MenuItem;
