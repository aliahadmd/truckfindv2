<script>
	import '../app.css';
	export let data;
	import Footer from "../component/home/Footer.svelte"
</script>

<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b md:px-10">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Truck Assist.</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn">Register</a>
				</div>
			{:else}
				<div class="dropdown dropdown-end mr-4">
					<a href="/me/create" class="btn btn-primary btn-outline">Create Roundtrip</a>
				</div>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full bg-black">
							
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="/me" class="justify-between">Dashboard</a>
						</li>
						<li>
							<a href="/contact" class="justify-between">Contact Us</a>
						</li>
						
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="w-full text-start">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</nav>	
	<div class="mb-6"><slot /></div>			
<Footer />
		
	
</div>
