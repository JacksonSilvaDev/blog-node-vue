<template>
  <div>
    <NavComponent/>
    <v-container grid-list-md text-xs-center fluid fill-height>
      <v-layout row wrap justify-center>
        <v-flex xs12>
          <h1 display-4>Home</h1>
        </v-flex>

        <PostHome/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PostHome from "./PostHomeComponent";
import NavComponent from "./NavComponent";
export default {
  data: () => {
    return {};
  },
  components: {
    PostHome,
    NavComponent
  }
};
</script>

<style>
.v-card {
  border-radius: 20px;
  cursor: pointer;
}
</style>
