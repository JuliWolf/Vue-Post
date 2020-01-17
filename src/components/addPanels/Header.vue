<template>
    <b-navbar>
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item href="/create_post" v-if="authStatus">
                Create Post
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" v-if="!authStatus" href="/signUp">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light" href="/logIn" v-if="!authStatus">
                        Log in
                    </a>
                    <a class="button is-light" @click.prevent="logOut" v-else>
                        Log out
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'authStatus',
                'authUserInfo'
            ])
        },
        methods: {
            ...mapActions([
                'logOut'
            ])
        }
    }
</script>

<style lang="scss">

</style>
