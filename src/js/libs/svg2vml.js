/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 *     
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * Author: Kyle Scholz      http://kylescholz.com/
 * Author: Lorien Henry-Wilkins
 * Author: Ian Wilkinson
 * Copyright: 2006-2010
 */

var VectorModel = function() {
	this.init();
};

var linearGradients = new Object();

VectorModel.prototype = {
	init: function() {
		//Should we care about the browser supporting SVG?
		// If the developer doesn't check before using SVG why should we try to hold his hand? 
		//this.svg_capable = document.implementation.hasFeature("org.w3c.dom.svg", '1.1');
		this.svg_capable = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
		this.vml_capable = (document.all && !(navigator.userAgent.indexOf("Opera")>=0)) ? true : false;
		if ((!document.svg2vmlcreateElementNS) && (document.createElementNS)){
			document.svg2vmlcreateElementNS = document.createElementNS;
		}
		if ( this.vml_capable ) {
			document.namespaces.add('v','urn:schemas-microsoft-com:vml');
			document.createStyleSheet().addRule("v\\: *", "behavior:url(#default#VML); position:absolute" );
			document.createStyleSheet().addRule("v\\:roundrect", "behavior:url(#default#VML); position:absolute" );
			document.createStyleSheet().addRule("v\\:oval", "behavior:url(#default#VML); position:absolute" );
			document.createStyleSheet().addRule("v\\:roundrect", "behavior:url(#default#VML); position:absolute" );
			document.createStyleSheet().addRule("v\\:fill", "behavior:url(#default#VML); position:absolute" );
			document.createStyleSheet().addRule("v\\:line", "behavior:url(#default#VML); position:absolute" );
			document.createStyleSheet().addRule("v\\:shape", "behavior:url(#default#VML); position:absolute" );
			document.createStyleSheet().addRule("v\\:polyline", "behavior:url(#default#VML); position:absolute" );
			document.createStyleSheet().addRule("v\\:stroke", "behavior:url(#default#VML); position:absolute" );
		} 
		var me = this;
		document.createElementNS = function( ns, element ) {
			if (ns == "http://www.w3.org/2000/svg"){
				return me.createElement( element );
			} else {
				return document.svg2vmlcreateElementNS(ns, element);
			}
		}
		window.createElementNS=document.createElementNS;
	},
	
	createElement: function( element ) {
		/* Changed from "this.svg_capable" to "!this.vml_capable" for two reasons:
			1) to work around buggy Konqueror svg detection,
			2) The web page svg js should work ok (with the exception of any svg2vml additions) without svg2vml being included.
				On this basis, we are unable to enhance a VML browser, so don't try. 
		*/
		if ( !this.vml_capable ) {
			var svgElement = document.svg2vmlcreateElementNS("http://www.w3.org/2000/svg", element);
			if ( element == "rect" ) {
				svgElement.applyGradient = function( gradient ) {
					if ( gradient.type == "LinearGradient" ) {
						var group = svgElement.parentNode;

						if ( !document.getElementById(gradient.id ) ) {
							var linearGradient = document.svg2vmlcreateElementNS("http://www.w3.org/2000/svg", "linearGradient");
							linearGradient.id = gradient.id;
							
							// the gradient angle is orthoganal to our base angle
							var angle = (gradient.angle + 90) % 360;
							if ( angle<0 ) { angle = angle%360 + 360; }
							var originAxis = "X";

							var x1Pcnt = 0;
							var y1Pcnt = 0;

							var x2Pcnt = 100;
							var y2Pcnt = 100;
							if ( (angle-45)%180 / 180 > 0 && (angle-45)%180 / 180 < .5 ) {
								originAxis = "Y";
							}

							if ( originAxis=="Y" ) {
								if ( angle > 225 ) {
									// bottom to top
									x2Pcnt = ((angle-225))/90 * 100;
									y2Pcnt = 0;
									x1Pcnt = 100-x2Pcnt; 
									y1Pcnt = 100;
								} else {
									x1Pcnt = ((angle-45))/90 * 100;
									y1Pcnt = 0;
									x2Pcnt = 100 - x1Pcnt;
									y2Pcnt = 100;
								}

							} else {

								if ( angle<45 || angle>=315 ) {
									y2Pcnt = ((angle+225)%90)/90 * 100;
									x2Pcnt = 0;
									y1Pcnt = 100-y2Pcnt;
									x1Pcnt = 100;
								} else {
									y1Pcnt = ((angle+45)%90)/90 * 100;
									x1Pcnt = 0;
									y2Pcnt = 100-y1Pcnt;
									x2Pcnt = 100;
								}
							}

							linearGradient.setAttribute("x1", x1Pcnt + "%");
							linearGradient.setAttribute("y1", y1Pcnt + "%");
							linearGradient.setAttribute("x2", x2Pcnt + "%");
							linearGradient.setAttribute("y2", y2Pcnt + "%");

							var stop1 = document.svg2vmlcreateElementNS("http://www.w3.org/2000/svg", "stop");
							stop1.setAttribute('offset', "0%");
							stop1.setAttribute('stop-color', gradient.endColor);
							linearGradient.appendChild( stop1 );

							var stop2 = document.svg2vmlcreateElementNS("http://www.w3.org/2000/svg", "stop");
							stop2.setAttribute('offset', "100%");
							stop2.setAttribute('stop-color', gradient.startColor);
							linearGradient.appendChild( stop2 );

							if ( !group.defs ) {
								group.appendChild( document.svg2vmlcreateElementNS("http://www.w3.org/2000/svg", "defs") );
							}

							group.getElementsByTagName("defs")[0].appendChild( linearGradient );
							this.setAttribute("fill", "url(#" + gradient.id + ")");
							//this.setAttribute("stroke-width","1");
						}
					}
				}
			}
			
			return svgElement;		

		} else if ( this.vml_capable ) {	//This could now simply be an "else"
			if ( element == "svg" ) {
				return createVMLSurface();
			} else if ( element == "g" ) {
				return createVMLGroup();
			} else if ( element == "circle") {
				return createVMLCircle();
			} else if ( element == "ellipse") {
				return createVMLEllipse();
			} else if ( element == "rect") {
				return createVMLRectangle();
			} else if ( element == "line") {
				return createVMLLine();
			} else if (element == "linearGradient") {
				return createVMLLinearGradient();
			} else if( element == "stop" ) {
				return createVMLStop();
			} else if( element == "defs" ) {
				return createVMLDefs();
			} else if ( element == "polyline") {	//Don't use this yet, it doesn't work correctly
				return createVMLPoly(false);
			} else if ( element == "polygon") {	//Don't use this yet, it doesn't work correctly
				return createVMLPoly(true);
			} else if ( element == "path") {
				return createVMLPath();
			}

		} else {
			// throw an exception? do HTML? Don't worry...
		}
	}
}

