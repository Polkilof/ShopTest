<template>
  <div class="basket-card" :class="{ 'basket-card__open' : basketVisible }">
    <span class="basket-card__close" @click="toggleBasket">
      <img src="../assets/images/ico-close.svg" alt="close">
    </span>
    <div class="basket-holder">
      <div class="order-list">
        <div class="order-block">
          <div class="order-block__img">
            <img src="../assets/images/img-product-1.png" alt="image description">
          </div>
          <div class="order-block__text">
            <h3 class="order-block__title">Рубашка на пуговицах</h3>
            <ul class="order-block__list">
              <li>
                <div class="input-numeric">
                  <span class="input-numeric__arrow minus igolnoe-left"></span>
                  <input type="text" class="input-numeric__field" value="1" readonly />
                  <span class="input-numeric__arrow plus igolnoe-right"></span>
                </div>
                <div class="order-block__price">$320</div>
              </li>
            </ul>
          </div>
          <a href="#" class="btn-remove"><img src="../assets/images/ico-close.svg" alt="close"></a>
        </div><!-- / order-block -->
        <div class="order-block ">
          <div class="order-block__img">
            <img src="../assets/images/img-product-2.png" alt="image description">
          </div>
          <div class="order-block__text">
            <h3 class="order-block__title">Кроссовки «Kaiwa» Y3 x Adidas</h3>
            <ul class="order-block__list">
              <li>
                <div class="input-numeric">
                  <span class="input-numeric__arrow minus"></span>
                  <input type="text" class="input-numeric__field" value="2" readonly />
                  <span class="input-numeric__arrow plus"></span>
                </div>
                <div class="order-block__price">$240</div>
              </li>
            </ul>
          </div>
          <a href="#" class="btn-remove"><img src="../assets/images/ico-close.svg" alt="close"></a>
        </div><!-- / order-block -->
      </div> <!-- / order-list -->
      <div class="basket-footer">
        <table class="basket-total">
          <tr>
            <td>Итого</td>
            <td>$800</td>
          </tr>
        </table>
      </div>
      <a href="#" class="btn btn_w100 btn_default btn_default--white">Купить</a>
    </div>
  </div><!-- / basket-card -->
</template>

<script>
export default {
  name: 'basketCard',
  props: {},
  data() {
    return {
      basketVisible: false,
    }
  },
  methods: {
    toggleBasket() {
      this.basketVisible = !this.basketVisible;
    },
  },
}
</script>


