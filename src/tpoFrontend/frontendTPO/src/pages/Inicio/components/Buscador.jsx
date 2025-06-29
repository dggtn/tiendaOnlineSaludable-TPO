import React, { useState, useCallback, useEffect } from 'react';
import { Search, Mic } from 'lucide-react'


function Buscador( ) {
   const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const debounce = (func, delay) => {
    let timeoutId
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func(...args), delay)
    }
  }

  const handleSearch = useCallback(
    debounce((term) => {
      if (term.trim() === '') {
        setSearchResults([])
      } else {
        const results = PRODUCTOS.filter((item) =>
          item.titulo.toLowerCase().includes(term.toLowerCase()),
        )
        setSearchResults(results)
      }
    }, 300),
    [],
  )

  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm, handleSearch])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="flex flex-col items-center bg-green-200 p-4">
      <form >
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 pr-20 text-base shadow-md transition-shadow duration-200 hover:shadow-lg focus:border-gray-300 focus:outline-none"
            placeholder="Buscar"
          />
          <div className="absolute right-0 top-0 mr-4 mt-3 flex items-center">
            <button type="submit" className=" text-brown-200">
              <Search size={20} />{' '}
            </button>{' '}
          </div>{' '}
        </div>{' '}
      </form>{' '}
      {searchResults.length > 0 && (
        <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-xl font-bold"> Buscar Resultados: </h2>{' '}
          <ul>
            {' '}
            {searchResults.map((result) => (
              <li key={result.id} className="mb-2">
                <a
                  href={result.imagen}
                  className="text-brown-200 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  {result.title}{' '}
                </a>{' '}
              </li>
            ))}{' '}
          </ul>{' '}
        </div>
      )}{' '}
    </div>
  )
}

export default Buscador;

