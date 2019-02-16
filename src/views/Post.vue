<template>
    <v-container grid-list-xs>
        <v-layout>
            <v-flex>
                <v-btn @click="$router.go(-1)" color="primary">
                    <v-icon>mdi-arrow-left</v-icon>Home
                </v-btn>

                <div id="spinner_container">
                    <v-progress-circular
                        v-if="loading"
                        v-bind:size="40"
                        indeterminate
                        color="pink"
                        class="spinner"
                    ></v-progress-circular>
                </div>

                <img :src="this.dogUrl" alt="Dog image" />

                <v-container fluid style="min-heigth: 0" grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-text-field
                                v-model="title"
                                name="title"
                                label="Describe me"
                                id="title"
                            ></v-text-field>
                            <v-text-field
                                v-model="author"
                                name="author"
                                label="Author"
                                id="author"
                                hint="Your name"
                            ></v-text-field>

                            <v-btn block color="primary" @click="post()"
                                >POST A DOG</v-btn
                            >
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import postDog from '../components/mixins/postDog';

export default {
    data() {
        return {
            dogUrl: null,
            title: '',
            author: '',
            loading: true
        };
    },
    props: {
        pictureUrl: {
            default: '',
            type: String
        }
    },
    mounted() {
        if (this.pictureUrl !== '') {
            this.dogUrl = this.pictureUrl;
            this.loading = false;
        } else {
            axios
                .get('https://dog.ceo/api/breed/appenzeller/images/random')
                .then(response => {
                    if (response.data.status) {
                        this.dogUrl = response.data.message;
                        this.loading = false;
                    } else {
                        console.log('Error getting image');
                    }
                });
        }
    },
    methods: {
        post() {
            postDog(this.dogUrl, this.title, this.author);
        }
    }
};
</script>

<style scoped>
img {
    max-width: 100%;
    height: auto;
    width: auto\9;
    /* ie8 */
}
#spinner_container {
    text-align: center;
}
.spinner {
    margin: auto;
    margin: 4rem;
}
</style>
