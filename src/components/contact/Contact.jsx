import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Navbar from '../Navbar'
import Footer from '../Footer';
import ContactForm from '../ContactForm';

const Contact = () => {
  
  return (
    <>
      <Navbar />
      <div className='min-h-[85vh]'>
        <ContactForm/>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
