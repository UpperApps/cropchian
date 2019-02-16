<template>
    <v-container grid-list-xs>
        <v-layout>
            <v-flex>
                <v-btn @click="$router.go(-1)" color="primary">
                    <v-icon>mdi-arrow-left</v-icon>Home
                </v-btn>
                <v-img :src="dog.url" aspect-ratio="1.7"></v-img>
                <h1>{{ dog.comment }}</h1>
                <p class="subtitle">{{ dog.info }}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from '../../configFirebase';

export default {
    props: {
        dogProp: {
            type: Object
        }
    },
    data() {
        return {
            dog: {}
        };
    },
    mounted() {
        if (this.dogProp) {
            this.dog = this.dogProp;
        } else {
            const id = this.$route.params.id;
            firebase.db
                .doc(`dogs/${id}`)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        this.dog = doc.data();
                    } else {
                        // doc.data() will be undefined in this case
                        console.log('No such document!');
                    }
                })
                .catch(error => {
                    console.log('Error getting document:', error);
                });
        }
    }
};
</script>
