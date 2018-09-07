/* global vue */
const vm = new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: 1,
        name: "Huawei - P Smart - Azul - Telcel",
        precio: "4669",
        imagen:
          "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000212347_sd.jpg",
        descripcion:
          'La tecnología Best Buy al instante! Conoce el increíble y potente Huawei P Smart, un celular que no te puedes perder, te encantará! Con una pantalla de 5.67" con 32 GB de memoria para almacenar tus momentos, tus apps favoritas y archivos multimedia.',
        cantidad: "4"
      },
      {
        id: 2,
        name: "Apple - iPhone X 256 GB - Silver- AT&T",
        precio: "26999",
        imagen:
          "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000209978_sd.jpg",
        descripcion:
          "Nuevo iPhone X, un potente smartphone para ti. Conoce la nueva generación de iPhone, y llévate el Apple iPhone X 256 GB Plata de AT&T. Con una Super Retina HD y un panel de pantalla OLED",
        cantidad: "10"
      },
      {
        id: 3,
        name: "Samsung - Galaxy S9+ 64 GB - Gris titanio - AT&T",
        precio: "20999",
        imagen:
          "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000211608_sa.jpg",
        descripcion:
          "Con Samsung Galaxy S9 Plus de AT&T combina un equipo celular confiable con capacidades increíbles de una cámara que se adapta como el ojo humano. La calificación IP68",
        cantidad: "10"
      }
    ]
  }, // final data
  methods: {
    addToCart(product) {
      console.log("entro", product);
    }
  }
});
