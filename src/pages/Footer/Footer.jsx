import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-6">
            <div className="flex flex-row items-center justify-center text-white text-3xl pb-6 space-x-4">
            <Link className="hover:text-slate-400"><FaFacebook></FaFacebook></Link>
            <Link className="hover:text-slate-400"><FaTwitter></FaTwitter></Link>
            <Link className="hover:text-slate-400"><FaInstagram></FaInstagram></Link>
            </div>
            <p className="text-center text-gray-500">Copyright © <a className="text-pink-500"
                href="mailto:mehedi@gmail.com">Mehedi</a>. Use of this site constitutes acceptance of our
                Terms
                of service and Privacy Policy. All Rights Reserved. <br></br> Develop by <a className="text-yellow-500" href="mailto:rakibce30@gmail.com">RakibCE</a> </p>
        </footer>
    );
};

export default Footer;