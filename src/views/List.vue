<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div>
        <h3>Список</h3>
      </div>
    </div>
    <hr>
    <div class="row" v-for="week of weeks" :key="week.id">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Бег</th>
            <th scope="col">Подтягивания</th>
            <th scope="col">Пресс</th>
            <th scope="col">Время</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{{week.firstWeek.firstWeekRun}}</td>
            <td>{{week.firstWeek.firstWeekLifting}}</td>
            <td>{{week.firstWeek.firstWeekPress}}</td>
            <td>{{week.firstWeek.value}}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{{week.secondWeek.secondWeekRun}}</td>
            <td>{{week.secondWeek.secondWeekLifting}}</td>
            <td>{{week.secondWeek.secondWeekPress}}</td>
            <td>{{week.secondWeek.value}}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{{week.thirdWeek.thirdWeekRun}}</td>
            <td>{{week.thirdWeek.thirdWeekLifting}}</td>
            <td>{{week.thirdWeek.thirdWeekPress}}</td>
            <td>{{week.thirdWeek.value}}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>{{week.fourthWeek.fourthWeekRun}}</td>
            <td>{{week.fourthWeek.fourthWeekLifting}}</td>
            <td>{{week.fourthWeek.fourthWeekPress}}</td>
            <td>{{week.fourthWeek.value}}</td>
          </tr>
          
        </tbody>
        
      </table>
      <div>
        <router-link tag="button" class="btn btn-primary mb-5" :to="'/weeks/' + week.id">Изменить</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>


export default {

  computed: {
    weeks() {
      return this.$store.getters.weeks
    }, 
    options() {
      let options = [];

      for (let i = 1; i <= 50; i++) {
        options.push(i)
      }

      return options
    }
  }
}
</script>

<style scoped>
.table {
  border: 1px solid rgb(66, 66, 66);
}

</style>