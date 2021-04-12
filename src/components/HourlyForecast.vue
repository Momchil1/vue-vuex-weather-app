<template>
  <div class="card">
          <div class="title">
            <p>{{hour}}</p>
            <p class="date">{{ date }}</p>
          </div>
          <span class="icon">
            <img
              class="img-fluid mt-2"
              :src="`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`"/>
          </span>
          <div class="temp">
                <span class="high-temp">{{ temp }}<sup>&deg;</sup></span>
            </div>
          <div class="row">
            <div class="col-12">
              <div class="header">{{ forecast.weather[0].description }}</div>
            </div>
          </div>
        </div>  
</template>

<script>

export default {
  name: 'HourlyForecast',
  props: {
    forecast: Object,
    hour: String,
    date: String,
    temp: Number
  }
}
</script>
