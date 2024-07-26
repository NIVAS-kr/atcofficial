// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';

import BackgroundSection from './BackgroundSection';
import Footeri from './Footeri';
import Lastfooter from './Lastfooter';

const Layout = ({ children }) => {
  const location = useLocation();
  const isSpecialRoute = location.pathname === '/applynow';

  return (
    <>
      {!isSpecialRoute && <BackgroundSection />}
      {!isSpecialRoute }
      
      {children}
      {!isSpecialRoute && <Footeri mapShowing={false} />}
      {!isSpecialRoute && <Lastfooter />}
    </>
  );
};

export default Layout;