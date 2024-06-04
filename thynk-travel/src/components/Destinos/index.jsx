export default function Destino() {
  return (
    <section className="lg:px-16 mx-4 max-sm:mx-0 md:px-8 flex lg:-mt-10 max-md:px-0">

      <section className="w-3/4">

        <div className="mt-5 lg:mt-24">
          <h2 className="text-4xl w-2/4 fjalla tracking-normal leading-tight hover:cursor-default max-md:w-3/4 max-md:text-3xl cursor-default">Escolha os melhores destinos na melhor agencia </h2>
          <p className="mt-5 w-2/4 text-sm ps-3 py-2 text-lg border-s-2 border-orange-500 max-lg:w-full cursor-default">Com a Agência de Viagens, você pode explorar os melhores destinos ao redor do mundo. Oferecemos pacotes personalizados para destinos exóticos, praias paradisíacas, cidades históricas e muito mais. Descubra novas culturas, experimente novos sabores e crie memórias inesquecíveis em sua próxima viagem.</p>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl w-3/4 fjalla tracking-normal leading-tight hover:cursor-default text-orange-500 text-center max-lg:w-full max-md:text-2xl cursor-default">Destinos mais procurados</h3>
          <ul className="flex flex-wrap justify-center mt-3 w-3/4 px-10 max-lg:w-full max-md:px-5">
            <li className="border-b-2 border-orange-500 fjalla tracking-normal leading-tight text-lg max-md:ms-4 max-md:text-base cursor-default">China</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Moscow</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Nova York</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Tokyo</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Alaska</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Paris</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Suiça</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Sidney</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Rio de Janeiro</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default">Santiago</li>
          </ul>
        </div>
      </section>

      <div className="max-lg:flex max-lg:flex-col max-lg:items-end max-lg:w-1/4">
        <img src={`${process.env.PUBLIC_URL}/img/img-destinos-001.png`} alt="Imagem de destinos" className="lg:max-h-48 md:max-h-28 mt-5 cursor-default"/>
        <img src={`${process.env.PUBLIC_URL}/img/img-destinos-002.png`} alt="Imagem de destinos" className="lg:max-h-48 mt-5 md:max-h-28 cursor-default"/>
        <img src={`${process.env.PUBLIC_URL}/img/img-destinos-003.png`} alt="Imagem de destinos" className="lg:max-h-48 mt-5 md:max-h-28 cursor-default"/>
      </div>
    </section>
  )
}

// FALTA A RESPOSIVIDADE DO CELULAR, E AGORA EU APRENDI QUE ESTAVA USANDO A RESPONSIVIDADE ERRADA COLOCANDO O "MAX"