import React from 'react'
import Product from '../components/Product.component'
import './Home.styles.scss'

export default function Home() {
    
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="" />
            <div className="home__row">
                <Product id="1" title="The Subtle Art of Not Giving a F*ck Paperback" price={390} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"/>
                <Product id="17"title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/256GB SSD/Windows 10)" price={4399} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg"/>
                
                
            </div>
            <div className="home__row">
                <Product id="24" title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)" price={379} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg"/>
                <Product id="323" title="POLESTAR Ranker Blue 30 Lt Casual Bagpack/Travel Laptop Backpack Bag" price={5} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/91TNrafvb9L._SL1500_.jpg"/>
                <Product id="132"title="BEBONCOOL Gamepad,USB Wired Gamepad with Dual Vibrators Controller Gamepad for PC/Laptop Computer (Windows XP/7/8/10) / PS3" price={13} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71o1shNaKGL._SL1500_.jpg"/>
                

            </div>
            <div className="home__row">
                <Product id="12"title="The Subtle Art of Not Giving a F*ck Paperback" price={399} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"/>
                <Product id="112"title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)" price={379} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg"/>
                <Product id="13"title="Mi Notebook 14 Intel Core i5-10210U Laptop(8GB/256GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg)" price={455} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg"/>
            </div>
            <div className="home__row">
            <Product title="Samsung 80 cm (32 Inches) Series 4 HD Ready LED Smart TV UA32N4300AR (Black) (2018 model)" price={4399} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/91FKnvV4PHL._SL1500_.jpg"/>
            </div>
            </div>

        </div>
    )
}
