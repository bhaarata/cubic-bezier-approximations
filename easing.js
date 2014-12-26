// Cubic Bezier Easing Parameters Approximation
// of Robert Penner's Tween Equations

// values based on https://github.com/KinkumaDesign/CustomMediaTimingFunction/blob/master/src/KKCustomMediaTimingFunction.m

var Josh = {
	QuadIn: [0.454, 0, 0.808, 0.63],
	QuadIn2: [0.51, 0.002, 0.87, 0.76]
	// [0.456, 0.002, 0.808, 0.63]
};


var KKEasing = {
	Linear: [0,0,1,1],

	QuadIn: [0.51,0,0.96,0.9],
	QuadOut: [0,0.51,0.9,0.96],
	QuadInOut: [0.43,0,0.57,1],
	QuadOutIn: [0,0.43,1,0.57],

	CubicIn: [0.55,0,0.7,0.19],
	CubicOut: [0,0.55,0.19,0.7],
	CubicInOut: [0.7,0,0.3,1],
	CubicOutIn: [0,0.7,1,0.3],

	SineIn: [0.44,0,0.99,0.98],
	SineOut: [0,0.44,0.98,0.99],
	SineInOut: [0.36,0,0.64,1],
	SineOutIn: [0,0.36,1,0.64],
	
	QuartIn: [0.74,0,0.74,0.19],
	QuartOut: [0,0.74,0.19,0.74],
	QuartInOut: [0.85,0,0.13,0.99],
	QuartOutIn: [0,0.85,0.99,0.13],

	QuintIn: [0.79,0,0.75,0.1],
	QuintOut: [0,0.79,0.1,0.75],
	QuintInOut: [0.9,0,0.09,1],
	QuintOutIn: [0,0.9,1,0.09],

	ExpoIn: [0.81,0,0.83,0.11],
	ExpoOut: [0,0.81,0.11,0.83],
	ExpoInOut: [0.97,0,0.02,0.99],
	ExpoOutIn: [0,0.97,0.99,0.02],

	CircIn: [0.67,0,0.99,0.57],
	CircOut: [0,0.67,0.57,0.99],
	CircInOut: [0.92,0.15,0.08,0.82],
	CircOutIn: [0.15,0.92,0.82,0.08],
	
};

// Values http://matthewlein.com/ceaser/
// Based on https://github.com/jhardy/compass-ceaser-easing/blob/master/stylesheets/ceaser-easing/_ease-types.sass
var CeaserEasing = {
	Linear: [0.250, 0.250, 0.750, 0.750],
	// ease: [0.250, 0.100, 0.250, 1.000],
	// ease-in: [0.420, 0.000, 1.000, 1.000],
	// ease-out: [0.000, 0.000, 0.580, 1.000],
	// ease-in-out: [0.420, 0.000, 0.580, 1.000],
	
	QuadIn: [0.550, 0.085, 0.680, 0.530],
	QuadOut: [0.250, 0.460, 0.450, 0.940],
	QuadInOut: [0.455, 0.030, 0.515, 0.955],

	CubicIn: [0.550, 0.055, 0.675, 0.190],
	CubicOut: [0.215, 0.610, 0.355, 1.000],
	CubicInOut: [0.645, 0.045, 0.355, 1.000],


	QuartIn: [0.895, 0.030, 0.685, 0.220],
	QuartOut: [0.165, 0.840, 0.440, 1.000],
	QuartInOut: [0.770, 0.000, 0.175, 1.000],

	QuintIn: [0.755, 0.050, 0.855, 0.060],
	QuintOut: [0.230, 1.000, 0.320, 1.000],
	QuintInOut: [0.860, 0.000, 0.070, 1.000],

	SineIn: [0.470, 0.000, 0.745, 0.715],
	SineOut: [0.390, 0.575, 0.565, 1.000],
	SineInOut: [0.445, 0.050, 0.550, 0.950],

	ExpoIn: [0.950, 0.050, 0.795, 0.035],
	ExpoOut: [0.190, 1.000, 0.220, 1.000],
	ExpoInOut: [1.000, 0.000, 0.000, 1.000],

	CircIn: [0.600, 0.040, 0.980, 0.335],
	CircOut: [0.075, 0.820, 0.165, 1.000],
	CircInOut: [0.785, 0.135, 0.150, 0.860],

	BackIn: [0.600, -0.280, 0.735, 0.045],
	BackOut: [0.175, 0.885, 0.320, 1.275],
	BackInOut: [0.680, -0.550, 0.265, 1.550],

};

// functions based on https://github.com/sole/tween.js/blob/master/src/Tween.js

