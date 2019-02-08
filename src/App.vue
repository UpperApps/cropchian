<template>
    <v-app>
        <v-toolbar app>
            <v-btn icon v-if="$route.name != 'home'" @click="$router.go(-1)" />
            <v-icon>arrow-back</v-icon>
            <v-toolbar-title> <span>cropchien</span> </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-content> <router-view /> </v-content>
    </v-app>
</template>

<script>
/**
 * @component App
 * @desc This is the main app component.
 */
import Home from './views/Home';

export default {
    name: 'App',
    components: {
        Home
    },
    data() {
        return {
            //
        };
    }
};
</script>
