import React from "react";

const Principal_page_login = () => {
  return (
	
<div className="w-full h-screen bg-blue-50">
		<form className="max-w-sm mx-auto">
		  <div className="mb-5">
		    <label htmlFor="email" className="block mb-2 text-sm font-medium text-cyan-600 ">Seu email</		label>
		    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 		focus:ring-blue-500 focus:border-cyan-500 block w-full p-2.5" 		placeholder="name@flowbite.com" required />
		  </div>
		  <div className="mb-5">
		    <label htmlFor="password" className="block mb-2 text-sm font-medium text-cyan-600">Sua senha</label>
		    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
		  </div>
		  <div className="flex items-start mb-5">
		    <div className="flex items-center h-5">
		      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-cyan-50 		focus:ring-3 focus:ring-blue-300" required />
		    </div>
		    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</		label>
		  </div>
		  <button type="submit" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none 		focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Entrar</button>
		</form>

</div>
	
)
};

export default Principal_page_login;