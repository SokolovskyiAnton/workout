<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div>
        <h3>Создать таблицу</h3>
      </div>
    </div>
<transition name="bounce">
  <table v-if="show" class="table mt-3">

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
      <td>
        <b-form-select  v-model="firstWeek.firstWeekRun" :options="options"></b-form-select>
      </td>
      <td><b-form-select  v-model="firstWeek.firstWeekLifting" :options="options"></b-form-select></td>
      <td><b-form-select  v-model="firstWeek.firstWeekPress" :options="options"></b-form-select></td>
      <td><b-form-datepicker v-model="firstWeek.value" class="time"></b-form-datepicker></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>
        <b-form-select  v-model="secondWeek.secondWeekRun" :options="options"></b-form-select>
      </td>
      <td><b-form-select  v-model="secondWeek.secondWeekLifting" :options="options"></b-form-select></td>
      <td><b-form-select  v-model="secondWeek.secondWeekPress" :options="options"></b-form-select></td>
      <td><b-form-datepicker v-model="firstWeek.value" class="time"></b-form-datepicker></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>
        <b-form-select  v-model="thirdWeek.thirdWeekRun" :options="options"></b-form-select>
      </td>
      <td><b-form-select  v-model="thirdWeek.thirdWeekLifting" :options="options"></b-form-select></td>
      <td><b-form-select  v-model="thirdWeek.thirdWeekPress" :options="options"></b-form-select></td>
      <td><b-form-datepicker v-model="firstWeek.value" class="time"></b-form-datepicker></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>
        <b-form-select  v-model="fourthWeek.fourthWeekRun" :options="options"></b-form-select>
      </td>
      <td><b-form-select  v-model="fourthWeek.fourthWeekLifting" :options="options"></b-form-select></td>
      <td><b-form-select  v-model="fourthWeek.fourthWeekPress" :options="options"></b-form-select></td>
      <td><b-form-datepicker v-model="firstWeek.value" class="time"></b-form-datepicker></td>
    </tr>
    <tr>
      <td>
        
      </td>
      <td><button @click="create" @mouseup="show = !show" class="btn btn-primary">Создать</button></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  </table>
</transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      firstWeek: {
        firstWeekRun: '',
        firstWeekLifting: '',
        firstWeekPress: '',
        value: ''
      },
      secondWeek: {
        secondWeekRun: '',
        secondWeekLifting: '',
        secondWeekPress: '',
        value: ''
      },
      thirdWeek: {
        thirdWeekRun: '',
        thirdWeekLifting: '',
        thirdWeekPress: '',
        value: ''
      },
      fourthWeek: {
        fourthWeekRun: '',
        fourthWeekLifting: '',
        fourthWeekPress: '',
        value: ''
      },
      show: true
    }
  },
  computed: {
    options() {
      let options = [];

      for (let i = 1; i <= 50; i++) {
        options.push(i)
      }

      return options
    }
  },
  methods: {
    create() {
      setTimeout(() => {
        const week = {
        firstWeek: this.firstWeek,
        secondWeek: this.secondWeek,
        thirdWeek: this.thirdWeek,
        fourthWeek: this.fourthWeek,
        id: Date.now()
      }

      this.$store.dispatch('createWeak', week)
      this.$router.push('/list')
      }, 600);
      
    }
  }
}
</script>

<style  scoped>
.table {
  border: 1px solid rgb(66, 66, 66);
}

.time {
  max-width: 300px;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
thead {
  background-color: #03fcf0;
}
</style>
