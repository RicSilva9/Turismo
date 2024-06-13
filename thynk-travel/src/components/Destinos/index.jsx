import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Destino() {
  const images = [
    `${process.env.PUBLIC_URL}/img/img-destinos-001.png`,
    `${process.env.PUBLIC_URL}/img/img-destinos-002.png`,
    `${process.env.PUBLIC_URL}/img/img-destinos-003.png`
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2600
  };
  
  return (
    <section className="lg:px-16 mx-4 max-sm:mx-0 md:px-8 flex lg:-mt-10 max-md:px-0" id='destinos-id-nav'>

      <section className="md:w-3/4 max-md:px-4 w-full">

        <div className="mt-5 lg:mt-24 max-md:mt-10 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl w-2/4 fjalla tracking-normal leading-tight hover:cursor-default max-md:w-full cursor-default">Escolha os melhores destinos na melhor agencia </h2>
          <p className="mt-5 w-2/4 text-sm ps-3 py-2 md:text-lg border-s-2 border-orange-500 max-lg:w-full cursor-default">Com a Agência de Viagens, você pode explorar os melhores destinos ao redor do mundo. Oferecemos pacotes personalizados para destinos exóticos, praias paradisíacas, cidades históricas e muito mais. Descubra novas culturas, experimente novos sabores e crie memórias inesquecíveis em sua próxima viagem.</p>
        </div>

        <div className='md:hidden mt-3 overflow-hidden'>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem de destinos ${index}`} className="max-h-36 m-auto cursor-default"/>
              </div>
            ))}
          </Slider>
        </div>

        <div className="md:mt-16 mt-8">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl w-3/4 fjalla tracking-normal leading-tight hover:cursor-default text-orange-500 text-center max-lg:w-full cursor-default">Destinos mais procurados</h2>
          <ul className="flex flex-wrap justify-center mt-3 w-3/4 px-10 max-lg:w-full max-md:px-5">
            <li className="border-b-2 border-orange-500 fjalla tracking-normal leading-tight text-lg max-md:ms-4 max-md:text-base cursor-default">China</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-5">Moscow</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-3">Nova York</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-3">Tokyo</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-3">Alaska</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-3">Paris</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-3">Suiça</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-3">Sidney</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-3">Rio de Janeiro</li>
            <li className="lg:ms-10 fjalla tracking-normal leading-tight text-lg md:ms-4 max-md:text-base cursor-default max-md:ms-3">Santiago</li>
          </ul>
        </div>
      </section>

      <div className="max-lg:flex max-lg:flex-col max-lg:items-end max-lg:w-1/4 max-md:hidden">
        <img src={`${process.env.PUBLIC_URL}/img/img-destinos-001.png`} alt="Imagem de destinos" className="lg:max-h-48 md:max-h-28 max-lg:mt-10 cursor-default"/>
        <img src={`${process.env.PUBLIC_URL}/img/img-destinos-002.png`} alt="Imagem de destinos" className="lg:max-h-48 mt-10 md:max-h-28 cursor-default"/>
        <img src={`${process.env.PUBLIC_URL}/img/img-destinos-003.png`} alt="Imagem de destinos" className="lg:max-h-48 mt-10 md:max-h-28 cursor-default"/>
      </div>
    </section>
  )
}

// SÓ AGORA EU APRENDI QUE USAVA A RESPONSIVIDADE DE FORMA ERRADA COLOCANDO O "MAX". QUANDO FIZER UMA REFATORADA NO CÓDIGO RU CONCERTO ISSO AQUI E NO HEADER.

//eu preciso organizar melhor o codigo antes do publica-lo