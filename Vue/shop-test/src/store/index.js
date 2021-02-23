import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'categories': [{'name':'Все'}, {'name':'Плащи'}, {'name':'Обувь'}, {'name':'Рубашки'}, {'name':'Брюки'}],
    'products': [
      {
        'id': '1',
        'imageSrc': [{'name':'img-product-1.png', 'alt':'product 1'},{'name':'img-product-2.png', 'alt':'product 2'},{'name':'img-product-3.png', 'alt':'product 3'},{'name':'img-product-1.png', 'alt':'product 1'},{'name':'img-product-2.png', 'alt':'product 2'},{'name':'img-product-3.png', 'alt':'product 3'}],
        'name': 'Рубашка на пуговицах',
        'description': '',
        'price': '320',
        'category': 'Рубашки',
        'counter': '20',
        'rating': false,
        'new': false,
      },
      {
        'id': '2',
        'imageSrc': [{'name':'img-product-2.png', 'alt':'product 2'},],
        'name': 'Рубашка с принтом',
        'description': '',
        'price': '170',
        'category': 'Рубашки',
        'counter': '11',
        'rating': false,
        'new': false,
      },
      {
        'id': '3',
        'imageSrc': [{'name':'img-product-3.png', 'alt':'product 3'},],
        'name': 'Кроссовки «Kaiwa» Y3 x Adidas',
        'description': '',
        'price': '240',
        'category': 'Обувь',
        'counter': '134',
        'rating': true,
        'new': false,
      },
      {
        'id': '4',
        'imageSrc': [{'name':'img-product-4.png', 'alt':'product 4'},],
        'name': 'Куртка-рубашка с карманами',
        'description': '',
        'price': '240',
        'category': 'Плащи',
        'counter': '12',
        'rating': false,
        'new': false,
      },
      {
        'id': '5',
        'imageSrc': [{'name':'img-product-5.png', 'alt':'product 5'},],
        'name': 'Кроссовки с пряжками',
        'description': '',
        'price': '390',
        'category': 'Обувь',
        'counter': '11',
        'rating': false,
        'new': false,
      },
      {
        'id': '6',
        'imageSrc': [{'name':'img-product-6.png', 'alt':'product 6'},],
        'name': 'Укороченные зауженные брюки',
        'description': '',
        'price': '647',
        'category': 'Брюки',
        'counter': '7',
        'rating': false,
        'new': true,
      },
    ]
  },
  getters: {
    categories (state) {
      return state.categories;
    },
    products (state) {
      return state.products;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
