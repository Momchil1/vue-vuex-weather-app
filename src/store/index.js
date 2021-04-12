import Vue from 'vue';
import Vuex from 'vuex';

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    // initial state
    state: {
        weatherData: [],
        selectedHourlyData: [],
        openModal: false,
        error: ''
    },
    mutations: {
        setWeatherData: (state, weatherData) => (state.weatherData = weatherData),
        setHourlyForecast: (state, hourlyForecast) => (state.selectedHourlyData = hourlyForecast),
        toggleModal: (state, data) => (state.openModal = data),
        setError: (state, error) => (state.error = error)
    },
    // in order to get the weatherData from the api we need an action to make the 
    // request, get the response and then call a mutation
    actions: {
        async fetchWeatherData ({ commit }, city) {
            const Api_Key = '265257b62109cf6dcfc55ed5a3926ced';
            const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_Key}&units=metric`;
            const weatherData = await fetch(weatherUrl);
            const body = await weatherData.json();
            // The only way to change state in a Vuex store is by committing 
            // a mutation. The first argument is the name of the mutation, second is 
            // the data we want to pass to the mutation function
            body.list?
            (commit('setWeatherData', body.list),
            commit('setError', '')):
            commit('setError', body.message)
        },
        getHourlyForecast ({ commit }, data) {
            commit('setHourlyForecast', data)
        },
        toggleModal ({ commit }, data) {
            commit('toggleModal', data)
        }
    },
    // in order to get state in some component we need a getter
    getters: {
        weatherData: state => state.weatherData,
        error: state => state.error,
        openModal: state => state.openModal,
        selectedHourlyData: state => state.selectedHourlyData
    }
})