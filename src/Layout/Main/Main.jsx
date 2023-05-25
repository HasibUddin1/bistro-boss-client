import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../Pages/Shared/Footer/Footer';
import NavigationBar from '../../Pages/Shared/NavigationBar/NavigationBar';

const Main = () => {

    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>
            {noHeaderFooter || <NavigationBar></NavigationBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;