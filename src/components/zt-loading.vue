<template>
    <div class="spinner" @touchstart.stop.prevent="">
        <div class="loading-container">
            <div class="ball" :style="bollStyle"></div>
            <div class="ball-inner" :style="ballInnerStyle"></div>
        </div>
        <p class="ball-text" :style="ballTextStyle">loading</p>
    </div>
</template>


<script>
    export default {
        name: 'zt-loading',

		props: {
			mainColor: {
				type: String,
				default: function() {
					return 'RGBA(1, 154, 97, .9)'
				}
			},

			shadowColor: {
				type: String,
				default: function() {
					return 'RGBA(1, 154, 97, .5)'
				}
			}
		},

		computed: {
			bollStyle: function() {
				return {
					'border-color': this.mainColor,
					'box-shadow': '0 0 35px ' + this.shadowColor
				}
			},

			ballInnerStyle: function() {
				return {
					'border-color': this.mainColor,
					'box-shadow': '0 0 35px ' + this.shadowColor
				}
			},

			ballTextStyle: function() {
				return {
					'color': this.mainColor,
					'text-shadow': '0 0 35px ' + this.shadowColor + ', 0 0 35px ' + this.shadowColor + ', 0 0 35px ' + this.shadowColor
				}
			}
		}
    }
</script>

<style scoped>
.spinner {
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.9) center center no-repeat;
	pointer-events: all;
	z-index: 99999;
}
.spinner .loading-container {
	opacity: 0.8;
	top: 40%;
	left: 50%;
	position: absolute;
	width: 40px;
	height: 40px;
	transform: translate(-25px, -25px);
}
.loading-container .ball {
	background-color: rgba(0, 0, 0, 0);
	border: 5px solid RGBA(1, 154, 97, .9);
	opacity: 0.9;
	border-top: 5px solid rgba(0, 0, 0, 0) !important;
	border-left: 5px solid rgba(0, 0, 0, 0) !important;
	border-radius: 50px;
	box-shadow: 0 0 35px RGBA(1, 154, 97, .5);
	width: 40px;
	height: 40px;
	margin: 0 auto;
	animation: spinBig 1.5s infinite linear;
}
.loading-container .ball-inner {
	background-color: rgba(0, 0, 0, 0);
	border: 5px solid RGBA(1, 154, 97, .9);
	opacity: 0.9;
	border-top: 5px solid rgba(0, 0, 0, 0) !important;
	border-left: 5px solid rgba(0, 0, 0, 0) !important;
	border-radius: 50px;
	box-shadow: 0 0 15px RGBA(1, 154, 97, .5);
	width: 20px;
	height: 20px;
	position: absolute;
	top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	animation: spin 1.5s infinite reverse linear;
}
.ball-text {
	color: RGBA(1, 154, 97, .9);
	text-transform: uppercase;
	text-align: center;
	opacity: 0.8;
	width: 100vw;
	top: 40%;
	left: 0;
	font-size: 15px;
	position: absolute;
	transform: translatey(25px);
	animation: pulse 1.5s infinite alternate ease-in-out;
	margin: 0;
	text-shadow: 0 0 35px RGBA(1, 154, 97, .5), 0 0 35px RGBA(1, 154, 97, .5), 0 0 35px RGBA(1, 154, 97, .5);
}
@keyframes pulse {
	0% {
		opacity: 0.8;
	}
	100% {
		opacity: 0.4;
	}
}
@keyframes spin {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	100% { 
		transform: translate(-50%, -50%) rotate(360deg); 
	}
}
@keyframes spinBig {
	0% {
		transform: rotate(0deg);
	}
	100% { 
		transform: rotate(360deg); 
	}
}
</style>

