<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDeets">
      {{ !detailsVisible ? 'Show' : 'Hide' }} Details
    </button>
    <button @click="toggleFav">Toggle Favorite</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">Delete Friend</button>
  </li>
</template>

<script>
export default {
  //   props: [ 'id','name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['toggle-favorite', 'delete-friend'],
  //   emits: {   ////more detailed and with validation built-in
  //     'toggle-favorite': function (id) {
  //       if (id) {
  //         return true;
  //       } else {
  //         console.warn('Id is missing!');
  //         return false;
  //       }
  //     },
  //   },
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDeets() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFav() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    },
  },
};
</script>
