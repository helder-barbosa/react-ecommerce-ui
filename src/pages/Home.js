import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <ProductList />
    </div>
  );
};

export default Home;
