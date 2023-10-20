<template>
  <nav class="navbar navbar-expand-lg custom-navbar align-items-center justify-content-between">
    <div>
      <img class="custom-brand" src="../../public/marvel.svg" alt="Marvel">
    </div>
    <div class="h-100" style="padding-left: 0px; padding-right: 0px;">
      <!-- Botão de off-canvas para telas pequenas -->
      <button class="navbar-toggler d-lg-none mobile-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" @click="toggleNavbar">
        <img src="../../public/toggle.svg" alt="Marvel">
        
      </button>
      <!-- Links da barra de navegação principal -->
      <div class="collapse navbar-collapse font-menu h-100" id="navbarNavAltMarkup">
        <div class="navbar-nav h-100">
          <router-link class="nav-link custom-nav-link font-menu-home" style="color: white;" to="/">HOME</router-link>
          <router-link class="nav-link custom-nav-link" style="color: white;" to="/characters">CHARACTERS</router-link>
          <router-link class="nav-link custom-nav-link" style="color: white;" to="/comics">COMICS</router-link>
          <router-link class="nav-link custom-nav-link" style="color: white;" to="/events">EVENTS</router-link>
          <router-link class="nav-link custom-nav-link" style="color: white;" to="/contact">CONTACT</router-link>
        </div>
      </div>
    </div>
  </nav>
  <!-- Off-canvas menu -->
  <div class="offcanvas offcanvas-top vh-100" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasTopLabel">
        <img class="custom-brand" src="../../public/marvel.svg" alt="Marvel">
      </h5>
      <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
        <img src="../../public/x-button.svg" alt="Marvel">
      </button>
    </div>
    <hr class="divisor">
    <div class="offcanvas-body pt-3">
      <!-- Opções do off-canvas menu -->
      <router-link class="nav-link custom-nav-link-2" to="/">HOME</router-link>
      <router-link class="nav-link custom-nav-link-2" to="/characters">CHARACTERS</router-link>
      <router-link class="nav-link custom-nav-link-2" to="/comics">COMICS</router-link>
      <router-link class="nav-link custom-nav-link-2" to="/events">EVENTS</router-link>
      <router-link class="nav-link custom-nav-link-2" to="/contact">CONTACT</router-link>
    </div>
  </div>
</template>

    
    <script>
    export default {
      name: 'NavbarLayout',
    }
    </script>
    <style scoped>
      .custom-navbar {
          height: 88px;
          padding: 0 80px 0 80px;
          margin: 0;
          background-color: #ec1d24;
          color: white;
      }
      .offcanvas-header{
        padding: 0 16px 0 16px;
      }
      .offcanvas-top {
        background-color: #EC1D24;
      }
      .divisor {
        margin: 0 16px 0 16px;
      }
      @media (max-width: 800px) {
        .custom-navbar {
          padding-left: 16px;
          padding-right: 16px;
        }
      }

      .custom-brand {
          width: 139px;
          height: 56px;
          margin-bottom: 16px;
          margin-top: 16px;
      }
      .font-menu {
          font-size: 20px;
          color: white!important;
          font-weight: 500;
      }
      .font-menu-home {
          font-weight: 700!important;
          height: 100%;
      }
      .navbar-toggler {
        border-width: 0;
        color: white;
      }
      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNSAxNUg0MC41TTcuNSAyNEg0MC41TTcuNSAzM0g0MC41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=");
      }
      .custom-nav-link.router-link-active {
          padding-bottom: 8px;
          border-bottom: 8px solid rgb(255, 255, 255);
      }
      .navbar-nav {
        align-items: center;
      }
      .custom-nav-link {
        height: 100%;
        display: flex;
        align-items: center;
        padding-top: 16px;
        padding-bottom: 16px;
      }
      .custom-nav-link-2 {
        color: white;
      }
      .mobile-menu .icone-menu {
        width: 48px;
        height: 48px;
      }
      .mobile-menu {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    </style>