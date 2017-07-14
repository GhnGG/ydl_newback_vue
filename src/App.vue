<template>
	<div id="app" >
		<canvas id="canvas" class="canvas"></canvas>
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
		<div class="moon"></div>
	</div>
</template>

<script>
import 'babel-polyfill';

import Stars from '../static/js/Star'
import Moon from '../static/js/Moon'
import Meteor   from '../static/js/Meteor'
export default {
	name: 'app',
	components: {
	},
	mounted(){
		this.$nextTick(function(){
			if (document.addEventListener) {
			let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
			window.addEventListener(resizeEvt, this.canvas, false);
			document.addEventListener('DOMContentLoaded', this.canvas, false);
			this.canvas();
			} 
		});
	},
	methods:{
		canvas(){
			let canvas = document.getElementById('canvas'),
		    ctx = canvas.getContext('2d'),
		    width = window.innerWidth,
		    height = window.innerHeight,
		    //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
		    moon = new Moon(ctx, width, height),
		    stars = new Stars(ctx, width, height, 200),
		    meteors = [],
		    count = 0

		    canvas.width = width;
		    canvas.height = height;

		const meteorGenerator = ()=> {
		    //x位置偏移，以免经过月亮
		    let x = Math.random() * width + 800
		    meteors.push(new Meteor(ctx, x, height))

		    //每隔随机时间，生成新流星
		    setTimeout(()=> {
		        meteorGenerator()

		    }, Math.random() * 2000)
		}

		const frame = ()=>{
		    count++
		    count % 10 == 0 && stars.blink()
		    moon.draw()
		    stars.draw()

		    meteors.forEach((meteor, index, arr)=> {
		        //如果流星离开视野之内，销毁流星实例，回收内存
		        if (meteor.flow()) {
		            meteor.draw()
		        } else {
		            arr.splice(index, 1)
		        }
		    })
		    requestAnimationFrame(frame)
		}
		meteorGenerator()
		frame()
		}
	}
}

</script>

<style lang="css">
/*#app {
	background: url(assets/bg1.jpg) center !important;
	background-size: cover;
}*/
.canvas {
    position: fixed;
    z-index: -1;
}
html {
	width: 100%;
	height: 100%;
}
a:hover, a:visited, a:link, a:active {
    text-decoration: none;
	color: #48576a;
}
body {

	margin: 0px;
	padding: 0px;
	/*background: url(assets/bg1.jpg) center !important;
	background-size: cover;*/
	background: #fdfdfd;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
}

#app {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
	height: 100%;
}

.el-submenu [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.el-menu-item [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.toolbar {
	background: #f2f2f2;
	padding: 10px;
	/* //border:1px solid #dfe6ec; */
	margin: 10px 0px;
}
.el-form-item {
		margin-bottom: 10px;
}

.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}
.moon {
	width: 100px;
	height: 100px;
	position: absolute;
	z-index:-1;
	left: 100px;
	top: 100px;
	background: url('assets/moon.png') no-repeat;
	background-size: cover;
	/* box-shadow: 0 0 25px #cac6c6; */
}
.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>

