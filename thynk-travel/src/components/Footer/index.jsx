import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-orange-500 md:mt-32 mt-24">
      <section className="flex justify-around flex-col md:flex-row p-12 pb-8 md:p-16 md:pb-10 max-sm:px-3 2xl:m-auto max-w-screen-2xl">
        <div>
          <h3 className="text-center fjalla tracking-normal leading-tight hover:cursor-default text-lg sm:text-xl text-white">Formas de pagamento:</h3>
          <div className="flex justify-center gap-4 items-center mt-3">
            <img src={`${process.env.PUBLIC_URL}/img/footer/logo-da-bandeira-mastercard.png`} alt="Logo da bandeira mastercard" className="h-5" />
            <img src={`${process.env.PUBLIC_URL}/img/footer/Diners-Club-Logo.png`} alt="Diners Club Logo" className="md:h-5" />
            <img src={`${process.env.PUBLIC_URL}/img/footer/logo-da-visa-bandeira-cartao.png`} alt="Logo da visa bandeira cartao" className="h-5" />
          </div>
        </div>
        <div className="max-sm:w-full max-md:w-1/2 m-auto md:m-0 mt-8 md:mt-0">
          <h3 className="text-center fjalla tracking-normal leading-tight hover:cursor-default text-lg sm:text-xl text-white">Créditos:</h3>
          <p className="text-white fjalla text-sm mt-3">Site desenvolvido por:</p>
          <a href="https://www.linkedin.com/in/ricardo-dev13" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white gap-2 hover:text-blue-300">
            <img src={`${process.env.PUBLIC_URL}/img/footer/ricardo-dev13.jpg`} alt="Foto de Ricardo da Silva Sousa" className="h-8 rounded-full" />
            Ricardo da Silva Sousa
          </a>
          <p className="text-white fjalla text-sm mt-2">Projetado por:</p>
          <a href="https://www.linkedin.com/in/21john/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white gap-2 hover:text-blue-300">
            <img src={`${process.env.PUBLIC_URL}/img/footer/john.jpg`} alt="Foto de John Ferreira" className="h-8 rounded-full" />
            John Ferreira
          </a>
        </div>
        <div className="max-sm:w-full max-md:w-1/2 m-auto md:m-0 mt-8 md:mt-0">
          <h3 className="text-center fjalla tracking-normal leading-tight hover:cursor-default text-lg sm:text-xl text-white">Televendas</h3>
          <p className="text-white text-sm mt-2">(11) 3333-2565</p>
          <p className="text-white text-sm">Segunda a Sábado : 9 às 21h</p>
          <p className="text-white text-sm">Domingo: 10 às 16h</p>
        </div>
      </section>
    </footer>
  );
}
