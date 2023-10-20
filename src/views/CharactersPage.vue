<template>
  <router-view></router-view>
    <template v-if="$route.name === 'Characters'">
          <div class="row">
            <div class="col-sm-6 col-lg-2" v-for="character in characters" :key="character.id">
              <div class="custom-card d-flex flex-column justify-content-between">
                <router-link :to="`/characters/${character.id}`">
                  <div class="w-100">
                    <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="" class="char-custom-img">
                  </div>
                </router-link>
                <div>
                  <router-link :to="`/characters/${character.id}`">
                    <div class="content-title mt-4 mb-4">{{ character.name }}</div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
    </template>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'

export default {
  data() {
    return {
      characters: []
    }
  },
  async created() {
    const publicKey = 'bdc606f1b1db98626ed37760361b7ec5'
    const privateKey = '0174e24a05dc6c3fc8dc3735dd5c8db984d099a7'
    const timestamp = Number(new Date())
    const hash = md5(timestamp + privateKey + publicKey)

    const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash
      }
    })
    this.characters = response.data.data.results
  }
}
</script>

<style scoped>

.char-img-layout {
  min-height: 183px;
}

.char-custom-img {
    height: 183px;
    width: 186.67px;
    border-radius: 4px;
}

.char-card {
  width: 186.67px;
  max-width: 186.67px;
  border-style: hidden;
  height: 218px;
}
.custom-col{
  max-width: 210.67px;
}
.custom-card {
  width: 186.67px;
  height: auto;
}
</style>
