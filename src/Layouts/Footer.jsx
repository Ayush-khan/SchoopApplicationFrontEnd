import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className=" text-white p-4 text-center md:text-left box-border"
      style={{
        backgroundColor: "#2196f3",
        height: "10%",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px -3px 6px, rgba(0, 0, 0, 0.23) 0px -3px 6px",
      }}
    >
      <div className="flex flex-col  md:flex-row justify-between items-center text-white">
        <div className="mb-2 md:mb-0">
          <p>Copyright © 2016-2018 Aceventura Services. All rights reserved.</p>
        </div>
        <div className="mb-2 md:mb-0">
          <p>
            <a
              href="/terms-and-conditions"
              className=" text-white no-underline hover:underline "
            >
              Terms and conditions
            </a>
          </p>
        </div>
        <div>
          <p>
            <a
              href="/contact-support"
              className="no-underline text-white  flex items-center hover:underline"
            >
              <MdMarkEmailRead className="text-white  text-lg mr-2" />
              Contact for app support
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
