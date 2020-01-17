<template>
    <div class="is-three-fifths is-offset-one-fifth column">
        <h1 class="title">Create Post</h1>
        <form action="">
            <section>
                <b-field label="Title"
                         :type="errors.titleError ? 'is-danger' : ''"
                         :message="errors.titleError ? 'Title is too short' : ''">
                    <b-input v-model="title"
                             placeholder="Enter title"
                             maxlength="100">
                    </b-input>
                </b-field>

                <b-field label="Post text"
                         :type="errors.bodyError ? 'is-danger' : ''"
                         :message="errors.bodyError ? 'Body is too short' : ''">
                    <b-input type="textarea"
                             v-model="body"
                             placeholder="Enter your post body"
                             maxlength="250">
                    </b-input>
                </b-field>

            </section>
            <div class="column is-half is-offset-one-quarter is-centered">
                <div class="buttons is-centered">
                    <button class="button" @click.prevent="cancelCreation">Cancel</button>
                    <button class="button is-success" @click.prevent="submitForm">Submit</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data () {
            return {
                title: '',
                body: '',
                errors: {
                    titleError: false,
                    bodyError: false
                }
            }
        },
        computed: {
            ...mapGetters([
                'authUserInfo'
            ])
        },
        methods: {
            ...mapActions([
                'createPost'
            ]),
            cancelCreation () {
                this.$router.replace('/')
            },
            submitForm () {
                console.log(this);
                if(this.title.length > 6 && this.body.length > 6){
                    this.createPost({ title: this.title, body: this.body, author: this.authUserInfo.username, likes: 0 })
                }else{
                    if (this.title.length < 6){
                        this.errors.titleError = true
                    }
                    if (this.body.length < 6){
                        this.errors.bodyError = true
                    }
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
