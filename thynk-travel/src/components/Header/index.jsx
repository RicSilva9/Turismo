import Nav__Header from "../Nav__Header";

export default function Header() {
  return (
    <header
      className="bg-slate-700 text-white bg-fixed bg-cover bg-center rounded-b-2xl pt-20 pb-24 mx-4 px-16 max-sm:mx-0 max-md:px-8 max-sm:pb-20"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/header/bg-header.png)`,
      }}
      id="home-id-nav"
    >
      <Nav__Header />

      <section>
        <h1 className="w-1/2 fjalla tracking-normal leading-tight hover:cursor-default max-lg:w-2/3 max-sm:w-full text-3xl sm:text-4xl">
          Oferecemos os melhores pacotes de viagem para suas férias!
        </h1>
        <p className="mt-2 w-1/2 hover:cursor-default max-lg::text-sm max-lg:w-2/3 max-md:text-xs max-sm:hidden">
          A Agência de Viagens oferece serviços personalizados para quem busca
          destinos incríveis. Com nossos pacotes de viagem, você terá uma
          experiência única e inesquecível. Realize seus sonhos de viajar
          conosco!
        </p>
      </section>
      <section className="mt-16 max-lg:mt-8">
        <div className="bg-slate-50 rounded-t-2xl p-3 hover:cursor-pointer inline-block max-lg:p-2 max-sm:block text-center">
          <span className="text-orange-500 font-bold text-lg px-4 border-b-2 border-orange-500 max-md:text-base">
            Destino
          </span>
        </div>
        <div className="bg-slate-50 text-black p-2 pb-4 rounded-b-2xl flex justify-around items-center max-sm:flex-col -mt-2">
          <div className="flex flex-col">
            <label
              for="location"
              className="text-gray-500 text-sm p-3 pb-1 max-lg:text-xs"
            >
              Localização
            </label>
            <select
              id="destination"
              name="destination"
              className="border-none bg-transparent md:mb-0 mb-1 px-2 pt-0 text-sm font-bold max-md:text-xs"
            >
              <option value="destino1">Brasil</option>
              <option value="destino2">Japão</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              for="passageiros"
              className="text-gray-500 text-sm p-3 pb-1 max-lg:text-xs"
            >
              Passageiros
            </label>
            <select
              id="passageiros"
              name="passageiros"
              className="border-none bg-transparent md:mb-0 mb-1 px-2 pt-0 text-sm font-bold max-md:text-xs"
            >
              <option value="passageiros1">01 Passageiros</option>
              <option value="passageiros2">02 Passageiros</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              for="check-in"
              className="text-gray-500 text-sm p-3 pb-1 max-lg:text-xs"
            >
              Check-in
            </label>
            <select
              id="check-in"
              name="check-in"
              className="border-none bg-transparent md:mb-0 mb-1 px-2 pt-0 text-sm font-bold max-md:text-xs"
            >
              <option value="check-in1">22 Dez 2024</option>
              <option value="check-in2">02 Jan 2025</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              for="check-out"
              className="text-gray-500 text-sm p-3 pb-1 max-lg:text-xs"
            >
              Check-out
            </label>
            <select
              id="check-out"
              name="check-out"
              className="border-none bg-transparent md:mb-0 mb-1 px-2 pt-0 text-sm font-bold max-md:text-xs"
            >
              <option value="check-out1">02 Jan 2025</option>
              <option value="check-out2">22 Fev 2025</option>
            </select>
          </div>
          <div>
            <button className="p-3 bg-orange-500 text-white rounded-2xl mt-2 max-lg:p-2 max-md:text-sm">
              Procurar Pacotes
            </button>
          </div>
        </div>
      </section>
    </header>
  )
}
