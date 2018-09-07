/* global vue */
Vue.component('shopping-cart', {
  data () {
    return {
      view: true,
      cards: this.$parent.shoppingCart
    }
  },
  template: `
            <div 
              v-if="cards.length > 0" 
              v-for="(card, i) in cards"
            >
              <div 
                class="media text-muted pt-3"
                > 
                  <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165b47e7f67%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165b47e7f67%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.3046875%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  data-holder-rendered="true" style="width: 32px; height: 32px;">
                  <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div class="d-flex justify-content-between align-items-center w-100">
                      <strong class="text-gray-dark">Laptop</strong>
                    </div>
                    <span class="d-block">@username</span>
                    <div class="d-flex justify-content-end">
                      <button type="button" class="btn btn-success">+</button>
                      <button type="button" class="btn btn-danger">-</button>
                    </div>		
                  </div>
                </div>
              </div>`,
})

const vm = new Vue({
  el: "#app",
  data: {
    shoppingCart:[],
    products: [
      {
        id: 1,
        name: "Huawei - P Smart - Azul - Telcel",
        precio: "4669",
        imagen:
          "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000212347_sd.jpg",
        descripcion:
          'La tecnología Best Buy al instante! Conoce el increíble y potente Huawei P Smart, un celular que no te puedes perder, te encantará! Con una pantalla de 5.67" con 32 GB de memoria para almacenar tus momentos, tus apps favoritas y archivos multimedia.',
        cantidad: "4",
        showView: true,
        shopping: 0
      },
      {
        id: 2,
        name: "Apple - iPhone X 256 GB - Silver- AT&T",
        precio: "26999",
        imagen:
          "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000209978_sd.jpg",
        descripcion:
          "Nuevo iPhone X, un potente smartphone para ti. Conoce la nueva generación de iPhone, y llévate el Apple iPhone X 256 GB Plata de AT&T. Con una Super Retina HD y un panel de pantalla OLED",
        cantidad: "10",
        showView: true,
        shopping: 0
      },
      {
        id: 3,
        name: "Samsung - Galaxy S9+ 64 GB - Gris titanio - AT&T",
        precio: "20999",
        imagen:
          "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000211608_sa.jpg",
        descripcion:
          "Con Samsung Galaxy S9 Plus de AT&T combina un equipo celular confiable con capacidades increíbles de una cámara que se adapta como el ojo humano. La calificación IP68",
        cantidad: "10",
        showView: true,
        shopping: 0
      }
    ]
  }, // final data
  methods: {
    addToCart(value, index) {
      this.products[index].cantidad = this.products[index].cantidad - 1
      this.shoppingCart.push(value)
      this.$emit('shoppingCart:shoppingCart')
    }
  }
});
