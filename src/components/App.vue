<template>
  <div id="app" class="container">
    <SearchBar />
    <MainForecast />
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
  }
}
</script>

<style></style>
