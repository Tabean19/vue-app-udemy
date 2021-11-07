<template>
  <form>
    <div>
      <label>Name</label>
      <input
        type="text"
        v-model="input.name"
        name="name"
        placeholder="Type fullname here..."
      />
    </div>
    <div>
      <label>Phone</label>
      <input
        type="text"
        v-model="input.phone"
        name="phone"
        placeholder="phone number..."
      />
    </div>
    <div>
      <label>Email</label>
      <input
        type="text"
        v-model="input.email"
        name="email"
        placeholder="email address..."
      />
    </div>
    <div>
      <p>Is this friend your favorite?</p>
      <input type="radio" v-model="input.fav" name="favorite" id="yes" /><label
        for="yes"
        >Yes</label
      >
      <input
        type="radio"
        v-model="input.fav"
        name="favorite"
        id="no"
        checked
      /><label for="no">No</label>
    </div>
    <button @click.prevent="addFriend">Add Friend</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      input: {
        id: '',
        name: '',
        phone: '',
        email: '',
        fav: false,
      },
    };
  },
  methods: {
    addFriend() {
      this.input.id = this.input.name.split(' ')[0];
      this.$emit('add-friend', this.input);
      this.clearInput();
    },
    clearInput() {
      this.input = {
        id: '',
        name: '',
        phone: '',
        email: '',
        fav: false,
      };
    },
  },
  emits: ['add-friend'],
};
</script>
<style></style>
