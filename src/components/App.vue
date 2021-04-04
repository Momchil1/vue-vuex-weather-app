<template>
  <div id="app" class="container">
    <SearchBar />
    <MainForecast :weatherData="weatherData"/>
    <Modal />
  </div>
</template>

<script>
import SearchBar from './SearchBar';
import MainForecast from './MainForecast';
import Modal from './Modal';

export default {
  name: 'App',
  components: {
    SearchBar,
    MainForecast,
    Modal
  },
  data() {
    return {
      weatherData: []
    }
  },
  created(){
    this.$eventHub.$on('weather-data', (weatherData) => {
        this.weatherData = weatherData;
    });
  }
}
</script>

<style></style>
