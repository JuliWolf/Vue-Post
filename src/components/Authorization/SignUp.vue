<template>
    <div class="is-three-fifths is-offset-one-fifth column">
        <h1 class="title">SignUp</h1>
        <b-message title="Errors" type="is-danger" :active.sync="logInErrorMessage.length > 0 ? true : false">
            <p> {{ logInErrorMessage }}</p>
        </b-message>
        <form action="">
            <section>
                <b-field label="Name"
                         :type="errors.nameError ? 'is-danger' : ''"
                         :message="errors.nameError ? 'Name length must be at least 4 signs' : ''">
                    <b-input v-model="name"
                             placeholder="Enter your name">
                    </b-input>
                </b-field>

                <b-field label="Email"
                         :type="errors.emailError ? 'is-danger' : ''"
                         :message="errors.emailError ? 'Email is invalid' : ''">
                    <b-input type="email"
                             v-model="email"
                             placeholder="Enter your email"
                             maxlength="30">
                    </b-input>
                </b-field>

                <b-field label="Username"
                         :type="errors.usernameError ? 'is-danger' : ''"
                         :message="errors.usernameError ? 'Username length must be at least 4 signs' : ''">
                    <b-input maxlength="30"
                             v-model="username"
                             placeholder="Create your username">
                    </b-input>
                </b-field>

                <b-field label="Password"
                         :type="errors.passwordError ? 'is-danger' : ''"
                         :message="errors.passwordError ? 'Password length must be at least 6 signs' : ''">
                    <b-input type="password"
                             v-model="password"
                             placeholder="Enter your password"
                             password-reveal>
                    </b-input>
                </b-field>
            </section>
            <div class="column is-half is-offset-one-quarter is-centered">
                <div class="buttons is-centered">
                    <button class="button" @click="cancelSignUp">Cancel</button>
                    <button class="button is-success" @click.prevent="submitForm">Create account</button>
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
                name: '',
                email: '',
                username: '',
                password: '',
                errors: {
                    nameError: false,
                    emailError: false,
                    usernameError: false,
                    passwordError: false
                }
            }
        },
        methods: {
            ...mapActions([
                'createNewUser'
            ]),
            cancelSignUp () {
                this.$router.replace('/')
            },
            submitForm () {
                if(this.name.length >= 4 && this.email.length >= 6 && this.username.length >= 4 && this.password.length >= 6){
                    this.createNewUser({ name: this.name, email: this.email, username: this.username, password: this.password })
                }else{
                    if(this.name.length < 4){
                        this.errors.nameError = true
                    }
                    if(this.email.length < 6){
                        this.errors.emailError = true
                    }
                    if(this.username.length < 4){
                        this.errors.usernameError = true
                    }
                    if(this.password.length < 6){
                        this.errors.passwordError = true
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
