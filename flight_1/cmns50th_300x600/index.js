(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[421,0,567,100],[0,337,488,51],[623,102,364,80],[0,0,419,261],[490,337,420,56],[0,390,420,56],[422,395,420,56],[421,102,200,233],[623,184,100,100]]}
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



(lib.CMNS50 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Speaker = function() {
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
	this.instance.setTransform(0,23.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.5,73.7);


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
	this.instance = new lib.Speaker();

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
	this.instance.setTransform(-10,-12,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-12,100,116.5);


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
p.nominalBounds = new cjs.Rectangle(0,0,209.5,130.5);


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
	this.instance.setTransform(0,7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0,7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0633").ss(1,1,1).p("AwZjHMAgzAAAIAAGPMggzAAAg");
	this.shape.setTransform(105,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwZDIIAAmPMAgzAAAIAAGPg");
	this.shape_1.setTransform(105,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0633").s().p("AwZDIIAAmPMAgzAAAIAAGPg");
	this.shape_2.setTransform(105,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CC0633").ss(1,1,1).p("AwZjRMAgzAAAIAAGjMggzAAAg");
	this.shape_3.setTransform(105,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AwZDSIAAmjMAgzAAAIAAGjg");
	this.shape_4.setTransform(105,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0633").s().p("AwZDSIAAmjMAgzAAAIAAGjg");
	this.shape_5.setTransform(105,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,212,44);


// stage content:
(lib.cmns50th_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(60,49,51,0.078)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(69,47,50,0.153)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_2.setTransform(150,300);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(77,45,50,0.227)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_3.setTransform(150,300);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(85,43,50,0.294)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_4.setTransform(150,300);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(92,42,49,0.361)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_5.setTransform(150,300);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(100,40,49,0.424)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_6.setTransform(150,300);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(106,38,49,0.482)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_7.setTransform(150,300);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(113,37,48,0.537)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_8.setTransform(150,300);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(119,36,48,0.592)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_9.setTransform(150,300);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(125,34,48,0.639)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_10.setTransform(150,300);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(130,33,48,0.686)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_11.setTransform(150,300);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(135,32,47,0.729)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_12.setTransform(150,300);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(140,31,47,0.769)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_13.setTransform(150,300);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(144,30,47,0.808)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_14.setTransform(150,300);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(148,29,47,0.839)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_15.setTransform(150,300);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(151,28,47,0.871)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_16.setTransform(150,300);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(154,28,47,0.898)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_17.setTransform(150,300);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(157,27,46,0.922)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_18.setTransform(150,300);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(159,26,46,0.941)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_19.setTransform(150,300);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(161,26,46,0.961)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_20.setTransform(150,300);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(163,26,46,0.973)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_21.setTransform(150,300);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(164,25,46,0.984)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_22.setTransform(150,300);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(165,25,46,0.992)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_23.setTransform(150,300);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A6192E").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_24.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},238).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).wait(15));

	// Logo_SOC
	this.instance = new lib.g_SFU_SOC_Logo("synched",0);
	this.instance.setTransform(112,-21.9,1,1,0,0,0,82,18.1);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,186,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:18.1},24,cjs.Ease.get(1)).to({_off:true},249).wait(4));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(4));

	// Logo_CMNS50
	this.instance_1 = new lib.g_Logo_CMNS50("synched",0);
	this.instance_1.setTransform(266,105.1,1,1,0,0,0,82,30);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-12,-14,104,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({y:115.1},21,cjs.Ease.get(1)).wait(192).to({startPosition:0},0).to({startPosition:0},22,cjs.Ease.get(1)).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(38).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 21,cjs.Ease.get(1)).wait(192).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 22,cjs.Ease.get(1)).wait(4));

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
	var mask_graphics_24 = new cjs.Graphics().p("AzTzhMAmnAMbI62T4IrxGwg");
	var mask_graphics_25 = new cjs.Graphics().p("AzKzhMAmVALlI6XYxIr+Ctg");
	var mask_graphics_26 = new cjs.Graphics().p("AzBS7MAAAgnDMAmDAKxI56dgg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay4RDMAAAgnDMAlxAJ+MgZdAiDg");
	var mask_graphics_28 = new cjs.Graphics().p("AyxPPMAAAgnDMAliAJOMgZCAmbg");
	var mask_graphics_29 = new cjs.Graphics().p("AyUQaIgQgzMAAAgnxIe6GhIGPD1ImINcIpNR9In9Gmg");
	var mask_graphics_30 = new cjs.Graphics().p("Ax5RhIgfgrMAAAgpUMAgSAF1IEfFjIkYOiIn0TYIpcDrg");
	var mask_graphics_31 = new cjs.Graphics().p("AxhSiIgtgiMAAAgqxMAhlAFNIC3HJIiwPkImiUrIq1A+g");
	var mask_graphics_32 = new cjs.Graphics().p("AgpYSIwhlkIg6gbMAAAgsGMAivAEoIBZImIhSQhIlUV4g");
	var mask_graphics_33 = new cjs.Graphics().p("Ax8SIMAAAgtTMAjzAEGIAGZHIABCMIkPW+g");
	var mask_graphics_34 = new cjs.Graphics().p("AyLTtIhdi7MAAAgqxMAlWAC3IB3DsIAEW3IiaTsIiAC5g");
	var mask_graphics_35 = new cjs.Graphics().p("AyWU/Iiph3MAAAgsIMAmmAB0IDXCYIACXlIhiUaIjAB2g");
	var mask_graphics_36 = new cjs.Graphics().p("AyfWAIjkhEMAAAgtMMAnkABCIEiBWIABYJIg3U9IjyBDg");
	var mask_graphics_37 = new cjs.Graphics().p("AymWtIkOgeMAAAgt8MAoSAAdIFWAmIABYkIgZVWIkVAeg");
	var mask_graphics_38 = new cjs.Graphics().p("AyqXJIkngHMAAAguaMAosAAHIF3AKIAAYzIgGVlIkrAIg");
	var mask_graphics_39 = new cjs.Graphics().p("A3bXSMAAAgujMAu3AAAMAAAAujg");
	var mask_graphics_238 = new cjs.Graphics().p("A3CT7Igy5gIAyvHIW7gyIX8AyIAAM7IAAceI3aAyg");
	var mask_graphics_239 = new cjs.Graphics().p("A13TmIhb4PICKvYIVdhGIW9AyIgGM7IgFb8I2aAmg");
	var mask_graphics_240 = new cjs.Graphics().p("A0sTSIiD2/IDgvpIUAhaIV/AzIgNM7IgKbZI1cAag");
	var mask_graphics_241 = new cjs.Graphics().p("AziS9Iir1vIE2v6ISlhtIVAAzIgUM7IgOa3I0eAOg");
	var mask_graphics_242 = new cjs.Graphics().p("AyZSpIjT0gIGLwLIRLiBIUDA0IgbM7IgTaVIzgADg");
	var mask_graphics_243 = new cjs.Graphics().p("ABwTpIzAhYIj7zTIHewbIPyiUITGA0IggM7IgYZ0g");
	var mask_graphics_244 = new cjs.Graphics().p("ACATNIyJhWIkgyGIIwwrIOainISKA1IgoM7IgcZTg");
	var mask_graphics_245 = new cjs.Graphics().p("ACQSyIxThUIlGw6IKDw7INBi6IRPA2IguM7IggYyg");
	var mask_graphics_246 = new cjs.Graphics().p("ACgSXIwdhSIlsvvILVxKILqjNIQUA2Ig1M7IglYSg");
	var mask_graphics_247 = new cjs.Graphics().p("ACwR8IvnhQImSukIMlxaIKVjfIPZA2Ig7M7IgpXyg");
	var mask_graphics_248 = new cjs.Graphics().p("AFkSEIlKgKIp8hEIjaj9IlOnbIKgtpICAi9IIhlNIGeh0IHQAbIBmEOIgIGjIACD7IgdTIIlICEg");
	var mask_graphics_249 = new cjs.Graphics().p("AmqQ3IkbiZIgNgJImVltIKos4IB2i7IGum6IFBkCIHBAdIDnCSIAOGWIAMDzIgYShIinEjIrtATg");
	var mask_graphics_250 = new cjs.Graphics().p("ApSP5IgPgFInlkOIKtsGIKQxuIMYA4IA4JzIgZY7IrVA2g");
	var mask_graphics_251 = new cjs.Graphics().p("Aj3Q2IjrglIgOgEInbjaIH/sXIBBiQIC/mMIFEonIGgg7IEkAWIB5FWIAQCsIAHI5IgWOzIolC9IgdAEg");
	var mask_graphics_252 = new cjs.Graphics().p("Al3QwIgOgDInQioIFTsmIAriOICWmDIE5oJIFZiXIEVAXIDKDtIAQCjIAWIcIgcODIl1FDIgUANIpJAPg");
	var mask_graphics_253 = new cjs.Graphics().p("AkOQ5InTh5ICps1IAWiMIBsl7IEtnqIEVjyIEGAWIEaCHIAQCbIAmH+IgiNTIjTHeIooBKg");
	var mask_graphics_254 = new cjs.Graphics().p("AlnQjIkHgoIABvOIBElzIHzsZIJfA5IBGJzIhGWOIj6BAIggAIIjuA9g");
	var mask_graphics_255 = new cjs.Graphics().p("AptPqIABszIADiQIABgDIAtj2IAchzIHQriIAigmIJLA3IALADIBFJsIhCUsIgQBIIoCCBg");
	var mask_graphics_256 = new cjs.Graphics().p("AptPaIABsqIAIiOIABgDIAsj0IAihvIHMrZIAkgeIJFA3IAJAEIBFJmIhCUdIgcA+InQB2IgtAFg");
	var mask_graphics_257 = new cjs.Graphics().p("AptPJIABshIAMiMIABgDIAsjxIAohrIHHrSIAogUII/A2IAHAGIBEJfIAAAdIhDTxIgoAzInLB2IgsACg");
	var mask_graphics_258 = new cjs.Graphics().p("AAFQYIpyhgIABsYIAQiKIABgDIArjvIAvhmIHBrKIAsgMII5A1IAFAIIBDJYIABAeIhETiIg0AoInFB0g");
	var mask_graphics_259 = new cjs.Graphics().p("ApuOmIACsPIAUiIIABgDIArjsIA1hiIG8rDIAvgDIIzA1IACAKIBGJuIhGTUIhAAeInAByg");
	var mask_graphics_260 = new cjs.Graphics().p("ApUObIgagEIABsGIAZiKIArjpIHzsZIJfA5IBGJzIhGTGIoICFg");
	var mask_graphics_261 = new cjs.Graphics().p("ApUObIgagEIABsGIAZiKIArjpIHzsZIJfA5IBGJzIhGTGIoICFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:-2.5,y:125}).wait(1).to({graphics:mask_graphics_18,x:20.65,y:125}).wait(1).to({graphics:mask_graphics_19,x:42.85,y:125}).wait(1).to({graphics:mask_graphics_20,x:64.05,y:125}).wait(1).to({graphics:mask_graphics_21,x:84.275,y:125}).wait(1).to({graphics:mask_graphics_22,x:103.5,y:125}).wait(1).to({graphics:mask_graphics_23,x:121.725,y:125}).wait(1).to({graphics:mask_graphics_24,x:120.975,y:125}).wait(1).to({graphics:mask_graphics_25,x:120.225,y:125}).wait(1).to({graphics:mask_graphics_26,x:119.55,y:128.875}).wait(1).to({graphics:mask_graphics_27,x:118.85,y:140.925}).wait(1).to({graphics:mask_graphics_28,x:118.2,y:152.525}).wait(1).to({graphics:mask_graphics_29,x:117.2,y:154.7}).wait(1).to({graphics:mask_graphics_30,x:116.275,y:156.725}).wait(1).to({graphics:mask_graphics_31,x:115.4,y:158.575}).wait(1).to({graphics:mask_graphics_32,x:114.6,y:165.175}).wait(1).to({graphics:mask_graphics_33,x:114.1,y:174.025}).wait(1).to({graphics:mask_graphics_34,x:125.075,y:166.375}).wait(1).to({graphics:mask_graphics_35,x:134.025,y:160.125}).wait(1).to({graphics:mask_graphics_36,x:141.025,y:155.25}).wait(1).to({graphics:mask_graphics_37,x:146,y:151.775}).wait(1).to({graphics:mask_graphics_38,x:149.025,y:149.7}).wait(1).to({graphics:mask_graphics_39,x:150,y:149}).wait(199).to({graphics:mask_graphics_238,x:147.5,y:172.5}).wait(1).to({graphics:mask_graphics_239,x:151.85,y:174.975}).wait(1).to({graphics:mask_graphics_240,x:156.175,y:177.4}).wait(1).to({graphics:mask_graphics_241,x:160.45,y:179.825}).wait(1).to({graphics:mask_graphics_242,x:164.675,y:182.175}).wait(1).to({graphics:mask_graphics_243,x:168.85,y:185}).wait(1).to({graphics:mask_graphics_244,x:173,y:187.925}).wait(1).to({graphics:mask_graphics_245,x:177.1,y:190.775}).wait(1).to({graphics:mask_graphics_246,x:181.15,y:193.625}).wait(1).to({graphics:mask_graphics_247,x:185.15,y:196.45}).wait(1).to({graphics:mask_graphics_248,x:188.3,y:194.475}).wait(1).to({graphics:mask_graphics_249,x:194.05,y:193.475}).wait(1).to({graphics:mask_graphics_250,x:200.025,y:193.35}).wait(1).to({graphics:mask_graphics_251,x:218.625,y:195.7}).wait(1).to({graphics:mask_graphics_252,x:237.475,y:197.35}).wait(1).to({graphics:mask_graphics_253,x:256.175,y:201.25}).wait(1).to({graphics:mask_graphics_254,x:274.675,y:205.075}).wait(1).to({graphics:mask_graphics_255,x:289.75,y:203.9}).wait(1).to({graphics:mask_graphics_256,x:304.775,y:202.675}).wait(1).to({graphics:mask_graphics_257,x:319.775,y:201.5}).wait(1).to({graphics:mask_graphics_258,x:334.775,y:200.375}).wait(1).to({graphics:mask_graphics_259,x:349.75,y:199.35}).wait(1).to({graphics:mask_graphics_260,x:364.675,y:198.075}).wait(1).to({graphics:mask_graphics_261,x:364.675,y:198.075}).wait(17));

	// Pattern_2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC2939").s().p("ALQMxQiuAAifhCQifhCh7h7QhxhyhBiRQhAiPgJidIgDAAQgKiXhBiIQg/iFhshmQhshliIg4QiOg5iaAAI4XgBIAAhSIYXABQCvAACeBBQCfBCB7B7QBzByBBCRQBACPAKCdIABAAQAKCXBACJQBACEBrBmQBsBlCJA4QCNA6CaAAIbvAAIAABSg");
	this.shape_25.setTransform(118.475,171.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BE4F31").s().p("ALQMxQjOAAi7hNQi8hOiQiSQiJiJhNiuQhMiqgKi9IgBAAQgKh3g1hrQgzhphWhPQhWhQhsgrQhwgth6AAI4YgBIAAhTIYYABQCPAACBA2QCDA2BkBkQBdBcA0B0QA0BxAKB/IACAAQAJC3BOClQBMChCAB8QCBB7ClBDQCrBGC6ABIbvAAIAABSg");
	this.shape_26.setTransform(118.475,187.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DA3932").s().p("ALQMxQiOAAiCg2QiCg2hlhkQhchcg1h1QgzhxgKh+IgDAAQgJi3hNimQhMihiCh7QiBh8ilhDQirhGi6AAI4XgBIAAhSIYXABQDPAAC7BNQC8BOCRCRQCJCJBMCuQBLCrALC8IACAAQAJB4A2BrQAzBoBVBQQBWBQBsAsQBxAtB5AAIbvAAIAABSg");
	this.shape_27.setTransform(118.475,156.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAA93B").s().p("ALQRwQjyAAjcheQjXhaiiikQililhajWQhUjGgJjVIACAAQgLhTgmhLQgohLg/g7Qg/g5hQgfQhSgghZAAI4bgBIAAhSIYbABQBqAABhAmQBfAmBLBFQBLBEAtBbQAvBdAJBmIgBAAQALDWBYDAQBYC+CYCSQCXCSDCBQQDJBSDaAAIbvAAIAABTgALQHyQhpAAhjgmQhdgmhMhFQhKhEguhbQgthagLhkIgBAAQgKjYhbjDQhWi/iYiSQiYiSjChPQjJhSjbgBI4XAAIAAhTIYXABQDyAADeBdQDVBcCkCjQCkClBaDVQBTDDAJDTIACAAQAJBVAoBPQAnBMBAA5QA/A5BQAgQBSAgBZAAIbvAAIAABSg");
	this.shape_28.setTransform(118.475,171.95);

	var maskedShapeInstanceList = [this.shape_25,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},17).to({state:[]},244).to({state:[]},1).wait(16));

	// SpeakerPic
	this.instance_2 = new lib.g_SpeakerPic("synched",0);
	this.instance_2.setTransform(18.9,431.2,0.701,0.7007,0,0,0,49.9,50);
	this.instance_2._off = true;
	var instance_2Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-2,-2,104,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({x:43.4},25,cjs.Ease.get(1)).to({_off:true},174).wait(4));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(75).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 25,cjs.Ease.get(1)).wait(4));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_48 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_1_graphics_48,x:150,y:300}).wait(230));

	// Text_1
	this.instance_3 = new lib.g_title_1("synched",0);
	this.instance_3.setTransform(-152.95,335.9,1,1,0,0,0,111.3,31.4);
	this.instance_3._off = true;
	var instance_3Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-2,-2,288,78);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).wait(10).to({startPosition:0},0).to({x:121.3},20,cjs.Ease.get(0.9)).wait(183).to({startPosition:0},0).to({startPosition:0},22).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(38).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).wait(10).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20,cjs.Ease.get(0.9)).wait(183).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 22).wait(4));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_87 = new cjs.Graphics().p("Aw8PAIAA9/MAh5AAAIAAd/g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_2_graphics_87,x:192.025,y:475.05}).wait(191));

	// Text_2
	this.instance_4 = new lib.g_contenttxt_1("synched",0);
	this.instance_4.setTransform(-12.6,436.15,1,1,0,0,0,96.5,45);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(87).to({_off:false},0).to({x:180},25,cjs.Ease.get(1)).to({_off:true},162).wait(4));

	// btn_CTA
	this.instance_5 = new lib.btn_CTA();
	this.instance_5.setTransform(45,548);
	this.instance_5.alpha = 0.8984;
	this.instance_5._off = true;
	var instance_5Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_5];
	this.instance_5.cache(-3,-3,216,48);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.btn_CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(108).to({_off:false},0).to({y:538,alpha:1},23,cjs.Ease.get(1)).to({_off:true},143).wait(4));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_5).wait(108).to(new cjs.ColorFilter(1,1,1,1,255,255,100,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(4));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-2, y:-2, w:186, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:186, h:44});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:25, x:-2, y:-2, w:186, h:44});
	this.filterCacheList.push({instance: this.instance_1, startFrame:38, endFrame:38, x:-12, y:-14, w:104, h:121});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-12, y:-14, w:104, h:121});
	this.filterCacheList.push({instance: this.instance_1, startFrame:39, endFrame:59, x:-12, y:-14, w:104, h:121});
	this.filterCacheList.push({instance: this.instance_1, startFrame:251, endFrame:251, x:-12, y:-14, w:104, h:121});
	this.filterCacheList.push({instance: this.instance_1, startFrame:252, endFrame:273, x:-12, y:-14, w:104, h:121});
	this.filterCacheList.push({instance: this.instance_2, startFrame:75, endFrame:75, x:-2, y:-2, w:104, h:104});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:104, h:104});
	this.filterCacheList.push({instance: this.instance_2, startFrame:76, endFrame:100, x:-2, y:-2, w:104, h:104});
	this.filterCacheList.push({instance: this.instance_3, startFrame:38, endFrame:38, x:-2, y:-2, w:288, h:78});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:288, h:78});
	this.filterCacheList.push({instance: this.instance_3, startFrame:49, endFrame:68, x:-2, y:-2, w:288, h:78});
	this.filterCacheList.push({instance: this.instance_3, startFrame:251, endFrame:251, x:-2, y:-2, w:288, h:78});
	this.filterCacheList.push({instance: this.instance_3, startFrame:252, endFrame:273, x:-2, y:-2, w:288, h:78});
	this.filterCacheList.push({instance: this.instance_5, startFrame:108, endFrame:108, x:-3, y:-3, w:216, h:48});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-3, y:-3, w:216, h:48});
	this.filterCacheList.push({instance: this.instance_5, startFrame:109, endFrame:131, x:-3, y:-3, w:216, h:48});
	this.filterCacheList.push({instance: this.instance_5, startFrame:132, endFrame:274, x:-3, y:-3, w:216, h:48});
	this.filterCacheList.push({instance: this.instance_5, startFrame:274, endFrame:278, x:-3, y:-3, w:216, h:48});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-114.2,0,482.2,600);
// library properties:
lib.properties = {
	id: 'C38F8E925B074A239B4A15BB5DD6BAC8',
	width: 300,
	height: 600,
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