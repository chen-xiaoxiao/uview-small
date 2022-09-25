<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
		},
		onShow: function() {
			console.log('App Show')
			uni.setTabBarBadge({
			  index: 2,
			  text: '2'
			})
			uni.getNetworkType({
				success: function (res) {
					console.log(res);
				}
			})
			uni.showTabBarRedDot(
			{
			  index: 1,
			})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	body{
			background-color: #f1f1f1;
		}
		/* 解决小程序和app滚动条的问题 */
			/* #ifdef MP-WEIXIN || APP-PLUS */
				::-webkit-scrollbar {
				    display: none;
				    width: 0 !important;
				    height: 0 !important;
				    -webkit-appearance: none;
				    background: transparent;
				    color: transparent;
				  }
			/* #endif */
			
			/* 解决H5 的问题 */
			/* #ifdef H5 */
			    uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
			    	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
					display: none;
				    width: 0 !important;
				    height: 0 !important;
				    -webkit-appearance: none;
				    background: transparent;
				    color: transparent;
			    }
			/* #endif */
</style>
