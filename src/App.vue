<template>
  <div id="app"> 
    <router-view />
    <router-view name="one"/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

</style>
