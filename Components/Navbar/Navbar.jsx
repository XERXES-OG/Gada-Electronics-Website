import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const[menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>GADA Elec.</p>
         </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mobile")}}><Link style={{textDecoration: 'none'}} to='/mobiles'>MOBILES</Link>{menu==="Mobile"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Laptops")}}><Link style={{textDecoration: 'none'}} to='/laptops'>LAPTOPS</Link>{menu==="Laptops"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Accessories")}}><Link style={{textDecoration: 'none'}} to='/accessories'>ACCESSORIES</Link>{menu==="Accessories"?<hr/>:<></>}</li>
        </ul> 
        <div className="nav-login-cart">
        <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="" height="50px" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>


    </div>
  )
}

export default Navbar
