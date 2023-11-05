import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gradient-to-r from-sky-500 to-sky-300 text-base-content">
        <aside>
          <img className="w-20 rounded-sm" src="/logo.png" alt="" />
          <p className="font-bold">
            JobFinderHub Ltd. <br />
            Providing reliable tech since 2012
          </p>
        
        </aside>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <header className="footer-title">Address</header>
          <a className="link link-hover">House No. 123, Road No.5</a>
          <a className="link link-hover">Brahmanbaria</a>
          <a className="link link-hover">Chattogram</a>
          <a className="link link-hover">Bangladesh</a>
        </nav>
        <nav>
        <header className="footer-title">SOCIAL</header>
          <div className="grid grid-flow-col gap-4">
            <div className="">
              <Link to="https://www.facebook.com/" target="blank">
                <BsFacebook className=" text-3xl"></BsFacebook>
              </Link>
            </div>
            <div>
              <Link to="https://www.facebook.com/" target="blank">
                <BsYoutube className="text-3xl"></BsYoutube>
              </Link>
            </div>
            <div>
              <Link to="https://www.facebook.com/" target="blank">
                <BsInstagram className="text-3xl"></BsInstagram>
              </Link>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-sky-500 text-base-content border-base-300">
      <p>Copyright © 2023 - All right reserved</p>
</footer>
    </div>
  );
};

export default Footer;
