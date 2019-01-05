<template>
  <nav class="navbar"
       role="navigation"
       aria-label="main navigation">
      <div class="navbar-item">
        <router-link :to="{path:'/main/posts'}">博客</router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{path:'/main/hello'}">hello</router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{path:'/main/posts'}">博客</router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{path:'/main/posts'}">博客</router-link>
      </div>
    <!-- <div class="navbar-end is-pulled-right">
      <div class="navbar-item">
        <a href="#">aaaa</a>
        <a href="#">aaaa</a>
        <a href="#">aaaa</a>
      </div>
    </div> -->
  </nav>
</template>
