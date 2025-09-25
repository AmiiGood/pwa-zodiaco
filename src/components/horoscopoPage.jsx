import { useState } from "react";

export default function HoroscopoApp() {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [signoZodiacal, setSignoZodiacal] = useState("");
  const [horoscopo, setHoroscopo] = useState("");

  const signos = {
    aries: {
      nombre: "Aries",
      fechas: "21 Mar - 19 Abr",
      elemento: "Fuego",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-aries.png",
    },
    tauro: {
      nombre: "Tauro",
      fechas: "20 Abr - 20 May",
      elemento: "Tierra",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-tauro.png",
    },
    geminis: {
      nombre: "Géminis",
      fechas: "21 May - 20 Jun",
      elemento: "Aire",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-geminis.png",
    },
    cancer: {
      nombre: "Cáncer",
      fechas: "21 Jun - 22 Jul",
      elemento: "Agua",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-cancer.png",
    },
    leo: {
      nombre: "Leo",
      fechas: "23 Jul - 22 Ago",
      elemento: "Fuego",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-leo.png",
    },
    virgo: {
      nombre: "Virgo",
      fechas: "23 Ago - 22 Sep",
      elemento: "Tierra",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-virgo.png",
    },
    libra: {
      nombre: "Libra",
      fechas: "23 Sep - 22 Oct",
      elemento: "Aire",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-libra.png",
    },
    escorpio: {
      nombre: "Escorpio",
      fechas: "23 Oct - 21 Nov",
      elemento: "Agua",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-escorpio.png",
    },
    sagitario: {
      nombre: "Sagitario",
      fechas: "22 Nov - 21 Dic",
      elemento: "Fuego",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-sagitario.pngr",
    },
    capricornio: {
      nombre: "Capricornio",
      fechas: "22 Dic - 19 Ene",
      elemento: "Tierra",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-capricornio.png",
    },
    acuario: {
      nombre: "Acuario",
      fechas: "20 Ene - 18 Feb",
      elemento: "Aire",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-acuario.png",
    },
    piscis: {
      nombre: "Piscis",
      fechas: "19 Feb - 20 Mar",
      elemento: "Agua",
      image: "https://rsc.lavanguardia.com/img/horoscopo/ico-piscis.png",
    },
  };

  const horoscopos = {
    aries:
      "Hoy es un día perfecto para tomar iniciativas. Tu energía natural te llevará al éxito en nuevos proyectos.",
    tauro:
      "La estabilidad que buscas está cerca. Confía en tu intuición para tomar decisiones importantes.",
    geminis:
      "Tu curiosidad te abrirá nuevas puertas. Las conversaciones de hoy serán muy reveladoras.",
    cancer:
      "Tus emociones están en armonía. Es un buen momento para fortalecer lazos familiares.",
    leo: "Brillas con luz propia hoy. Tu carisma natural atraerá oportunidades inesperadas.",
    virgo:
      "Tu atención al detalle te ayudará a resolver problemas complejos. Mantén la organización.",
    libra:
      "El equilibrio que buscas llegará a través de la colaboración. Evita los conflictos innecesarios.",
    escorpio:
      "Tu intensidad emocional te dará la fuerza para superar cualquier obstáculo.",
    sagitario:
      "La aventura te llama. Es tiempo de expandir tus horizontes y explorar nuevas posibilidades.",
    capricornio:
      "Tu disciplina y perseverancia están dando frutos. El éxito está más cerca de lo que piensas.",
    acuario:
      "Tu originalidad será tu mayor fortaleza. Las ideas innovadoras fluirán naturalmente.",
    piscis:
      "Tu sensibilidad te permitirá conectar profundamente con otros. Confía en tu intuición.",
  };

  const determinarSigno = (fecha) => {
    const date = new Date(fecha);
    const mes = date.getMonth() + 1;
    const dia = date.getDate();

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "aries";
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "tauro";
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "geminis";
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "cancer";
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "leo";
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "virgo";
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "libra";
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21))
      return "escorpio";
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21))
      return "sagitario";
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19))
      return "capricornio";
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "acuario";
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "piscis";

    return "";
  };

  const generarHoroscopo = () => {
    if (!nombre || !fechaNacimiento) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const signo = determinarSigno(fechaNacimiento);
    setSignoZodiacal(signo);
    setHoroscopo(horoscopos[signo] || "Horóscopo no disponible");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full opacity-90"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-40 left-16 w-1 h-1 bg-white rounded-full opacity-80"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-white rounded-full opacity-85"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-white rounded-full opacity-75"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-white mb-2 tracking-wide">
            Horóscopo
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-xl font-light text-white mb-8 pb-4 border-b border-white/10">
              Información Personal
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-white/80 font-light mb-3 text-sm uppercase tracking-wider">
                  Nombre
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors"
                  placeholder="Laura"
                />
              </div>

              <div>
                <label className="block text-white/80 font-light mb-3 text-sm uppercase tracking-wider">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>

              <button
                onClick={generarHoroscopo}
                className="w-full mt-8 py-3 px-6 bg-transparent border border-white/30 text-white font-light hover:bg-white/10 hover:border-white/50 transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Ver tu futuro
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-xl font-light text-white mb-8 pb-4 border-b border-white/10">
              Tu Signo Zodiacal
            </h2>

            {signoZodiacal ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20">
                    <img
                      src={signos[signoZodiacal].image}
                      alt={signos[signoZodiacal].nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-light text-white mb-2">
                    {signos[signoZodiacal].nombre}
                  </h3>
                  <p className="text-white/60 text-sm mb-1">
                    {signos[signoZodiacal].fechas}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-wider">
                    Elemento {signos[signoZodiacal].elemento}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/70 font-light mb-3 text-sm uppercase tracking-wider">
                    Hola {nombre}
                  </p>
                  <p className="text-white/90 leading-relaxed font-light">
                    {horoscopo}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
                <p className="text-white/40 font-light">
                  Ingresa tu información para conocer tu destino
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
