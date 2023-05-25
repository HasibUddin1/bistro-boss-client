import FoodCard from "../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
                onSlideChange={(swiper) => {
                    console.log(swiper.realIndex)
                }}
            >
                <SwiperSlide>
                    <div className="grid md:grid-cols-3 gap-10 mt-10 mb-10">
                        {
                            items.slice(0, 6).map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
                {items.length > 6 && <SwiperSlide>
                    <div className="grid md:grid-cols-3 gap-10 mt-10 mb-10">
                        {
                            items.slice(6, 12).map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>}
                {items.length > 12 && <SwiperSlide>
                    <div className="grid md:grid-cols-3 gap-10 mt-10 mb-10">
                        {
                            items.slice(12, 18).map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>}
            </Swiper>
        </div>
    );
};

export default OrderTab;