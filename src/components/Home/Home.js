import React from 'react';
import "./Home.css";
// import Product from '../Product/Product';
import CategoryRow from '../CategoryRow/CategoryRow';
import CategoryBanner from '../CategoryBanner/CategoryBanner';
import { categoryRows, categoryBanners } from '../../data/categories';
import Carousel from 'react-elastic-carousel';
import { heroImages } from '../../data/heroImages';

function Home() {
  return (
    <div className='home'>
          <div className="home__container">
              {/* Banner Iamge */}
              {/* <img
                  className='home__image'
                  src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg'
                  alt=''
              /> */}

                {/* <div className="home__row"> */}
                  {/* Product */}

                  {/* <Product
                  id="12321341"
                  title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                  price={99}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                  />

                  <Product
                  id="49538094"
                  title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                  price={999}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                  /> 
              </div>
      
              <div className="home__row">
                <Product
                  id="4903850"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                  price={2999}
                  rating={3}
                  image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                  />
                  
                <Product
                  id="23445930"
                  title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                  price={1999}
                  rating={5}
                  image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                  />
                  
                <Product
                  id="3254354345"
                  title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price={10999}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                  />
              </div>
      
              <div className="home__row">
                <Product
                  id="90829332"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                  price={50999}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
              </div>  */}
                <Carousel pagination={false} enableTilt={true}>
                  {heroImages.map((img, index) => (
                    <img className="home__image" src={img} alt="" key={index} />
                  ))}
                </Carousel>
                <CategoryRow categories={categoryRows.slice(0, 4)} />
                <CategoryRow categories={categoryRows.slice(4, 8)} />
                <CategoryBanner
                  title={categoryBanners[0].title}
                  link={categoryBanners[0].link_title}
                  images={categoryBanners[0].images}
                />
                <CategoryBanner
                  title={categoryBanners[1].title}
                  link={categoryBanners[1].link_title}
                  images={categoryBanners[1].images}
                />
                <CategoryBanner
                  title={categoryBanners[2].title}
                  link={categoryBanners[2].link_title}
                  images={categoryBanners[2].images}
                />
                <CategoryRow categories={categoryRows.slice(8)} />
                <CategoryBanner
                  title={categoryBanners[3].title}
                  link={categoryBanners[3].link_title}
                  images={categoryBanners[3].images}
                />
                <CategoryBanner
                  title={categoryBanners[4].title}
                  link={categoryBanners[4].link_title}
                  images={categoryBanners[4].images}
                />
            </div>
          </div>
        );
      }
      
      export default Home;