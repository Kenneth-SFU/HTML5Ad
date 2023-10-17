(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[423,235,381,42],[0,199,421,76],[0,277,381,42],[674,0,291,64],[0,0,470,197],[674,66,260,56],[674,124,260,56],[383,279,260,56],[472,0,200,233],[806,182,100,100]]}
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



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CMNS50 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Speaker = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
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
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(0,17.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
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
	mask.graphics.p("AkaEaQh1h0AAimQAAikB1h2QB2h1CkAAQCmAAB1B1QB1B2AACkQAACmh1B0Qh1B2imAAQikAAh2h2g");
	mask.setTransform(40,40);

	// FlashAICB
	this.instance = new lib.Speaker();
	this.instance.setTransform(0,0,0.8,0.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


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
	this.instance.setTransform(0,0,0.3432,0.3433);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.7,80);


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
p.nominalBounds = new cjs.Rectangle(0,0,235,98.5);


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
	this.instance.setTransform(0,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0633").ss(1,1,1).p("AqJiLIUTAAIAAEXI0TAAg");
	this.shape.setTransform(65,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqJCMIAAkXIUTAAIAAEXg");
	this.shape_1.setTransform(65,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0633").s().p("AqJCMIAAkXIUTAAIAAEXg");
	this.shape_2.setTransform(65,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,132,30);


// stage content:
(lib.cmns50th_320x100 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape.setTransform(160,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(63,48,50,0.102)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_1.setTransform(160,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(74,46,50,0.2)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_2.setTransform(160,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(84,43,50,0.29)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_3.setTransform(160,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(94,41,49,0.376)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_4.setTransform(160,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(104,39,49,0.459)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_5.setTransform(160,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(112,37,48,0.533)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_6.setTransform(160,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(120,35,48,0.6)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_7.setTransform(160,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(127,34,48,0.667)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_8.setTransform(160,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(134,32,47,0.722)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_9.setTransform(160,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(140,31,47,0.776)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_10.setTransform(160,50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(146,30,47,0.824)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_11.setTransform(160,50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(150,29,47,0.863)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_12.setTransform(160,50);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(155,28,46,0.902)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_13.setTransform(160,50);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(158,27,46,0.929)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_14.setTransform(160,50);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(161,26,46,0.957)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_15.setTransform(160,50);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(163,26,46,0.976)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_16.setTransform(160,50);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(165,25,46,0.988)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_17.setTransform(160,50);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(166,25,46,0.996)").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_18.setTransform(160,50);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A6192E").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_19.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},407).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(2));

	// Logo_SOC
	this.instance = new lib.g_SFU_SOC_Logo("synched",0);
	this.instance.setTransform(107,-21.9,1,1,0,0,0,82,18.1);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,150,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:18.1},24,cjs.Ease.get(1)).wait(169).to({startPosition:0},0).to({startPosition:0},21).to({_off:true},1).wait(212));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24,cjs.Ease.get(1)).wait(169).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 21).wait(212));

	// Logo_CMNS50
	this.instance_1 = new lib.g_Logo_CMNS50("synched",0);
	this.instance_1.setTransform(241.35,10);
	this.instance_1._off = true;
	var instance_1Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-2,-2,73,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({x:236.35},18,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({x:246.35},13,cjs.Ease.get(1)).wait(71).to({regX:82,regY:30,x:328.35,y:40},0).to({x:333.35},21,cjs.Ease.get(1)).to({_off:true},1).wait(212));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(38).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18,cjs.Ease.get(1)).wait(54).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 13,cjs.Ease.get(1)).wait(71).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 21,cjs.Ease.get(1)).wait(212));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("AgHHCIAAuDIAPAAIAAODg");
	var mask_graphics_18 = new cjs.Graphics().p("AhYDXIAAqbIARACICgF+IgBHDIggBEIgSACg");
	var mask_graphics_19 = new cjs.Graphics().p("AimEvIAAr1IAUAEIE5FPIgEIBIg+A3IgTACg");
	var mask_graphics_20 = new cjs.Graphics().p("AjvGCIAAtKIAVAFIHKEkIgFI7IhbArIgVACg");
	var mask_graphics_21 = new cjs.Graphics().p("Ak0nNIAXAGIJSD7IgGJ0Ih2AdIgYAEInVAFg");
	var mask_graphics_22 = new cjs.Graphics().p("Al1nzICAAmIJrC2IgIKnIpjBTIiAARg");
	var mask_graphics_23 = new cjs.Graphics().p("AoBnzICIAjIN7DGIhuKnIuVBXg");
	var mask_graphics_24 = new cjs.Graphics().p("AqInzICOAgISDDVIjPKmIxCBMg");
	var mask_graphics_25 = new cjs.Graphics().p("AsMnzICWAeIWDDjIkwKmIzpBAg");
	var mask_graphics_26 = new cjs.Graphics().p("AuLnzICcAaIZ7DyImLKmI2MA1g");
	var mask_graphics_27 = new cjs.Graphics().p("AwHnzMAgPAEYInlKlI4qAqg");
	var mask_graphics_28 = new cjs.Graphics().p("Ax/nzICqAWMAhUAENIo8KkI4YAdIiqADg");
	var mask_graphics_29 = new cjs.Graphics().p("AyTFEIAAsoMAknAFVIg7CZIjuDuIjlDSIjBAUI4jAHg");
	var mask_graphics_30 = new cjs.Graphics().p("AxQHSIhmh3IAAs3MAlPAGEIAeB9IkDDeIkAC4IjCAig");
	var mask_graphics_31 = new cjs.Graphics().p("AxeG8IiThOIAAtGMAlzAGwIBwBjIkXDPIkYCgIjCAvg");
	var mask_graphics_32 = new cjs.Graphics().p("AxrGoIi9gpIAAtUMAmUAHYIC9BMIkpDBIkuCKIjEA7g");
	var mask_graphics_33 = new cjs.Graphics().p("Ay8GUIiegFIAAtgICeAgMAoXAIRIk6C2IoHC8g");
	var mask_graphics_34 = new cjs.Graphics().p("A1aGfIAAt/MAq1AIyIkqEJIomCGg");
	var mask_graphics_35 = new cjs.Graphics().p("A1ZGtIAAuYMAqzAIxIkcFNIo/BZg");
	var mask_graphics_36 = new cjs.Graphics().p("A1YG3IAAurMAqxAIxIkQGCIpTA2g");
	var mask_graphics_37 = new cjs.Graphics().p("A1YG/IAAu5MAqxAIxIkIGnIphAdg");
	var mask_graphics_38 = new cjs.Graphics().p("A1YHDIAAvBMAqxAIxIkEG9IppAPg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay+HKIiagGIAAvEICaAgMAoXAISIkDHFIpsAKg");
	var mask_graphics_83 = new cjs.Graphics().p("Au1PAIiWgKIomwIIj6nsINKnbIBsABMAshAAYIAAMiIAATGI3aAyg");
	var mask_graphics_84 = new cjs.Graphics().p("ArOPRIlCgtIm6rTIhzjtIjendIAAgBIMYndILNg8IakAOIF9AkIAtGdIAETqIgZDtIvOB2ImuALg");
	var mask_graphics_85 = new cjs.Graphics().p("AqqPYIkshDInPqSIknq1IAAgBILnnfIKUh/IZcANIFhBFIBaF3IAHSzIgzDXIuDDJImbAHg");
	var mask_graphics_86 = new cjs.Graphics().p("AqHPgIkVhaInlpRIj8qhIAAAAIK2nhIJcjCIYUAMIFEBmICGFPIALR+IhMDDIs4EYImJAEg");
	var mask_graphics_87 = new cjs.Graphics().p("ApkPnIj/hvIn5oQIjSqNIAAgBIKEnjIIkkDIXOAKIEoCHICyEoIANRKIhkCsIrtFqIl4AAg");
	var mask_graphics_88 = new cjs.Graphics().p("AFbQJIucgcIjpiFIoPnQIiop6IJUnlIHulFIWGAJIENCnIDdECIARQWIh9CXIqkG6g");
	var mask_graphics_89 = new cjs.Graphics().p("AoePzIr3osIh/plIPbttIVBAIIH4GjIAVPiIrwKKg");
	var mask_graphics_90 = new cjs.Graphics().p("AmqP+IsaneIidp5IQLusISqgGIH1FuIAZO9Ip4Lsg");
	var mask_graphics_91 = new cjs.Graphics().p("Ak4QNIs7mQIi7qOIQ6vpIQVgUIHyE4IAcOYIoANNg");
	var mask_graphics_92 = new cjs.Graphics().p("AwkLTIjXqiIRownIOBghIHvEEIAfN0ImJOsIw6ALg");
	var mask_graphics_93 = new cjs.Graphics().p("AvUMnIj1q1ISWxjILvgvIHrDPIAjNRIkSQKIwOAXg");
	var mask_graphics_94 = new cjs.Graphics().p("AuGN8IkRrJITCygIJfg8IHoCcIAmMsIidRoIviAjg");
	var mask_graphics_95 = new cjs.Graphics().p("As4PPIkurcITwzcIHOhJIHlBoIAqMJIgqTGIu2Aug");
	var mask_graphics_96 = new cjs.Graphics().p("AADQQIleg1InTi+Ij6rfINmsbIC4iXID9iaIEvgUIB2ATIF0DEIAdL+IgYMpIhqEzIlqAUg");
	var mask_graphics_97 = new cjs.Graphics().p("Ah+PwIlWhEIlQk8IjHrgIN3rxIDAiBIEPhPIEqAJIBSA+IEGEfIAPLzIgVMeIjGDVIlkAXg");
	var mask_graphics_98 = new cjs.Graphics().p("Aj+PaIlQhSIjMm6IiUrjIOGrEIDKhsIEggEIElAmIAvBoICXF5IABAPIABLZIgRMTIkhB5IlfAYg");
	var mask_graphics_99 = new cjs.Graphics().p("Aq9OLIgOgEIit0bIOUqZIDVhXIJQCJIA4JzIgWUTIgEDEIrUA2g");
	var mask_graphics_100 = new cjs.Graphics().p("AllPHIkejYIgmmoIicstIMMmNICVhiIDJhZIFIAIICnBsIAsHMIAGCJIgkS/IhBCiIl5AxIk2ACg");
	var mask_graphics_101 = new cjs.Graphics().p("AglPwImIhRIiOkvIgTmVIjFr7IMajzICUhVIC+hZIEuhCIBgCfIAtG2IgBCDIgySEIh8BoIllBDg");
	var mask_graphics_102 = new cjs.Graphics().p("AjxOjIkGgpIABsGIjurKIMphaIJakuIBGJzIhGTGIj5BAIghAIIjtA8g");
	var mask_graphics_103 = new cjs.Graphics().p("Ai7IcIghgTIm3l+IGVmwIAAgBIDTkTIC/irIDDA6IASAIIEfFdIAMHhIhJBlIi7DcIlZEIg");
	var mask_graphics_104 = new cjs.Graphics().p("AlnO/IjtgkIgagEIABsGIAZiKIArjpIFlo4ICOjhIJfA5IBGJzIhGTGIkaBIIjuA9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:-20.75,y:45}).wait(1).to({graphics:mask_graphics_18,x:-11.775,y:45.25}).wait(1).to({graphics:mask_graphics_19,x:-3.225,y:45.5}).wait(1).to({graphics:mask_graphics_20,x:4.85,y:45.725}).wait(1).to({graphics:mask_graphics_21,x:12.475,y:46.2}).wait(1).to({graphics:mask_graphics_22,x:19.625,y:50}).wait(1).to({graphics:mask_graphics_23,x:32.825,y:50}).wait(1).to({graphics:mask_graphics_24,x:45.65,y:50}).wait(1).to({graphics:mask_graphics_25,x:58.1,y:50}).wait(1).to({graphics:mask_graphics_26,x:70.15,y:50}).wait(1).to({graphics:mask_graphics_27,x:81.875,y:50}).wait(1).to({graphics:mask_graphics_28,x:93.2,y:50}).wait(1).to({graphics:mask_graphics_29,x:95.55,y:48.525}).wait(1).to({graphics:mask_graphics_30,x:99.225,y:47.725}).wait(1).to({graphics:mask_graphics_31,x:105.4,y:47.325}).wait(1).to({graphics:mask_graphics_32,x:111.075,y:46.95}).wait(1).to({graphics:mask_graphics_33,x:116.275,y:46.625}).wait(1).to({graphics:mask_graphics_34,x:116.35,y:48.05}).wait(1).to({graphics:mask_graphics_35,x:116.425,y:49.2}).wait(1).to({graphics:mask_graphics_36,x:116.475,y:50.1}).wait(1).to({graphics:mask_graphics_37,x:116.5,y:50.725}).wait(1).to({graphics:mask_graphics_38,x:116.525,y:51.125}).wait(1).to({graphics:mask_graphics_39,x:116.525,y:51.25}).wait(44).to({graphics:mask_graphics_83,x:90,y:145}).wait(1).to({graphics:mask_graphics_84,x:99.9,y:145.175}).wait(1).to({graphics:mask_graphics_85,x:109.725,y:145}).wait(1).to({graphics:mask_graphics_86,x:119.475,y:144.85}).wait(1).to({graphics:mask_graphics_87,x:129.15,y:144.675}).wait(1).to({graphics:mask_graphics_88,x:138.75,y:144.675}).wait(1).to({graphics:mask_graphics_89,x:148.275,y:144.675}).wait(1).to({graphics:mask_graphics_90,x:155.225,y:144.45}).wait(1).to({graphics:mask_graphics_91,x:162.125,y:143.85}).wait(1).to({graphics:mask_graphics_92,x:169,y:143.775}).wait(1).to({graphics:mask_graphics_93,x:175.8,y:143.775}).wait(1).to({graphics:mask_graphics_94,x:182.525,y:143.75}).wait(1).to({graphics:mask_graphics_95,x:189.225,y:143.75}).wait(1).to({graphics:mask_graphics_96,x:197.05,y:150.55}).wait(1).to({graphics:mask_graphics_97,x:204.775,y:157.025}).wait(1).to({graphics:mask_graphics_98,x:212.45,y:162.45}).wait(1).to({graphics:mask_graphics_99,x:220.65,y:164.25}).wait(1).to({graphics:mask_graphics_100,x:228.025,y:165.1}).wait(1).to({graphics:mask_graphics_101,x:235.35,y:163.65}).wait(1).to({graphics:mask_graphics_102,x:242.85,y:161.925}).wait(1).to({graphics:mask_graphics_103,x:291.725,y:162.85}).wait(1).to({graphics:mask_graphics_104,x:344.675,y:159.075}).wait(324));

	// Pattern_2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BC2939").s().p("AVJGAQhSAAhLgfQhKgfg6g6Qg2g2gfhDQgehEgEhKIgBAAQgFhGgfhAQgdg/gzgvQgygwhAgaQhDgbhJAAMgrJAABIAAgnMArJgABQBTAABKAfQBLAfA5A6QA2A2AfBDQAfBEAEBKIABAAQAEBGAfBBQAeA9AzAwQAyAwBAAaQBCAbBJAAINDAAIAAAng");
	this.shape_20.setTransform(106,101.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BE4F31").s().p("AVJGAQhhAAhYgkQhYglhEhEQhBhBgkhRQgjhRgFhYIgBAAQgFg4gYgzQgZgxgoglQgogmgzgUQg1gVg5AAMgrKAABIAAgnMArKgABQBDAAA9AZQA9AaAwAvQArArAYA3QAZA1AFA8IABAAQAEBVAkBOQAkBMA9A6QA9A6BNAfQBRAhBXAAINDAAIAAAng");
	this.shape_21.setTransform(106,108.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAA93B").s().p("AVJIWQhyAAhngsQhlgrhNhMQhNhOgrhlQgnhdgEhkIABAAQgFgngTgjQgSgkgegbQgegbgmgOQgmgPgpAAMgrMAABIAAgnMArMgABQAxAAAuASQAsASAjAgQAkAgAVArQAWAsAEAwIAAAAQAFBkApBaQAqBaBIBEQBHBFBbAlQBfAnBmAAINDAAIAAAngAVJDqQgxAAgvgSQgsgSgkggQgighgWgqQgVgqgFgvIgBAAQgEhlgrhcQgphahIhEQhHhFhbglQhegnhoAAMgrJAABIAAgnMArJgABQByAABpAsQBjArBOBMQBOBPAqBjQAnBcAEBjIABAAQAEAoATAlQASAkAeAbQAeAbAmAOQAnAPApAAINDAAIAAAng");
	this.shape_22.setTransform(106,101.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DA3932").s().p("AVJGAQhDAAg9gZQg9gZgvgwQgsgrgZg3QgYg1gEg8IgCAAQgEhVglhOQgkhLg9g7Qg8g6hOggQhQgghYAAMgrJAABIAAgnMArJgABQBiAABYAkQBYAlBEBFQBABAAlBSQAjBQAGBYIAAAAQAEA4AZAzQAZAwAoAmQAoAmAzAUQA1AWA5gBINDAAIAAAng");
	this.shape_23.setTransform(106,93.8);

	var maskedShapeInstanceList = [this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},17).to({state:[]},88).wait(323));

	// SpeakerPic
	this.instance_2 = new lib.g_SpeakerPic("synched",0);
	this.instance_2.setTransform(308.9,41.2,0.701,0.7007,0,0,0,49.9,50);
	this.instance_2._off = true;
	var instance_2Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-2,-2,84,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(216).to({_off:false},0).to({x:278.4,y:39.2},18,cjs.Ease.get(1)).to({_off:true},193).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(216).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 18,cjs.Ease.get(1)).wait(1));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_97 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_1_graphics_97,x:150,y:125}).wait(331));

	// Text_1
	this.instance_3 = new lib.g_title_1("synched",0);
	this.instance_3.setTransform(-224.25,44);
	this.instance_3._off = true;
	var instance_3Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-2,-2,215,59);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({_off:false},0).to({x:22},23,cjs.Ease.get(1)).wait(76).to({startPosition:0},0).to({x:17},20).to({_off:true},2).wait(210));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(97).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(76).to(new cjs.ColorFilter(0,0,0,1,166,25,47,0), 20).wait(210));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_228 = new cjs.Graphics().p("AygH5IAAvxMAlBAAAIAAPxg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(228).to({graphics:mask_2_graphics_228,x:118.475,y:49.55}).wait(200));

	// Text_2
	this.instance_4 = new lib.g_contenttxt_1("synched",0);
	this.instance_4.setTransform(337.4,45.15,1,1,0,0,0,96.5,45);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(228).to({_off:false},0).to({x:103},24,cjs.Ease.get(1)).to({_off:true},175).wait(1));

	// btn_CTA
	this.instance_5 = new lib.btn_CTA();
	this.instance_5.setTransform(190,67.75);
	this.instance_5._off = true;
	var instance_5Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_5];
	this.instance_5.cache(-3,-3,136,34);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.btn_CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(249).to({_off:false},0).to({y:72.5},23,cjs.Ease.get(1)).to({_off:true},155).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_5).wait(249).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.get(1)).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:25, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:194, endFrame:194, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:195, endFrame:215, x:-2, y:-2, w:150, h:36});
	this.filterCacheList.push({instance: this.instance_1, startFrame:38, endFrame:38, x:-2, y:-2, w:73, h:84});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:73, h:84});
	this.filterCacheList.push({instance: this.instance_1, startFrame:39, endFrame:56, x:-2, y:-2, w:73, h:84});
	this.filterCacheList.push({instance: this.instance_1, startFrame:110, endFrame:110, x:-2, y:-2, w:73, h:84});
	this.filterCacheList.push({instance: this.instance_1, startFrame:111, endFrame:123, x:-2, y:-2, w:73, h:84});
	this.filterCacheList.push({instance: this.instance_1, startFrame:194, endFrame:194, x:-2, y:-2, w:73, h:84});
	this.filterCacheList.push({instance: this.instance_1, startFrame:195, endFrame:215, x:-2, y:-2, w:73, h:84});
	this.filterCacheList.push({instance: this.instance_2, startFrame:216, endFrame:216, x:-2, y:-2, w:84, h:84});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:84, h:84});
	this.filterCacheList.push({instance: this.instance_2, startFrame:217, endFrame:234, x:-2, y:-2, w:84, h:84});
	this.filterCacheList.push({instance: this.instance_3, startFrame:97, endFrame:97, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_3, startFrame:98, endFrame:120, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_3, startFrame:196, endFrame:196, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_3, startFrame:197, endFrame:216, x:-2, y:-2, w:215, h:59});
	this.filterCacheList.push({instance: this.instance_5, startFrame:249, endFrame:249, x:-3, y:-3, w:136, h:34});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-3, y:-3, w:136, h:34});
	this.filterCacheList.push({instance: this.instance_5, startFrame:250, endFrame:272, x:-3, y:-3, w:136, h:34});
	this.filterCacheList.push({instance: this.instance_5, startFrame:273, endFrame:427, x:-3, y:-3, w:136, h:34});
	this.filterCacheList.push({instance: this.instance_5, startFrame:427, endFrame:428, x:-3, y:-3, w:136, h:34});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330,154.7);
// library properties:
lib.properties = {
	id: 'C38F8E925B074A239B4A15BB5DD6BAC8',
	width: 320,
	height: 100,
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