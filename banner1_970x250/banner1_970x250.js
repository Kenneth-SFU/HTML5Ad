(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner1_970x250_atlas_1", frames: [[0,0,701,448],[0,450,649,308],[651,505,681,160],[703,253,970,250],[703,0,970,251]]}
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



(lib.CachedBmp_5 = function() {
	this.initialize(ss["banner1_970x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["banner1_970x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["banner1_970x250_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["banner1_970x250_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PicStudyBW = function() {
	this.initialize(ss["banner1_970x250_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.gtext1 = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(0,0,350.5,224);


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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-324.6,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.6,0,324.5,154);


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
	this.instance = new lib.PicStudyBW();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,251);


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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340.5,80);


(lib.g_photo1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


// stage content:
(lib.banner1_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {school:106};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		//_this.gotoAndPlay('school');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(239));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_155 = new cjs.Graphics().p("A/PTiMAAAgnDMA+fAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_graphics_155,x:200,y:125}).wait(84));

	// SFU_horizontal_reversed_colour_rgb_eps
	this.instance = new lib.g_SFULogohorizontal("synched",0);
	this.instance.setTransform(146.3,-23.9,0.6249,0.625,0,0,0,170.2,40.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).to({y:26.1},17,cjs.Ease.get(1)).wait(64));

	// Text_SFU_Medical_School
	this.instance_1 = new lib.g_txtSFUMedicalSchool("synched",0);
	this.instance_1.setTransform(565.05,179,1,1,0,0,0,-162.3,77);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155).to({_off:false},0).to({x:242.05},18,cjs.Ease.get(1)).wait(66));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_106 = new cjs.Graphics().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(106).to({graphics:mask_1_graphics_106,x:485,y:125.025}).wait(133));

	// Red_Bg__Animate_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0633").s().p("AgxTiMAAAgnDIBjAAMAAAAnDg");
	this.shape.setTransform(-5,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0633").s().p("AksTiMAAAgnDIJZAAMAAAAnDg");
	this.shape_1.setTransform(21.425,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0633").s().p("AoWTiMAAAgnDIQtAAMAAAAnDg");
	this.shape_2.setTransform(46.025,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0633").s().p("ArvTiMAAAgnDIXfAAMAAAAnDg");
	this.shape_3.setTransform(68.8,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0633").s().p("Au3TiMAAAgnDIduAAMAAAAnDg");
	this.shape_4.setTransform(89.75,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0633").s().p("AxsTiMAAAgnDMAjZAAAMAAAAnDg");
	this.shape_5.setTransform(108.875,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0633").s().p("A0RTiMAAAgnDMAojAAAMAAAAnDg");
	this.shape_6.setTransform(126.2,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0633").s().p("A2kTiMAAAgnDMAtJAAAMAAAAnDg");
	this.shape_7.setTransform(141.675,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0633").s().p("A4mTiMAAAgnDMAxOAAAMAAAAnDg");
	this.shape_8.setTransform(155.35,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0633").s().p("A6XTiMAAAgnDMA0vAAAMAAAAnDg");
	this.shape_9.setTransform(167.2,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0633").s().p("A72TiMAAAgnDMA3tAAAMAAAAnDg");
	this.shape_10.setTransform(177.225,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0633").s().p("A9ETiMAAAgnDMA6JAAAMAAAAnDg");
	this.shape_11.setTransform(185.425,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0633").s().p("A+BTiMAAAgnDMA8DAAAMAAAAnDg");
	this.shape_12.setTransform(191.8,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0633").s().p("A+sTiMAAAgnDMA9aAAAMAAAAnDg");
	this.shape_13.setTransform(196.35,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0633").s().p("A/GTiMAAAgnDMA+NAAAMAAAAnDg");
	this.shape_14.setTransform(199.075,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0633").s().p("A/PTiMAAAgnDMA+fAAAMAAAAnDg");
	this.shape_15.setTransform(200,125);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},134).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(90));

	// Photo
	this.instance_2 = new lib.g_study_dr("single",0);
	this.instance_2.setTransform(485,125.5,1,1,0,0,0,485,125.5);
	this.instance_2._off = true;
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-2,-2,974,255);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({startPosition:0},24).wait(109));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(106).to(new cjs.ColorFilter(1,1,1,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24).wait(109));

	// Transition
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,51,51,0)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_16.setTransform(485,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(75,75,75,0.118)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_17.setTransform(485,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(97,97,97,0.227)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_18.setTransform(485,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(118,118,118,0.329)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_19.setTransform(485,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(137,137,137,0.424)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_20.setTransform(485,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(155,155,155,0.51)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_21.setTransform(485,125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(172,172,172,0.592)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_22.setTransform(485,125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(187,187,187,0.667)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_23.setTransform(485,125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(200,200,200,0.733)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_24.setTransform(485,125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(213,213,213,0.792)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_25.setTransform(485,125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(223,223,223,0.843)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_26.setTransform(485,125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(233,233,233,0.89)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_27.setTransform(485,125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(240,240,240,0.929)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_28.setTransform(485,125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(247,247,247,0.961)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_29.setTransform(485,125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(252,252,252,0.984)").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_30.setTransform(485,125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_31.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},89).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[]},1).wait(134));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A/PTiMAAAgnDMA+fAAAMAAAAnDg");
	mask_2.setTransform(770,125.025);

	// Text
	this.instance_3 = new lib.gtext1("synched",0);
	this.instance_3.setTransform(389.3,144.5,1,1,0,0,0,175.3,112);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({x:754.35},19,cjs.Ease.get(0.9)).to({_off:true},65).wait(134));

	// REd_Bg
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0633").s().p("A/PAyIAAhjMA+fAAAIAABjg");
	this.shape_32.setTransform(770,255);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0633").s().p("A/PChIAAlCMA+fAAAIAAFCg");
	this.shape_33.setTransform(770,242.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC0633").s().p("A/PEMIAAoXMA+fAAAIAAIXg");
	this.shape_34.setTransform(770,231.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC0633").s().p("A/PFwIAArfMA+fAAAIAALfg");
	this.shape_35.setTransform(770,220.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC0633").s().p("A/PHQIAAueMA+fAAAIAAOeg");
	this.shape_36.setTransform(770,210.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0633").s().p("A/PIpIAAxSMA+fAAAIAARSg");
	this.shape_37.setTransform(770,200.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0633").s().p("A/PJ+IAAz7MA+fAAAIAAT7g");
	this.shape_38.setTransform(770,191.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC0633").s().p("A/PLNIAA2ZMA+fAAAIAAWZg");
	this.shape_39.setTransform(770,182.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0633").s().p("A/PMWIAA4rMA+fAAAIAAYrg");
	this.shape_40.setTransform(770,174.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC0633").s().p("A/PNaIAA6zMA+fAAAIAAazg");
	this.shape_41.setTransform(770,167.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC0633").s().p("A/POZIAA8xMA+fAAAIAAcxg");
	this.shape_42.setTransform(770,160.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC0633").s().p("A/PPSIAA+jMA+fAAAIAAejg");
	this.shape_43.setTransform(770,154.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC0633").s().p("A/PQGMAAAggLMA+fAAAMAAAAgLg");
	this.shape_44.setTransform(770,148.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC0633").s().p("A/PQ0MAAAghnMA+fAAAMAAAAhng");
	this.shape_45.setTransform(770,143.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC0633").s().p("A/PRdMAAAgi4MA+fAAAMAAAAi4g");
	this.shape_46.setTransform(770,139.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC0633").s().p("A/PSAMAAAgj/MA+fAAAMAAAAj/g");
	this.shape_47.setTransform(770,135.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC0633").s().p("A/PSeMAAAgk7MA+fAAAMAAAAk7g");
	this.shape_48.setTransform(770,132.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC0633").s().p("A/PS3MAAAglsMA+fAAAMAAAAlsg");
	this.shape_49.setTransform(770,129.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC0633").s().p("A/PTJMAAAgmRMA+fAAAMAAAAmRg");
	this.shape_50.setTransform(770,127.65);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC0633").s().p("A/PTXMAAAgmtMA+fAAAMAAAAmtg");
	this.shape_51.setTransform(770,126.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC0633").s().p("A/PTfMAAAgm9MA+fAAAMAAAAm9g");
	this.shape_52.setTransform(770,125.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0633").s().p("A/PTiMAAAgnDMA+fAAAMAAAAnDg");
	this.shape_53.setTransform(770,125);

	var maskedShapeInstanceList = [this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[]},84).wait(134));

	// Mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EgshAAyIAAhjMBZDAAAIAABjg");
	var mask_3_graphics_1 = new cjs.Graphics().p("EgshAChIAAlCMBZDAAAIAAFCg");
	var mask_3_graphics_2 = new cjs.Graphics().p("EgshAEMIAAoXMBZDAAAIAAIXg");
	var mask_3_graphics_3 = new cjs.Graphics().p("EgshAFwIAArgMBZDAAAIAALgg");
	var mask_3_graphics_4 = new cjs.Graphics().p("EgshAHPIAAueMBZDAAAIAAOeg");
	var mask_3_graphics_5 = new cjs.Graphics().p("EgshAIqIAAxSMBZDAAAIAARSg");
	var mask_3_graphics_6 = new cjs.Graphics().p("EgshAJ+IAAz7MBZDAAAIAAT7g");
	var mask_3_graphics_7 = new cjs.Graphics().p("EgshALNIAA2ZMBZDAAAIAAWZg");
	var mask_3_graphics_8 = new cjs.Graphics().p("EgshAMWIAA4rMBZDAAAIAAYrg");
	var mask_3_graphics_9 = new cjs.Graphics().p("EgshANaIAA6zMBZDAAAIAAazg");
	var mask_3_graphics_10 = new cjs.Graphics().p("EgshAOZIAA8xMBZDAAAIAAcxg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EgshAPSIAA+jMBZDAAAIAAejg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EgshAQGMAAAggLMBZDAAAMAAAAgLg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EgshAQ0MAAAghnMBZDAAAMAAAAhng");
	var mask_3_graphics_14 = new cjs.Graphics().p("EgshARdMAAAgi4MBZDAAAMAAAAi4g");
	var mask_3_graphics_15 = new cjs.Graphics().p("EgshASAMAAAgj/MBZDAAAMAAAAj/g");
	var mask_3_graphics_16 = new cjs.Graphics().p("EgshASeMAAAgk7MBZDAAAMAAAAk7g");
	var mask_3_graphics_17 = new cjs.Graphics().p("EgshAS2MAAAglsMBZDAAAMAAAAlsg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EgshATJMAAAgmRMBZDAAAMAAAAmRg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EgshATXMAAAgmtMBZDAAAMAAAAmtg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EgshATfMAAAgm9MBZDAAAMAAAAm9g");
	var mask_3_graphics_21 = new cjs.Graphics().p("EgshATiMAAAgnDMBZDAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:285,y:-5}).wait(1).to({graphics:mask_3_graphics_1,x:285,y:7.1}).wait(1).to({graphics:mask_3_graphics_2,x:285,y:18.575}).wait(1).to({graphics:mask_3_graphics_3,x:285,y:29.5}).wait(1).to({graphics:mask_3_graphics_4,x:285,y:39.8}).wait(1).to({graphics:mask_3_graphics_5,x:285,y:49.55}).wait(1).to({graphics:mask_3_graphics_6,x:285,y:58.675}).wait(1).to({graphics:mask_3_graphics_7,x:285,y:67.225}).wait(1).to({graphics:mask_3_graphics_8,x:285,y:75.175}).wait(1).to({graphics:mask_3_graphics_9,x:285,y:82.55}).wait(1).to({graphics:mask_3_graphics_10,x:285,y:89.325}).wait(1).to({graphics:mask_3_graphics_11,x:285,y:95.525}).wait(1).to({graphics:mask_3_graphics_12,x:285,y:101.125}).wait(1).to({graphics:mask_3_graphics_13,x:285,y:106.125}).wait(1).to({graphics:mask_3_graphics_14,x:285,y:110.55}).wait(1).to({graphics:mask_3_graphics_15,x:285,y:114.4}).wait(1).to({graphics:mask_3_graphics_16,x:285,y:117.65}).wait(1).to({graphics:mask_3_graphics_17,x:285,y:120.3}).wait(1).to({graphics:mask_3_graphics_18,x:285,y:122.35}).wait(1).to({graphics:mask_3_graphics_19,x:285,y:123.825}).wait(1).to({graphics:mask_3_graphics_20,x:285,y:124.725}).wait(1).to({graphics:mask_3_graphics_21,x:285,y:125}).wait(218));

	// Pic_Dad_Girl
	this.instance_4 = new lib.g_photo1("single",0);
	this.instance_4.setTransform(85,125,1,1,0,0,0,485,125);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},105).wait(134));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:106, endFrame:106, x:-2, y:-2, w:974, h:255});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:974, h:255});
	this.filterCacheList.push({instance: this.instance_2, startFrame:107, endFrame:130, x:-2, y:-2, w:974, h:255});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,250.1);
// library properties:
lib.properties = {
	id: 'B8909188F943443AB461DBFA97228CEF',
	width: 970,
	height: 250,
	fps: 24,
	color: "#EBEBEB",
	opacity: 1.00,
	manifest: [
		{src:"images/banner1_970x250_atlas_1.png?1692653604359", id:"banner1_970x250_atlas_1"}
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