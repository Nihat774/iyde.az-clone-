
import MyRoute from "./config/MyRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import WhatsappIcon from "./components/WhatsappIcon";
import MobileHeader from "./components/MobileHeader";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  return (
    <div className={`px-4 md:px-[42px]`}>
    <SubHeader/>
      <Header />
      <MobileHeader />
      <MyRoute />
      <WhatsappIcon />
      <MobileNavbar />
      <Footer />
    </div>
  );
}

export default App;
