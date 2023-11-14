(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,620,204],[302,252,580,120],[302,374,281,229],[585,374,260,56],[585,432,260,56],[0,458,260,56],[622,0,300,250],[0,206,300,250]]}
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



(lib.CachedBmp_21 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



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
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310,102);


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
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,60);


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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-4.2,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtjKBIAA0BIbHAAIAAUBg");
	this.shape.setTransform(61.6,64.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,0,173.6,128.2);


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
	this.instance = new lib.Bitmap13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.instance = new lib.Bitmap12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,1.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(0,1.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(0,1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(2));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0633").s().p("AqJCgIAAk/IUTAAIAAE/g");
	this.shape.setTransform(65,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0633").ss(1,1,1).p("AqJifIUTAAIAAE/I0TAAg");
	this.shape_1.setTransform(65,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqJCgIAAk/IUTAAIAAE/g");
	this.shape_2.setTransform(65,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,132,34);


// stage content:
(lib.Farmer2_300x250 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	mask.setTransform(150,125);

	// Mask_Color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.102)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.29)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.376)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.459)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.533)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.6)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.667)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.722)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.776)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.824)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.863)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.929)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.957)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.976)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.988)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.996)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},325).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(2));

	// Mask_Color
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_20.setTransform(150,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.102)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_21.setTransform(150,125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.2)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_22.setTransform(150,125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.29)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_23.setTransform(150,125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.376)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_24.setTransform(150,125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.459)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_25.setTransform(150,125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.533)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_26.setTransform(150,125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.6)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_27.setTransform(150,125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.667)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_28.setTransform(150,125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.722)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_29.setTransform(150,125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.776)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_30.setTransform(150,125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.824)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_31.setTransform(150,125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.863)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_32.setTransform(150,125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_33.setTransform(150,125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.929)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_34.setTransform(150,125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.957)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_35.setTransform(150,125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.976)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_36.setTransform(150,125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.988)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_37.setTransform(150,125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.996)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_38.setTransform(150,125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_39.setTransform(150,125);

	var maskedShapeInstanceList = [this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},108).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).to({state:[]},217).wait(1));

	// Logo_SOC
	this.instance = new lib.g_SFU_SOC_Logo("single",1);
	this.instance.setTransform(19.95,-92.5,0.8,0.8);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-27,-2,178,132);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({y:0},23,cjs.Ease.get(0.8)).to({_off:true},81).wait(17).to({_off:false,alpha:0},0).to({alpha:1},19,cjs.Ease.get(0.9)).to({_off:true},181).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(24).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(0.8)).wait(17).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(20));

	// btn_CTA
	this.instance_1 = new lib.btn_CTA();
	this.instance_1.setTransform(175,198);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-3,-3,136,38);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_CTA(), 3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(264).to({_off:false},0).to({x:159},14,cjs.Ease.get(1)).to({_off:true},67).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(264).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 14,cjs.Ease.get(1)).wait(1));

	// Text_2
	this.instance_2 = new lib.g_title_2("synched",0);
	this.instance_2.setTransform(-52.45,183.15,1,1,0,0,0,111.3,31.4);
	this.instance_2._off = true;
	var instance_2Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-2,-2,314,106);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157).to({_off:false},0).to({x:108.55},14,cjs.Ease.get(0.8)).wait(61).to({startPosition:0},0).to({x:-85.95},16,cjs.Ease.get(0.8)).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(157).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 14,cjs.Ease.get(0.8)).wait(61).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 16,cjs.Ease.get(0.8)).wait(97));

	// Text_2_Bg
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWH1IAAvpIAPAAIAAE5IAPAAIAAEyIAOAAIAAF+g");
	this.shape_40.setTransform(-2.75,201.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AiYH1IAAvpIB4AAIAAE5IArAAIAAEyICNAAIAAF+g");
	this.shape_41.setTransform(10.7,201.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AkUH1IAAvpIDbAAIAAE5IBIAAIAAEyIEGAAIAAF+g");
	this.shape_42.setTransform(23.55,201.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AmKH1IAAvpIE5AAIAAE5IBjAAIAAEyIF5AAIAAF+g");
	this.shape_43.setTransform(35.775,201.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("An6H1IAAvpIGTAAIAAE5IB8AAIAAEyIHnAAIAAF+g");
	this.shape_44.setTransform(47.4,201.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AplH1IAAvpIHoAAIAAE5ICVAAIAAEyIJOAAIAAF+g");
	this.shape_45.setTransform(58.4,201.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ArJH1IAAvpII4AAIAAE5ICsAAIAAEyIKvAAIAAF+g");
	this.shape_46.setTransform(68.8,201.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AsoH1IAAvpIKEAAIAAE5IDCAAIAAEyIMLAAIAAF+g");
	this.shape_47.setTransform(78.575,201.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AuBH1IAAvpILLAAIAAE5IDWAAIAAEyINiAAIAAF+g");
	this.shape_48.setTransform(87.75,201.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AvUH1IAAvpIMNAAIAAE5IDpAAIAAEyIOzAAIAAF+g");
	this.shape_49.setTransform(96.325,201.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AwhH1IAAvpINLAAIAAE5ID6AAIAAEyIP+AAIAAF+g");
	this.shape_50.setTransform(104.275,201.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AxoH1IAAvpIOEAAIAAE5IELAAIAAEyIRCAAIAAF+g");
	this.shape_51.setTransform(111.6,201.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AypH1IAAvpIO4AAIAAE5IEZAAIAAEyISCAAIAAF+g");
	this.shape_52.setTransform(118.325,201.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AzkH1IAAvpIPnAAIAAE5IEnAAIAAEyIS7AAIAAF+g");
	this.shape_53.setTransform(124.45,201.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("A0ZH1IAAvpIQRAAIAAE5IEzAAIAAEyITvAAIAAF+g");
	this.shape_54.setTransform(129.95,201.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("A1JH1IAAvpIQ4AAIAAE5IE+AAIAAEyIUcAAIAAF+g");
	this.shape_55.setTransform(134.85,201.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("A1yH1IAAvpIRZAAIAAE5IFHAAIAAEyIVFAAIAAF+g");
	this.shape_56.setTransform(139.125,201.625);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("A2VH1IAAvpIR1AAIAAE5IFPAAIAAEyIVnAAIAAF+g");
	this.shape_57.setTransform(142.775,201.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("A2zH1IAAvpISMAAIAAE5IFWAAIAAEyIWFAAIAAF+g");
	this.shape_58.setTransform(145.85,201.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("A3LH1IAAvpISgAAIAAE5IFbAAIAAEyIWbAAIAAF+g");
	this.shape_59.setTransform(148.3,201.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("A3cH1IAAvpIStAAIAAE5IFgAAIAAEyIWsAAIAAF+g");
	this.shape_60.setTransform(150.125,201.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("A1UH1IAAvpIRBAAIAAE5IFAAAIAAEyIUnAAIAAF+g");
	this.shape_61.setTransform(136,201.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AzRH1IAAvpIPYAAIAAE5IEiAAIAAEyISpAAIAAF+g");
	this.shape_62.setTransform(122.525,201.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AxVH1IAAvpIN1AAIAAE5IEGAAIAAEyIQwAAIAAF+g");
	this.shape_63.setTransform(109.725,201.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AvgH1IAAvpIMXAAIAAE5IDrAAIAAEyIO/AAIAAF+g");
	this.shape_64.setTransform(97.625,201.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AtyH1IAAvpIK/AAIAAE5IDTAAIAAEyINTAAIAAF+g");
	this.shape_65.setTransform(86.175,201.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AsKH1IAAvpIJsAAIAAE5IC7AAIAAEyILuAAIAAF+g");
	this.shape_66.setTransform(75.425,201.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AqoH1IAAvpIIdAAIAAE5IClAAIAAEyIKPAAIAAF+g");
	this.shape_67.setTransform(65.35,201.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ApNH1IAAvpIHVAAIAAE5ICQAAIAAEyII2AAIAAF+g");
	this.shape_68.setTransform(55.925,201.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("An5H1IAAvpIGSAAIAAE5IB8AAIAAEyIHlAAIAAF+g");
	this.shape_69.setTransform(47.225,201.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AmrH1IAAvpIFUAAIAAE5IBqAAIAAEyIGZAAIAAF+g");
	this.shape_70.setTransform(39.15,201.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AlkH1IAAvpIEaAAIAAE5IBbAAIAAEyIFUAAIAAF+g");
	this.shape_71.setTransform(31.825,201.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AkjH1IAAvpIDnAAIAAE5IBLAAIAAEyIEVAAIAAF+g");
	this.shape_72.setTransform(25.1,201.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AjpH1IAAvpIC4AAIAAE5IA+AAIAAEyIDdAAIAAF+g");
	this.shape_73.setTransform(19.1,201.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ai1H1IAAvpICOAAIAAE5IAzAAIAAEyICqAAIAAF+g");
	this.shape_74.setTransform(13.775,201.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AiIH1IAAvpIBqAAIAAE5IApAAIAAEyIB+AAIAAF+g");
	this.shape_75.setTransform(9.125,201.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhiH1IAAvpIBMAAIAAE5IAgAAIAAEyIBZAAIAAF+g");
	this.shape_76.setTransform(5.125,201.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhCH1IAAvpIAzAAIAAE5IAYAAIAAEyIA6AAIAAF+g");
	this.shape_77.setTransform(1.825,201.625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgpH1IAAvpIAeAAIAAE5IATAAIAAEyIAhAAIAAF+g");
	this.shape_78.setTransform(-0.8,201.625);

	var maskedShapeInstanceList = [this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},148).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},73).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_40}]},1).to({state:[]},2).wait(84));

	// Photo_4
	this.instance_3 = new lib.g_pic04("synched",0);
	this.instance_3._off = true;
	var instance_3Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-2,-2,304,254);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(127).to({_off:false},0).to({startPosition:0},18,cjs.Ease.get(0.8)).to({_off:true},200).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(127).to(new cjs.ColorFilter(1,1,1,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18,cjs.Ease.get(0.8)).wait(1));

	// Text_1_B
	this.instance_4 = new lib.g_title_1_B("synched",0);
	this.instance_4.setTransform(-29.95,224.4,1,1,0,0,0,111.3,31.4);
	this.instance_4._off = true;
	var instance_4Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-2,-2,294,64);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({x:108.55},19,cjs.Ease.get(0.8)).wait(56).to({startPosition:0},0).to({x:-128.95},14,cjs.Ease.get(0.8)).to({_off:true},6).wait(218));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(33).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 19,cjs.Ease.get(0.8)).wait(56).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 14,cjs.Ease.get(0.8)).wait(218));

	// Text_1_B_Bg
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgIEeIAAo2IAAgFIAIAAIAAAFIAAD4IAJAAIAAE+g");
	this.shape_79.setTransform(-1.625,221.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ah2EeIAAo7IC8AAIAAD9IAxAAIAAE+g");
	this.shape_80.setTransform(9.6,221.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AjgEeIAAo7IFpAAIAAD9IBYAAIAAE+g");
	this.shape_81.setTransform(20.4,221.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AlGEeIAAo7IIQAAIAAD9IB9AAIAAE+g");
	this.shape_82.setTransform(30.75,221.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AmoEeIAAo7IKwAAIAAD9ICgAAIAAE+g");
	this.shape_83.setTransform(40.65,221.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AoEEeIAAo7INHAAIAAD9IDCAAIAAE+g");
	this.shape_84.setTransform(50.125,221.65);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("ApdEeIAAo7IPZAAIAAD9IDiAAIAAE+g");
	this.shape_85.setTransform(59.15,221.65);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AqxEeIAAo7IRjAAIAAD9IEAAAIAAE+g");
	this.shape_86.setTransform(67.725,221.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AsBEeIAAo7ITmAAIAAD9IEeAAIAAE+g");
	this.shape_87.setTransform(75.85,221.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AtNEeIAAo7IViAAIAAD9IE5AAIAAE+g");
	this.shape_88.setTransform(83.55,221.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AuUEeIAAo7IXXAAIAAD9IFSAAIAAE+g");
	this.shape_89.setTransform(90.8,221.65);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AvXEeIAAo7IZFAAIAAD9IFqAAIAAE+g");
	this.shape_90.setTransform(97.6,221.65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AwWEeIAAo7IarAAIAAD9IGCAAIAAE+g");
	this.shape_91.setTransform(103.975,221.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AxQEeIAAo7IcLAAIAAD9IGWAAIAAE+g");
	this.shape_92.setTransform(109.875,221.65);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AyGEeIAAo7IdjAAIAAD9IGqAAIAAE+g");
	this.shape_93.setTransform(115.375,221.65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ay3EeIAAo7IezAAIAAD9IG8AAIAAE+g");
	this.shape_94.setTransform(120.4,221.65);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AzkEeIAAo7If+AAIAAD9IHLAAIAAE+g");
	this.shape_95.setTransform(124.975,221.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("A0NEeIAAo7MAhBAAAIAAD9IHaAAIAAE+g");
	this.shape_96.setTransform(129.15,221.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("A0xEeIAAo7MAh8AAAIAAD9IHnAAIAAE+g");
	this.shape_97.setTransform(132.85,221.65);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("A1SEeIAAo7MAixAAAIAAD9IH0AAIAAE+g");
	this.shape_98.setTransform(136.125,221.65);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("A1tEeIAAo7MAjeAAAIAAD9IH+AAIAAE+g");
	this.shape_99.setTransform(138.95,221.65);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("A2FEeIAAo7MAkFAAAIAAD9IIGAAIAAE+g");
	this.shape_100.setTransform(141.325,221.65);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("A2YEeIAAo7MAkkAAAIAAD9IINAAIAAE+g");
	this.shape_101.setTransform(143.25,221.65);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("A2nEeIAAo2IAAgFMAk9AAAIAAAFIAAD4IISAAIAAE+g");
	this.shape_102.setTransform(144.75,221.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("A2nEeIAAo2IAAgFIcKAAIAAAFIAAD4IRFAAIAAE+g");
	this.shape_103.setTransform(144.75,221.65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("A0KEeIAAo7IZGAAIAAD9IPPAAIAAE+g");
	this.shape_104.setTransform(128.8,221.65);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ax2EeIAAo7IWOAAIAAD9INfAAIAAE+g");
	this.shape_105.setTransform(113.725,221.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AvqEeIAAo7ITfAAIAAD9IL3AAIAAE+g");
	this.shape_106.setTransform(99.6,221.65);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AtoEeIAAo7IQ9AAIAAD9IKUAAIAAE+g");
	this.shape_107.setTransform(86.35,221.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("ArvEeIAAo7IOmAAIAAD9II5AAIAAE+g");
	this.shape_108.setTransform(74.025,221.65);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("Ap/EeIAAo7IMaAAIAAD9IHlAAIAAE+g");
	this.shape_109.setTransform(62.625,221.65);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AoYEeIAAo7IKaAAIAAD9IGXAAIAAE+g");
	this.shape_110.setTransform(52.125,221.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Am6EeIAAo7IIkAAIAAD9IFRAAIAAE+g");
	this.shape_111.setTransform(42.55,221.65);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AllEeIAAo7IG6AAIAAD9IERAAIAAE+g");
	this.shape_112.setTransform(33.875,221.65);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AkZEeIAAo7IFcAAIAAD9IDXAAIAAE+g");
	this.shape_113.setTransform(26.125,221.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AjVEeIAAo7IEHAAIAAD9ICkAAIAAE+g");
	this.shape_114.setTransform(19.275,221.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AibEeIAAo7IC/AAIAAD9IB4AAIAAE+g");
	this.shape_115.setTransform(13.35,221.65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhqEeIAAo7ICBAAIAAD9IBUAAIAAE+g");
	this.shape_116.setTransform(8.325,221.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhBEeIAAo7IBOAAIAAD9IA1AAIAAE+g");
	this.shape_117.setTransform(4.225,221.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgiEeIAAo7IAoAAIAAD9IAdAAIAAE+g");
	this.shape_118.setTransform(1.025,221.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgMEeIAAo2IAAgFIAMAAIAAAFIAAD4IANAAIAAE+g");
	this.shape_119.setTransform(-1.25,221.65);

	var maskedShapeInstanceList = [this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_79}]},24).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},65).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[]},1).wait(217));

	// Photo00__bak
	this.instance_5 = new lib.g_pic00("single",0);
	var instance_5Filter_6 = new cjs.ColorFilter(1,1,1,1,255,255,255,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-2,-2,304,254);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},23,cjs.Ease.get(0.8)).to({_off:true},105).wait(218));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(0.8)).wait(218));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:24, endFrame:24, x:-27, y:-2, w:178, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-27, y:-2, w:178, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:25, endFrame:47, x:-27, y:-2, w:178, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:48, endFrame:128, x:-27, y:-2, w:178, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:145, endFrame:145, x:-27, y:-2, w:178, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:146, endFrame:164, x:-27, y:-2, w:178, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:165, endFrame:345, x:-27, y:-2, w:178, h:132});
	this.filterCacheList.push({instance: this.instance, startFrame:345, endFrame:346, x:-27, y:-2, w:178, h:132});
	this.filterCacheList.push({instance: this.instance_1, startFrame:264, endFrame:264, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_1, startFrame:265, endFrame:278, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_1, startFrame:279, endFrame:345, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_1, startFrame:345, endFrame:346, x:-3, y:-3, w:136, h:38});
	this.filterCacheList.push({instance: this.instance_2, startFrame:157, endFrame:157, x:-2, y:-2, w:314, h:106});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:314, h:106});
	this.filterCacheList.push({instance: this.instance_2, startFrame:158, endFrame:171, x:-2, y:-2, w:314, h:106});
	this.filterCacheList.push({instance: this.instance_2, startFrame:232, endFrame:232, x:-2, y:-2, w:314, h:106});
	this.filterCacheList.push({instance: this.instance_2, startFrame:233, endFrame:248, x:-2, y:-2, w:314, h:106});
	this.filterCacheList.push({instance: this.instance_3, startFrame:127, endFrame:127, x:-2, y:-2, w:304, h:254});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:304, h:254});
	this.filterCacheList.push({instance: this.instance_3, startFrame:128, endFrame:145, x:-2, y:-2, w:304, h:254});
	this.filterCacheList.push({instance: this.instance_4, startFrame:33, endFrame:33, x:-2, y:-2, w:294, h:64});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:0, x:-2, y:-2, w:294, h:64});
	this.filterCacheList.push({instance: this.instance_4, startFrame:34, endFrame:52, x:-2, y:-2, w:294, h:64});
	this.filterCacheList.push({instance: this.instance_4, startFrame:108, endFrame:108, x:-2, y:-2, w:294, h:64});
	this.filterCacheList.push({instance: this.instance_4, startFrame:109, endFrame:122, x:-2, y:-2, w:294, h:64});
	this.filterCacheList.push({instance: this.instance_5, startFrame:1, endFrame:23, x:-2, y:-2, w:304, h:254});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-2, y:-2, w:304, h:254});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,150,125);
// library properties:
lib.properties = {
	id: 'C38F8E925B074A239B4A15BB5DD6BAC8',
	width: 300,
	height: 250,
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