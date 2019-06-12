<template>
  <v-flex xs12 sm6 md6>
    <v-hover>
      <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >$14.99</div>
          </v-expand-transition>
        </v-img>
        <v-card-text class="pt-4" style="position: relative;">
          <!-- <v-btn absolute color="orange" class="white--text" fab large right top>
           <v-rating background-color="orange lighten-3" color="orange" v-model="rating"></v-rating>
          </v-btn>-->
          <div class="grey--text title mb-2">Title</div>
          <div class="font-weight-light grey--text title mb-2">
            Our Vintage kitchen utensils delight any chef.
            <br>Made of bamboo by hand
          </div>

          <div class="font-weight-light grey--text">23 de outubro de 2018 - Jackson Silva</div>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      rating: 3
    };
  }
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
