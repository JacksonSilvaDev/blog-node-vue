<template>
  <v-container grid-list-md text-xs-center fluid fill-height>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1 display-4>Home</h1>
      </v-flex>
      <PostHome/>
    </v-layout>
  </v-container>
</template>

<script>
import PostHome from "./PostHomeComponent";
export default {
  data: () => {
    return {};
  },
  components: {
    PostHome
  }
};
</script>

<style>
.v-card {
  border-radius: 20px;
  cursor: pointer;
}
</style>
