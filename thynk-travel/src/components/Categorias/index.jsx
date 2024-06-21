// src/components/Viagens.js

import React, { useState } from 'react'

const Categorias = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('parques')

  const handleCategoriaChange = (categoria) => {
    setCategoriaSelecionada(categoria)
  }

  const pacotesDeViagem = [
    {
      categoria: 'parques',
      pacotes: [
        {
          id: 1,
          nome: 'Disney Orlando - Florida',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-parques-1.png`,
        },
        {
          id: 2,
          nome: 'Beto Carrero - Brasil',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-parques-2.png`,
        },
        {
          id: 3,
          nome: 'Disney Paris - França',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-parques-3.png`,
        },
      ],
    },
    {
      categoria: 'praias',
      pacotes: [
        { 
          id: 4, 
          nome: 'Copacabana - Brasil',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-praias-1.jpg`
        },
        {
          id: 5,
          nome: 'Waikiki Beach - Havaí',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-praias-2.jpg`
        },
        {
          id: 6,
          nome: 'Bondi Beach - Austrália',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-praias-3.jpg`
        },
      ],
    },
    {
      categoria: 'monumentos',
      pacotes: [
        { 
          id: 7, 
          nome: 'Torre Eiffel - França',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-monumentos-1.jpg`

        },
        { 
          id: 8, 
          nome: 'Machu Picchu - Peru',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-monumentos-2.jpg`

        },
        { 
          id: 9, 
          nome: 'Coliseu - Itália',
          imagem: `${process.env.PUBLIC_URL}/img/bg-cards/bg-card-monumentos-3.jpg`

        },
      ],
    },
  ]

  return (
    <div className="mx-0 sm:mx-4 px-8 md:px-16 md:mt-32 mt-24" id='categorias-id-nav'>
      <h2 className="text-center fjalla tracking-normal leading-tight hover:cursor-default text-3xl sm:text-4xl max-w-md m-auto">
        Categorias populares
      </h2>

      <div className="flex space-x-8 mb-4 mt-10 justify-center">
        <button
          className={`fjalla tracking-normal font-medium sm:text-2xl px-4 py-2 rounded-lg ${
            categoriaSelecionada === 'parques'
              ? 'text-orange-500'
              : 'text-black'
          }`}
          onClick={() => handleCategoriaChange('parques')}
        >
          Parques
        </button>
        <button
          className={`fjalla tracking-normal font-medium sm:text-2xl px-4 py-2 rounded-lg ${
            categoriaSelecionada === 'praias' ? 'text-orange-500' : 'text-black'
          }`}
          onClick={() => handleCategoriaChange('praias')}
        >
          Praias
        </button>
        <button
          className={`fjalla tracking-normal font-medium sm:text-2xl px-4 py-2 rounded-lg ${
            categoriaSelecionada === 'monumentos'
              ? 'text-orange-500'
              : 'text-black'
          }`}
          onClick={() => handleCategoriaChange('monumentos')}
        >
          Monumentos
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
        {pacotesDeViagem
          .find((categoria) => categoria.categoria === categoriaSelecionada)
          .pacotes.map((pacote) => (
            <div
              key={pacote.id}
              className="md:h-96 h-52 bg-white rounded-lg shadow-md bg-cover bg-center"
              style={{ backgroundImage: `url(${pacote.imagem})` }}
            >
              <h2 className="fjalla tracking-wide text-2xl md:text-3xl text-center text-white font-normal h-full w-full p-4 bg-black bg-opacity-40 rounded-lg">{pacote.nome}</h2>

              <div className='w-full z-10 flex justify-center -mt-6 mb-5'>
                <button className='text-center text-white text-base md:text-lg lg:text-xl py-3 px-7 md:px-10 rounded-xl bg-orange-500'>Ver Pacotes</button></div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Categorias
