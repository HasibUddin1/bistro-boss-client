import { Helmet } from "react-helmet-async";


const AddItems = () => {

    const handleAddItem = event => {
        event.preventDefault()

        const form = event.target
        const recipeName = form.recipeName.value
        const category = form.category.value
        console.log(recipeName, category)
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Add Items</title>
            </Helmet>
            <form onSubmit={handleAddItem}>
                <div>
                    <label className="label label-text">Recipe Name*</label>
                    <input type="text" name="recipeName" placeholder="Recipe Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select name="category" className="select select-bordered">
                        <option defaultChecked>Pick one</option>
                        <option>Salad</option>
                        <option>Pizza</option>
                        <option>Soups</option>
                        <option>Desserts</option>
                        <option>Drinks</option>
                    </select>
                </div>
                <div>
                    <label className="label label-text">Price*</label>
                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className="btn" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;