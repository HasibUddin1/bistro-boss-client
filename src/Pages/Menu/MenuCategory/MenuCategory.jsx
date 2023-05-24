import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, image}) => {
    return (
        <div>
            {title && <Cover title={title} image={image}></Cover>}
            <div className="grid md:grid-cols-2 w-9/12 mx-auto gap-5 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;