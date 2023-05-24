import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from '../../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div className="mb-20">
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover image={menuImage} title="Our Menu"></Cover>
        </div>
    );
};

export default Menu;