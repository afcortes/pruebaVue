<template>
  <div class="characters-grid">
    <div
      class="characters-item"
      v-for="(item, index) of charactersList"
      :key="index"
    >
      <img :src="item.image" />
      <div class="identifier">{{ item.id }}. {{ item.name }}</div>
      <div>
        {{ item.status }}
      </div>
      <div>
        {{ item.species }}
      </div>
      <div>
        {{ item.gender }}
      </div>
      <div>
        {{ item.location.name }}
      </div>
    </div>
  </div>
</template>

<script>
import store from "./../store/index";
export default {
  name: "HelloWorld",
  data: () => ({
    charactersList: [],
  }),
  created() {
    store.dispatch("getCharactersAction");
  },
  beforeMount() {
    this.charactersList = this.$store.state.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 200px;
  border-radius: 50%;
}
.characters-grid {
  background-color: darkgrey;
}

.identifier {
  color: rgb(0, 0, 161);
  font-weight: 900;
}

.characters-item {
  text-align: center;
  border: 1px solid #000;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  background-color: rgb(178, 178, 248);
}
</style>
