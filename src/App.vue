<template>
<v-app>

    <!-- start toolbar -->
    <v-card color="grey lighten-4" absolute dark tile>
        <v-toolbar dense>

            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <h4> <span class="blue--text">Ahmed</span> <span class="red--text">Eldeib</span> </h4>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
    <!-- end toolbar -->

    <!-- start navigation drawer -->
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="pink--text text--accent-4">
                <v-list-item>
                    <v-list-item-title>Foo</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Bar</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Fizz</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Buzz</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <!-- end navigation drawer -->

    <v-main>
        <router-view />
    </v-main>
</v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        drawer: false,
        group: null,
    }),
};
</script>
