<template>
  <li v-for="friend in friends" :key="friend.id">
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDeets">
      {{ !detailsVisible ? 'Show' : 'Hide' }} Details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ],
      detailsVisible: false,
    };
  },
  methods: {
    toggleDeets() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>

<style></style>
