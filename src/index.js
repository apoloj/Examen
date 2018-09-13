/* global Vue */

const vm = new Vue({
  el: '#app',
  data: {
    totalShopping: 0,
    shoppingCart: [],
    viewProductosShopping: false,
    viewShopingCard: true,
    products: [
      {
        id: 1,
        name: 'Huawei - P Smart - Azul - Telcel',
        precio: 4669,
        imagen: 'https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000212347_sd.jpg',
        descripcion: 'La tecnología Best Buy al instante! Conoce el increíble y potente Huawei P Smart, un celular que no te puedes perder, te encantará! Con una pantalla de 5.67" con 32 GB de memoria para almacenar tus momentos, tus apps favoritas y archivos multimedia.',
        cantidad: 4,
        showView: true,
        shopping: 0
      },
      {
        id: 2,
        name: 'Apple - iPhone X 256 GB - Silver- AT&T',
        precio: 26999,
        imagen: 'https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000209978_sd.jpg',
        descripcion: 'Nuevo iPhone X, un potente smartphone para ti. Conoce la nueva generación de iPhone, y llévate el Apple iPhone X 256 GB Plata de AT&T. Con una Super Retina HD y un panel de pantalla OLED',
        cantidad: 10,
        showView: true,
        shopping: 0
      },
      {
        id: 3,
        name: 'Samsung - Galaxy S9+ 64 GB - Gris titanio - AT&T',
        precio: 20999,
        imagen: 'https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000211608_sa.jpg',
        descripcion: 'Con Samsung Galaxy S9 Plus de AT&T combina un equipo celular confiable con capacidades increíbles de una cámara que se adapta como el ojo humano. La calificación IP68',
        cantidad: 10,
        showView: true,
        shopping: 0
      }
    ]
  }, // final data
  computed: {
    calculateTotal: function () {
      if (Object.keys(this.shoppingCart).length === 0) {
        return '0'
      } else {
        let total = 0
        this.shoppingCart.forEach(function (obj) {
          total += parseInt(obj.shopping) * parseInt(obj.precio)
        })
        this.totalShopping = total
        return this.totalShopping
      }
    }
  },
  methods: {
    addToCart (value, index) {
      this.products[index].cantidad = this.products[index].cantidad - 1
      if (this.shoppingCart.length === 0) {
        this.shoppingCart.push(value)
        this.shoppingCart[0].shopping = this.shoppingCart[0].shopping + 1
      } else {
        const resultado = this.shoppingCart.find(shoppingCart => shoppingCart.id === this.products[index].id)
        for (var i = 0; i < this.shoppingCart.length; i++) {
          if (resultado) {
            if (this.shoppingCart[i].id === this.products[index].id) {
              this.shoppingCart[i].shopping = this.shoppingCart[i].shopping + 1
            }
          } else {
            const valueCont = this.shoppingCart.length
            this.shoppingCart.push(value)
            this.shoppingCart[valueCont].shopping = this.shoppingCart[valueCont].shopping + 1
            break
          }
        }
      }
    },
    viewCard () {
      this.viewProductosShopping = false
      this.viewShopingCard = true
    }
  }
})

Vue.component('shopping-cart', {
  data () {
    return {
      view: true,
      cards: this.$parent.shoppingCart
    }
  },
  methods: {
    delectToCart (index) {
      for (var p = 0; p < this.$parent.products.length; p++) {
        if (this.cards[index].id === this.$parent.products[p].id) {
          this.$parent.products[p].cantidad = this.$parent.products[p].cantidad + 1
          this.$parent.products[p].shopping = this.$parent.products[p].shopping - 1
        }
      }
    }
  },
  template: `
            <div>
              <template 
                v-if="cards.length > 0" 
                v-for="(card, i) in cards"
              >
                <div 
                  class="media text-muted pt-3"
                  v-if="card.shopping > 0"
                > 
                  <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" :src="card.imagen"
                  data-holder-rendered="true" style="width: 32px; height: 32px;">
                  <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div class="d-flex justify-content-between align-items-center w-100">
                      <strong class="text-gray-dark">Laptop</strong>
                    </div>
                    <span class="d-block">Nombre: {{card.name}}</span>
                    <span class="d-block">Precio:$ {{card.precio}}</span>
                    <div class="d-flex justify-content-end">
                      <input type="numer" 
                        :value="card.shopping"  
                        disabled
                      />
                      <button 
                        type="button" 
                        class="btn btn-danger"
                        v-on:click="delectToCart(i)"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  </div>
              </template>
            </div>`
})
