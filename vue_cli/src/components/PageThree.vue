<template>
    <div>
      <h1>I am {{ $route.params.name }},my id is: {{ $route.params.id}}, I am {{ $route.params.age}}</h1>
    </div>
</template>

<script>
    export default {
        name: "page-three"
    }
</script>

<style scoped>

</style>
