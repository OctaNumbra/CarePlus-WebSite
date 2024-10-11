import { Swiper, SwiperSlide } from "swiper/react";

import {
  Clock8,
  CalendarCheck,
  Users,
  Headset,
  ClipboardCheck,
  CircleCheck,
  SquarePen,
} from "lucide-react";

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
          <img src="./CarePlus.svg" alt="CarePlus Logo" className="size-20" />
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
              <img
                src={item.image}
                alt="Slider"
                className="slide-item rounded-3xl"
              />
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
            <Headset className="size-5 mb-2" />
            <h3 className="text-lg font-semibold">Especialistas disponíveis</h3>
            <p className="text-sm text-gray-600">
              Equipes de suporte disponíveis 7 dias por semana.
            </p>
          </div>
        </div>
      </div>

      {/* info cuidadores*/}
      <div>
        <h2 className="px-4 text-2xl font-grotesque">
          Serviços e cuidados para idosos
        </h2>
        <div className="flex">
          <p className="font-cairo pl-4 pr-3">
            Todos os cuidadores aprovados por idosos:
          </p>
          <p className="flex pr-3">
            <ClipboardCheck className="text-teal-400" /> Forneça 2+ refêrencias
            verificadas
          </p>
          <p className="flex pr-3">
            <CalendarCheck className="text-teal-400" />
            Ter no mínimo 6 meses de experiência
          </p>
          <p className="flex">
            <CircleCheck className="text-teal-400" />
            Tenha um DBS/PVG limpo e aprimorado
          </p>
        </div>
      </div>

      {/* Serviços */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="bg-green-50 rounded-2xl shadow-md flex flex-col">
            <img src="./servico1.png" alt="serviço 1" className="rounded-2xl" />
            <h2 className="pl-4 pt-4 text-2xl font-inter">
              Cuidados ao Domicílio
            </h2>
            <p className="text-xs pl-4 pb-4">Suporte 24 horas em sua casa</p>
            <p className=" text-base pl-4 pr-4">
              Um cuidador se muda para sua casa para fornecer cuidados
              personalizados. Ele se adaptará à sua rotina e estilo de vida, e
              apoiará sua independência.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl shadow-md flex flex-col">
            <img src="./servico2.png" alt="serviço 1" className="rounded-2xl" />
            <h2 className="pl-4 pt-4 text-2xl font-inter">
              Cuidados de Curto Prazo
            </h2>
            <p className="text-xs pl-4 pb-4">
              Suporte 24 horas, por apenas 3 dias por vez
            </p>
            <p className=" text-base pl-4 pb-4 pr-4">
              Um cuidador se muda para sua casa por alguns dias ou semanas,
              oferecendo cuidados paliativos personalizados enquanto seu
              cuidador principal estiver ausente ou após alta hospitalar ou
              emergência.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl shadow-md flex flex-col">
            <img src="./servico3.png" alt="serviço 1" className="rounded-2xl" />
            <h2 className="pl-4 pt-4 text-2xl font-inter">
              Visitas de cuidados
            </h2>
            <p className="text-xs pl-4">
              Um cuidador fará uma visita por algumas horas nos dias escolhidos,
              em um horário pré-acordado.
            </p>
            <p className=" text-base p-4">
              De visitas domiciliares ocasionais a visitas semanais regulares,
              nossa plataforma online é tudo o que você precisa para encontrar
              um cuidador adequado e criar uma programação que se adapte
              perfeitamente à sua vida.
            </p>
          </div>
        </div>
      </div>

      {/* Download */}
      <div>
        <div className="flex justify-center pb-4">
          <img
            src="./download.png"
            alt="download banner"
            className="size-[31,8%] rounded-3xl"
          />
        </div>
        <div className="pl-4 pt-4 pr-4">
          <h1 className="font-dosis text-6xl p-5 md:pl-10">Como Funciona?</h1>
          <p className="font-dosis text-2xl  pl-4 pr-4 md:pl-10">
            Nossa plataforma facilita a busca por cuidadores autônomos de
            confiança, o gerenciamento de seus cuidados e o acesso a suporte
            dedicado quando você precisar.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center text-2xl">
              <SquarePen/>
              <p>Compartilhe sua solicitação de atendimento</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center text-2xl">
              <Headset className=""/>
              <p>Selecione seu cuidador</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center text-2xl">
              <CalendarCheck className=""/>
              <p>Prepare-se para o atendimento</p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className=" justify-center bg-footer">
        <div className="border-black/60 border-2">
          <div className="flex justify-center">
            <img src="./CarePlus.svg" alt="CarePlus Logo" className="size-14" />
            <p className="font-grotesque text-2xl pb-4 pt-4">
              <b>Care Plus</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
