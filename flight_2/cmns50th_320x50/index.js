(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[293,235,381,42],[0,98,421,76],[0,279,381,42],[645,293,116,75],[763,293,100,75],[865,293,98,75],[423,98,127,75],[0,176,291,64],[0,0,605,96],[293,176,260,56],[676,235,260,56],[383,279,260,56],[809,0,100,100],[911,0,100,100],[809,102,100,100],[911,102,100,100],[607,0,200,233]]}
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



(lib.CachedBmp_12 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CMNS50 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
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
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(0,17.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.5,55.2);


(lib.g_SpeakerPic_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Name
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(48.8,5.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AipCqQhGhGAAhkQAAhjBGhGQBGhGBjAAQBjAABHBGQBGBGAABjQAABkhGBGQhHBGhjAAQhjAAhGhGg");
	mask.setTransform(24,24);

	// FlashAICB
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.8,48);


(lib.g_SpeakerPic_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Name
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(48.8,5.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AipCqQhGhGAAhkQAAhjBGhGQBGhGBjAAQBjAABHBGQBGBGAABjQAABkhGBGQhHBGhjAAQhjAAhGhGg");
	mask.setTransform(24,24);

	// FlashAICB
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.8,48);


(lib.g_SpeakerPic_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Name
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(51.2,5.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AipCqQgegfgSgkQgWguAAg5QAAhjBGhGQBGhGBjAAQBjAABHBGQBGBGAABjQAAA5gXAuQgRAkgeAfQhHBGhjAAQhjAAhGhGg");
	mask.setTransform(24,24);

	// FlashAICB
	this.instance_1 = new lib.Bitmap5();
	this.instance_1.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.2,48);


(lib.g_SpeakerPic_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Name
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(51.2,5.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AipCqQhGhGAAhkQAAhjBGhGQBGhGBjAAQBjAABHBGQBGBGAABjQAABkhGBGQhHBGhjAAQhjAAhGhGg");
	mask.setTransform(24,24);

	// FlashAICB
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.7,48);


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
	this.instance.setTransform(0,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,145.5,32);


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
	this.instance.setTransform(0,0,0.1887,0.1888);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.8,44);


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
p.nominalBounds = new cjs.Rectangle(0,0,302.5,48);


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
	this.instance.setTransform(0,-2.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,-2.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0,-2.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0633").ss(1,1,1).p("AqJiBIUTAAIAAEDI0TAAg");
	this.shape.setTransform(65,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqJCCIAAkDIUTAAIAAEDg");
	this.shape_1.setTransform(65,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0633").s().p("AqJCCIAAkDIUTAAIAAEDg");
	this.shape_2.setTransform(65,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.1,132,29.1);


// stage content:
(lib.cmns50th_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(63,48,50,0.102)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(74,46,50,0.2)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_2.setTransform(160,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(84,43,50,0.29)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_3.setTransform(160,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(94,41,49,0.376)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_4.setTransform(160,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(104,39,49,0.459)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_5.setTransform(160,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(112,37,48,0.533)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_6.setTransform(160,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(120,35,48,0.6)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_7.setTransform(160,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(127,34,48,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_8.setTransform(160,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(134,32,47,0.722)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_9.setTransform(160,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(140,31,47,0.776)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_10.setTransform(160,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(146,30,47,0.824)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_11.setTransform(160,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(150,29,47,0.863)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_12.setTransform(160,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(155,28,46,0.902)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_13.setTransform(160,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(158,27,46,0.929)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_14.setTransform(160,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(161,26,46,0.957)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_15.setTransform(160,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(163,26,46,0.976)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_16.setTransform(160,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(165,25,46,0.988)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_17.setTransform(160,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(166,25,46,0.996)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_18.setTransform(160,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A6192E").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_19.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},596).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(2));

	// Logo_SOC
	this.instance = new lib.g_SFU_SOC_Logo("synched",0);
	this.instance.setTransform(107,-21.9,1,1,0,0,0,82,18.1);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,150,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:18.1},24,cjs.Ease.get(1)).wait(63).to({startPosition:0},0).to({y:-13.9},24).to({_off:true},2).wait(503));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(63).to(new cjs.ColorFilter(0,0,0,1,166,25,46,0), 24).wait(503));

	// Logo_CMNS50
	this.instance_1 = new lib.g_Logo_CMNS50("synched",0);
	this.instance_1.setTransform(268.25,3.6);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-2,-2,42,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({startPosition:0},18,cjs.Ease.get(1)).wait(135).to({regX:82,regY:30,x:350.25,y:33.6},0).to({x:362.25},21,cjs.Ease.get(1)).to({_off:true},1).wait(396));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(46).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18,cjs.Ease.get(1)).wait(135).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 21,cjs.Ease.get(1)).wait(396));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AndB/QjFg0AAhLQAAhJDFg1QDHg1EWAAQEXAADGA1QDGA1AABJQAABLjGA0QjGA1kXAAQkWAAjHg1g");
	var mask_graphics_15 = new cjs.Graphics().p("AgbC8QkPgfi4hNQi3hNALhNQALhODIghQDJghEOAfQEPAfC4BNQC4BOgMBMQgMBOjHAhQhoARh6AAQhyAAiDgPg");
	var mask_graphics_16 = new cjs.Graphics().p("Ag1DEQkHg9irhkQiqhjAWhRQAXhRDKgPQDKgOEGA8QEIA9CqBkQCqBkgWBRQgWBRjLAOQgnADgpAAQitAAjTgxg");
	var mask_graphics_17 = new cjs.Graphics().p("AF9EnQjMgDj/hZQkAhYieh6Qidh6AghUQAhhUDMADQDNADD+BZQEABZCeB5QCeB6ghBUQggBRi/AAIgOAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AFgFZQjOgUj4hzQj5hziRiOQiSiPAqhWQArhXDOATQDOAUD4BzQD5BzCRCOQCSCPgqBXQgjBHiOAAQghAAgngEg");
	var mask_graphics_19 = new cjs.Graphics().p("AFFGIQjQgkjxiLQjyiMiHiiQiGiiAzhZQA0haDQAjQDQAkDxCMQDyCLCHChQCGCjgzBaQglBAh1AAQgvAAg7gKg");
	var mask_graphics_20 = new cjs.Graphics().p("AFIGxQjIgHjsiDQjtiEiHizQiIizAth6QAth5DHAGQDIAHDsCEQDtCECHCyQCIC0gtB5QgqB0i1AAIgVgBg");
	var mask_graphics_21 = new cjs.Graphics().p("AhcFxQjoh8iJjDQiIjDAmiaQAmiYDAgVQC/gUDnB7QDoB8CJDFQCJDCgnCaQgmCZi/AUQgcADgcAAQipAAjGhrg");
	var mask_graphics_22 = new cjs.Graphics().p("AhNG6Qjjh0iKjUQiJjTAgi4QAgi2C3gwQC4gvDiB1QDjB1CKDTQCKDTggC3QghC4i3AvQg1ANg4AAQiMAAihhTg");
	var mask_graphics_23 = new cjs.Graphics().p("Ag+H/QjfhsiLjkQiKjiAajVQAajTCvhJQCwhJDeBtQDfBuCKDjQCLDjgaDTQgaDViwBJQhGAdhNAAQh1AAiFhDg");
	var mask_graphics_24 = new cjs.Graphics().p("AgwJDQjahmiMjyQiMjxAVjxQAUjvCohhQCphiDZBmQDaBnCMDyQCMDxgVDwQgUDwipBiQhRAvheAAQhjAAhvg1g");
	var mask_graphics_25 = new cjs.Graphics().p("AqBI+QlRiFgykHQgxkFEMjuQEKjuGphKQGphKFRCFQFPCGAxEGQAxEGkJDuQkLDumqBKQiWAaiMAAQj+AAjYhWg");
	var mask_graphics_26 = new cjs.Graphics().p("ArPKvQmThghJkOQhIkOEtkdQEqkcHviFQHuiEGTBgQGPBiBJEOQBIEOkpEbQktEenvCEQkcBMj+AAQi6AAiqgpg");
	var mask_graphics_27 = new cjs.Graphics().p("AsQKbQmlhphCkPQhBkPFIkVQFEkUIPh4QINh4GlBqQGgBqBCEPQBCEPlEEUQlIEVoOB4QkVBAj4AAQjdAAjFgzg");
	var mask_graphics_28 = new cjs.Graphics().p("AtNKJQm2hzg7kPQg8kPFikOQFekMIshtQIrhsG2ByQGxB0A7EQQA8EPleEMQlhEOotBsQkMA1jxAAQkAAAjfg8g");
	var mask_graphics_29 = new cjs.Graphics().p("AuIJ3QnGh7g1kRQg1kPF6kGQF2kGJJhhQJHhhHFB7QHBB8A2ERQA1EPl2EFQl6EHpIBhQkAArjmAAQknAAj8hGg");
	var mask_graphics_30 = new cjs.Graphics().p("AvAJmQnUiDgwkRQgvkQGRkAQGNj+JjhXQJjhXHUCDQHPCFAwERQAwEQmND/QmRD/pkBXQjxAijbAAQlNAAkZhQg");
	var mask_graphics_31 = new cjs.Graphics().p("Av0JXQniiLgqkSQgqkRGnj4QGij4J9hNQJ7hNHiCLQHeCLAqESQAqERmiD4QmnD5p8BNQjiAbjOAAQl2AAk0hag");
	var mask_graphics_32 = new cjs.Graphics().p("AwlJIQnwiSglkSQglkSG8jzQG3jxKUhEQKThEHwCSQHqCTAlETQAlERm2DyQm8DzqUBEQjOAVi/AAQmgAAlRhlg");
	var mask_graphics_33 = new cjs.Graphics().p("AxTI7Qn8iZggkTQghkTHPjsQHKjtKqg7QKpg6H8CYQH4CaAgETQAgESnKDsQnODtqqA7Qi8AQivAAQnKAAlshug");
	var mask_graphics_34 = new cjs.Graphics().p("Ax9IuQoIifgckUQgckTHhjnQHbjnK/gzQK+gzIICfQICCgAcETQAcETncDnQngDoq/AyQipAMigAAQnyAAmFh4g");
	var mask_graphics_35 = new cjs.Graphics().p("AylIhQoSikgYkUQgYkUHxjiQHsjiLSgsQLRgrISClQINClAYEUQAYEUnsDiQnxDirSArQiVAJiOAAQobAAmgiDg");
	var mask_graphics_36 = new cjs.Graphics().p("AzJIXQodiqgUkVQgTkUIAjeQH7jdLjglQLjgkIcCqQIXCqAUEVQATEUn6DdQoADerkAlQiBAGh8AAQpEAAm4iMg");
	var mask_graphics_37 = new cjs.Graphics().p("AzrIMQoliugQkWQgRkUIOjaQIJjZLzgeQLzgeIlCvQIgCvAQEVQAREUoJDaQoODarzAeQhuAEhpAAQprAAnRiWg");
	var mask_graphics_38 = new cjs.Graphics().p("A0JIEQotizgNkWQgOkVIbjWQIVjVMCgZQMBgYItCzQIoCzANEWQAOEVoVDVQobDXsCAYQhbADhaAAQqOAAnmieg");
	var mask_graphics_39 = new cjs.Graphics().p("A0kH7Qo0i2gLkXQgKkVImjSQIgjTMPgTQMOgTI0C3QIvC3ALEWQAKEVogDTQolDSsQAUQhIAChIAAQqyAAn7ing");
	var mask_graphics_40 = new cjs.Graphics().p("A08H1Qo7i7gHkWQgJkWIwjPQIqjPMbgQQMZgOI7C6QI2C7AHEXQAJEVoqDPQowDQsbAPIhwABQrSAAoNitg");
	var mask_graphics_41 = new cjs.Graphics().p("A1QHuQpAi9gHkXQgFkWI4jNQIyjMMlgLQMjgLJBC9QI7C+AFEXQAHEWozDMQo5DNsjALIhXABQrsAAoci0g");
	var mask_graphics_42 = new cjs.Graphics().p("A1iHpQpFjAgEkXQgEkWJAjLQI6jKMsgIQMsgHJFDAQJADAAEEXQAEEWo5DKQpADLstAIIg8AAQsGAAoqi5g");
	var mask_graphics_43 = new cjs.Graphics().p("A1wHlQpJjCgCkXQgDkWJFjKQJAjIM0gFQMygFJKDCQJDDCACEYQADEWo/DIQpGDKs0AEIgnAAQsaAAo1i9g");
	var mask_graphics_44 = new cjs.Graphics().p("A17HiQpMjEgBkXQgCkXJKjHQJEjIM6gCQM4gDJMDDQJGDEABEYQACEWpEDHQpKDIs5ADIgUAAQssAAo/jBg");
	var mask_graphics_45 = new cjs.Graphics().p("A2CHfQpPjFgBkXQAAkXJNjGQJHjHM+gBQM8gBJNDEQJJDGAAEXQABEWpHDHQpODGs8ACIgIAAQs3AApFjEg");
	var mask_graphics_46 = new cjs.Graphics().p("A2HHeQpQjGAAkXQAAkXJPjGQJJjGM/AAQM/AAJPDFQJKDGAAEXQAAEXpJDFQpPDHtAAAIgDAAQs8AApIjFg");
	var mask_graphics_47 = new cjs.Graphics().p("A2JHdQpQjGAAkXQAAkWJQjHQJKjFM/AAQNAAAJQDFQJKDHAAEWQAAEXpKDGQpQDGtAAAQs/AApKjGg");
	var mask_graphics_88 = new cjs.Graphics().p("AuXGtIgegBIiWgEIomnNIj6jbINKjUIBsAAMAshAALIAAAcIAAFKIAAIhI3aAXg");
	var mask_graphics_89 = new cjs.Graphics().p("AmjGuIqwgHInDmUIjbjZILHi4IDrgwMAhaAADIBJAZIENEHICBHGIxYB0g");
	var mask_graphics_90 = new cjs.Graphics().p("AxbGWIlhlbIi8jYIOtj8IWcgEICQAXIIZDEID+FsIrZDQItUAkg");
	var mask_graphics_91 = new cjs.Graphics().p("AxkGHIj/kjIidjYIOokQILmgKIDXAUIMfCCIF9ETIlgEsIptBIg");
	var mask_graphics_92 = new cjs.Graphics().p("AxOF3IgoAAIifjrIh/jXIFGhmIJdi9IA4gRIEeARIQjBBIH4C8IAVGFImIBsg");
	var mask_graphics_93 = new cjs.Graphics().p("AxeFVIifjrIh/jXIPbk0IDjASIRQBpIHrEAIghFpIltBfg");
	var mask_graphics_94 = new cjs.Graphics().p("AxQE0IigjrIh/jXIPck1ICpASIR8CRIHeFBIhXFRIlSBSg");
	var mask_graphics_95 = new cjs.Graphics().p("AwbEXIgogEIigjrIh/jXIFHhmIJdi9IA4gRIBxARISnC5IHRGDIiLE2Ik5BEg");
	var mask_graphics_96 = new cjs.Graphics().p("AvyEMIigjrIh/jXIPck0IULDzIE8GeIkFENIk4A3g");
	var mask_graphics_97 = new cjs.Graphics().p("AuiEGIigjrIh/jXIPck1IT9EbICqG4Il9DmIk4Aqg");
	var mask_graphics_98 = new cjs.Graphics().p("AsrEIIgogJIigjrIh/jXIFHhmIJdi9IA4gRIBEARISsExIAZHTInzC+Ik5Acg");
	var mask_graphics_99 = new cjs.Graphics().p("AtTD/IAAAAIigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_100 = new cjs.Graphics().p("AtTD/IigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_101 = new cjs.Graphics().p("AtTD/IAAAAIigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_102 = new cjs.Graphics().p("AtSD/IgBAAIigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_103 = new cjs.Graphics().p("AtTD/IAAAAIigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_104 = new cjs.Graphics().p("ABsHKIu/jLIigjrIh/jXIPck0IECBCIPuEAIAZHTInzC+Ik5Acg");
	var mask_graphics_105 = new cjs.Graphics().p("AtTD/IigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_106 = new cjs.Graphics().p("AtTD/IigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_107 = new cjs.Graphics().p("AtTD/IigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_108 = new cjs.Graphics().p("AtTD/IigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");
	var mask_graphics_109 = new cjs.Graphics().p("AtTD/IigjrIh/jXIPck0ITwFCIAZHTInzC+Ik5Acg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:226.5,y:-18.95}).wait(1).to({graphics:mask_graphics_15,x:228.9499,y:-11.1684}).wait(1).to({graphics:mask_graphics_16,x:231.275,y:-3.7664}).wait(1).to({graphics:mask_graphics_17,x:233.4821,y:3.2266}).wait(1).to({graphics:mask_graphics_18,x:235.575,y:9.8166}).wait(1).to({graphics:mask_graphics_19,x:237.525,y:16.0242}).wait(1).to({graphics:mask_graphics_20,x:237.5343,y:16.6799}).wait(1).to({graphics:mask_graphics_21,x:237.5488,y:17.35}).wait(1).to({graphics:mask_graphics_22,x:237.5491,y:17.9729}).wait(1).to({graphics:mask_graphics_23,x:237.5744,y:18.6011}).wait(1).to({graphics:mask_graphics_24,x:237.5746,y:19.1697}).wait(1).to({graphics:mask_graphics_25,x:267.3536,y:19.1583}).wait(1).to({graphics:mask_graphics_26,x:277.2826,y:19.1333}).wait(1).to({graphics:mask_graphics_27,x:268.0063,y:20.061}).wait(1).to({graphics:mask_graphics_28,x:259.1792,y:20.9382}).wait(1).to({graphics:mask_graphics_29,x:250.8226,y:21.7653}).wait(1).to({graphics:mask_graphics_30,x:242.9025,y:22.5541}).wait(1).to({graphics:mask_graphics_31,x:235.4269,y:23.2968}).wait(1).to({graphics:mask_graphics_32,x:228.4016,y:23.995}).wait(1).to({graphics:mask_graphics_33,x:221.8511,y:24.6481}).wait(1).to({graphics:mask_graphics_34,x:215.7482,y:25.2485}).wait(1).to({graphics:mask_graphics_35,x:210.0756,y:25.8071}).wait(1).to({graphics:mask_graphics_36,x:204.8754,y:26.3315}).wait(1).to({graphics:mask_graphics_37,x:200.1253,y:26.8176}).wait(1).to({graphics:mask_graphics_38,x:195.8252,y:27.2246}).wait(1).to({graphics:mask_graphics_39,x:191.9751,y:27.6202}).wait(1).to({graphics:mask_graphics_40,x:188.6001,y:27.9499}).wait(1).to({graphics:mask_graphics_41,x:185.65,y:28.2498}).wait(1).to({graphics:mask_graphics_42,x:183.15,y:28.475}).wait(1).to({graphics:mask_graphics_43,x:181.1002,y:28.6762}).wait(1).to({graphics:mask_graphics_44,x:179.525,y:28.8493}).wait(1).to({graphics:mask_graphics_45,x:178.4001,y:28.9747}).wait(1).to({graphics:mask_graphics_46,x:177.725,y:29.025}).wait(1).to({graphics:mask_graphics_47,x:177.5,y:29.05}).wait(41).to({graphics:mask_graphics_88,x:90,y:41.05}).wait(1).to({graphics:mask_graphics_89,x:94.375,y:38.275}).wait(1).to({graphics:mask_graphics_90,x:98.7,y:37.125}).wait(1).to({graphics:mask_graphics_91,x:103,y:35.9}).wait(1).to({graphics:mask_graphics_92,x:108.275,y:34.675}).wait(1).to({graphics:mask_graphics_93,x:105.875,y:38.05}).wait(1).to({graphics:mask_graphics_94,x:104.525,y:41.4}).wait(1).to({graphics:mask_graphics_95,x:103.225,y:44.675}).wait(1).to({graphics:mask_graphics_96,x:95.125,y:45.35}).wait(1).to({graphics:mask_graphics_97,x:87.125,y:46.025}).wait(1).to({graphics:mask_graphics_98,x:79.225,y:46.675}).wait(1).to({graphics:mask_graphics_99,x:63.625,y:46.675}).wait(1).to({graphics:mask_graphics_100,x:48.175,y:46.675}).wait(1).to({graphics:mask_graphics_101,x:32.775,y:46.675}).wait(1).to({graphics:mask_graphics_102,x:17.475,y:46.675}).wait(1).to({graphics:mask_graphics_103,x:2.325,y:46.675}).wait(1).to({graphics:mask_graphics_104,x:-12.775,y:46.675}).wait(1).to({graphics:mask_graphics_105,x:-33.675,y:46.675}).wait(1).to({graphics:mask_graphics_106,x:-54.525,y:46.675}).wait(1).to({graphics:mask_graphics_107,x:-75.325,y:46.675}).wait(1).to({graphics:mask_graphics_108,x:-96.075,y:46.675}).wait(1).to({graphics:mask_graphics_109,x:-116.775,y:46.675}).wait(508));

	// Pattern_2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAA93B").s().p("A58HnIAAgmMArJAABQBnAABfgnQBbglBHhFQBIhEAphaQArhcAEhlIABm6IAmAAIAAGyQABAFAAAGIgBAAQgFBjgmBbQgrBkhNBOQhOBNhkArQhoAshyAAgA58C8IAAgnMArLAABQAqAAAmgPQAmgPAegbQAdgbATgjQASgjAFgnIgBAAIAAgCIAAAAIABm7IAnAAIgBGzIABAHIAAAAQgEAwgWAsQgVAqgkAgQgjAhgsASQguASgyAAg");
	this.shape_20.setTransform(77.1843,20.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BE4F31").s().p("A4MF4IAAgnMArKAABQA5AAA1gWQAygTApgnQAoglAYgxQAZgyAFg4IAAAAIABm6IAnAAIgBG6IAAACIAAAAQgFA8gZA0QgYA4gsArQgvAvg9AZQg9AahDAAg");
	this.shape_21.setTransform(65.975,9.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BC2939").s().p("A4xGcIAAgmMArJAABQBJAABCgbQBAgaAzgvQAzgxAdg+QAfhAAFhHIABAAIAAm6IAnAAIgBG2IAAAGIAAAAQgFBLgeBDQgfBEg2A1Qg5A6hLAfQhLAfhSAAg");
	this.shape_22.setTransform(69.675,13.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DA3932").s().p("A5WHCIAAgnMArJAABQBYAABPggQBOghA9g5QA9g7AkhLQAkhOAFhVIABAAIAAm7IAnAAIgBG1IAAAIIAAAAQgGBYgiBRQglBRhABBQhFBEhYAlQhYAkhhAAg");
	this.shape_23.setTransform(73.4,17.1);

	var maskedShapeInstanceList = [this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},14).to({state:[]},96).wait(507));

	// SpeakerPic_4
	this.instance_2 = new lib.g_SpeakerPic_4("synched",0);
	this.instance_2.setTransform(245.35,8.25,0.7,0.6996,0,0,0,0.1,0.1);
	this.instance_2._off = true;
	var instance_2Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-2,-2,111,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(312).to({_off:false},0).to({regX:0,scaleX:0.9,scaleY:0.8995,x:187.95,y:3.5},20,cjs.Ease.get(1)).wait(66).to({regX:49.9,regY:50,scaleX:0.701,scaleY:0.7007,x:224.3,y:43.25},0).to({x:35,y:40.75},19,cjs.Ease.get(0.8)).to({_off:true},1).wait(199));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(312).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20,cjs.Ease.get(1)).wait(66).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 19,cjs.Ease.get(0.8)).wait(199));

	// SpeakerPic_3
	this.instance_3 = new lib.g_SpeakerPic_3("synched",0);
	this.instance_3.setTransform(250.9,8.25,0.7,0.6996,0,0,0,0.1,0.1);
	this.instance_3._off = true;
	var instance_3Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-2,-2,103,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(306).to({_off:false},0).to({scaleX:0.9,scaleY:0.8995,x:44.1,y:3.5},22,cjs.Ease.get(1)).wait(65).to({regX:49.9,regY:50,scaleX:0.701,scaleY:0.7007,x:75,y:43.25},0).to({x:35,y:42.75},19,cjs.Ease.get(0.8)).to({_off:true},6).wait(199));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(306).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 22,cjs.Ease.get(1)).wait(65).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 19,cjs.Ease.get(0.8)).wait(199));

	// SpeakerPic_2
	this.instance_4 = new lib.g_SpeakerPic_2("synched",0);
	this.instance_4.setTransform(249.9,8.25,0.7,0.6996,0,0,0,0.1,0.1);
	this.instance_4._off = true;
	var instance_4Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-2,-2,104,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(228).to({_off:false},0).to({regX:0,scaleX:0.9,scaleY:0.8995,x:189.8,y:3.5},24,cjs.Ease.get(1)).wait(48).to({regX:49.9,regY:50,scaleX:0.701,scaleY:0.7007,x:219.5,y:42.75},0).to({x:-25,y:40.75},19,cjs.Ease.get(0.8)).to({_off:true},11).wait(287));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(228).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(48).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 19,cjs.Ease.get(0.8)).wait(287));

	// SpeakerPic_1
	this.instance_5 = new lib.g_SpeakerPic_1("synched",0);
	this.instance_5.setTransform(229.85,8.2,0.7,0.6996);
	this.instance_5._off = true;
	var instance_5Filter_6 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-2,-2,119,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(221).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.9,scaleY:0.8995,x:30.1,y:3.5},26,cjs.Ease.get(1)).wait(47).to({regX:49.9,regY:50,scaleX:0.701,scaleY:0.7007,x:62.1,y:43.75},0).to({x:-45,y:42.75},20,cjs.Ease.get(0.8)).to({_off:true},16).wait(287));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(221).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 26,cjs.Ease.get(1)).wait(47).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 20,cjs.Ease.get(0.8)).wait(287));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_111 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_1_graphics_111,x:150,y:125}).wait(506));

	// Text_1
	this.instance_6 = new lib.g_title_1("synched",0);
	this.instance_6.setTransform(-212.25,0);
	this.instance_6._off = true;
	var instance_6Filter_7 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_7];
	this.instance_6.cache(-2,-2,215,59);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(111).to({_off:false},0).to({x:10},23,cjs.Ease.get(1)).wait(67).to({startPosition:0},0).to({x:-19},20).to({_off:true},2).wait(394));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_7).wait(111).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(67).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 20).wait(394));

	// btn_CTA
	this.instance_7 = new lib.btn_CTA();
	this.instance_7.setTransform(6,40.1);
	this.instance_7._off = true;
	var instance_7Filter_8 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_7.filters = [instance_7Filter_8];
	this.instance_7.cache(-3,-4,136,33);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.btn_CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(494).to({_off:false},0).to({y:24.1},23,cjs.Ease.get(1)).wait(100));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_8).wait(494).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(100));

	// Color_Mask
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(166,25,46,0)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_24.setTransform(160,36.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(166,25,46,0.086)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_25.setTransform(160,36.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(166,25,46,0.165)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_26.setTransform(160,36.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(166,25,46,0.243)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_27.setTransform(160,36.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(166,25,46,0.318)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_28.setTransform(160,36.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(166,25,46,0.388)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_29.setTransform(160,36.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(166,25,46,0.455)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_30.setTransform(160,36.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(166,25,46,0.518)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_31.setTransform(160,37);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(166,25,46,0.576)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_32.setTransform(160,37.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(166,25,46,0.631)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_33.setTransform(160,37.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(166,25,46,0.682)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_34.setTransform(160,37.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(166,25,46,0.729)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_35.setTransform(160,37.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(166,25,46,0.773)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_36.setTransform(160,37.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(166,25,46,0.812)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_37.setTransform(160,37.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(166,25,46,0.847)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_38.setTransform(160,37.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(166,25,46,0.878)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_39.setTransform(160,37.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(166,25,46,0.906)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_40.setTransform(160,37.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(166,25,46,0.933)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_41.setTransform(160,37.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(166,25,46,0.953)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_42.setTransform(160,37.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(166,25,46,0.969)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_43.setTransform(160,37.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(166,25,46,0.984)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_44.setTransform(160,37.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(166,25,46,0.992)").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_45.setTransform(160,37.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A6192E").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_46.setTransform(160,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},494).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).wait(100));

	// Text_2_1
	this.instance_8 = new lib.g_contenttxt_1("synched",0);
	this.instance_8.setTransform(337.4,44,1,1,0,0,0,96.5,45);
	this.instance_8._off = true;
	var instance_8Filter_9 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_8.filters = [instance_8Filter_9];
	this.instance_8.cache(-2,-2,307,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(417).to({_off:false},0).to({x:103},24,cjs.Ease.get(1)).wait(53).to({startPosition:0},0).to({y:39.15},23,cjs.Ease.get(1)).wait(100));
	this.timeline.addTween(cjs.Tween.get(instance_8Filter_9).wait(417).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(53).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(100));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:25, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:88, endFrame:88, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:89, endFrame:112, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance_1, startFrame:46, endFrame:46, x:-2, y:-2, w:42, h:48});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:42, h:48});
	this.filterCacheList.push({instance: this.instance_1, startFrame:47, endFrame:64, x:-2, y:-2, w:42, h:48});
	this.filterCacheList.push({instance: this.instance_1, startFrame:199, endFrame:199, x:-2, y:-2, w:42, h:48});
	this.filterCacheList.push({instance: this.instance_1, startFrame:200, endFrame:220, x:-2, y:-2, w:42, h:48});
	this.filterCacheList.push({instance: this.instance_2, startFrame:312, endFrame:312, x:-2, y:-2, w:111, h:52});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:111, h:52});
	this.filterCacheList.push({instance: this.instance_2, startFrame:313, endFrame:332, x:-2, y:-2, w:111, h:52});
	this.filterCacheList.push({instance: this.instance_2, startFrame:398, endFrame:398, x:-2, y:-2, w:111, h:52});
	this.filterCacheList.push({instance: this.instance_2, startFrame:399, endFrame:417, x:-2, y:-2, w:111, h:52});
	this.filterCacheList.push({instance: this.instance_3, startFrame:306, endFrame:306, x:-2, y:-2, w:103, h:52});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:103, h:52});
	this.filterCacheList.push({instance: this.instance_3, startFrame:307, endFrame:328, x:-2, y:-2, w:103, h:52});
	this.filterCacheList.push({instance: this.instance_3, startFrame:393, endFrame:393, x:-2, y:-2, w:103, h:52});
	this.filterCacheList.push({instance: this.instance_3, startFrame:394, endFrame:412, x:-2, y:-2, w:103, h:52});
	this.filterCacheList.push({instance: this.instance_4, startFrame:228, endFrame:228, x:-2, y:-2, w:104, h:52});
	this.filterCacheList.push({instance: this.instance_4, startFrame:0, endFrame:0, x:-2, y:-2, w:104, h:52});
	this.filterCacheList.push({instance: this.instance_4, startFrame:229, endFrame:252, x:-2, y:-2, w:104, h:52});
	this.filterCacheList.push({instance: this.instance_4, startFrame:300, endFrame:300, x:-2, y:-2, w:104, h:52});
	this.filterCacheList.push({instance: this.instance_4, startFrame:301, endFrame:319, x:-2, y:-2, w:104, h:52});
	this.filterCacheList.push({instance: this.instance_5, startFrame:221, endFrame:221, x:-2, y:-2, w:119, h:52});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-2, y:-2, w:119, h:52});
	this.filterCacheList.push({instance: this.instance_5, startFrame:222, endFrame:247, x:-2, y:-2, w:119, h:52});
	this.filterCacheList.push({instance: this.instance_5, startFrame:294, endFrame:294, x:-2, y:-2, w:119, h:52});
	this.filterCacheList.push({instance: this.instance_5, startFrame:295, endFrame:314, x:-2, y:-2, w:119, h:52});
	this.filterCacheList.push({instance: this.instance_6, startFrame:111, endFrame:111, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_6, startFrame:0, endFrame:0, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_6, startFrame:112, endFrame:134, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_6, startFrame:201, endFrame:201, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_6, startFrame:202, endFrame:221, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_7, startFrame:494, endFrame:494, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_7, startFrame:0, endFrame:0, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_7, startFrame:495, endFrame:517, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_7, startFrame:517, endFrame:617, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_8, startFrame:417, endFrame:417, x:-2, y:-2, w:307, h:52});
	this.filterCacheList.push({instance: this.instance_8, startFrame:0, endFrame:0, x:-2, y:-2, w:307, h:52});
	this.filterCacheList.push({instance: this.instance_8, startFrame:418, endFrame:441, x:-2, y:-2, w:307, h:52});
	this.filterCacheList.push({instance: this.instance_8, startFrame:494, endFrame:494, x:-2, y:-2, w:307, h:52});
	this.filterCacheList.push({instance: this.instance_8, startFrame:495, endFrame:517, x:-2, y:-2, w:307, h:52});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.9,543.4,84.7);
// library properties:
lib.properties = {
	id: 'C38F8E925B074A239B4A15BB5DD6BAC8',
	width: 320,
	height: 50,
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