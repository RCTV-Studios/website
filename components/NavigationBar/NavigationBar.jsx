import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavigationMenuOpen from "./OpenMenuButton";
export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav className="block tablet:hidden py-3 w-full bg-black">
        <div className="flex items-center justify-between mx-3">
          <Link href="/">
            <a className="text-4xl text-white">RCTV Studios</a>
          </Link>
          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
              document.body.classList.toggle("overflow-hidden"); //you can't scroll if the device rotates with this enabled
              const menu = document.querySelector("#MenuModal");
              const menuItems = document.querySelector("#MenuItems");
              menu.classList.toggle("hidden");
              menuItems.classList.add("overflow-auto");
            }}
          >
            <NavigationMenuOpen state={menuOpen}></NavigationMenuOpen>
          </div>
        </div>
        <div
          id="MenuModal"
          role="modal"
          className="mt-3 z-90 bg-black text-white fixed w-screen h-screen hidden"
        >
          <div
            id="MenuItems"
            className="grid h-screen place-items-center text-2xl text-center"
          >
            <ul>
              <li>
                <button
                  disabled={false}
                  className={`nav-link ${
                    router.asPath == "/about-us" ? "text-primary" : ""
                  }`}
                >
                  <Link href="/about-us">
                    <a>About Us</a>
                  </Link>
                </button>
              </li>
              <li>
                <button disabled={true} className="nav-link">
                  <Link href="/schedules">
                    <a>Programming Schedule</a>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Desktop/Tablet Navigation Bar */}
      <nav className="tablet:block hidden py-3 w-full bg-[#080F0F]">
        <div className="flex justify-between items-center text-white">
          <div className="">
            <Link href="/">
              <a className="text-4xl text-white ml-4">RCTV Studios</a>
            </Link>
          </div>
          <div id="items" className="w-fit">
            <div className="flex gap-5 last:mr-5">
              <button
                disabled={false}
                className={`nav-link ${
                  router.asPath == "/about-us" ? "text-primary" : ""
                }`}
              >
                <Link href="/about-us">
                  <a>About Us</a>
                </Link>
              </button>
              <button disabled={true} className="nav-link">
                <Link href="/schedules">
                  <a>Programming Schedule</a>
                </Link>
              </button>
              <button disabled={true} className="nav-link">
                <Link href="/membership">
                  <a>Membership</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
