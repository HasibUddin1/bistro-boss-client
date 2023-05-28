

const FoodCard = ({item}) => {

    const {name, image, recipe, price} = item

    const handleAddToCart = item => {
        console.log(item)
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="bg-slate-900 text-white absolute top-0 right-0 mr-4 mt-4 px-4 py-2 rounded-xl">${price}</p>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-orange-400 border-b-4 text-orange-400 bg-slate-100 mt-5">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;