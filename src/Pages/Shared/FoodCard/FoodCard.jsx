

const FoodCard = ({item}) => {

    const {name, image, recipe, price} = item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="bg-slate-900 text-white absolute top-0 right-0 mr-4 mt-4 px-4 py-2 rounded-xl">${price}</p>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;