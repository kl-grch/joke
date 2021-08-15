<template>
  <div class="content">
    <h1>10 random joke's</h1>

  <div class="searchJoke">
    <input type="search" placeholder="Enter word for search joke" v-model="search">
  </div>

    <div class="boxJoke">
      <div class="itemJoke" v-for="joke in searchJoke" :key="joke.id"
           v-bind:class="{itemJokeActive: isActive}">
        <p>{{joke.joke}}</p>
        <p class="like"  @click="like" v-bind:class="{likeActive: isActive}">♥︎</p>
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
      jokes: [],
      isActive: false
    }
  },
  created() {
    axios.get("https://v2.jokeapi.dev/joke/Programming?type=single&amount=10")
        .then(response => {
          this.jokes = response.data.jokes;
          console.log(response.data.jokes);
        })
        .catch(err => {
          alert(err);
        });
  },
  computed: {
    searchJoke(){
      return this.jokes.filter(({joke})=>joke.toUpperCase().includes(this.search.toUpperCase()))
    },
  },

  methods: {
    like(event){
      event.target.parentElement.classList.toggle('itemJokeActive');
      event.target.classList.toggle('likeActive');
      },
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
  justify-content: space-between;
  align-items: center
}

.itemJokeActive {
  background: lightgreen;
}

.like {
  font-size: 150%;
  padding: 10px;
  cursor: pointer;
}

.likeActive {
  color: red;
  cursor: pointer;
}


</style>
