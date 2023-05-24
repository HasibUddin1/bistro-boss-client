
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu] = useMenu()

    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div className="mb-20">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Check it out"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 w-9/12 mx-auto gap-5">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;