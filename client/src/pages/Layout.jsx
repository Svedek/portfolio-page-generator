import { Outlet } from "react-router-dom";

import FooterSendOff from '../components/footerSendOff.jsx'

const Layout = () => {

  return (
    <main>
      <Outlet />
      <FooterSendOff />
    </main>
  )
};

export default Layout;
