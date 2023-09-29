(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,349,381,42],[592,0,421,76],[0,393,381,42],[592,78,291,64],[0,0,590,84],[0,86,590,84],[0,263,554,84],[0,172,554,89],[758,144,260,56],[758,202,260,56],[758,260,260,56],[556,172,200,233],[383,349,100,100]]}
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



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CMNS50 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Speaker = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(0,17.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.5,55.2);


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
	mask.graphics.p("AipCqQhGhGAAhkQAAhjBGhGQBGhGBjAAQBjAABHBGQBGBGAABjQAABkhGBGQhHBGhjAAQhjAAhGhGg");
	mask.setTransform(24,24);

	// FlashAICB
	this.instance = new lib.Speaker();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


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
	this.instance = new lib.CachedBmp_8();
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


(lib.g_contenttxt_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(0,2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,295,42);


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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,44.5);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},584).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(2));

	// Logo_SOC
	this.instance = new lib.g_SFU_SOC_Logo("synched",0);
	this.instance.setTransform(107,-21.9,1,1,0,0,0,82,18.1);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,150,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:18.1},24,cjs.Ease.get(1)).wait(63).to({startPosition:0},0).to({y:-13.9},24).to({_off:true},2).wait(491));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(63).to(new cjs.ColorFilter(0,0,0,1,166,25,46,0), 24).wait(491));

	// Logo_CMNS50
	this.instance_1 = new lib.g_Logo_CMNS50("synched",0);
	this.instance_1.setTransform(268.25,3.6);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-2,-2,42,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({startPosition:0},18,cjs.Ease.get(1)).wait(135).to({regX:82,regY:30,x:350.25,y:33.6},0).to({x:362.25},21,cjs.Ease.get(1)).to({_off:true},1).wait(384));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(46).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18,cjs.Ease.get(1)).wait(135).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 21,cjs.Ease.get(1)).wait(384));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:226.5,y:-18.95}).wait(1).to({graphics:mask_graphics_15,x:228.9499,y:-11.1684}).wait(1).to({graphics:mask_graphics_16,x:231.275,y:-3.7664}).wait(1).to({graphics:mask_graphics_17,x:233.4821,y:3.2266}).wait(1).to({graphics:mask_graphics_18,x:235.575,y:9.8166}).wait(1).to({graphics:mask_graphics_19,x:237.525,y:16.0242}).wait(1).to({graphics:mask_graphics_20,x:237.5343,y:16.6799}).wait(1).to({graphics:mask_graphics_21,x:237.5488,y:17.35}).wait(1).to({graphics:mask_graphics_22,x:237.5491,y:17.9729}).wait(1).to({graphics:mask_graphics_23,x:237.5744,y:18.6011}).wait(1).to({graphics:mask_graphics_24,x:237.5746,y:19.1697}).wait(1).to({graphics:mask_graphics_25,x:267.3536,y:19.1583}).wait(1).to({graphics:mask_graphics_26,x:277.2826,y:19.1333}).wait(1).to({graphics:mask_graphics_27,x:268.0063,y:20.061}).wait(1).to({graphics:mask_graphics_28,x:259.1792,y:20.9382}).wait(1).to({graphics:mask_graphics_29,x:250.8226,y:21.7653}).wait(1).to({graphics:mask_graphics_30,x:242.9025,y:22.5541}).wait(1).to({graphics:mask_graphics_31,x:235.4269,y:23.2968}).wait(1).to({graphics:mask_graphics_32,x:228.4016,y:23.995}).wait(1).to({graphics:mask_graphics_33,x:221.8511,y:24.6481}).wait(1).to({graphics:mask_graphics_34,x:215.7482,y:25.2485}).wait(1).to({graphics:mask_graphics_35,x:210.0756,y:25.8071}).wait(1).to({graphics:mask_graphics_36,x:204.8754,y:26.3315}).wait(1).to({graphics:mask_graphics_37,x:200.1253,y:26.8176}).wait(1).to({graphics:mask_graphics_38,x:195.8252,y:27.2246}).wait(1).to({graphics:mask_graphics_39,x:191.9751,y:27.6202}).wait(1).to({graphics:mask_graphics_40,x:188.6001,y:27.9499}).wait(1).to({graphics:mask_graphics_41,x:185.65,y:28.2498}).wait(1).to({graphics:mask_graphics_42,x:183.15,y:28.475}).wait(1).to({graphics:mask_graphics_43,x:181.1002,y:28.6762}).wait(1).to({graphics:mask_graphics_44,x:179.525,y:28.8493}).wait(1).to({graphics:mask_graphics_45,x:178.4001,y:28.9747}).wait(1).to({graphics:mask_graphics_46,x:177.725,y:29.025}).wait(1).to({graphics:mask_graphics_47,x:177.5,y:29.05}).wait(41).to({graphics:mask_graphics_88,x:90,y:41.05}).wait(1).to({graphics:mask_graphics_89,x:94.375,y:38.275}).wait(1).to({graphics:mask_graphics_90,x:98.7,y:37.125}).wait(1).to({graphics:mask_graphics_91,x:103,y:35.9}).wait(1).to({graphics:mask_graphics_92,x:108.275,y:34.675}).wait(1).to({graphics:mask_graphics_93,x:105.875,y:38.05}).wait(1).to({graphics:mask_graphics_94,x:104.525,y:41.4}).wait(1).to({graphics:mask_graphics_95,x:103.225,y:44.675}).wait(1).to({graphics:mask_graphics_96,x:95.125,y:45.35}).wait(1).to({graphics:mask_graphics_97,x:87.125,y:46.025}).wait(1).to({graphics:mask_graphics_98,x:79.225,y:46.675}).wait(1).to({graphics:mask_graphics_99,x:63.625,y:46.675}).wait(1).to({graphics:mask_graphics_100,x:48.175,y:46.675}).wait(1).to({graphics:mask_graphics_101,x:32.775,y:46.675}).wait(1).to({graphics:mask_graphics_102,x:17.475,y:46.675}).wait(1).to({graphics:mask_graphics_103,x:2.325,y:46.675}).wait(1).to({graphics:mask_graphics_104,x:-12.775,y:46.675}).wait(1).to({graphics:mask_graphics_105,x:-33.675,y:46.675}).wait(1).to({graphics:mask_graphics_106,x:-54.525,y:46.675}).wait(1).to({graphics:mask_graphics_107,x:-75.325,y:46.675}).wait(1).to({graphics:mask_graphics_108,x:-96.075,y:46.675}).wait(1).to({graphics:mask_graphics_109,x:-116.775,y:46.675}).wait(496));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},14).to({state:[]},96).wait(495));

	// SpeakerPic
	this.instance_2 = new lib.g_SpeakerPic("synched",0);
	this.instance_2.setTransform(263.95,3.2,0.9,0.9);
	this.instance_2._off = true;
	var instance_2Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-2,-2,52,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(221).to({_off:false},0).to({x:271.95},24,cjs.Ease.get(1)).to({_off:true},359).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(221).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_111 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_1_graphics_111,x:150,y:125}).wait(494));

	// Text_1
	this.instance_3 = new lib.g_title_1("synched",0);
	this.instance_3.setTransform(-212.25,0);
	this.instance_3._off = true;
	var instance_3Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-2,-2,215,59);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(111).to({_off:false},0).to({x:10},23,cjs.Ease.get(1)).wait(67).to({startPosition:0},0).to({x:-19},20).to({_off:true},2).wait(382));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(111).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(67).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 20).wait(382));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_233 = new cjs.Graphics().p("A0yD6IAAnzMAplAAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(233).to({graphics:mask_2_graphics_233,x:133.075,y:25}).wait(372));

	// Text_2_1_copy
	this.instance_4 = new lib.g_contenttxt_2("synched",0);
	this.instance_4.setTransform(337.4,45.15,1,1,0,0,0,96.5,45);
	this.instance_4._off = true;
	var instance_4Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-2,0,299,46);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(338).to({_off:false},0).to({x:103},24,cjs.Ease.get(1)).wait(96).to({startPosition:0},0).to({x:55},21,cjs.Ease.get(1)).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(338).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(96).to(new cjs.ColorFilter(0,0,0,1,166,25,46,0), 21,cjs.Ease.get(1)).wait(125));

	// btn_CTA
	this.instance_5 = new lib.btn_CTA();
	this.instance_5.setTransform(6,30.1);
	this.instance_5._off = true;
	var instance_5Filter_6 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-3,-4,136,33);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.btn_CTA(), 3);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(480).to({_off:false},0).to({y:24.1},23,cjs.Ease.get(1)).to({_off:true},101).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(480).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(1));

	// Mask
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A6192E").s().p("A4/B9IAAj5MAx/AAAIAAD5g");
	this.shape_24.setTransform(160,37.5);
	this.shape_24._off = true;

	var maskedShapeInstanceList = [this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(480).to({_off:false},0).to({_off:true},124).wait(1));

	// Text_2_1
	this.instance_6 = new lib.g_contenttxt_1("synched",0);
	this.instance_6.setTransform(337.4,45.15,1,1,0,0,0,96.5,45);
	this.instance_6._off = true;
	var instance_6Filter_7 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_7];
	this.instance_6.cache(-2,-2,281,49);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(233).to({_off:false},0).to({x:103},24,cjs.Ease.get(1)).wait(78).to({startPosition:0},0).to({x:55},21,cjs.Ease.get(1)).to({_off:true},1).wait(123).to({_off:false,x:337.4},0).to({x:103},24,cjs.Ease.get(1)).wait(78).to({startPosition:0},0).to({x:55},21,cjs.Ease.get(1)).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_7).wait(233).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(78).to(new cjs.ColorFilter(0,0,0,1,166,25,46,0), 21,cjs.Ease.get(1)).wait(123).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(102).to(new cjs.ColorFilter(0,0,0,1,166,25,46,0), 21,cjs.Ease.get(1)).wait(1));

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
	this.filterCacheList.push({instance: this.instance_2, startFrame:221, endFrame:221, x:-2, y:-2, w:52, h:52});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:52, h:52});
	this.filterCacheList.push({instance: this.instance_2, startFrame:222, endFrame:245, x:-2, y:-2, w:52, h:52});
	this.filterCacheList.push({instance: this.instance_3, startFrame:111, endFrame:111, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_3, startFrame:112, endFrame:134, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_3, startFrame:201, endFrame:201, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_3, startFrame:202, endFrame:221, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_4, startFrame:338, endFrame:338, x:-2, y:0, w:299, h:46});
	this.filterCacheList.push({instance: this.instance_4, startFrame:339, endFrame:362, x:-2, y:0, w:299, h:46});
	this.filterCacheList.push({instance: this.instance_4, startFrame:458, endFrame:458, x:-2, y:0, w:299, h:46});
	this.filterCacheList.push({instance: this.instance_4, startFrame:459, endFrame:479, x:-2, y:0, w:299, h:46});
	this.filterCacheList.push({instance: this.instance_5, startFrame:480, endFrame:480, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_5, startFrame:481, endFrame:503, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_5, startFrame:504, endFrame:604, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_5, startFrame:604, endFrame:605, x:-3, y:-4, w:136, h:33});
	this.filterCacheList.push({instance: this.instance_6, startFrame:233, endFrame:233, x:-2, y:-2, w:281, h:49});
	this.filterCacheList.push({instance: this.instance_6, startFrame:234, endFrame:257, x:-2, y:-2, w:281, h:49});
	this.filterCacheList.push({instance: this.instance_6, startFrame:335, endFrame:335, x:-2, y:-2, w:281, h:49});
	this.filterCacheList.push({instance: this.instance_6, startFrame:336, endFrame:356, x:-2, y:-2, w:281, h:49});
	this.filterCacheList.push({instance: this.instance_6, startFrame:480, endFrame:480, x:-2, y:-2, w:281, h:49});
	this.filterCacheList.push({instance: this.instance_6, startFrame:582, endFrame:582, x:-2, y:-2, w:281, h:49});
	this.filterCacheList.push({instance: this.instance_6, startFrame:583, endFrame:603, x:-2, y:-2, w:281, h:49});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.9,320,84.7);
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