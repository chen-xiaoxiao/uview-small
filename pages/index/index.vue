<template>
	<view class="wrap">
		<u-gap height="10"></u-gap>
		<!-- 搜索 -->
		<u-search placeholder="请输入搜索的关键字" v-model="keyword" bgColor="#fff" :showAction="false"></u-search>
		<!-- banner -->
		<u-swiper
		    class="banner"
			:list="indexDate.carousel"
			keyName="img"
			previousMargin="30"
			nextMargin="30"
			@change="e => current = e.current"
			circular
			radius="5"
		    >
			<view
				slot="indicator"
				class="indicator"
			>
				<view
					class="indicator__dot"
					v-for="(item, index) in indexDate.carousel"
					:key="index"
					:class="[index === current && 'indicator__dot--active']"
				>
				</view>
			</view>
		</u-swiper>
		
		<!-- 分类 -->
		<view class="classify">
			<view class="classify_item" v-for="(item, index) in indexDate.category">
				<u-image class="classify_img" :src="item.img" width="45px" height="45px"></u-image>
				<view class="classify_name">{{item.name}}</view>
			</view>
		</view>
		
		<!-- 限时精选 -->
		<view class="limit-area">
			<u-cell-group :border="false">
			    <u-cell icon="clock" :border="false" title="限时精选" isLink></u-cell>
			</u-cell-group>
			<scroll-view scroll-x="true">
				<view class="s_view">
					<view class="l_item" v-for="(item, index) in indexDate.limited">
						<image class="img" :src="item.img" mode=""></image>
						<text class="title">{{ item.name }}</text>
						<text class="price">￥{{ item.price }}</text>
						<text class="m_price">￥{{ item.market_price }}</text>
						<view class="tips" v-if="item.is_vip== '是'">会员价</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 秒杀 -->
		<view class="limit-area">
			<u-cell-group :border="false">
			    <u-cell icon="clock" :border="false" :title="indexDate.seckill.name" isLink>
					<u-count-down
						slot="value"
						:time="30 * 60 * 60 * 1000"
						format="DD:HH:mm:ss"
						autoStart
						millisecond
						@change="onChange">  
						<view class="time">
							<view class="time__custom">
								<text class="time__custom__item">{{ timeData.days}}</text>
							</view>
							<text class="time__doc">天</text>
							<view class="time__custom">
								<text class="time__custom__item">{{ timeData.hours>10?timeData.hours:'0'+timeData.hours}}</text>
							</view>
							<text class="time__doc">:</text>
							<view class="time__custom">
								<text class="time__custom__item">{{ timeData.minutes }}</text>
							</view>
							<text class="time__doc">:</text>
							<view class="time__custom">
								<text class="time__custom__item">{{ timeData.seconds }}</text>
							</view>
						</view>
					</u-count-down>
				</u-cell>
				
				 
					
			</u-cell-group>
			<scroll-view scroll-x="true">
				<view class="s_view">
					<view class="l_item" v-for="(item, index) in indexDate.seckill.goods_objs">
						<image class="img" :src="item.img" mode=""></image>
						<text class="title">{{ item.name }}</text>
						<text class="price">￥{{ item.price }}</text>
						<text class="m_price">￥{{ item.market_price }}</text>
						<view class="tips">秒杀价</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 拼团 -->
		<view class="limit-area">
			<u-cell-group :border="false">
			    <u-cell icon="clock" :border="false" title="拼团" isLink></u-cell>
			</u-cell-group>
			<scroll-view scroll-x="true">
				<view class="s_view">
					<view class="l_item" v-for="(item, index) in indexDate.group">
						<image class="img" :src="item.goods_obj.img" mode=""></image>
						<text class="title">{{ item.goods_obj.name }}</text>
						<text class="price">{{ item.goods_price }}</text>
						<text class="m_price">{{ item.goods_obj.market_price }}</text>
						<view class="tips">{{ item.group_num }}人团</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 热门推荐 -->
		<view class="use-hot-goods-area">
			<u-cell-group :border="false" customStyle="background:#fff;border-radius: 10px;">
			    <u-cell icon="heart-fill"  :border="false" title="热门推荐" isLink></u-cell>
			</u-cell-group>
			<view class="hot_view">
				<view class="hot_item" v-for="(item, index) in indexDate.limited">
					<image class="img" :src="item.img" mode=""></image>
					<text class="title">{{ item.name }}</text>
					<text class="price">{{ item.price }}</text>
					<text class="m_price">{{ item.market_price }}</text>
					<view class="tips" v-if="item.is_vip">会员价</view>
				</view>
			</view>
		</view>
		
		<!-- copyright -->
		<view class="copyright">
			<image class="image" src="../../static/images/logo.png" mode="aspectFit"></image>
			<text>人生无趣，即时行乐！</text>
		</view>
		
		
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop"  icon="arrow-up" text=""></u-back-top>
	</view>
</template>
 
<script>
	import {indexDate} from "@/static/localDB/index/index.js";
