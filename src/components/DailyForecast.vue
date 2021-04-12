<template>
  <div class="card" @click="getHourlyData">
    <div class="title">
      <p>{{ weekDay }}</p>
      <p class="date">{{ date }}</p>
    </div>
    <span class="icon">
      <img
        class="img-fluid mt-2"
        :src="`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`"
      />
    </span>
    <div class="temp">
      <span class="high-temp">{{ tempMax }}<sup>&deg;</sup></span
      >/ {{ tempMin }}<sup>&deg;</sup>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="header">{{ forecast.weather[0].description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "DailyForecast",
  props: {
    forecast: Object,
    weekDay: String,
    date: String,
    tempMax: Number,
    tempMin: Number,
    aggregatedDailyData: Map
  },
  data() {
    return {
      hourlyData: []
    }
  },
  methods: {
    getHourlyData(){
      this.getHourlyForecast(this.hourlyData);
    },
    ...mapActions(['getHourlyForecast'])
  },
  created(){
    this.hourlyData = this.aggregatedDailyData.get(this.forecast.day);
  }
};
</script>

<style>
.title p.date {
    font-size: 1rem;
    font-weight: normal;
}
.card {
    padding: 1rem;
    margin: 1.5rem 1vw;
    border-radius: 1rem;
    background-color: rgba(238, 237, 237, 0.22);
    border-color: rgba(238, 237, 237, 0.22);
    box-shadow: 5px 6px 6px 2px #e9ecef;
    text-align: center;
    align-items: center;
    cursor: pointer;
}
.card:hover {
    background-color: #e9ecef;
} 
.title {
    font-weight: bold;
}
.title p {
    margin-bottom: 0.2rem;
    font-size: 1.2rem
}
.temp {
    color: #5655558c;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
}
.high-temp {
    font-size: 3.5rem;
    color: initial;
}
.header {
    color: #5655558c;
}
.col-4 {
    padding: 0 0.2rem
}
.icon img {
    width: 8rem
}
</style>
