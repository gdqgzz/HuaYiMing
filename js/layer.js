.layui-layer-imgbar,.layui-layer-imgtit a,.layui-layer-tab .layui-layer-title span,.layui-layer-title {
	text-overflow: ellipsis;
	white-space: nowrap
}

*html {
	background-image: url(about:blank);
	background-attachment: fixed
}

html #layuicss-skinlayercss {
	display: none;
	position: absolute;
	width: 1989px
}

.layui-layer,.layui-layer-shade {
	position: fixed;
	_position: absolute;
	pointer-events: auto
}

.layui-layer-shade {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	_height: expression(document.body.offsetHeight+"px")
}

.layui-layer {
	-webkit-overflow-scrolling: touch;
	top: 150px;
	left: 0;
	margin: 0;
	padding: 0;
	background-color: #fff;
	-webkit-background-clip: content;
	box-shadow: 1px 1px 50px rgba(0,0,0,.3)
}

.layui-layer-close {
	position: absolute
}

.layui-layer-content {
	position: relative
}

.layui-layer-border {
	border: 1px solid #B2B2B2;
	border: 1px solid rgba(0,0,0,.1);
	box-shadow: 1px 1px 5px rgba(0,0,0,.2)
}

.layui-layer-load {
	background: url(loading-1.gif) center center no-repeat #eee
}

.layui-layer-ico {
	background: url(icon.png) no-repeat
}

.layui-layer-btn a,.layui-layer-dialog .layui-layer-ico,.layui-layer-setwin a {
	display: inline-block;
	*display: inline;
	*zoom: 1;
	vertical-align: top
}

.layui-layer-move {
	display: none;
	position: fixed;
	*position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	cursor: move;
	opacity: 0;
	filter: alpha(opacity=0);
	background-color: #fff;
	z-index: 2147483647
}

.layui-layer-resize {
	position: absolute;
	width: 15px;
	height: 15px;
	right: 0;
	bottom: 0;
	cursor: se-resize
}

.layui-layer {
	border-radius: 2px;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
	-webkit-animation-duration: .3s;
	animation-duration: .3s
}

@-webkit-keyframes bounceIn {
	0% {
		opacity: 0;
		-webkit-transform: scale(.5);
		transform: scale(.5)
	}

	100% {
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1)
	}
}

@keyframes bounceIn {
	0% {
		opacity: 0;
		-webkit-transform: scale(.5);
		-ms-transform: scale(.5);
		transform: scale(.5)
	}

	100% {
		opacity: 1;
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1)
	}
}

.layer-anim {
	-webkit-animation-name: bounceIn;
	animation-name: bounceIn
}

@-webkit-keyframes zoomInDown {
	0% {
		opacity: 0;
		-webkit-transform: scale(.1) translateY(-2000px);
		transform: scale(.1) translateY(-2000px);
		-webkit-animation-timing-function: ease-in-out;
		animation-timing-function: ease-in-out
	}

	60% {
		opacity: 1;
		-webkit-transform: scale(.475) translateY(60px);
		transform: scale(.475) translateY(60px);
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out
	}
}

@keyframes zoomInDown {
	0% {
		opacity: 0;
		-webkit-transform: scale(.1) translateY(-2000px);
		-ms-transform: scale(.1) translateY(-2000px);
		transform: scale(.1) translateY(-2000px);
		-webkit-animation-timing-function: ease-in-out;
		animation-timing-function: ease-in-out
	}

	60% {
		opacity: 1;
		-webkit-transform: scale(.475) translateY(60px);
		-ms-transform: scale(.475) translateY(60px);
		transform: scale(.475) translateY(60px);
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out
	}
}

.layer-anim-01 {
	-webkit-animation-name: zoomInDown;
	animation-name: zoomInDown
}

@-webkit-keyframes fadeInUpBig {
	0% {
		opacity: 0;
		-webkit-transform: translateY(2000px);
		transform: translateY(2000px)
	}

	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
}

