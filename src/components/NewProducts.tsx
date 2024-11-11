import React from 'react';
import ProductCard from './ProductCard';


const productData = [
    {
        img: "/jacket-1.jpg",
        title: "Jacket",
        desc: "MEN Yarn Fleece Full-zip Jacket",
        rating: 4,
        price: "65.00"
    },
    {
        img: "/shirt-1.jpg",
        title: "Shirt",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "45.00"
    },
    {
        img: "/skirt-1.jpg",
        title: "Skirt",
        desc: "Skirt small, medium, large - Fancy",
        rating: 3,
        price: "39.00"
    },
    {
        img: "/party-wear-1.jpg",
        title: "Female Sandal",
        desc: "Party Wear Sandal",
        rating: 4,
        price: "49.00"
    },
    {
        img: "/sports-1.jpg",
        title: "Sports Shoes",
        desc: "Tracking and Running Shoes - Black",
        rating: 5,
        price: "58.00"
    },
    {
        img: "/watch-1.jpg",
        title: "Smart Watch",
        desc: "Smart Watches Vital Plus",
        rating: 4,
        price: "99.00"
    },
    {
        img: "/watch-2.jpg",
        title: "Pocket Watch",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "95.00"
    },
    {
        img: "/ring.jpg",
        title: "White Gem Jewellery Watch",
        desc: "Wedding - Engagement Ring",
        rating: 4,
        price: "79.00"
    },
    {
        img: "/neck.webp",
        title: "Gold Plated Necklace",
        desc: "Gold Plated Forming Jewellery - Necklace",
        rating: 4,
        price: "199.00"
    },
];



const NewProducts = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'>New Products</h2>
        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
            {productData.map((item, index)=> (
                <ProductCard key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                />))}


        </div>
      </div>
    </div>
  )
}

export default NewProducts
