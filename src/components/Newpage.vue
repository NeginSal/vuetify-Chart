<template>
    <div class="item1 my-3 mx-3" >
    <h1 class=" blue--text text--darken-4">This is User Performance.</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-card class="mt-4 mx-auto" width="700">
         <v-sheet class="v-sheet--offset mx-auto" color="blue lighten-4" elevation="12" max-width="calc(100% - 32px)">
            <v-sparkline :labels="labels" :value="value" color="light-blue darken-4" line-width="3" padding="16"></v-sparkline>
         </v-sheet>
         <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light my-5 ">
              User Performance
            </div>
            <v-list-item-avatar>
              <v-img max-height="150" max-width="250"
               src="/card1.jpg">
              </v-img>
            </v-list-item-avatar>
            <div class="blue-grey--text darken-4--text my-2"><h2>Negin</h2></div>
            <div class="blue-grey--text darken-4--text my-2"><h4>section1: 90</h4></div>
            <div class="blue-grey--text darken-4--text my-2"><h3>section2: 1</h3></div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small> mdi-clock</v-icon>
            <span class="text-caption grey--text font-weight-light">last registration 26 minutes ago</span>
            <v-card-actions class="justify-center my-5">
                <v-btn block  color="green" class="white--text">Print Report
                    <v-icon class="mx-2">mdi-printer</v-icon>
                </v-btn>
            </v-card-actions>
         </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
    </div>
</template>
<script>
  export default {
    data: () => ({
      labels: [
        '-20',
        '-5',
        '0',
        '10',
        '70',
        '250',
        '50',
        '350',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
    }),
  }
</script>