@keyframes fadeInUpBig {
	0% {
		opacity: 0;
		-webkit-transform: translateY(2000px);
		-ms-transform: translateY(2000px);
		transform: translateY(2000px)
	}

	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
		-ms-transform: translateY(0);
		transform: translateY(0)
	}
}

.layer-anim-02 {
	-webkit-animation-name: fadeInUpBig;
	animation-name: fadeInUpBig
}

@-webkit-keyframes zoomInLeft {
	0% {
		opacity: 0;
		-webkit-transform: scale(.1) translateX(-2000px);
		transform: scale(.1) translateX(-2000px);
		-webkit-animation-timing-function: ease-in-out;
		animation-timing-function: ease-in-out
	}

	60% {
		opacity: 1;
		-webkit-transform: scale(.475) translateX(48px);
		transform: scale(.475) translateX(48px);
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out
	}
}

@keyframes zoomInLeft {
	0% {
		opacity: 0;
		-webkit-transform: scale(.1) translateX(-2000px);
		-ms-transform: scale(.1) translateX(-2000px);
		transform: scale(.1) translateX(-2000px);
		-webkit-animation-timing-function: ease-in-out;
		animation-timing-function: ease-in-out
	}

	60% {
		opacity: 1;
		-webkit-transform: scale(.475) translateX(48px);
		-ms-transform: scale(.475) translateX(48px);
		transform: scale(.475) translateX(48px);
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out
	}
}

.layer-anim-03 {
	-webkit-animation-name: zoomInLeft;
	animation-name: zoomInLeft
}

@-webkit-keyframes rollIn {
	0% {
		opacity: 0;
		-webkit-transform: translateX(-100%) rotate(-120deg);
		transform: translateX(-100%) rotate(-120deg)
	}

	100% {
		opacity: 1;
		-webkit-transform: translateX(0) rotate(0);
		transform: translateX(0) rotate(0)
	}
}

@keyframes rollIn {
	0% {
		opacity: 0;
		-webkit-transform: translateX(-100%) rotate(-120deg);
		-ms-transform: translateX(-100%) rotate(-120deg);
		transform: translateX(-100%) rotate(-120deg)
	}

	100% {
		opacity: 1;
		-webkit-transform: translateX(0) rotate(0);
		-ms-transform: translateX(0) rotate(0);
		transform: translateX(0) rotate(0)
	}
}

.layer-anim-04 {
	-webkit-animation-name: rollIn;
	animation-name: rollIn
}

@keyframes fadeIn {
	0% {
		opacity: 0
	}

	100% {
		opacity: 1
	}
}

.layer-anim-05 {
	-webkit-animation-name: fadeIn;
	animation-name: fadeIn
}

@-webkit-keyframes shake {
	0%,100% {
		-webkit-transform: translateX(0);
		transform: translateX(0)
	}

	10%,30%,50%,70%,90% {
		-webkit-transform: translateX(-10px);
		transform: translateX(-10px)
	}

	20%,40%,60%,80% {
		-webkit-transform: translateX(10px);
		transform: translateX(10px)
	}
}

@keyframes shake {
	0%,100% {
		-webkit-transform: translateX(0);
		-ms-transform: translateX(0);
		transform: translateX(0)
	}

	10%,30%,50%,70%,90% {
		-webkit-transform: translateX(-10px);
		-ms-transform: translateX(-10px);
		transform: translateX(-10px)
	}

	20%,40%,60%,80% {
		-webkit-transform: translateX(10px);
		-ms-transform: translateX(10px);
		transform: translateX(10px)
	}
}

.layer-anim-06 {
	-webkit-animation-name: shake;
	animation-name: shake
}

@-webkit-keyframes fadeIn {
	0% {
		opacity: 0
	}

	100% {
		opacity: 1
	}
}

@-webkit-keyframes bounceOut {
	100% {
		opacity: 0;
		-webkit-transform: scale(.7);
		transform: scale(.7)
	}

	30% {
		-webkit-transform: scale(1.05);
		transform: scale(1.05)
	}

	0% {
		-webkit-transform: scale(1);
		transform: scale(1)
	}
}

