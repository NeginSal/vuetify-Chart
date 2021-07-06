<template>
  <nav>
<!--Navigation-drawer-->
    <v-navigation-drawer app v-model="drawer" class="teal lighten-4" >
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="teal--text text--darken-4" large>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-tile-title class="teal--text text--darken-4">{{link.text}}</v-list-tile-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!--Toolbar-->
    <v-app-bar app color="teal lighten-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="teal darken-4"></v-app-bar-nav-icon>
        <v-toolbar flat app color="teal lighten-4">
            <v-toolbar-title class="teal--text text--darken-4">
                Title
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="teal lighten-1">
                <span>Sign Out</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-toolbar>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    links: [
      {icon: 'mdi-view-dashboard' ,text:'Item1', route: '/'},
      {icon: 'mdi-folder-open' ,text:'Item2', route: '/item2'},
      {icon: 'mdi-code-greater-than' ,text:'Item3', route: '/item3'},
      {icon: 'mdi-account' ,text:'Item4', route: '/item4'},
      {icon: 'mdi-cellphone-basic' ,text:'Item5', route: '/item5'},
    ]
  })
}
</script>
<style>
</style>