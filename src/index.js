/* global Vue */

const vm = new Vue({
  el: '#app',
  data: {
    countTotalShopping: 0,
    totalShopping: 0,
    shoppingCart: [],
    viewProductosShopping: true,
    viewShopingCard: false,
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
    },
    countarTotal: function () {
      if (Object.keys(this.shoppingCart).length === 0) {
        return '0'
      } else {
        let count = 0
        this.shoppingCart.forEach(function (obj) {
          count += parseInt(obj.shopping)
        })
        this.countTotalShopping = count
        return this.countTotalShopping
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
          <div class="container">
          <div class="py-5 text-center">
              <h2>Tus Productos</h2>
          </div>
          <div class="row">
              <div class="col-md-6 order-md-2 mb-4">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                      <span class="text-muted">Tu carrito</span>
                      <span class="badge badge-secondary badge-pill">{{this.$parent.countTotalShopping}}</span>
                  </h4>
                  <ul class="list-group mb-3">
                      <li 
                        class="list-group-item d-flex justify-content-between lh-condensed"
                        v-for="(card, i) in cards"
                        v-if="card.shopping > 0"
                      >
                        <div>
                            <h6 class="my-0">{{card.name}}</h6>
                            <div class="">
                                <input 
                                  type="number" 
                                  :value="card.shopping"  
                                  disabled
                                >
                                <button 
                                    type="button" 
                                    class="btn btn-danger"
                                    v-on:click="delectToCart(i)"
                                >
                                    -
                                </button>
                            </div>
                            
                        </div>
                        <span class="text-muted">$ {{card.precio}}</span>
                      </li>
                      <li
                        class="list-group-item"
                        v-else
                      >
                        <div class="alert alert-danger" role="alert">
                          El Carrito esta vacio
                        </div>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
                      <span>Total (MX)</span>
                      <strong>$ {{this.$parent.totalShopping}}</strong>
                      </li>
                  </ul>

              </div>
              <div class="col-md-6 order-md-1">
              <h4 class="mb-3">Datos del Comprador</h4>
              <form class="needs-validation" novalidate="">
                  <div class="row">
                  <div class="col-md-6 mb-3">
                      <label for="firstName">Nombre</label>
                      <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                      Valid first name is required.
                      </div>
                  </div>
                  <div class="col-md-6 mb-3">
                      <label for="lastName">Apellido</label>
                      <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                      <div class="invalid-feedback">
                      Valid last name is required.
                      </div>
                  </div>
                  </div>

                  <div class="mb-3">
                  <label for="email">Correo <span class="text-muted">(Opcional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com">
                  <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                  </div>
                  </div>

                  <div class="mb-3">
                  <label for="address">Dirección</label>
                  <input type="text" class="form-control" id="address" placeholder="Av Tumben" required="">
                  <div class="invalid-feedback">
                      Please enter your shipping address.
                  </div>
                  </div>

                  <div class="mb-3">
                  <label for="address2">Segunda Dirección <span class="text-muted">(Opcional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Av Tumben">
                  </div>

                  <div class="row">
                  <div class="col-md-5 mb-3">
                      <label for="country">Pais</label>
                      <select class="custom-select d-block w-100" id="country" required="">
                      <option value="">Selecione...</option>
                      <option>México</option>
                      </select>
                      <div class="invalid-feedback">
                      Please select a valid country.
                      </div>
                  </div>
                  <div class="col-md-4 mb-3">
                      <label for="state">Estado</label>
                      <select class="custom-select d-block w-100" id="state" required="">
                      <option value="">Selecione...</option>
                      <option>CDMX</option>
                      </select>
                      <div class="invalid-feedback">
                      Please provide a valid state.
                      </div>
                  </div>
                  <div class="col-md-3 mb-3">
                      <label for="zip">C.P</label>
                      <input type="text" class="form-control" id="zip" placeholder="" required="">
                      <div class="invalid-feedback">
                      Zip code required.
                      </div>
                  </div>
                  </div>

                  <hr class="mb-4">

                  <h4 class="mb-3">Tipo de pago</h4>

                  <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                      <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                      <label class="custom-control-label" for="credit">Tarjeta de Credito</label>
                  </div>

                  </div>
                  <div class="row">
                  <div class="col-md-6 mb-3">
                      <label for="cc-name">Nombre de Tarjeta de Credito</label>
                      <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                      <small class="text-muted">Full name as displayed on card</small>
                      <div class="invalid-feedback">
                      Name on card is required
                      </div>
                  </div>
                  <div class="col-md-6 mb-3">
                      <label for="cc-number">Numero de tarjeta</label>
                      <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                      <div class="invalid-feedback">
                      Credit card number is required
                      </div>
                  </div>
                  </div>
                  <div class="row">
                  <div class="col-md-3 mb-3">
                      <label for="cc-expiration">Fecha</label>
                      <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                      <div class="invalid-feedback">
                      Expiration date required
                      </div>
                  </div>
                  <div class="col-md-3 mb-3">
                      <label for="cc-cvv">CVV</label>
                      <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                      <div class="invalid-feedback">
                      Security code required
                      </div>
                  </div>
                  </div>
                  <hr class="mb-4">
                  <button class="btn btn-primary btn-lg btn-block" type="submit">Comprar</button>
              </form>
              </div>
          </div>
        </div><!--container-->
            `
})
