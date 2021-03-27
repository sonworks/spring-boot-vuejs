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
      :items="items"
      label="select"
    />
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { label: 'select1', value: 'select1' },
        { label: 'select2', value: 'select2' },
        { label: 'select3', value: 'select3' }
      ]
    }
  }
}
</script>
