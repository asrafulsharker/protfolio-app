// import React from "react";
// import { FaAlignJustify } from "react-icons/fa";
// const Nav = () => {
//   const [state, setState] = React.useState(true);
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="navbar__container">
//           <ul className="navbar__left">
//             <div className="navbar__left-logo">
//               <img src="/images/logo.png" alt="logo" />
//             </div>
//           </ul>
//           {state ? (
//             <ul className="navbar__right">
//               <li>
//                 <a href="">Home</a>
//               </li>
//               <li>
//                 <a href="">Services</a>
//               </li>
//               <li>
//                 <a href="">About</a>
//               </li>
//               <li>
//                 <a href="">Skills</a>
//               </li>
//               <li>
//                 <a href="">Portfolio</a>
//               </li>
//               <li>
//                 <a href="">Blog</a>
//               </li>
//               <li>
//                 <a href="">Contact</a>
//               </li>
//             </ul>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//       <div className="toggle" onClick={() => setState(!state)}>
//         <FaAlignJustify />
//       </div>
//     </nav>
//   );
// };

// export default Nav;




import React,{Component} from 'react';
import {MenuItems} from "../Navbar/MenuItem";
// import {Button} from "../Button";
import {Button} from '../Button';
import '../Navbar/Navbar.css'

class Nav extends React.Component{
state ={clicked:false}

handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
}

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><span>A</span>SN<i className="fas fa-blog"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}> 
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                        )
                    })}


                    
                </ul>

                {/* <Button>Sign In</Button> */}

            </nav>
        )
    }
}

export default Nav;