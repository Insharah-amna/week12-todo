"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SlideContent from "./SlideContent";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Slider() {
	return (
		<>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="min-h-screen w-full bg-linear-to-r from-amber-200 to-orange-300 flex flex-col items-center justify-center"
				loop={true}
				speed={800}
			>
				<SwiperSlide>
					<SlideContent heading={"Explore our Blogs"} buttonText={"Explore"} />
				</SwiperSlide>

				<SwiperSlide className="flex flex-col gap-4 items-center justify-center min-h-screen">
					<SlideContent
						heading={"Go to Blogs"}
						buttonText={
							<>
								Blogs <IoArrowForwardSharp />
							</>
						}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
