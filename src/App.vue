<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" color="primary" app clipped temporary>
      <Menu />
    </v-navigation-drawer>

    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Aplicación</v-toolbar-title>
      <v-spacer></v-spacer>
      <Header />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Layout />
      </v-container>
    </v-main>

    <v-footer app color="primary" padless>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from '@/views/structure/Footer';
import Header from '@/views/structure/Header';
import Layout from '@/views/structure/Layout';
import Menu from '@/views/structure/Menu';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Layout,
    Menu
  },
  data: () => ({
    drawer: false
  })
};
</script>
