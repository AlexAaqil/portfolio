<template>
	<NavbarComponent />

	<main class="HomePage">
		<HomePage />
	</main>

	<FooterComponent />
</template>

<script>
import HomePage from "@/components/HomepageComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
	name: "HomeView",

	components: {
		HomePage,
		NavbarComponent,
		FooterComponent,
	},
};
</script>
