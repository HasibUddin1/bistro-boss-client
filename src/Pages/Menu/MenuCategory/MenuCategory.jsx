import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const MenuCategory = ({ items, title, image }) => {
    return (
        <div>
            {title && <Cover title={title} image={image}></Cover>}
            <div className="grid md:grid-cols-2 w-9/12 mx-auto gap-5 mt-16 mb-5">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mb-16">
                <Link to={`/ourShop/${title}`}><button className="btn btn-outline border-0 border-b-4 text-black mt-5">Order Your Favorite Food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;