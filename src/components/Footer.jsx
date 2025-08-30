import Logo from "../assets/images/logo.png";
import { icons } from "../util/icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">

      <div className="grid md:grid-cols-3 gird-cols-1 gap-15 md:max-w-full max-w-[400px] mx-auto md:justify-items-center ">

        <div className="flex flex-col justify-start items-center max-w-[350px]">

          <div className="flex flex-col items-start gap-5 ">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                className="rounded"
                height={60}
                width={60}
                alt="Footer Logo"
              />
              <h2 className="text-[20px] font-bold">Smart Tutor</h2>
            </div>

            <div className="flex w-full">
              <p className="text-[#8F9296] text-[16px] font-semibold">
                Connecting students with expert tutors for personalized learning experiences.
                Transform your education journey with Smart Tutor.
              </p>
            </div>

            <div className="flex justify-center gap-4 cursor-pointer">
              <icons.Facebook size={28} className="hover:-translate-y-2 transition-transform" />
              <icons.Instagram size={28} className="hover:-translate-y-2 transition-transform" />
              <icons.Github size={28} className="hover:-translate-y-2 transition-transform" />
              <icons.Twitter size={28} className="hover:-translate-y-2 transition-transform" />
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-start items-start ">
          <h3 className="text-[20px] font-semibold ">Quick Links</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Home</li>
            <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">About</li>
            <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Services</li>
            <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Login </li>
              <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Register </li>
          </ul>
        </div>

        <div className="flex flex-col justify-start items-center">
          <h3 className="text-[20px] font-semibold w-full text-start">Customer Support</h3>

          <div className="flex justify-start items-start w-full">
            <ul className="flex flex-col space-y-2 items-start">
              <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Help Center</li>
              <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Privacy Policy</li>
              <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Terms of Service</li>
              <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Cookie Policy</li>
              <li className="text-gray-400 hover:text-white cursor-pointer text-[16px]">Refund Policy</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="w-full h-[1px] bg-gray-600 mt-15"></div>

      <div className="max-w-7xl mx-auto mt-10 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Smart Tutor. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
