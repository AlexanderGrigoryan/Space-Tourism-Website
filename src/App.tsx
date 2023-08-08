import { Helmet, HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes, useLocation } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import { styled } from "styled-components";
import MobileBackground from "./assets/home/background-home-mobile.jpg";
import { useState } from "react";
import BurgerMenu from "./components/BurgerMenu";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  const [menu, setMenu] = useState<boolean>(false);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>
      <MainContainer>
        <Header menu={menu} setMenu={setMenu} />
        {menu ? <BurgerMenu setMenu={setMenu} pathname={pathname} /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  padding: 0 24px;
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;
