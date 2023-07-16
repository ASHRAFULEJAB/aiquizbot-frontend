// import Link from "next/link";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-center lg:text-left">
      <div className="bg-[#eee] p-5 text-center text-[#222]">
        © 2023 <Link href="/">Ai-Quizzbot | Made with 💓 by Infinitech</Link>
      </div>
    </footer>
  );
};

export default Footer;
