<template>
  <footer>
    <div class="container">
      <div class="brand">
        <p class="title">Alex Aaqil</p>
        <p>Software Engineer</p>
        <p>alexaaqil.se@gmail.com</p>

        <SocialsIconsComponent />
      </div>

      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>

      <div class="contact">
        <p class="title">Get In Touch</p>
        <p>Let's discuss your next project!</p>
        <button
          type="button"
          onclick="window.open('https://wa.me/254746055487?text=Hi%20Alex,%20I%20would%20like%20to%20collaborate%20on%20a%20project.', '_blank')"
        >
          Start a Conversation
        </button>
      </div>
    </div>

    <p class="copyright">
      Copyright &copy; 2025 . Alex Aaqil . All rights Reserved
    </p>
  </footer>
</template>

<script>
import SocialsIconsComponent from "./SocialsIconsComponent.vue";

export default {
  components: {
    SocialsIconsComponent,
  },
};
</script>