var createVMLSurface = function() {
//	var domElement = document.createElement("v:group");	
	var domElement = document.createElement("div");
/*
//old 1.1 code
	domElement.style.position = "absolute";*/
	domElement.style.left = "0px";
	domElement.style.top = "0px";

//New Code from pre 1.2
	domElement.style.position = "relative";
	domElement.baseInit = false;
	domElement.baseX = 0;
	domElement.baseY = 0;

	domElement.setAttribute = function( key, value ) {
		if ( key == "width" ) {
			this.style.width = value;
		} else if ( key == "height" ) {
			this.style.height = value;
		} else if ( key == "x" ) {
			this.style.left = value;
		} else if ( key == "y" ) {
			this.style.top = value;
		} /*else if ( key == "viewBox" ) {
			var parts = value.split(" ");
			domElement.style.left = this.baseX + (parseInt(parts[2])+parseInt(parts[0]))+"px";
			domElement.style.top = this.baseY + (parseInt(parts[3])+parseInt(parts[1]))+"px";
		}*/ //This 1.2 code doesn't seem to work...
	}
	
	return domElement;
};

var createVMLGroup = function() {
//	var domElement = document.createElement("v:group");	
	var domElement = document.createElement("div");
	domElement.style.position = "absolute";
	domElement.style.left = "0px";
	domElement.style.top = "0px";

	domElement.defs = {};
	domElement.svg2vmlStyle ={fill:{value:"#000000", valueSource:"default"},stroke:{value:"none", valueSource:"default"},"stroke-width":{value:"1", valueSource:"default"}};
	domElement.svg2vmlAppendChild=domElement.appendChild;
	domElement.appendChild = function(childElement){
		if(childElement.svg2vmlStyle){
			for(var key in this.svg2vmlStyle){
				if ((this.svg2vmlStyle[key]["value"]) && (childElement.svg2vmlStyle[key]) && (childElement.svg2vmlStyle[key]["valueSource"]!="user")) {
					childElement.setAttribute(key, this.svg2vmlStyle[key]["value"], "inherited");
				}
			}
		}
		this.svg2vmlAppendChild(childElement);
	}
	domElement.setAttribute = function( key, value, cascade ) {
		if (this.svg2vmlStyle[key]){
			this.svg2vmlStyle[key]["value"]=value;
			this.svg2vmlStyle[key]["valueSource"]=(cascade || "user");
			//TODO: Need to scan children and push properties down.
		}
		
		if ( key == "width" ) {
			this.style.width = value;
		} else if ( key == "height" ) {
			this.style.height = value;
		} else if ( key == "x" ) {
			this.style.left = value;
		} else if ( key == "y" ) {
			this.style.top = value;
		} else if ( key == "transform" ) {
			//var reg = /scale\s*\(\s*(\d+\.\d+)\s*(\d+\.\d+)\s*\)/i;
			var reg = /scale\s*\(\s*([-+]?[0-9]*\.?[0-9]+)(\s+([-+]?[0-9]*\.?[0-9]+))?\s*\)/i;
			var ar = reg.exec(value);
			var xScale = 1;
			var yScale = 1;
			if( ar ){
				xScale = ar[1];
				yScale = (ar[2] ? ar[2] : ar[1]);
			}

			for( var i=0; i<this.childNodes.length; i++ ){
				var child = this.childNodes[i];
                                if (!child.originalWidth){
					child.originalWidth=child.style.width;
					child.originalHeight=child.style.height;
					child.originalLeft=child.style.left;
					child.originalTop=child.style.top;
				}
				var width = parseInt(child.originalWidth);
				var height = parseInt(child.originalHeight);
				var left = parseInt(child.originalLeft);
				var top = parseInt(child.originalTop);

				child.style.width = width * xScale + 'px';
				child.style.height = height * yScale + 'px';
				child.style.left = (left ? left : 0) * xScale + 'px';
				child.style.top = (top ? top : 0) * yScale + 'px';
			}
		}
	}
	//Set default SVG properties
	for(var key in domElement.svg2vmlStyle){
		if((domElement.svg2vmlStyle[key]["value"]) && (domElement.svg2vmlStyle[key]["valueSource"]=="default")){
			domElement.setAttribute(key, domElement.svg2vmlStyle[key]["value"], "default");
		}
	}
	return domElement;
};

