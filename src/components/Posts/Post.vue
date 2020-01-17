<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ item.title }}
            </p>
            <span>
                {{item.likes}}
                <span class="icon is-small">
                    <i class="fa fa-heart"></i>
                </span>
            </span>
        </header>
        <div class="card-content">
            <div class="content">
                <p class="subtitle is-6">@{{ item.author }}</p>
                <br>
                {{ item.body }}
            </div>
            <hr>
            <p class="buttons is-right">
                <button class="button" v-if="authStatus" @click="likePost({id: item.id, data: {likes: item.likes + 1}})">
                    <span>Like</span>
                </button>
                <button class="button is-success" v-if="authStatus" @click="openChangePostPage(item.id)">Change</button>
                <button class="button is-danger" v-if="authStatus" @click="deletePost(item.id)">Delete</button>
            </p>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        props: ['item'],
        methods: {
            ...mapActions([
                'likePost',
                'deletePost'
            ]),
            openChangePostPage (id) {
                this.$router.replace('post/'+ id)
            }
        },
        computed: {
            ...mapGetters([
                'authStatus'
            ])
        }
    }
</script>

<style lang="scss">

</style>
