(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[344,602,336,196],[0,474,342,338],[268,0,328,348],[682,602,281,229],[0,814,370,80],[372,833,370,80],[0,896,370,80],[598,0,160,600],[0,0,266,472]]}
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



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11copy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.pic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap11copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,472);


(lib.g_title_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,98);


(lib.g_title_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,169);


(lib.g_title_1_B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,174);


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

	// FlashAICB
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(3.55,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtjKBIAA0BIbHAAIAAUBg");
	this.shape.setTransform(75.1624,64.1,1.1577,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,0,201,128.2);


(lib.g_pic00 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Bitmap10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,1.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(0,1.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_11();
	this.instance_2.setTransform(0,1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(2));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0633").s().p("AucDkIAAnHIc5AAIAAHHg");
	this.shape.setTransform(92.5,22.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0633").ss(1,1,1).p("AucjjIc5AAIAAHHI85AAg");
	this.shape_1.setTransform(92.5,22.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AucDkIAAnHIc5AAIAAHHg");
	this.shape_2.setTransform(92.5,22.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,187,47.6);


(lib.g_pic04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Tomato
	this.instance = new lib.pic("synched",0);
	this.instance.setTransform(128.9,705.1,1,1,0,180,0,128.9,236);

	this.instance_1 = new lib.pic("synched",0);
	this.instance_1.setTransform(128.9,236,1,1,0,0,0,128.9,236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,941.1);


// stage content:
(lib.Farmer_160x600 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(80,300);

	// Mask_Color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.102)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_2.setTransform(80,300);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.29)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_3.setTransform(80,300);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.376)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_4.setTransform(80,300);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.459)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_5.setTransform(80,300);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.533)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_6.setTransform(80,300);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.6)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_7.setTransform(80,300);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.667)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_8.setTransform(80,300);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.722)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_9.setTransform(80,300);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.776)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_10.setTransform(80,300);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.824)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_11.setTransform(80,300);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.863)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_12.setTransform(80,300);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_13.setTransform(80,300);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.929)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_14.setTransform(80,300);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.957)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_15.setTransform(80,300);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.976)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_16.setTransform(80,300);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.988)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_17.setTransform(80,300);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.996)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_18.setTransform(80,300);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_19.setTransform(80,300);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},320).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(2));

	// Mask_Color
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_20.setTransform(80,300);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.102)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_21.setTransform(80,300);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.2)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_22.setTransform(80,300);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.29)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_23.setTransform(80,300);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.376)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_24.setTransform(80,300);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.459)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_25.setTransform(80,300);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.533)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_26.setTransform(80,300);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.6)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_27.setTransform(80,300);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.667)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_28.setTransform(80,300);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.722)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_29.setTransform(80,300);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.776)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_30.setTransform(80,300);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.824)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_31.setTransform(80,300);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.863)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_32.setTransform(80,300);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_33.setTransform(80,300);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.929)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_34.setTransform(80,300);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.957)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_35.setTransform(80,300);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.976)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_36.setTransform(80,300);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.988)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_37.setTransform(80,300);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.996)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_38.setTransform(80,300);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_39.setTransform(80,300);

	var maskedShapeInstanceList = [this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},108).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).to({state:[]},212).wait(1));

	// Logo_SOC
	this.instance = new lib.g_SFU_SOC_Logo("single",1);
	this.instance.setTransform(19.95,-92.5,0.8,0.8);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-27,-2,205,132);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({y:0},23,cjs.Ease.get(0.8)).to({_off:true},81).wait(1).to({_off:false,alpha:0},0).to({alpha:1},19,cjs.Ease.get(0.9)).to({_off:true},192).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(24).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(0.8)).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(20));

	// btn_CTA
	this.instance_1 = new lib.btn_CTA();
	this.instance_1.setTransform(-12,526.45);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-3,-3,191,52);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_CTA(), 3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(259).to({_off:false},0).to({y:514.45},14,cjs.Ease.get(1)).to({_off:true},67).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(259).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 14,cjs.Ease.get(1)).wait(1));

	// Text_3
	this.instance_2 = new lib.g_title_3("synched",0);
	this.instance_2.setTransform(-52.45,434.15,1,1,0,0,0,111.3,31.4);
	this.instance_2._off = true;
	var instance_2Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-2,-2,172,102);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(241).to({_off:false},0).to({x:108.55},14,cjs.Ease.get(0.8)).to({_off:true},85).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(241).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 14,cjs.Ease.get(0.8)).wait(1));

	// Text_3_Bg
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaHVIAAupIAbAAIAAEnIAaADIAAFIIAAAPIgkAAIAAEog");
	this.shape_40.setTransform(-3.225,449.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhrHVIAAupICPAAIAAEnIBHADIAAFXIhTAAIAAEog");
	this.shape_41.setTransform(5.3,449.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ai2HVIAAupID8AAIAAEnIBxADIAAFXIh+AAIAAEog");
	this.shape_42.setTransform(13.375,449.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Aj+HVIAAupIFjAAIAAEnICaADIAAFXIioAAIAAEog");
	this.shape_43.setTransform(21,449.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AlBHVIAAupIHEAAIAAEnIC/ADIAAFXIjOAAIAAEog");
	this.shape_44.setTransform(28.15,449.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AmAHVIAAupIIeAAIAAEnIDjADIAAFXIjyAAIAAEog");
	this.shape_45.setTransform(34.85,449.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Am6HVIAAupIJyAAIAAEnIEDADIAAFXIkTAAIAAEog");
	this.shape_46.setTransform(41.1,449.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AnxHVIAAupILAAAIAAEnIEjADIAAFXIkzAAIAAEog");
	this.shape_47.setTransform(46.9,449.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AojHVIAAupIMIAAIAAEnIE/ADIAAFXIlQAAIAAEog");
	this.shape_48.setTransform(52.2,449.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ApRHVIAAupINKAAIAAEnIFZADIAAFXIlqAAIAAEog");
	this.shape_49.setTransform(57.075,449.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ap6HVIAAupIOFAAIAAEnIFwADIAAFXImBAAIAAEog");
	this.shape_50.setTransform(61.475,449.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AqgHVIAAupIO7AAIAAEnIGFADIAAFXImXAAIAAEog");
	this.shape_51.setTransform(65.45,449.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ArAHVIAAupIPqAAIAAEnIGXADIAAFXImpAAIAAEog");
	this.shape_52.setTransform(68.925,449.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ArdHVIAAupIQTAAIAAEnIGoADIAAFXIm6AAIAAEog");
	this.shape_53.setTransform(71.975,449.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ar1HVIAAupIQ1AAIAAEnIG2ADIAAFXInIAAIAAEog");
	this.shape_54.setTransform(74.55,449.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AsJHVIAAupIRSAAIAAEnIHBADIAAFXInTAAIAAEog");
	this.shape_55.setTransform(76.675,449.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AsYHVIAAupIRoAAIAAEnIHJADIAAFXIncAAIAAEog");
	this.shape_56.setTransform(78.325,449.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AskHVIAAupIR5AAIAAEnIHQADIAAFIIAAAPInjAAIAAEog");
	this.shape_57.setTransform(79.525,449.375);

	var maskedShapeInstanceList = [this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},235).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[]},88).wait(1));

	// Text_2
	this.instance_3 = new lib.g_title_2("synched",0);
	this.instance_3.setTransform(-52.45,424.15,1,1,0,0,0,111.3,31.4);
	this.instance_3._off = true;
	var instance_3Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-2,-2,175,173);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(157).to({_off:false},0).to({x:108.55},14,cjs.Ease.get(0.8)).wait(41).to({startPosition:0},0).to({x:-52.45},15,cjs.Ease.get(0.8)).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(157).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 14,cjs.Ease.get(0.8)).wait(41).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 15,cjs.Ease.get(0.8)).wait(113));

	// Text_2_Bg
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhZM2IAA5rIBRAAIAAFAIBiAAIAAFiIAAAPIhGAAIAAEwIAAAPIhPAAIAAEKIAeAAIAAFiIAAAPg");
	this.shape_58.setTransform(-11.975,475.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AiYM2IAA5rIC2AAIAAFAIB7AAIAAFxIhWAAIAAE/IiRAAIAAEKIBSAAIAAFxg");
	this.shape_59.setTransform(-3.925,475.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AjUM2IAA5rIEWAAIAAFAICTAAIAAFxIhlAAIAAE/IjQAAIAAEKICEAAIAAFxg");
	this.shape_60.setTransform(3.775,475.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AkNM2IAA5rIFxAAIAAFAICqAAIAAFxIh0AAIAAE/IkMAAIAAEKIC0AAIAAFxg");
	this.shape_61.setTransform(11.1,475.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AlDM2IAA5rIHJAAIAAFAIC+AAIAAFxIiBAAIAAE/IlFAAIAAEKIDiAAIAAFxg");
	this.shape_62.setTransform(18.025,475.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Al3M2IAA5rIIcAAIAAFAIDTAAIAAFxIiOAAIAAE/Il7AAIAAEKIENAAIAAFxg");
	this.shape_63.setTransform(24.625,475.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AmoM2IAA5rIJrAAIAAFAIDlAAIAAFxIiaAAIAAE/ImuAAIAAEKIE2AAIAAFxg");
	this.shape_64.setTransform(30.85,475.225);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AnVM2IAA5rIK0AAIAAFAID3AAIAAFxIimAAIAAE/IndAAIAAEKIFcAAIAAFxg");
	this.shape_65.setTransform(36.7,475.225);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AoAM2IAA5rIL4AAIAAFAIEJAAIAAFxIiwAAIAAE/IoLAAIAAEKIF/AAIAAFxg");
	this.shape_66.setTransform(42.2,475.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AooM2IAA5rIM5AAIAAFAIEYAAIAAFxIi6AAIAAE/Io1AAIAAEKIGhAAIAAFxg");
	this.shape_67.setTransform(47.3,475.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ApNM2IAA5rIN1AAIAAFAIEmAAIAAFxIjEAAIAAE/IpcAAIAAEKIHBAAIAAFxg");
	this.shape_68.setTransform(52.075,475.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("ApwM2IAA5rIOtAAIAAFAIEzAAIAAFxIjMAAIAAE/IqAAAIAAEKIHeAAIAAFxg");
	this.shape_69.setTransform(56.45,475.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AqPM2IAA5rIPeAAIAAFAIFBAAIAAFxIjVAAIAAE/IqhAAIAAEKIH4AAIAAFxg");
	this.shape_70.setTransform(60.5,475.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AqsM2IAA5rIQNAAIAAFAIFLAAIAAFxIjbAAIAAE/Iq/AAIAAEKIIQAAIAAFxg");
	this.shape_71.setTransform(64.15,475.225);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("ArGM2IAA5rIQ3AAIAAFAIFWAAIAAFxIjjAAIAAE/IraAAIAAEKIImAAIAAFxg");
	this.shape_72.setTransform(67.45,475.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ArcM2IAA5rIRbAAIAAFAIFeAAIAAFxIjoAAIAAE/IryAAIAAEKII5AAIAAFxg");
	this.shape_73.setTransform(70.375,475.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("ArwM2IAA5rIR7AAIAAFAIFmAAIAAFxIjtAAIAAE/IsHAAIAAEKIJKAAIAAFxg");
	this.shape_74.setTransform(72.925,475.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AsBM2IAA5rISWAAIAAFAIFtAAIAAFxIjxAAIAAE/IsZAAIAAEKIJYAAIAAFxg");
	this.shape_75.setTransform(75.15,475.225);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AsQM2IAA5rISuAAIAAFAIFzAAIAAFxIj1AAIAAE/IsoAAIAAEKIJkAAIAAFxg");
	this.shape_76.setTransform(76.975,475.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AsbM2IAA5rITAAAIAAFAIF3AAIAAFxIj4AAIAAE/Is0AAIAAEKIJuAAIAAFxg");
	this.shape_77.setTransform(78.425,475.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AskM2IAA5rITOAAIAAFAIF7AAIAAFiIAAAPIj6AAIAAEwIAAAPIs9AAIAAEKIJ1AAIAAFiIAAAPg");
	this.shape_78.setTransform(79.525,475.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("ArWM2IAA5rIRRAAIAAFAIFbAAIAAFxIjlAAIAAE/IrrAAIAAEKIIzAAIAAFxg");
	this.shape_79.setTransform(69.5,475.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AqMM2IAA5rIPaAAIAAFAIE/AAIAAFxIjUAAIAAE/IqeAAIAAEKIH2AAIAAFxg");
	this.shape_80.setTransform(60.075,475.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("ApGM2IAA5rINqAAIAAFAIEjAAIAAFxIjBAAIAAE/IpWAAIAAEKIG8AAIAAFxg");
	this.shape_81.setTransform(51.2,475.225);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AoGM2IAA5rIMCAAIAAFAIELAAIAAFxIiyAAIAAE/IoRAAIAAEKIGFAAIAAFxg");
	this.shape_82.setTransform(42.925,475.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AnJM2IAA5rIKhAAIAAFAIDzAAIAAFxIikAAIAAE/InRAAIAAEKIFSAAIAAFxg");
	this.shape_83.setTransform(35.2,475.225);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AmSM2IAA5rIJHAAIAAFAIDeAAIAAFxIiVAAIAAE/ImXAAIAAEKIEkAAIAAFxg");
	this.shape_84.setTransform(28.05,475.225);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AleM2IAA5rIH0AAIAAFAIDJAAIAAFxIiIAAIAAE/IlhAAIAAEKID5AAIAAFxg");
	this.shape_85.setTransform(21.475,475.225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AkvM2IAA5rIGpAAIAAFAIC2AAIAAFxIh8AAIAAE/IkwAAIAAEKIDRAAIAAFxg");
	this.shape_86.setTransform(15.475,475.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AkFM2IAA5rIFlAAIAAFAICmAAIAAFxIhxAAIAAE/IkEAAIAAEKICuAAIAAFxg");
	this.shape_87.setTransform(10.025,475.225);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AjfM2IAA5rIEoAAIAAFAICXAAIAAFxIhoAAIAAE/IjbAAIAAEKICNAAIAAFxg");
	this.shape_88.setTransform(5.175,475.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ai9M2IAA5rIDyAAIAAFAICJAAIAAFxIhfAAIAAE/Ii4AAIAAEKIBxAAIAAFxg");
	this.shape_89.setTransform(0.875,475.225);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AigM2IAA5rIDDAAIAAFAIB+AAIAAFxIhYAAIAAE/IiaAAIAAEKIBZAAIAAFxg");
	this.shape_90.setTransform(-2.825,475.225);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AiIM2IAA5rICcAAIAAFAIB1AAIAAFxIhSAAIAAE/IiAAAIAAEKIBFAAIAAFxg");
	this.shape_91.setTransform(-5.975,475.225);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhzM2IAA5rIB6AAIAAFAIBtAAIAAFxIhMAAIAAE/IhrAAIAAEKIA1AAIAAFxg");
	this.shape_92.setTransform(-8.55,475.225);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhkM2IAA5rIBjAAIAAFAIBmAAIAAFxIhJAAIAAE/IhbAAIAAEKIAoAAIAAFxg");
	this.shape_93.setTransform(-10.55,475.225);

	var maskedShapeInstanceList = [this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58}]},148).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},48).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_58}]},1).to({state:[]},1).to({state:[]},107).wait(1));

	// Photo_4
	this.instance_4 = new lib.g_pic04("synched",0);
	this.instance_4.setTransform(148.9,598.1,0.8264,0.8264,0,0,0,178.8,600.1);
	this.instance_4._off = true;
	var instance_4Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-2,-2,270,945);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(127).to({_off:false},0).to({x:98.9},27,cjs.Ease.get(0.8)).to({_off:true},186).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(127).to(new cjs.ColorFilter(1,1,1,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 27,cjs.Ease.get(0.8)).wait(1));

	// Text_1_B
	this.instance_5 = new lib.g_title_1_B("synched",0);
	this.instance_5.setTransform(-29.95,374.4,1,1,0,0,0,111.3,31.4);
	this.instance_5._off = true;
	var instance_5Filter_6 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-2,-2,168,178);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({x:108.55},19,cjs.Ease.get(0.8)).wait(56).to({startPosition:0},0).to({x:-128.95},14,cjs.Ease.get(0.8)).to({_off:true},6).wait(213));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(33).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 19,cjs.Ease.get(0.8)).wait(56).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 14,cjs.Ease.get(0.8)).wait(213));

	// Text_1_B_Bg
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgMNVIgXAAIAA6pIAXAAIAGAAIAAFMIArAAIAAGCIghAAIAAFHIgQAAIgLAAIAAESIALAAIArAAIAAGCg");
	this.shape_94.setTransform(-4.75,427.325);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAeNGIAFgdIAAiFIgnjXIAiAGIAABZIAzEagAgKHMIgJAAIAIgoIhMmeIAAtMIAgAAIA3EzIAwAAIAVB1IAACkIATBmIgLAAIgQACIAACsIgNBGIAABmIgaAGIAAAdIghC7IAHApg");
	this.shape_95.setTransform(1,425.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("ABdM4IALgcIAAgjIhNjEIAAg4IBNDFIAAA3IAZA/gAAIHNIATAIIAAAogAgJHHIgFAAIAKgbIiFlTIAAuQIAjAAIBtEaIA0AAIAqBrIAACyIAlBdIgIAAIgPAGIAAC5IgZBBIAABvIgXAKIAAAfIhHC3IAMAhg");
	this.shape_96.setTransform(6.55,424.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("ACaMqIAKgQIiLjdIAAhGIghg2IAAAAIAhAVIAAAhICRDoIAAAyIgGAJIAKAQgAgKHBIABgCIivkWIAAvTIAlAAIChEDIA4AAIA+BjIAAC+IA1BVIgEAAIgNAIIAADIIglA7IAAB3IgXAOIAAAiIh1C+IABACg");
	this.shape_97.setTransform(11.85,423.05);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("ADTMdIADgCIjAjXIAAg1Ij9kaIAAwSIAnAAIDTDsIA8AAIBQBaIAADLIBGBOIgBAAIgMALIAADUIgwA2IAAB/IgUASIAAAkIidCwIABAAIAeAbIAAA4IDSDqIAAANIgSAVIACACg");
	this.shape_98.setTransform(17.075,421.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AENMHIAOgMIAAAXgAD5MQIjujGIAAgZIkmj0IAAxOIAqAAIECDWIA/AAIBiBSIAADXIBVBHIADAAIgLANIAADgIg7AyIAACFIgSAXIAAAmIjACfIgCAAIAbAhIAABbIECDWIgLAJgAENMHg");
	this.shape_99.setTransform(22.8,420.625);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AlMFwIAAyIIAsAAIEvDDIBCAAIB0BKIAADhIBlBAIAEAAIgKAQIAADsIhFAtIAACNIgQAaIAAAoIjhCQIgFAAIAZAnIAAB6IEXCzIAXAAIAdgTIAAA5g");
	this.shape_100.setTransform(28.2,421.25);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("Al7GgIAAy+IAtAAIFaCvIBGAAICEBDIAADsIByA6IAJAAIgJARIAAD4IhQAoIAACTIgOAeIAAAqIkBCCIgHAAIAXAsIAACAIE+ChIAjAAIAigRIAABbg");
	this.shape_101.setTransform(33.4,421.875);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AmnHPIAAzyIAvAAIGDCcIBIAAICUA8IAAD1ICAA0IAKAAIgIATIAAEEIhZAjIAACaIgMAiIAAArIkfB0IgJAAIATAxIAACGIFlCQIAvAAIAlgQIAAB7g");
	this.shape_102.setTransform(38.3,422.45);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AnSH6IAA0jIAyAAIGpCLIBLAAICiA1IAAEAICNAuIAOAAIgHAVIAAEOIhiAfIAACfIgMAlIAAAtIk7BnIgMAAIASA3IAACKIGHCAIA7AAIAqgOIAACYg");
	this.shape_103.setTransform(42.925,422.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("An5IkIAA1SIAzAAIHOB6IBNAAICwAvIAAEJICZAoIAQAAIgGAYIAAEXIhqAcIAACkIgLAoIAAAvIlWBbIgNAAIAPA7IAACPIGpBxIBGAAIAsgMIAACzg");
	this.shape_104.setTransform(47.275,423.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AofJKIAA19IA1AAIHwBrIBQAAIC9ApIAAERICkAkIASAAIgFAYIAAEhIhyAYIAACqIgJAqIAAAwIlwBQIgPAAIAOBAIAACUIHIBiIBQAAIAwgLIAADOg");
	this.shape_105.setTransform(51.375,423.975);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("ApCJuIAA2lIA3AAIIPBcIBTAAIDJAjIAAEaICvAeIAUAAIgFAbIAAEoIh5AVIAACvIgIAtIAAAyImHBEIgRAAIAMBEIAACYIHlBVIBZAAIA0gJIAADmg");
	this.shape_106.setTransform(55.225,424.425);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("ApiKQIAA3MIA3AAIIuBQIBVAAIDUAdIAAEhIC5AaIAVAAIgDAcIAAExIiBARIAAC0IgGAwIAAAyImdA7IgTAAIALBIIAACcIIABJIBiAAIA2gIIAAD8g");
	this.shape_107.setTransform(58.8,424.85);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AqAKvIAA3vIA5AAIJJBDIBWAAIDfAZIAAEoIDCAWIAXAAIgCAeIAAE2IiHAQIAAC4IgGAxIAAA1ImyAxIgTAAIAJBLIAACgIIZA9IBqAAIA5gGIAAESg");
	this.shape_108.setTransform(62.1,425.25);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AqcLLIAA4OIA7AAIJiA3IBYAAIDoAVIAAEuIDKATIAaAAIgDAeIAAE+IiMANIAAC7IgEBpInFApIgVAAIAHBPIAACjIIxAyICtgFIAAElg");
	this.shape_109.setTransform(65.125,425.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Aq1LlIAA4rIA8AAIJ5AtIBaAAIDxARIAAEzIDtAPIgDAfIAAFFIiRAKIAAC/IgEBsInVAhIgXAAIAGBRIAACnIJGApIC2gEIAAE2g");
	this.shape_110.setTransform(67.875,425.925);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("ArML9IAA5GILMAjIBaAAID5AOIAAE4ID1AMIgCFqIiVAIIgEExIn8AaIAEBUIAACpIJZAhIC+gEIAAFHg");
	this.shape_111.setTransform(70.4,426.225);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("ArgMSIAA5eILfAbIBcAAIEAALIAAE9ID8AJIgBFwIibAGIgCE2IoLAUIADECIJqAZIDGgDIAAFVg");
	this.shape_112.setTransform(72.625,426.475);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("ArxMkIAA5yIRTAbIAAFBIECAHIgBF1IieAEIgBE7IoZAOIACEHIJ6ASIDLgCIAAFhg");
	this.shape_113.setTransform(74.6,426.725);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AsBM0IAA6EIRoASIAAFFIEJAEIgBF6IihADIgCE+IokAKIADEKIKGAMIDRgBIAAFsg");
	this.shape_114.setTransform(76.3,426.925);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AsONCIAA6UIR6ALIAAFIIENACIAAF9IikACIgBFCIotAGIABENINnAHIAAF1g");
	this.shape_115.setTransform(77.725,427.075);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AsZNNIAA6gISJAEIAAFLIERABIAAGAIimABIgBFFIo1ACIAAEQIN1ACIAAF9g");
	this.shape_116.setTransform(78.9,427.225);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AshNVIAA6pISUAAIAAFMIEUAAIAAGCIioAAIAAFHIo7AAIAAESIN+AAIAAGCg");
	this.shape_117.setTransform(79.8,427.325);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("ArJL7IAA5EIAxAAIKYAlIBaAAID4ANIAAE4ID0AMIgBFqIiWAIIgDEwIn7AbIAEBUIAACpIJYAiIC9gFIAAFGg");
	this.shape_118.setTransform(70.175,426.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("Ap2KlIAA3jIA4AAIJABGIBWAAIDbAbIAAEmIC/AXIAYAAIgEAdIAAE1IiEAQIAAC2IgGAyIAAAzImsA0IgTAAIAJBKIAACfIISBBIBoAAIA3gHIAAELg");
	this.shape_119.setTransform(61.05,425.125);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AopJUIAA2IIA1AAIH5BmIBRAAIDBAoIAAETICnAiIATAAIgGAaIAAEiIh0AYIAACrIgIArIAAAxIl3BMIgQAAIAOBBIAACVIHQBeIBTAAIAxgKIAADVg");
	this.shape_120.setTransform(52.525,424.125);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AngIJIAA00IAyAAIG3CFIBLAAICoAzIAAEDICRAsIAOAAIgGAWIAAERIhlAdIAACiIgLAmIAAAuIlGBiIgMAAIARA5IAACMIGUB6IA/AAIAqgNIAACig");
	this.shape_121.setTransform(44.525,423.175);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AmcHEIAAzmIAuAAIF5ChIBIAAICQA9IAAD0IB8A1IALAAIgJATIAAEBIhXAkIAACYIgNAgIAAArIkXB4IgJAAIAVAxIAACEIFbCTIAsAAIAlgQIAABzg");
	this.shape_122.setTransform(37.1,422.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AleGDIAAydIAsAAIFAC7IBDAAIB7BHIAADmIBpA+IAGAAIgJAPIAADxIhJArIAACQIgQAbIAAAoIjtCMIgGAAIAZAoIAAB9IEmCrIAbAAIAfgSIAABHg");
	this.shape_123.setTransform(30.2,421.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AESMEIATgPIAAAfgAEAMKIj3jCIAAgUIktjtIAAxaIAqAAIELDTIA/AAIBmBQIAADZIBZBFIADAAIgLAOIAADjIg+AwIAACIIgRAXIAAAmIjGCdIgDAAIAaAiIAABhIEJDQIgHAGgAESMEg");
	this.shape_124.setTransform(23.825,420.75);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("ADbMbIACgBIABABgAAUJGIAAgxIkEkTIAAwcIAoAAIDbDoIA8AAIBTBZIAADMIBJBNIgMALIAADXIgzA1IAACAIgTATIAAAkIiiCtIAdAcIAAA+IDdDpIAAAHIgUAVg");
	this.shape_125.setTransform(18.05,421.525);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("ACrMnIAIgLIibjdIAAhDIjdk9IAAvlIAlAAICwD8IA5AAIBDBgIAADCIA6BUIgDAAIgNAJIAADLIgpA5IAAB6IgVAPIAAAiIiCC7IADAAIAfAXIAAAmICkDqIAAAoIgJAOIAHALg");
	this.shape_126.setTransform(13.325,422.675);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AB9MxIAOgbIhxjdIAAhFIBxDdIAABFIANAbgAAFHKIAVALIAAAfgAgIHDIgEAAIAHgOIickyIAAuzIAjAAICJEOIA2AAIA0BnIAAC3IAtBaIgFAAIgOAHIAADBIggA9IAAB0IgWAMIAAAgIheC6IAKAVg");
	this.shape_127.setTransform(9.325,423.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("ABVM6IAKgcIAAgvIAbBLgAAbI0IAAgxIgTg1IATAHIAAAuIBEC7IAAAxgAgJHIIgGAAIALgfIh+lbIAAuHIAiAAIBmEdIAzAAIAoBtIAACwIAiBeIgIAAIgPAGIAAC3IgYBCIAABuIgYAJIAAAeIhAC2IAMAlg");
	this.shape_128.setTransform(5.825,424.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAyNCIAHgdIAAh4Ig3jgIAaAHIAABbIBEETgAgJHKIgIAAIAKgnIhfmCIAAtiIAgAAIBIErIAyAAIAcBxIAACpIAYBjIgLAAIgOADIAACwIgRBFIAABpIgaAGIAAAfIgrC2IAJAqg");
	this.shape_129.setTransform(2.75,425.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAUNJIAFgfIAAiKIggjSIAlAFIAABYIAsEegAgKHOIgJAAIAGgmIhDmtIAAtDIAgAAIAwE2IAuAAIATB3IAACiIAQBmIgMAAIgQADIAACpIgLBHIAABmIgaAEIAAAdIgdDBIAGAmg");
	this.shape_130.setTransform(0.175,426.05);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgDNOIACggIAAiZIgRjGIAIAAIAoAEIAABWIAaElgAgVHPIACgRIABARgAg9glIAAsoIAfAAIAbE/IAtAAIALB7IAACcIAJBqIgeACIAACjIgGBJIAABjIgaADIAAAcIgTDbg");
	this.shape_131.setTransform(-1.925,426.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgWNSIABjGIgZrKIAAsTIAeAAIALFHIAsAAIAIGBIgfABIgDFKIgaABIgJEOIA1ACIALF/g");
	this.shape_132.setTransform(-3.575,427.025);

	var maskedShapeInstanceList = [this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_94}]},24).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},65).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_94}]},1).to({state:[]},1).wait(212));

	// Photo00
	this.instance_6 = new lib.g_pic00("single",0);
	var instance_6Filter_7 = new cjs.ColorFilter(1,1,1,1,255,255,255,0);
	this.instance_6.filters = [instance_6Filter_7];
	this.instance_6.cache(-2,-2,164,604);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},23,cjs.Ease.get(0.8)).to({_off:true},105).wait(213));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_7).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(0.8)).wait(213));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:24, endFrame:24, x:-27, y:-2, w:205, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-27, y:-2, w:205, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:25, endFrame:47, x:-27, y:-2, w:205, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:48, endFrame:128, x:-27, y:-2, w:205, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:129, endFrame:129, x:-27, y:-2, w:205, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:130, endFrame:148, x:-27, y:-2, w:205, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:149, endFrame:340, x:-27, y:-2, w:205, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:340, endFrame:341, x:-27, y:-2, w:205, h:132});
	this.filterCacheList.push({instance: this.instance_1, startFrame:259, endFrame:259, x:-3, y:-3, w:191, h:52});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-3, y:-3, w:191, h:52});
	this.filterCacheList.push({instance: this.instance_1, startFrame:260, endFrame:273, x:-3, y:-3, w:191, h:52});
	this.filterCacheList.push({instance: this.instance_1, startFrame:274, endFrame:340, x:-3, y:-3, w:191, h:52});
	this.filterCacheList.push({instance: this.instance_1, startFrame:340, endFrame:341, x:-3, y:-3, w:191, h:52});
	this.filterCacheList.push({instance: this.instance_2, startFrame:241, endFrame:241, x:-2, y:-2, w:172, h:102});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:172, h:102});
	this.filterCacheList.push({instance: this.instance_2, startFrame:242, endFrame:255, x:-2, y:-2, w:172, h:102});
	this.filterCacheList.push({instance: this.instance_3, startFrame:157, endFrame:157, x:-2, y:-2, w:175, h:173});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:175, h:173});
	this.filterCacheList.push({instance: this.instance_3, startFrame:158, endFrame:171, x:-2, y:-2, w:175, h:173});
	this.filterCacheList.push({instance: this.instance_3, startFrame:212, endFrame:212, x:-2, y:-2, w:175, h:173});
	this.filterCacheList.push({instance: this.instance_3, startFrame:213, endFrame:227, x:-2, y:-2, w:175, h:173});
	this.filterCacheList.push({instance: this.instance_4, startFrame:127, endFrame:127, x:-2, y:-2, w:270, h:945});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:0, x:-2, y:-2, w:270, h:945});
	this.filterCacheList.push({instance: this.instance_4, startFrame:128, endFrame:154, x:-2, y:-2, w:270, h:945});
	this.filterCacheList.push({instance: this.instance_5, startFrame:33, endFrame:33, x:-2, y:-2, w:168, h:178});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-2, y:-2, w:168, h:178});
	this.filterCacheList.push({instance: this.instance_5, startFrame:34, endFrame:52, x:-2, y:-2, w:168, h:178});
	this.filterCacheList.push({instance: this.instance_5, startFrame:108, endFrame:108, x:-2, y:-2, w:168, h:178});
	this.filterCacheList.push({instance: this.instance_5, startFrame:109, endFrame:122, x:-2, y:-2, w:168, h:178});
	this.filterCacheList.push({instance: this.instance_6, startFrame:1, endFrame:23, x:-2, y:-2, w:164, h:604});
	this.filterCacheList.push({instance: this.instance_6, startFrame:0, endFrame:0, x:-2, y:-2, w:164, h:604});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,80,300);
// library properties:
lib.properties = {
	id: 'C38F8E925B074A239B4A15BB5DD6BAC8',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FAFAFA",
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