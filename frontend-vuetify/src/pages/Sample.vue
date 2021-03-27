<template>
  <v-container>
    <h2># Button</h2>
    <h2 class="title">default</h2>
    <v-btn>default</v-btn>
    <v-btn color="primary">primary</v-btn>
    <v-btn color="secondary">secondary</v-btn>
    <v-btn color="error">error</v-btn>

    <h2 class="title">outlined</h2>
    <v-btn outlined>dafault</v-btn>
    <v-btn color="primary" outlined>primary</v-btn>
    <v-btn color="secondary" outlined>secondary</v-btn>
    <v-btn color="error" outlined>error</v-btn>

    <h2 class="title">rounded</h2>
    <v-btn rounded>dafault</v-btn>
    <v-btn color="primary" rounded>primary</v-btn>
    <v-btn color="secondary" rounded>secondary</v-btn>
    <v-btn color="error" rounded>error</v-btn>

    <p>&nbsp;</p>
    <h2># Tab</h2>
    <v-tabs>
      <v-tab :key="menu1">Menu1</v-tab>
      <v-tab :key="menu2">Menu2</v-tab>
      <v-tab :key="menu3">Menu3</v-tab>
      <v-tab-item :key="menu1">Menu1 Contents</v-tab-item>
      <v-tab-item :key="menu2">Menu2 Contents</v-tab-item>
      <v-tab-item :key="menu3">Menu3 Contents</v-tab-item>
    </v-tabs>

    <p>&nbsp;</p>
    <h2># Form</h2>
    <h2 class="title">input text</h2>
    <v-text-field
      v-model="firstname"
      :counter="20"
      label="First Name"
    ></v-text-field>
    <h2 class="title">radio</h2>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="radio1" value="radio1"></v-radio>
      <v-radio label="radio2" value="radio2"></v-radio>
      <v-radio label="radio3" value="radio3"></v-radio>
    </v-radio-group>

    <h2 class="title">select</h2>
    <v-select 
      v-model="select"
      item-text="label"
      item-value="value"
      :items="selectItems"
      label="select"
    />

    <p>&nbsp;</p>
    <h2># Alert</h2>
    <v-alert type="success" value="true">Success</v-alert>
    <v-alert type="info" value="true">Info</v-alert>
    <v-alert type="warning" value="true">Warning</v-alert>
    <v-alert type="error" value="true">Error</v-alert>

    <p>&nbsp;</p>
    <h2># Table</h2>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-5"
    >
    <template slot:item.calories="{ item }">
      <v-chip
        :color="getColor(item.calories)"
        dark
      >
        {{ item.calories }}
      </v-chip>
    </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      selectItems: [
        { label: 'select1', value: 'select1' },
        { label: 'select2', value: 'select2' },
        { label: 'select3', value: 'select3' }
      ],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
  methods: {
    getColor (calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
  },
}
</script>
