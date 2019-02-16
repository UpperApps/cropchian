<template>
    <v-app>
        <v-toolbar app>
            <v-btn icon v-if="$route.name != 'home'" @click="$router.go(-1)" />
            <v-icon>arrow-back</v-icon>
            <v-toolbar-title> <span>cropchien</span> </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                icon
                v-if="$route.name == 'post'"
                @click="$router.push({ name: 'camera' })"
            >
                <v-icon>mdi-camera</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content> <router-view /> </v-content>
    </v-app>
</template>

<script>
/**
 * @component App
 * @desc This is the main app component.
 */

export default {
    name: 'App',
    data() {
        return {
            //
        };
    }
};
</script>
