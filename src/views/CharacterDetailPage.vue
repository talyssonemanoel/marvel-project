<template>
  <div class="row">
    <div v-if="character" class="d-flex flex-column flex-md-row">
      <div class="w-auto mb-3 mb-md-0 mr-md-3">
        <img v-if="character.thumbnail" :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="Imagem do personagem" class="img-detail">
      </div>
      <div class="w-100 content">
        <div class="font-1">{{ character.name }}</div>
        <div class="font-2 pt-4 pb-5">{{ character.description }}</div>
        <div class="char-comics">
          <div class="font-1 pb-4">COMICS</div>
          <div class="row gx-4 gy-4">
            <div class="col-6 col-lg-3" v-for="comic in comics" :key="comic.id">
              <div class="comic-card">
                <div class="img-container">
                  <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="" class="img fliud comic-img">
                </div>
                <div class="pt-3 h-auto">
                  <div class="font-3">{{ comic.title }}</div>
                  <div class="font-4">PAGES: {{ comic.pageCount }}</div>
                </div>
              </div>
            </div>
          </div>
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
  character: {},
  comics: []
}
},
async created() {
const id = this.$route.params.id
const publicKey = 'bdc606f1b1db98626ed37760361b7ec5'
const privateKey = '0174e24a05dc6c3fc8dc3735dd5c8db984d099a7'
const timestamp = Number(new Date())
const hash = md5(timestamp + privateKey + publicKey)

// Buscar os dados do personagem
const characterResponse = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
  params: {
    ts: timestamp,
    apikey: publicKey,
    hash: hash
  }
})
this.character = characterResponse.data.data.results[0]

this.$router.currentRoute.name = `Character_${this.character.name}`;

// Buscar as comics do personagem
const comicsResponse = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}/comics`, {
  params: {
    ts: timestamp,
    apikey: publicKey,
    hash: hash
  }
})
this.comics = comicsResponse.data.data.results
}
}
</script>

<style>
.img-detail {
height: 324px;
width: 330px;
margin-right: 24px;
border-radius: 4px;
}
.comic-img {
  height: 318px;
  border-radius: 2.8px;
  width: auto;
  max-width: 100%;
}
@media (max-width: 576px) {
  .img-detail {
  height: auto;
  width: 100%;
  border-radius: 4px;
  }
  .comic-img {
  border-radius: 2.8px;
  max-width: 100%;
  }
  
}

.comic-title-font{
  font-weight: 700;
  font-size: 16px;
  line-height: 22.4px;
}

.font-1 {
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0px;
  text-align: left;
  
}

.font-2{
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
}

.font-3 {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
}

.font-4 {
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
}

.comic-card{
  max-width: 200.25px;
}
</style>
