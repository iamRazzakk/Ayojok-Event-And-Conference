
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../Pages/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;