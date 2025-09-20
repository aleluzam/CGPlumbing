import { useState } from "react";
import { FormattedMessage } from "react-intl";
import FondoTuberias from "../assets/images/FondoTuberias.jpg";

interface Trabajo {
  id: number;
  imagen: string;
  nombreId: string; // 👈 Cambiado para usar ID de traducción
  descripcionId: string; // 👈 Cambiado para usar ID de traducción
}

const PlumbingGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Trabajo | null>(null);

  const trabajos: Trabajo[] = [
    {
      id: 1,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023562/B28D1DC1-AC18-433B-B6C3-59712A1E40DF_otelhi.jpg",
      nombreId: "img1",
      descripcionId: "img1desc",
    },
    {
      id: 2,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/3BB40FB2-4ABF-47D8-BE23-F6E85092F483_zjwado.jpg",
      nombreId: "img2",
      descripcionId: "img2desc",
    },
    {
      id: 3,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023563/BDB4C172-42A3-4A16-B634-D33785C70B3F_i2aydq.jpg",
      nombreId: "img3",
      descripcionId: "img3desc",
    },
    {
      id: 4,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023563/1DB8338F-4375-49F4-8B13-F02689B38D38_jg5exl.jpg",
      nombreId: "img4",
      descripcionId: "img4desc",
    },
    {
      id: 5,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023561/2BDBA96D-3359-44F7-9EFA-AC86A7F11064_eqsw57.jpg",
      nombreId: "img5",
      descripcionId: "img5desc",
    },
    {
      id: 6,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023562/F705DDE4-9EE1-4253-8A49-514B1C9E5387_braqoo.jpg",
      nombreId: "img6",
      descripcionId: "img6desc",
    },
    {
      id: 7,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023567/FBBB882F-FBC2-4997-A9D9-3E7C6B99C877_n2ephl.jpg",
      nombreId: "img7",
      descripcionId: "img7desc",
    },
    {
      id: 8,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023565/8C5B2555-463C-4373-9C14-C72AD5C256F1_dtnufd.jpg",
      nombreId: "img8",
      descripcionId: "img8desc",
    },
    {
      id: 9,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023565/52F3C146-815A-4C71-A301-B62F4C8571B7_aologu.jpg",
      nombreId: "img9",
      descripcionId: "img9desc",
    },
    {
      id: 10,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023564/33745AEB-FA0F-4421-82C7-9A3AC441A4CB_yv9qfa.jpg",
      nombreId: "img10",
      descripcionId: "img10desc",
    },
    {
      id: 11,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023562/2315E73B-9B21-4FC0-A21B-48FA43AC9CCC_xqcg4o.jpg",
      nombreId: "img11",
      descripcionId: "img11desc",
    },
    {
      id: 12,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023561/70C24971-4296-47AD-9F9C-A4AC0E0658C5_oxtfah.jpg",
      nombreId: "img12",
      descripcionId: "img12desc",
    },
    {
      id: 13,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/9DA5E0DF-D111-43CB-9FE0-677BC4B781C3_d8xh3z.jpg",
      nombreId: "img13",
      descripcionId: "img13desc",
    },
    {
      id: 14,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/A910FBDE-1EF6-4D20-AF42-62DFB3251FA1_zecnof.jpg",
      nombreId: "img14",
      descripcionId: "img14desc",
    },
    {
      id: 15,
      imagen:
        "https://res.cloudinary.com/dkfykryyj/image/upload/v1758023560/9AF506CB-6414-4706-B8EC-E730ED2CE701_mdvqtq.jpg",
      nombreId: "img15",
      descripcionId: "img15desc",
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
            <FormattedMessage id="galerytitle" />
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center open-sans-light px-4 mb-10">
            <FormattedMessage id="galerydescription" />
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
              aria-label={`Ver detalles de imagen ${trabajo.id}`}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={trabajo.imagen}
                  alt={`Trabajo de plomería ${trabajo.id}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <div className="p-4 text-white open-sans-regular">
                  <h3 className="font-bold text-xl mb-2">
                    <FormattedMessage
                      id={trabajo.nombreId}
                      defaultMessage={`Trabajo ${trabajo.id}`}
                    />
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    <FormattedMessage
                      id={trabajo.descripcionId}
                      defaultMessage={`Descripción del trabajo ${trabajo.id}`}
                    />
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-semibold text-gray-800 text-center">
                  <FormattedMessage
                    id={trabajo.nombreId}
                    defaultMessage={`Trabajo ${trabajo.id}`}
                  />
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
              alt={`Trabajo de plomería ${selectedImage.id}`}
              className="max-w-full max-h-screen object-contain rounded-lg"
            />

            {/* Información en el modal */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 id="modal-title" className="text-2xl font-bold mb-2">
                <FormattedMessage
                  id={selectedImage.nombreId}
                  defaultMessage={`Trabajo ${selectedImage.id}`}
                />
              </h3>
              <p className="text-gray-200">
                <FormattedMessage
                  id={selectedImage.descripcionId}
                  defaultMessage={`Descripción del trabajo ${selectedImage.id}`}
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlumbingGallery;