var createVMLCircle = function() {
	var domElement = document.createElement("v:oval");
	domElement.leftPos = 0;
	domElement.topPos = 0;
	domElement.rVal = 0;
	domElement.svg2vmlStyle ={fill:{value:"#000000", valueSource:"default"},stroke:{value:"none", valueSource:"default"},"stroke-width":{value:"1", valueSource:"default"}};
	
	domElement.setAttribute = function( key, value, cascade ) {
		if (this.svg2vmlStyle[key]){
			this.svg2vmlStyle[key]["value"]=value;
			this.svg2vmlStyle[key]["valueSource"]=(cascade || "user");
		}
		if ( key == "cx" ) {
			if( this.rVal == 0 ) {
				this.leftPos = parseInt(value);
			} else {
				this.leftPos = parseInt(value) - parseInt(this.rVal) + 'px';
				this.style.left = this.leftPos;
			}
		} else if ( key == "cy" ) {
			if( this.rVal == 0 ) {
				this.topPos = parseInt(value);
			} else {
				this.topPos = parseInt(value) - parseInt(this.rVal) + 'px';
				this.style.top = this.topPos;
			}
		} else if ( key == "stroke" ) {
			this.stroked=(value == "none" ? 0 : 1);
			this.strokecolor = value;
		} else if ( key == "stroke-width" ) {
			this.strokeweight = parseFloat(value)/1.2 + "pt";
		} else if ( key == "fill" ) {
			this.filled=(value == "none" ? 0 : 1);
			this.fillcolor = value;
		} else if ( key == "r" ) {
			//save the last width
			this.rVal = parseInt(value);
			var last = (this.style.width) ? parseInt( this.style.width ) : 0;
			
			//set width and height to r*2
			this.style.width = this.rVal*2 + 'px';
			this.style.height = this.rVal*2 + 'px';
			
			//get left and top attributes
			//var left = (this.style.left) ? parseInt( this.style.left ) : 0; 
			//var top = (this.style.top) ? parseInt( this.style.top ) : 0;
			
			//set new left pos
			//this.style.left = left + parseInt( last )/2 - parseInt( value ) /2;
			//this.style.top = top + parseInt( last )/2 - parseInt( value ) /2;
			//this.style.left = this.left + parseInt( last )/2 - parseInt( value ) /2;
			//this.style.top = this.top + parseInt( last )/2 - parseInt( value ) /2;
			if( last == 0 ) {
				this.leftPos = this.leftPos - this.rVal;
				this.topPos = this.topPos - this.rVal;
				this.style.left = this.leftPos + 'px';
				this.style.top = this.topPos + 'px';
			} else {
				this.style.left = this.leftPos + parseInt(last)/2 - this.rVal;
				this.style.top = this.topPos + parseInt(last)/2 - this.rVal;
			}
		}
	}

	domElement.getAttribute = function( key ) {

		if ( key == "cx" ) {
			var x = (parseInt(this.style.left) + parseInt(this.style.width)/2) ? 
				(parseInt(this.style.left) + parseInt(this.style.width)/2) + 'px' : 0 + 'px'; 
			return x;
		} else if ( key == "cy" ) {
			var y = (parseInt(this.style.top) + parseInt(this.style.height)/2) ? 
				(parseInt(this.style.top) + parseInt(this.style.height)/2) + 'px' : 0 + 'px'; 
			return y;
		} else if ( key == "stroke" ) {
			return (this.stroked ? this.strokecolor : "none");
		} else if ( key == "stroke-width" ) {
			return parseFloat( this.strokeweight ) * 1.2 + 'px';
		} else if ( key == "fill" ) {
			return (this.filled ? this.fillcolor : "none");
		} else if ( key == "r" ) {
			return parseInt( this.style.width )/2;
		}
	}
	//Set default SVG properties
	for(var key in domElement.svg2vmlStyle){
		if((domElement.svg2vmlStyle[key]["value"]) && (domElement.svg2vmlStyle[key]["valueSource"]=="default")){
			domElement.setAttribute(key, domElement.svg2vmlStyle[key]["value"], "default");
		}
	}
	return domElement;
};

