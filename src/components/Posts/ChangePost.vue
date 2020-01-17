<template>
    <div class="is-three-fifths is-offset-one-fifth column">
        <form action="">
            <section>
                <b-field label="Title" :type="title.length < 4 ? 'is-danger' : ''" :message="title.length < 4 ? titleError : ''">
                    <b-input maxlength="100" v-model="title"></b-input>
                </b-field>

                <b-field label="Post body" :type="body.length < 10 ? 'is-danger' : ''" :message="body.length < 10 ? bodyError : ''">
                    <b-input type="textarea" v-model="body" maxlength="250"></b-input>
                </b-field>
            </section>
            <button class="button" @click.prevent="cancelChange">Cancel</button>
            <button class="button is-success" @click.prevent="submitForm()">Submit</button>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data () {
            return {
                title: '',
                body: '',
                titleError: 'Title is too short',
                bodyError: 'Post body is too short'
            }
        },
        props: ['id'],
        methods: {
            ...mapActions([
                'getPost',
                'changePost',
                'showErrorMessage',
                'refreshErrorMessage'
            ]),
            submitForm () {
                this.refreshErrorMessage();
                if(this.title.length > 4 && this.body.length > 10){
                    this.changePost({ id: this._props.id, data: { title: this.title, body: this.body } })
                }
            },
            cancelChange () {
                this.$router.replace('/')
            }
        },
        computed: {
          ...mapGetters([
              'postToChange',
              'errorMessage'
          ])
        },
        watch: {
            postToChange () {
                this.title = this.postToChange.title;
                this.body = this.postToChange.body;
            }
        },
        beforeMount () {
            this.getPost(this._props.id)
        }
    }
</script>
