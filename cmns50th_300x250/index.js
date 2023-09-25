(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[388,235,445,80],[590,0,221,79],[0,260,364,80],[0,0,386,258],[590,81,260,56],[590,139,260,56],[366,317,260,56],[852,0,100,100],[388,0,200,233]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CMNS50 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.g_title_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,22.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(0,-16,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,222.5,78.7);


(lib.g_SpeakerPic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlgFhQiTiSAAjPQAAjOCTiTQCSiSDOAAQDPAACSCSQCTCTAADOQAADPiTCSQiSCTjPAAQjOAAiSiTg");
	mask.setTransform(50,50);

	// FlashAICB
	this.instance = new lib.Bitmap10();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.g_SFU_SOC_Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,40);


(lib.g_Logo_CMNS50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CMNS50();
	this.instance.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,93.2);


(lib.g_contenttxt_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,129);


(lib.btn_CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TEXT
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0,2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0633").ss(1,1,1).p("AqJifIUTAAIAAE/I0TAAg");
	this.shape.setTransform(65,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqJCgIAAk/IUTAAIAAE/g");
	this.shape_1.setTransform(65,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0633").s().p("AqJCgIAAk/IUTAAIAAE/g");
	this.shape_2.setTransform(65,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,132,34);


// stage content:
(lib.cmns50th_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask_Color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(63,48,50,0.102)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(74,46,50,0.2)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(84,43,50,0.29)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(94,41,49,0.376)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(104,39,49,0.459)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(112,37,48,0.533)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(120,35,48,0.6)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(127,34,48,0.667)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(134,32,47,0.722)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(140,31,47,0.776)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(146,30,47,0.824)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(150,29,47,0.863)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(155,28,46,0.902)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(158,27,46,0.929)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(161,26,46,0.957)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(163,26,46,0.976)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(165,25,46,0.988)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(166,25,46,0.996)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A6192E").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},322).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(2));

	// Logo_SOC
	this.instance = new lib.g_SFU_SOC_Logo("synched",0);
	this.instance.setTransform(112,-21.9,1,1,0,0,0,82,18.1);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,186,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:18.1},24,cjs.Ease.get(1)).to({_off:true},317).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(1));

	// Logo_CMNS50
	this.instance_1 = new lib.g_Logo_CMNS50("synched",0);
	this.instance_1.setTransform(289,82.1,1,1,0,0,0,82,30);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-2,-2,84,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({startPosition:0},18,cjs.Ease.get(1)).wait(89).to({startPosition:0},0).to({startPosition:0},21,cjs.Ease.get(1)).to({_off:true},1).wait(176));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(38).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18,cjs.Ease.get(1)).wait(89).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 21,cjs.Ease.get(1)).wait(176));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("AgYTiMAAAgnDIAxAAMAAAAnDg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj7zhIH3CeMgFEAijIizCCg");
	var mask_graphics_19 = new cjs.Graphics().p("AnWzhIOtE2Ip+eOIkvD/g");
	var mask_graphics_20 = new cjs.Graphics().p("AqlzhIVMHHIupaFImjF3g");
	var mask_graphics_21 = new cjs.Graphics().p("AtszhIbZJRIzFWJIoUHpg");
	var mask_graphics_22 = new cjs.Graphics().p("AwpzhMAhTALVI3USZIp/JVg");
	var mask_graphics_23 = new cjs.Graphics().p("AzczhMAm5ANSI7VO1IrkK8g");
	var mask_graphics_24 = new cjs.Graphics().p("AzTzhMAmnAMbI5OR7ItZItg");
	var mask_graphics_25 = new cjs.Graphics().p("AzKzhMAmVALlI3MU8IvJGig");
	var mask_graphics_26 = new cjs.Graphics().p("AzBzhMAmDAKwI1PX3Iw0Ecg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay4zhMAlxAJ+IzVapIycCcg");
	var mask_graphics_28 = new cjs.Graphics().p("AyxzhMAliAJOIxhdWI0BAfg");
	var mask_graphics_29 = new cjs.Graphics().p("AykTfMAAAgnEMAlJAIDItcfIg");
	var mask_graphics_30 = new cjs.Graphics().p("AyYTNMAAAgnDMAkxAG7MgJnAgyg");
	var mask_graphics_31 = new cjs.Graphics().p("AyNS8MAAAgnDMAkbAF6MgGFAiVg");
	var mask_graphics_32 = new cjs.Graphics().p("AyDStMAAAgnDMAkGAE+MgC0Ajvg");
	var mask_graphics_33 = new cjs.Graphics().p("Ax+SfMAAAgnDMAjzAEHMAAKAlCg");
	var mask_graphics_34 = new cjs.Graphics().p("AzpS0MAAAgnEMAnMAC3MAAHAlpg");
	var mask_graphics_35 = new cjs.Graphics().p("A1ATEMAAAgnDMAp9AB1MAAEAmKg");
	var mask_graphics_36 = new cjs.Graphics().p("A2ETRMAAAgnDMAsGABCMAADAmjg");
	var mask_graphics_37 = new cjs.Graphics().p("A20TbMAAAgnEMAtoAAdMAABAm1g");
	var mask_graphics_38 = new cjs.Graphics().p("A3RTgMAAAgnDMAujAAIMAAAAm/g");
	var mask_graphics_39 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_145 = new cjs.Graphics().p("A3CNrIgywIIAyr/IW7gyIX8AyIAAJzIAATGI3aAyg");
	var mask_graphics_146 = new cjs.Graphics().p("A1tNrIhTvhIB1sQIVRhIIW2AzIAFJzIgFTFI2TAyg");
	var mask_graphics_147 = new cjs.Graphics().p("A0aNrIhzu6IC3sgITqhfIVvA0IALJyIgLTGI1MAxg");
	var mask_graphics_148 = new cjs.Graphics().p("AzHNrIiTuUID5sxISDh0IUpA0IAQJzIgQTFI0GAxg");
	var mask_graphics_149 = new cjs.Graphics().p("Ax1NrIiztuIE5tBIQfiKITkA0IAVJzIgVTGIzBAwg");
	var mask_graphics_150 = new cjs.Graphics().p("AwkNrIjTtJIF6tQIO6igISgA0IAbJzIgbTHIx9Avg");
	var mask_graphics_151 = new cjs.Graphics().p("AvUNrIjyslIG5tfINXi1IRdA1IAgJzIggTGIw6Avg");
	var mask_graphics_152 = new cjs.Graphics().p("AuGNrIkPsAIH2tvIL2jKIQbA2IAlJyIglTGIv4Avg");
	var mask_graphics_153 = new cjs.Graphics().p("As4NrIkurcII1t+IKVjfIPZA2IAqJzIgqTGIu2Aug");
	var mask_graphics_154 = new cjs.Graphics().p("ArdNnIlvofII/szIKUoTIOYA3IAuJzIgkUiItqAxg");
	var mask_graphics_155 = new cjs.Graphics().p("AqDNiImvliITa4tINYA3IA0JzIggV9IseA0g");
	var mask_graphics_156 = new cjs.Graphics().p("AoqNeInviqIJTqjIKQxsIMYA3IA4JzIgZXXIrVA2g");
	var mask_graphics_157 = new cjs.Graphics().p("AlbOXIomiSIGLrFIHKtrIK1jnIDyGyIAHSyIn4HBg");
	var mask_graphics_158 = new cjs.Graphics().p("Ar2NtIDErlIEFpuIJToCIGqD1IAnOQIkdNGIp1AGg");
	var mask_graphics_159 = new cjs.Graphics().p("ApuOXIABsGIBElzIHzsZIJfA5IBGJzIhGTGIoICFg");
	var mask_graphics_160 = new cjs.Graphics().p("ApuOXIABsGIBElzIHzsZIJfA5IBGJzIhGTGIoICFg");
	var mask_graphics_161 = new cjs.Graphics().p("ApuOXIABsGIBElzIHzsZIJfA5IBGJzIhGTGIoICFg");
	var mask_graphics_162 = new cjs.Graphics().p("ApuOXIABsGIBElzIHzsZIJfA5IBGJzIhGTGIoICFg");
	var mask_graphics_163 = new cjs.Graphics().p("ApuOXIABsGIBElzIHzsZIJfA5IBGJzIhGTGIoICFg");
	var mask_graphics_164 = new cjs.Graphics().p("ApuOXIABsGIBElzIHzsZIJfA5IBGJzIhGTGIoICFg");
	var mask_graphics_165 = new cjs.Graphics().p("ApuOXIABsGIBElzIHzsZIJfA5IBGJzIhGTGIoICFg");
	var mask_graphics_166 = new cjs.Graphics().p("ApuOXIABsGIBElzIHzsZIJfA5IBGJzIhGTGIoICFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:-2.5,y:125}).wait(1).to({graphics:mask_graphics_18,x:20.65,y:125}).wait(1).to({graphics:mask_graphics_19,x:42.85,y:125}).wait(1).to({graphics:mask_graphics_20,x:64.05,y:125}).wait(1).to({graphics:mask_graphics_21,x:84.275,y:125}).wait(1).to({graphics:mask_graphics_22,x:103.5,y:125}).wait(1).to({graphics:mask_graphics_23,x:121.725,y:125}).wait(1).to({graphics:mask_graphics_24,x:120.975,y:125}).wait(1).to({graphics:mask_graphics_25,x:120.225,y:125}).wait(1).to({graphics:mask_graphics_26,x:119.55,y:125}).wait(1).to({graphics:mask_graphics_27,x:118.85,y:125}).wait(1).to({graphics:mask_graphics_28,x:118.2,y:125}).wait(1).to({graphics:mask_graphics_29,x:117.175,y:125.35}).wait(1).to({graphics:mask_graphics_30,x:116.225,y:127.125}).wait(1).to({graphics:mask_graphics_31,x:115.325,y:128.775}).wait(1).to({graphics:mask_graphics_32,x:114.5,y:130.3}).wait(1).to({graphics:mask_graphics_33,x:114.275,y:131.7}).wait(1).to({graphics:mask_graphics_34,x:125.175,y:129.65}).wait(1).to({graphics:mask_graphics_35,x:134.1,y:127.975}).wait(1).to({graphics:mask_graphics_36,x:141.075,y:126.675}).wait(1).to({graphics:mask_graphics_37,x:146.025,y:125.75}).wait(1).to({graphics:mask_graphics_38,x:149.025,y:125.175}).wait(1).to({graphics:mask_graphics_39,x:150,y:125}).wait(106).to({graphics:mask_graphics_145,x:147.5,y:152.5}).wait(1).to({graphics:mask_graphics_146,x:155.525,y:152.65}).wait(1).to({graphics:mask_graphics_147,x:163.475,y:152.8}).wait(1).to({graphics:mask_graphics_148,x:171.325,y:153}).wait(1).to({graphics:mask_graphics_149,x:179.1,y:153.15}).wait(1).to({graphics:mask_graphics_150,x:186.775,y:153.3}).wait(1).to({graphics:mask_graphics_151,x:194.325,y:153.45}).wait(1).to({graphics:mask_graphics_152,x:201.85,y:153.6}).wait(1).to({graphics:mask_graphics_153,x:209.225,y:153.75}).wait(1).to({graphics:mask_graphics_154,x:214.4,y:158.675}).wait(1).to({graphics:mask_graphics_155,x:219.5,y:163.55}).wait(1).to({graphics:mask_graphics_156,x:224.525,y:168.35}).wait(1).to({graphics:mask_graphics_157,x:240.6,y:164.825}).wait(1).to({graphics:mask_graphics_158,x:257.775,y:158.85}).wait(1).to({graphics:mask_graphics_159,x:274.675,y:159.075}).wait(1).to({graphics:mask_graphics_160,x:287.625,y:159.075}).wait(1).to({graphics:mask_graphics_161,x:300.525,y:159.075}).wait(1).to({graphics:mask_graphics_162,x:313.375,y:159.075}).wait(1).to({graphics:mask_graphics_163,x:326.275,y:159.075}).wait(1).to({graphics:mask_graphics_164,x:339.075,y:159.075}).wait(1).to({graphics:mask_graphics_165,x:351.875,y:159.075}).wait(1).to({graphics:mask_graphics_166,x:364.675,y:159.075}).wait(177));

	// Pattern_2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BE4F31").s().p("AHgIhQiJAAh9g0Qh+g0hghhQhbhbgzh0QgyhygHh9IgBAAQgHhQgjhIQgihFg5g1Qg6g2hHgcQhMgehRAAIwPAKIAAg4IQPgKQBfAABXAkQBXAkBDBDQA+A+AiBNQAjBMAHBUIABAAQAGB5A0BvQAzBrBVBTQBWBSBuAtQByAuB8AAISfAAIAAA4g");
	this.shape_20.setTransform(159.3,138.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAA93B").s().p("AHgL1QiiAAiSg/QiPg8hshtQhuhug8iPQg4iDgGiOIABAAQgHg3gagzQgagygqgnQgqgmg2gUQg2gWg8AAIwRAKIAAg3IQRgKQBHAABBAaQA/AZAyAuQAyAuAeA8QAgA+AFBEIAAAAQAHCOA7CAQA6CABmBgQBkBiCCA1QCGA3CRAAISfAAIAAA3gAHgFMQhGAAhCgaQg/gZgyguQgygugeg8Qgeg8gHhDIgBAAQgGiPg9iCQg6iAhkhgQhmhiiBg1QiGg3iSAAIwPAKIAAg3IQPgKQChAACUA/QCOA8BtBtQBuBuA7COQA3CCAHCNIABAAQAGA4AbA1QAaAyArAnQAqAmA0AUQA4AWA7AAISfAAIAAA3g");
	this.shape_21.setTransform(159.3,128.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BC2939").s().p("AHgIgQh1AAhqgsQhqgrhShTQhKhMgshgQgqhggGhoIgDAAQgGhlgrhbQgrhYhIhEQhIhEhaglQhfglhmgBIwPAKIAAg3IQPgJQB1gBBpAsQBqAsBSBSQBNBMAqBhQAsBfAGBpIABAAQAGBkArBcQArBXBHBEQBIBEBbAlQBeAnBnAAISfAAIAAA2g");
	this.shape_22.setTransform(159.3,128.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DA3932").s().p("AHgIgQhfAAhWgkQhYgjhChDQg+g+gjhOQgjhLgGhUIgCAAQgGh5gzhvQgzhshWhRQhXhThtgtQhyguh8gBIwPALIAAg4IQPgKQCKAAB8A0QB+A0BgBhQBcBbAyB0QAyByAHB9IABAAQAHBQAjBHQAjBGA4A1QA6A2BIAdQBLAdBRAAISfAAIAAA3g");
	this.shape_23.setTransform(159.3,117.7);

	var maskedShapeInstanceList = [this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},17).to({state:[]},150).wait(176));

	// SpeakerPic
	this.instance_2 = new lib.g_SpeakerPic("synched",0);
	this.instance_2.setTransform(28.9,101.2,0.701,0.7007,0,0,0,49.9,50);
	this.instance_2._off = true;
	var instance_2Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-2,-2,104,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(170).to({_off:false},0).to({x:48.9},30,cjs.Ease.get(1)).to({_off:true},142).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(170).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 30,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_56 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_1_graphics_56,x:150,y:125}).wait(287));

	// Text_1
	this.instance_3 = new lib.g_title_1("synched",0);
	this.instance_3.setTransform(-112.95,215.9,1,1,0,0,0,111.3,31.4);
	this.instance_3._off = true;
	var instance_3Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-2,-18,227,83);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({x:121.3},19,cjs.Ease.get(1)).wait(70).to({startPosition:0},0).to({startPosition:0},20).to({_off:true},2).wait(176));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(56).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 19,cjs.Ease.get(1)).wait(70).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 20).wait(176));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_187 = new cjs.Graphics().p("AwWPAIAA9/MAgtAAAIAAd/g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_2_graphics_187,x:195.275,y:145.05}).wait(156));

	// Text_2
	this.instance_4 = new lib.g_contenttxt_1("synched",0);
	this.instance_4.setTransform(-12.6,106.15,1,1,0,0,0,96.5,45);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(187).to({_off:false},0).to({x:193},26,cjs.Ease.get(1)).to({_off:true},129).wait(1));

	// btn_CTA
	this.instance_5 = new lib.btn_CTA();
	this.instance_5.setTransform(175,213);
	this.instance_5._off = true;
	var instance_5Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_5];
	this.instance_5.cache(-3,-3,136,38);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.btn_CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(210).to({_off:false},0).to({x:165},23,cjs.Ease.get(1)).to({_off:true},109).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_5).wait(210).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-2, y:-2, w:186, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:186, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:25, x:-2, y:-2, w:186, h:44});
	this.filterCacheList.push({instance: this.instance_1, startFrame:38, endFrame:38, x:-2, y:-2, w:84, h:97});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:84, h:97});
	this.filterCacheList.push({instance: this.instance_1, startFrame:39, endFrame:56, x:-2, y:-2, w:84, h:97});
	this.filterCacheList.push({instance: this.instance_1, startFrame:145, endFrame:145, x:-2, y:-2, w:84, h:97});
	this.filterCacheList.push({instance: this.instance_1, startFrame:146, endFrame:166, x:-2, y:-2, w:84, h:97});
	this.filterCacheList.push({instance: this.instance_2, startFrame:170, endFrame:170, x:-2, y:-2, w:104, h:104});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:104, h:104});
	this.filterCacheList.push({instance: this.instance_2, startFrame:171, endFrame:200, x:-2, y:-2, w:104, h:104});
	this.filterCacheList.push({instance: this.instance_3, startFrame:56, endFrame:56, x:-2, y:-18, w:227, h:83});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-18, w:227, h:83});
	this.filterCacheList.push({instance: this.instance_3, startFrame:57, endFrame:75, x:-2, y:-18, w:227, h:83});
	this.filterCacheList.push({instance: this.instance_3, startFrame:145, endFrame:145, x:-2, y:-18, w:227, h:83});
	this.filterCacheList.push({instance: this.instance_3, startFrame:146, endFrame:165, x:-2, y:-18, w:227, h:83});
	this.filterCacheList.push({instance: this.instance_5, startFrame:210, endFrame:210, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_5, startFrame:211, endFrame:233, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_5, startFrame:234, endFrame:342, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_5, startFrame:342, endFrame:343, x:-3, y:-3, w:136, h:38});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.6,250);
// library properties:
lib.properties = {
	id: 'C38F8E925B074A239B4A15BB5DD6BAC8',
	width: 300,
	height: 250,
	fps: 24,
	color: "#A6192E",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C38F8E925B074A239B4A15BB5DD6BAC8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;