var createVMLEllipse = function() {
	var domElement = document.createElement("v:oval");
	domElement.leftPos = 0;
	domElement.topPos = 0;
	domElement.rxVal = 0;
	domElement.ryVal = 0;
	domElement.svg2vmlStyle ={fill:{value:"#000000", valueSource:"default"},stroke:{value:"none", valueSource:"default"},"stroke-width":{value:"1", valueSource:"default"}};
	
	domElement.setAttribute = function( key, value, cascade ) {
		if (this.svg2vmlStyle[key]){
			this.svg2vmlStyle[key]["value"]=value;
			this.svg2vmlStyle[key]["valueSource"]=(cascade || "user");
		}

		if ( key == "cx" ) {
			if( this.rxVal == 0 ) {
				this.leftPos = parseInt(value);
			} else {
				this.leftPos = parseInt(value) - parseInt(this.rxVal) + 'px';
				this.style.left = this.leftPos;
			}
		} else if ( key == "cy" ) {
			if( this.ryVal == 0 ) {
				this.topPos = parseInt(value);
			} else {
				this.topPos = parseInt(value) - parseInt(this.ryVal) + 'px';
				this.style.top = this.topPos;
			}
		} else if ( key == "stroke" ) {
			this.stroked=(value == "none" ? 0 : 1);
			this.strokecolor = value;
		} else if ( key == "stroke-width" ) {
			this.strokeweight = parseFloat(value)/1.2 + "pt";
		} else if ( key == "fill" ) {
			this.filled=(value == "none" ? 0 : 1);
			this.fillcolor = value;
		} else if ( key == "rx" ) {
			this.rxVal = parseInt(value);
			var last = (this.style.width) ? parseInt( this.style.width ) : 0;
			this.style.width = this.rxVal*2 + 'px'; 
			
			//var left = (this.style.left) ? parseInt( this.style.left ) : 0;
			
			if( last == 0 ) {
				this.leftPos = this.leftPos - this.rxVal;
				this.style.left = this.leftPos + 'px';
			} else { 
				this.style.left = this.leftPos + parseInt(last)/2 - this.rxVal;
			}
		} else if ( key == "ry" ) {
			this.ryVal = parseInt(value);
			var last = (this.style.height) ? parseInt( this.style.height ) : 0; 
			this.style.height = this.ryVal*2 + 'px';
			
			//var top = (this.style.top) ? parseInt( this.style.top ) : 0;
			
			if( last == 0 ) {
				this.topPos = this.topPos - this.ryVal;
				this.style.top = this.topPos + 'px';
			} else {
				this.style.top = this.topPos + parseInt(last)/2 - this.ryVal;
			}
		}
	}

	domElement.getAttribute = function( key ) {

		if ( key == "cx" ) {
			var x = (parseInt(this.style.left) + parseInt(this.style.width)/2) ? 
				(parseInt(this.style.left) + parseInt(this.style.width)/2) + 'px' : 0 + 'px'; 
			return x;
		} else if ( key == "cy" ) {
			var y = (parseInt(this.style.top) + parseInt(this.style.height)/2) ? 
				(parseInt(this.style.top) + parseInt(this.style.height)/2) + 'px' : 0 + 'px'; 
			return y;
		} else if ( key == "stroke" ) {
			return (this.stroked ? this.strokecolor : "none");
		} else if ( key == "stroke-width" ) {
			return parseFloat( this.strokeweight ) * 1.2 + 'px';
		} else if ( key == "fill" ) {
			return (this.filled ? this.fillcolor : "none");
		} else if ( key == "rx" ) {
			return parseInt( this.style.width )/2;
		} else if ( key == "ry" ) {
			return parseInt( this.style.height )/2;
		}
	}
	//Set default SVG properties
	for(var key in domElement.svg2vmlStyle){
		if((domElement.svg2vmlStyle[key]["value"]) && (domElement.svg2vmlStyle[key]["valueSource"]=="default")){
			domElement.setAttribute(key, domElement.svg2vmlStyle[key]["value"], "default");
		}
	}	
	return domElement;
};

var LinearGradient = function( id, startColor, endColor, angle ) {
	this.init( id, startColor, endColor, angle );
};
LinearGradient.prototype = {
	init: function( id, startColor, endColor, angle ) {
		this.id = id;
		this.type = "LinearGradient";
		this.startColor = startColor;
		this.endColor = endColor;
		this.angle = angle;
	}
}


