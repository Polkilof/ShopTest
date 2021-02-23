<template>
  <div class="wrapper">
    <main class="page">
      <header class="header-page">
        <div class="container">
          <strong class="header-logo">
            <a href="/">
              <img src="../assets/images/logo.png" srcset="../assets/images/logo@2x.png 2x" alt="image description">
            </a>
          </strong>
          <div class="basket">
            <span class="btn-basket" @click="toggleBasket">
              <img src="../assets/images/ico-bag.svg" alt="bag">
              <span class="badge">2</span>
            </span>
          </div>
        </div>
      </header>
      <basket-card ref="basket"></basket-card>
      <div class="container">
        <div class="page-row">
          <aside class="aside">
            <ul class="aside__nav">
              <li
                  class="aside__nav-item"
                  v-for="(category, index) in categories" :key="index"
              >
                <span
                    class="aside__nav-link"
                    :class="{'active': tabShow === index}"
                    @click.prevent="tabShow = index"
                    @click="selectedCategory = category.name"
                >
                  {{ category.name }}
                </span>
              </li>
            </ul>

            <div class="dropdown-block" :class="{ open : dropdownVisible }">
              <span class="dropdown-block__toggle" @click="toggle()">
                  {{ dropdownValue }}
                  <i class="dropdown-block__toggle-icon">
                      <img src="../assets/images/ico-arrow-down.svg" alt="arrow down">
                  </i>
              </span>
              <ul class="dropdown-block__list">
                <li
                  class="dropdown-block__item"
                  v-for="(item, index) in dropdownList" :key="index"
                  @click="select(item)"
                >
                  <span class="dropdown-block__link" :class="{ active : item.title === dropdownValue }">
                    {{ item.title }}
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          <div class="main">
            <transition-group name="main-product" tag="div" class="main-product">
              <div
                class="main-product__item"
                v-for="product in filteredProducts" :key="product.id"
              >
                <router-link to="/" tag="span" class="main-product__holder">
                  <div class="main-product__image">
                    <VueSlickCarousel
                      :class="'big'"
                      ref="big"
                      v-bind="{ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, infinite: false, }"
                      @beforeChange="syncSliders"
                    >
                      <div
                        class="main-product__slide"
                        v-for="image in product.imageSrc" :key="image.name"
                      >
                        <img
                          :src="require(`@/assets/images/${image.name}`)"
                          :alt="image.alt">
                      </div>
                    </VueSlickCarousel>
                    <VueSlickCarousel
                      class="slide"
                      :class="'thumb'"
                      ref="thumb"
                      v-bind="{ slidesToShow: 1, slidesToScroll: 1, variableWidth: true, infinite: false, }"
                      :focusOnSelect="true"
                      @beforeChange="syncSliders"
                    >
                      <div
                        class="slide__item"
                        v-for="image in product.imageSrc" :key="image.name"
                      >
                        <img
                          :src="require(`@/assets/images/${image.name}`)"
                          :alt="image.alt">
                      </div>
                    </VueSlickCarousel>
                  </div>
                  <div class="main-product__descr">
                    <span class="main-product__category">{{ product.category }}</span>
                    <span class="main-product__name">{{ product.name }}</span>
                    <span class="main-product__price">${{ product.price }}</span>
                    <span class="main-product__counter">на складе: {{ product.counter }}</span>
                  </div>
                </router-link>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </main>
  </div><!-- / wrapper -->
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      sort: '',
      dropdownValue: 'Сортировать',
      dropdownList: [
        {'key': 'all', 'title': 'Все'},
        {'key': 'price:desc', 'title': 'От дорогих к дешевым'},
        {'key': 'price:asc', 'title': 'От дешевых к дорогим'},
        {'key': 'rating', 'title': 'Популярные'},
        {'key': 'new', 'title': 'Новые'}
      ],
      dropdownVisible: false,
      tabShow: 0,
      selectedCategory: 'Все',
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    products() {
      return this.$store.getters.products;
    },
    filteredProducts() {
      let sortedProducts = this.products;

      if(this.selectedCategory === "Все") {
        sortedProducts = sortedProducts.filter((item) => {
          return item;
        });
      } else {
        sortedProducts = sortedProducts.filter((item) => {
          return item.category === this.selectedCategory;
        });
      }

      if (this.sort === 'rating') {
        sortedProducts = sortedProducts.filter((item) => {
          return item.rating === true;
        });
      } else if (this.sort === 'new') {
        sortedProducts = sortedProducts.filter((item) => {
          return item.new === true;
        });
      }

      sortedProducts = sortedProducts.sort((a, b) => {
        if (this.sort === 'price:desc') {
          return Number(b.price) - Number(a.price);
        } else if (this.sort === 'price:asc'){
          return Number(a.price) - Number(b.price);
        } else {
          return sortedProducts;
        }
      });

      return sortedProducts;
    }
  },
  methods: {
    toggle() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    select(option) {
      this.dropdownValue = option.title;
      this.sort = option.key;
      this.dropdownVisible = !this.dropdownVisible;
    },
    toggleBasket() {
      this.$refs.basket.toggleBasket();
    },
    syncSliders(currentPosition, nextPosition) {
      this.$refs.big.goTo(nextPosition);
      this.$refs.thumb.goTo(nextPosition);
    }
  }
}
</script>

<style lang="scss">
  .dropdown-block__link{
    cursor: pointer;
  }
  .btn-basket{
    cursor: pointer;
  }
  .main-product{
    &-move {
      transition: all 600ms ease-in-out 50ms;
    }
    &-enter-active {
      transition: all 300ms ease-out;
    }
    &-leave-active {
      transition: all 250ms ease-in;
      transform: scale(0.85);
      z-index: 0;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
    }
    &-enter {
      transition: all 250ms ease-out;
      transform: scale(1);
    }
  }
  .main-product__holder{
    max-width: 280px;
  }
  .main-product__image{
    .main-product__slide{
      position: relative;
      &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    .slick-list,
    .slick-track {
      position: static;
      display: flex;
      -moz-box-align: center;
      align-items: center;
      -moz-box-orient: horizontal;
      -moz-box-direction: normal;
      flex-flow: row nowrap;
    }
    .slick-slide{
      position: relative;
      &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
</style>