@keyframes bounceOut {
	100% {
		opacity: 0;
		-webkit-transform: scale(.7);
		-ms-transform: scale(.7);
		transform: scale(.7)
	}

	30% {
		-webkit-transform: scale(1.05);
		-ms-transform: scale(1.05);
		transform: scale(1.05)
	}

	0% {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1)
	}
}

.layer-anim-close {
	-webkit-animation-name: bounceOut;
	animation-name: bounceOut;
	-webkit-animation-duration: .2s;
	animation-duration: .2s
}

.layui-layer-title {
	padding: 0 80px 0 20px;
	height: 42px;
	line-height: 42px;
	border-bottom: 1px solid #eee;
	font-size: 14px;
	color: #333;
	overflow: hidden;
	background-color: #F8F8F8;
	border-radius: 2px 2px 0 0
}

.layui-layer-setwin {
	position: absolute;
	right: 15px;
	*right: 0;
	top: 15px;
	font-size: 0;
	line-height: initial
}

.layui-layer-setwin a {
	position: relative;
	width: 16px;
	height: 16px;
	margin-left: 10px;
	font-size: 16px;
	_overflow: hidden
}

.layui-layer-setwin .layui-layer-min cite {
	position: absolute;
	width: 14px;
	height: 2px;
	left: 0;
	top: 50%;
	margin-top: -1px;
	background-color: #2E2D3C;
	cursor: pointer;
	_overflow: hidden
}

.layui-layer-setwin .layui-layer-min:hover cite {
	background-color: #2D93CA
}

.layui-layer-setwin .layui-layer-max {
	background-position: -32px -40px
}

.layui-layer-setwin .layui-layer-max:hover {
	background-position: -16px -40px
}

.layui-layer-setwin .layui-layer-maxmin {
	background-position: -65px -40px
}

.layui-layer-setwin .layui-layer-maxmin:hover {
	background-position: -49px -40px
}

.layui-layer-setwin .layui-layer-close1 {
	background-position: 0 -40px;
	cursor: pointer
}

.layui-layer-setwin .layui-layer-close1:hover {
	opacity: .7
}

.layui-layer-setwin .layui-layer-close2 {
	position: absolute;
	right: -28px;
	top: -28px;
	width: 30px;
	height: 30px;
	margin-left: 0;
	background-position: -149px -31px;
	*right: -18px;
	_display: none
}

.layui-layer-setwin .layui-layer-close2:hover {
	background-position: -180px -31px
}

.layui-layer-btn {
	text-align: right;
	padding: 0 10px 12px;
	pointer-events: auto;
	user-select: none;
	-webkit-user-select: none
}

.layui-layer-btn a {
	height: 28px;
	line-height: 28px;
	margin: 0 6px;
	padding: 0 15px;
	border: 1px solid #dedede;
	background-color: #f1f1f1;
	color: #333;
	border-radius: 2px;
	font-weight: 400;
	cursor: pointer;
	text-decoration: none
}

.layui-layer-btn a:hover {
	opacity: .9;
	text-decoration: none
}

.layui-layer-btn a:active {
	opacity: .8
}

.layui-layer-btn .layui-layer-btn0 {
	border-color: #4898d5;
	background-color: #2e8ded;
	color: #fff
}

.layui-layer-btn-l {
	text-align: left
}

.layui-layer-btn-c {
	text-align: center
}

.layui-layer-dialog {
	min-width: 260px
}

.layui-layer-dialog .layui-layer-content {
	position: relative;
	padding: 20px;
	line-height: 24px;
	word-break: break-all;
	overflow: hidden;
	font-size: 14px;
	overflow-x: hidden;
	overflow-y: auto
}

.layui-layer-dialog .layui-layer-content .layui-layer-ico {
	position: absolute;
	top: 16px;
	left: 15px;
	_left: -40px;
	width: 30px;
	height: 30px
}

.layui-layer-ico1 {
	background-position: -30px 0
}

.layui-layer-ico2 {
	background-position: -60px 0
}

.layui-layer-ico3 {
	background-position: -90px 0
}

