import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-100 text-gray-700 py-8 px-32 relative">
      <div className="flex justify-between items-top">
        <div className="flex flex-col items-start  w-1/3">

          <img src="/ioniclogo.png" alt="Logo" className="h-20" />

          <div className="mt-4">
            <p className='py-2'><b>Contact:</b> <br /> 020-27475272 / 8275486263</p>
            <p className='py-2'><b>Email:</b> <br /> contact@ionic.co.in / support@ionic.co.in</p>
            <p className='py-2'><b>Address:</b> <br /> No 1, 5 & 12, Ground Floor, B Wing,
              Mahalaxmi Heights, Old Mumbai -
              Pune Hwy, next to Keys Hotel, Pimpri
              Colony, Pimpri-Chinchwad,
              Maharashtra 411019
            </p>
          </div>
        </div>

        <div className="flex flex-row items-start p-10 w-2/3 justify-evenly">
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
        </div>
      </div>
      <div className='text-center pt-5 text-gray-400'>Ionic Engineering Pvt. Ltd. &copy; All Rights Reserved 2023</div>
    </footer>
  );
};

export default Footer;
