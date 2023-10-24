import { document } from 'postcss';
import slider1 from '../../assets/images/homeCarousel/1.jpg'
import slider2 from '../../assets/images/homeCarousel/2.jpg'
import slider3 from '../../assets/images/homeCarousel/3.jpg'
import slider4 from '../../assets/images/homeCarousel/4.jpg'
import BannerText from './BannerText';
import CaroselIcon from './CaroselIcon';

const Banner = () => {


    return (
      <div className="carousel w-full py-8 max-h-[700px]">
        <div id="slide1" className="carousel-item relative  w-full">
          <img src={slider1} className="w-full rounded-xl" />
          <BannerText></BannerText>
          <CaroselIcon slide="4" slide2="2"></CaroselIcon>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full rounded-xl " />
          <BannerText></BannerText>
          <CaroselIcon slide="1" slide2="3"></CaroselIcon>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full rounded-xl " />
          <BannerText></BannerText>
          <CaroselIcon slide="2" slide2="4"></CaroselIcon>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider4} className="w-full rounded-xl " />
          <BannerText></BannerText>
          <CaroselIcon slide="3" slide2="1"></CaroselIcon>
        </div>
      </div>
    );
};

export default Banner;