.layui-layer-ico4 {
	background-position: -120px 0
}

.layui-layer-ico5 {
	background-position: -150px 0
}

.layui-layer-ico6 {
	background-position: -180px 0
}

.layui-layer-rim {
	border: 6px solid #8D8D8D;
	border: 6px solid rgba(0,0,0,.3);
	border-radius: 5px;
	box-shadow: none
}

.layui-layer-msg {
	min-width: 180px;
	border: 1px solid #D3D4D3;
	box-shadow: none
}

.layui-layer-hui {
	min-width: 100px;
	background-color: #000;
	filter: alpha(opacity=60);
	background-color: rgba(0,0,0,.6);
	color: #fff;
	border: none
}

.layui-layer-hui .layui-layer-content {
	padding: 12px 25px;
	text-align: center
}

.layui-layer-dialog .layui-layer-padding {
	padding: 20px 20px 20px 55px;
	text-align: left
}

.layui-layer-page .layui-layer-content {
	position: relative;
	overflow: auto
}

.layui-layer-iframe .layui-layer-btn,.layui-layer-page .layui-layer-btn {
	padding-top: 10px
}

.layui-layer-nobg {
	background: 0 0
}

.layui-layer-iframe iframe {
	display: block;
	width: 100%
}

.layui-layer-loading {
	border-radius: 100%;
	background: 0 0;
	box-shadow: none;
	border: none
}

.layui-layer-loading .layui-layer-content {
	width: 60px;
	height: 24px;
	background: url(loading-0.gif) no-repeat
}

.layui-layer-loading .layui-layer-loading1 {
	width: 37px;
	height: 37px;
	background: url(loading-1.gif) no-repeat
}

.layui-layer-ico16,.layui-layer-loading .layui-layer-loading2 {
	width: 32px;
	height: 32px;
	background: url(loading-2.gif) no-repeat
}

.layui-layer-tips {
	background: 0 0;
	box-shadow: none;
	border: none
}

.layui-layer-tips .layui-layer-content {
	position: relative;
	line-height: 22px;
	min-width: 12px;
	padding: 15px 20px;
	font-size: 16px;
	_float: left;
	border-radius: 2px;
	box-shadow: 1px 1px 3px rgba(0,0,0,.2);
	background-color: #000;
	color: #fff
}

.layui-layer-tips .layui-layer-close {
	right: -2px;
	top: -1px
}

.layui-layer-tips i.layui-layer-TipsG {
	position: absolute;
	width: 0;
	height: 0;
	border-width: 8px;
	border-color: transparent;
	border-style: dashed;
	*overflow: hidden
}

.layui-layer-tips i.layui-layer-TipsB,.layui-layer-tips i.layui-layer-TipsT {
	left: 5px;
	border-right-style: solid;
	border-right-color: #000
}

.layui-layer-tips i.layui-layer-TipsT {
	bottom: -8px
}

.layui-layer-tips i.layui-layer-TipsB {
	top: -8px
}

.layui-layer-tips i.layui-layer-TipsL,.layui-layer-tips i.layui-layer-TipsR {
	top: 1px;
	border-bottom-style: solid;
	border-bottom-color: #000
}

.layui-layer-tips i.layui-layer-TipsR {
	left: -8px
}

.layui-layer-tips i.layui-layer-TipsL {
	right: -8px
}

.layui-layer-lan[type=dialog] {
	min-width: 280px
}

.layui-layer-lan .layui-layer-title {
	background: #4476A7;
	color: #fff;
	border: none
}

.layui-layer-lan .layui-layer-btn {
	padding: 10px;
	text-align: right;
	border-top: 1px solid #E9E7E7
}

.layui-layer-lan .layui-layer-btn a {
	background: #BBB5B5;
	border: none
}

.layui-layer-lan .layui-layer-btn .layui-layer-btn1 {
	background: #C9C5C5
}

.layui-layer-molv .layui-layer-title {
	background: #009f95;
	color: #fff;
	border: none
}

.layui-layer-molv .layui-layer-btn a {
	background: #009f95
}

