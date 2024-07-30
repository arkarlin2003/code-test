import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import SubHeader from "./components/shared/SubHeader";
import useScrollToTop from "./hooks/useScrollToTop";
import useScroll from "./hooks/useScroll";

const App = () => {
  const { pathname } = useLocation();
  const scroll = useScroll()
  useScrollToTop()
  return (
    <>
      {pathname == "/" && <SubHeader />}
      {pathname == "/" ? <Header className={`${scroll && 'bg-white border-b'}`}/> : <Header className="bg-white border-b" />}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
