<template>
  <div class="d-flex align-items-center justify-content-center h-100">
    <div class="welcome-content">
      <div class="d-flex justify-content-center welcome-img">
        <img src="../../public/logo-gray.svg" alt="Marvel">
      </div>
      <div class="font-1 align-items-center">
        <p>WELCOME TO MARVEL'S DIRECTORY</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'WelcomePage',
}
</script>

<style scoped>
h1 {
  color: #000000; /* Altere para a cor desejada */
}
.font-1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0px;
  color: black;
}
.welcome-img {
  margin-bottom: 48px;
}
.welcome-content {
  position: absolute;  /* Fixa a imagem em relação à janela de visualização */
  top: 40%;         /* Centraliza a imagem verticalmente */        /* Centraliza a imagem horizontalmente *//* Desloca a imagem para trás pela metade de sua altura e largura */
}

@media (max-width: 576px) {
  .welcome-img {
    width: 186px;
    height: 75px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 24px;
  }
  .font-1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: center;
}
.welcome-content {
  position: absolute; 
  bottom: 40%;       
}
}
</style>
