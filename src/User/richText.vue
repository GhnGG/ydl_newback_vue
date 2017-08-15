<template>
	<section>
		<!-- 这里 的page 是需要互相影响的所以要使用  sync 这个修饰符（是指父子组件的这个值是互相影响的） -->
		<searchTemplate :message="msg" :page.sync="page" @getUser="showdata"></searchTemplate>
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
			//这里是父组件显示调用的地方  
			showdata(data){
				console.log(data);		
			},
		},
		mounted() {
			
		}
	};

</script>

<style >

</style>
