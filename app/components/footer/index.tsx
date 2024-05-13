
import React from "react";

const Footer = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
<div className="bg-white shadow dark:bg-rose-300 m-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-cyan-600">MeuDoceLucro</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-cyan-600 sm:mb-0 dark:text-cyan-600">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-cyan-600 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-cyan-600">© 2024 <a href="https://meudocelucro.com/" className="hover:underline">MeuDoceLucro™</a>.</span>
    </div>
</div>
</>

  );
}; 

export default Footer;