export default {
    data() {
		return {
				// 返回的按钮是否显示
				scrollTop: 0,
				keyword: '',
				current:0,
				indexDate,
				timeData: {},
			};
		},
		
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods:{
			onChange(e) {
				this.timeData = e
			}
		},
	}
</script>
 
<style lang="scss" scoped>
	
	.wrap {
		height: calc(100% - 50px - env(safe-area-inset-bottom));
		padding:0 16rpx;
		.banner{
			margin: 16rpx 0;
		}
		.indicator {
			@include flex(row);
			justify-content: center;
			&__dot {
				 height: 8px;
				 width: 8px;
				 border-radius: 100px;
				 background-color: rgba(247, 247, 247, 1);
				 margin: 0 5px;
				 transition: background-color 0.3s;
		
				&--active {
					 background-color: rgb(255, 106, 108);
				 }
			}
		}
		.classify {
			display: grid;
			gap: 10px;
			grid-template-columns: repeat(4, 1fr);
			border-radius: 10px;
			background: #fff;
			padding: 15px 5px 5px;
			.classify_item{
				display: flex;
				align-items: center;
				flex-flow:column;
				font-size: 13px;
				color: #303133;
				margin-bottom: 5px;
			}
		   .classify_img{
			   width: 45px;
			   height: 45px;
			   margin-bottom: 5px;
		   }
		   .classify_name{
			   text-align: center;
		   }
		}
		.limit-area{
			margin-top: 10px;
			background-color: #fff;
			border-radius: 10px;
			padding:0 10px 10px;
			/deep/ .u-cell__body{
				padding-left: 0;
				padding-right: 0;
			}
			.time {
			    @include flex;
			    align-items: center;
			    color: rgb(60, 60, 60);
			    &__custom {
			         margin-top: 4px;
			         width: 22px;
			         height: 22px;
			         background-color: rgb(60, 60, 60);
			         border-radius: 4px;
			         /* #ifndef APP-NVUE */
			         display: flex;
			         /* #endif */
			         justify-content: center;
			         align-items: center;
			    
			        &__item {
			             color: #fff;
			             font-size: 12px;
			             text-align: center;
			         }
			    }
			    
			    &__doc {
			         color: rgb(60, 60, 60);
			         padding: 0px 4px;
			     }
			    
			    &__item {
			         color: #fff;
			         font-size: 15px;
			         margin-right: 4px;
			     }
			}
		}
		.s_view{
			display: flex;
			align-items: center;
			.l_item{
				position: relative;
				margin-right: 10px;
				display: block;
				width: 120px;
				.img{
					border-radius: 5px;
					width: 120px;
					height: 120px;
				}
				.title{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					display: block;
					width: 100%;
					padding-bottom: 5px;
				}
				.price{
					font-size: 18px;
					color: #ff6a6c;
					line-height: 1;
					font-weight: 580;
					&::before {
					    content: "￥";
					    font-size: 12px;
					}
				}
				.m_price{
					font-size: 12px;
					text-decoration: line-through;
					color: #909399;
					margin-left: 10px;
					&::before {
					    content: "￥";
					    font-size: 12px;
					}
				}
				.tips{
					position: absolute;
					top: 0;
					border-top-left-radius: 5px;
					border-bottom-right-radius: 5px;
					line-height: 1;
					padding: 4px 6px;
					font-size: 11px;
					background-color: #ff6a6c;
					color: #fff;
				}
			}
		}
		.use-hot-goods-area{
			margin-top: 10px;
			.hot_view{
				width: 100%;
				margin-top: 10px;
				border-radius: 10px;
				padding: 0 0 10px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				.hot_item{
					position: relative;
					display: block;
					width: 46vw;
					overflow: hidden;
					margin-top: 2vw;
					padding: 10px;
					box-sizing: border-box;
					border-radius: 10px;
					background: #fff;
					&::nth-child(2n + 1) {
						margin-right: 1vw;
					}
					.img{
						width: 100%;
						height: 150px;
						overflow: hidden;
					}
					.title{
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						display: block;
						width: 100%;
						padding-bottom: 5px;
					}
					.price{
						font-size: 18px;
						color: #ff6a6c;
						line-height: 1;
						font-weight: 580;
						&::before {
							content: "￥";
							font-size: 12px;
						}
					}
					.m_price{
						font-size: 12px;
						text-decoration: line-through;
						color: #909399;
						margin-left: 10px;
						&::before {
							content: "￥";
							font-size: 12px;
						}
					}
					.tips{
						position: absolute;
						top: 0;
						border-top-left-radius: 5px;
						border-bottom-right-radius: 5px;
						line-height: 1;
						padding: 4px 6px;
						font-size: 11px;
						background-color: #ff6a6c;
						color: #fff;
					}
				}
			}
		}
		.copyright{
			display: flex;
			align-items: center;
			justify-content: center;
			color: silver;
			font-size: 12px;
			height: 80px;
			.image{
				width: 32px;
				height: 32px;
				padding-right: 10px;
			}
		}
		
	}
</style>
