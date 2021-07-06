<template>
  <nav>
<!--Navigation-drawer-->
    <v-navigation-drawer app v-model="drawer" class="teal lighten-4" >
      <v-list flat>
        <span v-for="item in items" :key="item.title">
          <template v-if="item.subItens">
            <v-list-group v-model="item.active" :prepend-icon="item.icon" no-action color="teal--text text--darken-4">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="subItem in item.subItens" :key="subItem.title" link :to="subItem.to" style="padding-left: 25px;">
                <v-list-item-icon>
                  <v-icon v-text="subItem.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item :key="item.title" link :to="item.to" color="#1976d2">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          </span>
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
    drawer: true,
    items: [
      {
        title: "Item1",
        icon: 'mdi-view-dashboard',
        to: "/"
      },
      {
        title: "Admin",
        icon: 'mdi-account',
        subItens: [
          {
            title: "Item2",
            icon: "mdi-flag",
            to: "/item2"
          },
          {
            title: "Item3",
            icon: 'mdi-code-greater-than',
            to: "/item3"
          }
        ]
      },
      {
        title: "Others",
        icon: 'mdi-folder-open',
        subItens: [
          {
            title: "blog",
            icon: "mdi-blogger",
            to: "/item4"
          },
          {
            title: "gallery",
            icon: 'mdi-picture-in-picture-top-right',
            to: "/item5"
          },
                    {
            title: "books",
            icon: 'mdi-book-open-page-variant',
            to: "/item6"
          }
        ]
      },
    ]
  })

}
</script>
<style>
</style>