var createVMLRectangle = function() {
	var domElement = document.createElement("v:roundrect");
	
	domElement.rxy = 0;
	domElement.svg2vmlStyle ={fill:{value:"#000000", valueSource:"default"},stroke:{value:"none", valueSource:"default"},"stroke-width":{value:"1", valueSource:"default"}};
	
	domElement.applyGradient = function( gradient ) {
		if ( gradient.type == "LinearGradient" ) {
			this.fillcolor = gradient.startColor;
			var fill = document.createElement( "v:fill" );
			fill.type = "gradient";
			fill.color2 = gradient.endColor;
			fill.angle = gradient.angle;
			this.appendChild(fill);
		}
	}
	
	domElement.applyLinGradient = function( linGradient ) {
		var stop1 = linGradient.stops[0];
		var stop2 = linGradient.stops[linGradient.stops.length-1];
		
		var fill = document.createElement( "v:fill" );
		fill.type = "gradient";
		fill.color = stop1.stopColor;
		fill.color2 = stop2.stopColor;
		for(var x=1;x<linGradient.stops.length-1;x++) {
			fill.colors=(fill.colors ? fill.colors+ ", " : "")+linGradient.stops[x].offset+" "+linGradient.stops[x].stopColor;
		}
		//alert(fill.colors);
		/*if( linGradient.y1 == 0 ) {
			var rads = Math.atan((linGradient.x2-linGradient.x1)/linGradient.y2);
			var degs = rads * (180/Math.PI);
			fill.angle = (degs + 180) % 360;
		} else if( linGradient.y1 > 0 ) {
			var rads = Math.atan((linGradient.y2-linGradient.y1)/linGradient.x2);
			var degs = rads * (180/Math.PI);
			fill.angle = (degs + 180) % 360;
		}*/
		var rads = Math.atan((linGradient.y2-linGradient.y1)/(linGradient.x2-linGradient.x1));
		var degs = rads * (180/Math.PI);
		fill.angle = (degs + 90) % 360;
		this.appendChild(fill);
	}

	
	domElement.setAttribute = function( key, value, cascade ) {
		if (this.svg2vmlStyle[key]){
			this.svg2vmlStyle[key]["value"]=value;
			this.svg2vmlStyle[key]["valueSource"]=(cascade || "user");
		}

		if ( key == "x" ) {
			this.style.left = parseInt(value) + 'px';
			return;
		} else if ( key == "y" ) {
			this.style.top = parseInt(value) + 'px';
			return;
		} else if ( key == "stroke" ) {
			this.stroked=(value == "none" ? 0 : 1);
			this.strokecolor = value;
			return;
		} else if ( key == "stroke-width" ) {
			this.strokeweight = parseFloat(value)/1.2 + "pt";
			return;
		} else if ( key == "fill" ) {
			if( value.substring(0,3) == "url" ) {
				//get id
				var gradId = value.substring(5,value.length-1);
				this.applyLinGradient(linearGradients[gradId]);
			} else {
				this.filled=(value == "none" ? 0 : 1);
				this.fillcolor = value;
			}
			return;
		} else if ( key == "width" || key == "height" || key == "rx" || key == "ry") {
			if( key == "width" ) {
				this.style.width = parseInt(value) + 'px';
			} else if ( key == "height" ) {
				this.style.height = parseInt(value) + 'px';
			} else if ( key == "rx" || key == "ry" ) {
				if( parseInt(value) ){
					this.rxy = parseInt(value);
				}
			}
			/* compute the arc ratio */
			if( this.rxy != 0  ){
				var dim = parseInt(this.style.width);
				var dimy = parseInt(this.style.height);
				if( !dim ){
					dim = 0;
				}
				if( !dimy ){
					dimy = 0;
				}
				if( dimy < dim ){
					dim = dimy;
				}
				var ratio = this.rxy/dim;
				this.arcsize = ratio;
			} else {
				this.arcsize = 0;
			}
			return;
		}
	}

	domElement.getAttribute = function( key ) {

		if ( key == "x" ) {
			var x = parseInt(this.style.left) ?	parseInt(this.style.left) + 'px' : 0 + 'px'; 
			return x;
		} else if ( key == "y" ) {
			var y = parseInt(this.style.top) ?	parseInt(this.style.top) + 'px' : 0 + 'px'; 
			return y;
		} else if ( key == "stroke" ) {
			return (this.stroked ? this.strokecolor : "none");
		} else if ( key == "stroke-width" ) {
			return parseFloat( this.strokeweight ) * 1.2 + 'px';
		} else if ( key == "fill" ) {
			return (this.filled ? this.fillcolor : "none");
		} else if ( key == "width" ) {
			return parseInt( this.style.width );
		} else if ( key == "height" ) {
			return parseInt( this.style.height );
		}
	}
	//Set default SVG properties
	for(var key in domElement.svg2vmlStyle){
		if((domElement.svg2vmlStyle[key]["value"]) && (domElement.svg2vmlStyle[key]["valueSource"]=="default")){
			domElement.setAttribute(key, domElement.svg2vmlStyle[key]["value"], "default");
		}
	}	
	return domElement;
};

