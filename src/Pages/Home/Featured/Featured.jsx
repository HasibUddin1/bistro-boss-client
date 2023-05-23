import SectionTitle from "../../../components/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="w-9/12 mx-auto mb-20 bg-fixed featured-container bg-gray-700 bg-blend-overlay text-white py-10">
            <SectionTitle
                heading="From our menu"
                subHeading="Check it out"
            ></SectionTitle>
            <div className="flex items-center px-16 gap-10 mt-10">
                <div className="w-1/2">
                    <img src={featuredImage} alt="" />
                </div>
                <div className="w-1/2">
                    <p className="text-xl font-semibold">March 20, 2023</p>
                    <p className="uppercase text-xl font-semibold">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-5">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;