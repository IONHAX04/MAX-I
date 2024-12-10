export default function Footer() {
  return (
    <div>
      <div>
        <footer className="w-full text-slate-500 bg-[#2d2d2d]">
          <div className="border-t border-slate-200 bg-[#2d2d2d] pt-16 pb-12 text-sm w-full md:w-10/12 mx-auto">
            <div className="container mx-auto">
              <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-4"
                  aria-labelledby="footer-docs-4-sub"
                >
                  <h3
                    className="mb-6  font-bold uppercase text-[22px] text-white"
                    id="footer-docs-4-sub"
                  >
                    Restaurant Near by
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Restaurant 1
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Restaurant 2
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Restaurant 3
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Restaurant 4
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Explore More ...
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-4"
                  aria-labelledby="footer-about-4-sub"
                >
                  <h3
                    className="mb-6  font-bold uppercase text-[22px] text-white"
                    id="footer-about-4-sub"
                  >
                    Quick Links
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Home
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        About Us
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Products
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Blog
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav
                  className="col-span-4 md:col-span-4 lg:col-span-4"
                  aria-labelledby="footer-get-in-touch-4-sub"
                >
                  <h3
                    className="mb-6  font-bold uppercase text-[22px] text-white"
                    id="footer-get-in-touch-4-sub"
                  >
                    Get in touch
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Mobile: +41 76 760 39 21
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        Email: kingskurry@gmail.com
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        GZ Oerlikon, VFK Kloten,
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a className="transition-colors duration-300 text-white text-[20px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                        GZ Heuried, GZ Leimbach
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
