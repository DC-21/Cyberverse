import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  const handleHome =()=>{
    const home=document.getElementById("home");
    home.scrollIntoView({ behavior: "smooth"})
  }

  const HandleServices =()=>{
    const services = document.getElementById("services");
    services.scrollIntoView({ behavior: "smooth"})
  }

  const handlePricing =()=>{
    const pricing = document.getElementById("pricing");
    pricing.scrollIntoView({ behavior:"smooth "})
  }

  const handleContact =()=>{
    const contact=document.getElementById("contact");
    contact.scrollIntoView({ behavior: "smooth"})
  }

  const handleAbout =()=>{
    const about=document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div className=" sticky top-0 text-white flex w-full z-50 px-8 py-6 items-center justify-between bg-[#381495]">
      <div className="flex">
        <a href="">Cyber Wave</a>
        </div>
        <div className="flex">
        <ul className="md:flex hidden gap-8">
          <li onClick={handleHome} className="hover:bg-indigo-300 rounded px-3 py-1">
            <a>Home</a>
          </li>
          <li onClick={HandleServices} className="hover:bg-indigo-300 rounded px-3 py-1">
            <a>Services</a>
          </li>
          <li onClick={handlePricing} className="hover:bg-indigo-300 rounded px-3 py-1">
            <a>Pricing</a>
          </li>
          <li onClick={handleContact} className="hover:bg-indigo-300 rounded px-3 py-1">
            <a>Contact</a>
          </li>
          <li onClick={handleAbout} className="hover:bg-indigo-300 rounded px-3 py-1">
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="md:flex hidden gap-6 items-center">
        <button className="hover:bg-indigo-300 rounded px-3 py-1">Sign Up</button>
        <button className="bg-indigo-300 rounded px-3 py-1">Log In</button>
      </div>
      <div className={`md:hidden ${open ? "right-3" : "right-3"} absolute`}>
        <button onClick={handleMenu}>
          {open ? (
            <svg
              viewBox="0 0 470 1000"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 700 1000"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
            </svg>
          )}
          {open ? (
            <ul className="absolute right-0 shadow-2xl items-center z-50 top-[3.7em] w-[6em] py-2 gap-2 flex flex-col text-left h-[14.5em] rounded bg-white text-black">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Sign In</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
