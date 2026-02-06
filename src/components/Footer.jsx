
import React from "react";
import { USER_DETAILS } from "../data/constants";

const Footer = () => {
    return (
        <footer className="py-8 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} {USER_DETAILS.name}. All rights reserved.
                </p>
                <p className="text-gray-400 dark:text-gray-600 text-xs mt-2">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
