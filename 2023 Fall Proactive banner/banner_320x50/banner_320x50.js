(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_320x50_atlas_1", frames: [[0,164,479,162],[0,0,564,162],[322,422,196,49],[799,222,194,97],[566,0,316,72],[566,74,316,72],[566,148,316,72],[481,222,316,72],[481,296,316,72],[0,328,316,72],[318,370,320,50],[640,370,320,50],[0,422,320,50]]}
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



(lib.CachedBmp_18 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5copy = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.gtext12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.7,54);


(lib.g_txtSFUMedicalSchool = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,54);


(lib.g_study_dr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// B_W
	this.instance = new lib.Bitmap5copy();

	this.instance_1 = new lib.Bitmap7();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.g_SFULogohorizontal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.3333,0.3333);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// icon_copy
	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(72.3,16,0.3333,0.3333);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.7,32.4);


(lib.g_lab = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


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

	// TEXT copy
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,4.15,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(0,4.15,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_11();
	this.instance_2.setTransform(0,4.15,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// TEXT
	this.instance_3 = new lib.CachedBmp_12();
	this.instance_3.setTransform(0,4.15,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_13();
	this.instance_4.setTransform(0,4.15,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_14();
	this.instance_5.setTransform(0,4.15,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0633").s().p("AoOCqIAAlTIQdAAIAAFTg");
	this.shape.setTransform(52.7,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0633").ss(1,1,1).p("AoOipIQdAAIAAFTIwdAAg");
	this.shape_1.setTransform(52.7,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoOCqIAAlTIQdAAIAAFTg");
	this.shape_2.setTransform(52.7,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,107.4,36);


// stage content:
(lib.banner_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {school:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Transition
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.086)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.173)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_2.setTransform(160,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.251)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_3.setTransform(160,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.329)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_4.setTransform(160,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_5.setTransform(160,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.467)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_6.setTransform(160,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.533)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_7.setTransform(160,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.592)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_8.setTransform(160,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.647)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_9.setTransform(160,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.702)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_10.setTransform(160,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.749)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_11.setTransform(160,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.792)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_12.setTransform(160,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.831)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_13.setTransform(160,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.867)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_14.setTransform(160,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_15.setTransform(160,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.929)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_16.setTransform(160,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.953)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_17.setTransform(160,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.973)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_18.setTransform(160,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.988)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_19.setTransform(160,25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_20.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},374).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Transition
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_21.setTransform(160,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(252,252,252,0.118)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_22.setTransform(160,25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(250,250,250,0.227)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_23.setTransform(160,25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(248,248,248,0.329)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_24.setTransform(160,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(246,246,246,0.424)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_25.setTransform(160,25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(244,244,244,0.51)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_26.setTransform(160,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(242,242,242,0.592)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_27.setTransform(160,25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(240,240,240,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_28.setTransform(160,25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(239,239,239,0.733)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_29.setTransform(160,25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(238,238,238,0.792)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_30.setTransform(160,25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(236,236,236,0.843)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_31.setTransform(160,25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(235,235,235,0.89)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_32.setTransform(160,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(235,235,235,0.929)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_33.setTransform(160,25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(234,234,234,0.961)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_34.setTransform(160,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(233,233,233,0.984)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_35.setTransform(160,25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E9E9E9").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_36.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},149).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).wait(230));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_87 = new cjs.Graphics().p("A4/D6IAAnzMAwrAAAIBUAAIAAC4IAAE7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_graphics_87,x:160,y:25}).wait(308));

	// Text_SFU_Medical_School
	this.instance = new lib.g_txtSFUMedicalSchool("synched",0);
	this.instance.setTransform(-347.8,78.2,1,1,0,0,0,-162.3,77);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({x:-165.6},18,cjs.Ease.get(1)).to({_off:true},60).wait(230));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("A4/D6IAAnzMAx/AAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:160,y:25}).wait(394));

	// Red_Bg__Animate_
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0633").s().p("AgJD6IAAnzIATAAIAAHzg");
	this.shape_37.setTransform(-2,25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0633").s().p("AhSD6IAAnzIClAAIAAHzg");
	this.shape_38.setTransform(5.575,25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC0633").s().p("AiZD6IAAnzIEzAAIAAHzg");
	this.shape_39.setTransform(12.85,25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0633").s().p("AjcD6IAAnzIG5AAIAAHzg");
	this.shape_40.setTransform(19.825,25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC0633").s().p("AkdD6IAAnzII7AAIAAHzg");
	this.shape_41.setTransform(26.475,25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC0633").s().p("AlaD6IAAnzIK1AAIAAHzg");
	this.shape_42.setTransform(32.825,25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC0633").s().p("AmVD6IAAnzIMrAAIAAHzg");
	this.shape_43.setTransform(38.85,25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC0633").s().p("AnMD6IAAnzIOZAAIAAHzg");
	this.shape_44.setTransform(44.575,25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC0633").s().p("AoBD6IAAnzIQDAAIAAHzg");
	this.shape_45.setTransform(49.975,25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC0633").s().p("AoyD6IAAnzIRlAAIAAHzg");
	this.shape_46.setTransform(55.075,25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0633").s().p("AphD6IAAnzITDAAIAAHzg");
	this.shape_47.setTransform(59.875,25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC0633").s().p("AqMD6IAAnzIUZAAIAAHzg");
	this.shape_48.setTransform(64.375,25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC0633").s().p("Aq1D6IAAnzIVqAAIAAHzg");
	this.shape_49.setTransform(68.55,25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC0633").s().p("AraD6IAAnzIW1AAIAAHzg");
	this.shape_50.setTransform(72.425,25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC0633").s().p("Ar9D6IAAnzIX7AAIAAHzg");
	this.shape_51.setTransform(75.975,25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC0633").s().p("AscD6IAAnzIY5AAIAAHzg");
	this.shape_52.setTransform(79.225,25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0633").s().p("As5D6IAAnzIZzAAIAAHzg");
	this.shape_53.setTransform(82.175,25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC0633").s().p("AtSD6IAAnzIalAAIAAHzg");
	this.shape_54.setTransform(84.8,25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC0633").s().p("AtpD6IAAnzIbSAAIAAHzg");
	this.shape_55.setTransform(87.1,25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0633").s().p("At8D6IAAnzIb5AAIAAHzg");
	this.shape_56.setTransform(89.15,25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC0633").s().p("AuMD6IAAnzIcaAAIAAHzg");
	this.shape_57.setTransform(90.85,25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC0633").s().p("AuaD6IAAnzIc1AAIAAHzg");
	this.shape_58.setTransform(92.2,25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0633").s().p("AulD6IAAnzIdLAAIAAHzg");
	this.shape_59.setTransform(93.3,25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC0633").s().p("AusD6IAAnzIdZAAIAAHzg");
	this.shape_60.setTransform(94.1,25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0633").s().p("AuxD6IAAnzIdiAAIAAHzg");
	this.shape_61.setTransform(94.55,25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC0633").s().p("AuyD6IAAnzIdlAAIAAHzg");
	this.shape_62.setTransform(94.7,25);

	var maskedShapeInstanceList = [this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},72).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},68).wait(230));

	// SFU_Logo
	this.instance_1 = new lib.g_SFULogohorizontal("single",1);
	this.instance_1.setTransform(20,-32.9,1,1,0,0,0,0.1,0.1);
	this.instance_1._off = true;
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,142,36);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:0.1},17,cjs.Ease.get(0.9)).wait(47).to({startPosition:1},0).to({alpha:0},16).to({_off:true},1).wait(313));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,215,215,215,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 17,cjs.Ease.get(0.9)).wait(47).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 16).wait(313));

	// Photo
	this.instance_2 = new lib.g_study_dr("single",1);
	this.instance_2.setTransform(505,125.5,1,1,0,0,0,485,125.5);
	this.instance_2._off = true;
	var instance_2Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_2];
	this.instance_2.cache(-2,-2,324,54);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({x:485},20,cjs.Ease.get(0.9)).to({_off:true},132).wait(230));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_2).wait(13).to(new cjs.ColorFilter(0,0,0,1,233,233,233,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20,cjs.Ease.get(0.9)).wait(230));

	// Layer_1
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_63.setTransform(160,25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDFDFD").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_64.setTransform(160,25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FCFCFC").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_65.setTransform(160,25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FAFAFA").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_66.setTransform(160,25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8F8F8").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_67.setTransform(160,25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7F7F7").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_68.setTransform(160,25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F5F5F5").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_69.setTransform(160,25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F3F3F3").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_70.setTransform(160,25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F1F1F1").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_71.setTransform(160,25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F0F0F0").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_72.setTransform(160,25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EEEEEE").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_73.setTransform(160,25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#ECECEC").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_74.setTransform(160,25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EBEBEB").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_75.setTransform(160,25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E9E9E9").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_76.setTransform(160,25);

	var maskedShapeInstanceList = [this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63}]}).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[]},152).wait(230));

	// CTA
	this.instance_3 = new lib.btn_CTA();
	this.instance_3.setTransform(22,8);
	this.instance_3._off = true;
	var instance_3Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_3];
	this.instance_3.cache(-3,-3,111,40);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.btn_CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(306).to({_off:false},0).to({x:32},18,cjs.Ease.get(0.9)).wait(71));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_3).wait(306).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18,cjs.Ease.get(0.9)).wait(71));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_165 = new cjs.Graphics().p("A4/D6IAAnzMAx/AAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(165).to({graphics:mask_2_graphics_165,x:160,y:25}).wait(230));

	// Text
	this.instance_4 = new lib.gtext12("synched",0);
	this.instance_4.setTransform(-306.7,44.25,1,1,0,0,0,-144.7,45);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(188).to({_off:false},0).to({x:-147.45},19,cjs.Ease.get(0.9)).wait(71).to({startPosition:0},0).to({x:-306.7},25,cjs.Ease.get(1)).wait(92));

	// REd_Bg
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0633").s().p("AgdD7IAAn1IAiAAIAADrIAZAAIAAEKg");
	this.shape_77.setTransform(-5.05,25.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC0633").s().p("AhjD7IAAn1ICYAAIAADrIAvAAIAAEKg");
	this.shape_78.setTransform(2.775,25.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0633").s().p("AinD7IAAn1IEIAAIAADqIBHAAIAAELg");
	this.shape_79.setTransform(10.225,25.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC0633").s().p("AjnD7IAAn1IFzAAIAADqIBcAAIAAELg");
	this.shape_80.setTransform(17.275,25.075);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0633").s().p("AkjD7IAAn1IHXAAIAADqIBwAAIAAELg");
	this.shape_81.setTransform(23.95,25.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC0633").s().p("AlcD7IAAn1II2AAIAADpICDAAIAAEMg");
	this.shape_82.setTransform(30.25,25.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC0633").s().p("AmSD7IAAn1IKQAAIAADpICVAAIAAEMg");
	this.shape_83.setTransform(36.175,25.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC0633").s().p("AnED6IAAn0ILjAAIAADoICmAAIAAEMg");
	this.shape_84.setTransform(41.725,25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC0633").s().p("AnyD6IAAn0IMwAAIAADoIC1AAIAAEMg");
	this.shape_85.setTransform(46.875,25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC0633").s().p("AoeD6IAAn0IN5AAIAADoIDEAAIAAEMg");
	this.shape_86.setTransform(51.65,25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC0633").s().p("ApFD6IAAnzIO6AAIAADnIDRAAIAAEMg");
	this.shape_87.setTransform(56.025,24.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC0633").s().p("ApqD6IAAnzIP3AAIAADnIDdAAIAAEMg");
	this.shape_88.setTransform(60.05,24.975);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC0633").s().p("AqKD6IAAnzIQtAAIAADmIDoAAIAAENg");
	this.shape_89.setTransform(63.675,24.975);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC0633").s().p("AqoD6IAAnzIReAAIAADmIDzAAIAAENg");
	this.shape_90.setTransform(66.925,24.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC0633").s().p("ArCD6IAAnzISJAAIAADmID8AAIAAENg");
	this.shape_91.setTransform(69.775,24.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC0633").s().p("ArYD6IAAnzISvAAIAADmIECAAIAAENg");
	this.shape_92.setTransform(72.25,24.95);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC0633").s().p("ArrD6IAAnzITOAAIAADmIEJAAIAAENg");
	this.shape_93.setTransform(74.35,24.95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CC0633").s().p("Ar7D6IAAnzIToAAIAADlIEPAAIAAEOg");
	this.shape_94.setTransform(76.075,24.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC0633").s().p("AsHD6IAAnzIT8AAIAADlIETAAIAAEOg");
	this.shape_95.setTransform(77.425,24.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CC0633").s().p("AsPD6IAAnzIUKAAIAADlIEVAAIAAEOg");
	this.shape_96.setTransform(78.375,24.95);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CC0633").s().p("AsVD6IAAnzIUTAAIAADlIEXAAIAAEOg");
	this.shape_97.setTransform(78.95,24.95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CC0633").s().p("AsWD6IAAnzIUWAAIAADlIEXAAIAAEOg");
	this.shape_98.setTransform(79.125,24.95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CC0633").s().p("AriD6IAAnzIS/AAIAADmIEGAAIAAENg");
	this.shape_99.setTransform(73.4,24.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CC0633").s().p("AqwD6IAAnzIRsAAIAADmID1AAIAAENg");
	this.shape_100.setTransform(67.875,24.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CC0633").s().p("AqAD6IAAnzIQcAAIAADmIDlAAIAAENg");
	this.shape_101.setTransform(62.525,24.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CC0633").s().p("ApSD6IAAnzIPPAAIAADnIDWAAIAAEMg");
	this.shape_102.setTransform(57.425,24.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CC0633").s().p("AolD6IAAn0IOFAAIAADoIDGAAIAAEMg");
	this.shape_103.setTransform(52.475,25);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CC0633").s().p("An6D6IAAn0IM9AAIAADoIC4AAIAAEMg");
	this.shape_104.setTransform(47.725,25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CC0633").s().p("AnRD6IAAn0IL5AAIAADoICqAAIAAEMg");
	this.shape_105.setTransform(43.225,25);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CC0633").s().p("AmqD6IAAn0IK4AAIAADpICdAAIAAELg");
	this.shape_106.setTransform(38.9,25);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CC0633").s().p("AmFD7IAAn1IJ6AAIAADpICRAAIAAEMg");
	this.shape_107.setTransform(34.75,25.05);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CC0633").s().p("AlhD7IAAn1II+AAIAADpICFAAIAAEMg");
	this.shape_108.setTransform(30.8,25.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CC0633").s().p("Ak/D7IAAn1IIGAAIAADpIB5AAIAAEMg");
	this.shape_109.setTransform(27.075,25.05);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CC0633").s().p("AkfD7IAAn1IHRAAIAADqIBuAAIAAELg");
	this.shape_110.setTransform(23.525,25.05);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CC0633").s().p("AkBD7IAAn1IGeAAIAADpIBlAAIAAEMg");
	this.shape_111.setTransform(20.2,25.075);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CC0633").s().p("AjlD7IAAn1IFvAAIAADqIBcAAIAAELg");
	this.shape_112.setTransform(17.075,25.075);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CC0633").s().p("AjKD7IAAn1IFDAAIAADqIBSAAIAAELg");
	this.shape_113.setTransform(14.125,25.075);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CC0633").s().p("AixD7IAAn1IEZAAIAADqIBKAAIAAELg");
	this.shape_114.setTransform(11.375,25.075);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CC0633").s().p("AiaD7IAAn1IDzAAIAADqIBCAAIAAELg");
	this.shape_115.setTransform(8.825,25.075);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CC0633").s().p("AiFD7IAAn1IDQAAIAADqIA7AAIAAELg");
	this.shape_116.setTransform(6.5,25.075);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CC0633").s().p("AhyD7IAAn1ICwAAIAADrIA1AAIAAEKg");
	this.shape_117.setTransform(4.375,25.075);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#CC0633").s().p("AhgD7IAAn1ICSAAIAADrIAvAAIAAEKg");
	this.shape_118.setTransform(2.425,25.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CC0633").s().p("AhQD7IAAn1IB4AAIAADrIApAAIAAEKg");
	this.shape_119.setTransform(0.675,25.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CC0633").s().p("AhCD7IAAn1IBhAAIAADrIAkAAIAAEKg");
	this.shape_120.setTransform(-0.875,25.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CC0633").s().p("Ag2D7IAAn1IBNAAIAADrIAgAAIAAEKg");
	this.shape_121.setTransform(-2.225,25.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CC0633").s().p("AgsD7IAAn1IA7AAIAADrIAeAAIAAEKg");
	this.shape_122.setTransform(-3.35,25.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CC0633").s().p("AgjD7IAAn1IAtAAIAADrIAaAAIAAEKg");
	this.shape_123.setTransform(-4.325,25.1);

	var maskedShapeInstanceList = [this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_77}]},178).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},85).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_77}]},1).wait(85));

	// Pic_
	this.instance_5 = new lib.g_lab("synched",0);
	this.instance_5._off = true;
	var instance_5Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_4];
	this.instance_5.cache(-2,-2,324,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(165).to({_off:false},0).to({startPosition:0},18).wait(212));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_4).wait(165).to(new cjs.ColorFilter(0,0,0,1,239,239,239,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18).wait(212));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-2, y:-2, w:142, h:36});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:142, h:36});
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:18, x:-2, y:-2, w:142, h:36});
	this.filterCacheList.push({instance: this.instance_1, startFrame:19, endFrame:65, x:-2, y:-2, w:142, h:36});
	this.filterCacheList.push({instance: this.instance_1, startFrame:66, endFrame:81, x:-2, y:-2, w:142, h:36});
	this.filterCacheList.push({instance: this.instance_1, startFrame:82, endFrame:82, x:-2, y:-2, w:142, h:36});
	this.filterCacheList.push({instance: this.instance_1, startFrame:165, endFrame:395, x:-2, y:-2, w:142, h:36});
	this.filterCacheList.push({instance: this.instance_2, startFrame:13, endFrame:13, x:-2, y:-2, w:324, h:54});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:324, h:54});
	this.filterCacheList.push({instance: this.instance_2, startFrame:14, endFrame:33, x:-2, y:-2, w:324, h:54});
	this.filterCacheList.push({instance: this.instance_2, startFrame:34, endFrame:165, x:-2, y:-2, w:324, h:54});
	this.filterCacheList.push({instance: this.instance_2, startFrame:165, endFrame:395, x:-2, y:-2, w:324, h:54});
	this.filterCacheList.push({instance: this.instance_3, startFrame:306, endFrame:306, x:-3, y:-3, w:111, h:40});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-3, y:-3, w:111, h:40});
	this.filterCacheList.push({instance: this.instance_3, startFrame:307, endFrame:324, x:-3, y:-3, w:111, h:40});
	this.filterCacheList.push({instance: this.instance_3, startFrame:324, endFrame:395, x:-3, y:-3, w:111, h:40});
	this.filterCacheList.push({instance: this.instance_5, startFrame:165, endFrame:165, x:-2, y:-2, w:324, h:54});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-2, y:-2, w:324, h:54});
	this.filterCacheList.push({instance: this.instance_5, startFrame:166, endFrame:183, x:-2, y:-2, w:324, h:54});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160,25,160,25);
// library properties:
lib.properties = {
	id: 'B8909188F943443AB461DBFA97228CEF',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_320x50_atlas_1.png", id:"banner_320x50_atlas_1"}
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
an.compositions['B8909188F943443AB461DBFA97228CEF'] = {
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