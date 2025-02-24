import React from 'react';
import './Home.css';
import Product from '../../components/product/Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            title='The lean startup'
            image='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1555947_2997386_379x304_1X_en_US._SY304_CB594429819_.jpg'
            price={29.99}
            rating={5}
          />
          <Product
            title='someee textssadasd as'
            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg'
            price={29.99}
            rating={6}
          />
        </div>
        <div className='home__row'>
          <Product
            title='someee textssadasd sdfs fsd fas'
            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg'
            price={19.99}
            rating={2}
          />
          <Product
            title='someee textssadasdsfsd 23dfsd   as'
            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/Gaming_zone_1x._SY304_CB540253513_.jpg'
            price={39.99}
            rating={3}
          />
          <Product
            title='someee texxxsss textssadasd as'
            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v10._SY304_CB573698005_.jpg'
            price={9.99}
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title=' sadsfdsffsdf sdf asdf asdf asdf sadf saaasd asd af sdf sdf sdsomeee some  texxxsss textssadasd as'
            image='https://m.media-amazon.com/images/I/71r7bLsvaVL._AC_SY200_.jpg'
            price={20.99}
            rating={7}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