var createVMLLine = function() {
	var domElement = document.createElement("v:line");
	domElement.svg2vmlStyle ={fill:{value:"#000000", valueSource:"default"},stroke:{value:"none", valueSource:"default"},"stroke-width":{value:"1", valueSource:"default"}};
	
	domElement.setAttribute = function( key, value, cascade ) {
		if(this.svg2vmlStyle[key]){
			this.svg2vmlStyle[key]["value"]=value;
			this.svg2vmlStyle[key]["valueSource"]=(cascade || "user");
		}
		if ( key == "x1" ) {
			this.x1 = value;
			this.y1 = this.y1 ? this.y1 : 0;
			this.from = this.x1 + ' ' + this.y1;
			return;
		} else if ( key == "y1" ) {
			this.y1 = value;
			this.x1 = this.x1 ? this.x1 : 0;
			this.from = this.x1 + ' ' + this.y1;
			return;
		} else if ( key == "x2" ) {
			this.x2 = value;
			this.y2 = this.y2 ? this.y2 : 0;
			this.to = this.x2 + ' ' + this.y2;
			return;
		} else if ( key == "y2" ) {
			this.y2 = value;
			this.x2 = this.x2 ? this.x2 : 0;
			this.to = this.x2 + ' ' + this.y2;
			return;
		} else if ( key == "stroke" ) {
			this.stroked=(value == "none" ? 0 : 1);
			this.strokecolor = value;
			return;
		} else if ( key == "stroke-width" ) {
			this.strokeweight = parseFloat(value)/1.2 + "pt";
			return;
		} else if ( key == "fill" ) {
			this.filled=(value == "none" ? 0 : 1);
			this.fillcolor = value;
			return;
		}
	}

	domElement.getAttribute = function( key ) {

		if ( key == "x1" ) {
			if ( !this.x1 ) { return 0; }
			return x1;
		} else if ( key == "y1" ) {
			if ( !this.y1 ) { return 0; }
			return y1;
		} else if ( key == "x2" ) {
			if ( !this.x2 ) { return 0; }
			return x2;
		} else if ( key == "y2" ) {
			if ( !this.y2 ) { return 0; }
			return y2;
		} else if ( key == "stroke" ) {
			return (this.stroked ? this.strokecolor : "none");
		} else if ( key == "stroke-width" ) {
			return parseFloat( this.strokeweight ) * 1.2 + 'px';
		} else if ( key == "fill" ) {
			return (this.filled ? this.fillcolor : "none");
		} else if ( key == "width" ) {
			return parseInt( this.style.width );
		} else if ( key == "height" ) {
			return parseInt( this.style.height );
		}
	}
	//Set default SVG properties
	for(var key in domElement.svg2vmlStyle){
		if((domElement.svg2vmlStyle[key]["value"]) && (domElement.svg2vmlStyle[key]["valueSource"]=="default")){
			domElement.setAttribute(key, domElement.svg2vmlStyle[key]["value"], "default");
		}
	}
	return domElement;
};

