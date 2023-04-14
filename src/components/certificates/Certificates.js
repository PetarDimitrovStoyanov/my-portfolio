import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import './Certificates.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation, Autoplay} from "swiper";
import slide_image_1 from "../../assets/certificates/agile-scrum.jpg";
import slide_image_2 from "../../assets/certificates/angular.jpg";
import slide_image_3 from "../../assets/certificates/basics.jpg";
import slide_image_4 from "../../assets/certificates/full-stack.jpg";
import slide_image_5 from "../../assets/certificates/html-css.jpg";
import slide_image_6 from "../../assets/certificates/java-advanced.jpg";
import slide_image_7 from "../../assets/certificates/java-fundamentals.jpg";
import slide_image_8 from "../../assets/certificates/java-oop.jpg";
import slide_image_9 from "../../assets/certificates/java-web.jpg";
import slide_image_10 from "../../assets/certificates/js-advanced.jpg";
import slide_image_11 from "../../assets/certificates/js-applications.jpg";
import slide_image_12 from "../../assets/certificates/mysql.jpg";
import slide_image_13 from "../../assets/certificates/react.jpg";
import slide_image_14 from "../../assets/certificates/spring-data.jpg";
import slide_image_15 from "../../assets/certificates/spring-advanced.jpg";
import slide_image_16 from "../../assets/certificates/spring-fundamentals.jpg";

export default function Certificates() {

    const certificates = [
        slide_image_1,
        slide_image_2,
        slide_image_3,
        slide_image_4,
        slide_image_5,
        slide_image_6,
        slide_image_7,
        slide_image_8,
        slide_image_9,
        slide_image_10,
        slide_image_11,
        slide_image_12,
        slide_image_13,
        slide_image_14,
        slide_image_15,
        slide_image_16,
    ]

    return (
        <section className="certificates">
            <div className="container">
                <h1 className="sub-title">My Certificates</h1>
                <div className="certificate-list">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        speed={3000}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{el: '.swiper-pagination', clickable: true}}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="swiper_container"
                    >
                        {certificates.map(certificate =>
                            <SwiperSlide key={certificate}>
                                <img src={certificate} alt="slide_image" />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
