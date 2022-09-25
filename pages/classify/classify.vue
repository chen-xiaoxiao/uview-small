<template>
	<view class="wrap">
		<u-gap height="10"></u-gap>
		<!-- 搜索 -->
		<u-search placeholder="请输入搜索的关键字" v-model="keyword" bgColor="#fff" :showAction="false"></u-search>
		
		<!-- category -->
		<view class="category">
			<view class="left">
				<scroll-view scroll-y="true" class="scroll-Y">
					<template v-for="(item,index) in categoryDate.leftmenu">
						<view class="item" v-if="item.pid==''" @click="showprod(item)"> {{ item.name}}</view>
					</template>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" class="scroll-Y" >
					<u-list @scrolltolower="scrolltolower">
						<u-list-item
							v-for="(item, index) in indexList"
							:key="index"
						>
						<view class="goods">
							<view class="goods-left">
								<image :src="item.img" mode="aspectFill"></image>
							</view>
							<view class="goods-right">
								<view class="goods-title">{{ item.name }}</view>
								<text class="price">{{ item.price }}</text>
								<text class="m-price">{{ item.market_price }}</text>
								<view class="tips" v-if="item.is_vip== '是'">会员价</view>
							</view>
						</view>

						</u-list-item>
					</u-list>

					
				</scroll-view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {categoryDate} from "@/static/localDB/category.js";
	export default {
		data() {
			return {
				categoryDate,
				keyword:'',
				current:0,
				indexList: [],
				items: []
			}
		},
		onShow() {
			// uni.hideTabBar()
			this.loadmore()

			let ss = this.categoryDate
			console.log( '==>',ss )
			
		},
		methods: {
			showprod(item){
				let rItems = this.categoryDate
				this.items = rItems[item.id]
				console.log(item.id,this.items)
			},
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.items[uni.$u.random(0, this.items.length - 1)]
					})
				}
			}

		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	height: calc(100% - 50px - env(safe-area-inset-bottom));
	padding:0 16rpx;
	.category {
		display: flex;
		align-items: flex-start;
		padding-top: 10px;
		overflow: hidden;
		.scroll-Y{
			height: calc(100vh - 170px - env(safe-area-inset-bottom));
		}
		.left{
			width: 90px;
			background-color: #f5f5f5;
			padding: 10px;
			height: 100%;
			.item{
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 14px;
				height: 50px;
				color: #75787d;
				position: relative;
				
				&.active{
					color: #ff6a6c;
					font-size: 19px;
					font-weight: 580;
				}		
			}
		}
		.right{
			flex: 1;
			overflow: hidden;
			display: block;
			padding: 8px;
			height: 100%;
			box-sizing: border-box;
		}
	}
}
</style>
