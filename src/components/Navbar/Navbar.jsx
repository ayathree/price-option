import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu  } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {

    const [open, setOpen]=useState(false)
    const routes = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
      ];
    return (

        
        
       <nav>
        <div onClick={()=>setOpen(!open)} className="lg:hidden block bg-green-400 p-5">
            {
                open === true? <MdOutlineClose  className="text-2xl "></MdOutlineClose>
                : <FiMenu className="text-2xl "></FiMenu>
            }
        
        </div>
        <ul className={`flex lg:flex-row flex-col duration-1000 absolute lg:static bg-green-400  px-3 mx-3 lg:gap-8 ${open? 'top-12':'-top-60'}`}>
            {
                routes.map(route=><Link  key={route.id} route={route}></Link>)
            }
        </ul>
       </nav>
    );
};

export default Navbar;