<template>
    <div>
        <div v-for="item in getPostsList" class="is-three-fifths is-offset-one-fifth column">
            <app-post :key="item.id" :item="item"></app-post>
        </div>
        <hr>
        <nav class="pagination is-right is-rounded" role="navigation" aria-label="pagination">
            <a class="pagination-previous" @click="getPrevPageData" :disabled="pageNumber === 0">Previous</a>
            <a class="pagination-next" @click="getNextPageData" :disabled="pageNumber >= pageCount -1">Next page</a>
        </nav>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Post from './Post'

    export default {
        methods: {
            ...mapActions([
                'getPosts',
                'getPrevPageData',
                'getNextPageData'
            ])
        },
        computed: {
            ...mapGetters([
                'getPostsList',
                'pageNumber',
                'pageCount'
            ])
        },
        components: {
            'app-post': Post
        },
        beforeMount () {
            this.getPosts()
        }
    }
</script>

<style>
    .pagination{
        justify-content: center!important;
    }
</style>
