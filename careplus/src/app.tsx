import { Swiper, SwiperSlide } from "swiper/react";

import { Clock8, CalendarCheck, Users, Headset } from "lucide-react";

function App() {
  const data = [
    { id: "1", image: "./1.png" },
    { id: "2", image: "./4.png" },
    { id: "3", image: "./5.png" },
    { id: "4", image: "./6.png" },
  ];

  return (
    <>
      {/* header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex-1 flex justify-center">
          <img src="./CarePlus.svg" alt="CarePlus Logo" className="h-14 w-14" />
          <div className="flex space-x-10 bg-neutral-200 p-4 rounded-full">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
              Para famíliares
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
              Para cuidadores
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
              Assistência domiciliar
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
              Cuidados residenciais
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
              Ajuda
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
              Sobre nós
            </a>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="container">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay
          loop
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Slider" className="slide-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Beneficios */}
      <div className="flex justify-center bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Clock8 className="size-5 mb-2" />
            <h3 className="text-lg font-semibold">
              Tranquilidade 24 horas por dia, 7 dias por semana
            </h3>
            <p className="text-sm text-gray-600">
              Suporte individual de um cuidador de confiança.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <CalendarCheck className="size-5 mb-2" />
            <h3 className="text-lg font-semibold">Mantenha sua rotina</h3>
            <p className="text-sm text-gray-600">
              O cuidado é moldado em torno do estilo de vida deles.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Users className="size-5 mb-2" />
            <h3 className="text-lg font-semibold">Escolha seu cuidador</h3>
            <p className="text-sm text-gray-600">
              Escolha o seu favorito entre as correspondências personalizadas.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Headset className="size-5 mb-2"/>
            <h3 className="text-lg font-semibold">Especialistas disponíveis</h3>
            <p className="text-sm text-gray-600">
              Equipes de suporte disponíveis 7 dias por semana.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
