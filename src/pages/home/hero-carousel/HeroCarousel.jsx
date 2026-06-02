import { Swiper, SwiperSlide } from 'swiper/react';
import PrimaryButton from './../../../components/primary-button/PrimaryButton';
import SecondaryButton from './../../../components/secondary-button/SecondaryButton';
import bannerPic1 from './../../../assets/banner/male_courier_with_a_car.png';
import bannerPic2 from './../../../assets/banner/delivery_man_1.png';
import bannerPic3 from './../../../assets/banner/delivery_man_2.png';
import deliveryMan from './../../../assets/tiny-deliveryman.png';
import fastDelivery from './../../../assets/fast-delivery.svg';
import clock from './../../../assets/clock.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import { useState } from 'react';

const HeroCarousel = () => {
    // const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        {
            id: 1, logo: deliveryMan, image: bannerPic1,
            heading: <h2 className='font-extrabold text-2xl min-[30rem]:text-4xl sm:text-[40px] md:text-[56px] lg:text-5xl xl:text-6xl text-[#03373D]'>We Make Sure Your<br /><span className='text-primary'>Parcel Arrives</span> On Time<br />– No Fuss.</h2>,
            description: ["Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal", "packages to business shipments — we deliver on time, every time."]
        },
        {
            id: 2, logo: fastDelivery, image: bannerPic2,
            heading: <h2 className='font-extrabold text-2xl min-[30rem]:text-4xl sm:text-5xl md:text-[56px] lg:text-5xl xl:text-6xl text-[#03373D]'>Fastest<br /><span className='text-primary'>Delivery</span> & Easy<br /><span className='text-primary'>Pickup</span></h2>,
            description: ["Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal", "packages to business shipments — we deliver on time, every time."]
        },
        {
            id: 3, logo: clock, image: bannerPic3,
            heading: <h2 className='font-extrabold text-2xl min-[30rem]:text-4xl sm:text-5xl md:text-[56px] lg:text-5xl xl:text-6xl text-[#03373D] mt-4'>Delivery in <span className='text-primary'>30</span><br /><span className='text-primary'>Minutes</span> at your<br />doorstep</h2>,
            description: ["Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From persona", "packages to business shipments — we deliver on time, every time."]
         },
    ];

    return (
        <div className='relative mt-8 w-full h-175 rounded-2xl overflow-hidden bg-radial sm:bg-linear-to-r from-white to-primary/25 flex justify-center items-center'>
            <div
                className='hidden sm:block absolute inset-0 bg-linear-to-t from-primary to-[#F7FDEC] w-full h-175'
                style={{ clipPath: 'url(#clip)' }}
            >
                <svg width={'0'} height={'0'}>
                    <defs>
                        <clipPath id='clip' clipPathUnits={'objectBoundingBox'}>

                            <path
                                d='M 0.65 0
                                L 1 0
                                L 1 1
                                L 0 1
                                L 0 0.98
                                L 0.75 0.70 Z'
                            />

                        </clipPath>
                    </defs>
                </svg>
            </div>

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={
                    {
                        delay: 5000,
                        disableOnInteraction: false,
                    }
                }
                className='hero-swiper absolute inset-0 w-full h-175'>
                {
                    slides.map(slide => {
                        return (
                            <SwiperSlide className='px-4 py-14 min-[30rem]:py-18 sm:px-18 sm:py-18 md:p-15 lg:px-18 lg:py-30'>
                                <div className='flex flex-col lg:flex-row justify-evenly items-center gap-16'>
                                    <div className='order-2 lg:order-1 text-center lg:text-left'>
                                        <span className='hidden lg:block'>
                                            <img className={`${slide.logo ? 'block' : 'hidden'} h-25`} src={slide.logo} alt="" />
                                        </span>
                                        {
                                            slide.heading
                                        }
                                        <p className='font-normal text-sm min-[30rem]:text-base text-[#606060] mt-4'>{slide.description?.[0]}<br className='hidden md:block' /> {slide.description?.[1]}</p>

                                        <div className='flex flex-col min-[30rem]:flex-row min-[30rem]:justify-center lg:justify-start gap-4 mt-8'>
                                            <PrimaryButton buttonStyle='px-8 py-3 rounded-full text-base' buttonText='Track Your Parcel' arrowStyle='w-12 h-12 ' />
                                            <SecondaryButton buttonStyle='px-8 py-3 rounded-xl sm:bg-[#03373D] sm:text-white' buttonText='Be a Rider' />
                                        </div>
                                    </div>
                                    <img className='order-1 lg:order-2 w-50 h-auto md:h-40 md:w-auto lg:w-75 lg:h-auto xl:w-125' src={slide.image} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default HeroCarousel;