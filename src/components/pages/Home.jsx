

import React from 'react';
import Ladies from '../assets/images/group2.jpg';
import China from '../assets/images/IMG_7324.jpg';
import Log1 from '../assets/images/china.png';
import Log2 from '../assets/images/arab.png';
import Log3 from '../assets/images/spain.png';
import Log4 from '../assets/images/uk.png';
import Log5 from '../assets/images/german.png';
import France from '../assets/images/france.png';
import Africa from '../assets/images/africa.png';
import {Link} from 'react-router-dom';
import New from '../assets/images/pic2.jpg'

const Home = () => {
  return (
    <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url(${Ladies})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-75 p-6 border-2 h-90 border-white rounded w-3/5 md:w-1/2 lg:w-1/3">
          <h1 className="text-3xl font-bold text-center">
            Welcome to Lingual Cafe'<br />
            Your best school of languages.<br />
            Apply now
          </h1>
          <p className="mt-2 text-center">Application is open for our interested eligible candidates</p>
        </div>
      </div>
    </div>
  );
};

export const Space = () => {
  return (
    <div className="bg-slate-200 h-5">
      {/* <h2 className="text-black text-xl font-bold text-center">Where languages come alive!</h2> */}
    </div>
  );
};


export const Learn = () => {
  return (
    <div>
      <section className="learn">
        <div className="grid md:grid-cols-2 gap-8 place-items-center px-4 py-8">
          <div className="md:mx-8">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              Unlock the power of language<br />Unlock the world! <span className="text-teal-500"></span>
            </div>
            <p className="text-sm text-gray-500 leading-7 mb-6">
              At LINGUAL CAFE', we believe that language is the key to unlocking new opportunities, cultures, and connections.
              Our mission is to provide high-quality language education that empowers students to achieve their goals and succeed
              in an increasingly globalized world.
            </p>
            <Link to="/about">
              <button className="py-3 px-6 text-sm border border-solid border-sky-400 rounded-lg font-bold">
                About
              </button>
            </Link>
          </div>
          <div className="border-[3px] border-solid border-teal rounded-lg my-7 mx-8">
            <img src={China} alt="China" className="p-4 rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};






export const Online = () => {
  return (
    <section className="online">
      <div className="border-[1px] border-solid border-teal-50 rounded-lg my-7 m-1 p-4">
        <div className="flex justify-center items-center text-2xl font-bold mb-4">
          <h1>Enroll into Lingual Cafe for language of choice</h1>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 justify-center mx-7 m-6">
          <div className="flex flex-col items-center">
            <Link to="/register">
              <img src={Log1} alt="Country 1" className="w-full lg:w-1/2 mb-2 transform transition duration-500 hover:scale-110" />
              <span className="text-center">Chinese</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/register">
              <img src={Log2} alt="Country 2" className="w-full lg:w-1/2 mb-2 transform transition duration-500 hover:scale-110" />
              <span className="text-center">Arabic</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/register">
              <img src={Log3} alt="Country 3" className="w-full lg:w-1/2 mb-2 transform transition duration-500 hover:scale-110" />
              <span className="text-center">Spanish</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/register">
              <img src={Log4} alt="Country 4" className="w-full lg:w-1/2 mb-2 transform transition duration-500 hover:scale-110" />
              <span className="text-center">English</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/register">
              <img src={Log5} alt="Country 5" className="w-full lg:w-1/2 mb-2 transform transition duration-500 hover:scale-110" />
              <span className="text-center">German</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/register">
              <img src={France} alt="Country 6" className="w-full lg:w-1/2 mb-2 transform transition duration-500 hover:scale-110" />
              <span className="text-center">French</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/register">
              <img src={Africa} alt="Country 7" className="w-full lg:w-1/2 mb-2 transform transition duration-500 hover:scale-110" />
              <span className="text-center">Swahili</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



export const Writeup = () => {
  return (
    <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url(${New})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-75 p-6 border-2 h-80 border-white rounded w-4/5 md:w-3/4 lg:w-2/3 overflow-auto">
          <div className="text-sm text-gray-500 leading-7 mb-4">
            <h1 className="font-bold mb-2">BENEFITS</h1>
            <p>Lingual café offers reduced course fee to students who show keen interest and maintain a certain level of consistency during their program.</p>

            <h2 className="font-bold mt-4 mb-2">LINGUAL CAFÉ EVOLVE PARTY EXPERIENCE</h2>
            <p>Students of Lingual Café who have passed intermediary levels in any of our offered languages can participate in the Evolve Party to meet our international partners for friendly chats. The main objective of the Lingual Café Evolve Party is for our students to build networks with instructors and other students from different parts of the country.</p>

            <p className="mt-2">The guest speakers will be available to answer necessary questions any student may have and also provide solutions to any problems they may have encountered during their study at Lingual Café Institute. Our dear students will have the opportunity to learn about the culture and way of life of native speakers of their preferred language.</p>

            <h2 className="font-bold mt-4 mb-2">JOB RECOMMENDATION</h2>
            <p>Students of Lingual Café Institute who have completed the semi-advanced level in the listed languages can get the support of the institute for job recommendations at local and international companies. Positions that need translation aid such as Office Executive, Factory Workers Support Executive, Marketing Support Executive, Sales Assistants, Human Resource Managers, Departmental Heads, Public Relations Officer, Assistant, Logistics Support Executive, Legal Assistant, Company Representative, Company Manager, and others.</p>

            <h2 className="font-bold mt-4 mb-2">OPPORTUNITY TO STUDY IN THE NATIVE SPEAKERS OF PREFERRED LANGUAGE COUNTRY</h2>
            <p>We offer scholarships to students who intend to study abroad with the preferred language they have immersed in over the years at our institute and provide all necessary aid and guidance to achieve their STUDY ABROAD goal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};







export default Home;



