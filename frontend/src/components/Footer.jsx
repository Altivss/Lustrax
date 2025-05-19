import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-black text-white px-6 py-10 bg-black">
      {/* Logo + Company horizontally aligned and vertically centered */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-10">
        {/* Left: Logo + Privacy below */}
        <div className="flex flex-col justify-center">
          {/* Logo image */}
          <img src={assets.footer} className="w-48 sm:w-64" alt="Lustrax Logo" />

          {/* Privacy links below logo */}
          <div className="text-sm text-gray-400 mt-4">
            <span className="cursor-pointer hover:underline mr-4">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Services</span>
          </div>
        </div>

        {/* Right: Company vertically aligned center */}
        <div className="flex flex-col justify-center h-full mb-26  pl-[210px]">
          <p className="text-xl font-semibold mb-5 ">Company</p>
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            <li onClick={() => { navigate('/about'); window.scrollTo(0, 0) }} className="cursor-pointer">About us</li>
            <li onClick={() => { navigate('/contacts'); window.scrollTo(0, 0) }} className="cursor-pointer">Contacts</li>
            <li onClick={() => { navigate('/contacts'); window.scrollBy(0, 2) }} className="cursor-pointer">FAQs</li>
            <li onClick={() => navigate('/recruit')} className="cursor-pointer">Recruitment</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center h-full mb-32">
          <p className="text-xl font-semibold mb-5">Socials</p>
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            <li>
              <a
                href="https://www.facebook.com/autobeautification1"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@lustrax_ph?_r=1&_d=secCgYIASAHKAESPgo8IvAU6Dt56cKleUqeWODzTSYJaRAnk5A5uzz7WgIUNLaRLwXEO6Dvm6dVacyHWA0XWT29gak6CJMG7oSnGgA%3D&_svg=1&checksum=17f6ad060d45b0bc880092c2654e4763ab3187c043f70a3f7101dbc810c3e468&sec_uid=MS4wLjABAAAAXQPCL3I91Cqe_yafPpku6PxOp1Yvd6xio-HiTyCLmgUX9Os0Ni4K5uTeTlrWPz4T&sec_user_id=MS4wLjABAAAAMQzrX9V4zzp8Ll_Ptg81UtCijXN8rogiodbmhZXR0dz1b79banNsQEs6QWDe_v0S&share_app_id=1180&share_author_id=7433359116988875777&share_link_id=139b39fb-4715-4139-8697-d80a7dda56c5&sharer_language=en&social_share_type=5&source=h5_t&timestamp=1747386407&u_code=dd67iihfm14dd4&ug_btm=b6880%2Cb2878&ugbiz_name=ACCOUNT&user_id=6843403557506466818"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline"
              >
                Tiktok
              </a>
            </li>    <li>
              <a
                href="https://shopee.ph/lustrax?entryPoint=ShopBySearch&searchKeyword=lustrax"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline"
              >
                Shopee
              </a>
            </li>
          </ul>

        </div>
      </div>
      <div className=" mt-10">
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @Auto Beautification- All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