.layui-layer-molv .layui-layer-btn .layui-layer-btn1 {
	background: #92B8B1
}

.layui-layer-iconext {
	background: url(icon-ext.png) no-repeat
}

.layui-layer-prompt .layui-layer-input {
	display: block;
	width: 220px;
	height: 30px;
	margin: 0 auto;
	line-height: 30px;
	padding: 0 5px;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 5px rgba(0,0,0,.1) inset;
	color: #333
}

.layui-layer-prompt textarea.layui-layer-input {
	width: 300px;
	height: 100px;
	line-height: 20px
}

.layui-layer-prompt .layui-layer-content {
	padding: 20px
}

.layui-layer-prompt .layui-layer-btn {
	padding-top: 0
}

.layui-layer-tab {
	box-shadow: 1px 1px 50px rgba(0,0,0,.4)
}

.layui-layer-tab .layui-layer-title {
	padding-left: 0;
	border-bottom: 1px solid #ccc;
	background-color: #eee;
	overflow: visible
}

.layui-layer-tab .layui-layer-title span {
	position: relative;
	float: left;
	min-width: 80px;
	max-width: 260px;
	padding: 0 20px;
	text-align: center;
	cursor: default;
	overflow: hidden
}

.layui-layer-tab .layui-layer-title span.layui-layer-tabnow {
	height: 43px;
	border-left: 1px solid #ccc;
	border-right: 1px solid #ccc;
	background-color: #fff;
	z-index: 10
}

.layui-layer-tab .layui-layer-title span:first-child {
	border-left: none
}

.layui-layer-tabmain {
	line-height: 24px;
	clear: both
}

.layui-layer-tabmain .layui-layer-tabli {
	display: none
}

.layui-layer-tabmain .layui-layer-tabli.xubox_tab_layer {
	display: block
}

.xubox_tabclose {
	position: absolute;
	right: 10px;
	top: 5px;
	cursor: pointer
}

.layui-layer-photos {
	-webkit-animation-duration: 1s;
	animation-duration: 1s
}

.layui-layer-photos .layui-layer-content {
	overflow: hidden;
	text-align: center
}

.layui-layer-photos .layui-layer-phimg img {
	position: relative;
	width: 100%;
	display: inline-block;
	*display: inline;
	*zoom: 1;
	vertical-align: top
}

.layui-layer-imgbar,.layui-layer-imguide {
	display: none
}

.layui-layer-imgnext,.layui-layer-imgprev {
	position: absolute;
	top: 50%;
	width: 27px;
	_width: 44px;
	height: 44px;
	margin-top: -22px;
	outline: 0;
	blr: expression(this.onFocus=this.blur())
}

.layui-layer-imgprev {
	left: 10px;
	background-position: -5px -5px;
	_background-position: -70px -5px
}

.layui-layer-imgprev:hover {
	background-position: -33px -5px;
	_background-position: -120px -5px
}

.layui-layer-imgnext {
	right: 10px;
	_right: 8px;
	background-position: -5px -50px;
	_background-position: -70px -50px
}

.layui-layer-imgnext:hover {
	background-position: -33px -50px;
	_background-position: -120px -50px
}

.layui-layer-imgbar {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 32px;
	line-height: 32px;
	background-color: rgba(0,0,0,.8);
	background-color: #000\9;
	filter: Alpha(opacity=80);
	color: #fff;
	overflow: hidden;
	font-size: 0
}

.layui-layer-imgtit * {
	display: inline-block;
	*display: inline;
	*zoom: 1;
	vertical-align: top;
	font-size: 12px
}

.layui-layer-imgtit a {
	max-width: 65%;
	overflow: hidden;
	color: #fff
}

.layui-layer-imgtit a:hover {
	color: #fff;
	text-decoration: underline
}

.layui-layer-imgtit em {
	padding-left: 10px;
	font-style: normal
}

@media screen and (max-width:1100px) {
	.layui-layer-iframe {
		overflow-y: auto;
		-webkit-overflow-scrolling: touch
	}
}