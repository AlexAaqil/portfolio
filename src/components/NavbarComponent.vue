<template>
	<nav :class="{ dark: isDarkMode }">
		<div class="brand">
			<RouterLink to="/">
				<img
					src="../../public/alex-aaqil-logo.png"
					alt="Logo"
					width="40"
					height="40"
				/>
			</RouterLink>
		</div>

		<!-- Navigation Links -->
		<div class="links" :class="{ show: isNavOpen }">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<a href="#projects">Projects</a>
			<a href="#experience">Experience</a>
		</div>

		<!-- Burger Menu -->
		<div class="burger_menu">
			<div
				class="burger_icon"
				:class="{ active_burger: isNavOpen }"
				@click="toggleNav"
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</nav>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
	setup() {
		const isNavOpen = ref(false);
		const isDarkMode = ref(
			localStorage.getItem("darkMode") === "true" || false
		);

		// Toggle Burger Menu
		const toggleNav = () => {
			isNavOpen.value = !isNavOpen.value;
		};

		// Toggle Dark Mode
		const toggleDarkMode = () => {
			isDarkMode.value = !isDarkMode.value;
			localStorage.setItem("darkMode", isDarkMode.value);
			document.body.classList.toggle("dark", isDarkMode.value);
		};

		// Ensure dark mode is applied on page load
		onMounted(() => {
			if (isDarkMode.value) {
				document.body.classList.add("dark");
			}
		});

		return {
			isNavOpen,
			toggleNav,
			isDarkMode,
			toggleDarkMode,
		};
	},
};
</script>
