import { Outlet } from "react-router-dom";

import FooterSendOff from '../components/footerSendOff.jsx'

const Layout = () => {

  return (
    <>
      <Outlet />
      <FooterSendOff />
    </>
  )
};

export default Layout;
