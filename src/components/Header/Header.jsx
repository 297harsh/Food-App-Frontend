import React ,{useState, useEffect} from 'react'

import "./Header.css"
import { assets } from "../../assets/assets";



const Header = () => {

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const url = assets.header_img; 
    setImageUrl(url);
  }, []); 

  return (
    <div className="header" style={{ background: `url(${imageUrl}) no-repeat` }}>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a device manu featuring a delectable array of dishes crafted with finest ingrediants and culinary experties.Our mission is satisfy your craving and elevate your dining experience ,one delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header
