(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_320x50_atlas_1", frames: [[0,0,529,162],[531,0,360,162],[0,164,413,97],[794,164,198,53],[737,219,198,53],[0,263,198,53],[200,263,198,53],[400,268,198,53],[600,274,198,53],[415,216,320,50],[415,164,377,50]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.initialize(ss["banner_320x50_atlas_1"]);
	this.gotoAndStop(10);
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.4,54);


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
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,54);


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

	// icon_copy
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.3333,0.3333);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.7,32.4);


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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,1.7,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,1.7,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0,1.7,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// TEXT
	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(0,1.7,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(0,1.7,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(0,1.7,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0633").s().p("AlJBsIAAjXIKTAAIAADXg");
	this.shape.setTransform(33,10.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0633").ss(1,1,1).p("AlJhrIKTAAIAADXIqTAAg");
	this.shape_1.setTransform(33,10.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlJBsIAAjXIKTAAIAADXg");
	this.shape_2.setTransform(33,10.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,68,23.5);


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

	// Logo
	this.instance = new lib.g_SFULogohorizontal("single",1);
	this.instance.setTransform(20,0.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// B_W
	this.instance_1 = new lib.Bitmap17();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,377,50);


// stage content:
(lib.banner_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {school:173};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Transition
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(75,75,75,0.118)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(97,97,97,0.227)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_2.setTransform(160,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(118,118,118,0.329)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_3.setTransform(160,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(137,137,137,0.424)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_4.setTransform(160,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(155,155,155,0.51)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_5.setTransform(160,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(172,172,172,0.592)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_6.setTransform(160,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(187,187,187,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_7.setTransform(160,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(200,200,200,0.733)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_8.setTransform(160,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(213,213,213,0.792)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_9.setTransform(160,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(223,223,223,0.843)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_10.setTransform(160,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(233,233,233,0.89)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_11.setTransform(160,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(240,240,240,0.929)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_12.setTransform(160,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(247,247,247,0.961)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_13.setTransform(160,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(252,252,252,0.984)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_14.setTransform(160,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_15.setTransform(160,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.898)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_16.setTransform(160,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.8)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_17.setTransform(160,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.706)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_18.setTransform(160,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.62)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_19.setTransform(160,25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.541)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_20.setTransform(160,25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.463)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_21.setTransform(160,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.396)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_22.setTransform(160,25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.329)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_23.setTransform(160,25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.271)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_24.setTransform(160,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.22)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_25.setTransform(160,25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.169)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_26.setTransform(160,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.129)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_27.setTransform(160,25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.09)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_28.setTransform(160,25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.059)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_29.setTransform(160,25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.035)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_30.setTransform(160,25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.016)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_31.setTransform(160,25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_32.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},142).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},3).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},1).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(142).to({_off:false},0).wait(12).to({_off:true},1).wait(207));

	// Transition
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(51,51,51,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_33.setTransform(160,25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(75,75,75,0.118)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_34.setTransform(160,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(97,97,97,0.227)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_35.setTransform(160,25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(118,118,118,0.329)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_36.setTransform(160,25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(137,137,137,0.424)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_37.setTransform(160,25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(155,155,155,0.51)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_38.setTransform(160,25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(172,172,172,0.592)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_39.setTransform(160,25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(187,187,187,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_40.setTransform(160,25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(200,200,200,0.733)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_41.setTransform(160,25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(213,213,213,0.792)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_42.setTransform(160,25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(223,223,223,0.843)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_43.setTransform(160,25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(233,233,233,0.89)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_44.setTransform(160,25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(240,240,240,0.929)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_45.setTransform(160,25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(247,247,247,0.961)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_46.setTransform(160,25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(252,252,252,0.984)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_47.setTransform(160,25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_48.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33}]},345).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},1).wait(1));

	// CTA
	this.instance = new lib.btn_CTA();
	this.instance.setTransform(282.55,29.05,1,1,0,0,0,33,10.8);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-3,-3,72,28);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249).to({_off:false},0).to({y:25.05},18,cjs.Ease.get(0.9)).to({_off:true},94).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(249).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18,cjs.Ease.get(0.9)).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_236 = new cjs.Graphics().p("A4/D6IAAnzMAwrAAAIBUAAIAAC4IAAE7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(236).to({graphics:mask_graphics_236,x:160,y:25}).wait(126));

	// Text_SFU_Medical_School
	this.instance_1 = new lib.g_txtSFUMedicalSchool("synched",0);
	this.instance_1.setTransform(-290.3,76.6,1,1,0,0,0,-162.3,77);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236).to({_off:false},0).to({x:-165},18,cjs.Ease.get(1)).to({_off:true},107).wait(1));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_173 = new cjs.Graphics().p("A4/D6IAAnzMAx/AAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(173).to({graphics:mask_1_graphics_173,x:160,y:25}).wait(189));

	// Red_Bg__Animate_
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC0633").s().p("Ag0D6IAAnzIBpAAIAAEPIgiAAIAADkg");
	this.shape_49.setTransform(-10.75,25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC0633").s().p("AhcD6IAAnzIC5AAIAAEPIhCAAIAADkg");
	this.shape_50.setTransform(-5.475,25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC0633").s().p("AiED6IAAnzIEJAAIAAEPIhiAAIAADkg");
	this.shape_51.setTransform(-0.4,25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC0633").s().p("AipD6IAAnzIFTAAIAAEPIiBAAIAADkg");
	this.shape_52.setTransform(4.5,25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0633").s().p("AjND6IAAnzIGbAAIAAEPIidAAIAADkg");
	this.shape_53.setTransform(9.15,25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC0633").s().p("AjvD6IAAnzIHfAAIAAEPIi5AAIAADkg");
	this.shape_54.setTransform(13.6,25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC0633").s().p("AkQD6IAAnzIIhAAIAAEPIjTAAIAADkg");
	this.shape_55.setTransform(17.85,25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0633").s().p("AkwD6IAAnzIJhAAIAAEPIjuAAIAADkg");
	this.shape_56.setTransform(21.9,25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC0633").s().p("AlND6IAAnzIKbAAIAAEPIkFAAIAADkg");
	this.shape_57.setTransform(25.725,25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC0633").s().p("AlpD6IAAnzILTAAIAAEPIkcAAIAADkg");
	this.shape_58.setTransform(29.35,25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0633").s().p("AmDD6IAAnzIMHAAIAAEPIkxAAIAADkg");
	this.shape_59.setTransform(32.775,25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC0633").s().p("AmcD6IAAnzIM5AAIAAEPIlFAAIAADkg");
	this.shape_60.setTransform(35.975,25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0633").s().p("AmzD6IAAnzINnAAIAAEPIlYAAIAADkg");
	this.shape_61.setTransform(38.975,25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC0633").s().p("AnJD6IAAnzIOTAAIAAEPIlpAAIAADkg");
	this.shape_62.setTransform(41.8,25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC0633").s().p("AndD6IAAnzIO7AAIAAEPIl6AAIAADkg");
	this.shape_63.setTransform(44.375,25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC0633").s().p("AnvD6IAAnzIPfAAIAAEPImIAAIAADkg");
	this.shape_64.setTransform(46.775,25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC0633").s().p("AoAD6IAAnzIQBAAIAAEPImXAAIAADkg");
	this.shape_65.setTransform(48.95,25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC0633").s().p("AoPD6IAAnzIQfAAIAAEPImiAAIAADkg");
	this.shape_66.setTransform(50.925,25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC0633").s().p("AodD6IAAnzIQ7AAIAAEPImuAAIAADkg");
	this.shape_67.setTransform(52.675,25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CC0633").s().p("AopD6IAAnzIRTAAIAAEPIm3AAIAADkg");
	this.shape_68.setTransform(54.225,25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0633").s().p("AozD6IAAnzIRnAAIAAEPInAAAIAADkg");
	this.shape_69.setTransform(55.575,25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CC0633").s().p("Ao8D6IAAnzIR5AAIAAEPInGAAIAADkg");
	this.shape_70.setTransform(56.7,25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC0633").s().p("ApDD6IAAnzISHAAIAAEPInMAAIAADkg");
	this.shape_71.setTransform(57.625,25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CC0633").s().p("ApJD6IAAnzISTAAIAAEPInRAAIAADkg");
	this.shape_72.setTransform(58.375,25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC0633").s().p("ApND6IAAnzISbAAIAAEPInVAAIAADkg");
	this.shape_73.setTransform(58.875,25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC0633").s().p("ApPD6IAAnzISfAAIAAEPInWAAIAADkg");
	this.shape_74.setTransform(59.2,25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC0633").s().p("ApQD6IAAnzIShAAIAAEPInXAAIAADkg");
	this.shape_75.setTransform(59.3,25);

	var maskedShapeInstanceList = [this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49}]},221).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[]},114).wait(1));

	// SFU_Logo
	this.instance_2 = new lib.g_SFULogohorizontal("single",1);
	this.instance_2.setTransform(20,0.1,1,1,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(192).to({_off:false},0).wait(22).to({startPosition:1},0).to({alpha:0},16).to({_off:true},1).wait(131));

	// Photo
	this.instance_3 = new lib.g_study_dr("single",0);
	this.instance_3.setTransform(485,125.5,1,1,0,0,0,485,125.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(173).to({_off:false},0).wait(19).to({startPosition:1},0).wait(32).to({startPosition:1},0).to({x:439.4},20,cjs.Ease.get(0.8)).to({_off:true},117).wait(1));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A4/D6IAAnzMAx/AAAIAAHzg");
	mask_2.setTransform(160,25);

	// Text
	this.instance_4 = new lib.gtext12("synched",0);
	this.instance_4.setTransform(-319.2,44.25,1,1,0,0,0,-144.7,45);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).to({x:-147.45},19,cjs.Ease.get(0.9)).to({_off:true},76).wait(192));

	// REd_Bg
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC0633").s().p("AgdD7IAAn1IAiAAIAADrIAZAAIAAEKg");
	this.shape_76.setTransform(-5.05,25.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0633").s().p("AheD7IAAn1IC9AAIAADuIgRAAIAAEHg");
	this.shape_77.setTransform(2.275,25.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC0633").s().p("AioD7IAAn1IFRAAIAADxIg5AAIAAEEg");
	this.shape_78.setTransform(10.35,25.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0633").s().p("AjuD7IAAn1IHdAAIAAD0IheAAIAAEBg");
	this.shape_79.setTransform(18.025,25.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC0633").s().p("AkwD7IAAn1IJiAAIAAD3IiCAAIAAD+g");
	this.shape_80.setTransform(25.3,25.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0633").s().p("AlvD7IAAn1ILfAAIAAD6IijAAIAAD7g");
	this.shape_81.setTransform(32.15,25.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC0633").s().p("AmqD7IAAn1INVAAIAAD7IjDAAIAAD6g");
	this.shape_82.setTransform(38.575,25.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC0633").s().p("AnhD6IAAn0IPDAAIAAD+IjgAAIAAD2g");
	this.shape_83.setTransform(44.625,25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC0633").s().p("AoUD6IAAn0IQpAAIAAEAIj7AAIAAD0g");
	this.shape_84.setTransform(50.225,25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC0633").s().p("ApDD6IAAn0ISHAAIAAEBIkUAAIAADzg");
	this.shape_85.setTransform(55.425,25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC0633").s().p("ApvD6IAAnzITfAAIAAECIksAAIAADxg");
	this.shape_86.setTransform(60.175,24.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC0633").s().p("AqXD6IAAnzIUuAAIAAEEIlAAAIAADvg");
	this.shape_87.setTransform(64.55,24.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC0633").s().p("Aq6D6IAAnzIV1AAIAAEFIlTAAIAADug");
	this.shape_88.setTransform(68.5,24.975);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC0633").s().p("ArbD6IAAnzIW3AAIAAEGIlmAAIAADtg");
	this.shape_89.setTransform(72.025,24.975);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC0633").s().p("Ar3D6IAAnzIXvAAIAAEIIl0AAIAADrg");
	this.shape_90.setTransform(75.125,24.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC0633").s().p("AsQD6IAAnzIYhAAIAAEJImCAAIAADqg");
	this.shape_91.setTransform(77.825,24.95);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC0633").s().p("AslD6IAAnzIZKAAIAAEKImMAAIAADpg");
	this.shape_92.setTransform(80.1,24.95);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC0633").s().p("As2D6IAAnzIZtAAIAAELImWAAIAADog");
	this.shape_93.setTransform(81.975,24.95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CC0633").s().p("AtDD6IAAnzIaHAAIAAELImdAAIAADog");
	this.shape_94.setTransform(83.45,24.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC0633").s().p("AtMD6IAAnzIaZAAIAAELImiAAIAADog");
	this.shape_95.setTransform(84.475,24.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CC0633").s().p("AtSD6IAAnzIalAAIAAEMImlAAIAADng");
	this.shape_96.setTransform(85.1,24.95);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CC0633").s().p("AtUD6IAAnzIapAAIAAEMImmAAIAADng");
	this.shape_97.setTransform(85.3,24.95);

	var maskedShapeInstanceList = [this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_76}]},65).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[]},84).wait(192));

	// SFU_Logo
	this.instance_5 = new lib.g_SFULogohorizontal("single",1);
	this.instance_5.setTransform(20,-48.95,1,1,0,0,0,0.1,0);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({regY:0.1,y:0.1},19,cjs.Ease.get(1)).wait(25).to({startPosition:1},0).to({alpha:0},18).to({_off:true},1).wait(287));

	// Mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("A4/AIIAAgPMAx/AAAIAAAPg");
	var mask_3_graphics_1 = new cjs.Graphics().p("A4/AiIAAhDMAx/AAAIAABDg");
	var mask_3_graphics_2 = new cjs.Graphics().p("A4/A7IAAh1MAx/AAAIAAB1g");
	var mask_3_graphics_3 = new cjs.Graphics().p("A4/BSIAAijMAx/AAAIAACjg");
	var mask_3_graphics_4 = new cjs.Graphics().p("A4/BnIAAjOMAx/AAAIAADOg");
	var mask_3_graphics_5 = new cjs.Graphics().p("A4/B8IAAj3MAx/AAAIAAD3g");
	var mask_3_graphics_6 = new cjs.Graphics().p("A4/CPIAAkdMAx/AAAIAAEdg");
	var mask_3_graphics_7 = new cjs.Graphics().p("A4/CgIAAk/MAx/AAAIAAE/g");
	var mask_3_graphics_8 = new cjs.Graphics().p("A4/CvIAAleMAx/AAAIAAFeg");
	var mask_3_graphics_9 = new cjs.Graphics().p("A4/C9IAAl5MAx/AAAIAAF5g");
	var mask_3_graphics_10 = new cjs.Graphics().p("A4/DKIAAmTMAx/AAAIAAGTg");
	var mask_3_graphics_11 = new cjs.Graphics().p("A4/DWIAAmrMAx/AAAIAAGrg");
	var mask_3_graphics_12 = new cjs.Graphics().p("A4/DfIAAm9MAx/AAAIAAG9g");
	var mask_3_graphics_13 = new cjs.Graphics().p("A4/DnIAAnNMAx/AAAIAAHNg");
	var mask_3_graphics_14 = new cjs.Graphics().p("A4/DuIAAnbMAx/AAAIAAHbg");
	var mask_3_graphics_15 = new cjs.Graphics().p("A4/DzIAAnlMAx/AAAIAAHlg");
	var mask_3_graphics_16 = new cjs.Graphics().p("A4/D3IAAntMAx/AAAIAAHtg");
	var mask_3_graphics_17 = new cjs.Graphics().p("A4/D5IAAnxMAx/AAAIAAHxg");
	var mask_3_graphics_18 = new cjs.Graphics().p("A4/D6IAAnzMAx/AAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:160,y:-3.2}).wait(1).to({graphics:mask_3_graphics_1,x:160,y:-0.15}).wait(1).to({graphics:mask_3_graphics_2,x:160,y:2.725}).wait(1).to({graphics:mask_3_graphics_3,x:160,y:5.4}).wait(1).to({graphics:mask_3_graphics_4,x:160,y:7.95}).wait(1).to({graphics:mask_3_graphics_5,x:160,y:10.275}).wait(1).to({graphics:mask_3_graphics_6,x:160,y:12.45}).wait(1).to({graphics:mask_3_graphics_7,x:160,y:14.475}).wait(1).to({graphics:mask_3_graphics_8,x:160,y:16.3}).wait(1).to({graphics:mask_3_graphics_9,x:160,y:17.95}).wait(1).to({graphics:mask_3_graphics_10,x:160,y:19.425}).wait(1).to({graphics:mask_3_graphics_11,x:160,y:20.75}).wait(1).to({graphics:mask_3_graphics_12,x:160,y:21.875}).wait(1).to({graphics:mask_3_graphics_13,x:160,y:22.825}).wait(1).to({graphics:mask_3_graphics_14,x:160,y:23.6}).wait(1).to({graphics:mask_3_graphics_15,x:160,y:24.225}).wait(1).to({graphics:mask_3_graphics_16,x:160,y:24.65}).wait(1).to({graphics:mask_3_graphics_17,x:160,y:24.925}).wait(1).to({graphics:mask_3_graphics_18,x:160,y:25}).wait(344));

	// Pic_Dad_Girl
	this.instance_6 = new lib.Bitmap11();
	this.instance_6.setTransform(1,0);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},170).wait(192));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:249, endFrame:249, x:-3, y:-3, w:72, h:28});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-3, y:-3, w:72, h:28});
	this.filterCacheList.push({instance: this.instance, startFrame:250, endFrame:267, x:-3, y:-3, w:72, h:28});
	this.filterCacheList.push({instance: this.instance, startFrame:268, endFrame:361, x:-3, y:-3, w:72, h:28});
	this.filterCacheList.push({instance: this.instance, startFrame:361, endFrame:362, x:-3, y:-3, w:72, h:28});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);
// library properties:
lib.properties = {
	id: 'B8909188F943443AB461DBFA97228CEF',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_320x50_atlas_1.png?1695052987201", id:"banner_320x50_atlas_1"}
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