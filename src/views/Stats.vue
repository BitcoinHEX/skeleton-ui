<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
        <LineChart :chart-data="datacollection"></LineChart>
      </div>
      <div class="column is-one-quarter">
        <BarChart :chart-data="datacollection"></BarChart>
      </div>
    </div>

  </div>
</template>

<script>
import LineChart from '@/components/charts/Line.vue';
import BarChart from '@/components/charts/Bar.vue';

export default {
  name: 'stats',
  components: {
    LineChart,
    BarChart,
  },
  data() {
    return {
      datacollection: null,
    };
  },
  mounted() {
    setInterval(this.fillData, 1000);
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [
          {
            label: 'Data 1',
            backgroundColor: '#f87979',
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
          {
            label: 'Data 2',
            backgroundColor: '#f87979',
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.random() * 500;
    },
  },

};
</script>
