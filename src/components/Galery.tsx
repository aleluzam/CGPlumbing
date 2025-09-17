import { useState } from "react";
import FondoTuberias from "../assets/images/FondoTuberias.jpg";

interface Trabajo {
  id: number;
  imagen: string;
  nombre: string;
  descripcion: string;
}

const PlumbingGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Trabajo | null>(null);

  const trabajos: Trabajo[] = [
    {
      id: 1,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023562/B28D1DC1-AC18-433B-B6C3-59712A1E40DF_otelhi.jpg",
      nombre: "Instalación de Baño Comercial",
      descripcion:
        "Instalación completa de sanitarios comerciales con urinarios, inodoros y lavamanos modernos para espacios públicos",
    },
    {
      id: 2,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/3BB40FB2-4ABF-47D8-BE23-F6E85092F483_zjwado.jpg",
      nombre: "Instalación de Plomería Empotrada",
      descripcion:
        "Instalación profesional de válvulas y tuberías empotradas en pared con acabados de calidad y conexiones seguras",
    },
    {
      id: 3,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023563/BDB4C172-42A3-4A16-B634-D33785C70B3F_i2aydq.jpg",
      nombre: "Instalación de Lavamanos Múltiples Comerciales",
      descripcion:
        "Instalación profesional de sistema de lavamanos múltiples con encimera continua y grifería moderna para espacios comerciales",
    },
    {
      id: 4,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023563/1DB8338F-4375-49F4-8B13-F02689B38D38_jg5exl.jpg",
      nombre: "Instalación de Plomería Bajo Lavamanos",
      descripcion:
        "Instalación profesional de sistema de desagüe y conexiones de agua bajo lavamanos con acabados limpios y organizados",
    },
    {
      id: 5,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023561/2BDBA96D-3359-44F7-9EFA-AC86A7F11064_eqsw57.jpg",
      nombre: "Lavamanos Comercial de Acero Inoxidable",
      descripcion:
        "Instalación completa de lavamanos comercial de acero inoxidable con grifo moderno y estructura resistente, ideal para uso intensivo en espacios comerciales",
    },
    {
      id: 6,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023562/F705DDE4-9EE1-4253-8A49-514B1C9E5387_braqoo.jpg",
      nombre: "Instalación de Triturador de Desperdicios",
      descripcion:
        "Instalación profesional de triturador de desperdicios modelo ACE 4000 con conexiones de plomería completas y sistema de drenaje optimizado bajo fregadero de cocina",
    },
    {
      id: 7,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023567/FBBB882F-FBC2-4997-A9D9-3E7C6B99C877_n2ephl.jpg",
      nombre: "Instalación de Fuente de Agua en Gimnasio",
      descripcion:
        "Instalación profesional de fuente de agua potable de acero inoxidable con estación de llenado de botellas en ambiente de gimnasio comercial, cumpliendo con estándares de salud pública",
    },
    {
      id: 8,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023565/8C5B2555-463C-4373-9C14-C72AD5C256F1_dtnufd.jpg",
      nombre: "Instalación de Calentador de Agua Lochinvar",
      descripcion:
        "Instalación profesional de calentador de agua a gas marca Lochinvar con conexiones de plomería y gas certificadas, incluyendo válvulas de seguridad y sistema de ventilación en espacio residencial",
    },
    {
      id: 9,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023565/52F3C146-815A-4C71-A301-B62F4C8571B7_aologu.jpg",
      nombre: "Instalación de Fregadero de Servicio Comercial",
      descripcion:
        "Instalación profesional de fregadero de acero inoxidable de servicio pesado con grifería comercial montada en pared, conexiones de plomería certificadas y drenaje industrial en ambiente comercial",
    },
    {
      id: 10,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023564/33745AEB-FA0F-4421-82C7-9A3AC441A4CB_yv9qfa.jpg",
      nombre: "Instalación de Fuente de Agua Elkay con Estación de Llenado",
      descripcion:
        "Instalación profesional de fuente de agua potable marca Elkay con estación integrada de llenado de botellas, conexiones de plomería certificadas y sistema de filtración, montada empotrada en pared para uso comercial o institucional",
    },
    {
      id: 11,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023562/2315E73B-9B21-4FC0-A21B-48FA43AC9CCC_xqcg4o.jpg",
      nombre: "Instalación de Inodoro de Diseño Contemporáneo",
      descripcion:
        "Instalación profesional de inodoro con sistema de descarga empotrado, grifería moderna cromada y acabados de alta calidad en baño contemporáneo con revestimientos cerámicos premium",
    },
    {
      id: 12,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023561/70C24971-4296-47AD-9F9C-A4AC0E0658C5_oxtfah.jpg",
      nombre: "Instalación de Sistema de Lavabos Múltiples Comerciales",
      descripcion:
        "Instalación profesional de batería de lavabos comerciales suspendidos con griferías automáticas, sistema de plomería oculta y conexiones hidráulicas certificadas para baños públicos o institucionales de alto tráfico",
    },
    {
      id: 13,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/9DA5E0DF-D111-43CB-9FE0-677BC4B781C3_d8xh3z.jpg",
      nombre: "Instalación de Sistema de Bombeo y Filtración de Agua",
      descripcion:
        "Instalación profesional de bomba de agua con sistema de filtración, tuberías de PVC, válvulas de control y conexiones hidráulicas especializadas para suministro de agua residencial o comercial con tecnología de presurización automática",
    },
    {
      id: 14,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/A910FBDE-1EF6-4D20-AF42-62DFB3251FA1_zecnof.jpg",
      nombre: "Instalación de Sistema de Plomería en Construcción Nueva",
      descripcion:
        "Instalación profesional de red de tuberías de cobre y PVC en obra nueva, con distribución de agua caliente y fría, sistema de drenaje y conexiones hidráulicas pre-instaladas según especificaciones arquitectónicas para construcción residencial o comercial",
    },
    {
      id: 15,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/9AF506CB-6414-4706-B8EC-E730ED2CE701_mdvqtq.jpg",
      nombre: "Instalación de Conexiones Empotradas para Lavadora",
      descripcion:
        "Instalación profesional de conexiones de agua caliente y fría empotradas en pared con válvulas de cierre independientes, caja de conexiones integrada y drenaje inferior para instalación de lavadora o equipos de lavandería con acabado limpio y funcional",
    },
  ];

  const abrirModal = (trabajo: Trabajo): void => {
    setSelectedImage(trabajo);
  };

  const cerrarModal = (): void => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Escape") {
      cerrarModal();
    }
  };

  const bgImagen = {
    backgroundImage: `url(${FondoTuberias})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backgroundBlendMode: "overlay",
    minHeight: "100vh",
    width: "100%",
  };

  return (
    <div style={bgImagen} className="flex flex-col">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 py-26 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl barlow-condensed-bold font-bold text-blue-perfect mb-4">
            Plumbing Works Gallery
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center open-sans-light px-4 mb-10">
            Take a look at our work
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 open-sans-regular">
          {trabajos.map((trabajo: Trabajo) => (
            <div
              key={trabajo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => abrirModal(trabajo)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && abrirModal(trabajo)}
              aria-label={`Ver detalles de ${trabajo.nombre}`}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={trabajo.imagen}
                  alt={trabajo.nombre}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <div className="p-4 text-white open-sans-regular">
                  <h3 className="font-bold text-xl mb-2">{trabajo.nombre}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {trabajo.descripcion}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-semibold text-gray-800 text-center">
                  {trabajo.nombre}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={cerrarModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={cerrarModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 text-2xl font-bold"
              aria-label="Cerrar modal"
            >
              ×
            </button>

            {/* Imagen ampliada */}
            <img
              src={selectedImage.imagen}
              alt={selectedImage.nombre}
              className="max-w-full max-h-screen object-contain rounded-lg"
            />

            {/* Información en el modal */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 id="modal-title" className="text-2xl font-bold mb-2">
                {selectedImage.nombre}
              </h3>
              <p className="text-gray-200">{selectedImage.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlumbingGallery;
