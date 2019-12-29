(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dis_big = function() {
	this.initialize(img.dis_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,240);


(lib.dis_small = function() {
	this.initialize(img.dis_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,240);


(lib.ip = function() {
	this.initialize(img.ip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,224);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C1E87").s().p("EicPASwMAAAglfME4fAAAMAAAAlfg");
	this.shape.setTransform(0.025,119.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-999.9,0,1999.9,240), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D2485").s().p("EicPASwMAAAglfME4fAAAMAAAAlfg");
	this.shape.setTransform(1000,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,2000,240), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy_copy_copy
	this.instance = new lib.dis_big();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,2000,240), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ip();
	this.instance.parent = this;
	this.instance.setTransform(5422,-77,3.2912,3.2912);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(5422,-77,987.3999999999996,737.3), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC1998").s().p("AgcAKQgLgKgBgPIAXgDQAAAHAGAEQAEAFAHAAQAHAAAGgFQAFgEAAgHIAXADQgBAPgLAKQgMAJgRAAQgPAAgNgJg");
	this.shape.setTransform(94.4,2.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AD2BIQgUgVAAgdQAAgcAUgUQAJgJALgFQANgHAQAAQAQAAANAHQALAFAJAJQAUAUAAAcQAAAdgUAVQgVAVgcAAQgcAAgVgVgAELgGQgLALAAARQAAASALAMQAMAMAQAAQAQAAAMgMQALgMAAgSQAAgRgLgLQgMgMgQAAQgQAAgMAMgAgrBSIAAgeQAWAMATAAQAOAAAIgFQAJgEAAgIQAAgHgHgDQgHgDgKAAIgWAAIAAgbIAWAAQAKAAAFgDQAGgEAAgEQAAgOgaAAQgTAAgVAKIAAgcIAIgEQARgHATAAQARAAAMAHIAHAEQAPALAAAPQAAAKgFAJQgFAGgGADQAIAEAFAIQAHAJAAALQAAATgQAMQgQAMgaAAQgZAAgTgLgAnbBCQgagaAAgoQAAgWAIgSQAHgOALgLQAbgbAoAAQAdAAAUAPIAAAiQgLgHgMgEQgOgEgNAAQgZAAgQARIgCABQgPAQAAAYQAAAZARARQAQAQAZAAQANAAAOgEQAMgEALgHIAAAjQgUAPgdAAQgoAAgbgbgAHZBaIAAhXIg5BXIgdAAIAAiGIAdAAIAABWIA5hWIAdAAIAACGgACuBaIAAg3Ig5AAIAAA3IgdAAIAAiGIAdAAIAAA1IA5AAIAAg1IAdAAIAACGgAhlBaIAAgqIgQAAIgiAqIglAAIAjgsQgOgFgJgLQgJgNAAgQQAAgSANgNQAGgHAIgDQAIgEAKAAIBEAAIAACGgAiWgMQgGAGAAAHQAAAIAGAGQAFAGAJAAIAjAAIAAgmIgjAAQgJAAgFAFgAlFBaIAAiGIBJAAQAKAAAIAEIAJAHQALALAAAQQAAAHgFAIQgDAGgGAEQAHAEAFAIQAFAJAAALQAAARgLALQgLALgQAAgAknA/IApAAQAGAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgGAAIgpAAgAknAIIAnAAQAFAAAEgEQAEgEAAgFQAAgFgEgEQgEgDgFAAIgnAAg");
	this.shape_1.setTransform(50.225,9.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,100.5,18.6), null);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC800").s().p("AgXAgQgOgOABgSQgBgRAOgNQAOgOASAAQAPAAALAIIACARQgMgLgQAAQgNABgIAIQgJAJAAAMQAAANAJAJQAIAJANAAQAQAAAMgLIgCARQgLAIgPAAQgSAAgOgNg");
	this.shape.setTransform(47.3,-74.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC800").s().p("AgdAgQgOgMAAgUQAAgRANgNQANgOARAAQARAAANAOQAOANAAARIAAAFIhHAAQABALAJAHQAKAIALAAQAQAAANgLIgDARQgLAIgPAAQgTAAgOgNgAgQgXQgIAGgCAJIA1AAQgCgJgIgGQgIgHgJAAQgJAAgHAHg");
	this.shape_1.setTransform(37.475,-74.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC800").s().p("AAjArIAAg+IgcAiIgNAAIgbgiIAAA+IgQAAIAAhVIAQAAIAhAqIAjgqIAPAAIAABVg");
	this.shape_2.setTransform(25.625,-74.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC800").s().p("AgiA/IA1h9IAQAAIg2B9g");
	this.shape_3.setTransform(15.35,-76.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC800").s().p("AghA/IAAgcIgQAAIAAgNIAQAAIAAgOIgQAAIAAgOIAQAAIAAg4IAwAAQAPAAAKAKQAKALAAAOQAAAPgKALQgKAJgPAAIggAAIAAAOIAlAAIAAANIglAAIAAAcgAgRgGIAfAAQAIAAAGgGQAHgGgBgJQABgIgHgGQgGgGgIAAIgfAAg");
	this.shape_4.setTransform(6,-76.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC800").s().p("AgdA2QgNgLAAgQQAAgKAGgJQAFgIAKgDQgIgFgEgHQgEgHAAgHQAAgOALgLQALgKAPAAQAQAAALAKQALALAAAOQAAAHgEAHQgEAHgHAFQAJADAFAIQAGAJAAAKQAAAQgNALQgMALgSAAQgRAAgMgLgAgSAKQgIAIAAAJQAAAJAIAHQAIAHAKAAQALAAAIgHQAIgHAAgJQAAgJgIgIQgIgGgLAAQgKAAgIAGgAgPgsQgGAHAAAIQAAAHAGAGQAHAGAIAAQAJAAAHgGQAHgGAAgHQAAgIgHgHQgHgFgJAAQgIAAgHAFg");
	this.shape_5.setTransform(-9.725,-76.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC800").s().p("AgTBAIAcguQgEACgGAAQgRAAgMgMQgNgLAAgRQAAgTANgMQANgMARAAQATAAANAMQAMAMAAATQAAANgMATIgiA0gAgTgoQgHAIgBAMQABALAHAIQAIAGALABQAMgBAIgGQAJgIgBgLQABgMgJgIQgIgIgMAAQgLAAgIAIg");
	this.shape_6.setTransform(-20,-76.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC800").s().p("AgkA1IgDgUQAGAHAJAFQAJAEAKAAQAMAAAJgIQAIgIAAgLQAAgMgIgIQgJgHgMABQgJAAgGACIAAgOIAgggIgvAAIAAgPIBFAAIAAAPIghAfQAPAAAMAMQAMAKAAARQAAARgOAMQgNANgSAAQgSAAgNgLg");
	this.shape_7.setTransform(-29.975,-76.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC800").s().p("AgkA1IgDgUQAGAHAJAFQAJAEAKAAQAMAAAIgIQAJgJAAgMQAAgMgIgHQgHgHgKABQgHAAgGADQgGACgDAEIgOAAIAJhDIA8AAIAAAPIgvAAIgEAjQAHgHAMAAQAQAAAMALQAMAMAAARQAAATgOAMQgOANgRAAQgSAAgNgLg");
	this.shape_8.setTransform(-44.525,-76.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC800").s().p("AgHArIAAhIIgeAAIAAgNIBLAAIAAANIgfAAIAABIg");
	this.shape_9.setTransform(-58.725,-74.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC800").s().p("AgsAuQgTgTAAgbQAAgaATgTQASgTAaAAQAbAAATATQASATAAAaQAAAbgSATQgTATgbAAQgaAAgSgTgAghgjQgOAPAAAUQAAAVAOAOQAOAPATAAQAVAAAOgPQAOgOAAgVQAAgUgOgPQgOgOgVAAQgTAAgOAOg");
	this.shape_10.setTransform(-70.325,-76.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4copy, new cjs.Rectangle(-79.4,-90,133.60000000000002,25.599999999999994), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(100.975,-166.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA1IgDgYQAGAHAJAEQAJAFALgBQAKAAAIgGQAHgIAAgKQAAgKgGgGQgHgGgJAAQgMAAgHAHIgRAAIAJhEIA+AAIAAAUIgsAAIgEAaQAGgEAJgBQARAAAMAMQAMAMAAASQAAASgOANQgOANgSAAQgSAAgOgLg");
	this.shape_1.setTransform(93.525,-171.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAlIgDgWQAPAMAQAAQAFAAAEgCQADgDAAgEIgBgEQgBgCgDgBIgGgCIgGgDIgIgCQgQgGAAgQQAAgMAJgIQAJgHAMAAQAPAAAJAHIACAWQgNgKgNAAQgLAAAAAHQAAAGAOAEIALAEIAIAFQAFACACAEQACAFAAAHQAAAMgKAIQgJAIgNAAQgQAAgMgJg");
	this.shape_2.setTransform(79.6,-169.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAhQgPgNAAgTQAAgTANgNQANgOASAAQASAAANAOQAOANAAASIAAAGIhFAAQACAKAJAFQAIAGAJAAQAIAAAJgDQAIgDAFgFIgCAWQgMAIgQAAQgTAAgOgNgAgNgWQgGAFgDAHIAtAAQgDgHgGgFQgGgEgIAAQgHAAgGAEg");
	this.shape_3.setTransform(70.275,-169.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA/IAAhXIATAAIAABXgAgKgnIAAgXIAVAAIAAAXg");
	this.shape_4.setTransform(62.375,-171.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAtIAAhXIATAAIAAAPQADgIAHgFQAHgEAIABIADAUQgKgDgJAIQgJAHAAALIAAAtg");
	this.shape_5.setTransform(56.9,-169.7091);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAhQgPgNAAgTQAAgTANgNQANgOASAAQASAAANAOQAOANAAASIAAAGIhFAAQACAKAJAFQAIAGAJAAQAIAAAJgDQAIgDAFgFIgCAWQgMAIgQAAQgTAAgOgNgAgNgWQgGAFgDAHIAtAAQgDgHgGgFQgGgEgIAAQgHAAgGAEg");
	this.shape_6.setTransform(47.725,-169.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAzIgEgaQAIAIAKAHQAKAFALAAQAIABAGgFQAFgEAAgIIgBgGIgDgFIgFgEIgGgDIgHgEIgIgEQgagLAAgWQAAgPALgKQALgJAQAAQARAAANAKIADAYQgGgGgKgEQgJgFgIAAQgHAAgFAFQgFADAAAHQAAAFADAEQADADAEACIALAFIANAHQAWALAAAWQAAAQgMAKQgMAKgQAAQgUAAgPgOg");
	this.shape_7.setTransform(37.675,-171.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA/IAAgwQAAgKgGgGQgHgGgKAAQgIAAgHAHQgHAGAAAJIAAAwIgUAAIAAh9IAUAAIAAA1QAIgQATgBQAQAAALAMQALALAAASIAAAwg");
	this.shape_8.setTransform(22.55,-171.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAgQgPgNAAgTQAAgSAPgOQAOgNATAAQAPAAALAIIADAVQgGgEgHgDQgIgDgIAAQgLAAgIAIQgJAHAAALQAAALAJAIQAIAIALAAQAIAAAIgDQAHgDAGgFIgDAWQgLAIgPAAQgTAAgOgOg");
	this.shape_9.setTransform(12.075,-169.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAxQgIgHAAgOIAAgrIgPAAIAAgIIAcggIAGAAIAAAWIAbAAIAAASIgbAAIAAArQAAAEADADQADACAFAAQAHAAAJgFIgCAUQgIAEgJAAQgMAAgHgHg");
	this.shape_10.setTransform(3.525,-170.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAkQgIgJgBgNQABgMAIgJQAKgJAPAAQANAAAHALIAAgGQAAgHgEgEQgGgEgHAAQgGAAgHACQgIACgEADIADgUQAMgGAMAAQAQAAAJAJQALAKAAANIAAA5IgJAAIgJgMQgHAOgQAAQgPAAgKgKgAgMAFQgEAEgBAFQABAGAEAEQAFAEAHAAQAIAAAFgEQAEgEAAgGQAAgFgEgEQgFgEgIAAQgHAAgFAEg");
	this.shape_11.setTransform(-5.05,-169.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbA/IgbhaIgaBaIgXAAIgnh9IAWAAIAdBdIAchdIATAAIAbBdIAdhdIAXAAIgoB9g");
	this.shape_12.setTransform(-18.5,-171.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAhQgPgNAAgTQAAgTANgNQANgOASAAQASAAANAOQAOANAAASIAAAGIhFAAQACAKAJAFQAIAGAJAAQAIAAAJgDQAIgDAFgFIgCAWQgMAIgQAAQgTAAgOgNgAgNgWQgGAFgDAHIAtAAQgDgHgGgFQgGgEgIAAQgHAAgGAEg");
	this.shape_13.setTransform(-37.625,-169.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJA/IAAh9IATAAIAAB9g");
	this.shape_14.setTransform(-45.475,-171.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguBAIAAh9IAUAAIAAAPQAKgRATAAQASAAANAOQANANAAATQAAASgNANQgNAOgSAAQgTAAgKgRIAAA1gAgSgkQgIAIAAALQAAALAIAHQAIAIAKAAQALAAAIgIQAIgHAAgLQAAgLgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_15.setTransform(-53.425,-167.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBAIAAh9IAUAAIAAAPQAKgRATAAQASAAANAOQANANAAATQAAASgNANQgNAOgSAAQgTAAgKgRIAAA1gAgSgkQgIAIAAALQAAALAIAHQAIAIAKAAQALAAAIgIQAIgHAAgLQAAgLgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_16.setTransform(-65.075,-167.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAqA/IgLgcIg9AAIgMAcIgVAAIA1h9IAVAAIA1B9gAgWAQIAsAAIgWg1g");
	this.shape_17.setTransform(-77.825,-171.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_18.setTransform(10.675,-119.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXAsIAAg5IgtA5IgTAAIAAhXIATAAIAAA5IAtg5IAUAAIAABXg");
	this.shape_19.setTransform(2.5,-122.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqArIgCgSQADABAEAAQAGAAAEgHQADgHAAgUIAAgjIBFAAIAABXIgTAAIAAhGIgfAAIAAASIgBATQgBAIgDAIQgCAIgHAFQgGAEgJAAIgIgBg");
	this.shape_20.setTransform(-9.375,-122.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAhQgPgNAAgTQAAgTANgNQANgOASAAQASAAANAOQAOANAAASIAAAGIhFAAQACAKAJAFQAIAGAJAAQAIAAAJgDQAIgDAFgFIgCAWQgMAIgQAAQgTAAgOgNgAgNgWQgGAFgDAHIAtAAQgDgHgGgFQgGgEgIAAQgHAAgGAEg");
	this.shape_21.setTransform(-19.525,-122.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAoA3IgHgWIhAAAIgHAWIgOAAIAAgoIALAAQAHgKADgPQACgPABgeIBEAAIAABGIAMAAIAAAogAgUAPIAoAAIAAg0IgdAAQAAAhgLATg");
	this.shape_22.setTransform(-30.8,-121.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAXAsIAAg5IgtA5IgTAAIAAhXIATAAIAAA5IAtg5IATAAIAABXg");
	this.shape_23.setTransform(-42.3,-122.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglAsIAAhXIAvAAQAMAAAGAHQAIAHAAAKQAAAGgDAFQgDAEgEADQAFABADAGQAEAGAAAGQAAALgHAIQgIAHgLAAgAgSAaIAaAAQAFAAADgCQACgDAAgEQAAgEgCgCQgDgEgFAAIgaAAgAgSgJIAZAAQAEAAADgCQACgDAAgDQAAgEgCgCQgDgDgEAAIgZAAg");
	this.shape_24.setTransform(-52.95,-122.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAhQgPgNAAgTQAAgTANgNQANgOASAAQASAAANAOQAOANAAASIAAAGIhFAAQACAKAJAFQAIAGAJAAQAIAAAJgDQAIgDAFgFIgCAWQgMAIgQAAQgTAAgOgNgAgNgWQgGAFgDAHIAtAAQgDgHgGgFQgGgEgIAAQgHAAgGAEg");
	this.shape_25.setTransform(-68.375,-122.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXAsIAAgkIgtAAIAAAkIgUAAIAAhXIAUAAIAAAjIAtAAIAAgjIAUAAIAABXg");
	this.shape_26.setTransform(-79.5,-122.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdAyQgPgMAAgUQAAgSANgOQANgNASAAQASAAANANQAOANAAASIAAAGIhFAAQACAKAJAFQAIAGAJAAQAIAAAJgDQAIgDAFgEIgCAVQgMAIgQAAQgTAAgOgNgAgNgFQgGAFgDAHIAtAAQgDgHgGgFQgGgEgIAAQgHAAgGAEgAAHgqIAAgUIAVAAIAAAUgAgZgqIAAgUIAVAAIAAAUg");
	this.shape_27.setTransform(86.475,-143.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA5A4IgHgYIh3AAIAAhXIAUAAIAABGIAiAAIAAhGIASAAIAABGIAjAAIAAhGIATAAIAABGIANAAIAAApg");
	this.shape_28.setTransform(73.45,-140.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAhQgPgNAAgTQAAgTANgNQANgOASAAQASAAANAOQAOANAAASIAAAGIhFAAQACAKAJAFQAIAGAJAAQAIAAAJgDQAIgDAFgFIgCAWQgMAIgQAAQgTAAgOgNgAgNgWQgGAFgDAHIAtAAQgDgHgGgFQgGgEgIAAQgHAAgGAEg");
	this.shape_29.setTransform(59.675,-141.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAgAsIAAhXIAUAAIAABXgAgzAsIAAhXIAUAAIAAAcIAWAAQANgBAIAKQAJAHAAANQAAANgJAJQgIAIgNAAgAgfAbIATAAQAHAAADgEQADgEAAgFQAAgGgDgDQgEgEgGAAIgTAAg");
	this.shape_30.setTransform(42.75,-141.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AglAsIAAhXIAvAAQALAAAIAHQAHAHAAALQAAAFgDAFQgDAFgEACQAFABADAGQAEAFAAAIQAAALgHAHQgIAHgLAAgAgRAbIAaAAQAEAAACgDQAEgDAAgEQAAgEgEgCQgCgDgEAAIgaAAgAgRgIIAYAAQAEAAACgDQADgDAAgDQAAgDgDgDQgCgDgEABIgYAAg");
	this.shape_31.setTransform(31.15,-141.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglAsIAAhXIAvAAQALAAAIAHQAHAHAAALQAAAFgDAFQgDAFgEACQAFABADAGQAEAFAAAIQAAALgHAHQgIAHgLAAgAgSAbIAaAAQAFAAACgDQADgDAAgEQAAgEgDgCQgCgDgFAAIgaAAgAgSgIIAZAAQAEAAADgDQACgDAAgDQAAgDgCgDQgDgDgEABIgZAAg");
	this.shape_32.setTransform(16.1,-141.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AggAgQgOgNAAgTQAAgSAOgNQAOgOASAAQATAAAOAOQAOANAAASQAAATgOANQgOAOgTAAQgSAAgOgOgAgSgSQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_33.setTransform(5.275,-141.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXAgQgPgNAAgTQAAgSAPgOQAOgNATAAQAPAAALAIIADAVQgGgEgHgDQgIgDgIAAQgLAAgIAIQgJAHAAALQAAALAJAIQAIAIALAAQAIAAAIgDQAHgDAGgFIgDAWQgLAIgPAAQgTAAgOgOg");
	this.shape_34.setTransform(-4.875,-141.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbAkQgJgJAAgNQAAgMAJgJQAIgJAQAAQANAAAIALIAAgGQgBgHgFgEQgFgEgHAAQgGAAgIACQgGACgFADIADgUQAMgGAMAAQAQAAAKAJQAKAKAAANIAAA5IgJAAIgJgMQgHAOgQAAQgQAAgIgKgAgMAFQgEAEAAAFQAAAGAEAEQAFAEAHAAQAIAAAEgEQAFgEABgGQgBgFgFgEQgEgEgIAAQgHAAgFAEg");
	this.shape_35.setTransform(-14.65,-141.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASAsIAAgfQgHADgMAAQgkAAAAghIAAgaIATAAIAAAZQAAAJAEAEQAEADAKAAQAJAAAJgDIAAgmIAUAAIAABXg");
	this.shape_36.setTransform(-24.375,-141.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAWAsIgWgeIgVAeIgZAAIAjgsIghgrIAZAAIATAbIAUgbIAYAAIggArIAiAsg");
	this.shape_37.setTransform(-39,-141.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAXAsIAAg5IgtA5IgUAAIAAhXIAUAAIAAA5IAtg5IAUAAIAABXg");
	this.shape_38.setTransform(-49.65,-141.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAQAsIgegiIgHAIIAAAaIgUAAIAAhXIAUAAIAAAiIAfgiIAaAAIgkAnIAqAwg");
	this.shape_39.setTransform(-59.9,-141.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbAkQgKgJABgNQgBgMAKgJQAIgJAQAAQANAAAIALIAAgGQAAgHgGgEQgFgEgHAAQgGAAgIACQgGACgFADIADgUQAMgGALAAQARAAAJAJQALAKgBANIAAA5IgIAAIgJgMQgIAOgPAAQgQAAgIgKgAgLAFQgGAEAAAFQAAAGAGAEQAEAEAHAAQAIAAAEgEQAGgEAAgGQAAgFgGgEQgEgEgIAAQgHAAgEAEg");
	this.shape_40.setTransform(-70.7,-141.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJA/IAAhpIgmAAIAAgUIBfAAIAAAUIgmAAIAABpg");
	this.shape_41.setTransform(-80.225,-143.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-87.3,-184.8,192.89999999999998,72.30000000000001), null);


(lib.dis2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.instance = new lib.dis_small();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dis2, new cjs.Rectangle(0,0,2000,240), null);


(lib.brd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DADADA").ss(2,1,1).p("AAAyvMAAAAlf");
	this.shape.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.brd, new cjs.Rectangle(-1,-1,2,242), null);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Новый
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-866.25,187.75,1.25,1.25,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({alpha:1},23,cjs.Ease.get(1)).to({_off:true},96).wait(123));

	// В_рассрочку
	this.instance_1 = new lib.Symbol4copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-896.3,151.25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({alpha:1},22,cjs.Ease.get(1)).to({_off:true},89).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-975.7,-43.3,975.7,130.2);


(lib.prod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iPads
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-1101,-14,0.3071,0.307,0,0,0,0.4,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},22).to({_off:true},104).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.8,867.2,226.5);


(lib.dis_small_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.dis2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,1000,120);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135).to({_off:false},0).to({alpha:1},21).wait(102));

	// purple
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1000,-120);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({alpha:1},21).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000,-120,2000.1,240);


(lib.dis_big_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-1000,-120);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135).to({_off:false},0).to({alpha:1},21).wait(102));

	// purple
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1000,-120);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({alpha:1},21).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000,-120,2000.1,240);


// stage content:
(lib._100_600x240_svyaznoy_iwatch_rambler = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		var page_canvas = document.getElementsByTagName("canvas")[0];
		
		window.onresize = function () {
			onResize();
		}
		
		var brd = this.brd;
		var dis_big = this.dis_big;
		var dis_small = this.dis_small;
		var txt = this.txt;
		var bg = this.bg;
		var prod = this.prod;
		var logo = this.logo;
		
		function onResize() {
		
			var iw = window.innerWidth;
			var ih = window.innerHeight;
		
			if (iw > 2000) {
				iw = 2000;
			}
		
			if (iw < 600) {
				iw = 600;
			}
		
		
			brd.x = iw;
			dis_small.x = dis_big.x = Math.round(iw / 2);
			logo.x = txt.x = iw / 2 - 400;
			dis_small.visible = false;
			dis_big.visible = true;
			bg.x = iw / 2 - 100;
			prod.x = iw / 2 + 180;
			prod.scaleX = prod.scaleY = txt.scaleX = txt.scaleY = logo.scaleX = logo.scaleY = 1;
		
			if (iw < 970) {
				dis_small.visible = true;
				dis_big.visible = false;
				prod.x = iw - iw/2.5 + 70;
			}
			if (iw < 850) {
				logo.x = txt.x = 30;
				bg.x = 300;
			}
			if (iw < 690) {
				prod.scaleX = prod.scaleY = txt.scaleX = txt.scaleY = logo.scaleX = logo.scaleY = 0.9;
				logo.x = txt.x = 20;
				bg.x = 260;
				prod.x = iw - iw/2.5 + 65;
			}
		};
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(258));

	// brd
	this.brd = new lib.brd();
	this.brd.name = "brd";
	this.brd.parent = this;
	this.brd.setTransform(970,120,1,1,0,0,0,0,120);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DADADA").ss(2,1,1).p("ECcQASwMk4fAAAMAAAglfME4fAAA");
	this.shape.setTransform(1000,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.brd}]}).wait(258));

	// Layer_1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(1000,120.05,1,1,0,0,0,0,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},12).to({_off:true},1).wait(232).to({_off:false},0).to({alpha:1},12).wait(1));

	// dis_small
	this.dis_small = new lib.dis_small_1();
	this.dis_small.name = "dis_small";
	this.dis_small.parent = this;
	this.dis_small.setTransform(1000,120);

	this.timeline.addTween(cjs.Tween.get(this.dis_small).wait(258));

	// dis_big
	this.dis_big = new lib.dis_big_1();
	this.dis_big.name = "dis_big";
	this.dis_big.parent = this;
	this.dis_big.setTransform(1000,120);

	this.timeline.addTween(cjs.Tween.get(this.dis_big).wait(258));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(27.25,47.65,1,1,0,0,0,0,9.3);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(258));

	// txt
	this.txt = new lib.txt();
	this.txt.name = "txt";
	this.txt.parent = this;
	this.txt.setTransform(24.2,141.7,1,1,0,0,0,-975.8,21.7);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(258));

	// prod
	this.prod = new lib.prod();
	this.prod.name = "prod";
	this.prod.parent = this;
	this.prod.setTransform(733.75,113.4,1,1,0,0,0,706.5,65.8);

	this.timeline.addTween(cjs.Tween.get(this.prod).wait(258));

	// bg
	this.bg = new lib.Symbol9();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(502.7,120,1,1,0,0,0,2000,120);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(258));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-497.3,119,2498.3,122);
// library properties:
lib.properties = {
	id: '93CA864281046C4DBF0CC82B1FCE0C7B',
	width: 2000,
	height: 240,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"dis_big.png", id:"dis_big"},
		{src:"dis_small.png", id:"dis_small"},
		{src:"ip.png", id:"ip"}
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
an.compositions['93CA864281046C4DBF0CC82B1FCE0C7B'] = {
	getStage: function() { return exportRoot.getStage(); },
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;