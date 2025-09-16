import { useState } from "react";

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
      nombre: "Instalación de Baño Completo",
      descripcion:
        "Renovación completa de baño con instalación de sanitarios y grifería moderna",
    },
    {
      id: 2,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/3BB40FB2-4ABF-47D8-BE23-F6E85092F483_zjwado.jpg",
      nombre: "Reparación de Tuberías",
      descripcion: "Reparación y reemplazo de tuberías dañadas en cocina",
    },
    {
      id: 3,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023563/BDB4C172-42A3-4A16-B634-D33785C70B3F_i2aydq.jpg",
      nombre: "Instalación de Calentador",
      descripcion: "Instalación de calentador de agua de alta eficiencia",
    },
    {
      id: 4,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023563/1DB8338F-4375-49F4-8B13-F02689B38D38_jg5exl.jpg",
      nombre: "Destape de Drenajes",
      descripcion: "Servicio de destape y limpieza de drenajes obstruidos",
    },
    {
      id: 5,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023561/2BDBA96D-3359-44F7-9EFA-AC86A7F11064_eqsw57.jpg",
      nombre: "Instalación de Grifería",
      descripcion: "Instalación de grifería moderna en cocina y baños",
    },
    {
      id: 6,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023562/F705DDE4-9EE1-4253-8A49-514B1C9E5387_braqoo.jpg",
      nombre: "Reparación de Fugas",
      descripcion: "Detección y reparación de fugas en sistema de tuberías",
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

  return (
    <div className="w-full max-w-7xl mx-auto px-7 py-26 open-sans-regular">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl barlow-condensed-bold font-bold text-blue-perfect mb-4">
          Plumbing Work Gallery
        </h2>
        <p className="text-lg  max-w-2xl mx-auto lg:text-lg  md:text-lg open-sans-light">
          Take a look at our work
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            {/* Botón cerrar - Sin Lucide React */}
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
