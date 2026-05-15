import serumBioaqua from '../assets/products/serum-bioaqua.jpg';
import pestaninaRubyrose from '../assets/products/pestanina-rubyrose.jpg';
import protectorTrendy from '../assets/products/protector-trendy.jpg';
import paletaAtenea from '../assets/products/paleta-atenea.jpg';
import brochasMiis from '../assets/products/brochas-miis.jpg';
import tonicoDolcebella from '../assets/products/tonico-dolcebella.jpg';

const realCatalog = [
    {
      id: "P001",
      name: "Serum Vitamina C Bioaqua",
      brand: "Bioaqua",
      category: "Cuidado Facial",
      price: 5269,
      image: serumBioaqua,
      description: "Serum antioxidante e iluminador para el rostro."
    },
    {
      id: "P002",
      name: "Pestañina Trópico",
      brand: "Ruby Rose",
      category: "Maquillaje",
      price: 18000,
      image: pestaninaRubyrose,
      description: "Alargamiento y volumen resistente al agua."
    },
    {
      id: "P003",
      name: "Protector Solar Facial",
      brand: "Trendy",
      category: "Cuidado Facial",
      price: 35000,
      image: protectorTrendy,
      description: "Protección SPF 50+ de textura ligera y sin color."
    },
    {
      id: "P004",
      name: "Paleta de Sombras Nude",
      brand: "Atenea",
      category: "Maquillaje",
      price: 45000,
      image: paletaAtenea,
      description: "Paleta de 12 tonos neutros de alta pigmentación."
    },
    {
      id: "P005",
      name: "Kit Brochas Profesionales",
      brand: "Miis Cosmetics",
      category: "Accesorios",
      price: 55000,
      image: brochasMiis,
      description: "Set de 10 brochas sintéticas para rostro y ojos."
    },
    {
      id: "P006",
      name: "Tónico de Rosas",
      brand: "Dolce Bella",
      category: "Cuidado Facial",
      price: 12000,
      image: tonicoDolcebella,
      description: "Tónico facial hidratante y refrescante."
    }
  ];
  
  export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.05; 
        if (success) {
          resolve(realCatalog);
        } else {
          reject({
            error: "internal_server_error",
            message: "Fallo interno al intentar cargar el catálogo de productos.",
            field: "database_connection",
            received: null
          });
        }
      }, 800);
    });
  };
  
  export const submitLead = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const missingField = !data.fullName ? "fullName" : !data.phone ? "phone" : !data.interest ? "interest" : null;
  
        if (missingField) {
          reject({
            error: "validation_failed",
            message: `El campo ${missingField} es obligatorio para procesar la solicitud.`,
            field: missingField,
            received: data[missingField] || "null"
          });
        } else {
          resolve({ 
              message: "Asesoría solicitada con éxito.", 
              leadId: `L-${Date.now()}` 
          });
        }
      }, 800);
    });
  };