<template>
    <div class="is-three-fifths is-offset-one-fifth column">
        <b-message title="Errors" type="is-danger" :active.sync="logInErrorMessage.length > 0 ? true : false">
            <p> {{ logInErrorMessage }}</p>
        </b-message>
        <h1 class="title">Log In</h1>
        <form action="">
            <section>
                <b-field label="Username"
                         :type="usernameError ? 'is-danger' : ''"
                         :message="usernameError ? 'Enter username here' : ''">
                    <b-input maxlength="30"
                             placeholder="Create your username"
                             v-model="username">
                    </b-input>
                </b-field>

                <b-field label="Password"
                         :type="passwordError ? 'is-danger' : ''"
                         :message="passwordError ? 'Enter password here' : ''">
                    <b-input type="password"
                             placeholder="Enter your password"
                             password-reveal
                             v-model="password">
                    </b-input>
                </b-field>
            </section>
            <div class="column is-half is-offset-one-quarter is-centered">
                <div class="buttons is-centered">
                    <button class="button" @click="cancelLogIn">Cancel</button>
                    <button class="button is-success" @click.prevent="submitForm">LogIn</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data () {
            return {
                username: '',
                password: '',
                passwordError: false,
                usernameError: false
            }
        },
        methods: {
            ...mapActions([
                'logIn'
            ]),
            cancelLogIn () {
                this.$router.replace('/')
            },
            submitForm () {
                console.log(this)
                if(this.username.length >= 4 && this.password.length >= 6){
                    console.log(this)
                    this.logIn( {username: this.username, password: this.password } )
                }else{
                    if(this.username.length < 4){
                        this.usernameError = true
                    }
                    if(this.password.length < 6){
                        this.passwordError = true
                    }
                }
            }
        },
        computed: {
            ...mapGetters([
                'logInErrorMessage'
            ])
        }
    }
</script>

<style lang="scss">

</style>
