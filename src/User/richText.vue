<template>
	<section>
		<searchTemplate :message="msg"></searchTemplate>
		<richTextModel></richTextModel>
	</section>
	
</template>
<script>

import richTextModel from '../someModul/richTextModel';
import searchTemplate from '../someModul/searchTemplate';
	export default {
		components:{
			richTextModel,
			searchTemplate,	
		},
		data() {
			return {
				msg:"hhhhh",
			}
		},
		computed:{
			
		},
		methods: {
			
		},
		mounted() {
			
		}
	};

</script>

<style >

</style>
