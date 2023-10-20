<template>
  <div>
      <div class="row gx-4 gy--32">
        <div class="d-flex col-12 col-lg-6 gy-32" v-for="event in events" :key="event.id">
          <div class="img-container">
            <img :src="event.thumbnail.path + '.' + event.thumbnail.extension" alt="" class="img fliud event-img">
          </div>
          <div class="conteudo ps-3 d-flex flex-column">
            <div class="event-title-font pb-3">{{ event.title }}</div>
            <div class="ed-font truncated-text">{{ event.description }}</div>
            <div class="d-flex align-items-center mt-auto">
              <div class="date-font">DATE OF THE EVENT</div>
              <div class="">: {{ formatDate(event.end) }}</div>
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
      events: []
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
    }
  },
  async created() {
    const publicKey = 'bdc606f1b1db98626ed37760361b7ec5'
    const privateKey = '0174e24a05dc6c3fc8dc3735dd5c8db984d099a7'
    const timestamp = Number(new Date())
    const hash = md5(timestamp + privateKey + publicKey)

    const response = await axios.get('https://gateway.marvel.com/v1/public/events', {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash
      }
    })
    this.events = response.data.data.results
  }
}
</script>

<style>
.event-img {
  height: 223px;
  object-fit: cover;
  width: 223px;
  border-radius: 4px;
}
.event-title-font{
  font-weight: 700;
  font-size: 16px;
  line-height: 22.4px;
  text-transform: uppercase;
}
.date-font {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
}
.conteudo {
  height: 223px;
}
.ed-font {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
}

.truncated-text{
   display: -webkit-box;
   -webkit-line-clamp:6; 
   -webkit-box-orient: vertical; 
   overflow:hidden;
   text-align: left;
   text-transform: uppercase;
}
.mt-auto {
   margin-top:auto; 
}
.gy-32 {
  margin-top: 32px;
  padding-bottom: 12px;
}
.gy--32{
  margin-top: -32px;
}
</style>
