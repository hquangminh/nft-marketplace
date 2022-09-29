import Header from '../../common/Header';
import Footer from '../../common/Footer';
const Main = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
export default Main;
