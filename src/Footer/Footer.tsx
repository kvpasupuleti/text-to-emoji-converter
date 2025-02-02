import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import Npm from "../icons/Npm";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="w-full pt-12 pb-6 text-center text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
          Crafted with ❤️ by Krishna Vamsi Pasupuleti
        </div>
        <div className="footer-links">
          <LinkedIn />
          <Github />
          <Npm />
          <Instagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
