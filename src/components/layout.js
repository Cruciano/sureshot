import React from 'react';
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col bg-white-pink '>
      <Header />
      <main className="relative max-w-[1440px] w-full justify-self-center self-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;