import { createApp } from 'vue';
import App from './App';
import friendContact from './components/FriendContact';
import newFriend from './components/NewFriend';

const app = createApp(App);

app.component('friend-contact', friendContact);
app.component('new-friend', newFriend);

app.mount('#app');
