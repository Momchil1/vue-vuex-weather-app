<template>
  <div v-if="openModal">
    <div class="modal-background"></div>
    <div class="modal-wrapper">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-close" @click="closeModal()">&times;</span>
        </div>
        <div class="modal-body">
          <div class="d-flex flex-column justify-content-center slick-container">
            <Slider v-bind="sliderSettings">
                <HourlyForecast
                    v-for="data in selectedHourlyData" 
                    :key="data.dt"
                    :forecast="data"
                    :hour="hour(data)"
                    :date="date(data)"
                    :temp="Math.round(data.main.temp)"
                />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "vue-slick-carousel";
import HourlyForecast from "./HourlyForecast";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Modal",
  components: {
    Slider,
    HourlyForecast
  },
  data() {
    return {
      sliderSettings: {}
    };
  },
  methods: {
    hour: function(data) {
      return new Date(data.dt * 1000).toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit', hour12: false});
    },
    date: function(data) {
      return new Date(data.dt * 1000).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit'});
    },
    closeModal: function(){
        this.toggleModal(false);
    },
    ...mapActions(['toggleModal'])
  },
  computed: {
    // getting data from the store
    ...mapGetters(['openModal', 'selectedHourlyData'])
  },
  created() {
    this.sliderSettings = {
      infinite: false,
      slidesToShow: 5,
      swipeToSlide: true,
    };
  },
};
</script>

<style>
.modal-background {
    background: white;
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
}
.modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 3rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}
.modal-close {
    font-size: 3rem;
    cursor: pointer;
}
.modal-content {
    border: none;
}
.modal-content .modal-header {
    padding: 0 1rem;
    justify-content: flex-end;
    border: none;
    position: relative;
    z-index: 3;
}
.modal-body {
    z-index: 3;
}
.slick-slide {
    padding-right: 30px;
}
.slick-slide img{
    margin: auto;
}
</style>
