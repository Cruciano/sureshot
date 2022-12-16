import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white p-4 font-xl text-white">
      <div className="max-w-[1440px] w-full m-auto py-8">
        <div className="flex flex-col items-center">
          <a href="/" className="pb-4 text-xl">SureShot</a>
          <p className="pb-2">
            SureShot is a complex educational system that helps you easily develop online courses
          </p>
          <a className="pb-2" href="mailto:contact@sureshot.com">contact@sureshot.com</a>
          <a className="pb-2" href="tel:+380696969696">+380696969696</a>
        </div>
        <div className="flex gap-x-10">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          Copyright © 2022. All Rights Reserved.
        </div>
      </div>

    </div>
  );
};

export default Footer;