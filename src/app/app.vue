<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
    <DefaultHelloWorld 
      :title="`Template Vite and Vue3 Typescript`"
      :text="`Base template wth router4 and store (vuex)`"
    />
    <AppCounter />
    <div class="xpcd">
      <router-link to="/home">Home</router-link>
      |<router-link to="/about">About</router-link>
    </div>
    <router-view />
</template>

<script lang="ts" src="./app.ts"></script>

