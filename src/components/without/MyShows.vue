<template>
    <div class="myshows-without">
        <form @submit.prevent>
            <input type="text" v-model="search">
            <button @click="getShows()">Press me</button>
        </form>
        <div class="shows-list" v-if="shows">
            <div class="show-single" v-for="show in shows" :key="show.show.id">
                <h3>{{ show.show.name }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'MyShowsWithout',
    data() {
        return {
            search: '',
            error: null,
            shows: []
        }
    },
    methods: {
        getShows() {
            let url = `https://api.tvmaze.com/search/shows?q=${this.search}`;
            axios({
                url: url,
                method: 'GET'
            }).then(resp => {
                this.shows = resp.data;
            }).catch(err => {
                this.error = err
            })
        }
    },
}
</script>

<style scoped>
.shows-list {
    width: 100vw;
    display: flex;
    margin-top: 50px;
    align-items: center;
    flex-direction: column;
}
.show-single {
    width:200px; 
    border: 1px solid black;
    border-radius: 12px;
    margin-top: 10px;
}
</style>