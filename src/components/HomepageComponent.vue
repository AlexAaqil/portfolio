<template>
	<section class="Hero" id="hero">
		<div class="container">
			<div class="content">
				<div class="text">
					<h1 class="title">Alex Aaqil</h1>
					<p>
						I'm a software engineer that empowers businesses with
						tailored sofware solutions.
					</p>
				</div>

				<div class="action_btns">
					<a
						class="btn"
						href="https://wa.me/254746055487?text=Hi%20Alex,%20I%20would%20like%20to%20collaborate%20on%20a%20project."
						target="_blank"
						rel="noopener"
						>Get a Free Consultation
					</a>
				</div>

				<SocialsIcons />
			</div>

			<div class="image">
				<img
					src="../assets/images/alex-aaqil-profile-photo.webp"
					alt="Profile Photo"
					width="400"
					height="400"
				/>
			</div>
		</div>
	</section>

	<section class="About" id="about">
		<div class="container">
			<div class="header">
				<p>Get To Know More</p>
				<h2>About Me</h2>
			</div>

			<div class="content">
				<div class="image">
					<img
						src="../assets/images/alex-aaqil-profile.webp"
						alt="Profile Photo"
						width="300"
						height="300"
						loading="lazy"
					/>
				</div>

				<div class="text">
					<div class="stats">
						<div class="stat">
							<p>3+</p>
							<p>Years of Experience</p>
						</div>

						<div class="stat">
							<p>25+</p>
							<p>Complete Projects</p>
						</div>
					</div>

					<p>
						I specialize in developing powerful software to help you
						streamline your operations, increase productivity and
						boost revenue. I am detail-oriented, innovative and
						driven by curiosity and a passion for clean and
						efficient code.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="Projects" id="projects">
		<div class="container">
			<div class="header">
				<p>Browse Some of My</p>
				<h2>Projects</h2>
			</div>

			<div class="content cards">
				<div class="card">
					<div class="image">
						<img
							src="../assets/images/shea-254.webp"
							alt="Project Photo"
							loading="lazy"
							width="300"
							height="300"
						/>
					</div>

					<div class="text">
						<p class="title">Shea 254</p>
						<div class="buttons">
							<a
								class="btn"
								href="https://shea254.com"
								target="_blank"
								rel="noopener"
								>Live Ecommerce</a
							>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img
							src="../assets/images/hsms.webp"
							alt="Project Photo"
							loading="lazy"
							width="300"
							height="300"
						/>
					</div>

					<div class="text">
						<p class="title">School MS</p>
						<div class="buttons">
							<a
								class="btn"
								href="https://hsms.bolombametals.com/"
								target="_blank"
								rel="noopener"
								>Live Demo</a
							>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img
							src="../assets/images/hrms.webp"
							alt="Project Photo"
							loading="lazy"
							width="300"
							height="300"
						/>
					</div>

					<div class="text">
						<p class="title">HR MS</p>
						<div class="buttons">
							<a
								class="btn"
								href="https://hrclarity.onrender.com/"
								target="_blank"
								rel="noopener"
								>Live Demo</a
							>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img
							src="../assets/images/au.webp"
							alt="Project Photo"
							loading="lazy"
							width="300"
							height="300"
						/>
					</div>

					<div class="text">
						<p class="title">Aaqil University</p>
						<div class="buttons">
							<a
								class="btn"
								href="https://university.bolombametals.com/"
								target="_blank"
								rel="noopener"
								>Live Webapp</a
							>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img
							src="../assets/images/lake-elementaita-manor.webp"
							alt="Project Photo"
							loading="lazy"
							width="300"
							height="300"
						/>
					</div>

					<div class="text">
						<p class="title">Lake Elementaita Manor</p>
						<div class="buttons">
							<a
								class="btn"
								href="https://lakeelementaitamanor.netlify.app"
								target="_blank"
								rel="noopener"
								>Live Demo</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="Experience" id="experience">
		<div class="container">
			<div class="header">
				<p>Explore My</p>
				<h2>Experience</h2>
			</div>

			<div class="content">
				<div class="card">
					<p class="title">Frontend Development</p>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>Sass</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
					</ul>
				</div>

				<div class="card">
					<p class="title">Backent Development</p>
					<ul>
						<li>Laravel</li>
						<li>Django</li>
						<li>Flask</li>
						<li>MySQL</li>
						<li>Git</li>
					</ul>
				</div>

				<div class="card">
					<p class="title">Additional Skills</p>
					<ul>
						<li>SEO</li>
						<li>Grapic Design</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SocialsIcons from "./SocialsIconsComponent.vue";

export default {
	components: {
		SocialsIcons,
	},
};
</script>
