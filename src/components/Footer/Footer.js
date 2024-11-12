import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterLogo from "../../assets/images/sydney_logo.png";
import RedDote from "../../assets/images/red-dot.png";

const Footer = () => {
  return (
    <div className="footerContent text-white relative">
      <div className="max-w-webContainer mx-auto flex flex-col items-center">


        {/* Contact Information Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 text-center lg:py-44 py-20 lg:px-0 px-5 ">

          {/* About */}
          <div className="flex flex-col text-left space-y-3">
            <div className="">
              <div className="flex flex-col space-y-5 items-start pb-3">
                <h4 className="text-2xl">About Us</h4>
                <div className="bg-custome-brown h-[2px] w-14"></div>
              </div>
              <p className="opacity-[.6] mt-2">Welcome to Sydney Consulting, your trusted partner in company formation and business solutions in Bahrain. With years of experience and a dedicated team of professionals, we are committed to helping entrepreneurs and businesses thrive in the dynamic Bahraini market.</p>

              <div className=" flex gap-4 text-slate-300 mt-7">
                <FaFacebookF className="text-4xl bg-custome-icon-fb rounded-full p-2" />
                <FaInstagram
                  className="text-4xl rounded-full p-2"
                  style={{
                    background: "linear-gradient(135deg, #b618c1 0%, #f3593d 100%)",
                    color: "white" // Optional: set the icon color to contrast with the background
                  }}
                />
                <FaTwitter className="text-4xl bg-custome-icon-x rounded-full p-2" /> <FaLinkedinIn className="text-4xl bg-custome-icon-in rounded-full p-2" />

              </div>
            </div>
          </div>

          {/* Company Formation */}
          <div className="flex flex-col text-left space-y-3">
            <div className="space-y-1">
              <div className="flex flex-col space-y-5 items-start pb-3">
                <h4 className="text-2xl">Company Formation</h4>
                <div className="bg-custome-brown h-[2px] w-14"></div>
              </div>
              <ul className="font-firasans space-y-5">
                <li>Bahrain Company Formation</li>
                <li>How to start a company in Bahrain</li>
                <li>Steps to start WLL Company</li>
                <li>Cost of Company Registration</li>
                <li>What is CR Activities</li>
                <li>Apply online to start a company.</li>
              </ul>
            </div>
          </div>

          {/* Consulting Services */}
          <div className="flex flex-col text-left space-y-3">
            <div className="space-y-1">
              <div className="flex flex-col space-y-5 items-start pb-3">
                <h4 className="text-2xl">Consulting Services</h4>
                <div className="bg-custome-brown h-[2px] w-14"></div>
              </div>
              <ul className="font-firasans space-y-5">
                <li>Economic Substance Return(ESR)</li>
                <li>Audit & VAT in Bahrain</li>
                <li>HR Consulting</li>
                <li>Tamkeen Services</li>
                <li>Business Development</li>
              </ul>
            </div>
          </div>

          {/* Our Products */}
          <div className="flex flex-col text-left space-y-3">
            <div className="space-y-1">
              <div className="flex flex-col space-y-5 items-start pb-3">
                <h4 className="text-2xl">Our Products</h4>
                <div className="bg-custome-brown h-[2px] w-14"></div>
              </div>
              <ul className="font-firasans space-y-5">
                <li>Self Service Kiosk</li>
                <li>Queue Management</li>
                <li>Digital Signage</li>
              </ul>
            </div>
          </div>

        </div>



        <img
          src={RedDote}
          alt="RedDote"
          className="absolute right-20 top-1/4 transform -translate-x-1/2 animate-leftToRight hidden lg:flex"
        />

      </div>


      <div className="bg-[#3c3939] border-t-2 border-[#626065]">
        <div className="max-w-webContainer mx-auto  w-full lg:flex justify-between py-5 lg:px-0 px-5">
          <img src={FooterLogo} alt="logo" className="lg:ml-0 ml-3 w-[95px]" />
          <p className="text-white text-sm mt-7"><span className="text-custome-footer-p">Terms & Conditions Privacy & Policy</span> © 2024 <span className="text-custome-footer-p">Sydney Consulting</span> all rights reserved. Design By <span className="text-custome-footer-p">Codibyte.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
