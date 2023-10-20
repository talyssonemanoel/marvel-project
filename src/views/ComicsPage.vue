<template>
  <div>
      <div class="row gx-4 gy-4">
        <div class="col-6 col-lg-2" v-for="comic in comics" :key="comic.id">
          <div class="img-container">
            <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="" class="img fliud comic-img">
          </div>
          <div class="pt-3">
            <div class="comic-title-font">{{ comic.title }}</div>
            <div>PAGES: {{ comic.pageCount }}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'

export default {
  data() {
    return {
      comics: []
    }
  },
  async created() {
    const publicKey = 'bdc606f1b1db98626ed37760361b7ec5'
    const privateKey = '0174e24a05dc6c3fc8dc3735dd5c8db984d099a7'
    const timestamp = Number(new Date())
    const hash = md5(timestamp + privateKey + publicKey)

    const response = await axios.get('https://gateway.marvel.com/v1/public/comics', {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash
      }
    })
    this.comics = response.data.data.results
  }
}
</script>
<style scoped>
.comic-img {
  height: 283px;
  object-fit: cover;
  width: auto;
  max-width: 100%;
  border-radius: 4px;
}
.comic-title-font{
  font-weight: 700;
  font-size: 16px;
  line-height: 22.4px;
}

@media (max-width: 576px) {
  .comic-img {
  height: 245px;
  object-fit: cover;
  width: auto;
  max-width: 100%;
  border-radius: 4px;
}
  
}
</style>
