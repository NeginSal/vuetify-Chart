<template >
  <div class="item1 my-3 mx-3" >
    <h1>This is Item1 page.</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3" color="lime accent-1" >
            <v-responsive class="pt-4">
            <v-list-item-avatar>
              <v-img  :src="person.avatar" ></v-img>
            </v-list-item-avatar>
            </v-responsive>
            <v-card-text>
              <div class=" purple--text my-2"><h2>{{person.name}}</h2></div>
              <v-divider></v-divider>
              <div class=" red--text my-2"><h4>{{person.price1}}</h4></div>
              <div class="subheading green--text my-2"><h3>{{person.price2}}</h3></div>
            </v-card-text>
            <v-card-action >
              <v-btn flat small color="orange lighten-1" to="/newpage" class="mb-3">
                <v-icon small left>mdi-pencil</v-icon>
                <span>show details</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      team:[
        {avatar: '/card1.jpg',name:'Negin',price1:'90',price2:'1'},
        {avatar: '/card2.jpg',name:'ali',price1:'40',price2:'3'},
        {avatar: '/card3.jpg',name:'fatemh',price1:'10',price2:'7'},
        {avatar: '/card4.jpg',name:'reza',price1:'80',price2:'4'},
        {avatar: '/card5.jpg',name:'nima',price1:'100',price2:'9'}
      ]
    };
  }

}
</script>

<style>
v-img{
    width: 100px;
    height: 100px;
}



</style>