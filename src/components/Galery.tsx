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
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      nombre: "Instalación de Baño Completo",
      descripcion:
        "Renovación completa de baño con instalación de sanitarios y grifería moderna",
    },
    {
      id: 2,
      imagen:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
      nombre: "Reparación de Tuberías",
      descripcion: "Reparación y reemplazo de tuberías dañadas en cocina",
    },
    {
      id: 3,
      imagen:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop",
      nombre: "Instalación de Calentador",
      descripcion: "Instalación de calentador de agua de alta eficiencia",
    },
    {
      id: 4,
      imagen:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop",
      nombre: "Destape de Drenajes",
      descripcion: "Servicio de destape y limpieza de drenajes obstruidos",
    },
    {
      id: 5,
      imagen:
        "https://images.unsplash.com/photo-1584622781867-4d8a0e5d8b7d?w=400&h=300&fit=crop",
      nombre: "Instalación de Grifería",
      descripcion: "Instalación de grifería moderna en cocina y baños",
    },
    {
      id: 6,
      imagen:
        "https://images.unsplash.com/photo-1581858822449-3d0c543b0e5d?w=400&h=300&fit=crop",
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
