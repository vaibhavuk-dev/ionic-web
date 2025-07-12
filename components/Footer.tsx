import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-100 text-gray-700 py-8 responsive-padding relative">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-start justify-between w-full">
        {/* First Column: Company Details */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="/logo/ionic_logo.png"
            alt="Logo"
            className="h-24 mb-4"
          />
          <div>
            <p className="text-center lg:text-left py-2 text-gray-700">
              <b>Email:</b>
              <br />
              <a
          href="mailto:contact@ionic.co.in"
          className="opacity-70 hover:opacity-100 transition-all duration-300 text-gray-700 hover:text-gray-900"
              >
          contact@ionic.co.in
              </a>
              {" / "}
              <a
          href="mailto:support@ionic.co.in"
          className="opacity-70 hover:opacity-100 transition-all duration-300 text-gray-700 hover:text-gray-900"
              >
          support@ionic.co.in
              </a>
            </p>
            <p className="text-center lg:text-left py-2 text-gray-700">
              <b>Contact:</b>
              <br />
              <span className="text-gray-700">020-27475272/73, 29525874</span>
              <br />
              <span className="text-gray-700">08275486263</span>
            </p>
          </div>
          <p className="text-center lg:text-left py-2 lg:w-[500px] text-gray-700">
            <b>Address:</b>
            <br />
            <b className="text-gray-700">IONIC ENGINEERING TECHNOLOGY PVT LTD</b>
            <br />
            <span className="font-medium text-gray-700">
              (An ISO 9001:2015 Certified Company)
              <br />
            </span>
            <span className="text-gray-700">
              S. No. 1, 5, 11, 12 &amp; 13, Ground Floor, B Wing,
              <br />
              Mahalaxmi Heights, Mumbai-Pune Road, Pimpiri,
              <br />
              Pune-18, Maharashtra, INDIA.
            </span>
          </p>
        </div>

        {/* Second Column: Links */}
        {/* <div className="flex flex-col items-center lg:items-start">
          <ul className='text-center lg:text-left'>
            <li><a href="https://www.ionic.co.in/about" className="text-gray-700 hover:text-gray-900">About Us</a></li>
            <li><a href="https://www.ionic.co.in/solutions/pharma-industry-solutions" className="text-gray-700 hover:text-gray-900">Solutions</a></li>
            <li><a href="https://www.ionic.co.in/products" className="text-gray-700 hover:text-gray-900">Products</a></li>
            <li><a href="https://www.ionic.co.in/services" className="text-gray-700 hover:text-gray-900">Services</a></li>
            <li><a href="https://www.ionic.co.in/blogs" className="text-gray-700 hover:text-gray-900">Blogs</a></li>
            <li><a href="https://www.ionic.co.in/gallery" className="text-gray-700 hover:text-gray-900">Gallery</a></li>
            <li><a href="https://www.ionic.co.in/brochures" className="text-gray-700 hover:text-gray-900">Brochures</a></li>
            <li><a href="https://www.ionic.co.in/privacy-policy" className="text-gray-700 hover:text-gray-900">Privacy Policy</a></li>
          </ul>
        </div> */}

        {/* Third Column: Products */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold mb-4">Our Products</h3>
          <div className='text-center lg:text-left gap-y-2 flex flex-col gap-2'>
            <a href="https://www.ionic.co.in/products/genox-chlorine-dioxide-generator" className="text-gray-700 hover:text-gray-900">Genox Chlorine Dioxide Generator</a>
            <a href="https://www.ionic.co.in/products/water-harvester" className="text-gray-700 hover:text-gray-900">Water Harvester</a>
            <a href="https://www.ionic.co.in/products/zero-liquid-discharge" className="text-gray-700 hover:text-gray-900">Zero Liquid Discharge</a>
            <a href="https://www.ionic.co.in/products/wastewater-treatment-plant" className="text-gray-700 hover:text-gray-900">Wastewater Treatment Plant</a>
            <a href="https://www.ionic.co.in/products/water-recycling-system" className="text-gray-700 hover:text-gray-900">Water Recycling System</a>
            <a href="https://www.ionic.co.in/products/ro-reverse-osmosis-plant" className="text-gray-700 hover:text-gray-900">RO (Reverse Osmosis) Plant</a>
            <a href="https://www.ionic.co.in/products/uf-ultrafiltration-plant" className="text-gray-700 hover:text-gray-900">UF (Ultrafiltration) Plant</a>
            <a href="https://www.ionic.co.in/products/mbr-membrane-bioreactor-plant" className="text-gray-700 hover:text-gray-900">MBR (Membrane Bioreactor) Plant</a>
          </div>
        </div>

        {/* Fourth Column: Services */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <div className='text-center lg:text-left gap-y-2 flex flex-col gap-2'>
            <a href="https://www.ionic.co.in/services/operation-and-maintenance" className="text-gray-700 hover:text-gray-900">Operation and Maintenance</a>
            <a href="https://www.ionic.co.in/services/consultancy-and-technical-support" className="text-gray-700 hover:text-gray-900">Consultancy and Technical Support</a>
            <a href="https://www.ionic.co.in/services/plant-upgradation-modification" className="text-gray-700 hover:text-gray-900">Plant Upgradation / Modification</a>
            <a href="https://www.ionic.co.in/services/energy-audit" className="text-gray-700 hover:text-gray-900">Energy Audit</a>
            <a href="https://www.ionic.co.in/services/water-audit" className="text-gray-700 hover:text-gray-900">Water Audit</a>
            <a href="https://www.ionic.co.in/services/process-audit" className="text-gray-700 hover:text-gray-900">Process Audit</a>
            <a href="https://www.ionic.co.in/services/spare-part-supply" className="text-gray-700 hover:text-gray-900">Spare Part Supply</a>
            <a href="https://www.ionic.co.in/services/annual-maintenance-contract" className="text-gray-700 hover:text-gray-900">Annual Maintenance Contract</a>
          </div>
        </div>

      </div>
      <hr />
      <div className='text-center pt-5 text-gray-400'>Ionic Engineering Technology Pvt. Ltd. &copy; All Rights Reserved 2025</div>
      <div className='text-center pt-1 text-gray-400'>(An ISO 9001:2015 Certified Company)</div>
    </footer>
  );
};

export default Footer;
