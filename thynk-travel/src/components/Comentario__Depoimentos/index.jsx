
export default function Comentario__Depoimentos() {
  return (
    <div className="rounded-2xl pt-4 px-4 pb-2 bg-slate-300">
      <div className="flex items-center gap-2">

         <div>
          <img src={`${process.env.PUBLIC_URL}/img/profile-img-comentario1.png`} alt="avatar do autor" className="lg:h-10 md:h-18" />
         </div>

         <div>
           <h2 className="lg:text-xl md:text-lg font-bold fjalla tracking-normal leading-tight">Joelma do Calypso</h2>
           <p className="text-gray-600 lg:text-sm md:text-xs">Destino: Maldivas</p>
         </div>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/img/icon8.png`} alt="icon" className="lg:h-6 md:h-3" />  {/* devo atualizar para colocar icons */}
        <p className="text-gray-600 text-center lg:text-base md:text-sm leading-tight">Inesquecível! A viagem foi incrível do começo ao fim.</p>
       
        <div className="flex justify-center items-center gap-3 lg:mt-3 md:mt-1"> {/* devo atualizar para colocar icons */}
          <img src={`${process.env.PUBLIC_URL}/img/icon7.png`} alt="icon" />
          <img src={`${process.env.PUBLIC_URL}/img/icon7.png`} alt="icon" />
          <img src={`${process.env.PUBLIC_URL}/img/icon7.png`} alt="icon" />
          <img src={`${process.env.PUBLIC_URL}/img/icon7.png`} alt="icon" />
          <img src={`${process.env.PUBLIC_URL}/img/icon7.png`} alt="icon" />
        </div>
      </div>
    </div>
  )
}