import { Routes, Route, Navigate } from "react-router-dom";

import { NavbarHero } from "../../ui";
import {} from "../../ui/components/NavbarHero";
import { ModalLogout } from "../components/ModalLogout";

import { Dc, Hero, Marvel, Search } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavbarHero />
      <ModalLogout />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<Dc />} />
          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<Hero />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
