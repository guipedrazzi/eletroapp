<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- passando variável na class css -->
    <h2 :class="classVar">Curso Vue 3</h2>

    <!-- passando array,obj na class css {'title':true} -> se tiver classe title aplica -->
    <h3 :class="{'title': false, 'title-home':isHome}">Curso Vue 3</h3>
    <!-- se isHome for true, ele aplica a classe title-home, isHome está no data()return -->
    
    <!-- utilizando array e passando obj dentro do array v-bind:class só que resumido-->
    <p :class="['text', {'text-home':isHome}]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias alias pariatur hic consequatur quod. Ut numquam suscipit non quas quis nemo ab illo nam nesciunt, quasi, labore accusamus aliquid rem?</p>
    <!-- OOU da pra fazer puxando o array direto do data()return -->
    <br>
    <p :class="pClass">TEXTO PCLASS</p> <br>

    <!-- STYLE do mesmo jeito que class. style com obj-->
    <p :style="{'color':'aqua', 'background-color': 'black'}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt blanditiis, tenetur aliquam ex praesentium consequuntur quisquam, labore reiciendis minima tempore. Iusto neque impedit temporibus officiis itaque, obcaecati inventore porro!</p>
    <p :style="styleClass">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt blanditiis, tenetur aliquam ex praesentium consequuntur quisquam, labore reiciendis minima tempore. Iusto neque impedit temporibus officiis itaque, obcaecati inventore porro!</p>
  </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      'classVar': 'title',
      styleClass: { color:'aqua', backgroundColor: 'black', 'font-size': '20px'},
      isHome: true,
      pClass: ['text', 'text-home']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.title{
  font-size: 20px;
  color: blue;
}

.title-home{
  color: blueviolet;
}

.text{
  color: green;
}

.text-home{
  font-size: large;
  color: aquamarine;
}
</style>
