<template>
  <v-container grid-list-md text-xs-center fluid fill-height>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1 display-4>Home</h1>
      </v-flex>

      <v-flex xs12 sm6 md6>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            color="darken-5"
            class="green-custom white--text"
          >
            <v-layout>
              <v-flex xs5>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                  height="200px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Supermodel</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu lorem vel enim consectetur molestie a vel sem. Etiam tincidunt mi in massa dictum, eu egestas ipsum iaculis. Maecenas orci nibh, auctor quis sapien at, eleifend feugiat erat. Praesent vitae finibus sapien, semper egestas lectus. Duis euismod vehicula convallis. Etiam quis ligula pulvinar, feugiat arcu a, dapibus ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Phasellus suscipit aliquam sapien, id tincidunt mauris bibendum quis. Pellentesque et cursus nibh.</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              23 de outubro de 2019 - Jackson
              <v-spacer></v-spacer>
              <v-rating background-color="orange lighten-3" color="orange" v-model="rating"></v-rating>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      rating: 3
    };
  }
};
</script>

<style>
.v-card {
  border-radius: 20px;
}
</style>
