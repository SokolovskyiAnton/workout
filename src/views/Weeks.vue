<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div>
        <h3>Неделя</h3>
      </div>
    </div>
    <hr>

    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Бег</th>
          <th scope="col">Подтягивания</th>
          <th scope="col">Пресс</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td><b-form-select  v-model="firstWeek.firstWeekRun"  :options="options"></b-form-select></td>
          <td><b-form-select  v-model="firstWeek.firstWeekLifting" :options="options1"></b-form-select></td>
          <td><b-form-select  v-model="firstWeek.firstWeekPress" :options="options2"></b-form-select></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>
            <b-form-select  v-model="secondWeek.secondWeekRun" :options="options3"></b-form-select>
          </td>
          <td><b-form-select  v-model="secondWeek.secondWeekLifting" :options="options4"></b-form-select></td>
          <td><b-form-select  v-model="secondWeek.secondWeekPress" :options="options5"></b-form-select></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>
            <b-form-select  v-model="thirdWeek.thirdWeekRun" :options="options6"></b-form-select>
          </td>
          <td><b-form-select  v-model="thirdWeek.thirdWeekLifting" :options="options7"></b-form-select></td>
          <td><b-form-select  v-model="thirdWeek.thirdWeekPress" :options="options8"></b-form-select></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>
            <b-form-select  v-model="fourthWeek.fourthWeekRun" :options="options9"></b-form-select>
          </td>
          <td><b-form-select  v-model="fourthWeek.fourthWeekLifting" :options="options10"></b-form-select></td>
          <td><b-form-select  v-model="fourthWeek.fourthWeekPress" :options="options11"></b-form-select></td>
        </tr>
            
      </tbody>
   </table>
   <button @click="create" class="btn btn-primary">Создать</button>
  </div>
</template>

<script>
export default {
  name: 'week',
  data() {
    return {
      firstWeek: {
        firstWeekRun: null,
        firstWeekLifting: null,
        firstWeekPress: null
      },
      secondWeek: {
        secondWeekRun: null,
        secondWeekLifting: null,
        secondWeekPress: null
      },
      thirdWeek: {
        thirdWeekRun: null,
        thirdWeekLifting: null,
        thirdWeekPress: null
      },
      fourthWeek: {
        fourthWeekRun: null,
        fourthWeekLifting: null,
        fourthWeekPress: null
      }
    }
  },
  methods: {
    create() {
      this.$store.dispatch('updateWeek', {
        id: this.week.id,
        firstWeek: this.firstWeek,
        secondWeek: this.secondWeek,
        thirdWeek: this.thirdWeek,
        fourthWeek: this.fourthWeek,
      })
      this.$router.push('/list')
      
    }
  },
  computed: {
    week() {
      return this.$store.getters.weeksById(+this.$route.params.id)
    },
    options() {
      let result = this.week.firstWeek.firstWeekRun
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options1() {
      let result = this.week.firstWeek.firstWeekLifting
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options2() {
      let result = this.week.firstWeek.firstWeekPress
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    }
    ,
    options3() {
      let result = this.week.secondWeek.secondWeekRun
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options4() {
      let result = this.week.secondWeek.secondWeekLifting
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options5() {
      let result = this.week.secondWeek.secondWeekPress
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options6() {
      let result = this.week.thirdWeek.thirdWeekRun
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options7() {
      let result = this.week.thirdWeek.thirdWeekLifting
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options8() {
      let result = this.week.thirdWeek.thirdWeekPress
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options9() {
      let result = this.week.fourthWeek.fourthWeekRun
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options10() {
      let result = this.week.fourthWeek.fourthWeekLifting
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    },
    options11() {
      let result = this.week.fourthWeek.fourthWeekPress
      let options = [{value: null, text: result}];

      for (let i = 1; i <= 50; i++) {
        options.push({value: i, text: i})
      }

      return options
    }
  }
}
</script>