<template>
	<view style='padding-top:2rem'>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true" v-on:click="back">
			<block slot="backText">返回</block>
			<block slot="content">我的市民卡</block>
		</cu-custom>
		
		<view class="top"></view>
		<view class="banner">
			<view class="family">
				<view class="code">市民卡</view>
				<view class="img">
					<image src="https://ljfl.hztlcgj.com/image/card.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.go(-1);
			}
		},
	}
</script>

<style>
	.top{
		width: 100%;
		/* height:400upx; */
		/* background: url(http://pds.jyt123.com/wxtest/banner.png) no-repeat ; */
		background-size:100% ;
		background-position:center center;
	}
	.banner{
		    width: 92%;
		    background-color: #FFFFFF; 
		    border-radius: 15px 15px 15px 15px;
		    position: absolute;
			overflow:visible;
			margin: 30px 15px;
	}
	/* .family{
		 border-bottom:1px dashed #999999;
		 margin-left: 1rem;
		 margin-right: 1rem;
	} */
	.family .code{
		font-size: 40rpx;
		font-weight: 600;
		text-align: center;
		margin-top: 26rpx;
		/* margin-left: 80rpx; */
		color:#1AAD19 ;
	}
	.img{
		width: 270px;
		height: 170px;
		margin: 0 auto;
		margin-top: 60upx;
		text-align:center;
		margin-bottom: 40px;

	}
	.img image{
		width: 100%;
		height: 100%;
		margin-top: 20rpx;
	}
</style>
