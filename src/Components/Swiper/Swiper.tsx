import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <Swiper
            className='max-w-xs'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <h2 className='font-bold py-1'>لورم ایپسوم متن ساختگی با تولید سادگی</h2>
                <div className='opacity-75 py-1'>1 ساعت قبل</div>
                <p className='italic py-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </SwiperSlide>
            <div className='flex justify-between mt-auto'>
                <input className='p-2 bg-yellow-300 rounded font-bold my-4 cursor-help' type="button" value="مشاهد نکته" />
                <input className='p-2 bg-yellow-300 rounded font-bold my-4 cursor-grab' type="button" value="رد کردن" />
            </div>
            <SwiperSlide>
                <h2 className='font-bold py-1'>لورم ایپسوم متن ساختگی با تولید سادگی</h2>
                <div className='opacity-75 py-1'>5 ساعت قبل</div>
                <p className='italic py-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و می باشد.</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2 className='font-bold py-1'>لورم ایپسوم متن ساختگی با تولید سادگی</h2>
                <div className='opacity-75 py-1'>6 ساعت قبل</div>
                <p className='italic py-1'>لورم ایپسوم متن ساختگی با تولید فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2 className='font-bold py-1'>لورم ایپسوم متن ساختگی با تولید سادگی</h2>
                <div className='opacity-75 py-1'>18 ساعت قبل</div>
                <p className='italic py-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2 className='font-bold py-1'>لورم ایپسوم متن ساختگی با تولید سادگی</h2>
                <div className='opacity-75 py-1'>21 ساعت قبل</div>
                <p className='italic py-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ابزارهای کاربردی می باشد.</p>
            </SwiperSlide>
        </Swiper>
    );
};