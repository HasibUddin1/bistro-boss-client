import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle";


const Categories = () => {
    return (
        <div className="w-9/12 mx-auto">
            <div>
                <SectionTitle
                    heading={"Order Online"}
                    subHeading={"From 11:00am to 10:00pm"}
                ></SectionTitle>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <div>
                        <h3 className="text-3xl text-white w-1/2 mx-auto font-bold -mt-16">Salads</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <div>
                        <h3 className="text-3xl text-white w-1/2 mx-auto font-bold -mt-16">Pizzas</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <div>
                        <h3 className="text-3xl text-white w-1/2 mx-auto font-bold -mt-16">Soups</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <div>
                        <h3 className="text-3xl text-white w-1/2 mx-auto font-bold -mt-16">Desserts</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <div>
                        <h3 className="text-3xl text-blue-500 w-1/2 mx-auto font-bold -mt-16">Salads</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;