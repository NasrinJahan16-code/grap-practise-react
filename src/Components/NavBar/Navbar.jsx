import { useState } from "react";
import Link from "../Link/Link";
// import { FaBeer } from 'react-icons/fa';
import { RiMenuAddLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [open, setOpen] = useState (false)
    
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" }
      ];
      
    return (
        <nav>
            {/* <FaBeer></FaBeer> */}
            
            
            <div className="md:hidden text-5xl" onClick={() => setOpen(!open)}>
            
                {
                    open === true ? 
                    <ImCross />
                     :  <RiMenuAddLine className=""/>
                }
           
            </div>
        <ul className={`md:flex absolute bg-slate-500
            ${open ? '' : '-top-60'}
            text-red-600 px-6 `}>
{
    routes.map(route => <Link key ={route.id} route ={route}></Link>)
}
</ul>
        </nav>
    );
};

export default Navbar;