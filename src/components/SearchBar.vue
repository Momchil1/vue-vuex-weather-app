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
export default {
  name: "SearchBar",
   data() {
    return {
      search: ''
    }
  }, 
  methods: {
    async searchCity(){
      const Api_Key = '265257b62109cf6dcfc55ed5a3926ced';
      const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${this.search}&appid=${Api_Key}&units=metric`;
      const weatherData = await fetch(weatherUrl);
      const body = await weatherData.json();
      body.list?
      (this.$eventHub.$emit('weather-data', body.list),
      this.$eventHub.$emit('search-error', '')):
      this.$eventHub.$emit('search-error', body.message);
    }
  }
};
</script>

<style></style>
