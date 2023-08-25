import { Helmet } from 'react-helmet-async';
import HeroCover from '../Shared/HeroCover/HeroCover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../componants/sectionTitle/sectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <HeroCover img={menuImg} title={"our menu"} ></HeroCover>
      {/* Main cover */}
      <SectionTitle subHeading="Dont't Miss" heading="Todays Offer"></SectionTitle>
      {/* Offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title="dessert"
        Img={dessertImg}
      ></MenuCategory>
      {/* Soup menu items */}
      <MenuCategory
        items={soup}
        title="soup"
        Img={soupImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title="pizza"
        Img={pizzaImg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title="salad"
        Img={saladImg}
      ></MenuCategory>
    </div>
  )
};

export default Menu;