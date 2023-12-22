import { Route, Routes } from 'react-router-dom';

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export const App = () => {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  )
}


