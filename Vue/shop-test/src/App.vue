<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('./assets/fonts/roboto-v20-latin_cyrillic-300.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./assets/fonts/roboto-v20-latin_cyrillic-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/roboto-v20-latin_cyrillic-300.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/roboto-v20-latin_cyrillic-300.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/roboto-v20-latin_cyrillic-300.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/roboto-v20-latin_cyrillic-300.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('./assets/fonts/roboto-v20-latin_cyrillic-500.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./assets/fonts/roboto-v20-latin_cyrillic-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/roboto-v20-latin_cyrillic-500.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/roboto-v20-latin_cyrillic-500.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/roboto-v20-latin_cyrillic-500.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/roboto-v20-latin_cyrillic-500.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @import './assets/sass/main.scss';
</style>
