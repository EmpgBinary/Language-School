import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import Image1 from '../assets/images/logp.jpg';
import { footerData } from '../assets/data/dummydata';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className='app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-blue-800 mt-16 relative z-10'>
        <div className='left w-[60%] md:w-full p-10'>
          <h1 className='text-4xl font-semibold leading-tight'>
            Follow Us <br /> On X, Facebook and Instagram
          </h1>
        </div>

        <div className='right w-[40%] md:w-full flex flex-col items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#ff7c54] md:bg-transparent md:p-8'>
          <a href="https://x.com/Lingualcafe24/">
            <div className='box flex gap-2 items-center px-5 py-3 border  md:border-4 text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm'>
              <BiLogoTwitter />
              <label htmlFor="text" className='text-sm'>
                X
              </label>
            </div>
          </a>
          <a href="https://www.instagram.com/lingualcafeeng_academy?igsh=a3F1ejVlYmM3c251/">
            <div className='box flex gap-2 items-center px-5 py-3 border md:border-4 text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm'>
              <BiLogoInstagram />
              <label htmlFor="text" className='text-sm'>
                Instagram
              </label>
            </div>
          </a>
          <a href="https://web.facebook.com/profile.php?id=61552526522338">
            <div className='box flex gap-2 items-center px-5 py-3 border  md:border-4 text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm'>
              <BiLogoFacebook />
              <label htmlFor="text" className='text-sm'>
                Facebook
              </label>
            </div>
          </a>
        </div>
      </section>

      <footer className='bg-[#f3f4f8] py-10 pt-32 -mt-24'>
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
            <img src={Image1} alt='img' className='h-5' />
            <span className='text-[14px]'>
              Great lesson ideas and lesson plans for ESL teachers
            </span>
          </div>

          {footerData.map((val, index) => (
            <li key={index}>
              <h4 className='text-black text-sm font-semibold mb-5'> {val.header}</h4>
              {val.subtitle.map((sub, subIndex) => (
                <NavLink key={subIndex} className="text-[14px] block mb-2">{sub.header}</NavLink>
              ))}
            </li>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
