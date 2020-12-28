import { HiOutlineClipboardCopy } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const emailClickHandler = () => {
    navigator.clipboard.writeText("01DawidS@gmail.com");
  };

  return (
    <footer className="footer">
      <div className="footer__center">
        <div className="footer-left"></div>
        <div className="footer-right">
          <h1> Contact:</h1>
          <p onClick={emailClickHandler} className="footer-right-email">
            01DawidS@gmail.com
            <span className="footer-right-email-icon">
              <HiOutlineClipboardCopy />
            </span>
          </p>

          <div className="footer-right-links">
            <a href="https://github.com/StasinskiPL" target="blank">
              <AiOutlineGithub className="footer-right-link" />
            </a>
            <a
              href="https://www.facebook.com/dawid.stasinski.585"
              target="blank"
            >
              <FaFacebook className="footer-right-link" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
