<template>
  <div class="content">
    <h1>10 лучших шуток</h1>
  <div class="searchJoke">
    <input type="search" placeholder="Введите слово для поиска среди анекдотов" v-model="search">
  </div>
    <div class="boxJoke">
      <div class="itemJoke" v-for="joke in jokes" :key="joke.id">
        <p>{{joke}}</p>
        <p>♥︎</p>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Main',
  components: axios,
  data(){
    return{
      search: '',
      jokes: {},
    }
  },
  methods: {},
  created() {
    axios
        .get(
            "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10",
            {
              headers: {
                Accept: "application/json"
              },
/*
              params: {
                limit: 10
              }
*/
            }
        )
        .then(response => {
          this.jokes.jokes = response.data;
          console.log(response.data);
        })
        .catch(err => {
          alert(err);
        });
  }
}
</script>

<style>
.content {
  display: flex;
  margin-right: 15%;
  margin-left: 15%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.searchJoke {
  border: 1px solid black;
  width: 100%;
}

.searchJoke > input {
  width: 100%;
  padding: 10px;
}

.boxJoke {
  border: 1px solid black;
  width: 100%;
  margin-top: 20px;

}

.itemJoke {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between

}
</style>
