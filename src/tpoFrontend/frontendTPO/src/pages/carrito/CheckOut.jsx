import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function checkOut() {
  return (
    <section>
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div id="authentication-modal" tabIndex="-1" className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog" >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-4 text-xl  lime-gray-900 text-lime-600 font-bold">
                    <i className="bi bi-credit-card mr-2"></i>Sólo aceptamos pago con tarjeta
                    </h3>
                    <form  className="space-y-6" >
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-lime-900 ">Nombre:</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"  />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium  text-lime-900">Email:</label>
                            <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"  />
                        </div>
                        <div>
                            <label htmlFor="card" className="block mb-2 text-sm font-medium  text-lime-900 "># Tarjeta:</label>
                            <input type="number" name="card" id="card" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" />
                        </div>
                        <div className="">
                            <label htmlFor="code" className="   text-lime-900 block mb-2 text-sm font-medium ">Fecha expiración:</label>
                            <input type="number" name="month" id="month" className="inline-block   w-20 bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"  />
                            <input type="number" name="year" id="year" className="inline-block w-20 ml-3 bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"  />
                        </div>
                        <div>
                            <label htmlFor="code" className="block mb-2 text-sm font-medium text-lime-900 dark:text-gray-300 gap-3" >Código de seguridad:</label>
                            <input type="number" name="code" id="code" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"  />
                        </div>
                        <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                            $Total
                        </p>
                        <button type="submit" className="w-full text-white bg-lime-700 hover:bg-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700" >
                            <i className="mr-2 bi bi-lock-fill"></i>PAGAR
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

