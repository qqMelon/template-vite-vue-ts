<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
    <DefaultHelloWorld 
      :title="`Template Vite and Vue3 Typescript`"
<<<<<<< HEAD
      :text="`With some config like: NodeSass, resolver ...`"
  />
  <AppCounter />
=======
      :text="`Base config with vueRouter4`" 
    />
    <div class="xpcd">
      <router-link to="/home">Home</router-link>
      |<router-link to="/about">About</router-link>
    </div>
      <router-view />
>>>>>>> core-router
</template>

<script lang="ts" src="./app.ts"></script>