Tween = {

	LinearNone: function ( k ) {

		return k;

	},

	QuadraticIn: function ( k ) {

		return k * k;

	},

	QuadraticOut: function ( k ) {

		return k * ( 2 - k );

	},

	QuadraticInOut: function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
		return - 0.5 * ( --k * ( k - 2 ) - 1 );

	},

	CubicIn: function ( k ) {

		return k * k * k;

	},

	CubicOut: function ( k ) {

		return --k * k * k + 1;

	},

	CubicInOut: function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
		return 0.5 * ( ( k -= 2 ) * k * k + 2 );

	},

	QuarticIn: function ( k ) {

		return k * k * k * k;

	},

	QuarticOut: function ( k ) {

		return 1 - ( --k * k * k * k );

	},

	QuarticInOut: function ( k ) {

		if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
		return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

	},

	QuinticIn: function ( k ) {

		return k * k * k * k * k;

	},

	QuinticOut: function ( k ) {

		return --k * k * k * k * k + 1;

	},

	QuinticInOut: function ( k ) {

		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
		return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

	},

	SinusoidalIn: function ( k ) {

		return 1 - Math.cos( k * Math.PI / 2 );

	},

	SinusoidalOut: function ( k ) {

		return Math.sin( k * Math.PI / 2 );

	},

	SinusoidalInOut: function ( k ) {

		return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

	},

	ExponentialIn: function ( k ) {

		return k === 0 ? 0 : Math.pow( 1024, k - 1 );

	},

	ExponentialOut: function ( k ) {

		return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

	},

	ExponentialInOut: function ( k ) {

		if ( k === 0 ) return 0;
		if ( k === 1 ) return 1;
		if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
		return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

	},

	CircularIn: function ( k ) {

		return 1 - Math.sqrt( 1 - k * k );

	},

	CircularOut: function ( k ) {

		return Math.sqrt( 1 - ( --k * k ) );

	},

	CircularInOut: function ( k ) {

		if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
		return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

	},

	ElasticIn: function ( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k === 0 ) return 0;
		if ( k === 1 ) return 1;
		if ( !a || a < 1 ) { a = 1; s = p / 4; }
		else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
		return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

	},

	ElasticOut: function ( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k === 0 ) return 0;
		if ( k === 1 ) return 1;
		if ( !a || a < 1 ) { a = 1; s = p / 4; }
		else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
		return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

	},

	ElasticInOut: function ( k ) {

		var s, a = 0.1, p = 0.4;
		if ( k === 0 ) return 0;
		if ( k === 1 ) return 1;
		if ( !a || a < 1 ) { a = 1; s = p / 4; }
		else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
		if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
		return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

	},

	BackIn: function ( k ) {

		var s = 1.70158;
		return k * k * ( ( s + 1 ) * k - s );

	},

	BackOut: function ( k ) {

		var s = 1.70158;
		return --k * k * ( ( s + 1 ) * k + s ) + 1;

	},

	BackInOut: function ( k ) {

		var s = 1.70158 * 1.525;
		if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
		return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

	},

	BounceIn: function ( k ) {

		return 1 - TWEEN.Easing.Bounce.Out( 1 - k );

	},

	BounceOut: function ( k ) {

		if ( k < ( 1 / 2.75 ) ) {

			return 7.5625 * k * k;

		} else if ( k < ( 2 / 2.75 ) ) {

			return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

		} else if ( k < ( 2.5 / 2.75 ) ) {

			return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

		} else {

			return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

		}

	},

	BounceInOut: function ( k ) {

		if ( k < 0.5 ) return BounceIn( k * 2 ) * 0.5;
		return BounceOut( k * 2 - 1 ) * 0.5 + 0.5;

	}

};


// http://codepen.io/onedayitwillmake/pen/EHDmw
/**
* Solver for cubic bezier curve with implicit control points at (0,0) and (1.0, 1.0)
*/
function UnitBezier(p1x, p1y, p2x, p2y) {
	// pre-calculate the polynomial coefficients
	// First and last control points are implied to be (0,0) and (1.0, 1.0)
	this.cx = 3.0 * p1x;
	this.bx = 3.0 * (p2x - p1x) - this.cx;
	this.ax = 1.0 - this.cx -this.bx;

	this.cy = 3.0 * p1y;
	this.by = 3.0 * (p2y - p1y) - this.cy;
	this.ay = 1.0 - this.cy - this.by;
}

UnitBezier.prototype.epsilon = 1e-6; // Precision  
UnitBezier.prototype.sampleCurveX = function(t) {
	return ((this.ax * t + this.bx) * t + this.cx) * t;
}
UnitBezier.prototype.sampleCurveY = function (t) {
	return ((this.ay * t + this.by) * t + this.cy) * t;
}
UnitBezier.prototype.sampleCurveDerivativeX = function (t) {
	return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
}

UnitBezier.prototype.solveCurveX = function (x, epsilon) {
	var t0; 
	var t1;
	var t2;
	var x2;
	var d2;
	var i;

	// First try a few iterations of Newton's method -- normally very fast.
	for (t2 = x, i = 0; i < 8; i++) {
		x2 = this.sampleCurveX(t2) - x;
		if (Math.abs (x2) < epsilon)
			return t2;
		d2 = this.sampleCurveDerivativeX(t2);
		if (Math.abs(d2) < epsilon)
			break;
		t2 = t2 - x2 / d2;
	}

	// No solution found - use bi-section
	t0 = 0.0;
	t1 = 1.0;
	t2 = x;

	if (t2 < t0) return t0;
	if (t2 > t1) return t1;

	while (t0 < t1) {
		x2 = this.sampleCurveX(t2);
		if (Math.abs(x2 - x) < epsilon)
			return t2;
		if (x > x2) t0 = t2;
		else t1 = t2;

		t2 = (t1 - t0) * .5 + t0;
	}

	// Give up
	return t2;
}

// Find new T as a function of Y along curve X
UnitBezier.prototype.solve = function (x, epsilon) {
	return this.sampleCurveY( this.solveCurveX(x, epsilon) );
}

if (typeof(window)!=='undefined') {
	window.UnitBezier = UnitBezier;	
}

if (typeof(module)!=='undefined') module.exports = {
	Tween: Tween,
	UnitBezier: UnitBezier
};