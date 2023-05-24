import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzasImage from '../../../assets/menu/pizza-bg.jpg'
import saladsImage from '../../../assets/menu/salad-bg.jpg'
import soupsImage from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {

    const [menu] = useMenu()
    const todaysOffer = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')



    return (
        <div className="mb-20">
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover image={menuImage} title="Our Menu"></Cover>
            <SectionTitle heading="Today's Offer" subHeading="Don't Miss"></SectionTitle>
            <MenuCategory items={todaysOffer}></MenuCategory>
            <MenuCategory items={desserts} title="dessert" image={dessertImage}></MenuCategory>
            <MenuCategory items={pizzas} title="pizza" image={pizzasImage}></MenuCategory>
            <MenuCategory items={salads} title="salad" image={saladsImage}></MenuCategory>
            <MenuCategory items={soups} title="soup" image={soupsImage}></MenuCategory>
            
        </div>
    );
};

export default Menu;