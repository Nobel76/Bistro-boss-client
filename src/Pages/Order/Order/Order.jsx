import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import HeroCover from '../../Shared/HeroCover/HeroCover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTap from '../OrderTab/OrderTap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'desserts', 'soup' , 'drinks']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category)
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const desserts = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
           <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
            <HeroCover img={orderCoverImg} title="Order Food"></HeroCover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soups</Tab>
    <Tab>Desserts</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTap items={salad}></OrderTap>
  </TabPanel>
  <TabPanel>
  <OrderTap items={pizza}></OrderTap>
  </TabPanel>
  <TabPanel>
  <OrderTap items={soup}></OrderTap>
  </TabPanel>
  <TabPanel>
  <OrderTap items={desserts}></OrderTap> 
  </TabPanel>
  <TabPanel>
  <OrderTap items={drinks}></OrderTap> 
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;