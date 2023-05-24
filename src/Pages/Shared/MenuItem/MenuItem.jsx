

const MenuItem = ({item}) => {

    const {name, image, recipe, price} = item

    return (
        <div className="flex justify-between gap-5">
            <div>
                <img className="w-[120px] rounded-e-full rounded-b-full" src={image} alt="" />
            </div>
            <div>
                <h4 className="font-semibold">{name}</h4>
                <p>{recipe}</p>
            </div>
            <div className="text-yellow-600 font-semibold">{price}</div>
        </div>
    );
};

export default MenuItem;