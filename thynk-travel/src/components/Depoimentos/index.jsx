import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Comentario = (props) => {
  return(
    <div className="rounded-2xl pt-4 px-4 pb-2 bg-slate-300">
      <div className="flex items-center gap-2">
        <img src={`${process.env.PUBLIC_URL}/img/depoimentos/profile-img-comentario1.png`} alt="avatar do autor" 
          className="lg:h-10 md:h-12" />
        <div>
          <h2 className="lg:text-xl md:text-lg font-bold fjalla tracking-normal leading-tight">
            {props.autor}
          </h2>
          <p className="text-gray-600 lg:text-sm md:text-xs">{props.destino}</p>
        </div>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/img/depoimentos/icon8.png`} alt="icon" className="lg:h-6 md:h-5" />
        <p className="text-gray-600 text-center lg:text-base md:text-sm leading-tight">
          {props.comentario}
        </p>
        <div className="flex justify-center items-center gap-3 lg:mt-3 md:mt-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={`${process.env.PUBLIC_URL}/img/depoimentos/icon7.png`} alt="icon" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Depoimentos() {
  const content = [
    {
      autor: "Joelma do Calypso",
      imagem: `${process.env.PUBLIC_URL}/img/depoimentos/profile-img-comentario1.png`,
      destino: "Maldivas",
      comentario: "Inesquecível! A viagem foi incrível do começo ao fim.",
    },
    {
      autor: "Lorem ipsum dolor",
      imagem: `${process.env.PUBLIC_URL}/img/depoimentos/profile-img-comentario1.png`,
      destino: "destino",
      comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quo recusandae minima repudiandae est dolorum!",
    },
    {
      autor: "Lorem ipsum",
      imagem: `${process.env.PUBLIC_URL}/img/depoimentos/profile-img-comentario1.png`,
      destino: "destino",
      comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      autor: "Lorem",
      imagem: `${process.env.PUBLIC_URL}/img/depoimentos/profile-img-comentario1.png`,
      destino: "destino",
      comentario: "Lorem ipsum, eius tempore porro.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="md:mx-0 mx-4">
      <h2 className="text-center fjalla tracking-normal leading-tight hover:cursor-default text-3xl sm:text-4xl max-w-md m-auto">
        Veja o que nossos clientes dizem sobre nossos serviços
      </h2>
      
      <div className="mt-10 flex justify-center">
        <div className="sm:hidden w-full p-10 max-sm:px-0 overflow-hidden">
          <Slider {...settings}>
            {content.map((item, index) => (
              <div key={index}>
                <div className="w-11/12 m-auto rounded-2xl pt-4 px-4 pb-2 bg-slate-300">
                  <div className="flex items-center gap-2">
                    <img src={item.imagem} alt="avatar do autor" className="h-12" />
                    <div>
                      <h2 className="text-lg font-bold fjalla tracking-normal leading-tight">{item.autor}</h2>
                      <p className="text-gray-600 text-xs">Destino: {item.destino}</p>
                    </div>
                  </div>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/img/depoimentos/icon8.png`} alt="icon" className="h-7" />
                    <p className="text-gray-600 text-center text-base leading-tight">{item.comentario}</p>
                    <div className="flex justify-center items-center gap-2 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={`${process.env.PUBLIC_URL}/img/depoimentos/icon7.png`} alt="icon" className="h-7" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="grid lg:grid-cols-3 gap-9 sm:grid-cols-2 max-sm:hidden lg:px-16 md:px-8 px-0">
          <Comentario autor='Joelma' destino='Maldivas' comentario='INCRIVEL!! Simplesmente a melhor e mais confortavel biagem que já fiz.' />
          <Comentario autor='Lorem' destino='Maldivas' comentario='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
          <Comentario autor='Lorem' destino='Maldivas' comentario='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
          <Comentario autor='Lorem' destino='Maldivas' comentario='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
          <Comentario autor='Lorem' destino='Maldivas' comentario='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
          <Comentario autor='Ipsun' destino='Maldivas' comentario='Temporibus laboriosam, minus fugit nam enim sunt delectus fugiat eveniet.' />
        </div>
      </div>
    </section>
  );
}
