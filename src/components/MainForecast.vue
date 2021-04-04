<template>
  <div class="d-flex mt-5" v-if="!error">
    <div class="daily-data" @click="openModal()" v-for="data in dailyData" :key="data.dt">
      <DailyForecast
        :forecast="data"
        :weekDay="weekDay(data)"
        :date="date(data)"
        :tempMax="Math.round(data.maxTemp)"
        :tempMin="Math.round(data.minTemp)"
        :aggregatedDailyData="aggregatedDailyData"
      />
    </div>
  </div>
  <div class="d-flex justify-content-center" v-else>{{error}}</div>
</template>

<script>
import DailyForecast from "./DailyForecast";
import { aggregateDailyData, getDailyData } from '../utils/dailyData';

export default {
  name: "MainForecast",
  components: { DailyForecast },
  props: {
      weatherData: Array
  },
  data() {
    return {
      dailyData: [],
      aggregatedDailyData: {},
      error: ''
    }
  },
  methods: {
    weekDay: function(data) {
      return new Date(data.dt * 1000).toLocaleDateString('en-US', {weekday: 'short'});
    },
    date: function(data) {
      return new Date(data.dt * 1000).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit'});
    },
    openModal: function(){
        this.$eventHub.$emit('open-modal', true);
    }
  },
  watch: {
    weatherData(){
        this.aggregatedDailyData = aggregateDailyData(this.weatherData);
        this.dailyData = getDailyData(this.aggregatedDailyData);
    }
  },
  created(){
    this.$eventHub.$on('search-error', (data) => {
        this.error = data;
    });
  }
};
</script>

<style>
body {
    background-color: rgba(238, 237, 237, 0.33);
    color: rgb(105, 104, 104);
    font-family: sans-serif
}
.slick-arrow {
    z-index: 1;
}
.slick-container {
    height: 55vh;
}
.slick-prev:before, .slick-next:before {
    color: black;
}
.daily-data {
    width: 20%;
}
</style>
