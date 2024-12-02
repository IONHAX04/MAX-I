import { Menus } from "./utils";
import DesktopMenu from "../../pages/Projects/Menus/DesktopMenu";
import MobMenu from "../../pages/Projects/Menus/MobMenu";

import logo from "../../assets/logo/logo4.png";

export default function Header() {
  return (
    <div>
      <header className="h-[75px] text-[15px] fixed inset-0 flex-center bg-[#18181A] ">
        <nav className="px-3.5 flex-center-between items-center w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={logo} alt="" className="h-[55px]" />
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Let's Talk
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
