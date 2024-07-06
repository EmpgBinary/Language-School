import React from 'react';
import Foreign from '../assets/images/lingual.jpg';
import Foreign2 from '../assets/images/ladies.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="grid md:grid-cols-2 gap-8 place-items-center px-4 py-8">
          <div className="border-[3px] border-solid border-teal rounded-lg my-7 mx-8">
            <img src={Foreign} alt="" className="p-4 rounded-lg" />
          </div>
          <div className="md:mx-8">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              We Provide the <br /> best{" "}
              <span className="text-teal-500">Online Courses</span>
            </div>
            <p className="text-sm text-gray-500 leading-7 mb-6">
              Lingual Cafe' Academy, a language school, is deeply committed to the global significance of language education.
              We aim to empower Nigerian students with linguistic proficiency, enabling them to excel internationally.
              Proficiency in a language not only opens doors to countless opportunities but also fosters cross-cultural understanding
              and collaboration. We understand the challenges Nigerian students face in acquiring language skills and are dedicated to 
              addressing this issue with tailored, high-quality language education. Our experienced instructors, cutting-edge teaching methods,
              and modern resources ensure the highest standards of education.
            </p>
            <Link to="/register">
              <button className="py-3 px-6 text-sm border border-solid border-sky-400 rounded-lg font-bold">
                Register
              </button>
            </Link>
          </div>
          <div className="md:mx-8">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              CORE OBJECTIVES <br /> 
            </div>
            <p className="text-sm text-gray-500 leading-7 mb-6">
              Promote Language Education: The primary objective is to promote the significance of language education, emphasizing its global importance in today’s interconnected world.
              Empower Nigerian Students: To equip Nigerian students with linguistic proficiency, enabling them to distinguish themselves among their international peers.
              Address Language Education Challenges: Lingual Cafe Academy aims to address the challenges faced by Nigerian students in acquiring language proficiency, which is essential for their academic and professional growth.
              Offer High-Quality Language Education: We provide high-quality language skills, boost confidence, and prepare students to compete effectively on the global stage.
            </p>
            <Link to="/register">
              <button className="py-3 px-6 text-sm border border-solid border-sky-400 rounded-lg font-bold">
                Register
              </button>
            </Link>
          </div>
          <div className="border-[3px] border-solid border-teal rounded-lg my-7 mx-8">
            <img src={Foreign2} alt="" className="p-4 rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
