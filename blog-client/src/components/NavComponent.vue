<template>
  <div>
    <v-navigation-drawer color="#1fac69" v-model="drawer" clipped fixed app>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-layout justify-center align-center>
        <v-avatar :size="45" color="lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <v-toolbar-title>Blog Node Vue</v-toolbar-title>
      </v-layout>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
    <v-footer app fixed>
      <v-layout justify-center align-center>
        <span>
          Desenvolvido com amor por
          <span class="green--text font-weight-bold">Jackson Silva</span> &copy; 2018
        </span>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style>
</style>
