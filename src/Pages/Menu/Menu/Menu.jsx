import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const Menu = () => {
    return (
        <div className="mb-20">
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover image={menuImage} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={menuImage} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={menuImage} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;