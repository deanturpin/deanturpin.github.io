<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const projects = [
		{ title: 'voski', url: 'https://turpin.dev/voski/', description: 'Bidirectional translator' },
		{ title: 'hustle', url: 'https://github.com/deanturpin/projects', description: 'Project ideas explored with Claude Code' },
		{ title: 'konda', url: 'https://github.com/deanturpin/ts', description: 'Polyphonic synth plugin with built-in FFT' },
		{ title: 'roomtone', url: 'https://turpin.dev/roomtone', description: 'Ambience generator using room feedback' },
		{ title: 'deanturpin/shh', url: 'https://hub.docker.com/r/deanturpin/shh', description: 'Command line packet inspector' },
		{ title: 'constd', url: 'https://deanturpin.gitlab.io/constd/', description: 'constexpr Standard Library functions' },
		{ title: 'Trading backtester (stocks)', url: 'https://deanturpin.gitlab.io/backtest/', description: 'Backtester 2024' }
	];

	const links = [
		{ title: 'Meeting cost timer', url: '/cost' },
		{ title: 'GitHub', url: 'https://github.com/deanturpin' },
		{ title: 'GitLab', url: 'https://gitlab.com/deanturpin' },
		{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/deanturpin' },
		{ title: 'Docker hub', url: 'https://hub.docker.com/u/deanturpin' }
	];
</script>

<svelte:head>
	<title>Dean Turpin</title>
	<meta name="description" content="Dean Turpin's personal portfolio" />
</svelte:head>

<main>
	{#if mounted}
		<h1 in:fly={{ y: -50, duration: 800 }}>Dean Turpin</h1>

		<section in:fade={{ delay: 200, duration: 600 }}>
			<h2>Links</h2>
			<ul>
				{#each links as link, i}
					<li in:fly={{ x: -30, delay: 300 + i * 100 }}>
						<a href={link.url}>{link.title}</a>
					</li>
				{/each}
			</ul>
		</section>

		<section in:fade={{ delay: 400, duration: 600 }}>
			<h2>Currently reading</h2>
			<ul>
				<li in:fly={{ x: -30, delay: 600 }}>
					<a href="https://www.goodreads.com/book/show/168325.How_Equal_Temperament_Ruined_Harmony">
						How Equal Temperament Ruined Harmony -- Ross W. Duffin
					</a>
				</li>
			</ul>
		</section>

		<section in:fade={{ delay: 600, duration: 600 }}>
			<h2>Side projects</h2>
			<div class="projects-grid">
				{#each projects as project, i}
					<div class="project-card" in:fly={{ y: 30, delay: 800 + i * 100 }}>
						<h3><a href={project.url}>{project.title}</a></h3>
						<p>{project.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<section in:fade={{ delay: 1000, duration: 600 }}>
			<h2>Studio</h2>
			<ul>
				<li>Logic Pro 11</li>
				<li>MacBook Air M3</li>
				<li>Universal Audio Volt 476P Audio Interface</li>
				<li>BeyerDynamic DT 770 Pro Limited Edition and DT 1770 Pro</li>
				<li>Roland TB-03</li>
				<li>Arturia MiniLab 3 Midi Controller Keyboard</li>
			</ul>
		</section>
	{/if}
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		min-height: 100vh;
		color: white;
	}

	main {
		max-width: 900px;
		margin: 0 auto;
	}

	h1 {
		font-size: 3.5rem;
		text-align: center;
		margin-bottom: 2rem;
		background: linear-gradient(135deg, #ff6b6b, #ffa726, #ffcc02);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	h2 {
		font-size: 1.8rem;
		margin-top: 3rem;
		margin-bottom: 1rem;
		position: relative;
	}

	h2::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 60px;
		height: 3px;
		background: linear-gradient(90deg, #ff6b6b, #ffa726);
		border-radius: 2px;
	}

	section {
		margin-bottom: 2rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin: 0.5rem 0;
		padding: 0.5rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		backdrop-filter: blur(10px);
		transition: transform 0.2s ease;
	}

	li:hover {
		transform: translateX(10px);
		background: rgba(255, 255, 255, 0.2);
	}

	a {
		color: #ffcc02;
		text-decoration: none;
		font-weight: 500;
	}

	a:hover {
		text-shadow: 0 0 10px rgba(255, 204, 2, 0.8);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.project-card {
		background: rgba(255, 255, 255, 0.15);
		padding: 1.5rem;
		border-radius: 16px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-5px) scale(1.02);
		background: rgba(255, 255, 255, 0.25);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.project-card h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.2rem;
	}

	.project-card p {
		margin: 0;
		opacity: 0.9;
		line-height: 1.4;
	}

	@media (max-width: 600px) {
		:global(body) {
			padding: 1rem;
		}

		h1 {
			font-size: 2.5rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>