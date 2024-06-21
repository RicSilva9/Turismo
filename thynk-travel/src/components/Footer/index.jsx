export default function Footer() {
  return (
    <footer className="w-full bg-orange-500 flex justify-around flex-col md:flex-row md:mt-32 mt-24 p-12 pb-8 md:p-16 md:pb-10 max-sm:px-3">
      <div>
        <h3 className="text-center fjalla tracking-normal leading-tight hover:cursor-default text-lg sm:text-xl text-white">Formas de pagamento:</h3>
        <div className="flex justify-center gap-4 items-center mt-3">
          <img src={`${process.env.PUBLIC_URL}/img/footer/logo-da-bandeira-mastercard.png`} alt="Logo da bandeira mastercard" className="h-5" />
          <img src={`${process.env.PUBLIC_URL}/img/footer/Diners-Club-Logo.png`} alt="Diners Club Logo" className="md:h-5" />
          <img src={`${process.env.PUBLIC_URL}/img/footer/logo-da-visa-bandeira-cartao.png`} alt="Logo da visa bandeira cartao" className="h-5" />
        </div>
      </div>
      <div className="max-sm:w-full max-md:w-1/2 m-auto mt-8">
        <h3 className="text-center fjalla tracking-normal leading-tight hover:cursor-default text-lg sm:text-xl text-white">Créditos:</h3>
        <p className="text-white fjalla text-sm mt-3">Site desenvolvido por:</p>
        <a href="https://www.linkedin.com/in/ricardo-dev13" target="blank" className="flex items-center text-sm text-white gap-2 hover:text-blue-300">
          <img src={`${process.env.PUBLIC_URL}/img/footer/ricardo-dev13.jpg`} className="h-8 rounded-full" />
          Ricardo da Silva Sousa
        </a>
        <p className="text-white fjalla text-sm mt-2">Projetado por:</p>
        <a href="https://www.linkedin.com/in/21john/" target="blank" className="flex items-center text-sm text-white gap-2 hover:text-blue-300">
          <img src={`${process.env.PUBLIC_URL}/img/footer/john.jpg`} className="h-8 rounded-full" />
          John Ferreira
        </a>
      </div>
      <div className="max-sm:w-full max-md:w-1/2 m-auto mt-8">
        <h3 className="text-center fjalla tracking-normal leading-tight hover:cursor-default text-lg sm:text-xl text-white">Televendas</h3>
        <p className="text-white text-sm mt-2">(11) 3333-2565</p>
        <p className="text-white text-sm">Segunda a Sábado : 9 às 21h</p>
        <p className="text-white text-sm">Domingo: 10 às 16h</p>
      </div>
    </footer>
  )
}