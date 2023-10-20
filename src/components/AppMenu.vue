<template>
    <div class="full-page-menu">
      <div class="menu-content">
        <router-link class="nav-link" to="/">HOME</router-link>
        <router-link class="nav-link" to="/characters">CHARACTERS</router-link>
        <router-link class="nav-link" to="/comics">COMICS</router-link>
        <router-link class="nav-link" to="/events">EVENTS</router-link>
        <router-link class="nav-link" to="/contact">CONTACT</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppMenu',
  };
  </script>
  
  <style scoped>
  .full-page-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-link {
    font-size: 24px;
    color: white;
    margin: 8px;
    text-decoration: none;
  }
  </style>
  