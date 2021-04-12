<template>
  <div>
    <h3 class="text-center mt-2">Weather Forecast</h3>
    <div class="input-group mt-2 w-50 m-auto">
      <input type="text" class="form-control" v-model="search" placeholder="Location..."/>
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="searchCity">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "SearchBar",
   data() {
    return {
      search: ''
    }
  }, 
  methods: {
    ...mapActions(['fetchWeatherData']),
    searchCity(){
      // this.fetchWeatherData comes from mapActions
      this.fetchWeatherData(this.search);
    }
  }
};
</script>
