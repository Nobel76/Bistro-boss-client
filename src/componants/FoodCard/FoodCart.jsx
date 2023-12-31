

const FoodCart = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="absolute right-0 bg-slate-800 mr-4 mt-4 px-4 text-white">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="text-white btn  btn-outline bg-slate-800 border-orange-400 border-0 border-b-4 mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCart;