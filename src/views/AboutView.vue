<template>
	<NavbarComponent />

	<main class="AboutPage">
		<AboutPage />
	</main>

	<FooterComponent />
</template>

<script>
import AboutPage from "@/components/AboutpageComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
	name: "AboutView",

	components: {
		AboutPage,
		NavbarComponent,
		FooterComponent,
	},
};
</script>
