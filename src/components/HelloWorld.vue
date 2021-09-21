<template>
<v-container>
    <h1 class="green--text text-center">Hi From HelloWorld Component!</h1>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Est nemo recusandae labore deleniti magnam voluptas earum voluptates
        cupiditate obcaecati quis ex quaerat ab consequuntur voluptatibus veniam
        vel vero, rerum qui.
    </p>

    <!-- start row -->

    <v-row v-for="n in 2" :key="n" class="text-center pink--text">
        <v-col v-for="k in 3" :key="k">
            <h1> hi {{k}} of {{n}}</h1>
        </v-col>
    </v-row>

    <!-- end row -->

    <!-- start form -->

    <form>
        <v-text-field v-model="name" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
        <v-text-field v-model="email" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>

        <v-btn class="mr-10" @click="submit">
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </form>

    <!-- end form -->

</v-container>
</template>


<script>
import { addDoc } from 'firebase/firestore/lite';
import { thecollect } from '../firebase';
export default {
    name: "HelloWorld",

    data: () => ({
      name:" ",
      email: " "
    }),
    methods:{
      clear(){
        this.name=" ",
        this.email=" "
      },
      submit(){
        addDoc(thecollect,{
          name: this.name,
          email: this.email
        })
      }
    }
};
</script>
