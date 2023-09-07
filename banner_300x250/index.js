(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[604,0,277,172],[604,174,266,120],[0,252,342,80],[344,252,240,66],[586,296,240,66],[344,320,240,66],[0,0,300,250],[302,0,300,250]]}
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



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.5,86);


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
	this.instance = new lib.Bitmap3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-133.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,0,133,60);


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
	this.instance = new lib.CachedBmp_4();
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(5,8.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(5,8.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(5,8.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0633").s().p("AqJD/IAAn9IUTAAIAAH9g");
	this.shape.setTransform(65,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0633").ss(1,1,1).p("AqJj+IUTAAIAAH9I0TAAg");
	this.shape_1.setTransform(65,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqJD/IAAn9IUTAAIAAH9g");
	this.shape_2.setTransform(65,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,132,53);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Bitmap4();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib.banner_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _300x250_Size
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(299));

	// White_Color_Mask
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.067)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.267)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.333)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.4)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.467)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.533)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.6)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.667)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.733)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.8)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.867)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.933)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},258).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},11).wait(15));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_130 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(130).to({graphics:mask_graphics_130,x:150,y:300}).wait(169));

	// CTA
	this.instance = new lib.btn_CTA();
	this.instance.setTransform(246,224.5,1,1,0,0,0,83,25.5);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-3,-3,136,57);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_CTA(), 3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175).to({_off:false},0).to({y:214.5},16,cjs.Ease.get(0.9)).to({_off:true},83).wait(25));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(175).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 16,cjs.Ease.get(0.9)).wait(25));

	// text
	this.instance_1 = new lib.g_txtSFUMedicalSchool("synched",0);
	this.instance_1.setTransform(-63.45,217,1,1,0,0,0,-66.5,28);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(162).to({_off:false},0).to({x:66.55},13,cjs.Ease.get(1)).to({_off:true},99).wait(25));

	// Red_bg
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0633").s().p("AhLEbIAAkCIABAAIAAkyIABAAIBbAAIAWAAIAkAAIAAEuIgkAAIg+AAIAAEGg");
	this.shape_17.setTransform(-10.05,217.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0633").s().p("AhhEbIg5iNIAAh1IABAAIAAiJIBEipIC3AAIA5CNIAACJIgKAYIh5AAIgXA5IAAB1IgiBYg");
	this.shape_18.setTransform(-0.225,217.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0633").s().p("Ah2EbIhth6IAAiIIABAAIAAihICDiRIDWAAIBtB5IAACgIgTAVIiOAAIgrAxIAACJIhDBMg");
	this.shape_19.setTransform(8.925,217.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0633").s().p("AiKEbIidhoIAAiaIAAAAIAAi2IC+h8IDzAAICfBnIAAC1IgdASIigAAIg/ApIAACdIhhBAg");
	this.shape_20.setTransform(17.4,217.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0633").s().p("AicEbIjKhYIAAiqIABAAIAAjKID0hoIENAAIDLBXIAADIIglAPIixAAIhRAjIAACtIh8A2g");
	this.shape_21.setTransform(25.2,217.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0633").s().p("AisEbIjzhIIAAi6IABAAIAAjcIElhWIElAAID0BIIAADZIgsANIjBAAIhiAdIAAC8IiWAtg");
	this.shape_22.setTransform(32.325,217.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0633").s().p("Ai7EbIkYg7IAAjHIABAAIAAjsIAAAAIFShGIE7AAIEZA6IAADpIgzALIjQAAIhwAXIAADLIisAkg");
	this.shape_23.setTransform(38.75,217.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0633").s().p("AjIEbIk5guIAAjUIABAAIAAj7IF5g3IFPAAIE6AtIAAD5Ig5AIIjcAAIh+ATIAADWIjBAdg");
	this.shape_24.setTransform(44.525,217.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0633").s().p("AjTEbIlXgkIAAjeIABAAIAAkIIGdgqIFfAAIFYAjIAAEFIg/AGIjmAAIiLAOIAADhIjSAXg");
	this.shape_25.setTransform(49.6,217.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC0633").s().p("AjdEbIlwgaIAAjoIAAAAIAAkUIG7geIFwAAIFwAaIAAEPIhCAFIjxAAIiVALIAADrIjiAQg");
	this.shape_26.setTransform(54,217.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC0633").s().p("AjmEbImFgSIAAjwIABAAIAAkdIHUgVIGYABIFqARIAAEZIlAADIicAHIAADzIjwAMg");
	this.shape_27.setTransform(57.725,217.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0633").s().p("AqEEPIAAj2IABAAIAAklIHqgNIGGAAIGYALIAAEhInuAGIAAD7ImEAHg");
	this.shape_28.setTransform(60.775,217.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0633").s().p("AqXEUIAAj7IABAAIAAkqIH7gIIGNAAIGmAGIAAEnIn7AEIAAD+ImQAFg");
	this.shape_29.setTransform(63.15,217.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC0633").s().p("AqkEYIAAj+IABAAIAAkvIOZgDIGvACIAAEsIoEABIAAECg");
	this.shape_30.setTransform(64.85,217.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC0633").s().p("AqtEaIAAkBIABAAIAAkxIVagBIAAEuIoKABIAAEEg");
	this.shape_31.setTransform(65.875,217.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0633").s().p("AqvEbIAAkCIABAAIAAkyIAAAAIPGAAIGZAAIAAEuIoNAAIAAEGg");
	this.shape_32.setTransform(66.2,217.15);

	var maskedShapeInstanceList = [this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},147).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},112).wait(25));

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
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0633").s().p("A3bAyIAAhjMAu3AAAIAABjg");
	this.shape_33.setTransform(150,-6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC0633").s().p("A3bBLIAAiVMAu3AAAIAACVg");
	this.shape_34.setTransform(150,-2.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC0633").s().p("A3bBiIAAjEMAu3AAAIAADEg");
	this.shape_35.setTransform(150,1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC0633").s().p("A3bB4IAAjvMAu3AAAIAADvg");
	this.shape_36.setTransform(150,4.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0633").s().p("A3bCMIAAkXMAu3AAAIAAEXg");
	this.shape_37.setTransform(150,8.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0633").s().p("A3bCfIAAk8MAu3AAAIAAE8g");
	this.shape_38.setTransform(150,10.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC0633").s().p("A3bCvIAAldMAu3AAAIAAFdg");
	this.shape_39.setTransform(150,13.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0633").s().p("A3bC+IAAl7MAu3AAAIAAF7g");
	this.shape_40.setTransform(150,15.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC0633").s().p("A3bDKIAAmUMAu3AAAIAAGUg");
	this.shape_41.setTransform(150,17.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC0633").s().p("A3bDWIAAmrMAu3AAAIAAGrg");
	this.shape_42.setTransform(150,19.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC0633").s().p("A3bDfIAAm9MAu3AAAIAAG9g");
	this.shape_43.setTransform(150,21.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC0633").s().p("A3bDnIAAnNMAu3AAAIAAHNg");
	this.shape_44.setTransform(150,22.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC0633").s().p("A3bDtIAAnZMAu3AAAIAAHZg");
	this.shape_45.setTransform(150,23.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC0633").s().p("A3bDxIAAnhMAu3AAAIAAHhg");
	this.shape_46.setTransform(150,23.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0633").s().p("A3bD0IAAnnMAu3AAAIAAHng");
	this.shape_47.setTransform(150,24.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC0633").s().p("A3bD1IAAnpMAu3AAAIAAHpg");
	this.shape_48.setTransform(150,24.5);

	var maskedShapeInstanceList = [this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33}]},147).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},112).wait(25));

	// Photo_B_W
	this.instance_3 = new lib.gpic2("synched",0);
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;
	var instance_3Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-2,-2,304,254);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131).to({_off:false},0).to({startPosition:0},16,cjs.Ease.get(1)).to({_off:true},127).wait(25));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(131).to(new cjs.ColorFilter(1,1,1,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 16,cjs.Ease.get(1)).wait(25));

	// White_Color_Mask
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_49.setTransform(150,125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.078)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_50.setTransform(150,125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.153)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_51.setTransform(150,125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.231)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_52.setTransform(150,125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.306)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_53.setTransform(150,125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.384)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_54.setTransform(150,125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.463)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_55.setTransform(150,125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.537)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_56.setTransform(150,125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.616)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_57.setTransform(150,125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.694)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_58.setTransform(150,125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.769)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_59.setTransform(150,125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.847)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_60.setTransform(150,125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.922)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_61.setTransform(150,125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_62.setTransform(150,125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_63.setTransform(150,125.0015,1,0.4167);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.859)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_64.setTransform(150,125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.729)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_65.setTransform(150,125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.608)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_66.setTransform(150,125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.502)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_67.setTransform(150,125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.404)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_68.setTransform(150,125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.314)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_69.setTransform(150,125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.239)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_70.setTransform(150,125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.173)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_71.setTransform(150,125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.118)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_72.setTransform(150,125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.071)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_73.setTransform(150,125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.035)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_74.setTransform(150,125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.012)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_75.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49}]},116).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_63}]},154).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},1).wait(1));

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
	this.instance_5.setTransform(-172.5,158.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({x:-2.5},14,cjs.Ease.get(1)).to({_off:true},90).wait(169));

	// Red_Bg
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC0633").s().p("AhzGeIAAk0IABAAIAAkBIAAAAIAAkFIBEAAIAAEFIBMAAIAAEBIBWAAIAAE0g");
	this.shape_76.setTransform(-41.025,199.65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0633").s().p("Ai/GeIAAk0IABAAIAAkBIAAAAIAAkFIC4AAIAAEFIBfAAIAAEBIBnAAIAAE0g");
	this.shape_77.setTransform(-27,199.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC0633").s().p("AkGGeIAAk0IABAAIAAkBIABAAIAAkFIEjAAIAAEFIByAAIAAEBIB2AAIAAE0g");
	this.shape_78.setTransform(-13.95,199.65);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0633").s().p("AlHGeIAAk0IABAAIAAkBIABAAIAAkFIGGAAIAAEFICDAAIAAEBICEAAIAAE0g");
	this.shape_79.setTransform(-1.875,199.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC0633").s().p("AmDGeIAAk0IABAAIAAkBIABAAIAAkFIHiAAIAAEFICTAAIAAEBICQAAIAAE0g");
	this.shape_80.setTransform(9.225,199.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0633").s().p("Am5GeIAAk0IAAAAIAAkBIABAAIAAkFII2AAIAAEFIChAAIAAEBICbAAIAAE0g");
	this.shape_81.setTransform(19.4,199.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC0633").s().p("AnrGeIAAk0IABAAIAAkBIAAAAIAAkFIKDAAIAAEFICtAAIAAEBICmAAIAAE0g");
	this.shape_82.setTransform(28.575,199.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC0633").s().p("AoXGeIAAk0IABAAIAAkBIAAAAIAAkFILHAAIAAEFIC3AAIAAEBICwAAIAAE0g");
	this.shape_83.setTransform(36.8,199.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC0633").s().p("Ao/GeIAAk0IABAAIAAkBIABAAIAAkFIMCAAIAAEFIDDAAIAAEBIC4AAIAAE0g");
	this.shape_84.setTransform(44.025,199.65);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC0633").s().p("AphGeIAAk0IABAAIAAkBIABAAIAAkFIM2AAIAAEFIDLAAIAAEBIDAAAIAAE0g");
	this.shape_85.setTransform(50.325,199.65);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC0633").s().p("Ap9GeIAAk0IAAAAIAAkBIABAAIAAkFINiAAIAAEFIDTAAIAAEBIDGAAIAAE0g");
	this.shape_86.setTransform(55.65,199.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC0633").s().p("AqVGeIAAk0IABAAIAAkBIABAAIAAkFIOGAAIAAEFIDYAAIAAEBIDLAAIAAE0g");
	this.shape_87.setTransform(60,199.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC0633").s().p("AqnGeIAAk0IABAAIAAkBIAAAAIAAkFIOjAAIAAEFIDdAAIAAEBIDOAAIAAE0g");
	this.shape_88.setTransform(63.375,199.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC0633").s().p("Aq0GeIAAk0IABAAIAAkBIAAAAIAAkFIO3AAIAAEFIDgAAIAAEBIDRAAIAAE0g");
	this.shape_89.setTransform(65.775,199.65);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC0633").s().p("Aq8GeIAAk0IABAAIAAkBIAAAAIAAkFIPDAAIAAEFIDiAAIAAEBIDTAAIAAE0g");
	this.shape_90.setTransform(67.25,199.65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC0633").s().p("Aq/GeIAAk0IABAAIAAkBIABAAIAAkFIPGAAIAAEFIDjAAIAAEBIDUAAIAAE0g");
	this.shape_91.setTransform(67.725,199.65);

	var maskedShapeInstanceList = [this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_76}]},11).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[]},104).wait(169));

	// Photo_B_W
	this.instance_6 = new lib.gpic1("synched",0);
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},130).wait(154).to({_off:false},0).wait(15));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:175, endFrame:175, x:-3, y:-3, w:136, h:57});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-3, y:-3, w:136, h:57});
	this.filterCacheList.push({instance: this.instance, startFrame:176, endFrame:191, x:-3, y:-3, w:136, h:57});
	this.filterCacheList.push({instance: this.instance, startFrame:192, endFrame:274, x:-3, y:-3, w:136, h:57});
	this.filterCacheList.push({instance: this.instance, startFrame:274, endFrame:299, x:-3, y:-3, w:136, h:57});
	this.filterCacheList.push({instance: this.instance_3, startFrame:131, endFrame:131, x:-2, y:-2, w:304, h:254});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-2, y:-2, w:304, h:254});
	this.filterCacheList.push({instance: this.instance_3, startFrame:132, endFrame:147, x:-2, y:-2, w:304, h:254});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,150,126);
// library properties:
lib.properties = {
	id: 'C38F8E925B074A239B4A15BB5DD6BAC8',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
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