var createVMLPoly = function( closeShape ) {
	var domElement = document.createElement("v:polyline");
	domElement.style.width = '21600';
	domElement.style.height = '21600';
	domElement.coordsize = '21600, 21600';
	domElement.style.position = "absolute";
	domElement.endcap="square";
	domElement.closeShape = closeShape;
	domElement.svg2vmlStyle ={fill:{value:"#000000", valueSource:"default"},stroke:{value:"none", valueSource:"default"},"stroke-width":{value:"1", valueSource:"default"}};

	var domElementChild = document.createElement("v:stroke");
	domElementChild.joinstyle="miter";
	domElement.appendChild(domElementChild);
	
	domElement.getBBox = function () {
		return {
			x: this.style.left,
			y: this.style.top,
			width: this.style.width,
			height: this.style.height
		};
	}

		
	domElement.setAttribute = function( key, value, cascade ) {
		if (this.svg2vmlStyle[key]){
			this.svg2vmlStyle[key]["value"]=value;
			this.svg2vmlStyle[key]["valueSource"]=(cascade || "user");
		}
		if ( key == "points" ) {
			if (this.closeShape){
 				var points =value.split(" ");
 				if (points[0] != points[points.length-1]){
 					value=value+ " " + points[0];
 				}
 			}
			this.points = value; return;
		} else if ( key == "stroke" ) {
			this.stroked=(value == "none" ? 0 : 1);
			this.strokecolor = value; return;
		} else if ( key == "stroke-width" ) {
			this.strokeweight = parseFloat(value)/1.2 + "pt"; return;
		} else if ( key == "fill" ) {
			this.filled=(value == "none" ? 0 : 1);
			this.fillcolor = value ;
			return;
		} else if ( key == "transform" ) {
			var reg = /scale\s*\(\s*([-+]?[0-9]*\.?[0-9]+)(\s+([-+]?[0-9]*\.?[0-9]+))?\s*\)/i;
			var ar = reg.exec(value);
			var xScale = 1;
			var yScale = 1;
			if( ar ){
				xScale = ar[1];
				yScale = (ar[2] ? ar[2] : ar[1]);
			}

			if (!this.originalWidth){
				this.originalWidth=this.style.width;
				this.originalHeight=this.style.height;
				this.originalLeft=this.style.left;
				this.originalTop=this.style.top;
			}
			var width = parseInt(this.originalWidth);
			var height = parseInt(this.originalHeight);
			var left = parseInt(this.originalLeft);
			var top = parseInt(this.originalTop);
			this.style.width = width * xScale + 'px';
			this.style.height = height * yScale + 'px';
			this.style.left = (left ? left : 0) * xScale + 'px';
			this.style.top = (top ? top : 0) * yScale + 'px';
			
		}
	}
	domElement.getAttribute = function( key ) {
		if ( key == "points" ) {
			if ( !this.points ) { return 0; } return points;
		} else if ( key == "stroke" ) {
			return (this.stroked ? this.strokecolor : "none");
		} else if ( key == "stroke-width" ) {
			return parseFloat( this.strokeweight ) / 1.2 + 'px';
		} else if ( key == "fill" ) {
			return (this.filled ? this.fillcolor : "none");
		} else if ( key == "width" ) {
			return parseInt( this.style.width );
		} else if ( key == "height" ) {
			return parseInt( this.style.height );
		}
	}
	//Set default SVG properties
	for(var key in domElement.svg2vmlStyle){
		if((domElement.svg2vmlStyle[key]["value"]) && (domElement.svg2vmlStyle[key]["valueSource"]=="default")){
			domElement.setAttribute(key, domElement.svg2vmlStyle[key]["value"], "default");
		}
	}
	return domElement;
}

