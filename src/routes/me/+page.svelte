<script>
	import { getImageURL} from "../../lib/utils"
    export let data;
</script>


<div>
{#if data.length === 0}
		<p class="text-center text-3xl">☹️</p>
		<p class="text-center text-3xl">Looks like you don't have any roundtrip.</p>
		<a href="/me/create" class="btn btn-primary max-w-md mt-4">Add One</a>
	{:else}
	
	<div class="overflow-x-auto w-full pt-5">
		<table class="table w-full">
		  <!-- head -->
		  <thead>
			<tr>
			  <th>
				Company Logo
			  </th>
			  <th>Round Trip Title</th>
			  <th>Km/Month</th>
			  <th>pricer</th>
			  <th>Truck Type</th>
			  <th></th>
			</tr>
		  </thead>
		  <tbody>
			<!-- row 1 -->
			{#each data.roundtrip as rt}
			<tr>
			  <td>
				<div class="flex items-center space-x-3">
				  <div class="avatar">
					<div class="mask mask-squircle w-12 h-12">
						<img
						src={rt?.logo? getImageURL(rt.collectionId, rt.id, rt.logo, '80x80')
						: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${rt.name}`}
						alt="logo"
					/>
					</div>
				  </div>
			  </td>
			  <td>
				{rt?.round_trip_name}
			  </td>
			  <td>{rt?.km_per_month}</td>
			  <td>{rt?.price}</td>
			  <td>{rt?.truck_type}</td>		  
			</tr>  
			{/each}
		</table>
	</div>
		
	{/if}
	</div>
	















	


	 

