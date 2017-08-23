<template>
    <div>
	<mt-swipe :auto="4000">
  		<mt-swipe-item v-for="(img,index) in imgs" :key='index'>	
  			<a :href="img.url">
  				<img :src='img.img' alt="">	
  			</a>	
  		</mt-swipe-item>
	</mt-swipe>

		<div class="mui-slider-item">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-home"></span>
									<div class="mui-media-body">Home</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
									<div class="mui-media-body">Email</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-chatbubble"></span>
									<div class="mui-media-body">Chat</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-location"></span>
									<div class="mui-media-body">location</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-search"></span>
									<div class="mui-media-body">Search</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-phone"></span>
									<div class="mui-media-body">Phone</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-gear"></span>
									<div class="mui-media-body">Setting</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-info"></span>
									<div class="mui-media-body">about</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<span class="mui-icon mui-icon-more"></span>
									<div class="mui-media-body">more</div>
								</a>
							</li>
						</ul>
					</div>
    </div>
</template>
<script>
 	export default {
  	 data(){
  	 	return {
  	 		imgs : []
  	 	}
  	 },
  	  created(){
  	 	this.$ajax.get('getlunbo')
  	 	.then(res=>{
  	 		this.imgs =	res.data.message ;
  	 	})
  	 	.catch(err=>{
  	 		console.log(err);
  	 	})
  	 },

  	 mounted(){
  	 	
  	 }
  }
</script>
<style scoped>	
		.mint-swipe{
			height: 200px;
		
		}
		.mint-swipe-item img{
			width: 100%;
				height: 200px;
		}
</style>