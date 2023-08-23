(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[302,0,344,512],[302,514,524,232],[648,361,342,80],[648,443,280,66],[0,602,280,66],[0,670,280,66],[0,0,300,600],[648,0,300,359]]}
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Pic1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Pic2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,256);


(lib.gpic1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Pic1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-261.9,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.9,0,262,116);


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

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,40);


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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(13,8.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(13,8.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_7();
	this.instance_2.setTransform(13,8.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0633").s().p("As9D/IAAn9IZ7AAIAAH9g");
	this.shape.setTransform(83,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0633").ss(1,1,1).p("As9j+IZ7AAIAAH9I57AAg");
	this.shape_1.setTransform(83,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("As9D/IAAn9IZ7AAIAAH9g");
	this.shape_2.setTransform(83,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,168,53);


(lib.gpic2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.g_SFULogohorizontal("synched",0);
	this.instance.setTransform(40.1,0.1,1,1,0,0,0,0.1,0.1);

	this.instance_1 = new lib.Pic2();
	this.instance_1.setTransform(0,241);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


// stage content:
(lib.banner2_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// White_Color_Mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.067)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.133)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_2.setTransform(150,300);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.2)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_3.setTransform(150,300);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.267)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_4.setTransform(150,300);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.333)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_5.setTransform(150,300);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.4)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_6.setTransform(150,300);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.467)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_7.setTransform(150,300);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.533)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_8.setTransform(150,300);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.6)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_9.setTransform(150,300);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.667)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_10.setTransform(150,300);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.733)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_11.setTransform(150,300);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_12.setTransform(150,300);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.867)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_13.setTransform(150,300);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.933)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_14.setTransform(150,300);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_15.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},258).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},11).wait(15));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_130 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(130).to({graphics:mask_graphics_130,x:149.9994,y:299.9822}).wait(169));

	// Layer_7
	this.instance = new lib.btn_CTA();
	this.instance.setTransform(150,554.5,1,1,0,0,0,83,25.5);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-3,-3,172,57);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_CTA(), 3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175).to({_off:false},0).to({y:544.5},16,cjs.Ease.get(0.9)).to({_off:true},83).wait(25));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(175).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 16,cjs.Ease.get(0.9)).wait(25));

	// text
	this.instance_1 = new lib.g_txtSFUMedicalSchool("synched",0);
	this.instance_1.setTransform(399.5,166,1,1,0,0,0,-162.3,77);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(162).to({_off:false},0).to({x:139.5},13,cjs.Ease.get(1)).to({_off:true},99).wait(25));

	// SFU_Logo
	this.instance_2 = new lib.g_SFULogohorizontal("synched",0);
	this.instance_2.setTransform(40.1,0.1,1,1,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).to({_off:true},127).wait(25));

	// Red_Bg
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0633").s().p("A3bAyIAAhjMAu3AAAIAABjg");
	this.shape_16.setTransform(150,-6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0633").s().p("A3bCtIAAlZMAu3AAAIAAFZg");
	this.shape_17.setTransform(150,7.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0633").s().p("A3bEeIAAo8MAu3AAAIAAI8g");
	this.shape_18.setTransform(150,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0633").s().p("A3bGIIAAsPMAu3AAAIAAMPg");
	this.shape_19.setTransform(150,32.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0633").s().p("A3bHpIAAvRMAu3AAAIAAPRg");
	this.shape_20.setTransform(150,43);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0633").s().p("A3bJCIAAyDMAu3AAAIAASDg");
	this.shape_21.setTransform(150,52.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0633").s().p("A3bKSIAA0jMAu3AAAIAAUjg");
	this.shape_22.setTransform(150,61.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0633").s().p("A3bLaIAA2zMAu3AAAIAAWzg");
	this.shape_23.setTransform(150,69.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0633").s().p("A3bMZIAA4xMAu3AAAIAAYxg");
	this.shape_24.setTransform(150,76.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0633").s().p("A3bNQIAA6fMAu3AAAIAAafg");
	this.shape_25.setTransform(150,83.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0633").s().p("A3bN+IAA77MAu3AAAIAAb7g");
	this.shape_26.setTransform(150,88.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0633").s().p("A3bOkIAA9IMAu3AAAIAAdIg");
	this.shape_27.setTransform(150,92.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0633").s().p("A3bPCIAA+DMAu3AAAIAAeDg");
	this.shape_28.setTransform(150,95.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0633").s().p("A3bPXIAA+tMAu3AAAIAAetg");
	this.shape_29.setTransform(150,98.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0633").s().p("A3bPkIAA/HMAu3AAAIAAfHg");
	this.shape_30.setTransform(150,99.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC0633").s().p("A3bPoIAA/PMAu3AAAIAAfPg");
	this.shape_31.setTransform(150,100);

	var maskedShapeInstanceList = [this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},147).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[]},112).wait(25));

	// Photo_B_W
	this.instance_3 = new lib.gpic2("synched",0);
	this.instance_3.setTransform(150,179.5,1,1,0,0,0,150,179.5);
	this.instance_3._off = true;
	var instance_3Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-2,-2,304,604);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131).to({_off:false},0).to({startPosition:0},16,cjs.Ease.get(1)).to({_off:true},127).wait(25));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(131).to(new cjs.ColorFilter(1,1,1,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 16,cjs.Ease.get(1)).wait(25));

	// White_Color_Mask
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_32.setTransform(150,300);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.078)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_33.setTransform(150,300);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.153)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_34.setTransform(150,300);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.231)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_35.setTransform(150,300);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.306)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_36.setTransform(150,300);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.384)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_37.setTransform(150,300);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.463)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_38.setTransform(150,300);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.537)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_39.setTransform(150,300);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.616)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_40.setTransform(150,300);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.694)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_41.setTransform(150,300);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.769)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_42.setTransform(150,300);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.847)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_43.setTransform(150,300);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.922)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_44.setTransform(150,300);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_45.setTransform(150,300);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.859)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_46.setTransform(150,300);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.729)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_47.setTransform(150,300);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.608)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_48.setTransform(150,300);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.502)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_49.setTransform(150,300);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.404)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_50.setTransform(150,300);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.314)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_51.setTransform(150,300);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.239)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_52.setTransform(150,300);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.173)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_53.setTransform(150,300);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.118)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_54.setTransform(150,300);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.071)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_55.setTransform(150,300);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.035)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_56.setTransform(150,300);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.012)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_57.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},116).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[]},1).to({state:[{t:this.shape_45}]},154).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},1).wait(1));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask_1.setTransform(150,300);

	// SFU_Logo
	this.instance_4 = new lib.g_SFULogohorizontal("single",0);
	this.instance_4.setTransform(40.1,-40.9,1,1,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({y:0.1},13,cjs.Ease.get(1)).to({_off:true},77).wait(169));

	// text
	this.instance_5 = new lib.gtext12("synched",0);
	this.instance_5.setTransform(-172.5,348.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({x:-2.5},14,cjs.Ease.get(1)).to({_off:true},90).wait(169));

	// Red_Bg
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC0633").s().p("AgxTwMAAAgnfIBjAAIAAI4IgWAAIAAHqIgfAAIAAGbIAkAAIAAI4IgTAAIAAHqg");
	this.shape_58.setTransform(-6.45,473.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0633").s().p("AifTwMAAAgnfIE/AAIAAI4IhJAAIAAHqIhhAAIAAGbIBzAAIAAI4Ig9AAIAAHqg");
	this.shape_59.setTransform(5.8,473.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC0633").s().p("AkETwMAAAgnfIIJAAIAAI4Ih3AAIAAHqIigAAIAAGbIC+AAIAAI4IhkAAIAAHqg");
	this.shape_60.setTransform(17.2,473.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0633").s().p("AliTwMAAAgnfILFAAIAAI4IihAAIAAHqIjbAAIAAGbIECAAIAAI4IiIAAIAAHqg");
	this.shape_61.setTransform(27.7,473.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC0633").s().p("Am4TwMAAAgnfINxAAIAAI4IjIAAIAAHqIkQAAIAAGbIFBAAIAAI4IipAAIAAHqg");
	this.shape_62.setTransform(37.375,473.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC0633").s().p("AoHTwMAAAgnfIQPAAIAAI4IjtAAIAAHqIk/AAIAAGbIF6AAIAAI4IjIAAIAAHqg");
	this.shape_63.setTransform(46.2,473.125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC0633").s().p("ApOTwMAAAgnfISdAAIAAI4IkNAAIAAHqIlsAAIAAGbIGvAAIAAI4IjkAAIAAHqg");
	this.shape_64.setTransform(54.15,473.125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC0633").s().p("AqOTwMAAAgnfIUdAAIAAI4IkqAAIAAHqImTAAIAAGbIHdAAIAAI4Ij8AAIAAHqg");
	this.shape_65.setTransform(61.25,473.125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC0633").s().p("ArFTwMAAAgnfIWLAAIAAI4IlDAAIAAHqIm1AAIAAGbIIFAAIAAI4IkRAAIAAHqg");
	this.shape_66.setTransform(67.475,473.125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC0633").s().p("Ar1TwMAAAgnfIXrAAIAAI4IlZAAIAAHqInTAAIAAGbIIpAAIAAI4IkkAAIAAHqg");
	this.shape_67.setTransform(72.875,473.125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CC0633").s().p("AsdTwMAAAgnfIY7AAIAAI4IlrAAIAAHqInsAAIAAGbIJHAAIAAI4Ik0AAIAAHqg");
	this.shape_68.setTransform(77.4,473.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0633").s().p("As+TwMAAAgnfIZ9AAIAAI4Il6AAIAAHqIoAAAIAAGbIJeAAIAAI4IlAAAIAAHqg");
	this.shape_69.setTransform(81.05,473.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CC0633").s().p("AtYTwMAAAgnfIaxAAIAAI4ImHAAIAAHqIoPAAIAAGbIJwAAIAAI4IlJAAIAAHqg");
	this.shape_70.setTransform(83.875,473.125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC0633").s().p("AtpTwMAAAgnfIbTAAIAAI4ImPAAIAAHqIoZAAIAAGbIJ8AAIAAI4IlPAAIAAHqg");
	this.shape_71.setTransform(85.85,473.125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CC0633").s().p("AtzTwMAAAgnfIbnAAIAAI4ImTAAIAAHqIogAAIAAGbIKEAAIAAI4IlUAAIAAHqg");
	this.shape_72.setTransform(86.925,473.125);

	var maskedShapeInstanceList = [this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58}]},11).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},105).wait(169));

	// Photo_B_W
	this.instance_6 = new lib.gpic1("synched",0);
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},130).wait(154).to({_off:false},0).wait(15));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:175, endFrame:175, x:-3, y:-3, w:172, h:57});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-3, y:-3, w:172, h:57});
	this.filterCacheList.push({instance: this.instance, startFrame:176, endFrame:191, x:-3, y:-3, w:172, h:57});
	this.filterCacheList.push({instance: this.instance, startFrame:192, endFrame:274, x:-3, y:-3, w:172, h:57});
	this.filterCacheList.push({instance: this.instance, startFrame:274, endFrame:299, x:-3, y:-3, w:172, h:57});
	this.filterCacheList.push({instance: this.instance_3, startFrame:131, endFrame:131, x:-2, y:-2, w:304, h:604});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:304, h:604});
	this.filterCacheList.push({instance: this.instance_3, startFrame:132, endFrame:147, x:-2, y:-2, w:304, h:604});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);
// library properties:
lib.properties = {
	id: 'C38F8E925B074A239B4A15BB5DD6BAC8',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1692814572304", id:"index_atlas_1"}
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