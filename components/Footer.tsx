import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-100 text-gray-700 py-8 responsive-padding relative">
      <div className="flex flex-col justify-between items-top">
        <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between w-full ">

          <img src="/logo/ionic_logo.gif" alt="Logo" className="h-24" />

          <div>
            <p className='text-center py-2'><b>Email:</b> <br /> contact@ionic.co.in / support@ionic.co.in</p>
            <p className='text-center py-2'><b>Contact:</b> <br />  020-27475272/73, 29525874 <br></br> 08275486263</p>
          </div>
          <p className='text-center py-2 lg:w-[500px]'><b>Address:</b> <br />
            <b>IONIC ENGINEERING TECHNOLOGY PVT LTD</b><br />
            <span className='font-medium'>(An ISO 9001:2015 Certified Company)<br /></span>
            S. No. 1, 5, 11, 12 & 13, Ground Floor, B Wing,<br />
            Mahalaxmi Heights, Mumbai-Pune Road, Pimpiri,<br />
            Pune-18 ,Maharashtra, INDIA.

          </p>
        </div>

        {/* <div className="flex flex-row items-start lg:p-10 w-full lg:w-2/3 justify-evenly">
          <div className='flex flex-col px-10 '>
            <a href="#" className="mb-5"><b>Home</b></a>
            <a href="#" className="mb-2">About</a>
            <a href="#" className="mb-2">Products</a>
            <a href="#" className="mb-2">Applications</a>
            <a href="#" className="mb-2">Knowledge</a>
            <a href="#" className="mb-2">Contact</a>
          </div>
          <div className='flex flex-col px-10 '>
            <a href="#" className="mb-5"><b>Products</b></a>
            <a href="#" className="mb-2">Product 1</a>
            <a href="#" className="mb-2">Product 2</a>
            <a href="#" className="mb-2">Product 3</a>
          </div>
          <div className='flex flex-col px-10 '>
            <a href="#" className="mb-5"><b>Applications</b></a>
            <a href="#" className="mb-2">Application 1</a>
            <a href="#" className="mb-2">Application 2</a>
            <a href="#" className="mb-2">Application 3</a>
          </div>
          <div className='flex flex-col px-10 '>
            <a href="#" className="mb-5"><b>Knowledge</b></a>
            <a href="#" className="mb-2">Knowledge 1</a>
            <a href="#" className="mb-2">Knowledge 2</a>
            <a href="#" className="mb-2">Knowledge 3</a>
          </div>
        </div> */}
      </div>

      <hr></hr>
      <div className='text-center pt-5 text-gray-400'>Ionic Engineering Technology Pvt. Ltd. &copy; All Rights Reserved 2025</div>
      <div className='text-center pt-1 text-gray-400'>(An ISO 9001:2015 Certified Company)</div>
      

    </footer>
  );
};

export default Footer;
