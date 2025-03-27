<template>
	<div class="socials_icons">
		<img
			src="../assets/images/github.png"
			alt="Github"
			@click="goToGithub"
			width="25"
			height="25"
		/>
		<img
			src="../assets/images/linkedin.png"
			alt="LinkedIn"
			@click="goToLinkedIn"
			width="25"
			height="25"
		/>
		<img
			src="../assets/images/instagram.png"
			alt="Instagram"
			@click="goToInstagram"
			width="25"
			height="25"
		/>
		<img
			src="../assets/images/whatsapp.png"
			alt="Whatsapp"
			@click="goToWhatsapp"
			width="25"
			height="25"
		/>
	</div>
</template>

<script>
export default {
	name: "SocialsIcons",

	methods: {
		goToGithub() {
			window.open("https://github.com/alexaaqil", "_blank");
		},
		goToLinkedIn() {
			window.open("https://www.linkedin.com/in/alexwambui/", "_blank");
		},
		goToInstagram() {
			window.open("https://www.instagram.com/alexaaqil", "_blank");
		},
		goToWhatsapp() {
			window.open("http://wa.me/254746055487?text=Hi Alex!", "_blank");
		},
	},
};
</script>

<style scoped>
.socials_icons {
	display: flex;
	gap: 1em;
}
</style>
