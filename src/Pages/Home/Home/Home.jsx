
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
              <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
           <Banner></Banner>
           <Category></Category>
         <ChefService></ChefService>
         <PopularMenu></PopularMenu>
         <ContactUs></ContactUs>
         <Featured></Featured>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;