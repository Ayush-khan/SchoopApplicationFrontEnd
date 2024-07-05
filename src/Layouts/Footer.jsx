import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="text-white p-4 text-center md:text-left box-border md:h-9  "
      style={{
        backgroundColor: "#2196f3",

        width: "100%",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px -3px 6px, rgba(0, 0, 0, 0.23) 0px -3px 6px",
        position: "relative",
        bottom: "0",

        left: "0",
        right: "0",
      }}
    >
      <div className="flex flex-col  md:flex-row justify-between items-center text-white ">
        <div className=" md:mb-0 text-sm md:text-base">
          <p>Copyright © 2016-2018 Aceventura Services. All rights reserved.</p>
        </div>
        <div className=" md:mb-0 text-sm md:text-base">
          <p>
            <a
              href="/terms-and-conditions"
              className="text-white no-underline hover:underline"
            >
              Terms and conditions
            </a>
          </p>
        </div>
        <div className="text-sm md:text-base">
          <p>
            <a
              href="/contact-support"
              className="no-underline text-white flex items-center justify-center md:justify-start hover:underline"
            >
              <MdMarkEmailRead className="text-white text-lg mr-2" />
              Contact for app support
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
