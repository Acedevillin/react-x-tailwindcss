import React from 'react';
import {
    FaFacebook,
    FaDribbble,
    FaInstagram,
    FaTwitter,
    FaGithub,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="max-w-[1280px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
                <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo
                    magni praesentium facilis ipsum aspernatur aliquam laudantium sint
                    commodi odit. Voluptatum suscipit nobis voluptates esse natus
                    dignissimos debitis recusandae numquam!
                </p>
                <div className="flex md:w-[75%] justify-between my-6">
                    <FaFacebook size={30} />
                    <FaDribbble size={30} />
                    <FaInstagram size={30} />
                    <FaTwitter size={30} />
                    <FaGithub size={30} />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Carrers</li>
                        <li className="py-2 text-sm">Jobs</li>
                        <li className="py-2 text-sm">Press</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Privacy Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                        <li className="py-2 text-sm">Claims</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
