<script src="./Stock.ts"></script>
<style lang="sass">@import "./Stock.sass"</style>

<template>
  <div class="stock">
    <div class="header">
      Stock
    </div>
    <div class="page">
      <button @click="setRole($UserRole.Admin)">{{ $UserRole.Admin }}</button> <br>
      <button @click="setRole($UserRole.User)">{{ $UserRole.User }}</button> <br>
      <button @click="toggleRole">Toggle</button> <br>
      userIsAuthenticated = "{{ userIsAuthenticated }}" <br>
      userRole = "{{ userRole }}" <br>
      <button @click="setList()">setList</button> <br>
      <button @click="pushItem">pushItem</button> <br>
      productIsEmpty = "{{ productIsEmpty }}" <br>
      productList = "{{ productList }}" <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
      Stock Type Stock Type Stock Type <br>
    </div>
  </div>
</template>

