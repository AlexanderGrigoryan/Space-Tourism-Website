import { Helmet, HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./components/GlobalStyles";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Home from "./components/Home";
import styled from "styled-components";
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
        {menu ? <BurgerMenu setMenu={setMenu} pathname={pathname} /> : null}
        <Routes>
          <Route path="/" element={<Home menu={menu} setMenu={setMenu} />} />
          <Route
            path="/destination/:name"
            element={<Destination menu={menu} setMenu={setMenu} />}
          />
          <Route
            path="/destination/"
            element={<Navigate to="/destination/moon" />}
          />
          <Route path="crew" element={<Crew menu={menu} setMenu={setMenu} />} />
          <Route
            path="technology"
            element={<Technology menu={menu} setMenu={setMenu} />}
          />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div``;