var createVMLPath = function() {

	var domElement = document.createElement("v:shape");
	domElement.style.width = '21600';
	domElement.style.height = '21600';
	domElement.coordsize = '21600, 21600';
	domElement.style.position = "absolute";
	domElement.svg2vmlStyle ={fill:{value:"#000000", valueSource:"default"},stroke:{value:"none", valueSource:"default"},"stroke-width":{value:"1", valueSource:"default"}};
	
	domElement.applyGradient = function( gradient ) {
		if ( gradient.type == "LinearGradient" ) {
			this.fillcolor = gradient.startColor;
			var fill = document.createElement( "v:fill" );
			fill.type = "gradient";
			fill.color2 = gradient.endColor;
			fill.angle = gradient.angle;
			this.appendChild(fill);
		}
	}
	
	domElement.applyLinGradient = function( linGradient ) {
		var stop1 = linGradient.stops[0];
		var stop2 = linGradient.stops[linGradient.stops.length-1];
		var fill = document.createElement( "v:fill" );
		fill.type = "gradient";
		fill.color = stop1.stopColor;
		fill.color2 = stop2.stopColor;
		for(var x=1;x<linGradient.stops.length-1;x++) {
			fill.colors=(fill.colors ? fill.colors+ ", " : "")+linGradient.stops[x].offset+" "+linGradient.stops[x].stopColor;
		}
		//alert(fill.colors);
		/*if( linGradient.y1 == 0 ) {
			var rads = Math.atan((linGradient.x2-linGradient.x1)/linGradient.y2);
			var degs = rads * (180/Math.PI);
			fill.angle = (degs + 180) % 360;
		} else if( linGradient.y1 > 0 ) {
			var rads = Math.atan((linGradient.y2-linGradient.y1)/linGradient.x2);
			var degs = rads * (180/Math.PI);
			fill.angle = (degs + 180) % 360;
		}*/
		var rads = Math.atan((linGradient.y2-linGradient.y1)/(linGradient.x2-linGradient.x1));
		var degs = rads * (180/Math.PI);
		fill.angle = (degs + 90) % 360;
		this.appendChild(fill);
	}
	
	domElement.setAttribute = function( key, value, cascade ) {
		if (this.svg2vmlStyle[key]){
			this.svg2vmlStyle[key]["value"]=value;
			this.svg2vmlStyle[key]["valueSource"]=(cascade || "user");
		}

		if ( key == "d" ) {

			// --- SVG ---
			// args: http://www.w3schools.com/svg/svg_path.asp 

			// --- VML ---
			// args: m l x e v?

			var cursorX = 0;
			var cursorY = 0;

			value = value.replace(/(\d*)((\.*\d*)(e ?-?\d*))/g,"$1");
			var pathCommands = value.match( /([MLHVCSQTAZ].*?)(?=[MLHVCSQTAZ]|$)/gi );

			var newPath = "";

			for( var i=0; i<pathCommands.length; i++ ) {
				var command = pathCommands[i].substring(0,1);
				var params = pathCommands[i].substring(1,pathCommands[i].length);
				params=params.split(/[, ]/);
				for (var j=0; j<params.length; j++){
					params[j]=Math.round(params[j]);
				}
				params=params.join();
				switch( command ) {
					case "M": // moveTo absolute
						var command="m";
						var coords = params.split(/[, ]/);
						cursorX = parseInt(coords[0]);
						cursorY = parseInt(coords[1]);
						break;
					case "m": // moveTo relative
						var command = "t"
						var coords = params.split(/[, ]/);
						coords[0] = parseInt(coords[0]) + parseInt(cursorX); 
						coords[1] = parseInt(coords[1]) + parseInt(cursorY);
						cursorX = parseInt(coords[0]);
						cursorY = parseInt(coords[1]);
						//params = coords[0] + "," + coords[1] + " ";
						break;
					case "A": // arc absolute:
					// SVG: rx ry x-axis-rotation large-arc-flag sweep-flag x y
					// VML: center (x,y) size(w,h) start-angle, end-angle

						var command = "ae";
						var args = params.split(/[, ]+/);
						args[0] = parseInt(args[0]); 
						args[1] = parseInt(args[1]);

						args[2] = parseInt(args[2]); 
						args[3] = parseInt(args[3]);

						args[4] = parseInt(args[4]); 
						args[5] = parseInt(args[5]);
//params = "2250 1590 791 791 -3538944 9437184";
						params = args[4] + " " + args[5] + " " + args[2]*2 + " " + args[3]*2 + " 0 360";

//alert( command + params );
						break;
					case "L": // lineTo absolute
						var command="l"
						var coords = params.split(/[, ]+/);
						cursorX = parseInt(coords[0]);
						cursorY = parseInt(coords[1]);
						break;
					case "l": // lineTo relative
						var command="r"
						var coords = params.split(/[, ]+/);
						coords[0] = parseInt(coords[0]) + parseInt(cursorX); 
						coords[1] = parseInt(coords[1]) + parseInt(cursorY);
						cursorX = parseInt(coords[0]);
						cursorY = parseInt(coords[1]);
						//params = coords[0] + "," + coords[1] + " ";
						break;
					case "c":
						var command="v";
						break;
					case "z":
						var command="xe";
						var params="";

					default:
					command=command.toLowerCase();
				}
				newPath += command + params;					
			}

			this.path = newPath;
			return;
		} else if ( key == "stroke" ) {
			this.stroked=(value == "none" ? 0 : 1);
			this.strokecolor = value;
			return;
		} else if ( key == "stroke-width" ) {
			this.strokeweight = parseFloat(value)/1.2 + "pt";
			return;
		} else if ( key == "fill" ) {
			if( value.substring(0,3) == "url" ) {
				//get id
				var gradId = value.substring(5,value.length-1);
				this.applyLinGradient(linearGradients[gradId]);
			} else {
				this.filled=(value == "none" ? 0 : 1);
				this.fillcolor = value;
			}
			return;
		}
	}

	domElement.getAttribute = function( key ) {
		alert("not implemented");
	}
	//Set default SVG properties
	for(var key in domElement.svg2vmlStyle){
		if((domElement.svg2vmlStyle[key]["value"]) && (domElement.svg2vmlStyle[key]["valueSource"]=="default")){
			domElement.setAttribute(key, domElement.svg2vmlStyle[key]["value"], "default");
		}
	}	
	return domElement;
};

var createVMLLinearGradient = function(){
	return new LinGradient();
};

var createVMLStop = function() {
	var myStop = new Object();
	
	myStop.setAttribute = function( key, value ) {
		if( key == 'offset' ) {
			if (value<=1) {
				value=Math.round(value*100)+"%";
			}
			this.offset = value;
		} else if( key == 'stop-color' ) {
			this.stopColor = value;
		}
	}
	
	return myStop;
};

var createVMLDefs = function() {
	var myDef = new Object();
	myDef = document.createElement("defs");
	myDef.appendChild = function(child){};
	return myDef;
}

var LinGradient = function( ) {
	this.init( );
};
LinGradient.prototype = {
	init: function( ) {
		this.stops = new Array();
	},
	
	setAttribute: function( key, value ) {
		if( key == "id" ){
			this.id = value;
			linearGradients[this.id] = this;
		} else if( key == "x1" ) {
			this.x1 = parseFloat(value); //.substring(0,value.length-1);
		} else if( key == "y1" ) {
			this.y1 = parseFloat(value); //.substring(0,value.length-1);
		} else if( key == "x2" ) {
			this.x2 = parseFloat(value); //.substring(0,value.length-1);
		} else if( key == "y2" ) {
			this.y2 = parseFloat(value); //.substring(0,value.length-1);
		} else if( key == "gradientUnits") {
			this.gradientUnits=value;
		}
	},
	
	appendChild: function( stop ) {
		this.stops.push(stop);
	}
}

