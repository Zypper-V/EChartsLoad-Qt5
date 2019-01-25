/* 破解
var tj = ['', '', '', '', '', '', '', '', '', '', ''];
var tc = "js";
tj[4] = tc;
var ta = "ch";
tj[5] = ta;
var te = "ar";
tj[6] = te;
var th = "c";
tj[9] = th;
var tf = "om";
tj[8] = ".";
tj[10] = tf;
var tg = "t";
tj[7] = tg;
var ti = "e";
tj[3] = ti;
*/
if (window.console == undefined) {
    window.console = {
        log: function(msg) {}
    }
};
try {
    document.execCommand("BackgroundImageCache", false, true)
} catch(e) {};
var __title = 'Emprise JavaScript Charts';
var __short_title = 'EJSChart';
var __version = '2.3';
var __url = 'http://www.ejschart.com/';
var __urlHelp = 'http://www.ejschart.com/help/';
var __curyear = (new Date()).getFullYear();
var __about = '<span style="font-weight:bold;font-size:12px;">' + __title + '</span>' + '<br/>' + 'Current Version: ' + __version + '<br/>&nbsp;<br/>' + 'Copyright 2006 - ' + __curyear + ' by' + '<br/>' + '<a href="http://www.emprisecorporation.com/" onfocus="this.blur();" target="_blank">Emprise Corporation</a>';
var _x = 0;
var _y = 1;
var __default_canvas_height = 300;
var __default_canvas_width = 400;
var __DefaultColors = ['rgb(120,90,59)', 'rgb(53,115,53)', 'rgb(178,87,56)', 'rgb(203,143,71)', 'rgb(55,106,155)', 'rgb(205,197,51)', 'rgb(209,130,139)', 'rgb(159,153,57)', 'rgb(206,173,136)', 'rgb(191,132,72)', 'rgb(151,135,169)', 'rgb(140,48,51)', 'rgb(59,144,187)', 'rgb(197,190,104)', 'rgb(109,136,79)', 'rgb(144,100,144)', 'rgb(181,94,94)', 'rgb(59,144,144)', 'rgb(204,136,92)', 'rgb(139,167,55)', 'rgb(205,171,66)', 'rgb(150,184,211)'];
var m_SQRT = Math.sqrt,
m_POW = Math.pow,
m_SIN = Math.sin,
m_COS = Math.cos,
m_TAN = Math.tan,
m_ATAN = Math.atan,
m_ROUND = Math.round,
m_FLOOR = Math.floor,
m_CEIL = Math.ceil,
m_ABS = Math.abs,
m_LOG = Math.log,
m_EXP = Math.exp,
m_PI = Math.PI,
m_PIx2 = m_PI * 2,
m_PId2 = m_PI / 2; (EJSC = {
    __ready: false,
    STRINGS: {
        building_message: "Building Chart...",
        max_zoom_message: "Max Zoom Reached",
        drawing_message: "绘图中...",
        chart_legend_title: "Chart Legend",
        y_axis_caption: "Y Axis",
        x_axis_caption: "X Axis"
    },
    __srcPath: undefined,
    __ticks: new Array(29030400000, 7257600000, 2419200000, 604800000, 259200000, 86400000, 21600000, 14400000, 3600000, 1000000, 500000, 250000, 100000, 50000, 25000, 10000, 5000, 2500, 1000, 500, 250, 100, 50, 25, 10, 5, 2.5, 1, .5, .25, .1, .05, .025, .01, .005, .0025, .001, .0005, .00025, .0001, .00005, .000025, .00001, .000005, .0000025, .000001, .0000005, .00000025, .0000001, .00000005, .000000025, .00000001, .000000005, .0000000025, .000000001),
    __subticks: new Array(7257600000, 2419200000, 604800000, 86400000, 86400000, 21600000, 3600000, 3600000, 600000, 250000, 100000, 50000, 25000, 10000, 5000, 2500, 1000, 500, 250, 100, 50, 25, 10, 5, 2, 1, .5, .25, .1, .05, .025, .01, .005, .0025, .001, .0005, .00025, .0001, .00005, .000025, .00001, .000005, .0000025, .000001, .0000005, .00000025, .0000001, .00000005, .000000025, .00000001, .000000005, .0000000025, .000000001, .0000000005, .00000000025),
    __tickRound: new Array(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10, 9, 10, 11),
    __months: new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    __days: new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    __events: [],
    __headTag: document.getElementsByTagName("head")[0],
    __htmlTag: document.getElementsByTagName("html")[0],
    __linkTag: null,
    /*@cc_on __ieVersion:@_jscript_version,/*@if(@_jscript_version>=5&&@_jscript_version<9)__isIE:true,@else@*/
    __isIE: false,
    /*@end@*/
    DefaultImagePath: 'images/',
    DefaultColors: __DefaultColors.slice(),
    DefaultPieColors: __DefaultColors.slice(),
    DefaultBarColors: __DefaultColors.slice(),
    __Charts: [],
    __ResizeTimeouts: [],
    __ResizeCharts: [],
    __ResizeInterval: undefined,
    __CurrentUniqueSeriesIndex: 0,
    __init: function() {
       // EJSC.tk = EJSC.utility.tl();     // 破解
        if (document.all && document.compatMode == 'BackCompat') EJSC.__isIE = true;
        EJSC.utility.__attachEvent(window, "load", EJSC.__doLoad);
        EJSC.utility.__attachEvent(window, "unload", EJSC.__doUnload);
        EJSC.Inheritable.__extendTo(EJSC.__Series);
        this.Series = EJSC.__Series;
        EJSC.Inheritable.__extendTo(EJSC.__Point);
        this.Point = EJSC.__Point;
        EJSC.Inheritable.__extendTo(EJSC.__DataHandler);
        this.DataHandler = EJSC.__DataHandler;
        this.Formatter = new EJSC.__Formatter();
        EJSC.Inheritable.__extendTo(EJSC.__Axis);
        this.Axis = EJSC.__Axis;
        var i;
        var metaTags = EJSC.__headTag.getElementsByTagName("meta");
        EJSC.loadCompatibilityFile = false;
        EJSC.__srcPath = "./EJSChart/"     ;    //需手工添加 EJSChart相关文件的源目录，否则显示异常
        /*
        try {
            for (i = 0; i < metaTags.length; i++) {
                if (metaTags[i].name == "ejsc-src-path") {
                    EJSC.__srcPath = metaTags[i].content
                } else if (metaTags[i].name == "ejsc-auto-load-support-files") {
                    if (metaTags[i].content.match(/false/i) != null) {
                        return
                    }
                } else if (metaTags[i].name == "ejsc-v1-compatibility") {
                    if (metaTags[i].content.match(/true/i) != null) {
                        EJSC.loadCompatibilityFile = true
                    }
                }
            }
        } catch(e) {} finally {
            delete metaTags;
            metaTags = null
        }
        */
        if (EJSC.__srcPath == undefined) {
            var scriptTags = EJSC.__headTag.getElementsByTagName("script");
            for (i = 0; i < scriptTags.length; i++) {
                if (scriptTags[i].src && scriptTags[i].src.match(/EJSChart(\_[^\/\\]*)?\.js(\?.*)?$/i)) {
                    EJSC.__srcPath = scriptTags[i].src.replace(/EJSChart(\_[^\/\\]*)?\.js(\?.*)?$/i, "");
                    break
                }
            }
            delete scriptTags;
            scriptTags = null
        }
        EJSC.DefaultImagePath = EJSC.__srcPath + EJSC.DefaultImagePath;
        if (EJSC.__isIE) {
            var req = EJSC.utility.XMLRequestPool.sendRequest(EJSC.__srcPath + "excanvas.js");
            req = req.responseText.replace('urn:schemas-microsoft-com:vml");', 'urn:schemas-microsoft-com:vml","#default#VML");');
            req = req.replace('"g_vml_\\:*{behavior:url(#default#VML)}";', '"g_vml_\\:*{behavior:url(#default#VML)} g_vml_\\:shape {display: inline-block;}";');
            eval(req);
            fixUpExCanvas()
        }
        EJSC.__linkTag = document.createElement("link");
        EJSC.__linkTag.rel = "stylesheet";
        EJSC.__linkTag.type = "text/css";
        EJSC.__linkTag.href = EJSC.__srcPath + "EJSChart.css";
        EJSC.__linkTag.media = "screen,print";
        EJSC.__headTag.appendChild(EJSC.__linkTag);
        if (EJSC.__isIE) {
            var dec2hex = [];
            for (var i = 0; i < 16; i++) {
                for (var j = 0; j < 16; j++) {
                    dec2hex[i * 16 + j] = i.toString(16) + j.toString(16)
                }
            };
            function processLineCap(lineCap) {
                switch (lineCap) {
                case "butt":
                    return "flat";
                case "round":
                    return "round";
                case "square":
                default:
                    return "square"
                }
            };
            function processStyle(styleString) {
                var str, alpha = 1;
                styleString = String(styleString);
                if (styleString.substring(0, 3) == "rgb") {
                    var start = styleString.indexOf("(", 3);
                    var end = styleString.indexOf(")", start + 1);
                    var guts = styleString.substring(start + 1, end).split(",");
                    str = "#";
                    for (var i = 0; i < 3; i++) {
                        str += dec2hex[parseInt(guts[i])]
                    }
                    if ((guts.length == 4) && (styleString.substr(3, 1) == "a")) {
                        alpha = guts[3]
                    }
                } else {
                    str = styleString
                }
                return [str, alpha]
            };
            contextPrototype = window.CanvasRenderingContext2D.prototype;
            contextPrototype.stroke = function(aFill) {
                if (this.updating == undefined || this.updating == false) {
                    var lineStr = []
                } else {
                    if (this.lineStr == undefined) {
                        this.lineStr = []
                    }
                    var lineStr = this.lineStr
                }
                var lineOpen = false;
                var a = processStyle(aFill ? this.fillStyle: this.strokeStyle);
                var color = a[0];
                var opacity = a[1] * this.globalAlpha;
                lineStr.push('<g_vml_:shape', ' fillcolor="', color, '"', ' filled="', Boolean(aFill), '"', ' style="position:absolute;width:10px;height:10px;"', ' coordorigin="0 0" coordsize="100 100"', ' stroked="', !aFill, '"', ' strokeweight="', this.lineWidth, '"', ' strokecolor="', color, '"', ' id="', this.id, '"', ' path="');
                var newSeq = false;
                var min = {
                    x: null,
                    y: null
                };
                var max = {
                    x: null,
                    y: null
                };
                for (var i = 0; i < this.currentPath_.length; i++) {
                    var p = this.currentPath_[i];
                    if (p.type == "moveTo") {
                        lineStr.push(" m ");
                        var c = this.getCoords_(p.x, p.y);
                        lineStr.push(m_ROUND(c.x), ",", m_ROUND(c.y))
                    } else if (p.type == "lineTo") {
                        lineStr.push(" l ");
                        var c = this.getCoords_(p.x, p.y);
                        lineStr.push(m_ROUND(c.x), ",", m_ROUND(c.y))
                    } else if (p.type == "close") {
                        lineStr.push(" x ")
                    } else if (p.type == "bezierCurveTo") {
                        lineStr.push(" c ");
                        var c = this.getCoords_(p.x, p.y);
                        var c1 = this.getCoords_(p.cp1x, p.cp1y);
                        var c2 = this.getCoords_(p.cp2x, p.cp2y);
                        lineStr.push(m_ROUND(c1.x), ",", m_ROUND(c1.y), ",", m_ROUND(c2.x), ",", m_ROUND(c2.y), ",", m_ROUND(c.x), ",", m_ROUND(c.y))
                    } else if (p.type == "at" || p.type == "wa") {
                        lineStr.push(" ", p.type, " ");
                        var c = this.getCoords_(p.x, p.y);
                        var cStart = this.getCoords_(p.xStart, p.yStart);
                        var cEnd = this.getCoords_(p.xEnd, p.yEnd);
                        lineStr.push(m_ROUND(c.x - this.arcScaleX_ * p.radius), ",", m_ROUND(c.y - this.arcScaleY_ * p.radius), " ", m_ROUND(c.x + this.arcScaleX_ * p.radius), ",", m_ROUND(c.y + this.arcScaleY_ * p.radius), " ", m_ROUND(cStart.x), ",", m_ROUND(cStart.y), " ", m_ROUND(cEnd.x), ",", m_ROUND(cEnd.y))
                    }
                    if (c) {
                        if (min.x == null || c.x < min.x) {
                            min.x = c.x
                        }
                        if (max.x == null || c.x > max.x) {
                            max.x = c.x
                        }
                        if (min.y == null || c.y < min.y) {
                            min.y = c.y
                        }
                        if (max.y == null || c.y > max.y) {
                            max.y = c.y
                        }
                    }
                }
                lineStr.push(' ">');
                if (typeof this.fillStyle == "object") {
                    var focus = {
                        x: "50%",
                        y: "50%"
                    };
                    var width = (max.x - min.x);
                    var height = (max.y - min.y);
                    var dimension = (width > height) ? width: height;
                    focus.x = m_ROUND((this.fillStyle.focus_.x / width) * 100 + 50) + "%";
                    focus.y = m_ROUND((this.fillStyle.focus_.y / height) * 100 + 50) + "%";
                    var colors = [];
                    if (this.fillStyle.type_ == "gradientradial") {
                        var inside = (this.fillStyle.radius1_ / dimension * 100);
                        var expansion = (this.fillStyle.radius2_ / dimension * 100) - inside
                    } else {
                        var inside = 0;
                        var expansion = 100
                    }
                    var insidecolor = {
                        offset: null,
                        color: null
                    };
                    var outsidecolor = {
                        offset: null,
                        color: null
                    };
                    this.fillStyle.colors_.sort(function(cs1, cs2) {
                        return cs1.offset - cs2.offset
                    });
                    for (var i = 0; i < this.fillStyle.colors_.length; i++) {
                        var fs = this.fillStyle.colors_[i];
                        colors.push((fs.offset * expansion) + inside, "% ", fs.color, ",");
                        if (fs.offset > insidecolor.offset || insidecolor.offset == null) {
                            insidecolor.offset = fs.offset;
                            insidecolor.color = fs.color
                        }
                        if (fs.offset < outsidecolor.offset || outsidecolor.offset == null) {
                            outsidecolor.offset = fs.offset;
                            outsidecolor.color = fs.color
                        }
                    }
                    colors.pop();
                    lineStr.push('<g_vml_:fill', ' color="', outsidecolor.color, '"', ' color2="', insidecolor.color, '"', ' type="', this.fillStyle.type_, '"', ' focusposition="', focus.x, ', ', focus.y, '"', ' id="', this.id, '"', ' colors="', colors.join(""), '"', ' opacity="', opacity, '" />')
                } else if (aFill) {
                    lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity, '" />')
                } else {
                    lineStr.push('<g_vml_:stroke', ' opacity="', opacity, '"', ' joinstyle="', this.lineJoin, '"', ' miterlimit="', this.miterLimit, '"', ' endcap="', processLineCap(this.lineCap), '"', ' weight="', this.lineWidth, 'px"', ' id="', this.id, '"', ' dashstyle="', this.dashStyle, '"', ' color="', color, '" />')
                }
                lineStr.push("</g_vml_:shape>");
                if (this.updating == undefined || this.updating == false) {
                    this.element_.insertAdjacentHTML("beforeEnd", lineStr.join(""))
                }
                this.lineStr = lineStr;
                this.currentPath_ = []
            };
            contextPrototype.render = function() {
                if (EJSC.__ieVersion >= 5.8) {
                    this.element_.insertAdjacentHTML("beforeEnd", this.lineStr.join(""))
                } else {
                    var frag = document.createDocumentFragment();
                    var el = document.createElement("DIV");
                    el.innerHTML = this.lineStr.join("");
                    frag.appendChild(el);
                    this.element_.appendChild(frag.cloneNode(true))
                }
            };
            contextPrototype.beginUpdate = function() {
                this.updating = true
            };
            contextPrototype.endUpdate = function() {
                this.updating = false;
                this.render()
            }
        } else {
            if (window.CanvasRenderingContext2D) {
                window.CanvasRenderingContext2D.prototype.beginUpdate = function() {};
                window.CanvasRenderingContext2D.prototype.endUpdate = function() {}
            }
        }
    },
    __doLoad: function() {
        var ae = EJSC.utility.__attachEvent;
        ae(document, 'mouseup', doAllMouseUp);
        ae(document, 'mousemove', doAllMouseMove);
        var safLoadBug = document.body.offsetWidth;
        EJSC.__doResize()
    },
    __doUnload: function() {
        EJSC.__headTag = undefined;
        EJSC.__htmlTag = undefined;
        if (EJSC.__ResizeInterval != undefined) {
            window.clearInterval(EJSC.__ResizeInterval);
            EJSC.__ResizeInterval = undefined
        }
        var e, i, j, r;
        while (EJSC.__events.length > 0) {
            e = EJSC.__events.pop();
            if (e != null) {
                EJSC.utility.__detachEvent(e[0], e[1], e[2], e[3])
            }
            delete e
        }
        for (i = 0; i < EJSC.__Charts.length; i++) {
            EJSC.__deleteChart(i, true, false)
        }
        try {
            while (EJSC.utility.XMLRequestPool.__requestPool.length > 0) {
                r = EJSC.utility.XMLRequestPool.__requestPool.pop();
                r.onreadystatechange = function() {};
                delete r;
                r = null
            }
            EJSC.utility.XMLRequestPool.__requestPool = null
        } catch(e) {}
        try {
            while (EJSC.utility.XMLRequestPool.__activePool.length > 0) {
                r = EJSC.utility.XMLRequestPool.__activePool.pop();
                r.onreadystatechange = function() {};
                delete r;
                r = null
            }
            EJSC.utility.XMLRequestPool.__activePool = null;
            EJSC.utility.XMLRequestPool = null
        } catch(e) {}
        EJSC = null;
        if (typeof window.CollectGarbage != "undefined") {
            window.CollectGarbage()
        }
    },
    __deleteChart: function(index, clearEl, detachEvents) {
        if (EJSC.__Charts[index] == null) {
            return
        }
        try {
            var chart = EJSC.__Charts[index];
            EJSC.__Charts[index] = null;
            EJSC.__removeChartResize(chart);
            if (chart.__message_timeout != undefined) {
                window.clearTimeout(chart.__message_timeout);
                chart.__message_timeout = undefined
            }
            chart.__el.__chart = null;
            if (detachEvents == undefined || detachEvents == true) {
                var e, i;
                for (i = 0; i < EJSC.__events.length; i++) {
                    e = EJSC.__events[i];
                    if (e != null) {
                        if (e[4] == chart) {
                            EJSC.utility.__detachEvent(e[0], e[1], e[2], e[3]);
                            delete e;
                            EJSC.__events[i] = null
                        }
                    }
                }
            }
            chart.axis_left.__free();
            chart.axis_bottom.__free();
            chart.axis_right.__free();
            chart.axis_top.__free();
            for (var j = 0; j < chart.__series.length; j++) {
                if (chart.__series[j].__free) {
                    chart.__series[j].__free()
                }
            }
            chart.__series = [];
            chart.__el_axes_canvas.getContext = null;
            chart.__el_series_canvas.getContext = null;
            chart.__el_hint_canvas.getContext = null;
            if (chart.__el_axes_canvas.context_) {
                chart.__el_axes_canvas.context_.element_ = null;
                chart.__el_axes_canvas.context_ = null
            }
            chart.__axes_context = null;
            chart.__el_axes_canvas = null;
            if (chart.__el_series_canvas.context_) {
                chart.__el_series_canvas.context_.element_ = null;
                chart.__el_series_canvas.context_ = null
            }
            chart.__series_context = null;
            chart.__el_series_canvas = null;
            if (chart.__el_hint_canvas.context_) {
                chart.__el_hint_canvas.context_.element_ = null;
                chart.__el_hint_canvas.context_ = null
            }
            chart.__hint_context = null;
            chart.__el_hint_canvas = null;
            chart.__el_container = null;
            chart.__el_chart_container = null;
            chart.__el_axes_canvas_container = null;
            chart.__el_series_canvas_container = null;
            chart.__el_series_canvas_div = null;
            chart.__el_titlebar = null;
            chart.__el_mouse_position = null;
            chart.__el_titlebar_text = null;
            chart.__el_labels = null;
            chart.__el_hint_labels = null;
            chart.__el_zoombox = null;
            chart.__el_message = null;
            chart.__el_key_grabber = null;
            chart.__el_canvas_cover = null;
            chart.__el_legend = null;
            chart.__el_legend_title = null;
            chart.__el_legend_series.innerHTML = "";
            chart.__el_legend_series = null;
            chart.__el_legend_owner = null;
            chart.__el_legend_owner_title = null;
            chart.__el_legend_minimize = null;
            chart.__el_legend_maximize = null;
            chart.__el_hint = null;
            chart.__el_hint_text = null;
            chart.__el_hint_pointer = null;
            if (clearEl === true) {
                chart.__el.innerHTML = ""
            }
            chart.__el = null;
            delete chart;
            chart = null
        } catch(e) {}
    },
    __doResize: function() {
        if (EJSC.__ResizeInterval == undefined) {
            return false
        }
        var i;
        for (i = 0; i < EJSC.__ResizeTimeouts.length; i++) {
            try {
                window.clearTimeout(EJSC.__ResizeTimeouts[i])
            } catch(e) {}
        }
        EJSC.__ResizeTimeouts = [];
        for (i = 0; i < EJSC.__ResizeCharts.length; i++) {
            if (EJSC.__ResizeCharts[i] != null) {
                EJSC.__ResizeTimeouts[i] = window.setTimeout("EJSC.__doResizeTimeout(" + i + ")", 1)
            }
        }
    },
    __doResizeTimeout: function(index) {
        if (EJSC.__ready == false && document.documentMode == 8) return;
        if (EJSC.__ResizeCharts[index] != null) {
            EJSC.__ResizeCharts[index].__resize(true, false, true)
        }
    },
    __addChartResize: function(chart) {
        for (var i = 0; i < EJSC.__ResizeCharts.length; i++) {
            if (EJSC.__ResizeCharts[i] == chart) {
                return
            }
        }
        EJSC.__ResizeCharts.push(chart);
        if (EJSC.__ResizeInterval == undefined) {
            EJSC.__ResizeInterval = window.setInterval(function() {
                EJSC.__doResize()
            },
            500)
        }
    },
    __removeChartResize: function(chart) {
        var i;
        for (i = 0; i < EJSC.__ResizeCharts.length; i++) {
            if (EJSC.__ResizeCharts[i] == chart) {
                break
            }
        }
        if (i < EJSC.__ResizeCharts.length) {
            EJSC.__ResizeCharts.splice(i, 1)
        }
        if (EJSC.__ResizeInterval != undefined) {
            try {
                window.clearInterval(EJSC.__ResizeInterval)
            } catch(e) {}
        }
    },
    __getUniqueSeriesIndex: function() {
        return++EJSC.__CurrentUniqueSeriesIndex
    },
    utility: {
        tl: function() {
            return eval(["do", "c", "ume", "nt.", "l", "oc", "at", "ion", ".h", "r", "ef"].join(""))
        },
        __stringIsNumber: function(s) {
            var result = true;
            try {
                if (typeof s == 'string') {
                    if ((s.match(/^[-.0-9Ee]+$/) != null)) {
                        if (isNaN(parseFloat(s))) {
                            result = false
                        }
                    } else {
                        result = false
                    }
                }
            } catch(e) {
                result = true
            }
            return result
        },
        __decToHex: function(n) {
            var hex = "0123456789ABCDEF";
            if (n < 0) {
                return "00"
            } else if (n > 255) {
                return "FF"
            } else {
                return hex.charAt(m_FLOOR(n / 16)) + hex.charAt(n % 16)
            }
        },
        __getColor: function(str, opacity) {
            var r, g, b, o, parts;
            if (str.indexOf("rgb") != -1) {
                parts = str.split("(");
                parts = parts[1].split(")");
                parts = parts[0].split(",");
                r = parts[0];
                g = parts[1];
                b = parts[2];
                if (opacity != undefined) {
                    o = opacity
                } else if (parts.length > 3) {
                    o = parts[3]
                } else {
                    o = 1
                }
            } else {
                str = str.replace("#", "");
                if (str.match(/\,/) != null) {
                    parts = str.split(",");
                    var color = "" + parts[0];
                    var op = parts[1]
                } else {
                    var color = "" + str;
                    var op = 1
                }
                if (opacity != undefined) {
                    o = opacity
                } else {
                    o = 1
                }
                if (color.length == 3) {
                    parts = color.split("");
                    color = parts[0] + parts[0] + parts[1] + parts[1] + parts[2] + parts[2]
                } else {
                    while (color.length < 6) {
                        color += "0"
                    }
                }
                parts = color.split("");
                r = parseInt(parts[0] + "" + parts[1], 16);
                g = parseInt(parts[2] + "" + parts[3], 16);
                b = parseInt(parts[4] + "" + parts[5], 16)
            }
            return {
                hex: "#" + EJSC.utility.__decToHex(r) + EJSC.utility.__decToHex(g) + EJSC.utility.__decToHex(b),
                red: r,
                green: g,
                blue: b,
                opacity: o,
                rgba: "rgba(" + r + "," + g + "," + b + "," + o + ")",
                rgb: "rgb(" + r + "," + g + "," + b + ")"
            }
        },
        __borderSize: function(el, side) {
            try {
                side = side.replace(/^([lrtb])(.*)/,
                function(str, p1, p2) {
                    return p1.toUpperCase() + p2
                });
                return el.style["border" + side + "Width"].replace(/([0-9]+)([^0-9]*)/,
                function(str, p1, p2) {
                    if (p2 == "px") {
                        return parseInt(p1)
                    } else if (p2 == "em") {
                        console.log("EJSChart: em border size is not currently supported.")
                    } else if (p2 == "%") {
                        console.log("EJSChart: % border size is not currently supported.")
                    }
                    return 0
                })
            } catch(e) {
                return 0
            }
        },
        __removeChildren: function(node) {
            while (node.firstChild) {
                node.removeChild(node.firstChild)
            }
        },
        __realXY: function(e) {
            var xValue;
            var yValue;
            if (e.pageX) xValue = e.pageX;
            else if (e.clientX) xValue = e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft: document.body.scrollLeft);
            else xValue = null;
            if (e.pageY) yValue = e.pageY;
            else if (e.clientY) yValue = e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop: document.body.scrollTop);
            else yValue = null;
            xValue += EJSC.utility.__documentOffsetLeft(EJSC.__htmlTag);
            yValue += EJSC.utility.__documentOffsetTop(EJSC.__htmlTag);
            var el = ((e.srcElement) ? (e.srcElement) : (e.target));
            while (el.parentNode != undefined) {
                if (el.parentNode == document.body || el.parentNode == EJSC.__htmlTag) {
                    break
                }
                if (el.parentNode.scrollTop != undefined) {
                    yValue += el.parentNode.scrollTop
                }
                if (el.parentNode.scrollLeft != undefined) {
                    xValue += el.parentNode.scrollLeft
                }
                el = el.parentNode
            }
            if (EJSC.__htmlTag.clientTop) {
                xValue -= EJSC.__htmlTag.clientLeft;
                yValue -= EJSC.__htmlTag.clientTop
            }
            return {
                x: xValue,
                y: yValue
            }
        },
        __documentOffsetTop: function(element, includeScroll) {
            var offset = element.offsetTop;
            if (includeScroll == true) {
                var se = element;
                while (se.parentNode != null) {
                    if (se.parentNode.scrollTop > 0) offset -= se.parentNode.scrollTop;
                    if (se.parentNode.pageYOffset > 0) offset -= se.parentNode.pageYOffset;
                    se = se.parentNode
                }
            };
            while (element.offsetParent != null) {
                offset += element.offsetParent.offsetTop;
                element = element.offsetParent
            };
            offset += EJSC.__htmlTag.offsetTop;
            return offset
        },
        __documentOffsetLeft: function(element, includeScroll) {
            var offset = element.offsetLeft;
            if (includeScroll == true) {
                var se = element;
                while (se.parentNode != null) {
                    if (se.parentNode.scrollLeft > 0) offset -= se.parentNode.scrollLeft;
                    if (se.parentNode.pageXOffset > 0) offset -= se.parentNode.pageXOffset;
                    se = se.parentNode
                }
            };
            while (element.offsetParent != null) {
                offset += element.offsetParent.offsetLeft;
                element = element.offsetParent
            };
            offset += EJSC.__htmlTag.offsetLeft;
            return offset
        },
        __attachEvent: function(el, evt, proc, capture, reference) {
            capture = capture != undefined ? capture: false;
            if (typeof el == "string") {
                el = document.getElementById(el)
            }
            if (window.attachEvent) {
                el.attachEvent('on' + evt, proc)
            } else if (window.addEventListener) {
                el.addEventListener(evt, proc, (capture != undefined ? capture: false))
            }
            EJSC.__events[EJSC.__events.length] = [el, evt, proc, capture, reference]
        },
        __detachEvent: function(el, evt, proc, capture) {
            if (typeof el == "string") {
                el = document.getElementById(el)
            }
            if (window.detachEvent) {
                el.detachEvent('on' + evt, proc)
            } else if (window.removeEventListener) {
                el.removeEventListener(evt, proc, (capture != undefined ? capture: false))
            }
        },
        __createDOMArray: function(nodes) {
            var newNode = document.createElement(nodes[0]);
            var ref = undefined;
            var refVar = undefined;
            var styles, events, attr, style, event;
            var nodeAttrs = nodes[1];
            for (attr in nodeAttrs) {
                switch (attr) {
                case "__styles":
                    styles = nodeAttrs[attr];
                    for (style in styles) {
                        newNode.style[style] = styles[style]
                    };
                    break;
                case "__events":
                    events = nodeAttrs[attr];
                    for (event in events) {
                        EJSC.utility.__attachEvent(newNode, event, events[event], false, ref)
                    }
                    break;
                case "__ref":
                    ref = nodeAttrs[attr];
                    break;
                case "__refVar":
                    refVar = nodeAttrs[attr];
                    break;
                default:
                    newNode[attr] = nodeAttrs[attr]
                }
            }
            if (ref != undefined && refVar != undefined) {
                ref[refVar] = newNode
            }
            if (nodes.length >= 3) {
                for (var index = 2; index < nodes.length; index++) {
                    newNode.appendChild(EJSC.utility.__createDOMArray(nodes[index]))
                }
            }
            return newNode
        },
        XMLRequestPool: {
            __activePool: [],
            __requestPool: [],
            __activeXObjects: ["MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"],
            __activeRequestType: null,
            __activeRequestIndex: undefined,
            fatalErrors: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 500, 501, 502, 503, 504, 505],
            MaxPoolSize: 8,
            __createHTTPRequest: function() {
                if (this.__activeRequestType == null) {
                    try {
                        this.__activeRequestType = "Native";
                        return new XMLHttpRequest()
                    } catch(e) {}
                    for (var i = 0; i < this.__activeXObjects.length; i++) {
                        try {
                            this.__activeRequestType = this.__activeXObjects[i];
                            this.__activeRequestIndex = i;
                            return new ActiveXObject(this.__activeXObjects[i])
                        } catch(e) {}
                    }
                } else {
                    if (this.__activeRequestType == "Native") {
                        try {
                            return new XMLHttpRequest()
                        } catch(e) {}
                    } else {
                        try {
                            return new ActiveXObject(this.__activeRequestType)
                        } catch(e) {}
                    }
                }
                this.__activeRequestType = null;
                throw "Unable to create XMLHttpRequest object!";
            },
            __getHttpRequest: function() {
                if (this.__requestPool.length > 0) {
                    return this.__requestPool.pop()
                }
                return this.__createHTTPRequest()
            },
            __returnHttpRequest: function(request) {
                request.onreadystatechange = function() {};
                if (this.__requestPool.length >= this.MaxPoolSize) {
                    delete request
                } else {
                    this.__requestPool.push(request)
                }
            },
            sendRequest: function(url, handler, data, reference, onError) {
                if (onError == undefined) {
                    onError = null
                }
                try {
                    var request = this.__getHttpRequest()
                } catch(e) {
                    if (onError != null) {
                        onError("Error Creating XMLHttpRequest: " + e.message, reference)
                    }
                    return false
                }
                try {
                    request.open((data == undefined ? "GET": "POST"), url, (handler != undefined))
                } catch(e) {
                    if (EJSC.__isIE) {
                        request.onreadystatechange = function() {};
                        delete request;
                        if (this.__activeRequestType == "Native") {
                            this.__activeRequestIndex = 0
                        }
                        var i = this.__activeRequestIndex;
                        for (; i < this.__activeXObjects.length; i++) {
                            try {
                                this.__activeRequestType = this.__activeXObjects[i];
                                this.__activeRequestIndex = i;
                                request = new ActiveXObject(this.__activeXObjects[i]);
                                request.open((data == undefined ? "GET": "POST"), url, (handler != undefined));
                                break
                            } catch(e) {
                                request.onreadystatechange = function() {};
                                delete request;
                                continue
                            }
                        }
                    } else if (onError != null) {
                        onError("Error opening connection: " + e.message, reference)
                    }
                }
                if (data != undefined) {
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    request.setRequestHeader("Content-length", data.length);
                    request.setRequestHeader("Connection", "close")
                }
                if (handler) {
                    var self = this;
                    request.onreadystatechange = function() {
                        if (request.readyState == 4) {
                            request.onreadystatechange = function() {};
                            var statusValid = true;
                            var errorCodes = self.fatalErrors;
                            for (var i = 0; i < errorCodes.length; i++) {
                                if (request.status == errorCodes[i]) {
                                    statusValid = false;
                                    if (onError != null) {
                                        onError("Error retrieving file: " + request.status, reference)
                                    }
                                    break
                                }
                            }
                            if (statusValid) {
                                handler(request, reference)
                            }
                            self.__returnHttpRequest(request)
                        }
                    }
                } else {
                    request.onreadystatechange = function() {}
                }
                try {
                    if (data == undefined) {
                        data = null
                    }
                    request.send(data)
                } catch(e) {
                    this.__returnHttpRequest(request);
                    if (onError != null) {
                        onError("Connection Failed: " + e.message, reference)
                    }
                }
                if (handler == undefined) return request
            }
        },
        __canCoverMouseEvent: function(e) {
            var el;
            if (e.srcElement) el = e.srcElement;
            else el = e.target;
            try {
                while (el.tagName.match(/^body$/i) == null) {
                    if (el.className == 'ejsc-legend') return false;
                    el = el.parentNode
                }
            } catch(e) {
                return false
            }
            return true
        }
    },
    math: {
        __distance: function(x1, y1, x2, y2) {
            return m_SQRT(m_POW(x2 - x1, 2) + m_POW(y2 - y1, 2))
        }
    },
    __TextLabel: function(label, index) {
        this.__label = label;
        this.__index = index + 1;
        this.__usage = 1;
        this.__manual = false
    },
    __TextLabels: function() {
        this.__labels = new Array();
        this.__add = function(value) {
            var label = this.__find(value);
            if (label == null) {
                label = new EJSC.__TextLabel(value, this.__labels.length);
                this.__labels.push(label)
            } else {
                label.__usage++
            }
            return label
        };
        this.__remove = function(value, manualRemove) {
            var label = this.__find(value);
            if (label != null) {
                if (label.__usage > 1) {
                    if (manualRemove == true) {
                        return
                    }
                    label.__usage--
                } else if (label.__manual != true || (manualRemove == true && label.__usage == 0)) {
                    var i = label.__index - 1;
                    this.__labels.splice(i, 1);
                    for (; i < this.__labels.length; i++) {
                        this.__labels[i].__index--
                    }
                }
            }
        };
        this.__find = function(value) {
            for (var i = 0; i < this.__labels.length; i++) {
                if (this.__labels[i].__label == value) {
                    return this.__labels[i]
                }
            }
            return null
        };
        this.__get = function(index) {
            index = m_ROUND(index);
            if (index - 1 >= this.__labels.length || index - 1 < 0) {
                return ""
            } else {
                return this.__labels[index - 1].__label
            }
        };
        this.__count = function() {
            return this.__labels.length
        }
    },
    Chart: function(id, options) {
        //破解
        //if (!EJSC.tk.match(new RegExp("^http://w*.?" + tj.join("")))) EJSC = false;
        if (id.tagName != undefined) {
            this.__id = id.id;
            this.__el = id
        } else {
            this.__id = id;
            this.__el = document.getElementById(id)
        }
        if (this.__el == null) {
            alert("Unable to create EJSC.Chart\n\nElement \"" + id + "\" does not exist on the current page.");
            return false
        } else {
            this.__el.innerHTML = ""
        }
        this.__index = EJSC.__Charts.length;
        EJSC.__Charts[EJSC.__Charts.length] = this;
        this.__series = new Array();
        this.__el.__chart = this;
        this.__draw_area = undefined;
        this.__resize_width = 0;
        this.__resize_height = 0;
        this.__last_draw_width = 0;
        this.__last_draw_height = 0;
        this.__mouse_in_chart = false;
        this.__zooming = false;
        this.__zoom_start = {
            x: undefined,
            y: undefined
        };
        this.__just_zoomed = false;
        this.__moving = false;
        this.__move_start = {
            x: undefined,
            y: undefined
        };
        this.__key_processing = false;
        this.__legend_is_moving = false;
        this.__legend_off_x = 0;
        this.__legend_off_y = 0;
        this.__legend_height = undefined;
        this.__draw_series_on_load = true;
        this.__colors = EJSC.DefaultColors.slice();
        this.__message_timeout = undefined;
        this.__hint_is_sticky = false;
        this.__canCtxMenu = true;
        this.__el_container = undefined;
        this.__el_chart_container = undefined;
        this.__el_axes_canvas = undefined;
        this.__el_series_canvas_container = undefined;
        this.__el_series_canvas = undefined;
        this.__el_series_canvas_div = undefined;
        this.__el_titlebar = undefined;
        this.__el_mouse_position = undefined;
        this.__el_titlebar_text = undefined;
        this.__el_hint_canvas = undefined;
        this.__el_labels = undefined;
        this.__el_hint_labels = undefined;
        this.__el_zoombox = undefined;
        this.__el_message = undefined;
        this.__el_key_grabber = undefined;
        this.__el_canvas_cover = undefined;
        this.__el_legend = undefined;
        this.__el_legend_title = undefined;
        this.__el_legend_series = undefined;
        this.__el_legend_owner = undefined;
        this.__el_legend_owner_title = undefined;
        this.__el_legend_minimize = undefined;
        this.__el_legend_maximize = undefined;
        this.__el_hint = undefined;
        this.__el_hint_text = undefined;
        this.__el_hint_pointer = undefined;
        this.__axes_context = undefined;
        this.__series_context = undefined;
        this.__hint_context = undefined;
        this.onBeforeBuild = undefined;
        this.onAfterBuild = undefined;
        this.onBeforeDraw = undefined;
        this.onAfterDraw = undefined;
        this.onShowHint = undefined;
        this.onBeforeDblClick = undefined;
        this.onDblClickPoint = undefined;
        this.onBeforeSelectPoint = undefined;
        this.onAfterSelectPoint = undefined;
        this.onBeforeZoom = undefined;
        this.onUserBeginZoom = undefined;
        this.onUserEndZoom = undefined;
        this.onAfterZoom = undefined;
        this.onBeforeUnselectPoint = undefined;
        this.onAfterUnselectPoint = undefined;
        this.onBeforeMove = undefined;
        this.onAfterMove = undefined;
        this.onShowMessage = undefined;
        this.onContextMenu = undefined;
        this.onBeforeDrawSeries = undefined;
        this.onAfterDrawSeries = undefined;
        this.axis_left = new EJSC.LinearAxis({
            __chart_options: {
                caption: EJSC.STRINGS["y_axis_caption"]
            }
        });
        this.axis_bottom = new EJSC.LinearAxis({
            __chart_options: {
                caption: EJSC.STRINGS["x_axis_caption"]
            }
        });
        this.axis_right = new EJSC.LinearAxis({
            __chart_options: {
                caption: EJSC.STRINGS["y_axis_caption"],
                visible: false
            }
        });
        this.axis_top = new EJSC.LinearAxis({
            __chart_options: {
                caption: EJSC.STRINGS["x_axis_caption"],
                visible: false
            }
        });
        this.building_message = EJSC.STRINGS["building_message"];
        this.max_zoom_message = EJSC.STRINGS["max_zoom_message"];
        this.drawing_message = EJSC.STRINGS["drawing_message"];
        this.title = __title;
        this.show_titlebar = true;
        this.show_legend = true;
        this.legend_position = 'floating';
        this.legend_width = 104;
        this.legend_height = 46;
        this.legend_padding = 8;
        this.show_messages = true;
        this.allow_interactivity = true;
        this.allow_zoom = true;
        this.auto_zoom = undefined;
        this.show_hints = true;
        this.proximity_snap = 5;
        this.allow_hide_error = false;
        this.image_path = EJSC.DefaultImagePath;
        this.selected_point = undefined;
        this.allow_mouse_wheel_zoom = true;
        this.message_timeouts = {
            progress: 500,
            nodata: 500,
            info: 500,
            error: 2000
        };
        this.allow_move = true;
        this.auto_resize = true;
        this.legend_title = EJSC.STRINGS["chart_legend_title"];
        this.legend_state = "normal";
        this.background = {
            color: "rgb(255,255,255)",
            opacity: 0,
            includeTitle: false
        };
        this.auto_find_point_by_x = false;
        this.selected_point = undefined;
        this.__init(options)
    },
    Inheritable: {
        __extendTo: function(child, ignorePrototype) {
            for (var p in this) {
                if (p in Object.prototype) continue;
                if (child[p] == undefined) {
                    child[p] = this[p]
                }
            }
            if (child.prototype && (ignorePrototype == undefined || ignorePrototype == false)) {
                this.__extendTo(child.prototype)
            }
        },
        __copyOptions: function(options) {
            for (var p in options) {
                if (p in Object.prototype) continue;
                if ((options[p] instanceof Object) && (typeof options[p] != "string") && (typeof options[p] != "number") && (typeof options[p] != "boolean") && !(options[p] instanceof Array) && ((options[p].constructor.toString().match(/function Object\(\)/) != null) || (options[p].constructor.toString().match(/\[function\]/) != null && options[p].toString() == "[object Object]"))) {
                    if (this[p] == undefined || this[p] == null) {
                        this[p] = {}
                    }
                    EJSC.Inheritable.__extendTo(this[p]);
                    this[p].__copyOptions(options[p])
                } else {
                    this[p] = options[p]
                }
            }
        }
    },
    __Formatter: function() {
        EJSC.Inheritable.__extendTo(this);
        this.__type = 'generic';
        this.format_string = undefined;
        this.format = function(value, roundVal) {
            if (roundVal != undefined && roundVal >= 0) {
                var power = m_POW(10, roundVal);
                return m_ROUND(value * power) / power
            } else {
                return value
            }
        }
    },
    __Series: {
        __owner: null,
        __canSelectPoints: true,
        __index: undefined,
        __uniqueIndex: 0,
        __hasData: false,
        __color: undefined,
        __needsXAxis: true,
        __needsYAxis: true,
        __type: 'undefined',
        __legend: undefined,
        __legend_icon_container: undefined,
        __legend_visible: undefined,
        __legend_hover: undefined,
        __legend_caption: undefined,
        __legend_icon: undefined,
        __legend_visibility_container: undefined,
        __defaultHintString: "[series_title]",
        __drawing: false,
        __padding: {
            x_min: 0,
            x_max: 0,
            y_min: 0,
            y_max: 0
        },
        __doFree: function() {},
        __doDraw: function() {},
        __doUnselectSeries: function() {},
        __doSetDataHandler: function(handler, reload) {},
        __doGetHintString: null,
        __getHintString: function(point) {
            var result = (this.hint_string == undefined) ? this.__defaultHintString: this.hint_string;
            if (this.__doGetHintString != undefined) {
                result = this.__doGetHintString(point)
            }
            if (this.onShowHint != undefined) {
                result = this.onShowHint(point, this, this.__getChart(), result)
            }
            return result
        },
        __doOnDataAvailable: function() {},
        __dataAvailable: function(data) {
            if (this.__doOnDataAvailable) {
                this.__doOnDataAvailable(data)
            }
            if (this.autosort && this.__doAutoSort != undefined) {
                this.__doAutoSort()
            }
            this.__resetExtremes();
            var chart = this.__getChart();
            chart.__calculateExtremes(true);
            if (this.__getHasData() && this.onAfterDataAvailable) {
                if (this.onAfterDataAvailable(chart, this) == false) {
                    return
                }
            }
            if (chart.__draw_series_on_load) {
                chart.__draw(true)
            }
        },
        __resetExtremes: function() {
            if (this.__doResetExtremes != undefined) {
                this.__doResetExtremes()
            }
            if (this.__doCalculateExtremes != undefined) {
                this.__doCalculateExtremes()
            }
        },
        __getUniqueIndex: function() {
            if (this.__uniqueIndex == 0) {
                this.__uniqueIndex = EJSC.__getUniqueSeriesIndex()
            }
            return this.__uniqueIndex
        },
        __free: function() {
            this.__legendRemove();
            if (this.__doFree != undefined) {
                this.__doFree()
            }
        },
        __legendRemove: function() {
            if (this.__legend != undefined) {
                var e, i;
                for (i = 0; i < EJSC.__events.length; i++) {
                    e = EJSC.__events[i];
                    if (e != null) {
                        if (e[4] == this) {
                            EJSC.utility.__detachEvent(e[0], e[1], e[2], e[3]);
                            delete e;
                            EJSC.__events[i] = null
                        }
                    }
                }
                this.__legend.parentNode.removeChild(this.__legend);
                this.__legend_visible = null;
                this.__legend_hover = null;
                this.__legend_caption = null;
                this.__legend_icon = null;
                this.__legend_icon_container = null;
                this.__legend_visibility_container = null;
                this.__legend.innerHTML = "";
                this.__legend = null
            }
        },
        __doGetLegendIcon: undefined,
        __legendCreate: function() {
            if (this.__legend == undefined) {
                var ui = this.__getUniqueIndex();
                var self = this;
                if (this.__legend_icon == undefined) {
                    if (this.__doGetLegendIcon != undefined) {
                        this.__legend_icon = this.__doGetLegendIcon()
                    } else {
                        this.__legend_icon = "undefined"
                    }
                }
                this.__legend = EJSC.utility.__createDOMArray(["div", {
                    className: "ejsc-legend-series" + (this.legendIsVisible ? "": " ejsc-hidden")
                },
                ["div", {
                    className: "ejsc-legend-series-div ejsc-legend-series-out",
                    id: ui,
                    __ref: self,
                    __refVar: "__legend_hover",
                    __events: {
                        mouseover: function() {
                            self.__legend_hover.className = self.__legend_hover.className.replace(/out/, "over")
                        },
                        mouseout: function() {
                            self.__legend_hover.className = self.__legend_hover.className.replace(/over/, "out")
                        }
                    }
                },
                ["div", {
                    className: 'ejsc-legend-series-caption',
                    innerHTML: this.title,
                    title: this.title,
                    __ref: self,
                    __refVar: "__legend_caption"
                }], ["div", {
                    className: "ejsc-legend-series-icon",
                    __ref: self,
                    __refVar: "__legend_icon_container"
                },
                ["img", {
                    src: this.__getChart().image_path + "blank.gif",
                    className: this.__legend_icon,
                    __ref: self,
                    __refVar: "__legend_icon"
                }]], ["div", {
                    className: ("ejsc-legend-series-visibility") + (this.__owner.allow_interactivity == true ? "": " ejsc-hidden"),
                    __ref: self,
                    __refVar: "__legend_visibility_container"
                },
                ["div", {
                    className: (this.visible ? "ejsc-legend-series-on": "ejsc-legend-series-off"),
                    __ref: self,
                    __refVar: "__legend_visible",
                    __events: {
                        click: function() {
                            self.__changeVisibility()
                        }
                    }
                }]]]])
            }
            if (this.coloredLegend) {
                this.__legend_caption.style.color = this.__getColor().hex
            }
        },
        __doSelectNextSeries: undefined,
        __selectNextSeries: function(point) {
            if (this.__doSelectNextSeries != undefined) {
                return this.__doSelectNextSeries(point)
            } else {
                return true
            }
        },
        __doSelectPreviousSeries: undefined,
        __selectPreviousSeries: function(point) {
            if (this.__doSelectPreviousSeries != undefined) {
                return this.__doSelectPreviousSeries(point)
            } else {
                return true
            }
        },
        __getColor: function() {
            if (this.__color == undefined) {
                this.__color = EJSC.utility.__getColor(this.color)
            }
            return this.__color
        },
        __legendInsert: function() {
            if (this.__getChart() != null && this.__legend != undefined && this.__legend.inserted == undefined) {
                this.__getChart().__el_legend_series.appendChild(this.__legend);
                this.__legend.inserted = true
            }
        },
        __changeVisibility: function() {
            if (this.__doBeforeVisibilityChange && !this.__doBeforeVisibilityChange()) {
                return
            }
            if (this.onBeforeVisibilityChange && this.onBeforeVisibilityChange(this, this.__getChart()) == false) {
                return
            }
            if (this.__legend_visible.className == "ejsc-legend-series-on") {
                if (this.__getChart().__hint_is_sticky == true && this.__getChart().selected_point.__owner == this) this.__getChart().__unselectPoint();
                this.__legend_visible.className = "ejsc-legend-series-off";
                this.visible = false
            } else {
                this.__legend_visible.className = "ejsc-legend-series-on";
                this.visible = true;
                if (!this.__getHasData()) {
                    this.reload()
                }
            }
            if (this.__doAfterVisibilityChange) {
                this.__doAfterVisibilityChange()
            }
            if (this.onAfterVisibilityChange && this.onAfterVisibilityChange(this, this.__getChart(), this.visible) == false) {
                return
            }
            this.__getChart().__draw(true)
        },
        __changeLegendVisibility: function(visibility) {
            this.legendIsVisible = visibility;
            if (this.legendIsVisible) {
                this.__legend.className = "ejsc-legend-series"
            } else {
                this.__legend.className = "ejsc-legend-series ejsc-hidden"
            }
        },
        __doFindClosestPoint: undefined,
        __findClosestPoint: function(mouse, use_proximity) {
            if (!this.visible || !this.__getHasData()) {
                return null
            }
            if (this.__doFindClosestPoint != undefined) {
                return this.__doFindClosestPoint(mouse, (use_proximity == undefined ? true: use_proximity))
            } else {
                return null
            }
        },
        __doSelectPoint: undefined,
        __selectPoint: function(point, sticky) {
            if (!this.visible || !this.__getHasData()) {
                return false
            }
            if (this.__doSelectPoint != undefined) {
                return this.__doSelectPoint(point, sticky)
            } else {
                return null
            }
        },
        __doSelectNext: undefined,
        __selectNext: function(point) {
            if (!this.visible || !this.__getHasData()) {
                return false
            }
            if (this.__doSelectNext != undefined) {
                return this.__doSelectNext(point)
            } else {
                return null
            }
        },
        __doSelectPrevious: undefined,
        __selectPrevious: function(point) {
            if (!this.visible || !this.__getHasData()) {
                return false
            }
            if (this.__doSelectPrevious != undefined) {
                return this.__doSelectPrevious(point)
            } else {
                return null
            }
        },
        __doGetYRange: undefined,
        __getYRange: function(screenMinX, screenMaxX) {
            if (!this.visible || !this.__getHasData()) {
                return false
            }
            if (this.__doGetYRange != undefined) {
                return this.__doGetYRange(screenMinX, screenMaxX)
            } else {
                return null
            }
        },
        __doGetXRange: undefined,
        __getXRange: function(screenMinY, screenMaxY) {
            if (!this.visible || !this.__getHasData()) {
                return false
            }
            if (this.__doGetXRange != undefined) {
                return this.__doGetXRange(screenMinY, screenMaxY)
            } else {
                return null
            }
        },
        __doPoint2Px: undefined,
        __point2px: function(point) {
            if (this.__doPoint2Px != undefined) {
                return this.__doPoint2Px(point)
            } else {
                return null
            }
        },
        __getPadding: function(axis, side) {
            if (this.padding[axis + "_axis_" + side] == undefined) {
                return this.__padding[axis + "_" + side]
            } else {
                return this.padding[axis + "_axis_" + side]
            }
        },
        __getHasData: function() {
            return this.__hasData
        },
        autosort: true,
        title: "",
        x_axis_formatter: undefined,
        y_axis_formatter: undefined,
        coloredLegend: true,
        color: undefined,
        opacity: 50,
        visible: true,
        lineWidth: 1,
        lineOpacity: 100,
        legendIsVisible: true,
        hint_string: undefined,
        x_axis: "bottom",
        y_axis: "left",
        delayLoad: true,
        padding: {
            x_axis_min: undefined,
            x_axis_max: undefined,
            y_axis_min: undefined,
            y_axis_max: undefined
        },
        getPadding: function() {
            return {
                x_axis_min: this.__getPadding("x", "min"),
                x_axis_max: this.__getPadding("x", "max"),
                y_axis_min: this.__getPadding("y", "min"),
                y_axis_max: this.__getPadding("y", "max")
            }
        },
        setPadding: function(padding, redraw) {
            this.padding = padding;
            this.__getChart().__calculateExtremes(true);
            if (redraw == undefined || redraw == true) {
                this.__getChart().__draw(true)
            }
        },
        show: function() {
            if (!this.visible) {
                this.__changeVisibility()
            }
        },
        hide: function() {
            if (this.visible) {
                this.__changeVisibility()
            }
        },
        getVisibility: function() {
            return this.visible
        },
        reload: function() {
            if (this.__getChart().__hint_is_sticky == true && this.__getChart().selected_point.__owner == this) this.__getChart().__unselectPoint();
            if (this.__doReload) {
                this.__doReload()
            }
        },
        setDataHandler: function(handler, reload) {
            if (this.__doSetDataHandler) {
                this.__doSetDataHandler(handler, reload)
            }
        },
        getDataHandler: function() {
            if (this.__dataHandler == undefined) {
                return null
            } else {
                return this.__dataHandler
            }
        },
        setColor: function(color) {
            this.color = color;
            this.__color = EJSC.utility.__getColor(this.color);
            if (this.coloredLegend) {
                this.__legend_caption.style.color = this.__color.hex
            } else {
                this.__legend_caption.style.color = ""
            }
            this.__getChart().__draw(true)
        },
        setColoredLegend: function(coloredLegend) {
            this.coloredLegend = coloredLegend;
            if (this.coloredLegend) {
                this.__legend_caption.style.color = this.__getColor().hex
            } else {
                this.__legend_caption.style.color = ""
            }
        },
        setOpacity: function(opacity) {
            this.opacity = opacity;
            this.__getChart().__draw(true)
        },
        setLineOpacity: function(opacity) {
            this.lineOpacity = opacity;
            this.__getChart().__draw(true)
        },
        setLineWidth: function(width) {
            this.lineWidth = width;
            this.__getChart().__draw(true)
        },
        showLegend: function() {
            this.__changeLegendVisibility(true)
        },
        hideLegend: function() {
            this.__changeLegendVisibility(false)
        },
        setTitle: function(title) {
            this.title = title;
            this.__legend_caption.innerHTML = this.title;
            this.__legend_caption.title = this.title
        },
        __doFindClosestByPoint: undefined,
        findClosestByPoint: function(point) {
            if (this.__doFindClosestByPoint != undefined) {
                return this.__doFindClosestByPoint(point)
            } else {
                return null
            }
        },
        __doFindClosestByPixel: undefined,
        findClosestByPixel: function(point) {
            if (this.__doFindClosestByPixel != undefined) {
                return this.__doFindClosestByPixel(point)
            } else {
                return null
            }
        },
        onBeforeVisibilityChange: undefined,
        onAfterVisibilityChange: undefined,
        onAfterDataAvailable: undefined,
        onShowHint: undefined,
        __doBeforeVisibilityChange: null,
        __doAfterVisibilityChange: null,
        __getOwner: function() {
            return this.__owner
        },
        __getChart: function() {
            return this.__owner
        },
        __getDrawArea: function() {
            return this.__getChart().__getDrawArea()
        }
    },
    __Axis: {
        __owner: undefined,
        __orientation: undefined,
        __side: undefined,
        __min_extreme: undefined,
        __max_extreme: undefined,
        __current_min: undefined,
        __current_max: undefined,
        __forced_min_extreme: undefined,
        __forced_max_extreme: undefined,
        __scale: undefined,
        __increment: undefined,
        __series: undefined,
        __ticks: undefined,
        __written: false,
        __drawing: false,
        __el: undefined,
        __el_caption: undefined,
        __el_labels: undefined,
        __el_crosshair: undefined,
        __el_cursor_position: undefined,
        __el_cursor_position_marker: undefined,
        __el_cursor_position_label: undefined,
        __text_values: undefined,
        __force_visible: false,
        __init: function(owner, orientation, side) {
            this.__owner = owner;
            this.__orientation = orientation;
            this.__side = side;
            this.__padding = {
                min: 0,
                max: 0
            };
            this.__series = [];
            this.__ticks = [];
            this.__text_values = new EJSC.__TextLabels();
            this.border = {
                thickness: 1,
                color: undefined,
                opacity: 100,
                show: undefined
            };
            this.major_ticks = {
                thickness: 1,
                size: 4,
                color: undefined,
                opacity: 100,
                show: true,
                count: undefined,
                offset: 0,
                min_interval: undefined,
                max_interval: undefined
            };
            this.minor_ticks = {
                thickness: 1,
                size: 4,
                color: "#000",
                opacity: 20,
                show: false,
                count: 7,
                offset: 0
            };
            this.grid = {
                thickness: 1,
                color: "rgb(230,230,230)",
                opacity: 100,
                show: true
            };
            this.zero_plane = {
                show: false,
                color: "#000",
                opacity: 100,
                thickness: 1,
                coordinate: 0
            };
            this.background = {
                color: "#fff",
                opacity: 0,
                includeTitle: false
            };
            this.crosshair = {
                show: false,
                color: "#F00"
            };
            this.cursor_position = {
                show: false,
                color: "#F00",
                textColor: "#FFF",
                formatter: undefined,
                caption: undefined,
                className: undefined
            };
            this.padding = undefined;
            this.formatter = new EJSC.NumberFormatter({
                variable_decimals: 8
            });
            this.__copyOptions(this.__options.__chart_options);
            this.__copyOptions(this.__options);
            if (this.min_extreme != undefined) {
                this.__forced_min_extreme = this.min_extreme
            }
            if (this.max_extreme != undefined) {
                this.__forced_max_extreme = this.max_extreme
            }
            switch (this.__orientation) {
            case "h":
                if (this.__side.match(/^(top|bottom)$/) == null) {
                    console.log("EJSChart: Invalid axis orientation/side combination: " + this.__orientation + "/" + this.__side)
                } else {
                    if (this.size == undefined) this.size = 20
                }
                break;
            case "v":
                if (this.__side.match(/^(left|right)$/) == null) {
                    console.log("EJSChart: Invalid axis orientation/side combination: " + this.__orientation + "/" + this.__side)
                } else {
                    if (this.size == undefined) this.size = 50
                }
                break;
            default:
                console.log("EJSChart: Invalid axis orientation: " + this.__orientation)
            }
        },
        __hasManualExtremes: function() {
            return (this.__forced_min_extreme != undefined && this.__forced_max_extreme != undefined)
        },
        __getPhysicalSize: function() {
            return parseInt(this.size) + 20
        },
        __getCaption: function() {
            function getTransformProperty(element) {
                var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform'];
                var p;
                while (p = properties.shift()) {
                    if (typeof element.style[p] != 'undefined') return p
                }
                return false
            };
            if (this.caption == undefined) {
                this.caption = "Axis Caption"
            }
            if (this.__orientation == "h" || EJSC.__isIE || getTransformProperty(document.body)) {
                return '<span>' + this.caption + '</span>'
            } else {
                return '<span>' + this.caption.split("").join("<br/>") + '</span>'
            }
        },
        __canDraw: function() {
            return ((this.visible == true && this.__series.length > 0) || (this.__force_visible == true && this.__hasManualExtremes()))
        },
        __doDraw: undefined,
        __draw: function(ctx) {
            if (this.__owner == undefined) {
                return false
            }
            if (!this.__written) {
                this.__write();
                this.__written = true
            }
            if (this.__scale == undefined || isNaN(this.__scale)) {
                this.__calculateScale(true, true)
            }
            if (this.__doDraw != undefined && this.__drawing == false) {
                try {
                    this.__drawing = true;
                    var c, o, it, da, dr;
                    c = this.background.color;
                    o = this.background.opacity;
                    it = this.background.includeTitle;
                    if (o > 0 && this.__canDraw()) {
                        da = this.__owner.__draw_area;
                        dr = {
                            left: (this.__orientation == "h" ? da.left: (this.__side == "left" ? (it ? da.left - this.__getPhysicalSize() : da.left - this.size) : da.right)),
                            top: (this.__orientation == "v" ? da.top: (this.__side == "top" ? (it ? da.top - this.__getPhysicalSize() : da.top - this.size) : da.bottom)),
                            right: (this.__orientation == "h" ? da.right: (this.__side == "left" ? da.left: (it ? da.right + this.__getPhysicalSize() : da.right + this.size))),
                            bottom: (this.__orientation == "v" ? da.bottom: (this.__side == "top" ? da.top: (it ? da.bottom + this.__getPhysicalSize() : da.bottom + this.size)))
                        };
                        ctx.lineWidth = 0;
                        ctx.fillStyle = EJSC.utility.__getColor(c, o / 100).rgba;
                        ctx.beginPath();
                        ctx.moveTo(dr.left, dr.top);
                        ctx.lineTo(dr.right, dr.top);
                        ctx.lineTo(dr.right, dr.bottom);
                        ctx.lineTo(dr.left, dr.bottom);
                        ctx.lineTo(dr.left, dr.top);
                        ctx.fill()
                    }
                    this.__doDraw(ctx)
                } catch(e) {} finally {
                    this.__drawing = false
                }
            }
        },
        __doDrawZeroPlane: undefined,
        __drawZeroPlane: function(ctx) {
            if (this.__owner == undefined) {
                return false
            }
            if (this.__owner.__draw_area == undefined) {
                return false
            }
            if (this.zero_plane.show == false) {
                return false
            }
            if (!this.__written) {
                this.__write();
                this.__written = true
            }
            if (this.__doDrawZeroPlane != undefined && this.__drawing == false) {
                if (!this.__canDraw()) {
                    return
                }
                try {
                    this.__drawing = true;
                    this.__doDrawZeroPlane(ctx)
                } catch(e) {} finally {
                    this.__drawing = false
                }
            } else {
                var coord = this.__getZeroPlaneCoordinate();
                var area = this.__owner.__draw_area;
                if (coord >= this.__current_min && coord <= this.__current_max) {
                    ctx.lineWidth = this.zero_plane.thickness;
                    ctx.strokeStyle = EJSC.utility.__getColor(this.zero_plane.color, this.zero_plane.opacity / 100).rgba;
                    ctx.beginPath();
                    if (this.__orientation == "v") {
                        ctx.moveTo(area.left, this.__pt2px(coord));
                        ctx.lineTo(area.right, this.__pt2px(coord))
                    } else {
                        ctx.moveTo(this.__pt2px(coord), area.top);
                        ctx.lineTo(this.__pt2px(coord), area.bottom)
                    }
                    ctx.stroke()
                }
            }
        },
        __doGetZeroPlaneCoordinate: undefined,
        __getZeroPlaneCoordinate: function() {
            if (this.__doGetZeroPlaneCoordinate != undefined) {
                return this.__doGetZeroPlaneCoordinate()
            } else {
                return (this.zero_plane.coordinate == undefined) ? 0 : this.zero_plane.coordinate
            }
        },
        __doWrite: undefined,
        __write: function() {
            if (this.__doWrite != undefined) {
                if (this.__doWrite() == false) return false
            }
            var self = this;
            this.__el = EJSC.utility.__createDOMArray(["span", {
                className: "ejsc-" + this.__orientation + "-axis-labels ejsc-" + this.__side + "-axis-labels ejsc-hidden",
                __ref: self,
                __refVar: "__el"
            },
            ["span", {
                className: "ejsc-" + this.__orientation + "-axis-caption ejsc-" + this.__side + "-axis-caption" + (this.caption_class != undefined ? " " + this.caption_class: ""),
                innerHTML: this.__getCaption(),
                __ref: self,
                __refVar: "__el_caption",
                __styles: {
                    filter: (EJSC.__isIE ? (this.__orientation == "v" ? (this.__side == "left" ? "flipV flipH": "flipV flipV") : "") : ""),
                    writingMode: (EJSC.__isIE ? (this.__orientation == "v" ? 'tb-rl': '') : '')
                }
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-axis-labels",
                __ref: self,
                __refVar: "__el_labels"
            },
            ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }], ["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }]], ["div", {
                className: "ejsc-cursor-position ejsc-cursor-position-" + this.__orientation + " ejsc-hidden",
                __ref: self,
                __refVar: "__el_cursor_position"
            },
            ["div", {
                className: "ejsc-cursor-position-marker ejsc-cursor-position-marker-" + this.__side,
                __ref: self,
                __refVar: "__el_cursor_position_marker",
                __styles: {
                    backgroundColor: EJSC.utility.__getColor(this.cursor_position.color).hex
                }
            }], ["span", {
                className: "ejsc-cursor-position-label ejsc-cursor-position-label-" + this.__side + (this.cursor_position.className != undefined ? " " + this.cursor_position.className: ""),
                __ref: self,
                __refVar: "__el_cursor_position_label",
                __styles: {
                    backgroundColor: EJSC.utility.__getColor(this.cursor_position.color).hex,
                    color: EJSC.utility.__getColor(this.cursor_position.textColor).hex
                }
            }]]]);
            this.__owner.__el_labels.appendChild(this.__el);
            this.__owner.__el_series_canvas_container.appendChild(EJSC.utility.__createDOMArray(["div", {
                className: "ejsc-" + this.__orientation + "-crosshair",
                __ref: self,
                __refVar: "__el_crosshair",
                __styles: {
                    backgroundColor: EJSC.utility.__getColor(this.crosshair.color).hex
                }
            }]))
        },
        __free: function() {
            this.__el_crosshair = null;
            this.__el_cursor_position_label = null;
            this.__el_cursor_position_marker = null;
            this.__el_cursor_position = null;
            this.__el_labels = null;
            this.__el_caption = null;
            this.__el = null;
            var e, i;
            for (i = 0; i < EJSC.__events.length; i++) {
                e = EJSC.__events[i];
                if (e != null) {
                    if (e[4] == this) {
                        EJSC.utility.__detachEvent(e[0], e[1], e[2], e[3]);
                        delete e;
                        EJSC.__events[i] = null
                    }
                }
            }
        },
        __adjustLabelContainer_v: function(area) {
            if (this.__el == null) {
                return
            }
            this.__el.style.top = area.top + "px";
            this.__el.style[this.__side] = "0px";
            this.__el.style.width = this.__getPhysicalSize() + "px";
            this.__el.style.height = area.height + "px";
            this.__el.style.display = (this.visible ? "block": "none")
        },
        __adjustLabelContainer_h: function(area) {
            if (this.__el == null) {
                return
            }
            if (this.__side == "top") {
                this.__el.style.top = area.top - this.__getPhysicalSize() + "px"
            } else {
                this.__el.style.top = area.bottom + "px"
            }
            this.__el.style.left = area.left + "px";
            this.__el.style.width = area.width + "px";
            this.__el.style.height = this.__getPhysicalSize() + "px";
            this.__el.style.display = (this.visible ? "block": "none")
        },
        __adjustCaptionPosition_v: function(area) {
            this.__el_caption.style[this.__side] = "0px";
            var w = this.__el_caption.firstChild.offsetWidth;
            var h = this.__el_caption.firstChild.offsetHeight;
            var s = EJSC.__isIE ? h: w - 16;
            if (EJSC.__isIE) this.__el_caption.style.top = m_FLOOR((area.height - s) / 2) + "px";
            else this.__el_caption.style[this.__side] = m_FLOOR(( - s) / 2) + "px"
        },
        __adjustCaptionPosition_h: function(area) {
            this.__el_caption.style.left = m_FLOOR((area.width - this.__el_caption.offsetWidth) / 2) + "px";
            this.__el_caption.style[this.__side] = "0px"
        },
        __drawBorder_v: function(area, ctx) {
            if (this.border.show == true || (this.visible == true && this.border.show == undefined)) {
                ctx.beginPath();
                ctx.lineWidth = this.border.thickness;
                ctx.strokeStyle = EJSC.utility.__getColor((this.border.color == undefined ? this.color: this.border.color), this.border.opacity / 100).rgba;
                ctx.moveTo(area[this.__side], area.top);
                ctx.lineTo(area[this.__side], area.top + area.height);
                ctx.stroke()
            }
        },
        __drawBorder_h: function(area, ctx) {
            if (this.border.show == true || (this.visible == true && this.border.show == undefined)) {
                ctx.beginPath();
                ctx.lineWidth = this.border.thickness;
                ctx.strokeStyle = EJSC.utility.__getColor((this.border.color == undefined ? this.color: this.border.color), this.border.opacity / 100).rgba;
                ctx.moveTo(area.left, area[this.__side]);
                ctx.lineTo(area.left + area.width, area[this.__side]);
                ctx.stroke()
            }
        },
        __doGetRound: undefined,
        __getLabel: function(value, round, formatter) {
            if (round == undefined && this.__doGetRound != undefined) {
                round = this.__doGetRound(value)
            }
            if (this.__text_values.__count() > 0) {
                return this.__text_values.__get(value)
            } else if (formatter != undefined) {
                return formatter.format(value, round)
            } else {
                return this.formatter.format(value, round)
            }
        },
        __doAddSeries: undefined,
        __addSeries: function(series) {
            if (this.__doAddSeries != undefined) {
                if (this.__doAddSeries(series) == false) {
                    return false
                }
            }
            this.__series.push(series)
        },
        __doRemoveSeries: undefined,
        __removeSeries: function(series) {
            if (this.__doRemoveSeries != undefined) {
                if (this.__doRemoveSeries(series) == false) {
                    return false
                }
            }
            if (this.__text_values && series.__points != undefined) {
                for (i = 0; i < series.__points.length; i++) {
                    if (this.__orientation == "h" && series.__points[i].__x_label != undefined) {
                        this.__text_values.__remove(series.__points[i].__x_label.__label)
                    } else if (series.__points[i].__y_label != undefined) {
                        this.__text_values.__remove(series.__points[i].__y_label.__label)
                    }
                }
            }
            for (var i = 0; i < this.__series.length; i++) {
                if (this.__series[i] == series) {
                    this.__series.splice(i, 1)
                }
            }
            this.__calculateExtremes(true)
        },
        __doCalculateExtremes: undefined,
        __calculateExtremes: function(reset) {
            if (this.__owner == undefined) {
                return false
            }
            if (this.__doCalculateExtremes != undefined) {
                if (this.__doCalculateExtremes(reset) == false) {
                    return false
                }
            }
            if (reset) {
                this.__min_extreme = undefined;
                this.__max_extreme = undefined;
                this.__current_min = undefined;
                this.__current_max = undefined
            }
            var min = isNaN(this.__min_extreme) ? undefined: this.__min_extreme;
            var max = isNaN(this.__max_extreme) ? undefined: this.__max_extreme;
            var i = 0;
            var series = this.__series;
            var padding = {
                min: 0,
                max: 0
            };
            for (; i < series.length; i++) {
                if (!series[i].__getHasData() || !series[i].visible) continue;
                if (this.__orientation == "h") {
                    if (min == undefined || series[i].__minX < min) min = series[i].__minX;
                    if (max == undefined || series[i].__maxX > max) max = series[i].__maxX;
                    if (series[i].__getPadding("x", "min") > padding.min) padding.min = series[i].__getPadding("x", "min");
                    if (series[i].__getPadding("x", "max") > padding.max) padding.max = series[i].__getPadding("x", "max")
                } else {
                    if (min == undefined || series[i].__minY < min) min = series[i].__minY;
                    if (max == undefined || series[i].__maxY > max) max = series[i].__maxY;
                    if (series[i].__getPadding("y", "min") > padding.min) padding.min = series[i].__getPadding("y", "min");
                    if (series[i].__getPadding("y", "max") > padding.max) padding.max = series[i].__getPadding("y", "max")
                }
            }
            if (min == undefined || max == undefined) {
                if (this.__hasManualExtremes()) {
                    min = this.__forced_min_extreme;
                    max = this.__forced_max_extreme
                } else {
                    return
                }
            }
            if (this.__text_values.__count() > 0) {
                if (min > 1) {
                    min = 1
                }
                if (max < (this.__text_values.__count())) {
                    max = this.__text_values.__count()
                }
            }
            if (min == max) {
                if (min == 0) {
                    min = -0.01;
                    max = 0.01
                } else {
                    min -= (m_ABS(min) * 0.01);
                    max += (m_ABS(max) * 0.01)
                }
            }
            this.__data_extremes = {
                min_extreme: min,
                max_extreme: max
            };
            this.__padding = {
                min: (this.padding == undefined || this.padding.min == undefined ? padding.min: this.padding.min),
                max: (this.padding == undefined || this.padding.max == undefined ? padding.max: this.padding.max)
            };
            if (this.__forced_min_extreme != undefined) min = this.__forced_min_extreme;
            if (this.__forced_max_extreme != undefined) max = this.__forced_max_extreme;
            if (this.__min_extreme != min || this.__max_extreme != max) {
                this.__min_extreme = min;
                this.__max_extreme = max;
                if (this.__current_min == undefined || isNaN(this.__current_min)) {
                    this.__current_min = min
                }
                if (this.__current_max == undefined || isNaN(this.__current_max)) {
                    this.__current_max = max
                }
                this.__calculateScale(true, true)
            }
        },
        __doCalculateScale: undefined,
        __calculateScale: function(calculatePadding, generateTicks) {
            if (this.__owner == undefined) {
                return false
            }
            if (this.__owner.__draw_area == undefined) {
                return false
            }
            if (this.__doCalculateScale != undefined) {
                if (this.__doCalculateScale(calculatePadding, generateTicks) == false) {
                    return false
                }
            }
            if (generateTicks == undefined || generateTicks == true) {
                this.__generateTicks()
            }
        },
        __doGetZoomBoxCoordinates: undefined,
        __getZoomBoxCoordinates: function() {
            var result = {
                min: null,
                max: null
            };
            if (this.__owner != undefined) {
                var zoombox = this.__owner.__el_zoombox;
                result.min = this.__px2pt(this.__orientation == "h" ? zoombox.offsetLeft: zoombox.offsetTop + zoombox.offsetHeight);
                result.max = this.__px2pt(this.__orientation == "h" ? zoombox.offsetLeft + zoombox.offsetWidth: zoombox.offsetTop)
            }
            return result
        },
        __doGenerateTicks: undefined,
        __generateTicks: function() {
            if (!this.__written) {
                this.__write();
                this.__written = true
            }
            if (this.__doGenerateTicks != undefined) {
                if (this.__doGenerateTicks() == false) {
                    return false
                }
            }
        },
        __doPt2Px: undefined,
        __pt2px: function(point, ignoreBounds) {
            if (this.__doPt2Px != undefined) {
                return this.__doPt2Px(point)
            }
        },
        __doPx2Pt: undefined,
        __px2pt: function(point, ignoreBounds) {
            if (this.__doPx2Pt != undefined) {
                return this.__doPx2Pt(point)
            }
        },
        __doShowCursorPosition: undefined,
        __showCursorPosition: function(point) {
            if (!this.__written || !this.visible) {
                return false
            }
            if (this.__owner.__draw_area == undefined) {
                return false
            }
            if (this.__doShowCursorPosition != undefined) {
                if (this.__doShowCursorPosition(point) == false) {
                    return false
                }
            }
            if (this.cursor_position.show && this.__owner.allow_interactivity) {
                if (this.onShowCursorPosition != undefined) {
                    if (this.onShowCursorPosition(this.__px2pt(point[(this.__orientation == "v" ? "y": "x")] + this.__owner.__draw_area[(this.__orientation == "v" ? "top": "left")]), this, this.__owner) == false) {
                        return false
                    }
                }
                var da = this.__owner.__draw_area;
                var value = this.__px2pt(this.__orientation == "h" ? point.x + da.left: point.y + da.top);
                if (isNaN(value)) {
                    return false
                }
                var label = this.__getLabel(value, (this.__doGetRound != undefined ? this.__doGetRound(value, 3) : undefined), this.cursor_position.formatter);
                if (this.cursor_position.caption != undefined) {
                    label = this.cursor_position.caption + " " + label
                }
                this.__el_cursor_position.style.display = "block";
                this.__el_cursor_position_label.innerHTML = label;
                if (this.__orientation == "h") {
                    this.__el_cursor_position_marker.style.left = point.x - 1 + "px";
                    this.__el_cursor_position_label.style.left = point.x - (m_ROUND(this.__el_cursor_position_label.offsetWidth / 2)) + "px"
                } else {
                    this.__el_cursor_position_marker.style.top = point.y - 1 + "px";
                    this.__el_cursor_position_label.style.top = point.y - (m_ROUND(this.__el_cursor_position_label.offsetHeight / 2)) + "px"
                }
            }
        },
        __doHideCursorPosition: undefined,
        __hideCursorPosition: function() {
            if (!this.__written) {
                return false
            }
            if (this.__doHideCursorPosition != undefined) {
                if (this.__doHideCursorPosition() == false) {
                    return false
                }
            }
            if (this.cursor_position.show && this.__owner.allow_interactivity) {
                if (this.onHideCursorPosition != undefined) {
                    if (this.onHideCursorPosition(this, this.__owner) == false) {
                        return false
                    }
                }
                this.__el_cursor_position.style.display = "none"
            }
        },
        __doShowCrosshair: undefined,
        __showCrosshair: function(point, fireEvent) {
            if (!this.__written) {
                return false
            }
            if (this.__doShowCrosshair != undefined) {
                if (this.__doShowCrosshair(point) == false) {
                    return false
                }
            }
            if (this.crosshair.show && this.__owner.allow_interactivity) {
                if (this.onShowCrosshair != undefined && (fireEvent == undefined || fireEvent == true)) {
                    if (this.onShowCrosshair(this.__px2pt(point[(this.__orientation == "v" ? "y": "x")] + this.__owner.__draw_area[(this.__orientation == "v" ? "top": "left")]), this, this.__owner) == false) {
                        return false
                    }
                }
                if (this.__orientation == "v") {
                    this.__el_crosshair.style.top = point.y + (EJSC.__isIE ? -1 : 1) + "px"
                } else {
                    this.__el_crosshair.style.left = point.x + (EJSC.__isIE ? -1 : 1) + "px"
                }
                this.__el_crosshair.style.display = "block"
            }
        },
        __doHideCrosshair: undefined,
        __hideCrosshair: function(fireEvent) {
            if (!this.__written) {
                return
            }
            if (this.__doHideCrosshair != undefined) {
                if (this.__doHideCrosshair() == false) {
                    return false
                }
            }
            if (this.crosshair.show) {
                if (this.onHideCrosshair != undefined && (fireEvent == undefined || fireEvent == true)) {
                    if (this.onHideCrosshair(this, this.__owner) == false) {
                        return false
                    }
                }
                this.__el_crosshair.style.display = "none"
            }
        },
        __doMouseDown: undefined,
        __mouseDown: function(point, right_click) {
            if (this.__doMouseDown != undefined) {
                if (this.__doMouseDown(point, right_click) == false) {
                    return false
                }
            }
        },
        __doMouseMove: undefined,
        __mouseMove: function(point) {
            if (this.__doMouseMove != undefined) {
                if (this.__doMouseMove(point) == false) {
                    return false
                }
            }
            if (this.crosshair.show) {
                this.__showCrosshair(point)
            }
            if (this.cursor_position.show) {
                this.__showCursorPosition(point)
            }
        },
        __doMouseUp: undefined,
        __mouseUp: function(point, right_click) {
            if (this.__doMouseUp != undefined) {
                if (this.__doMouseUp(point, right_click) == false) {
                    return false
                }
            }
        },
        __doMouseEnter: undefined,
        __mouseEnter: function(point) {
            if (this.__doMouseEnter != undefined) {
                if (this.__doMouseEnter(point) == false) {
                    return false
                }
            }
            if (this.crosshair.show) {
                this.__showCrosshair(point)
            }
            if (this.cursor_position.show) {
                this.__showCursorPosition(point)
            }
        },
        __doMouseLeave: undefined,
        __mouseLeave: function() {
            if (this.__doMouseLeave != undefined) {
                if (this.__doMouseLeave() == false) {
                    return false
                }
            }
            if (this.crosshair.show) {
                this.__hideCrosshair()
            }
            if (this.cursor_position.show) {
                this.__hideCursorPosition()
            }
        },
        __doMove: undefined,
        __move: function(start, end) {
            if (this.__series.length == 0 && !this.__hasManualExtremes) {
                return true
            }
            if (this.__doMove != undefined) {
                if (this.__doMove(start, end) == false) {
                    return false
                }
            }
        },
        __doZoom: undefined,
        __zoom: function(start, end) {
            var result = false;
            if (this.__series.length > 0 || this.__hasManualExtremes() && this.__doZoom != undefined) {
                result = this.__doZoom(start, end)
            }
            return result
        },
        __doResetZoom: undefined,
        __resetZoom: function() {
            if (this.__doResetZoom != undefined) {
                this.__doResetZoom()
            }
        },
        __getChart: function() {
            return this.__owner
        },
        __getHintCaption: function() {
            if (this.hint_caption == undefined) {
                return (this.caption == "" ? "": this.caption + ":")
            } else {
                return this.hint_caption
            }
        },
        color: "#ccc",
        caption: undefined,
        formatter: undefined,
        hint_caption: undefined,
        visible: true,
        size: undefined,
        caption_class: undefined,
        label_class: undefined,
        stagger_ticks: true,
        extremes_ticks: false,
        force_static_points: false,
        addBin: function(label, redraw) {
            var bin = this.__text_values.__add(label, true);
            if (bin.__usage == 1) {
                bin.__usage = 0
            }
            bin.__manual = true;
            if (redraw == undefined || redraw == true) {
                for (var i = 0; i < this.__series.length; i++) {
                    this.__series[i].__resetExtremes()
                }
                this.__owner.__draw(true)
            }
        },
        removeBin: function(label, redraw) {
            var bin = this.__text_values.__find(label);
            if (bin != null) {
                this.__text_values.__remove(label, true);
                if (redraw == undefined || redraw == true) {
                    for (var i = 0; i < this.__series.length; i++) {
                        this.__series[i].__resetExtremes()
                    }
                    this.__owner.__draw(true)
                }
            }
        },
        getExtremes: function() {
            return {
                min: (this.__forced_min_extreme != undefined ? this.__forced_min_extreme: this.__min_extreme),
                max: (this.__forced_max_extreme != undefined ? this.__forced_max_extreme: this.__max_extreme)
            }
        },
        setExtremes: function(min, max, redraw) {
            this.__forced_min_extreme = min;
            this.__forced_max_extreme = max;
            if (redraw == undefined || redraw == true) {
                this.__owner.__calculateExtremes(true)
            }
        },
        pointToPixel: function(point, ignoreBounds) {
            var outside = false;
            var p;
            if (this.__text_values.__count() > 0 && (typeof point == "string")) {
                point = this.__text_values.__find(point).__index
            }
            if (point > this.__current_max || point < this.__current_min) {
                if (ignoreBounds == undefined || ignoreBounds == false) {
                    return undefined
                } else {
                    outside = true
                }
            }
            p = this.__pt2px(point);
            p = this.__owner.__chartPt2ScreenPt({
                x: p,
                y: p
            });
            if (this.__orientation == "h") {
                if (ignoreBounds != undefined) {
                    return {
                        point: p.x,
                        outsideBounds: outside
                    }
                } else {
                    return p.x
                }
            } else {
                if (ignoreBounds != undefined) {
                    return {
                        point: p.y - this.__owner.__draw_area.top,
                        outsideBounds: outside
                    }
                } else {
                    return p.y - this.__owner.__draw_area.top
                }
            }
        },
        pixelToPoint: function(point) {
            point = this.__owner.__screenPt2ChartPt({
                x: point,
                y: point
            });
            if (this.__orientation == "h") {
                point = this.__px2pt(point.x + this.__owner.__draw_area.left);
                if (this.__text_values.__count() > 0) {
                    point = this.__text_values.__get(m_ROUND(point)).__label
                }
                return point
            } else {
                point = this.__px2pt(point.y + this.__owner.__draw_area.top);
                if (this.__text_values.__count() > 0) {
                    point = this.__text_values.__get(m_FLOOR(point))
                }
                return point
            }
        },
        setCaption: function(caption) {
            this.caption = caption;
            if (this.__el_caption == undefined) return false;
            this.__el_caption.innerHTML = this.__getCaption();
            if (this.__owner.__draw_area == undefined) {
                return false
            }
            this["__adjustCaptionPosition_" + this.__orientation](this.__owner.__draw_area)
        },
        showGrid: function(redraw) {
            this.grid.show = true;
            if (redraw == undefined || redraw == true) {
                this.__owner.__draw(true)
            }
        },
        hideGrid: function(redraw) {
            this.grid.show = false;
            if (redraw == undefined || redraw == true) {
                this.__owner.__draw(true)
            }
        },
        show: function(redraw) {
            if (!this.visible) {
                this.visible = true;
                this.__force_visible = true;
                if (redraw == undefined || redraw == true) {
                    this.__owner.__resize(true, true, true)
                }
            }
        },
        hide: function(redraw) {
            if (this.visible) {
                this.visible = false;
                this.__force_visible = false;
                if (redraw == undefined || redraw == true) {
                    this.__owner.__resize(true, true, true)
                }
            }
        },
        setCrosshair: function(visible, coordinate, fireEvent) {
            if (visible) {
                this.__showCrosshair({
                    y: this.__pt2px(coordinate) - this.__owner.__draw_area.top,
                    x: this.__pt2px(coordinate) - this.__owner.__draw_area.left
                },
                fireEvent)
            } else {
                this.__hideCrosshair(fireEvent)
            }
        },
        resetZoom: function(redraw) {
            this.__resetZoom();
            if (redraw == undefined || redraw == true) {
                this.__owner.__draw(true)
            }
        },
        getZoomBoxCoordinates: function() {
            return this.__getZoomBoxCoordinates()
        },
        getZoom: function() {
            return {
                min: this.__current_min,
                max: this.__current_max
            }
        },
        setZoom: function(min, max, redraw, reselectPoint) {
            this.__current_min = min;
            this.__current_max = max;
            this.__calculateScale(false);
            if (redraw == undefined || redraw == true) {
                var chart = this.__owner;
                window.setTimeout(function() {
                    chart.__draw(reselectPoint)
                },
                0)
            }
        },
        onNeedsTicks: undefined,
        onShowCrosshair: undefined,
        onHideCrosshair: undefined,
        onShowCursorPosition: undefined,
        onHideCursorPosition: undefined
    },
    __Point: {
        x: null,
        y: null,
        label: null,
        userdata: null
    },
    __DataHandler: {
        __autoclear: true,
        __owner: undefined,
        __loading: false,
        __loaded: false,
        __data: null,
        __dataAvailable: function() {
            if (this.onDataAvailable != null) {
                if (this.onDataAvailable(this.__data, this, this.__owner, this.__owner.__getChart()) == false) {
                    return
                }
            }
            this.__owner.__dataAvailable(this.__data);
            if (this.__autoclear == true) {
                this.__data = []
            }
        },
        loadData: function() {
            this.__loadData()
        },
        __doLoadData: null,
        __loadData: function() {
            if (this.__loading == true || this.__loaded == true) {
                return
            }
            if (this.__doLoadData != null) {
                var result = this.__doLoadData();
                if (result != null) {
                    this.__loaded = result
                }
            }
        },
        __showError: function(message) {
            try {
                this.__owner.__owner.__doShowMessage(message, "error")
            } catch(e) {}
        },
        __init: function(series, template) {
            this.__data = new Array();
            this.__owner = series;
            this.__template = template
        },
        onDataAvailable: null
    }
}).__init();
EJSC.Inheritable.__extendTo(EJSC.Chart);
var ___chart = EJSC.Chart.prototype;
___chart.getSeries = function() {
    return this.__series
};
___chart.__initializeAxes = function() {
    if (this.axis_bottom != undefined) {
        this.axis_bottom.__init(this, "h", "bottom")
    }
    if (this.axis_left != undefined) {
        this.axis_left.__init(this, "v", "left")
    }
    if (this.axis_top != undefined) {
        this.axis_top.__init(this, "h", "top")
    }
    if (this.axis_right != undefined) {
        this.axis_right.__init(this, "v", "right")
    }
};
___chart.__init = function(options) {
    function applyAxisOptions(axis, chart) {
        if (options["axis_" + axis] == undefined) {
            return options
        }
        if (options["axis_" + axis].__type != undefined) {
            chart["axis_" + axis] = options["axis_" + axis];
            if (chart["axis_" + axis].__options.__chart_options == undefined) {
                chart["axis_" + axis].__options.__chart_options = {}
            }
        } else {
            for (var i in options["axis_" + axis]) {
                chart["axis_" + axis].__options[i] = options["axis_" + axis][i]
            }
        }
        if (options["axis_" + axis].visible == true) {
            chart["axis_" + axis].__options.__force_visible = true
        }
        delete options["axis_" + axis]
    };
    if (options != undefined) {
        applyAxisOptions("left", this);
        applyAxisOptions("bottom", this);
        applyAxisOptions("right", this);
        applyAxisOptions("top", this);
        this.__copyOptions(options)
    }
    this.__initializeAxes();
    if (options != undefined) {
        if (options.axis_left && options.axis_left.visible == true) {
            this.axis_left.__force_visible = true
        }
        if (options.axis_bottom && options.axis_bottom.visible == true) {
            this.axis_bottom.__force_visible = true
        }
        if (options.axis_right && options.axis_right.visible == true) {
            this.axis_right.__force_visible = true
        }
        if (options.axis_top && options.axis_top.visible == true) {
            this.axis_top.__force_visible = true
        }
    }
    if (this.onBeforeBuild != undefined) {
        this.onBeforeBuild(this)
    }
    this.__write();
    this.__resize(false, true);
    this.__el_container.className = this.__el_container.className.replace(/ ejsc-invisible/, "");
    if (this.onAfterBuild != undefined) {
        this.onAfterBuild(this)
    }
    this.__addAdditionalParameters(this.__el_axes_canvas);
    this.__addAdditionalParameters(this.__el_series_canvas);
    this.__addAdditionalParameters(this.__el_hint_canvas);
    var self = this;
    window.setTimeout(function() {
        self.__draw(false)
    },
    1);
    if (this.auto_resize) {
        EJSC.__addChartResize(this)
    }
};
___chart.__addAdditionalParameters = function(el) {
    var ctx = el.getContext("2d");
    ctx.__el = el;
    ctx.clearText = function() {
        var el = this.__el.parentNode;
        var divs = el.getElementsByTagName('DIV');
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].className == 'ejsc-text-item') {
                el.removeChild(divs[i]);
                i--
            }
        }
    };
    this.fontSize = '11px';
    this.fontFamily = 'Verdana';
    this.fontWeight = 'normal';
    this.fontStyle = 'normal';
    this.fillStyle = '#000000';
    ctx.drawText = function(x1, y1, x2, y2, text, align) {
        var div = document.createElement('DIV');
        div.className = 'ejsc-text-item';
        div.style.position = 'absolute';
        div.style.fontSize = this.fontSize;
        div.style.fontFamily = this.fontFamily;
        div.style.fontWeight = this.fontWeight;
        div.style.color = this.fillStyle;
        div.style.top = ((y1) + "px");
        div.style.left = ((x1) + "px");
        div.style.width = ((x2 - x1) + "px");
        div.style.overflow = 'hidden';
        div.style.textAlign = align;
        div.innerHTML = text;
        this.__el.parentNode.appendChild(div);
        return div
    }
};
___chart.__getDrawArea = function() {
    return this.__draw_area
};
___chart.remove = function() {
    EJSC.__deleteChart(this.__index, true);
    if (typeof window.CollectGarbage != "undefined") {
        window.CollectGarbage()
    }
};
___chart.__gestureExtremes = {
    left: [],
    bottom: [],
    right: [],
    top: []
};
___chart.__gestureTimeout = undefined;
___chart.__touchCoords = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
};
___chart.__gestering = false;
___chart.__lastTouch = 0;
___chart.__contextTimeout = undefined;
___chart.__doTouch = function(e) {
    var self = this;
    switch (e.type) {
    case 'touchstart':
        clearTimeout(this.__gestureTimeout);
        clearTimeout(this.__contextTimeout);
        this.__contextTimeout = setTimeout(function() {
            return self.__doRightClickCanvasCover(e.targetTouches[0])
        },
        1000);
        if (e.targetTouches == undefined) return;
        if (e.targetTouches.length < 1) return;
        if (this.__gestering !== false) this.redraw();
        this.__touchCoords.x1 = e.targetTouches[0].pageX;
        this.__touchCoords.y1 = e.targetTouches[0].pageY;
        this.__gestureExtremes.left = [this.axis_left.__current_min, this.axis_left.__current_max];
        this.__gestureExtremes.bottom = [this.axis_bottom.__current_min, this.axis_bottom.__current_max];
        this.__gestureExtremes.right = [this.axis_right.__current_min, this.axis_right.__current_max];
        this.__gestureExtremes.top = [this.axis_top.__current_min, this.axis_top.__current_max];
        if (e.targetTouches.length == 2) {
            clearTimeout(this.__contextTimeout);
            this.__touchCoords.x2 = e.targetTouches[1].pageX;
            this.__touchCoords.y2 = e.targetTouches[1].pageY
        }
        this.__doMouseDownCanvasCover(e.targetTouches[0]);
        break;
    case 'touchmove':
        if (e.targetTouches == undefined) return;
        clearTimeout(this.__contextTimeout);
        if (e.targetTouches.length == 2) {
            this.__gestering = e.targetTouches.length;
            clearTimeout(this.__gestureTimeout);
            var dif, dif2, mid, min, max, axis, x1, y1, x2, y2, difx, dify, dx1, dy1, dx2, dy2, scale;
            var v, s1, s2, e1, e2, min_s, max_s, min_e, max_e, scale, min, max, mid, dif;
            for (var i in this.__gestureExtremes) {
                axis = this['axis_' + i];
                v = axis.__orientation == 'v';
                if (!axis.visible) continue;
                s1 = this.__touchCoords[v ? 'y1': 'x1'];
                s2 = this.__touchCoords[v ? 'y2': 'x2'];
                e1 = e.targetTouches[0][v ? 'pageY': 'pageX'];
                e2 = e.targetTouches[1][v ? 'pageY': 'pageX'];
                min_s = s1 < s2 ? s1: s2;
                max_s = s1 < s2 ? s2: s1;
                min_e = e1 < e2 ? e1: e2;
                max_e = e1 < e2 ? e2: e1;
                min_d = min_s - min_e;
                max_d = max_s - max_e;
                scale = 1;
                try {
                    scale = ((max_s - min_s) / (max_s - min_s))
                } catch(e) {}
                if (isNaN(scale)) scale = 1;
                min = this.__gestureExtremes[i][0];
                max = this.__gestureExtremes[i][1];
                mid = (min + max) / 2;
                dif = max - mid;
                if (isNaN(dif)) continue;
                dif2 = dif / scale;
                min = mid - dif2;
                max = mid + dif2;
                if (min < axis.__min_extreme) min = axis.__min_extreme;
                if (max > axis.__max_extreme) max = axis.__max_extreme;
                axis.setZoom(min, max, false);
                if (v) {
                    min -= max_d * axis.__scale;
                    max -= min_d * axis.__scale
                } else {
                    min += min_d * axis.__scale;
                    max += max_d * axis.__scale
                }
                if (min < axis.__min_extreme) {
                    max = max + (axis.__min_extreme - min);
                    min = axis.__min_extreme
                }
                if (max > axis.__max_extreme) {
                    min = min + (axis.__max_extreme - max);
                    max = axis.__max_extreme
                }
                if (min < axis.__min_extreme) min = axis.__min_extreme;
                if (max > axis.__max_extreme) max = axis.__max_extreme;
                axis.setZoom(min, max, false)
            }
            var self = this;
            this.__gestureTimeout = setTimeout(function() {
                self.redraw()
            },
            50)
        } else if (e.targetTouches.length == 1 && (navigator.userAgent.toLowerCase()).search('android') !== -1) {
            this.__gestering = e.targetTouches.length;
            clearTimeout(this.__gestureTimeout);
            var dif, dif2, mid, min, max, axis, x1, y1, x2, y2, difx, dify, dx1, dy1, dx2, dy2, scale;
            var v, s1, e1, d, min, max;
            for (var i in this.__gestureExtremes) {
                axis = this['axis_' + i];
                v = axis.__orientation == 'v';
                if (!axis.visible) continue;
                s1 = this.__touchCoords[v ? 'y1': 'x1'];
                e1 = e.targetTouches[0][v ? 'pageY': 'pageX'];
                d = s1 - e1;
                min = this.__gestureExtremes[i][0];
                max = this.__gestureExtremes[i][1];
                var n = min,
                x = max;
                if (v) {
                    min -= d * axis.__scale;
                    max -= d * axis.__scale
                } else {
                    min += d * axis.__scale;
                    max += d * axis.__scale
                }
                if (min < axis.__min_extreme) {
                    max = max + (axis.__min_extreme - min);
                    min = axis.__min_extreme
                }
                if (max > axis.__max_extreme) {
                    min = min + (axis.__max_extreme - max);
                    max = axis.__max_extreme
                }
                if (min < axis.__min_extreme) min = axis.__min_extreme;
                if (max > axis.__max_extreme) max = axis.__max_extreme;
                axis.setZoom(min, max, false)
            }
            var self = this;
            this.__gestureTimeout = setTimeout(function() {
                self.redraw()
            },
            50)
        }
        break;
    case 'touchend':
        clearTimeout(this.__gestureTimeout);
        clearTimeout(this.__contextTimeout);
        if (this.__gestering > 0) {
            this.redraw()
        } else if (this.__gestering === false) {
            var evt = {};
            evt.button = 1;
            evt.x = evt.clientX = this.__touchCoords.x1;
            evt.y = evt.clientY = this.__touchCoords.y1;
            evt.target = e.target;
            this.__mouse_in_chart = true;
            this.proximity_snap *= 5;
            this.__doClickCanvasCover(evt);
            this.__doMouseUpCanvasCover(evt);
            this.proximity_snap *= 1 / 5;
            var touch = new Date().getTime();
            if (touch - this.__lastTouch > 0 && touch - this.__lastTouch <= 500) {
                if (this.selected_point == undefined) this.__doDblClickCanvasCover(e);
                else this.__unselectPoint(true)
            }
            this.__lastTouch = touch
        }
        this.__gestering = false;
        break
    }
};
___chart.__write = function() {
    if (this.__el == null) {
        return
    }
    var self = this;
    this.__el_container = EJSC.utility.__createDOMArray(["div", {
        className: "ejschart ejsc-invisible",
        unselectable: "on",
        tabIndex: 0,
        __ref: self,
        __events: {
            selectstart: doDragOrSelect,
            contextmenu: function(e) {
                self.__doRightClickCanvasCover(e);
                return cancelEvent(e)
            },
            dblclick: function(e) {
                self.__doDblClickCanvasCover(e)
            },
            click: function(e) {
                self.__doClickCanvasCover(e)
            },
            mousemove: function(e) {
                self.__doMouseMoveCanvasCover(e)
            },
            mousedown: function(e) {
                self.__doMouseDownCanvasCover(e);
                return cancelEvent(e)
            },
            mouseup: function(e) {
                self.__doMouseUpCanvasCover(e);
                if (!EJSC.__isIE) {
                    self.__el_key_grabber.focus()
                }
            },
            mouseout: function(e) {
                self.__doMouseOutCanvasCover(e)
            },
            keydown: function(e) {
                self.__doKeyDownCanvasCover(e);
                return false
            },
            mousewheel: function(e) {
                self.__doMouseWheelCanvasCover(e)
            },
            DOMMouseScroll: function(e) {
                self.__doMouseWheelCanvasCover(e)
            }
        },
        ontouchstart: function(e) {
            self.__doTouch(e);
            return cancelEvent(e)
        },
        ontouchmove: function(e) {
            self.__doTouch(e);
            return cancelEvent(e)
        },
        ontouchend: function(e) {
            self.__doTouch(e);
            return cancelEvent(e)
        }
    },
    ["div", {
        className: "ejsc-chart",
        __ref: self,
        __refVar: "__el_chart_container"
    },
    ["div", {
        className: "ejsc-canvas-container ejsc-axes-canvas-container",
        __ref: self,
        __refVar: "__el_axes_canvas_container"
    },
    ["canvas", {
        className: "ejsc-axes-canvas",
        __ref: self,
        __refVar: "__el_axes_canvas"
    }]], ["div", {
        className: "ejsc-canvas-container ejsc-series-canvas-container",
        __ref: self,
        __refVar: "__el_series_canvas_container"
    },
    ["div", {
        className: "ejsc-series-canvas-div",
        __ref: self,
        __refVar: "__el_series_canvas_div"
    },
    ["canvas", {
        className: "ejsc-series-canvas",
        __ref: self,
        __refVar: "__el_series_canvas"
    }]]], ["div", {
        className: "ejsc-titlebar" + (this.show_titlebar == true ? "": " ejsc-hidden"),
        __ref: self,
        __refVar: "__el_titlebar"
    },
    ["span", {
        className: "ejsc-titlebar-text",
        innerHTML: this.title,
        __ref: self,
        __refVar: "__el_titlebar_text"
    }]], ["div", {
        className: "ejsc-labels",
        __ref: self,
        __refVar: "__el_labels"
    }], ["div", {
        className: "ejsc-canvas-container ejsc-hint-canvas-container"
    },
    ["canvas", {
        className: "ejsc-hint-canvas",
        __ref: self,
        __refVar: "__el_hint_canvas"
    }]], ["div", {
        className: "ejsc-hint-labels",
        __ref: self,
        __refVar: "__el_hint_labels"
    }], ["div", {
        className: "ejsc-zoombox ejsc-invisible",
        __ref: self,
        __refVar: "__el_zoombox"
    }], ["span", {
        className: "ejsc-message ejsc-message-progress" + (this.show_messages == false ? " ejsc-hidden": ""),
        innerHTML: this.building_message,
        __ref: self,
        __refVar: "__el_message"
    }]], ["span", {
        className: "ejsc-hint",
        __ref: self,
        __refVar: "__el_hint"
    },
    ["span", {
        __ref: self,
        __refVar: "__el_hint_text"
    }]], ["div", {
        className: "ejsc-hint-pointer",
        __ref: self,
        __refVar: "__el_hint_pointer"
    },
    ["div", {
        className: "ejsc-hint-tl"
    }]], ["div", {
        className: "ejsc-legend-right" + (this.show_legend == true && this.legend_position == "right" ? "": " ejsc-hidden"),
        __ref: self,
        __refVar: "__el_legend_right"
    }], ["div", {
        className: "ejsc-legend-bottom" + (this.show_legend == true && this.legend_position == "bottom" ? "": " ejsc-hidden"),
        __ref: self,
        __refVar: "__el_legend_bottom"
    }], ["div", {
        className: "ejsc-legend ejsc-legend-" + (this.legend_state == "normal" ? "maximized": "minimized") + (this.show_legend == true && this.legend_position == "floating" ? "": " ejsc-hidden"),
        __ref: self,
        __refVar: "__el_legend"
    },
    ["div", {
        className: "ejsc-legend-caption",
        __ref: self,
        __events: {
            mousedown: function(e) {
                self.__doStartMoveLegend(e)
            },
            mouseup: function(e) {
                self.__doEndMoveLegend(e)
            },
            mousemove: function(e) {
                self.__doMoveLegend(e)
            }
        }
    },
    ["div", {
        className: "ejsc-legend-minimize",
        __ref: self,
        __events: {
            click: function() {
                self.__doMinimizeLegend()
            }
        }
    },
    ["div", {
        className: "ejsc-legend-minimize-mouseout",
        __ref: self,
        __refVar: "__el_legend_minimize",
        __events: {
            mouseover: function() {
                self.__el_legend_minimize.className = "ejsc-legend-minimize-mouseover"
            },
            mouseout: function() {
                self.__el_legend_minimize.className = "ejsc-legend-minimize-mouseout"
            }
        }
    }]], ["div", {
        className: "ejsc-legend-maximize",
        __ref: self,
        __events: {
            click: function() {
                self.__doMaximizeLegend()
            }
        }
    },
    ["div", {
        className: "ejsc-legend-maximize-mouseout",
        __ref: self,
        __refVar: "__el_legend_maximize",
        __events: {
            mouseover: function() {
                self.__el_legend_maximize.className = "ejsc-legend-maximize-mouseover"
            },
            mouseout: function() {
                self.__el_legend_maximize.className = "ejsc-legend-maximize-mouseout"
            }
        }
    }]], ["div", {
        className: "ejsc-legend-grabber"
    }], ["span", {
        className: "ejsc-legend-title",
        innerHTML: this.legend_title,
        __ref: self,
        __refVar: "__el_legend_title"
    }]], ["div", {
        className: "ejsc-legend-series-container",
        __ref: self,
        __refVar: "__el_legend_series",
        __events: {
            mousemove: function() {
                return false
            }
        }
    }], ["div", {
        className: "ejsc-legend-owner",
        __ref: self,
        __refVar: "__el_legend_owner"
    },
    ["div", {
        className: "ejsc-legend-owner-icon"
    }], ["span", {
        className: "ejsc-legend-owner-title",
        innerHTML: this.title,
        __ref: self,
        __refVar: "__el_legend_owner_title"
    }]]]]);
    this.__el_canvas_cover = this.__el_key_grabber = this.__el_container;
    if (EJSC.__isIE) {
        this.__el_axes_canvas = G_vmlCanvasManager.initElement(this.__el_axes_canvas, this);
        this.__el_series_canvas = G_vmlCanvasManager.initElement(this.__el_series_canvas, this);
        this.__el_hint_canvas = G_vmlCanvasManager.initElement(this.__el_hint_canvas, this)
    }
    this.__axes_context = this.__el_axes_canvas.getContext("2d");
    this.__axes_context.globalCompositeOperation = 'source-over';
    this.__series_context = this.__el_series_canvas.getContext("2d");
    this.__series_context.globalCompositeOperation = 'source-over';
    this.__hint_context = this.__el_hint_canvas.getContext("2d");
    this.__hint_context.globalCompositeOperation = 'source-over';
    this.__el.appendChild(this.__el_container);
    if ((navigator.userAgent.toLowerCase()).search('android') !== -1) {
        this.__el_container.appendChild(EJSC.utility.__createDOMArray(["div", {
            className: "ejsc-zoom-buttons"
        },
        ["button", {
            className: "zoom-in",
            ontouchend: function() {
                var e = {
                    wheelDelta: 1
                };
                self.__doMouseWheelCanvasCover(e);
                return cancelEvent(e)
            },
            onclick: function(e) {
                var e = {
                    wheelDelta: 1
                };
                self.__doMouseWheelCanvasCover(e);
                return cancelEvent(e)
            },
            ondblclick: function(e) {
                return cancelEvent(e)
            }
        }], ["button", {
            className: "zoom-out",
            ontouchend: function() {
                var e = {
                    wheelDelta: -1
                };
                self.__doMouseWheelCanvasCover(e);
                return cancelEvent(e)
            },
            onclick: function(e) {
                var e = {
                    wheelDelta: -1
                };
                self.__doMouseWheelCanvasCover(e);
                return cancelEvent(e)
            },
            ondblclick: function(e) {
                return cancelEvent(e)
            }
        }]]))
    }
};
___chart.__positionMessage = function() {
    var da = this.__draw_area;
    if (da == undefined) {
        return false
    }
    if (this.__el_message.className.match(/ejsc-invisible/) == null) {
        this.__el_message.style.left = da.left + m_FLOOR((da.width - this.__el_message.offsetWidth) / 2) + "px";
        this.__el_message.style.top = da.top + m_FLOOR((da.height - this.__el_message.offsetHeight) / 2) + "px"
    }
};
___chart.__doShowMessage = function(message, messageType) {
    if (this.show_messages == false) {
        return false
    }
    if (this.onShowMessage != undefined) {
        if (this.onShowMessage(message, messageType) == false) return false
    }
    var el = this.__el_message;
    if (el == null || el == undefined) {
        return
    }
    if (el.className.match(/error/) == null || messageType == "error" || this.allow_hide_error === true) {
        el.className = el.className.replace(/ ejsc-invisible/g, "");
        el.className = el.className.replace(/(progress|nodata|error|info)/, messageType);
        el.innerHTML = message;
        this.__positionMessage();
        if (this.__message_timeout != undefined) {
            window.clearTimeout(this.__message_timeout);
            this.__message_timeout = undefined
        }
        var self = this;
        var timeout = this.message_timeouts[messageType];
        this.__message_timeout = window.setTimeout(function() {
            self.__doHideMessage()
        },
        timeout)
    }
};
___chart.__doHideMessage = function() {
    this.__message_timeout = undefined;
    if (this.__el_message.className.match(/error/) == null || this.allow_hide_error === true) {
        this.__el_message.clasName = this.__el_message.className.replace(/ ejsc-invisible/g, "");
        this.__el_message.className += " ejsc-invisible"
    }
};
___chart.setLegendPosition = function(legend_position) {
    this.legend_position = legend_position;
    this.__resize(true, true, true)
};
___chart.__resize = function(redraw, force_recalc, update_scale) {
    if (this.__el == null) {
        return
    }
    function resizeCanvas(el, width, height) {
        el.width = width;
        el.height = height;
        el.style.width = width + "px";
        el.style.height = height + "px";
        el.setAttribute("width", width);
        el.setAttribute("height", height);
        if (EJSC.__isIE) el.fireEvent("onresize")
    }
    var c_width = this.__el.offsetWidth - EJSC.utility.__borderSize(this.__el, "left") - EJSC.utility.__borderSize(this.__el, "right");
    var c_height = this.__el.offsetHeight - EJSC.utility.__borderSize(this.__el, "top") - EJSC.utility.__borderSize(this.__el, "bottom");
    if (force_recalc == undefined || force_recalc == false) {
        if (c_width == this.__resize_width && c_height == this.__resize_height) {
            return false
        }
    }
    if (c_width <= 0 || c_height <= 0) {
        return false
    }
    this.__resize_width = c_width;
    this.__resize_height = c_height;
    var needs_redraw = false;
    if (this.__last_draw_width != this.__resize_width || this.__last_draw_height != this.__resize_height) {
        this.__last_draw_width = this.__resize_width;
        this.__last_draw_height = this.__resize_width;
        needs_redraw = true
    }
    if (this.show_legend == true) {
        if (this.legend_position == 'right') c_width -= this.legend_width + this.legend_padding;
        else if (this.legend_position == 'bottom') c_height -= this.legend_height + this.legend_padding
    }
    if (needs_redraw) {
        resizeCanvas(this.__el_chart_container, c_width, c_height);
        resizeCanvas(this.__el_axes_canvas, c_width, c_height);
        resizeCanvas(this.__el_series_canvas, c_width, c_height);
        resizeCanvas(this.__el_hint_canvas, c_width, c_height);
        resizeCanvas(this.__el_legend_right, this.legend_width - 2, c_height - 2);
        resizeCanvas(this.__el_legend_bottom, c_width - 2, this.legend_height - 2);
        if (this.show_legend) {
            switch (this.legend_position) {
            case 'floating':
                this.__el_legend.insertBefore(this.__el_legend_series, this.__el_legend_owner);
                break;
            case 'right':
                this.__el_legend_right.appendChild(this.__el_legend_series);
                break;
            case 'bottom':
                this.__el_legend_bottom.appendChild(this.__el_legend_series);
                break
            }
        }
        this.__el_legend.className = this.__el_legend.className.replace(/ ejsc-hidden/g, '') + (this.legend_position == 'floating' && this.show_legend ? '': ' ejsc-hidden');
        this.__el_legend_right.className = this.__el_legend_right.className.replace(/ ejsc-hidden/g, '') + (this.legend_position == 'right' && this.show_legend ? '': ' ejsc-hidden');
        this.__el_legend_bottom.className = this.__el_legend_bottom.className.replace(/ ejsc-hidden/g, '') + (this.legend_position == 'bottom' && this.show_legend ? '': ' ejsc-hidden')
    }
    var offsetTop, offsetLeft, offsetBottom, offsetRight;
    offsetTop = (this.show_titlebar == true ? this.__el_titlebar.offsetHeight: 0);
    offsetTop = (this.axis_top.visible == true && this.__hasXAxisSeries() ? this.axis_top.__getPhysicalSize() + offsetTop: offsetTop);
    offsetLeft = (this.axis_left.visible == true && this.__hasYAxisSeries() ? this.axis_left.__getPhysicalSize() : 0);
    offsetBottom = (this.axis_bottom.visible == true && this.__hasXAxisSeries() ? this.axis_bottom.__getPhysicalSize() : 0);
    offsetRight = (this.axis_right.visible == true && this.__hasYAxisSeries() ? this.axis_right.__getPhysicalSize() : 0);
    this.__draw_area = {
        left: offsetLeft,
        top: offsetTop,
        right: offsetLeft + c_width - offsetLeft - offsetRight,
        bottom: offsetTop + c_height - offsetBottom - offsetTop,
        width: c_width - offsetLeft - offsetRight,
        height: c_height - offsetBottom - offsetTop
    };
    if (needs_redraw) {
        this.__el_series_canvas_container.style.left = this.__draw_area.left + "px";
        this.__el_series_canvas_container.style.top = this.__draw_area.top + "px";
        this.__el_series_canvas_container.style.width = this.__draw_area.width + "px";
        this.__el_series_canvas_container.style.height = this.__draw_area.height + "px";
        this.__el_series_canvas_div.style.left = -(this.__draw_area.left) + "px";
        this.__el_series_canvas_div.style.top = -(this.__draw_area.top) + "px";
        this.__positionMessage();
        if (update_scale === true) {
            this.axis_bottom.__calculateScale(false, true);
            this.axis_left.__calculateScale(false, true);
            this.axis_top.__calculateScale(false, true);
            this.axis_right.__calculateScale(false, true)
        }
        if (redraw == undefined || redraw != false) {
            this.__draw(true)
        }
    }
};
___chart.__hasXAxisSeries = function() {
    var i = 0;
    var result = false;
    for (; i < this.__series.length; i++) {
        if (this.__series[i].__needsXAxis) {
            result = true;
            break
        }
    }
    return result
};
___chart.__hasYAxisSeries = function() {
    var i = 0;
    var result = false;
    for (; i < this.__series.length; i++) {
        if (this.__series[i].__needsYAxis) {
            result = true;
            break
        }
    }
    return result
};
___chart.__draw_axes = function(ctx, clearCanvas) {
    if (clearCanvas == undefined || clearCanvas == true) {
        ctx.clearRect(0, 0, this.__el_axes_canvas.offsetWidth, this.__el_axes_canvas.offsetHeight);
        ctx.clearText()
    }
    if (this.background.opacity > 0) {
        var da = this.__draw_area;
        ctx.lineWidth = 0;
        ctx.fillStyle = EJSC.utility.__getColor(this.background.color, this.background.opacity / 100).rgba;
        ctx.beginPath();
        ctx.moveTo(da.left, da.top);
        ctx.lineTo(da.right, da.top);
        ctx.lineTo(da.right, da.bottom);
        ctx.lineTo(da.left, da.bottom);
        ctx.lineTo(da.left, da.top);
        ctx.fill();
        if (this.background.includeTitle && this.show_titlebar) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(this.__el.offsetWidth, 0);
            ctx.lineTo(this.__el.offsetWidth, this.__el_titlebar.offsetHeight);
            ctx.lineTo(0, this.__el_titlebar.offsetHeight);
            ctx.lineTo(0, 0);
            ctx.fill()
        }
    }
    if (this.axis_left != undefined && (this.__hasYAxisSeries() || this.axis_left.__hasManualExtremes())) {
        this.axis_left.__draw(ctx)
    }
    if (this.axis_bottom != undefined && (this.__hasXAxisSeries() || this.axis_bottom.__hasManualExtremes())) {
        this.axis_bottom.__draw(ctx)
    }
    if (this.axis_top != undefined && (this.__hasXAxisSeries() || this.axis_top.__hasManualExtremes())) {
        this.axis_top.__draw(ctx)
    }
    if (this.axis_right != undefined && (this.__hasYAxisSeries() || this.axis_right.__hasManualExtremes())) {
        this.axis_right.__draw(ctx)
    }
};
___chart.__draw_series = function(ctx, clearCanvas) {
    if (clearCanvas == undefined || clearCanvas == true) {
        ctx.clearRect(0, 0, this.__el_series_canvas.offsetWidth, this.__el_series_canvas.offsetHeight);
        ctx.clearText()
    }
    if (ctx.beginUpdate) ctx.beginUpdate();
    if (this.onBeforeDrawSeries !== undefined) this.onBeforeDrawSeries(this, ctx);
    for (var i = 0; i < this.__series.length; i++) {
        this.__series[i].__doDraw(ctx)
    }
    if (this.onAfterDrawSeries !== undefined) this.onAfterDrawSeries(this, ctx);
    if (ctx.endUpdate) ctx.endUpdate()
};
___chart.__draw_zero_planes = function(ctx) {
    if (this.axis_left != undefined) {
        this.axis_left.__drawZeroPlane(ctx)
    }
    if (this.axis_bottom != undefined) {
        this.axis_bottom.__drawZeroPlane(ctx)
    }
    if (this.axis_top != undefined) {
        this.axis_top.__drawZeroPlane(ctx)
    }
    if (this.axis_right != undefined) {
        this.axis_right.__drawZeroPlane(ctx)
    }
};
___chart.__draw_cleanup = function(ctx, reselectPoint) {
    ctx.beginPath();
    ctx.moveTo( - 1, -1);
    ctx.lineTo(0, 0);
    ctx.stroke();
    if (this.selected_point != undefined && reselectPoint == true) {
        this.__selectPoint(this.selected_point, this.__hint_is_sticky)
    }
};
___chart.__draw = function(reselectPoint, showMessage) {
    if (EJSC.__ready == false && document.documentMode == 8) return;
    if (this.__canDraw === false) {
        return
    }
    if (this.__axes_context == null || this.__series_context == null) {
        return
    }
    if (this.__draw_area == undefined) {
        return false
    }
    if (this.onBeforeDraw != undefined) {
        if (this.onBeforeDraw(this) == false) {
            return false
        }
    }
    if (showMessage == undefined || showMessage == true) {
        this.__doShowMessage(this.drawing_message, "progress")
    }
    this.__draw_axes(this.__axes_context, true);
    var this_x;
    var this_y;
    if (this.__dr == undefined) {
        this.__dr = Math.round(Math.random() * 4)
    }
    if (this.__dr == 1) {
        this_x = this.__draw_area.left + 50;
        this_y = this.__draw_area.top + 50
    } else if (this.__dr == 2) {
        this_x = this.__draw_area.left + 50;
        this_y = (this.__draw_area.bottom - 50)
    } else if (this.__dr == 3) {
        this_x = (this.__draw_area.right - 50);
        this_y = (this.__draw_area.bottom - 50)
    } else {
        this_x = (this.__draw_area.right - 50);
        this_y = this.__draw_area.top + 50
    }
    this.__axes_context.lineWidth = 1;
    this.__axes_context.fillStyle = '#e7e7e7';
//    var ejscopy = ["M", "24", "4", "L", "24", "-4", "L", "21", "-5", "C", "21", "-5", "21", "-6", "21", "-7", "L", "23", "-9", "L", "19", "-15", "L", "16", "-15", "C", "16", "-15", "15", "-16", "15", "-16", "L", "15", "-19", "L", "9", "-23", "L", "7", "-21", "C", "6", "-21", "5", "-21", "5", "-21", "L", "4", "-24", "L", "4", "-24", "L", "-4", "-24", "L", "-5", "-21", "C", "-5", "-21", "-6", "-21", "-7", "-21", "L", "-9", "-23", "L", "-15", "-19", "L", "-15", "-16", "C", "-15", "-16", "-16", "-15", "-16", "-15", "L", "-19", "-15", "L", "-23", "-9", "L", "-21", "-7", "C", "-21", "-6", "-21", "-5", "-21", "-5", "L", "-24", "-4", "L", "-24", "4", "L", "-21", "5", "C", "-21", "5", "-21", "6", "-21", "7", "L", "-23", "9", "L", "-19", "15", "L", "-16", "15", "C", "-16", "15", "-15", "16", "-15", "16", "L", "-15", "19", "L", "-9", "23", "L", "-7", "21", "C", "-6", "21", "-5", "21", "-5", "21", "L", "-4", "24", "L", "-4", "24", "L", "4", "24", "L", "5", "21", "C", "5", "21", "6", "21", "7", "21", "L", "9", "23", "L", "15", "19", "L", "15", "16", "C", "15", "16", "16", "15", "16", "15", "L", "19", "15", "L", "23", "9", "L", "21", "7", "C", "21", "6", "21", "5", "21", "5", "L", "24", "4", "M", "0", "16", "C", "-9", "16", "-16", "9", "-16", "0", "C", "-16", "-9", "-9", "-16", "0", "-16", "C", "1", "-16", "1", "-16", "2", "-16", "L", "2", "4", "L", "-2", "4", "L", "-2", "-12", "C", "-8", "-11", "-12", "-6", "-12", "0", "C", "-12", "6", "-6", "12", "0", "12", "C", "6", "12", "12", "6", "12", "0", "C", "12", "-2", "11", "-5", "10", "-7", "L", "13", "-10", "C", "15", "-7", "16", "-4", "16", "0", "C", "16", "9", "9", "16", "0", "16"];
    /*      去除水印
    var ejscopy = [];
    var ctx = this.__axes_context;
    var cx = this_x,
    cy = this_y;
    ctx.beginPath();
    for (var i = 0; i < ejscopy.length; i++) {
        switch (ejscopy[i]) {
        case 'M':
            ctx.moveTo(cx + parseFloat(ejscopy[++i]), cy + parseFloat(ejscopy[++i]));
            break;
        case 'L':
            ctx.lineTo(cx + parseFloat(ejscopy[++i]), cy + parseFloat(ejscopy[++i]));
            break;
        case 'C':
            ctx.bezierCurveTo(cx + parseFloat(ejscopy[++i]), cy + parseFloat(ejscopy[++i]), cx + parseFloat(ejscopy[++i]), cy + parseFloat(ejscopy[++i]), cx + parseFloat(ejscopy[++i]), cy + parseFloat(ejscopy[++i]));
            break;
        default:
            break
        }
    }
    ctx.closePath();
    ctx.fill();
    */
    this.__draw_series(this.__series_context, true);
    this.__draw_zero_planes(this.__series_context);
    if (this.onAfterDraw != undefined) {
        this.onAfterDraw(this)
    }
    this.__draw_cleanup(this.__series_context, reselectPoint)
};
___chart.__calculateExtremes = function(reset) {
    this.axis_left.__calculateExtremes(reset);
    this.axis_bottom.__calculateExtremes(reset);
    this.axis_right.__calculateExtremes(reset);
    this.axis_top.__calculateExtremes(reset)
};
___chart.__getNewSeriesColor = function() {
    if (this.__colors.length == 0) {
        this.__colors = EJSC.DefaultColors.slice()
    }
    return this.__colors.pop()
};
___chart.__doStartMoveLegend = function(e) {
    if (!e) var e = window.event;
    var xy = EJSC.utility.__realXY(e);
    if (e.srcElement) {
        var el = e.srcElement
    } else {
        var el = e.target
    }
    if (el.className.match(/mouseover/) == null) {
        this.__legend_off_x = (xy.x - this.__el_legend.offsetLeft);
        this.__legend_off_y = (xy.y - this.__el_legend.offsetTop);
        this.__legend_is_moving = true
    }
};
___chart.__doEndMoveLegend = function(e) {
    this.__legend_is_moving = false
};
___chart.__doMoveLegend = function(e) {
    if (this.__legend_is_moving) {
        var cont = this.__el_container;
        if (!e) var e = window.event;
        var xy = EJSC.utility.__realXY(e);
        var ol = EJSC.utility.__documentOffsetLeft(cont, true);
        var ot = EJSC.utility.__documentOffsetTop(cont, true);
        var mw = (document.body.offsetWidth > (ol + cont.offsetWidth)) ? document.body.offsetWidth: cont.offsetWidth + ol;
        var mh = (document.body.offsetHeight > (ot + cont.offsetHeight)) ? document.body.offsetHeight: cont.offsetHeight + ot;
        var tmp_left = xy.x - this.__legend_off_x;
        if (tmp_left < (0 - ol)) {
            tmp_left = (0 - ol)
        }
        if (tmp_left > (mw - ol - this.__el_legend.offsetWidth)) {
            tmp_left = (mw - ol - this.__el_legend.offsetWidth)
        }
        var tmp_top = xy.y - this.__legend_off_y;
        if (tmp_top < (0 - ot)) {
            tmp_top = (0 - ot)
        }
        if (tmp_top > (mh - ot - this.__el_legend.offsetHeight)) {
            tmp_top = (mh - ot - this.__el_legend.offsetHeight)
        }
        this.__el_legend.style.left = tmp_left + "px";
        this.__el_legend.style.top = tmp_top + "px"
    }
};
___chart.__doMinimizeLegend = function() {
    this.__legend_height = this.__el_legend.style.height;
    this.__el_legend.className = this.__el_legend.className.replace(/maximized/, "minimized")
};
___chart.__doMaximizeLegend = function() {
    this.__el_legend.className = this.__el_legend.className.replace(/minimized/, "maximized");
    if (this.__legend_height != undefined) {
        this.__el_legend.style.height = this.__legend_height
    }
};
___chart.__changeLegendVisibility = function(visible) {
    this.__el_legend.className = this.__el_legend.className.replace(/ ejsc-hidden/, "");
    if (!visible) {
        this.__el_legend.className = this.__el_legend.className.replace(/ ejsc-hidden/, "") + " ejsc-hidden"
    }
    this.show_legend = visible
};
___chart.__doHideZoomBox = function() {
    this.__el_zoombox.className = this.__el_zoombox.className.replace(/ ejsc-visible/, " ejsc-invisible")
};
___chart.__doShowZoomBox = function(min_x, max_x, min_y, max_y) {
    this.__el_zoombox.className = this.__el_zoombox.className.replace(/ ejsc-invisible/, " ejsc-visible");
    this.__el_zoombox.style.left = (min_x) + "px";
    this.__el_zoombox.style.width = (max_x - min_x) + "px";
    this.__el_zoombox.style.top = (max_y) + "px";
    this.__el_zoombox.style.height = (min_y - max_y) + "px"
};
___chart.__doRightClickCanvasCover = function(e) {
    if (!e) var e = window.event;
    if (this.__canCtxMenu && this.onContextMenu != undefined) {
        this.onContextMenu(this, e)
    }
};
___chart.__doClickCanvasCover = function(e) {
    if (!e) var e = window.event;
    if (e.srcElement) var target = e.srcElement;
    else var target = e.target;
    while (target !== this.__el_container) {
        if (target == this.__el_legend) return;
        target = target.parentNode
    }
    if (this.allow_interactivity == false) {
        return true
    }
    if (this.__just_zoomed) {
        this.__just_zoomed = false;
        return
    }
    var point = this.__screenPt2ChartPt(EJSC.utility.__realXY(e));
    if (this.__mouse_in_chart && !point.outside) {
        var rightclick = (e.which ? (e.which == 3) : (e.button ? (e.button == 2) : false));
        if (EJSC.utility.__canCoverMouseEvent(e) == false) return true;
        if (!rightclick && this.__zooming != true) {
            this.__findPointAt(point, true, true)
        }
    }
};
___chart.__doKeyDownCanvasCover = function(e) {
    if (!e) var e = window.event;
    if (this.allow_interactivity == false) {
        return true
    }
    if (this.__key_processing == true) {
        return true
    }
    this.__key_processing = true;
    var key = (e.keyCode ? e.keyCode: e.which);
    var result = true;
    if (EJSC.__isIE && (!(e.shiftKey)) && key >= 65 && key <= 90) {
        key += 32
    }
    switch (key) {
    case 13:
        if (this.selected_point != undefined) {
            if (this.onDblClickPoint != undefined) {
                this.onDblClickPoint(this.selected_point, this.selected_point.__owner, this)
            }
        }
        result = false;
        break;
    case 27:
    case 99:
        this.__unselectPoint(true);
        result = false;
        break;
    case 37:
    case 63234:
        if (this.selected_point != undefined && this.__hint_is_sticky == true) {
            this.selected_point.__owner.__selectPrevious(this.selected_point)
        }
        result = false;
        break;
    case 39:
    case 63235:
        if (this.selected_point != undefined && this.__hint_is_sticky == true) {
            this.selected_point.__owner.__selectNext(this.selected_point)
        }
        result = false;
        break;
    case 38:
    case 63232:
        this.__selectPreviousSeries();
        result = false;
        break;
    case 40:
    case 63233:
        this.__selectNextSeries();
        result = false;
        break
    }
    this.__key_processing = false;
    if (!result) {
        return cancelEvent(e)
    } else return true
};
___chart.__doDblClickCanvasCover = function(e) {
    if (this.allow_interactivity == false) {
        return true
    }
    if (this.onBeforeDblClick) {
        if (this.onBeforeDblClick(this) == false) {
            return false
        }
    }
    if (!e) var e = window.event;
    if (EJSC.utility.__canCoverMouseEvent(e) == false) {
        return true
    }
    if (this.onDblClickPoint != undefined && this.selected_point != undefined) {
        if (this.onDblClickPoint(this.selected_point, this.selected_point.__owner, this) == false) {
            return false
        }
    }
    if (e.which) {
        var rightclick = (e.which == 3)
    } else if (e.button) {
        var rightclick = (e.button == 2)
    }
    if (!rightclick) {
        if (this.allow_zoom) {
            try {
                if (this.onBeforeZoom != undefined) {
                    if (this.onBeforeZoom(this) == false) {
                        return false
                    }
                }
                this.__zooming = true;
                this.__el_zoombox.style.left = "0px";
                this.__el_zoombox.style.top = "0px";
                this.__el_zoombox.style.width = "0px";
                this.__el_zoombox.style.height = "0px";
                this.axis_left.__resetZoom();
                this.axis_bottom.__resetZoom();
                this.axis_right.__resetZoom();
                this.axis_top.__resetZoom();
                this.__draw(true);
                this.__just_zoomed = true;
                if (this.onAfterZoom != undefined) {
                    this.onAfterZoom(this)
                }
            } catch(e) {} finally {
                this.__zooming = false
            }
        }
    }
};
___chart.__doMouseDownCanvasCover = function(e) {
    if (!e) var e = window.event;
    if (e.srcElement) var target = e.srcElement;
    else var target = e.target;
    while (target !== this.__el_container) {
        if (target == this.__el_legend) return;
        target = target.parentNode
    }
    if (this.allow_interactivity == false) {
        return true
    }
    if (!EJSC.utility.__canCoverMouseEvent(e)) {
        return true
    }
    var point = this.__screenPt2ChartPt(EJSC.utility.__realXY(e));
    var right_click = false;
    if (this.__mouse_in_chart) {
        if (e.which) {
            right_click = (e.which == 3)
        } else if (e.button) {
            right_click = (e.button == 2)
        }
        if (!right_click && e.altKey) {
            right_click = true
        }
        this.axis_left.__mouseDown(point, right_click);
        this.axis_bottom.__mouseDown(point, right_click);
        this.axis_right.__mouseDown(point, right_click);
        this.axis_top.__mouseDown(point, right_click);
        if (!right_click) {
            if (this.allow_zoom) {
                if (this.onBeforeZoom != undefined) {
                    if (this.onBeforeZoom(this) == false) {
                        return false
                    }
                }
                this.__zooming = true;
                this.__zoom_start = point;
                this.__el_zoombox.style.left = this.__zoom_start.x + "px";
                this.__el_zoombox.style.width = "0px";
                this.__el_zoombox.style.top = this.__zoom_start.y + "px";
                this.__el_zoombox.style.height = "0px";
                if (this.onUserBeginZoom != undefined) {
                    if (this.onUserBeginZoom(this) == false) {
                        this.__zooming = false;
                        return false
                    }
                }
            }
        } else {
            this.__canCtxMenu = true;
            if (this.allow_move) {
                if (this.onBeforeMove != undefined) {
                    if (this.onBeforeMove(this) == false) {
                        return false
                    }
                }
                this.__moving = true;
                this.__move_start = point
            }
        }
    }
    return false
};
___chart.__doMouseMoveCanvasCover = function(e) {
    if (!e) var e = window.event;
    if (this.allow_interactivity == false) {
        return true
    }
    var point = this.__screenPt2ChartPt(EJSC.utility.__realXY(e));
    var newMIC = (point.outside == false);
    if (newMIC != this.__mouse_in_chart) {
        this.__mouse_in_chart = newMIC;
        if (newMIC == true) {
            this.axis_left.__mouseEnter(point);
            this.axis_bottom.__mouseEnter(point);
            this.axis_right.__mouseEnter(point);
            this.axis_top.__mouseEnter(point)
        } else {
            this.axis_left.__mouseLeave();
            this.axis_bottom.__mouseLeave();
            this.axis_right.__mouseLeave();
            this.axis_top.__mouseLeave()
        }
    }
    if (this.__mouse_in_chart) {
        this.axis_left.__mouseMove(point);
        this.axis_bottom.__mouseMove(point);
        this.axis_right.__mouseMove(point);
        this.axis_top.__mouseMove(point)
    }
    if (this.__zooming == true) {
        if (!this.__hint_is_sticky && this.selected_point != undefined) this.__unselectPoint(false);
        var zs = this.__zoom_start;
        var ze = point;
        var min_x = (zs.x < ze.x ? zs.x: ze.x);
        var max_x = (zs.x > ze.x ? zs.x: ze.x);
        var min_y = (zs.y < ze.y ? zs.y: ze.y);
        var max_y = (zs.y > ze.y ? zs.y: ze.y);
        if ((max_x - min_x) > 4 || (max_y - min_y) > 4) {
            if (this.auto_zoom == "y") {
                min_y = 0;
                max_y = this.__draw_area.height
            } else if (this.auto_zoom == "x") {
                min_x = 0;
                max_x = this.__draw_area.width
            }
            min_x += this.__draw_area.left;
            max_x += this.__draw_area.left;
            min_y += this.__draw_area.top;
            max_y += this.__draw_area.top;
            this.__doShowZoomBox(min_x, max_x, (min_y < max_y ? max_y: min_y), (min_y < max_y ? min_y: max_y))
        } else {
            this.__doHideZoomBox()
        }
    } else if (this.__moving == true) {
        this.__canCtxMenu = false;
        var ms = this.__move_start;
        var me = point;
        if (!this.__hint_is_sticky && this.selected_point != undefined) this.__unselectPoint(false);
        this.axis_left.__move(ms, me);
        this.axis_bottom.__move(ms, me);
        this.axis_right.__move(ms, me);
        this.axis_top.__move(ms, me);
        this.__draw(true, false);
        if (this.onAfterMove != undefined) {
            this.onAfterMove(this)
        }
        this.__move_start = me
    } else {
        if (!EJSC.utility.__canCoverMouseEvent(e)) {
            return true
        }
        if (e.srcElement) var target = e.srcElement;
        else var target = e.target;
        while (target !== this.__el_container) {
            if (target == this.__el_legend) return true;
            target = target.parentNode
        }
        if (!this.__hint_is_sticky) {
            if (this.__mouse_in_chart) {
                this.__findPointAt(point, false, true)
            } else {
                this.__unselectPoint()
            }
        }
    }
    return false
};
___chart.__doMouseOutCanvasCover = function(e) {
    if (!e) var e = window.event;
    if (this.allow_interactivity == false) {
        return true
    }
    var point = this.__screenPt2ChartPt(EJSC.utility.__realXY(e));
    if (!point.outside) return;
    this.axis_left.__mouseLeave();
    this.axis_bottom.__mouseLeave();
    this.axis_right.__mouseLeave();
    this.axis_top.__mouseLeave();
    if (!this.__hint_is_sticky) {
        this.__unselectPoint()
    }
};
___chart.__doMouseWheelCanvasCover = function(e) {
    if (!this.allow_zoom || !this.allow_interactivity || !this.allow_mouse_wheel_zoom) {
        return false
    };
    if (!e) {
        var e = window.event
    }
    var zoomDirection = 0;
    if (e.wheelDelta) {
        zoomDirection = e.wheelDelta;
        if (window.opera) {
            zoomDirection = -zoomDirection
        }
    } else if (e.detail) {
        zoomDirection = -e.detail
    }
    if (zoomDirection > 0) {
        zoomDirection = 1
    } else if (zoomDirection < 0) {
        zoomDirection = -1
    }
    if (this.onBeforeZoom != undefined) {
        if (this.onBeforeZoom(this) == false) {
            return cancelEvent(e)
        }
    }
    this.__zooming = true;
    try {
        var da = this.__draw_area;
        if (da == undefined) {
            return cancelEvent(e)
        }
        var zs = {};
        var ze = {};
        if (zoomDirection == 1) {
            zs.x = da.left + (da.width * 0.1);
            zs.y = da.top + (da.height * 0.1);
            ze.x = da.right - (da.width * 0.1);
            ze.y = da.bottom - (da.height * 0.1)
        } else {
            zs.x = da.left - (da.width * 0.5);
            zs.y = da.top - (da.height * 0.5);
            ze.x = da.right + (da.width * 0.5);
            ze.y = da.bottom + (da.height * 0.5)
        }
        this.__el_zoombox.style.left = zs.x + "px";
        this.__el_zoombox.style.top = zs.y + "px";
        this.__el_zoombox.style.width = (ze.x - zs.x) + "px";
        this.__el_zoombox.style.height = (ze.y - zs.y) + "px";
        zs.x = zs.x - da.left;
        zs.y = zs.y - da.top;
        var al = this.axis_left.__zoom(zs, ze);
        var ab = this.axis_bottom.__zoom(zs, ze);
        var ar = this.axis_right.__zoom(zs, ze);
        var at = this.axis_top.__zoom(zs, ze);
        var skipMessage = al || ab || ar || at;
        if (!skipMessage && this.show_messages && (this.__hasYAxisSeries() || this.__hasXAxisSeries())) {
            this.__doShowMessage(this.max_zoom_message, "info");
            return cancelEvent(e)
        }
        this.__draw(true);
        this.__just_zoomed = true;
        if (this.onAfterZoom != undefined) {
            this.onAfterZoom(this)
        }
    } catch(e) {} finally {
        this.__zooming = false
    }
    return cancelEvent(e)
};
___chart.__doMouseUpCanvasCover = function(e) {
    if (!e) var e = window.event;
    if (this.allow_interactivity == false) {
        return true
    }
    if (this.__draw_area == undefined) {
        return true
    }
    try {
        var point = this.__screenPt2ChartPt(EJSC.utility.__realXY(e));
        var right_click = false;
        if (e.which) {
            right_click = (e.which == 3)
        } else if (e.button) {
            right_click = (e.button == 2)
        }
        if (!right_click && e.altKey) {
            right_click = true
        }
        this.axis_left.__mouseUp(point, right_click);
        this.axis_bottom.__mouseUp(point, right_click);
        this.axis_right.__mouseUp(point, right_click);
        this.axis_top.__mouseUp(point, right_click);
        if (!right_click && this.__zooming) {
            var da = this.__draw_area;
            var zs = this.__zoom_start;
            var ze = {};
            if (this.auto_zoom == undefined) {
                if (point.x > zs.x && point.y > zs.y) {
                    ze.x = this.__el_zoombox.offsetWidth + this.__el_zoombox.offsetLeft;
                    ze.y = this.__el_zoombox.offsetHeight + this.__el_zoombox.offsetTop
                } else {
                    zs.x = this.__el_zoombox.offsetWidth + this.__el_zoombox.offsetLeft;
                    zs.y = this.__el_zoombox.offsetHeight + this.__el_zoombox.offsetTop;
                    ze.x = this.__el_zoombox.offsetLeft;
                    ze.y = this.__el_zoombox.offsetTop
                }
            } else if (this.auto_zoom == "y") {
                if (point.x > zs.x) {
                    ze.x = this.__el_zoombox.offsetWidth + this.__el_zoombox.offsetLeft;
                    ze.y = this.__el_zoombox.offsetHeight + this.__el_zoombox.offsetTop
                } else {
                    zs.x = this.__el_zoombox.offsetWidth + this.__el_zoombox.offsetLeft;
                    zs.y = this.__el_zoombox.offsetHeight + this.__el_zoombox.offsetTop;
                    ze.x = this.__el_zoombox.offsetLeft;
                    ze.y = this.__el_zoombox.offsetTop
                }
            } else if (this.auto_zoom == "x") {
                if (point.y > zs.y) {
                    ze.x = this.__el_zoombox.offsetWidth + this.__el_zoombox.offsetLeft;
                    ze.y = this.__el_zoombox.offsetHeight + this.__el_zoombox.offsetTop
                } else {
                    zs.x = this.__el_zoombox.offsetWidth + this.__el_zoombox.offsetLeft;
                    zs.y = this.__el_zoombox.offsetHeight + this.__el_zoombox.offsetTop;
                    ze.x = this.__el_zoombox.offsetLeft;
                    ze.y = this.__el_zoombox.offsetTop
                }
            }
            var far_enough_x = m_ABS(ze.x - zs.x) > 3;
            var far_enough_y = m_ABS(ze.y - zs.y) > 3;
            if ((this.auto_zoom == "y" && far_enough_x) || (this.auto_zoom == "x" && far_enough_y) || far_enough_x && far_enough_y) {
                if (this.auto_zoom == "y") {
                    if (zs.x < ze.x) {
                        var y_min, y_max, i, range;
                        for (i = 0; i < this.__series.length; i++) {
                            range = this.__series[i].__getYRange(zs.x, ze.x);
                            if (range != null) {
                                if (y_min == undefined || range.min < y_min) y_min = range.min;
                                if (y_max == undefined || range.max > y_max) y_max = range.max
                            }
                        }
                        if (y_min != undefined && y_max != undefined) {
                            zs.y = y_min;
                            ze.y = y_max
                        } else {
                            this.__doShowMessage(this.max_zoom_message, "info");
                            return false
                        }
                    } else {
                        zs.y = 0;
                        ze.y = -1
                    }
                } else if (this.auto_zoom == "x") {
                    if (ze.y > zs.y) {
                        var x_min, x_max, i, range;
                        for (i = 0; i < this.__series.length; i++) {
                            range = this.__series[i].__getXRange(ze.y, zs.y);
                            if (range != null) {
                                if (x_min == undefined || range.min < x_min) x_min = range.min;
                                if (x_max == undefined || range.max > x_max) x_max = range.max
                            }
                        }
                        if (x_min != undefined && x_max != undefined) {
                            zs.x = x_min;
                            ze.x = x_max
                        } else {
                            this.__doShowMessage(this.max_zoom_message, "info");
                            return false
                        }
                    } else {
                        zs.x = 0;
                        ze.x = -1
                    }
                }
                if (this.onUserEndZoom != undefined) {
                    var zoom_start = {
                        x: zs.x + da.left,
                        y: zs.y + da.top
                    };
                    var zoom_end = {
                        x: ze.x,
                        y: ze.y
                    };
                    if (this.onUserEndZoom(this, zoom_start, zoom_end, (ze.x > zs.x && ze.y > zs.y ? 'in': 'out')) == false) {
                        return false
                    }
                }
                var al = this.axis_left.__zoom(zs, ze);
                var ab = this.axis_bottom.__zoom(zs, ze);
                var ar = this.axis_right.__zoom(zs, ze);
                var at = this.axis_top.__zoom(zs, ze);
                var skipMessage = al || ab || ar || at;
                if (!skipMessage && this.show_messages && (this.__hasYAxisSeries() || this.__hasXAxisSeries())) {
                    this.__doShowMessage(this.max_zoom_message, "info");
                    return false
                }
                this.__draw(true);
                this.__just_zoomed = true;
                if (this.onAfterZoom != undefined) {
                    this.onAfterZoom(this)
                }
            }
        }
    } catch(e) {} finally {
        this.__doHideZoomBox();
        this.__moving = false;
        this.__zooming = false;
        return false
    }
};
___chart.__selectPreviousSeries = function() {
    if (this.selected_point == undefined) return;
    if (this.__hint_is_sticky == false) return;
    var point = this.selected_point;
    var series = point.__owner;
    var i;
    if (!series.__selectNextSeries(point)) {
        return
    }
    if (point.__owner.__owner != point.__owner.__getChart()) {
        series = point.__owner.__owner
    }
    for (i = 0; i < this.__series.length; i++) {
        if (this.__series[i] == series) {
            break
        }
    }
    i--;
    if (i < 0) {
        i = this.__series.length - 1
    }
    while (this.__series[i].visible == false || this.__series[i].__canSelectPoints == false) {
        i--;
        if (i < 0) i = this.__series.length - 1
    }
    var mouse = point.__owner.__point2px(point);
    this.__selectPoint(this.__series[i].__findClosestPoint(mouse, false).point, true)
};
___chart.__selectNextSeries = function() {
    if (this.selected_point == undefined) return;
    if (this.__hint_is_sticky == false) return;
    var point = this.selected_point;
    var series = point.__owner;
    var i;
    if (!series.__selectNextSeries(point)) {
        return
    }
    if (point.__owner.__owner != point.__owner.__getChart()) {
        series = point.__owner.__owner
    }
    for (i = 0; i < this.__series.length; i++) {
        if (this.__series[i] == series) {
            break
        }
    }
    i++;
    if (i >= this.__series.length) {
        i = 0
    }
    while (this.__series[i].visible == false || this.__series[i].__canSelectPoints == false) {
        i++;
        if (i == this.__series.length) i = 0
    }
    var mouse = point.__owner.__point2px(point);
    var point = this.__series[i].__findClosestPoint(mouse, false);
    if (point != null) {
        this.__selectPoint(point.point, true)
    }
};
___chart.__chartPt2ScreenPt = function(point) {
    var result = {
        x: undefined,
        y: undefined
    };
    var offset = undefined;
    var area = this.__draw_area;
    if (this.__draw_area == undefined) {
        return false
    }
    if (point.x != undefined) {
        offset = EJSC.utility.__documentOffsetLeft(this.__el_canvas_cover);
        result.x = (point.x + offset)
    } else {
        result.outside = true
    }
    if (point.y != undefined) {
        offset = EJSC.utility.__documentOffsetTop(this.__el_canvas_cover);
        result.y = (point.y + offset + area.top)
    } else {
        result.outside = true
    }
    return result
};
___chart.__screenPt2ChartPt = function(point) {
    var result = {
        x: undefined,
        y: undefined,
        outside: false
    };
    var offset = undefined;
    var area = this.__draw_area;
    if (area == undefined) {
        return false
    }
    if (point.x != undefined) {
        offset = EJSC.utility.__documentOffsetLeft(this.__el_canvas_cover);
        if (point.x < (offset + area.left)) {
            result.x = 0;
            result.outside = true
        } else if (point.x > (offset + area.right)) {
            result.x = area.width;
            result.outside = true
        } else {
            result.x = (point.x - offset - area.left)
        }
    } else {
        result.outside = true
    }
    if (point.y != undefined) {
        offset = EJSC.utility.__documentOffsetTop(this.__el_canvas_cover);
        if (point.y < (offset + area.top)) {
            result.y = 0;
            result.outside = true
        } else if (point.y > (offset + area.bottom)) {
            result.y = area.height;
            result.outside = true
        } else {
            result.y = (point.y - offset - area.top)
        }
    } else {
        result.outside = true
    }
    return result
};
___chart.__findPointAt = function(mouse, forceSticky, select, use_proximity) {
    var points = [];
    var series = this.__series;
    var seriesLen = series.length;
    var foundPoint, closestPoint, distance_from, dist;
    var i, j;
    var md = EJSC.math.__distance;
    use_proximity = (use_proximity == undefined ? true: use_proximity);
    j = 0;
    for (i = 0; i < seriesLen; i++) {
        if (series[i].visible) {
            foundPoint = series[i].__findClosestPoint(mouse, use_proximity);
            if (foundPoint != null) {
                points.push(foundPoint)
            }
        }
        j++
    }
    if (points.length > 0) {
        for (i = 0; i < points.length; i++) {
            if (distance_from == undefined || points[i].distance < distance_from) {
                distance_from = points[i].distance;
                closestPoint = points[i].point
            }
        }
        if (closestPoint == undefined) {
            closestPoint = points[0]
        }
        if (select == undefined || select == true) {
            this.__selectPoint(closestPoint, forceSticky)
        }
    } else {
        if ((select == undefined || select == true) && forceSticky != true) {
            this.__unselectPoint()
        }
    }
    return closestPoint
};
___chart.__selectPoint = function(point, forceSticky, fireAfterEvent) {
    if (point == undefined || point.__owner == undefined) return;
    if (fireAfterEvent == undefined) fireAfterEvent = true;
    var hint = undefined;
    if (this.onBeforeSelectPoint && fireAfterEvent != false) {
        if (this.onBeforeSelectPoint(point, point.__owner, this, this.__el_hint, (this.__hint_is_sticky == true || forceSticky ? "select": "hover")) == false) {
            return false
        }
    }
    if (this.onShowHint && this.show_hints) {
        hint = this.onShowHint(point, point.__owner, this, this.__el_hint, (this.__hint_is_sticky == true || forceSticky ? "select": "hover"))
    }
    if (this.selected_point != undefined && this.selected_point.__owner != undefined && this.selected_point.__owner != point.__owner) {
        this.selected_point.__owner.__doUnselectSeries()
    }
    this.selected_point = point;
    if (point.__owner.visible == false) {
        this.__unselectPoint(true)
    }
    if (this.show_hints == true && hint != false) {
        var hint_details = point.__owner.__selectPoint(point, this.__hint_is_sticky || forceSticky);
        if (hint_details == null) {
            return
        }
        hint_details.chart_title = "<label>" + this.title + "</label>";
        if (hint == undefined) {
            hint = hint_details.__defaultHintString;
            if (hint == false) {
                return false
            }
        }
        for (var i in hint_details) {
            if (i.match(/\_\_/) == null) {
                hint = hint.replace(new RegExp("\\[" + i + "\\]", "gi"), hint_details[i])
            }
        }
        this.__el_hint_text.innerHTML = hint;
        this.__el_hint.style.display = "block";
        if (hint_details.__center) {
            this.__el_hint_pointer.style.display = "none";
            this.__el_hint_pointer.firstChild.className = "";
            this.__el_hint.style.left = (hint_details.__position.x - (this.__el_hint.offsetWidth / 2) + "px");
            this.__el_hint.style.top = (hint_details.__position.y - (this.__el_hint.offsetHeight / 2) + "px")
        } else {
            this.__el_hint_pointer.style.display = "block";
            var x_mid = this.__draw_area.width / 2 + this.__draw_area.left;
            var y_mid = this.__draw_area.height / 2 + this.__draw_area.top;
            var x_placement, x_offset, x_hint_offset;
            if (hint_details.__position.x > x_mid) {
                x_placement = "r";
                x_offset = 12;
                x_hint_offset = this.__el_hint.offsetWidth + 5
            } else {
                x_placement = "l";
                x_offset = 0;
                x_hint_offset = -5
            }
            var y_placement, y_offset, y_hint_offset;
            if (hint_details.__position.y > y_mid) {
                y_placement = 'b';
                y_offset = 12;
                y_hint_offset = this.__el_hint.offsetHeight + 5
            } else {
                y_placement = 't';
                y_offset = 0;
                y_hint_offset = -5
            }
            this.__el_hint_pointer.firstChild.className = "ejsc-hint-" + y_placement + x_placement;
            this.__el_hint_pointer.style.left = (hint_details.__position.x - x_offset + "px");
            this.__el_hint_pointer.style.top = (hint_details.__position.y - y_offset + "px");
            this.__el_hint.style.left = (hint_details.__position.x - x_hint_offset + "px");
            this.__el_hint.style.top = (hint_details.__position.y - y_hint_offset + "px")
        }
        if (forceSticky) {
            this.__hint_is_sticky = true
        }
    }
    if (this.selected_point != undefined && this.onAfterSelectPoint && fireAfterEvent != false) {
        this.onAfterSelectPoint(point, point.__owner, this, this.__el_hint, (this.__hint_is_sticky == true ? "select": "hover"))
    }
};
___chart.__unselectPoint = function(forceSticky) {
    if (this.selected_point == undefined) return;
    if (this.onBeforeUnselectPoint) {
        if (this.onBeforeUnselectPoint(this.selected_point, this.selected_point.__owner, this) == false) {
            return false
        }
    }
    var point = this.selected_point;
    if (point != undefined) {
        this.selected_point.__owner.__doUnselectSeries()
    }
    this.__el_hint.style.display = "none";
    this.__el_hint_pointer.style.display = "none";
    if (forceSticky == undefined || forceSticky == true) {
        this.selected_point = undefined;
        this.__hint_is_sticky = false
    }
    if (this.onAfterUnselectPoint && point != undefined) {
        this.onAfterUnselectPoint(point, point.__owner, this)
    }
};
___chart.__removeSeries = function(series, redraw, deleteSeries) {
    if (series == undefined || series.__owner != this) {
        return false
    }
    var chart_index = this.__index;
    var series_index = series.__index;
    var i;
    if (this.selected_point && this.selected_point.__owner == series) {
        this.__unselectPoint()
    }
    if (series.__doRemoveSeries !== undefined) {
        series.__doRemoveSeries()
    }
    for (i = 0; i < this.__series.length; i++) {
        if (this.__series[i] == series) {
            this.__series.splice(i, 1);
            break
        }
    }
    if (series.__needsXAxis) {
        this["axis_" + series.x_axis].__removeSeries(series)
    }
    if (series.__needsYAxis) {
        this["axis_" + series.y_axis].__removeSeries(series)
    }
    for (i = 0; i < this.__series.length; i++) {
        this.__series[i].__index = i;
        this.__series[i].__resetExtremes()
    }
    if (deleteSeries == undefined || deleteSeries == true) {
        series.__legendRemove();
        delete series
    }
    if (redraw == undefined || redraw == true) {
        this.__draw(true)
    }
    if (deleteSeries != undefined && deleteSeries == false) {
        return series
    }
};
___chart.__insertSeries = function(series, redraw, createLegend) {
    //破解
    //if (!EJSC.tk.match(new RegExp("^http://w*.?" + tj.join("")))) EJSC = false;
    this.__series.push(series);
    var x_axis = undefined;
    var y_axis = undefined;
    if (series.__needsXAxis) {
        x_axis = this["axis_" + series.x_axis];
        x_axis.__addSeries(series);
        if (x_axis.__chart_options.visible == false && x_axis.__options.visible == undefined) {
            x_axis.visible = true;
            if (x_axis.__side == "top") {
                if (this.axis_bottom.__series.length == 0 && this.axis_bottom.__force_visible == false) {
                    this.axis_bottom.visible = false;
                    this.axis_bottom.__chart_options.visible = false
                }
            }
        }
    }
    if (series.__needsYAxis) {
        y_axis = this["axis_" + series.y_axis];
        y_axis.__addSeries(series);
        if (y_axis.__chart_options.visible == false && y_axis.__options.visible == undefined) {
            y_axis.visible = true;
            if (y_axis.__side == "right") {
                if (this.axis_left.__series.length == 0 && this.axis_right.__force_visible == false) {
                    this.axis_left.visible = false;
                    this.axis_left.__chart_options.visible = false
                }
            }
        }
    }
    this.__resize(false, true);
    series.__owner = this;
    series.__index = this.__series.length;
    if (series.title == '') series.title = 'Series ' + this.__series.length;
    if (series.color == undefined) series.color = this.__getNewSeriesColor();
    if (createLegend == undefined || createLegend == true) {
        series.__legendCreate();
        series.__legendInsert()
    }
    if (redraw == undefined || redraw == true) {
        this.__canDraw = true;
        this.__calculateExtremes(true);
        this.redraw()
    } else {
        this.__canDraw = false;
        if (series.delayLoad == false) {
            series.__getChart().__draw_series_on_load = false;
            series.__dataHandler.__loadData()
        }
    }
    return series
};
___chart.__acquireSeries = function(series, redraw) {
    if (!series) return;
    var chart = series.__owner;
    var plots = chart.__series;
    var p = undefined;
    if (this.selected_point != undefined) {
        p = this.selected_point
    } else if (chart.selected_point && chart.selected_point.__owner == series) {
        p = chart.selected_point
    }
    chart.__unselectPoint();
    this.__unselectPoint();
    var chart_index = chart.__index;
    var series_index = series.__index;
    chart.__removeSeries(series, true, false);
    this.__insertSeries(series, true, false);
    this.__legend_series.appendChild(series.__legend);
    if (p != undefined) this.__selectPoint(p, true)
};
___chart.legendMinimize = function() {
    if (this.getLegendState() == "normal") {
        this.__doMinimizeLegend()
    }
};
___chart.legendRestore = function() {
    if (this.getLegendState() == "minimized") {
        this.__doMaximizeLegend()
    }
};
___chart.getLegendState = function() {
    return (this.__el_legend.className.match(/minimized/) != null ? "minimized": "normal")
};
___chart.setShowLegend = function(show) {
    this.__changeLegendVisibility(show)
};
___chart.addSeries = function(series, redraw) {
    return this.__insertSeries(series, redraw)
};
___chart.setTitle = function(title) {
    this.title = title;
    this.__el_titlebar_text.innerHTML = this.title;
    this.__el_legend_owner_title.innerHTML = this.title
};
___chart.showTitlebar = function(redraw) {
    if (this.show_titlebar == false) {
        this.show_titlebar = true;
        this.__el_titlebar.className = "ejsc-titlebar";
        if (redraw == undefined || redraw == true) {
            this.__resize(true, true)
        }
    }
};
___chart.hideTitlebar = function(redraw) {
    if (this.show_titlebar == true) {
        this.show_titlebar = false;
        this.__el_titlebar.className = "ejsc-titlebar ejsc-hidden";
        if (redraw == undefined || redraw == true) {
            this.__resize(true, true)
        }
    }
};
___chart.setLegendTitle = function(title) {
    if (this.legend_title != title) {
        this.legend_title = title;
        this.__el_legend_title.innerHTML = this.legend_title
    }
};
___chart.setAutoResize = function(auto_resize) {
    if (auto_resize != this.auto_resize) {
        this.auto_resize = auto_resize;
        if (this.auto_resize) {
            EJSC.__addChartResize(this)
        } else {
            EJSC.__removeChartResize(this)
        }
    }
};
___chart.redraw = function(reselectPoint) {
    this.__canDraw = true;
    var chart = this;
    window.setTimeout(function() {
        chart.__resize(false, true, true);
        chart.__draw(reselectPoint)
    },
    0)
};
___chart.hideZoomBox = function() {
    this.__doHideZoomBox()
};
___chart.showZoomBox = function(x_min, x_max, x_axis, y_min, y_max, y_axis) {
    var min_x = this["axis_" + x_axis].__pt2px(x_min);
    var max_x = this["axis_" + x_axis].__pt2px(x_max);
    var min_y = this["axis_" + y_axis].__pt2px(y_min);
    var max_y = this["axis_" + y_axis].__pt2px(y_max);
    this.__doShowZoomBox(min_x, max_x, min_y, max_y)
};
___chart.getZoomBoxPixelCoordinates = function(screenOrChart) {
    var zb = this.__el_zoombox;
    var result = {
        top: zb.offsetTop,
        left: zb.offsetLeft,
        right: zb.offsetLeft + zb.offsetWidth,
        bottom: zb.offsetTop + zb.offsetHeight,
        width: zb.offsetWidth,
        height: zb.offsetHeight
    };
    if (screenOrChart == "screen") {
        var screenTL = this.__chartPt2ScreenPt({
            x: result.left,
            y: result.top
        });
        var screenBR = this.__chartPt2ScreenPt({
            x: result.right,
            y: result.bottom
        });
        result.top = screenTL.y - this.__draw_area.top;
        result.left = screenTL.x;
        result.right = screenBR.x;
        result.bottom = screenBR.y
    }
    return result
};
___chart.findClosestPoint = function(xPt, yPt, select, sticky) {
    return this.__findPointAt(this.__screenPt2ChartPt({
        x: xPt,
        y: yPt
    }), sticky, select, false)
};
___chart.clearSelectedPoint = function() {
    this.__unselectPoint(true)
};
___chart.selectPoint = function(point, sticky) {
    this.__selectPoint(point, sticky, true)
};
___chart.acquireSeries = function(series, redraw) {
    this.__acquireSeries(series, redraw)
};
___chart.removeSeries = function(series, redraw) {
    this.__removeSeries(series, redraw)
};
___chart.getMinMaxYInXRange = function(xmin, xmax) {
    var ymin = undefined;
    var ymax = undefined;
    var s, p;
    s = this.__series;
    for (i = 0; i < s.length; i++) {
        p = s[i].__points;
        for (j = 0; j < p.length; j++) {
            if (p[j].__x() >= xmin && p[j].__x() <= xmax) {
                if (ymax == undefined || p[j].__y() > ymax) ymax = p[j].__y();
                if (ymin == undefined || p[j].__y() < ymin) ymin = p[j].__y()
            }
        }
    }
    return {
        y_min: ymin,
        y_max: ymax
    }
};
___chart.setAxis = function(side, axis) {
    var dir = (side == 'left' || side == 'right' ? 'v': (side == 'top' || side == 'bottom' ? 'h': undefined));
    if (dir == undefined) return;
    var series = this['axis_' + side].__series.slice();
    var min = this['axis_' + side].__current_min;
    var max = this['axis_' + side].__current_max;
    this['axis_' + side].hide();
    this['axis_' + side] = axis;
    this['axis_' + side].__init(this, dir, side);
    for (var i = 0; i < series.length; i++) this['axis_' + side].__addSeries(series[i]);
    this['axis_' + side].show();
    this['axis_' + side].__calculateExtremes();
    this.__resize();
    this.redraw()
};
function doDragOrSelect(e) {
    return cancelEvent(e)
};
function doAllMouseUp(e) {
    for (var i = 0; i < EJSC.__Charts.length; i++) {
        if (EJSC.__Charts[i] == null) {
            continue
        }
        EJSC.__Charts[i].__doMouseUpCanvasCover(e);
        EJSC.__Charts[i].__doEndMoveLegend(e, true)
    }
};
function doAllMouseMove(e) {
    for (var i = 0; i < EJSC.__Charts.length; i++) {
        if (EJSC.__Charts[i] == null) {
            continue
        }
        if (EJSC.__Charts[i].__zooming == true || EJSC.__Charts[i].__moving == true) {
            EJSC.__Charts[i].__doMouseMoveCanvasCover(e, true)
        }
        if (EJSC.__Charts[i].__legend_is_moving == true) {
            EJSC.__Charts[i].__doMoveLegend(e, true)
        }
    }
};
function cancelEvent(e) {
    if (!e) var e = window.event;
    if (e.preventDefault) {
        e.preventDefault()
    }
    if (e.stopPropagation) {
        e.stopPropagation()
    }
    e.cancelBubble = true;
    e.cancel = true;
    e.returnValue = false;
    return false
};
function fixUpExCanvas() {
    function onResize(e) {
        var el = e.srcElement;
        if (el.firstChild) {
            el.firstChild.style.width = el.clientWidth + 'px';
            el.firstChild.style.height = el.clientHeight + 'px'
        }
    }
    G_vmlCanvasManager.initElement = function(el, chart) {
        el.getContext = function() {
            if (this.context_) {
                return this.context_
            }
            this.context_ = new CanvasRenderingContext2D(this);
            this.context_.lineStr = [];
            return this.context_
        };
        EJSC.utility.__attachEvent(el, 'resize', onResize, false, chart);
        var attrs = el.attributes;
        if (attrs.width && attrs.width.specified) {}
        if (attrs.height && attrs.height.specified) {}
        return el
    }
};
function doDragOrSelect(e) {
    return cancelEvent(e)
};
if (EJSC.loadCompatibilityFile) {
    var req = EJSC.utility.XMLRequestPool.sendRequest(EJSC.__srcPath + "EJSChart_v1_Compatibility.js", undefined, undefined, undefined,
    function(message) {
        window.status = message
    });
    eval(req.responseText)
};
EJSC.utility.__attachEvent(document, "readystatechange",
function() {
    EJSC.__ready = true;
    for (var i = 0; i < EJSC.__Charts.length; i++) {
        eval("setTimeout( function() { EJSC.__Charts[" + i + "].__draw(false); } , 10 );")
    }
});
EJSC.LinearAxis = function(options) {
    this.__type = "linear";
    if (options == undefined) {
        options = {}
    }
    this.__options = options
};
EJSC.Axis.__extendTo(EJSC.LinearAxis);
var ___linearaxis = EJSC.LinearAxis.prototype;
___linearaxis.__doPx2Pt = function(point) {
    var result;
    if (this.__orientation == "v") {
        result = point - this.__owner.__draw_area.top;
        result = this.__owner.__draw_area.height - result
    } else {
        result = point - this.__owner.__draw_area.left
    }
    result = (result * this.__scale) + this.__current_min;
    return result
};
___linearaxis.__doPt2Px = function(point) {
    var result = ((point - this.__current_min) / this.__scale);
    if (this.__orientation == "v") {
        result = this.__owner.__draw_area.height - result;
        result += this.__owner.__draw_area.top
    } else {
        result += this.__owner.__draw_area.left
    }
    return result
};
___linearaxis.__doGetRound = function(value, adjustment) {
    return EJSC.__tickRound[this.__tick_round + adjustment]
};
___linearaxis.__doMove = function(start, end) {
    if (this.__scale == undefined) {
        return false
    }
    var start = (this.__orientation == "h" ? start.x: start.y);
    var end = (this.__orientation == "h" ? end.x: end.y);
    if (start == end) {
        return false
    }
    var change = m_ABS(end - start);
    var amount = change * this.__scale;
    switch ((this.__orientation == "h" && start > end) || (this.__orientation == "v" && end > start)) {
    case true:
        this.__current_max += amount;
        if (this.__current_max > this.__max_extreme) {
            this.__current_max = this.__max_extreme
        }
        this.__current_min = this.__current_max - (this.__owner.__draw_area[this.__orientation == "h" ? "width": "height"] * this.__scale);
        break;
    case false:
        this.__current_min -= amount;
        if (this.__current_min < this.__min_extreme) {
            this.__current_min = this.__min_extreme
        }
        this.__current_max = this.__current_min + (this.__owner.__draw_area[this.__orientation == "h" ? "width": "height"] * this.__scale);
        break
    }
    this.__calculateScale(false)
};
___linearaxis.__doResetZoom = function() {
    this.__current_min = this.__min_extreme;
    this.__current_max = this.__max_extreme;
    this.__calculateScale(false)
};
___linearaxis.__doZoom = function(start, end) {
    var result = true;
    if (this.__scale == undefined) {
        result = false
    }
    var start = (this.__orientation == "h" ? start.x: start.y);
    var end = (this.__orientation == "h" ? end.x: end.y);
    var da = this.__owner.__draw_area;
    if (da == undefined) {
        result = false
    }
    var new_start = this.__px2pt(start + (this.__orientation == 'h' ? da.left: da.top));
    var new_end = this.__px2pt(end);
    if (start == end) {
        result = false
    }
    if (result) {
        switch (start > end) {
        case true:
            this.__resetZoom();
            break;
        case false:
            this.__current_min = this.__orientation == 'h' ? new_start: new_end;
            this.__current_max = this.__orientation == 'h' ? new_end: new_start;
            if (this.__current_min < this.__min_extreme) {
                this.__current_min = this.__min_extreme
            }
            if (this.__current_max > this.__max_extreme) {
                this.__current_max = this.__max_extreme
            }
            this.__generateTicks();
            this.__calculateScale(false);
            break
        }
    }
    return result
};
___linearaxis.__doCalculateScale = function(calculatePadding, generateTicks) {
    var area = this.__owner.__draw_area;
    if (area == undefined) {
        return false
    }
    var dimension = (this.__orientation == "h" ? area.width: area.height);
    var scale;
    if (dimension > 0) {
        scale = ((this.__current_max - this.__current_min) / dimension)
    } else {
        scale = 0
    }
    if (calculatePadding == true) {
        this.__min_extreme -= this.__padding.min * scale;
        this.__max_extreme += this.__padding.max * scale;
        this.__current_min = this.__min_extreme;
        this.__current_max = this.__max_extreme;
        if (dimension > 0) {
            scale = ((this.__current_max - this.__current_min) / dimension)
        } else {
            scale = 0
        }
    }
    this.__scale = scale;
    return true
};
___linearaxis.__doGenerateTicks = function() {
    var area = this.__owner.__draw_area;
    var dimension = (this.__orientation == "h" ? area.width: area.height);
    var label_count = this.__el_labels.childNodes.length;
    var scale = this.__scale;
    var ticks = undefined;
    var tickOffsetIndex = 0;
    var round = undefined;
    var min_tick = undefined;
    var max_tick = undefined;
    var dif = undefined;
    var label = undefined;
    var current_tick = undefined;
    var i = undefined;
    if (this.onNeedsTicks != undefined && this.onNeedsTicks != null) {
        if (this.__text_values.__count() > 0) {
            ticks = this.onNeedsTicks(null, null, this.__owner, this)
        } else {
            ticks = this.onNeedsTicks(this.__current_min, this.__current_max, this.__owner, this)
        }
        if (ticks == null || ticks == undefined) {
            ticks = undefined
        } else {
            for (i = ticks.length - 1; i >= 0; i--) {
                if (this.__text_values.__count() > 0) {
                    label = this.__text_values.__find(ticks[i][0]);
                    if (label != null) {
                        ticks[i] = {
                            p: label.__index,
                            l: label.__label
                        }
                    } else {
                        ticks.splice(i, 1);
                        continue
                    }
                } else {
                    ticks[i] = {
                        p: ticks[i][0],
                        l: ticks[i][1]
                    }
                }
                if (ticks[i].l == null) {
                    ticks[i].l = this.__getLabel(ticks[i].p, 0)
                }
            }
        }
    }
    if (ticks == undefined) {
        if (this.major_ticks.count != undefined && this.major_ticks.count > 1) {
            min_tick = this.__current_min;
            max_tick = this.__current_max;
            this.__increment = ((this.__current_max - this.__current_min) / (this.major_ticks.count - 1));
            round = 0
        } else {
            dif = ((this.__current_max - this.__current_min) / 3);
            tickOffsetIndex = 0;
            if (this.__text_values.__count() > 0) {
                for (tickOffsetIndex = 0; tickOffsetIndex < EJSC.__ticks.length; tickOffsetIndex++) {
                    if (EJSC.__ticks[tickOffsetIndex] == 1) break
                }
            } else {
                while (EJSC.__ticks[tickOffsetIndex] > dif) {
                    tickOffsetIndex++
                }
                if (this.major_ticks.max_interval != undefined && EJSC.__ticks[tickOffsetIndex] > this.major_ticks.max_interval) {
                    while (EJSC.__ticks[tickOffsetIndex] >= this.major_ticks.max_interval) {
                        tickOffsetIndex++
                    }
                    if (EJSC.__ticks[tickOffsetIndex] != this.major_ticks.max_interval) {
                        EJSC.__ticks.splice(tickOffsetIndex, 0, this.major_ticks.max_interval)
                    }
                } else if (this.major_ticks.min_interval != undefined && dif < this.major_ticks.min_interval) {
                    while (EJSC.__ticks[tickOffsetIndex] <= this.major_ticks.min_interval) {
                        tickOffsetIndex--
                    }
                    if (EJSC.__ticks[tickOffsetIndex] != this.major_ticks.min_interval) {
                        EJSC.__ticks.splice(tickOffsetIndex, 0, this.major_ticks.min_interval)
                    }
                }
            }
            this.__tick_round = tickOffsetIndex;
            round = EJSC.__tickRound[tickOffsetIndex];
            if (round > 0 && this.formatter != undefined && this.formatter.__type == "date") {
                for (tickOffsetIndex = 0; tickOffsetIndex < EJSC.__ticks.length; tickOffsetIndex++) {
                    if (EJSC.__ticks[tickOffsetIndex] == 1) break
                }
                this.__tick_round = tickOffsetIndex;
                round = EJSC.__tickRound[tickOffsetIndex]
            }
            this.__increment = EJSC.__ticks[tickOffsetIndex];
            min_tick = m_CEIL(this.__current_min / this.__increment) * this.__increment;
            while (min_tick < this.__current_min) {
                min_tick += this.__increment
            }
            max_tick = this.__current_max;
            if ((this.extremes_ticks == true) && (this.__text_values.__count() == 0) && (this.__forced_min_extreme == undefined) && (this.__forced_max_extreme == undefined) && (this.__current_min == this.__min_extreme) && (this.__current_max == this.__max_extreme)) {
                if (this.__data_extremes.min_extreme < min_tick) {
                    min_tick -= this.__increment
                }
                max_tick = min_tick;
                while (max_tick < this.__data_extremes.max_extreme) {
                    max_tick += this.__increment
                }
                if (max_tick - this.__increment >= this.__data_extremes.max_extreme) {
                    max_tick -= this.__increment
                }
                this.__current_min = min_tick;
                this.__min_extreme = min_tick;
                this.__current_max = max_tick;
                this.__max_extreme = max_tick;
                this.__calculateScale(false, false)
            }
        }
        if (isNaN(this.__current_min) || isNaN(this.__current_max)) {
            return
        }
        current_tick = min_tick;
        ticks = [{
            p: current_tick,
            l: this.__getLabel(current_tick, round)
        }];
        if (this.extremes_ticks == true && this.__text_values.__count() == 0 && this.__forced_min_extreme != undefined && this.__forced_max_extremes != undefined && this.__current_min == this.__min_extreme && this.__current_max == this.__max_extreme) {
            ticks[0] = {
                p: this.__current_min,
                l: this.__getLabel(this.__current_min, round)
            }
        }
        while ((current_tick + this.__increment) <= max_tick) {
            current_tick += this.__increment;
            ticks.push({
                p: current_tick,
                l: this.__getLabel(current_tick, round)
            })
        }
        if (current_tick < this.__current_max && this.__text_values.__count() == 0 && ((this.__extremes_ticks == true && this.__forced_min_extremes != undefined && this.__forced_max_extremes != undefined) || (this.major_ticks.count != undefined && this.major_ticks.count > 1))) {
            current_tick = this.__current_max;
            ticks.push({
                p: current_tick,
                l: this.__getLabel(current_tick, round)
            })
        }
    }
    for (i = ticks.length - 1; i >= 0; i--) {
        if (ticks[i].p > this.__current_max || ticks[i].p < this.__current_min) {
            ticks.splice(i, 1);
            continue
        }
    }
    this.__ticks = ticks.slice();
    return true
};
___linearaxis.__doDraw_v = function(ctx) {
    var area = this.__owner.__draw_area;
    var ticks = this.__ticks;
    var tick_adj, tick_size, inc, i, j, y;
    this.__adjustLabelContainer_v(area);
    this.__adjustCaptionPosition_v(area);
    this.__drawBorder_v(area, ctx);
    var scale = this.__scale;
    if (scale == undefined || scale == 0 || isNaN(scale)) {
        this.__calculateScale(true, true);
        scale = this.__scale;
        if (scale == undefined || scale == 0 || isNaN(scale)) {
            return false
        }
    }
    this.__initTicks();
    if (ticks.length == 0) {
        return
    }
    this.drawShading(ctx);
    if (this.grid.show == true) {
        ctx.beginPath();
        ctx.lineWidth = this.grid.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.grid.color, this.grid.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            y = (area.height + area.top) - ((ticks[i].p - this.__current_min) / scale);
            if (this.__owner.axis_bottom.border.show == true && this.__owner.axis_bottom.visible == true && y == (area.height + area.top)) {
                continue
            }
            if (this.__owner.axis_top.border.show == true && this.__owner.axis_top.visible == true && y == (area.top)) {
                continue
            }
            ctx.moveTo(area.left, y);
            ctx.lineTo(area.left + area.width, y)
        }
        ctx.stroke()
    }
    if (!this.visible) {
        return
    }
    if (this.major_ticks.show == true) {
        if (this.__side == "left") {
            tick_adj = this.major_ticks.offset;
            tick_size = -this.major_ticks.size
        } else {
            tick_adj = -this.major_ticks.offset;
            tick_size = this.major_ticks.size
        }
        ctx.beginPath();
        ctx.lineWidth = this.major_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.major_ticks.color == undefined ? this.color: this.major_ticks.color, this.major_ticks.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            y = (area.height + area.top) - ((ticks[i].p - this.__current_min) / scale);
            ctx.moveTo(area[this.__side] + tick_adj, y);
            ctx.lineTo(area[this.__side] + tick_size + tick_adj, y)
        }
        ctx.stroke()
    }
    if (this.minor_ticks.show == true && this.__text_values.__count() == 0) {
        inc = (this.__increment / this.__scale / (this.minor_ticks.count + 1));
        tick_size = this.minor_ticks.size;
        if (typeof(tick_size) == "number") {
            tick_size = tick_size.toString()
        }
        if (tick_size.indexOf("%") == -1) {
            tick_size = parseFloat(tick_size)
        } else {
            tick_size = area.width * (parseFloat(tick_size.replace("%", "")) / 100)
        }
        if (this.__side == "left") {
            tick_adj = -this.minor_ticks.offset;
            tick_size = tick_size
        } else {
            tick_adj = this.minor_ticks.offset;
            tick_size = -tick_size
        }
        ctx.beginPath();
        ctx.lineWidth = this.minor_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.minor_ticks.color == undefined ? this.color: this.minor_ticks.color, this.minor_ticks.opacity / 100).rgba;
        j = this.minor_ticks.count;
        y = area.bottom - ((ticks[0].p - this.__current_min) / scale);
        if (y < (area.bottom - inc)) {
            while (y < (area.bottom - inc)) {
                j--;
                y += inc
            }
        }
        while (y > area.top) {
            if (j >= this.minor_ticks.count) {
                y -= inc;
                j = 0
            }
            if (y <= area.top) {
                break
            }
            ctx.moveTo(area[this.__side] + tick_adj, y);
            ctx.lineTo(area[this.__side] + tick_size + tick_adj, y);
            y -= inc;
            j++
        }
        ctx.stroke()
    }
    for (i = 0; i < ticks.length; i++) {
        this.__el_labels.childNodes[i].className = "ejsc-" + this.__orientation + "-label" + (this.label_class != undefined ? " " + this.label_class: "");
        this.__el_labels.childNodes[i].innerHTML = ticks[i].l;
        this.__el_labels.childNodes[i].style.top = m_FLOOR(area.height - ((ticks[i].p - this.__current_min) / scale) - (this.__el_labels.childNodes[i].offsetHeight / 2)) + "px";
        this.__el_labels.childNodes[i].style[this.__side == "left" ? "right": "left"] = (this.major_ticks.size - this.major_ticks.offset) + 2 + "px"
    }
};
___linearaxis.__doDraw_h = function(ctx) {
    var area = this.__owner.__draw_area;
    var ticks = this.__ticks;
    var tick_adj, tick_size, inc, rows, tick_top, i, j, r, x;
    this.__adjustLabelContainer_h(area);
    this.__adjustCaptionPosition_h(area);
    this.__drawBorder_h(area, ctx);
    var scale = this.__scale;
    if (scale == undefined || scale == 0 || isNaN(scale)) {
        this.__calculateScale(true, true);
        scale = this.__scale;
        if (scale == undefined || scale == 0 || isNaN(scale)) {
            return false
        }
    }
    this.__initTicks();
    if (ticks.length == 0) {
        return
    }
    this.drawShading(ctx);
    if (this.grid.show == true) {
        ctx.beginPath();
        ctx.lineWidth = this.grid.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.grid.color, this.grid.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            x = ((ticks[i].p - this.__current_min) / scale) + area.left;
            if (this.__owner.axis_left.border.show == true && x == (area.left)) {
                continue
            }
            if (this.__owner.axis_right.border.show == true && x == (area.left + area.width)) {
                continue
            }
            ctx.moveTo(x, area.top + area.height);
            ctx.lineTo(x, area.top)
        }
        ctx.stroke()
    }
    if (!this.visible) {
        return
    }
    for (i = 0; i < ticks.length; i++) {
        this.__el_labels.childNodes[i].className = "ejsc-" + this.__orientation + "-label" + (this.label_class != undefined ? " " + this.label_class: "");
        this.__el_labels.childNodes[i].innerHTML = ticks[i].l;
        this.__el_labels.childNodes[i].style.left = m_FLOOR(((ticks[i].p - this.__current_min) / scale) - (this.__el_labels.childNodes[i].offsetWidth / 2)) + "px";
        if (this.stagger_ticks == true && this.__el_labels.childNodes[i].offsetHeight < this.size) {
            ticks[i].t = m_FLOOR(this.size / this.__el_labels.childNodes[0].offsetHeight);
            if (ticks[i].t < 1) {
                ticks[i].t = 1
            }
            tick_top = (i % ticks[i].t * this.__el_labels.childNodes[i].offsetHeight) + 4 + "px"
        } else {
            tick_top = (this.major_ticks.size - this.major_ticks.offset) + "px"
        }
        this.__el_labels.childNodes[i].style[this.__side == "top" ? "bottom": "top"] = tick_top
    }
    if (this.major_ticks.show == true) {
        if (this.__side == "top") {
            tick_adj = this.major_ticks.offset;
            tick_size = -this.major_ticks.size
        } else {
            tick_adj = -this.major_ticks.offset;
            tick_size = this.major_ticks.size
        }
        ctx.beginPath();
        ctx.lineWidth = this.major_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.major_ticks.color == undefined ? this.color: this.major_ticks.color, this.major_ticks.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            x = ((ticks[i].p - this.__current_min) / scale) + area.left;
            ctx.moveTo(x, area[this.__side] + tick_adj);
            if (this.stagger_ticks == true && this.__el_labels.childNodes[i].offsetHeight < this.size) {
                tick_top = (i % ticks[i].t * this.__el_labels.childNodes[i].offsetHeight);
                tick_top = (this.__side == "top" ? -tick_top: tick_top)
            } else {
                tick_top = 0
            }
            ctx.lineTo(x, area[this.__side] + tick_size + tick_adj + tick_top)
        }
        ctx.stroke()
    }
    if (this.minor_ticks.show == true && this.__text_values.__count() == 0) {
        inc = (this.__increment / this.__scale / (this.minor_ticks.count + 1));
        tick_size = this.minor_ticks.size;
        if (typeof(tick_size) == "number") {
            tick_size = tick_size.toString()
        }
        if (tick_size.indexOf("%") == -1) {
            tick_size = parseFloat(tick_size)
        } else {
            tick_size = area.height * (parseFloat(tick_size.replace("%", "")) / 100)
        }
        if (this.__side == "top") {
            tick_adj = -this.minor_ticks.offset;
            tick_size = tick_size
        } else {
            tick_adj = this.minor_ticks.offset;
            tick_size = -tick_size
        }
        ctx.beginPath();
        ctx.lineWidth = this.minor_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.minor_ticks.color == undefined ? this.color: this.minor_ticks.color, this.minor_ticks.opacity / 100).rgba;
        j = this.minor_ticks.count;
        x = ((ticks[0].p - this.__current_min) / scale);
        if (x > inc) {
            while (x > inc) {
                j--;
                x -= inc
            }
        }
        while (x < area.width) {
            if (j >= this.minor_ticks.count) {
                x += inc;
                j = 0
            }
            if (x >= area.width) {
                break
            }
            ctx.moveTo(area.left + x, area[this.__side] + tick_adj);
            ctx.lineTo(area.left + x, area[this.__side] + tick_size + tick_adj);
            x += inc;
            j++
        }
        ctx.stroke()
    }
};
___linearaxis.even_shading = undefined;
___linearaxis.odd_shading = undefined;
___linearaxis.drawShading = function(ctx) {
    var area = this.__owner.__draw_area;
    var ticks = this.__ticks;
    if (ticks.length == 0) return;
    var tick_diff = ticks[1].p - ticks[0].p;
    var start = area[this.__orientation == 'v' ? 'bottom': 'left'];
    for (var i = 0; i < ticks.length; i++) {
        var tick_area_unit = Math.round(((ticks[i].p / tick_diff) / 2) * Math.pow(10, 8)) / Math.pow(10, 8);
        var tick_area_floor = Math.floor(tick_area_unit);
        var tick_area = (tick_area_unit !== tick_area_floor ? 'even': 'odd');
        if (this[tick_area + '_shading'] !== undefined) {
            ctx.fillStyle = this[tick_area + '_shading'];
            ctx.beginPath();
            switch (this.__orientation) {
            case 'v':
                ctx.moveTo(area.left, start);
                ctx.lineTo(area.left, this.__pt2px(ticks[i].p));
                ctx.lineTo(area.right, this.__pt2px(ticks[i].p));
                ctx.lineTo(area.right, start);
                ctx.lineTo(area.left, start);
                break;
            case 'h':
                ctx.moveTo(start, area.top);
                ctx.lineTo(start, area.bottom);
                ctx.lineTo(this.__pt2px(ticks[i].p), area.bottom);
                ctx.lineTo(this.__pt2px(ticks[i].p), area.top);
                ctx.lineTo(start, area.top);
                break
            }
            ctx.fill()
        }
        start = this.__pt2px(ticks[i].p)
    }
    var p = ticks[ticks.length - 1].p;
    var tick_area_unit = Math.round(((p / tick_diff) / 2) * Math.pow(10, 8)) / Math.pow(10, 8);
    var tick_area_floor = Math.floor(tick_area_unit);
    var tick_area = (tick_area_unit === tick_area_floor ? 'even': 'odd');
    if (this[tick_area + '_shading'] !== undefined) {
        ctx.fillStyle = this[tick_area + '_shading'];
        ctx.beginPath();
        switch (this.__orientation) {
        case 'v':
            var end = area.top;
            ctx.moveTo(area.left, end);
            ctx.lineTo(area.left, this.__pt2px(p));
            ctx.lineTo(area.right, this.__pt2px(p));
            ctx.lineTo(area.right, end);
            ctx.lineTo(area.left, end);
            break;
        case 'h':
            var end = area.right;
            ctx.moveTo(end, area.top);
            ctx.lineTo(end, area.bottom);
            ctx.lineTo(this.__pt2px(p), area.bottom);
            ctx.lineTo(this.__pt2px(p), area.top);
            ctx.lineTo(end, area.top);
            break
        }
        ctx.fill()
    }
};
___linearaxis.__initTicks = function() {
    var i;
    var ticks = this.__ticks;
    if (ticks.length > this.__el_labels.childNodes.length) {
        for (i = this.__el_labels.childNodes.length; i <= ticks.length; i++) {
            this.__el_labels.appendChild(EJSC.utility.__createDOMArray(["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }]))
        }
    } else if (ticks.length < this.__el_labels.childNodes.length) {
        for (i = this.__el_labels.childNodes.length - 1; i >= ticks.length; i--) {
            this.__el_labels.childNodes[i].className = "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
        }
    }
};
___linearaxis.__doDraw = function(ctx) {
    this.__doDraw = this["__doDraw_" + this.__orientation];
    this.__doDraw(ctx)
};
EJSC.LogarithmicAxis = function(options) {
    this.__type = "logarithmic";
    this.__log_min = undefined;
    this.__log_max = undefined;
    this.base = 10;
    if (options == undefined) {
        options = {}
    }
    this.__options = options
};
EJSC.Axis.__extendTo(EJSC.LogarithmicAxis);
var ___logarithmicaxis = EJSC.LogarithmicAxis.prototype;
___logarithmicaxis.__doPx2Pt = function(point) {
    var result;
    if (this.__orientation == "v") {
        point = this.__owner.__draw_area.height - point + this.__owner.__draw_area.top
    } else {
        point = point - this.__owner.__draw_area.left
    }
    result = (point * this.__scale) + this.__log_min;
    result = m_POW(this.base, result);
    return result
};
___logarithmicaxis.__doPt2Px = function(point) {
    var area = this.__owner.__draw_area;
    var result = (this.__logX(point) - this.__log_min) / this.__scale;
    if (this.__orientation == "v") {
        result = (area.height + area.top) - result
    } else {
        result += area.left
    }
    return result
};
___logarithmicaxis.__doMove = function(start, end) {
    if (this.__scale == undefined) {
        return false
    }
    var start = (this.__orientation == "h" ? start.x: start.y);
    var end = (this.__orientation == "h" ? end.x: end.y);
    var area = this.__owner.__draw_area;
    var new_max, new_min;
    if (start == end) {
        return false
    }
    var change = m_ABS(end - start);
    switch ((this.__orientation == "h" && start > end) || (this.__orientation == "v" && end > start)) {
    case true:
        new_max = this.__px2pt(this.__orientation == "h" ? area.width + area.left + change: area.top - change);
        if (new_max > this.__max_extreme) {
            new_max = this.__max_extreme;
            new_min = m_POW(this.base, this.__logX(new_max) - (area[this.__orientation == "h" ? "width": "height"] * this.__scale))
        } else {
            new_min = this.__px2pt(this.__orientation == "h" ? area.left + change: area.height + area.top - change)
        }
        break;
    case false:
        new_min = this.__px2pt(this.__orientation == "h" ? area.left - change: area.height + area.top + change);
        if (new_min < this.__min_extreme) {
            new_min = this.__min_extreme;
            new_max = m_POW(this.base, this.__logX(new_min) + (area[this.__orientation == "h" ? "width": "height"] * this.__scale))
        } else {
            new_max = this.__px2pt(this.__orientation == "h" ? area.width + area.left - change: area.top + change)
        }
        break
    }
    this.__current_max = new_max;
    this.__current_min = new_min;
    this.__calculateScale(false)
};
___logarithmicaxis.__doResetZoom = function() {
    this.__current_min = this.__min_extreme;
    this.__current_max = this.__max_extreme;
    this.__calculateScale(false)
};
___logarithmicaxis.__doZoom = function(start, end) {
    var result = true;
    if (this.__scale == undefined) {
        result = false
    }
    var start = (this.__orientation == "h" ? start.x: start.y);
    var end = (this.__orientation == "h" ? end.x: end.y);
    var da = this.__owner.__draw_area;
    if (da == undefined) {
        result = false
    }
    if (start == end) {
        result = false
    }
    if (result) {
        switch (start > end) {
        case true:
            this.__resetZoom();
            break;
        case false:
            var old_ticks = this.__ticks.slice();
            var old_min = this.__current_min;
            var old_max = this.__current_max;
            this.__current_min = this.__doPx2Pt((this.__orientation == "h" ? start + da.left: end));
            this.__current_max = this.__doPx2Pt((this.__orientation == "h" ? end: start + da.top));
            if (this.__current_min < this.__min_extreme) {
                this.__current_min = this.__min_extreme
            }
            if (this.__current_max > this.__max_extreme) {
                this.__current_max = this.__max_extreme
            }
            if (this.__current_min == this.__min_extreme && this.__current_max == this.__max_extreme && this.__current_min == old_min && this.__current_max == old_max) {
                result = false
            }
            this.__generateTicks();
            for (var i = 0; i < this.__ticks.length; i++) {
                if (isNaN(this.__ticks[i].p)) {
                    this.__ticks = old_ticks.slice();
                    this.__current_min = old_min;
                    this.__current_max = old_max;
                    result = false;
                    break
                }
            }
            this.__calculateScale(false);
            break
        }
    }
    return result
};
___logarithmicaxis.__logX = function(point) {
    return m_LOG(point) / m_LOG(this.base)
};
___logarithmicaxis.__doCalculateScale = function(calculatePadding, generateTicks) {
    var area = this.__owner.__draw_area;
    this.__log_min = this.__logX(this.__current_min);
    this.__log_max = this.__logX(this.__current_max);
    var dimension = (this.__orientation == "h" ? area.width: area.height);
    this.__scale = (this.__log_max - this.__log_min) / dimension
};
___logarithmicaxis.__doGetZeroPlaneCoordinate = function() {
    if (this.zero_plane.coordinate != undefined && this.zero_plane.coordinate > 0) {
        return this.zero_plane.coordinate
    } else {
        return m_POW(this.base, m_FLOOR(this.__log_min))
    }
};
___logarithmicaxis.__doGenerateTicks = function() {
    var ticks = [];
    var current_tick = m_FLOOR(this.__log_min);
    var current_tick_value, minor_inc, minor_tick, minor_tick_value;
    while (current_tick <= this.__log_max + 1) {
        current_tick_value = m_POW(this.base, current_tick);
        if (current_tick_value >= this.__current_min && current_tick_value <= this.__current_max) {
            ticks.push({
                p: current_tick,
                l: m_POW(this.base, current_tick),
                minor: false
            })
        }
        if (this.minor_ticks.show == true) {
            minor_inc = m_POW(this.base, current_tick) / this.base;
            minor_tick_value = minor_inc * 2;
            minor_tick = this.__logX(minor_tick_value);
            while (minor_tick_value < m_POW(this.base, current_tick)) {
                if (minor_tick >= this.__log_min && minor_tick <= this.__log_max) {
                    ticks.push({
                        p: minor_tick,
                        l: minor_tick_value,
                        minor: true
                    })
                }
                minor_tick_value = minor_tick_value + minor_inc;
                minor_tick = this.__logX(minor_tick_value)
            }
        }
        current_tick++
    }
    this.__ticks = ticks.slice();
    return true
};
___logarithmicaxis.__doDraw = function(ctx) {
    this.__doDraw = this["__doDraw_" + this.__orientation];
    this.__doDraw(ctx)
};
___logarithmicaxis.__initTicks = function() {
    var i;
    var ticks = this.__ticks;
    var tick_count = 0;
    for (i = 0; i < ticks.length; i++) {
        if (!ticks[i].minor) {
            tick_count++
        }
    }
    if (tick_count > this.__el_labels.childNodes.length) {
        for (i = this.__el_labels.childNodes.length; i <= tick_count; i++) {
            this.__el_labels.appendChild(EJSC.utility.__createDOMArray(["span", {
                className: "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
            }]))
        }
    } else if (tick_count < this.__el_labels.childNodes.length) {
        for (i = this.__el_labels.childNodes.length - 1; i >= tick_count; i--) {
            this.__el_labels.childNodes[i].className = "ejsc-" + this.__orientation + "-label ejsc-invisible" + (this.label_class != undefined ? " " + this.label_class: "")
        }
    }
};
___logarithmicaxis.__doDraw_v = function(ctx) {
    var area = this.__owner.__draw_area;
    var ticks = this.__ticks;
    var tick_adj, tick_size, inc, i, j, y;
    this.__adjustLabelContainer_v(area);
    this.__adjustCaptionPosition_v(area);
    this.__drawBorder_v(area, ctx);
    var scale = this.__scale;
    if (scale == undefined || scale == 0 || isNaN(scale)) {
        this.__calculateScale(true, true);
        scale = this.__scale;
        if (scale == undefined || scale == 0 || isNaN(scale)) {
            this.__initTicks();
            return false
        }
    }
    this.__initTicks();
    if (ticks.length == 0) {
        return
    }
    if (this.grid.show == true) {
        ctx.beginPath();
        ctx.lineWidth = this.grid.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.grid.color, this.grid.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            if (ticks[i].minor) {
                continue
            }
            y = (area.height + area.top) - ((ticks[i].p - this.__log_min) / scale);
            if (this.__owner.axis_bottom.border.show == true && this.__owner.axis_bottom.visible == true && y == (area.height + area.top)) {
                continue
            }
            if (this.__owner.axis_top.border.show == true && this.__owner.axis_top.visible == true && y == (area.top)) {
                continue
            }
            ctx.moveTo(area.left, y);
            ctx.lineTo(area.left + area.width, y)
        }
        ctx.stroke()
    }
    if (!this.visible) {
        return
    }
    if (this.major_ticks.show == true) {
        if (this.__side == "left") {
            tick_adj = this.major_ticks.offset;
            tick_size = -this.major_ticks.size
        } else {
            tick_adj = -this.major_ticks.offset;
            tick_size = this.major_ticks.size
        }
        ctx.beginPath();
        ctx.lineWidth = this.major_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.major_ticks.color == undefined ? this.color: this.major_ticks.color, this.major_ticks.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            if (ticks[i].minor) {
                continue
            }
            y = (area.height + area.top) - ((ticks[i].p - this.__log_min) / scale);
            ctx.moveTo(area[this.__side] + tick_adj, y);
            ctx.lineTo(area[this.__side] + tick_size + tick_adj, y)
        }
        ctx.stroke()
    }
    if (this.minor_ticks.show == true) {
        tick_size = this.minor_ticks.size;
        if (typeof(tick_size) == "number") {
            tick_size = tick_size.toString()
        }
        if (tick_size.indexOf("%") == -1) {
            tick_size = parseFloat(tick_size)
        } else {
            tick_size = area.width * (parseFloat(tick_size.replace("%", "")) / 100)
        }
        if (this.__side == "left") {
            tick_adj = -this.minor_ticks.offset;
            tick_size = tick_size
        } else {
            tick_adj = this.minor_ticks.offset;
            tick_size = -tick_size
        }
        ctx.beginPath();
        ctx.lineWidth = this.minor_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.minor_ticks.color == undefined ? this.color: this.minor_ticks.color, this.minor_ticks.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            if (!ticks[i].minor) {
                continue
            }
            y = (area.height + area.top) - ((ticks[i].p - this.__log_min) / scale);
            ctx.moveTo(area[this.__side] + tick_adj, y);
            ctx.lineTo(area[this.__side] + tick_size + tick_adj, y)
        }
        ctx.stroke()
    }
    var current_tick = 0;
    for (i = 0; i < ticks.length; i++) {
        if (ticks[i].minor) {
            continue
        }
        this.__el_labels.childNodes[current_tick].className = "ejsc-" + this.__orientation + "-label";
        this.__el_labels.childNodes[current_tick].innerHTML = ticks[i].l;
        this.__el_labels.childNodes[current_tick].style.top = m_FLOOR(area.height - ((ticks[i].p - this.__log_min) / scale) - (this.__el_labels.childNodes[current_tick].offsetHeight / 2)) + "px";
        this.__el_labels.childNodes[current_tick].style[this.__side == "left" ? "right": "left"] = (this.major_ticks.size - this.major_ticks.offset) + 2 + "px";
        current_tick++
    }
};
___logarithmicaxis.__doDraw_h = function(ctx) {
    var area = this.__owner.__draw_area;
    var ticks = this.__ticks;
    var tick_adj, tick_size, inc, rows, tick_top, i, j, r, x;
    this.__adjustLabelContainer_h(area);
    this.__adjustCaptionPosition_h(area);
    this.__drawBorder_h(area, ctx);
    var scale = this.__scale;
    if (scale == undefined || scale == 0 || isNaN(scale)) {
        this.__calculateScale(true, true);
        scale = this.__scale;
        if (scale == undefined || scale == 0 || isNaN(scale)) {
            this.__initTicks();
            return false
        }
    }
    this.__initTicks();
    if (ticks.length == 0) {
        return
    }
    if (this.grid.show == true) {
        ctx.beginPath();
        ctx.lineWidth = this.grid.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.grid.color, this.grid.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            if (ticks[i].minor) {
                continue
            }
            x = ((ticks[i].p - this.__log_min) / scale) + area.left;
            if (this.__owner.axis_left.border.show == true && x == (area.left)) {
                continue
            }
            if (this.__owner.axis_right.border.show == true && x == (area.left + area.width)) {
                continue
            }
            ctx.moveTo(x, area.top + area.height);
            ctx.lineTo(x, area.top)
        }
        ctx.stroke()
    }
    if (!this.visible) {
        return
    }
    var current_tick = 0;
    for (i = 0; i < ticks.length; i++) {
        if (ticks[i].minor) {
            continue
        }
        this.__el_labels.childNodes[current_tick].className = "ejsc-" + this.__orientation + "-label";
        this.__el_labels.childNodes[current_tick].innerHTML = ticks[i].l;
        this.__el_labels.childNodes[current_tick].style.left = m_FLOOR(((ticks[i].p - this.__log_min) / scale) - (this.__el_labels.childNodes[current_tick].offsetWidth / 2)) + "px";
        if (this.stagger_ticks == true && this.__el_labels.childNodes[current_tick].offsetHeight < this.size) {
            ticks[i].t = m_FLOOR(this.size / this.__el_labels.childNodes[0].offsetHeight);
            if (ticks[i].t < 1) {
                ticks[i].t = 1
            }
            tick_top = (i % ticks[i].t * this.__el_labels.childNodes[current_tick].offsetHeight) + 4 + "px"
        } else {
            tick_top = (this.major_ticks.size - this.major_ticks.offset) + "px"
        }
        this.__el_labels.childNodes[current_tick].style[this.__side == "top" ? "bottom": "top"] = tick_top;
        current_tick++
    }
    if (this.major_ticks.show == true) {
        if (this.__side == "top") {
            tick_adj = this.major_ticks.offset;
            tick_size = -this.major_ticks.size
        } else {
            tick_adj = -this.major_ticks.offset;
            tick_size = this.major_ticks.size
        }
        ctx.beginPath();
        ctx.lineWidth = this.major_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.major_ticks.color == undefined ? this.color: this.major_ticks.color, this.major_ticks.opacity / 100).rgba;
        current_tick = 0;
        for (i = 0; i < ticks.length; i++) {
            if (ticks[i].minor) {
                continue
            }
            x = ((ticks[i].p - this.__log_min) / scale) + area.left;
            ctx.moveTo(x, area[this.__side] + tick_adj);
            if (this.stagger_ticks == true && this.__el_labels.childNodes[current_tick].offsetHeight < this.size) {
                tick_top = (i % ticks[i].t * this.__el_labels.childNodes[current_tick].offsetHeight);
                tick_top = (this.__side == "top" ? -tick_top: tick_top)
            } else {
                tick_top = 0
            }
            ctx.lineTo(x, area[this.__side] + tick_size + tick_adj + tick_top);
            current_tick++
        }
        ctx.stroke()
    }
    if (this.minor_ticks.show == true) {
        tick_size = this.minor_ticks.size;
        if (typeof(tick_size) == "number") {
            tick_size = tick_size.toString()
        }
        if (tick_size.indexOf("%") == -1) {
            tick_size = parseFloat(tick_size)
        } else {
            tick_size = area.height * (parseFloat(tick_size.replace("%", "")) / 100)
        }
        if (this.__side == "top") {
            tick_adj = -this.minor_ticks.offset;
            tick_size = tick_size
        } else {
            tick_adj = this.minor_ticks.offset;
            tick_size = -tick_size
        }
        ctx.beginPath();
        ctx.lineWidth = this.minor_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.minor_ticks.color == undefined ? this.color: this.minor_ticks.color, this.minor_ticks.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            if (!ticks[i].minor) {
                continue
            }
            x = ((ticks[i].p - this.__log_min) / scale) + area.left;
            ctx.moveTo(x, area[this.__side] + tick_adj);
            ctx.lineTo(x, area[this.__side] + tick_size + tick_adj)
        }
        ctx.stroke()
    }
};
var m_FLOOR = Math.floor;
EJSC.DateAxis = function(options) {
    this.__type = 'date';
    this.__increments = [{
        increment: '10Y',
        range: 1000 * 60 * 60 * 24 * 365 * 20
    },
    {
        increment: '5Y',
        range: 1000 * 60 * 60 * 24 * 365 * 10
    },
    {
        increment: '2Y',
        range: 1000 * 60 * 60 * 24 * 365 * 5
    },
    {
        increment: 'Y',
        range: 1000 * 60 * 60 * 24 * 365 * 2
    },
    {
        increment: '6M',
        range: 1000 * 60 * 60 * 24 * 365 * 1.5
    },
    {
        increment: '4M',
        range: 1000 * 60 * 60 * 24 * 400
    },
    {
        increment: '3M',
        range: 1000 * 60 * 60 * 24 * 180
    },
    {
        increment: 'M',
        range: 1000 * 60 * 60 * 24 * 100
    },
    {
        increment: '2W',
        range: 1000 * 60 * 60 * 24 * 50
    },
    {
        increment: 'W',
        range: 1000 * 60 * 60 * 24 * 20
    },
    {
        increment: '3D',
        range: 1000 * 60 * 60 * 24 * 8
    },
    {
        increment: 'D',
        range: 1000 * 60 * 60 * 24 * 2
    },
    {
        increment: '6H',
        range: 1000 * 60 * 60 * 24
    },
    {
        increment: '3H',
        range: 1000 * 60 * 60 * 12
    },
    {
        increment: 'H',
        range: 1000 * 60 * 60 * 4
    },
    {
        increment: '30N',
        range: 1000 * 60 * 60 * 2
    },
    {
        increment: '15N',
        range: 1000 * 60 * 60
    },
    {
        increment: '10N',
        range: 1000 * 60 * 30
    },
    {
        increment: '5N',
        range: 1000 * 60 * 15
    },
    {
        increment: 'N',
        range: 1000 * 60 * 5
    },
    {
        increment: '30S',
        range: 1000 * 60 * 2
    },
    {
        increment: '15S',
        range: 1000 * 60
    },
    {
        increment: '10S',
        range: 1000 * 30
    },
    {
        increment: '5S',
        range: 1000 * 10
    },
    {
        increment: 'S',
        range: 1000 * 5
    },
    {
        increment: '500Z',
        range: 1000
    },
    {
        increment: '250Z',
        range: 500
    },
    {
        increment: '100Z',
        range: 250
    },
    {
        increment: '50Z',
        range: 100
    },
    {
        increment: '25Z',
        range: 50
    },
    {
        increment: '10Z',
        range: 25
    },
    {
        increment: '5Z',
        range: 10
    },
    {
        increment: '2Z',
        range: 5
    },
    {
        increment: 'Z',
        range: 2
    }];
    if (options == undefined) var options = {};
    this.__options = options
};
EJSC.Axis.__extendTo(EJSC.DateAxis);
var ___dateaxis = EJSC.DateAxis.prototype;
___dateaxis.even_shading = undefined;
___dateaxis.odd_shading = undefined;
___dateaxis.__doPx2Pt = EJSC.LinearAxis.prototype.__doPx2Pt;
___dateaxis.__doPt2Px = EJSC.LinearAxis.prototype.__doPt2Px;
___dateaxis.__doMove = EJSC.LinearAxis.prototype.__doMove;
___dateaxis.__doResetZoom = EJSC.LinearAxis.prototype.__doResetZoom;
___dateaxis.__doZoom = EJSC.LinearAxis.prototype.__doZoom;
___dateaxis.drawShading = EJSC.LinearAxis.prototype.drawShading;
___dateaxis.__initTicks = EJSC.LinearAxis.prototype.__initTicks;
___dateaxis.__doDraw = EJSC.LinearAxis.prototype.__doDraw;
___dateaxis.__doCalculateScale = function(calculatePadding, generateTicks) {
    var area = this.__owner.__draw_area;
    if (area == undefined) {
        return false
    }
    var dimension = (this.__orientation == "h" ? area.width: area.height);
    var scale;
    if (dimension > 0) {
        scale = ((this.__current_max - this.__current_min) / dimension)
    } else {
        scale = 0
    }
    if (calculatePadding == true) {
        this.__min_extreme -= this.__padding.min * scale;
        this.__max_extreme += this.__padding.max * scale;
        this.__current_min = this.__min_extreme;
        this.__current_max = this.__max_extreme;
        if (dimension > 0) {
            scale = ((this.__current_max - this.__current_min) / dimension)
        } else {
            scale = 0
        }
    }
    this.__scale = scale;
    return true
};
___dateaxis.__init = function(owner, orientation, side) {
    this.__owner = owner;
    this.__orientation = orientation;
    this.__side = side;
    this.__padding = {
        min: 0,
        max: 0
    };
    this.__series = [];
    this.__ticks = [];
    this.__text_values = new EJSC.__TextLabels();
    this.border = {
        thickness: 1,
        color: undefined,
        opacity: 100,
        show: undefined
    };
    this.major_ticks = {
        thickness: 1,
        size: 4,
        color: undefined,
        opacity: 100,
        show: true,
        increment: undefined,
        offset: 0
    };
    this.minor_ticks = {
        thickness: 1,
        size: 4,
        color: "#000",
        opacity: 20,
        show: false,
        count: undefined,
        offset: 0
    };
    this.grid = {
        thickness: 1,
        color: "rgb(230,230,230)",
        opacity: 100,
        show: true
    };
    this.zero_plane = {
        show: false,
        color: "#000",
        opacity: 100,
        thickness: 1,
        coordinate: 0
    };
    this.background = {
        color: "#fff",
        opacity: 0,
        includeTitle: false
    };
    this.crosshair = {
        show: false,
        color: "#F00"
    };
    this.cursor_position = {
        show: false,
        color: "#F00",
        textColor: "#FFF",
        formatter: undefined,
        caption: undefined,
        className: undefined
    };
    this.padding = undefined;
    this.formatter = new EJSC.DateFormatter({
        format_string: 'auto'
    });
    this.__copyOptions(this.__options.__chart_options);
    this.__copyOptions(this.__options);
    if (this.min_extreme != undefined) {
        this.__forced_min_extreme = this.min_extreme
    }
    if (this.max_extreme != undefined) {
        this.__forced_max_extreme = this.max_extreme
    }
    switch (this.__orientation) {
    case "h":
        if (this.__side.match(/^(top|bottom)$/) == null) {
            console.log("EJSChart: Invalid axis orientation/side combination: " + this.__orientation + "/" + this.__side)
        } else {
            if (this.size == undefined) this.size = 20
        }
        break;
    case "v":
        if (this.__side.match(/^(left|right)$/) == null) {
            console.log("EJSChart: Invalid axis orientation/side combination: " + this.__orientation + "/" + this.__side)
        } else {
            if (this.size == undefined) this.size = 50
        }
        break;
    default:
        console.log("EJSChart: Invalid axis orientation: " + this.__orientation)
    }
};
___dateaxis.__decrementDate = function(d, increment) {
    var inc = increment.match(/[0-9]?[0-9]/);
    if (inc !== null) inc = parseFloat(inc[0]);
    else inc = 1;
    var met = increment.match(/[YMWDHNSZ]/)[0];
    for (var i = 0; i < inc; i++) {
        switch (met) {
        case 'Y':
            var y = d.getUTCFullYear() - 1;
            d = new Date(Date.UTC(y, 0, 1, 0, 0, 0, 0));
            break;
        case 'M':
            var y = d.getUTCFullYear();
            var m = d.getUTCMonth() - 1;
            if (m <= -1) {
                y--;
                m += 12
            }
            d = new Date(Date.UTC(y, m, 1, 0, 0, 0, 0));
            break;
        case 'W':
            d = new Date(d.getTime() - 1000 * 60 * 60 * 24 * 7);
            break;
        case 'D':
            d = new Date(d.getTime() - 1000 * 60 * 60 * 24);
            break;
        case 'H':
            d = new Date(d.getTime() - 1000 * 60 * 60);
            break;
        case 'N':
            d = new Date(d.getTime() - 1000 * 60);
            break;
        case 'S':
            d = new Date(d.getTime() - 1000);
            break;
        case 'Z':
            d = new Date(d.getTime() - 1);
            break
        }
    }
    return d
};
___dateaxis.__incrementDate = function(d, increment) {
    var inc = increment.match(/[0-9]?[0-9]/);
    if (inc !== null) inc = parseFloat(inc[0]);
    else inc = 1;
    var met = increment.match(/[YMWDHNSZ]/)[0];
    for (var i = 0; i < inc; i++) {
        switch (met) {
        case 'Y':
            var y = d.getUTCFullYear() + 1;
            d = new Date(Date.UTC(y, 0, 1, 0, 0, 0, 0));
            break;
        case 'M':
            var y = d.getUTCFullYear();
            var m = d.getUTCMonth() + 1;
            if (m >= 12) {
                y++;
                m -= 12
            }
            d = new Date(Date.UTC(y, m, 1, 0, 0, 0, 0));
            break;
        case 'W':
            d = new Date(d.getTime() + 1000 * 60 * 60 * 24 * 7);
            break;
        case 'D':
            d = new Date(d.getTime() + 1000 * 60 * 60 * 24);
            break;
        case 'H':
            d = new Date(d.getTime() + 1000 * 60 * 60);
            break;
        case 'N':
            d = new Date(d.getTime() + 1000 * 60);
            break;
        case 'S':
            d = new Date(d.getTime() + 1000);
            break;
        case 'Z':
            d = new Date(d.getTime() + 1);
            break
        }
    }
    return d
};
___dateaxis.__doFindIncrement = function() {
    var range = this.__current_max - this.__current_min;
    var increments = this.__increments;
    var increment = this.major_ticks.increment;
    if (this.major_ticks.increment !== undefined) {
        for (var i = 0; i < increments.length; i++) {
            if (increments[i].increment == this.major_ticks.increment) {
                increment = increments[i].increment;
                break
            }
        }
        if (increment == undefined) return false
    }
    if (increment == undefined) {
        var i = 0;
        while (range < increments[i].range) i++;
        increment = increments[i].increment
    }
    return increment
};
___dateaxis.__doFindMinorIncrement = function(increment) {
    var inc = increment.match(/[0-9]?[0-9]/);
    if (inc !== null) inc = parseFloat(inc[0]);
    else inc = 1;
    var met = increment.match(/[YMWDHNSZ]/)[0];
    if (inc == 1 || inc == '1') {
        switch (met) {
        case 'Y':
            return '3M';
            break;
        case 'M':
            return 'W';
            break;
        case 'W':
            return 'D';
            break;
        case 'D':
            return '6H';
            break;
        case 'H':
            return '15N';
            break;
        case 'N':
            return '15S';
            break;
        case 'S':
            return '250Z';
            break;
        case 'Z':
            return undefined;
            break
        }
    } else {
        return met
    }
};
___dateaxis.__doFindMinTick = function(increment) {
    var d = new Date(this.__current_min);
    var met = increment.match(/[YMWDHNSZ]/)[0];
    switch (met) {
    case 'Y':
        var d = new Date(Date.UTC(d.getUTCFullYear(), 0, 1, 0, 0, 0, 0));
        break;
    case 'M':
    case 'W':
        var d = new Date(Date.UTC(d.getUTCFullYear(), 0, 1, 0, 0, 0, 0));
        break;
    case 'D':
        var d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1, 0, 0, 0, 0));
        break;
    case 'H':
        var d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0, 0));
        break;
    case 'N':
        var d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), 0, 0, 0));
        break;
    case 'S':
        var d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), 0, 0));
        break;
    case 'Z':
        var d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), 0));
        break
    }
    while (d < this.__current_min) {
        d = this.__incrementDate(d, increment)
    }
    return d
};
___dateaxis.__doGenerateTicks = function() {
    var range = this.__current_max - this.__current_min;
    if (isNaN(range)) return false;
    var increment = this.__doFindIncrement();
    if (increment == undefined || increment.replace(/[0-9]?[0-9]?[YMWDHNSZ]/, '')) return false;
    var ticks = [];
    var d = this.__doFindMinTick(increment);
    var min_tick = d,
    max_tick = d;
    while (cur_tick <= this.__current_max) max_tick = this.__incrementDate(max_tick, increment);
    if ((this.extremes_ticks == true) && (this.__text_values.__count() == 0) && (this.__forced_min_extreme == undefined) && (this.__forced_max_extreme == undefined) && (this.__current_min == this.__min_extreme) && (this.__current_max == this.__max_extreme)) {
        while (this.__data_extremes.min_extreme < min_tick) min_tick = this.__decrementDate(min_tick, increment);
        while (this.__data_extremes.max_extreme > max_tick) max_tick = this.__incrementDate(max_tick, increment);
        this.__current_min = min_tick.getTime();
        this.__min_extreme = min_tick.getTime();
        this.__current_max = max_tick.getTime();
        this.__max_extreme = max_tick.getTime();
        this.__calculateScale(false, false)
    }
    var reset_format_string = false;
    if (this.formatter.format_string == 'auto') {
        reset_format_string = true;
        this.formatter.format_string = this.__getFormatString(increment)
    }
    var cur_tick = min_tick;
    while (cur_tick <= this.__current_max) {
        ticks.push({
            p: cur_tick.getTime(),
            l: this.__getLabel(cur_tick.getTime())
        });
        cur_tick = this.__incrementDate(cur_tick, increment)
    }
    if (reset_format_string) this.formatter.format_string = 'auto';
    this.__ticks = ticks.slice();
    return true
};
___dateaxis.__getFormatString = function(increment) {
    var met = increment.match(/[YMWDHNSZ]/)[0];
    switch (met) {
    case 'Y':
        return 'YYYY';
        break;
    case 'M':
        return 'MMM';
        break;
    case 'W':
        return 'D';
        break;
    case 'D':
        return 'D';
        break;
    case 'H':
        return 'HH:NN';
        break;
    case 'N':
        return 'HH:NN';
        break;
    case 'S':
        return 'HH:NN:SS';
        break;
    case 'Z':
        return 'HH:NN:SS.ZZZ';
        break
    }
};
___dateaxis.__doDraw_v = function(ctx) {
    var area = this.__owner.__draw_area;
    var ticks = this.__ticks;
    var tick_adj, tick_size, i, j, y;
    this.__adjustLabelContainer_v(area);
    this.__adjustCaptionPosition_v(area);
    this.__drawBorder_v(area, ctx);
    var scale = this.__scale;
    if (scale == undefined || scale == 0 || isNaN(scale)) {
        this.__calculateScale(true, true);
        scale = this.__scale;
        if (scale == undefined || scale == 0 || isNaN(scale)) {
            return false
        }
    }
    this.__initTicks();
    if (ticks.length == 0) {
        return
    }
    this.drawShading(ctx);
    if (this.grid.show == true) {
        ctx.beginPath();
        ctx.lineWidth = this.grid.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.grid.color, this.grid.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            y = (area.height + area.top) - ((ticks[i].p - this.__current_min) / scale);
            if (this.__owner.axis_bottom.border.show == true && this.__owner.axis_bottom.visible == true && y == (area.height + area.top)) {
                continue
            }
            if (this.__owner.axis_top.border.show == true && this.__owner.axis_top.visible == true && y == (area.top)) {
                continue
            }
            ctx.moveTo(area.left, y);
            ctx.lineTo(area.left + area.width, y)
        }
        ctx.stroke()
    }
    if (!this.visible) {
        return
    }
    for (i = 0; i < ticks.length; i++) {
        this.__el_labels.childNodes[i].className = "ejsc-" + this.__orientation + "-label" + (this.label_class != undefined ? " " + this.label_class: "");
        this.__el_labels.childNodes[i].innerHTML = ticks[i].l;
        this.__el_labels.childNodes[i].style.top = m_FLOOR(area.height - ((ticks[i].p - this.__current_min) / scale) - (this.__el_labels.childNodes[i].offsetHeight / 2)) + "px";
        this.__el_labels.childNodes[i].style[this.__side == "left" ? "right": "left"] = (this.major_ticks.size - this.major_ticks.offset) + 2 + "px"
    }
    if (this.major_ticks.show == true) {
        if (this.__side == "left") {
            tick_adj = this.major_ticks.offset;
            tick_size = -this.major_ticks.size
        } else {
            tick_adj = -this.major_ticks.offset;
            tick_size = this.major_ticks.size
        }
        ctx.beginPath();
        ctx.lineWidth = this.major_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.major_ticks.color == undefined ? this.color: this.major_ticks.color, this.major_ticks.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            y = (area.height + area.top) - ((ticks[i].p - this.__current_min) / scale);
            ctx.moveTo(area[this.__side] + tick_adj, y);
            ctx.lineTo(area[this.__side] + tick_size + tick_adj, y)
        }
        ctx.stroke()
    }
    if (this.minor_ticks.show == true && this.__text_values.__count() == 0) {
        ctx.beginPath();
        ctx.lineWidth = this.minor_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.minor_ticks.color == undefined ? this.color: this.minor_ticks.color, this.minor_ticks.opacity / 100).rgba;
        var increment = this.__doFindIncrement();
        var d1 = this.__decrementDate(this.__doFindMinTick(increment), increment);
        var d2 = this.__doFindMinTick(increment);
        var c = this.minor_ticks.count;
        var s, i, y;
        while (d1 < this.__current_max) {
            if (c == undefined) {
                s = this.__doFindMinorIncrement(increment);
                i = d1;
                while (this.__incrementDate(i, s) < d2) {
                    i = this.__incrementDate(i, s);
                    if (i.getTime() < this.__current_min || i.getTime() > this.__current_max) continue;
                    y = ((i.getTime() - this.__current_min) / scale) + area.left;
                    ctx.moveTo(area.left + area.width, y);
                    ctx.lineTo(area.left, y)
                }
            } else {
                s = (d2 - d1) / (c + 1);
                for (i = 0; i < c; i++) {
                    y = d1.getTime() + (s * (i + 1));
                    if (y < this.__current_min || y > this.__current_max) continue;
                    y = ((y - this.__current_min) / scale) + area.left;
                    ctx.moveTo(area.left + area.width, y);
                    ctx.lineTo(area.left, y)
                }
            }
            d1 = this.__incrementDate(d1, increment);
            d2 = this.__incrementDate(d2, increment)
        }
        ctx.stroke()
    }
};
___dateaxis.__doDraw_h = function(ctx) {
    var area = this.__owner.__draw_area;
    var ticks = this.__ticks;
    var tick_adj, tick_size, tick_top, i, j, r, x;
    this.__adjustLabelContainer_h(area);
    this.__adjustCaptionPosition_h(area);
    this.__drawBorder_h(area, ctx);
    var scale = this.__scale;
    if (scale == undefined || scale == 0 || isNaN(scale)) {
        this.__calculateScale(true, true);
        scale = this.__scale;
        if (scale == undefined || scale == 0 || isNaN(scale)) {
            return false
        }
    }
    this.__initTicks();
    if (ticks.length == 0) {
        return
    }
    this.drawShading(ctx);
    if (this.grid.show == true) {
        ctx.beginPath();
        ctx.lineWidth = this.grid.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.grid.color, this.grid.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            x = ((ticks[i].p - this.__current_min) / scale) + area.left;
            if (this.__owner.axis_left.border.show == true && x == (area.left)) {
                continue
            }
            if (this.__owner.axis_right.border.show == true && x == (area.left + area.width)) {
                continue
            }
            ctx.moveTo(x, area.top + area.height);
            ctx.lineTo(x, area.top)
        }
        ctx.stroke()
    }
    if (!this.visible) {
        return
    }
    for (i = 0; i < ticks.length; i++) {
        this.__el_labels.childNodes[i].className = "ejsc-" + this.__orientation + "-label" + (this.label_class != undefined ? " " + this.label_class: "");
        this.__el_labels.childNodes[i].innerHTML = ticks[i].l;
        this.__el_labels.childNodes[i].style.left = m_FLOOR(((ticks[i].p - this.__current_min) / scale) - (this.__el_labels.childNodes[i].offsetWidth / 2)) + "px";
        if (this.stagger_ticks == true && this.__el_labels.childNodes[i].offsetHeight < this.size) {
            ticks[i].t = m_FLOOR(this.size / this.__el_labels.childNodes[0].offsetHeight);
            if (ticks[i].t < 1) {
                ticks[i].t = 1
            }
            tick_top = (i % ticks[i].t * this.__el_labels.childNodes[i].offsetHeight) + 4 + "px"
        } else {
            tick_top = (this.major_ticks.size - this.major_ticks.offset) + "px"
        }
        this.__el_labels.childNodes[i].style[this.__side == "top" ? "bottom": "top"] = tick_top
    }
    if (this.major_ticks.show == true) {
        if (this.__side == "top") {
            tick_adj = this.major_ticks.offset;
            tick_size = -this.major_ticks.size
        } else {
            tick_adj = -this.major_ticks.offset;
            tick_size = this.major_ticks.size
        }
        ctx.beginPath();
        ctx.lineWidth = this.major_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.major_ticks.color == undefined ? this.color: this.major_ticks.color, this.major_ticks.opacity / 100).rgba;
        for (i = 0; i < ticks.length; i++) {
            x = ((ticks[i].p - this.__current_min) / scale) + area.left;
            ctx.moveTo(x, area[this.__side] + tick_adj);
            if (this.stagger_ticks == true && this.__el_labels.childNodes[i].offsetHeight < this.size) {
                tick_top = (i % ticks[i].t * this.__el_labels.childNodes[i].offsetHeight);
                tick_top = (this.__side == "top" ? -tick_top: tick_top)
            } else {
                tick_top = 0
            }
            ctx.lineTo(x, area[this.__side] + tick_size + tick_adj + tick_top)
        }
        ctx.stroke()
    }
    if (this.minor_ticks.show == true && this.__text_values.__count() == 0) {
        ctx.beginPath();
        ctx.lineWidth = this.minor_ticks.thickness;
        ctx.strokeStyle = EJSC.utility.__getColor(this.minor_ticks.color == undefined ? this.color: this.minor_ticks.color, this.minor_ticks.opacity / 100).rgba;
        var increment = this.__doFindIncrement();
        var d1 = this.__decrementDate(this.__doFindMinTick(increment), increment);
        var d2 = this.__doFindMinTick(increment);
        var c = this.minor_ticks.count;
        var s, i, x;
        while (d1 < this.__current_max) {
            if (c == undefined) {
                s = this.__doFindMinorIncrement(increment);
                i = d1;
                while (this.__incrementDate(i, s) < d2) {
                    i = this.__incrementDate(i, s);
                    if (i.getTime() < this.__current_min || i.getTime() > this.__current_max) continue;
                    x = ((i.getTime() - this.__current_min) / scale) + area.left;
                    ctx.moveTo(x, area.top + area.height);
                    ctx.lineTo(x, area.top)
                }
            } else {
                s = (d2 - d1) / (c + 1);
                for (i = 0; i < c; i++) {
                    x = d1.getTime() + (s * (i + 1));
                    if (x < this.__current_min || x > this.__current_max) continue;
                    x = ((x - this.__current_min) / scale) + area.left;
                    ctx.moveTo(x, area.top + area.height);
                    ctx.lineTo(x, area.top)
                }
            }
            d1 = this.__incrementDate(d1, increment);
            d2 = this.__incrementDate(d2, increment)
        }
        ctx.stroke()
    }
};
EJSC.NumberFormatter = function(options) {
    this.__type = "number";
    this.decimal_separator = ".";
    this.thousand_separator = ",";
    this.currency_symbol = "";
    this.currency_position = "inner";
    this.currency_align = "left";
    this.negative_symbol = "-";
    this.forced_decimals = undefined;
    this.variable_decimals = undefined;
    this.__copyOptions(options)
};
EJSC.Formatter.__extendTo(EJSC.NumberFormatter);
var __numberFormatter = EJSC.NumberFormatter.prototype;
__numberFormatter.format = function(value) {
    if (value === null || value === undefined) return value;
    var is_currency = ((this.currency_symbol == '') ? false: true);
    var is_negative = (value < 0);
    value = Math.abs(value);
    if (this.variable_decimals != undefined) {
        var pow = m_POW(10, this.variable_decimals);
        value = m_ROUND(value * pow) / pow
    }
    value = '' + value;
    var is_whole = (value == m_ROUND(value));
    if (is_whole == true) {
        var whole_number = value;
        var decimal_number = ''
    } else {
        var whole_number = value.substr(0, value.indexOf('.'));
        var decimal_number = value.substr(value.indexOf('.') + 1, value.length)
    }
    if (this.forced_decimals != undefined) {
        while (decimal_number.length < this.forced_decimals) decimal_number += '0'
    }
    decimal_number_altered = decimal_number;
    if (whole_number.length > 3) {
        var num_of_thousands = m_FLOOR(whole_number.length / 3);
        var whole_number_altered = '';
        for (var i = 0; i < num_of_thousands; i++) whole_number_altered = this.thousand_separator + whole_number.substr(whole_number.length - (3 * (i + 1)), 3) + whole_number_altered;
        whole_number_altered = whole_number.substr(0, whole_number.length - (3 * i)) + whole_number_altered;
        if (whole_number_altered.substr(0, this.thousand_separator.length) == this.thousand_separator) whole_number_altered = whole_number_altered.substr(this.thousand_separator.length, whole_number_altered.length)
    } else {
        var whole_number_altered = whole_number
    }
    if (this.currency_position == 'inner' && is_currency) {
        if (this.currency_align == 'left') {
            whole_number_altered = this.currency_symbol + whole_number_altered
        } else {
            decimal_number_altered += this.currency_symbol
        }
    }
    if (is_negative == true) {
        if (this.negative_symbol == '-') {
            whole_number_altered = '-' + whole_number_altered
        } else {
            whole_number_altered = '(' + whole_number_altered;
            decimal_number_altered += ')'
        }
    }
    if (this.currency_position == 'outer' && is_currency) {
        if (this.currency_align == 'left') {
            whole_number_altered = this.currency_symbol + whole_number_altered
        } else {
            decimal_number_altered += this.currency_symbol
        }
    }
    var result = whole_number_altered + ((decimal_number_altered == "") ? "": this.decimal_separator) + decimal_number_altered;
    if (m_ABS(result) == 0) {
        result = result.replace(/[-()]/g, '')
    }
    return result
};
EJSC.StringFormatter = function(options) {
    this.__type = "string";
    this.prefix = undefined;
    this.append = undefined;
    this.onNeedsFormat = undefined;
    this.__copyOptions(options)
};
EJSC.Formatter.__extendTo(EJSC.StringFormatter);
var ___stringFormatter = EJSC.StringFormatter.prototype;
___stringFormatter.format = function(value) {
    if (this.onNeedsFormat != undefined) {
        value = this.onNeedsFormat(value, this)
    } else {
        if (this.prefix != undefined) {
            value = this.prefix + value
        }
        if (this.append != undefined) {
            value = value + this.append
        }
    }
    return value
};
EJSC.DateFormatter = function(options) {
    this.__type = "date";
    this.useUTC = true;
    this.timezoneOffset = undefined;
    this.__copyOptions(options)
};
EJSC.Formatter.__extendTo(EJSC.DateFormatter);
var __dateFormatter = EJSC.DateFormatter.prototype;
__dateFormatter.format = function(value) {
    if (this.useUTC) {
        var mydate = new Date(value + ((this.timezoneOffset != undefined) ? (this.timezoneOffset * 60000) : 0));
        var eFullYear = mydate.getUTCFullYear();
        var eYear = '' + mydate.getUTCFullYear();
        eYear = eYear.substr(eYear.length - 2, 2);
        var eLongMonth = EJSC.__months[mydate.getUTCMonth()];
        var eShortMonth = EJSC.__months[mydate.getUTCMonth()].substr(0, 3);
        var eFullMonth = '0' + (mydate.getUTCMonth() + 1);
        eFullMonth = eFullMonth.substr(eFullMonth.length - 2, 2);
        var eMonth = mydate.getUTCMonth() + 1;
        var eLongDay = EJSC.__days[mydate.getUTCDay()];
        var eShortDay = EJSC.__days[mydate.getUTCDay()].substr(0, 3);
        var eFullDate = '0' + mydate.getUTCDate();
        eFullDate = eFullDate.substr(eFullDate.length - 2, 2);
        var eDate = mydate.getUTCDate();
        var eFullMilHours = '0' + mydate.getUTCHours();
        eFullMilHours = eFullMilHours.substr(eFullMilHours.length - 2, 2);
        var eMilHours = mydate.getUTCHours();
        var eHours = mydate.getUTCHours();
        if (eHours > 12) eHours = eHours - 12;
        var eFullHours = '0' + eHours;
        eFullHours = eFullHours.substr(eFullHours.length - 2, 2);
        var eFullMinutes = '0' + mydate.getUTCMinutes();
        eFullMinutes = eFullMinutes.substr(eFullMinutes.length - 2, 2);
        var eMinutes = mydate.getUTCMinutes();
        var eFullSeconds = '0' + mydate.getUTCSeconds();
        eFullSeconds = eFullSeconds.substr(eFullSeconds.length - 2, 2);
        var eSeconds = mydate.getUTCSeconds();
        var eTripleMSecs = '00' + mydate.getUTCMilliseconds();
        eTripleMSecs = eTripleMSecs.substr(eTripleMSecs.length - 3, 3);
        var eDoubleMSecs = '0' + mydate.getUTCMilliseconds();
        eDoubleMSecs = eDoubleMSecs.substr(eDoubleMSecs.length - 2, 2);
        var eSingleMSecs = mydate.getUTCMilliseconds();
        var eFullBigAMPM = ((mydate.getUTCHours() > 11) ? 'PM': 'AM');
        var eBigAMPM = ((mydate.getUTCHours() > 11) ? 'P': 'A');
        var eFullSmallAMPM = ((mydate.getUTCHours() > 11) ? 'pm': 'am');
        var eSmallAMPM = ((mydate.getUTCHours() > 11) ? 'p': 'a')
    } else {
        var mydate = new Date(value);
        var eFullYear = mydate.getFullYear();
        var eYear = '' + mydate.getFullYear();
        eYear = eYear.substr(eYear.length - 2, 2);
        var eLongMonth = EJSC.__months[mydate.getMonth()];
        var eShortMonth = EJSC.__months[mydate.getMonth()].substr(0, 3);
        var eFullMonth = '0' + (mydate.getMonth() + 1);
        eFullMonth = eFullMonth.substr(eFullMonth.length - 2, 2);
        var eMonth = mydate.getMonth() + 1;
        var eLongDay = EJSC.__days[mydate.getDay()];
        var eShortDay = EJSC.__days[mydate.getDay()].substr(0, 3);
        var eFullDate = '0' + mydate.getDate();
        eFullDate = eFullDate.substr(eFullDate.length - 2, 2);
        var eDate = mydate.getDate();
        var eFullMilHours = '0' + mydate.getHours();
        eFullMilHours = eFullMilHours.substr(eFullMilHours.length - 2, 2);
        var eMilHours = mydate.getHours();
        var eHours = mydate.getHours();
        if (eHours > 12) eHours = eHours - 12;
        var eFullHours = '0' + eHours;
        eFullHours = eFullHours.substr(eFullHours.length - 2, 2);
        var eFullMinutes = '0' + mydate.getMinutes();
        eFullMinutes = eFullMinutes.substr(eFullMinutes.length - 2, 2);
        var eMinutes = mydate.getMinutes();
        var eFullSeconds = '0' + mydate.getSeconds();
        eFullSeconds = eFullSeconds.substr(eFullSeconds.length - 2, 2);
        var eSeconds = mydate.getSeconds();
        var eTripleMSecs = '00' + mydate.getMilliseconds();
        eTripleMSecs = eTripleMSecs.substr(eTripleMSecs.length - 3, 3);
        var eDoubleMSecs = '0' + mydate.getMilliseconds();
        eDoubleMSecs = eDoubleMSecs.substr(eDoubleMSecs.length - 2, 2);
        var eSingleMSecs = mydate.getMilliseconds();
        var eFullBigAMPM = ((mydate.getHours() > 11) ? 'PM': 'AM');
        var eBigAMPM = ((mydate.getHours() > 11) ? 'P': 'A');
        var eFullSmallAMPM = ((mydate.getHours() > 11) ? 'pm': 'am');
        var eSmallAMPM = ((mydate.getHours() > 11) ? 'p': 'a')
    }
    var format = this.format_string;
    format = format.replace(/YYYY/g, 'qBBBBp');
    format = format.replace(/YY/g, 'qBBp');
    format = format.replace(/MMMM/g, 'qCCCCp');
    format = format.replace(/MMM/g, 'qCCCp');
    format = format.replace(/MM/g, 'qCCp');
    format = format.replace(/M/g, 'qCp');
    format = format.replace(/DDDD/g, 'qEEEEp');
    format = format.replace(/DDD/g, 'qEEEp');
    format = format.replace(/DD/g, 'qEEp');
    format = format.replace(/D/g, 'qEp');
    format = format.replace(/HH/g, 'qFFp');
    format = format.replace(/H/g, 'qFp');
    format = format.replace(/hh/g, 'qGGp');
    format = format.replace(/h/g, 'qGp');
    format = format.replace(/NN/g, 'qIIp');
    format = format.replace(/N/g, 'qIp');
    format = format.replace(/SS/g, 'qJJp');
    format = format.replace(/S/g, 'qJp');
    format = format.replace(/ZZZ/g, 'qKKKp');
    format = format.replace(/ZZ/g, 'qKKp');
    format = format.replace(/Z/g, 'qKp');
    format = format.replace(/AA/g, 'qLLp');
    format = format.replace(/A/g, 'qLp');
    format = format.replace(/aa/g, 'qOOp');
    format = format.replace(/a/g, 'qOp');
    format = format.replace(/qBBBBp/g, eFullYear);
    format = format.replace(/qBBp/g, eYear);
    format = format.replace(/qCCCCp/g, eLongMonth);
    format = format.replace(/qCCCp/g, eShortMonth);
    format = format.replace(/qCCp/g, eFullMonth);
    format = format.replace(/qCp/g, eMonth);
    format = format.replace(/qEEEEp/g, eLongDay);
    format = format.replace(/qEEEp/g, eShortDay);
    format = format.replace(/qEEp/g, eFullDate);
    format = format.replace(/qEp/g, eDate);
    format = format.replace(/qFFp/g, eFullMilHours);
    format = format.replace(/qFp/g, eMilHours);
    format = format.replace(/qGGp/g, eFullHours);
    format = format.replace(/qGp/g, eHours);
    format = format.replace(/qIIp/g, eFullMinutes);
    format = format.replace(/qIp/g, eMinutes);
    format = format.replace(/qJJp/g, eFullSeconds);
    format = format.replace(/qJp/g, eSeconds);
    format = format.replace(/qKKKp/g, eTripleMSecs);
    format = format.replace(/qKKp/g, eDoubleMSecs);
    format = format.replace(/qKp/g, eSingleMSecs);
    format = format.replace(/qLLp/g, eFullBigAMPM);
    format = format.replace(/qLp/g, eBigAMPM);
    format = format.replace(/qOOp/g, eFullSmallAMPM);
    format = format.replace(/qOp/g, eSmallAMPM);
    return format
};
EJSC.XYPoint = function(x, y, label, data, owner) {
    this.__owner = owner;
    this.x = (x.__label == undefined ? x: x.__label);
    this.y = (y == null ? null: (y.__label == undefined ? parseFloat(y) : y.__label));
    this.__x_label = x;
    this.__y_label = y;
    this.label = label;
    this.userdata = data;
    this.__x = function() {
        if (this.__x_label.__label == undefined) {
            this.__x = function() {
                return this.x
            }
        } else {
            this.__x = function() {
                return this.__x_label.__index
            }
        }
        return this.__x()
    };
    this.__y = function() {
        if (this.y == null) {
            this.__y = function() {
                return null
            }
        } else if (this.__y_label.__label == undefined) {
            this.__y = function() {
                return this.y
            }
        } else {
            this.__y = function() {
                return this.__y_label.__index
            }
        }
        return this.__y()
    }
};
EJSC.Point.__extendTo(EJSC.XYPoint);
EJSC.BarPoint = function(x, y, label, data, owner, color, opacity, lineWidth, lineOpacity) {
    this.__owner = owner;
    this.x = (x.__label == undefined ? x: x.__label);
    this.y = (y == null || y == undefined ? undefined: (y.__label == undefined ? parseFloat(y) : y.__label));
    this.__x_label = x;
    this.__y_label = y;
    this.__x = function() {
        if (this.__x_label.__label == undefined) {
            this.__x = function() {
                return this.x
            }
        } else {
            this.__x = function() {
                return this.__x_label.__index
            }
        }
        return this.__x()
    };
    this.__y = function() {
        if (this.__y_label == undefined || this.__y_label.__label == undefined) {
            this.__y = function() {
                return this.y
            }
        } else {
            this.__y = function() {
                return this.__y_label.__index
            }
        }
        return this.__y()
    };
    this.userdata = data;
    this.label = label;
    this.__color = color;
    this.__opacity = opacity;
    this.__lineWidth = lineWidth;
    this.__lineOpacity = lineOpacity;
    if (((this.__owner.onBarNeedsColor != undefined) || this.__owner.useColorArray) && !this.__hasColor()) {
        var result = this.__owner.__getAvailableColor(this);
        if (typeof result == "string") {
            this.__color = result;
            this.__opacity = owner.opacity;
            this.__lineOpacity = owner.lineOpacity;
            this.__lineWidth = owner.lineWidth
        } else {
            this.__color = (result.color == undefined) ? owner.color: result.color;
            this.__opacity = (result.opacity == undefined) ? owner.opacity: result.opacity;
            this.__lineOpacity = (result.lineOpacity == undefined) ? owner.lineOpacity: result.lineOpacity;
            this.__lineWidth = (result.lineWidth == undefined) ? owner.lineWidth: result.lineWidth
        }
    }
    this.__rangeIndex = undefined
};
EJSC.XYPoint.prototype.__extendTo(EJSC.BarPoint);
EJSC.BarPoint.prototype.__hasColor = function() {
    return (this.__color != undefined) || (this.__opacity != undefined) || (this.__lineOpacity != undefined) || (this.__lineWidth != undefined)
};
EJSC.FloatingBarPoint = function(x, y, min, max, label, data, owner) {
    this.__owner = owner;
    this.x = (x.__label == undefined ? x: x.__label);
    this.y = (y.__label == undefined ? parseFloat(y) : y.__label);
    this.__x_label = x;
    this.__y_label = y;
    this.__x = function() {
        if (this.__x_label.__label == undefined) {
            this.__x = function() {
                return this.x
            }
        } else {
            this.__x = function() {
                return this.__x_label.__index
            }
        }
        return this.__x()
    };
    this.__y = function() {
        if (this.__y_label.__label == undefined) {
            this.__y = function() {
                return this.y
            }
        } else {
            this.__y = function() {
                return this.__y_label.__index
            }
        }
        return this.__y()
    };
    this.min = (min.__label == undefined ? parseFloat(min) : min.__label);
    this.__min_label = min;
    this.max = (max.__label == undefined ? parseFloat(max) : max.__label);
    this.__max_label = max;
    this.__min = function() {
        if (this.__min_label.__label == undefined) {
            this.__min = function() {
                return this.min
            }
        } else {
            this.__min = function() {
                return this.__min_label.__index
            }
        }
        return this.__min()
    };
    this.__max = function() {
        if (this.__max_label.__label == undefined) {
            this.__max = function() {
                return this.max
            }
        } else {
            this.__max = function() {
                return this.__max_label.__index
            }
        }
        return this.__max()
    };
    this.userdata = data;
    this.label = label;
    if (((this.__owner.onBarNeedsColor != undefined) || this.__owner.useColorArray) && !this.__hasColor()) {
        var result = this.__owner.__getAvailableColor(this);
        if (typeof result == "string") {
            this.__color = result;
            this.__opacity = owner.opacity;
            this.__lineOpacity = owner.lineOpacity;
            this.__lineWidth = owner.lineWidth
        } else {
            this.__color = (result.color == undefined) ? owner.color: result.color;
            this.__opacity = (result.opacity == undefined) ? owner.opacity: result.opacity;
            this.__lineOpacity = (result.lineOpacity == undefined) ? owner.lineOpacity: result.lineOpacity;
            this.__lineWidth = (result.lineWidth == undefined) ? owner.lineWidth: result.lineWidth
        }
    } else {
        this.__color = undefined;
        this.__opacity = undefined;
        this.__lineOpacity = undefined;
        this.__lineWidth = undefined
    }
    this.__rangeIndex = undefined
};
EJSC.BarPoint.prototype.__extendTo(EJSC.FloatingBarPoint);
EJSC.PiePoint = function(x, label, data, owner) {
    this.__owner = owner;
    this.x = (x.__label == undefined ? parseFloat(x) : x.__label);
    this.__x_label = x;
    this.label = (label == undefined ? "": (label.__label == undefined ? label: label.__label));
    this.__x = function() {
        if (this.__x_label.__label == undefined) {
            this.__x = function() {
                return this.x
            }
        } else {
            this.__x = function() {
                return this.__x_label.__index
            }
        }
        return this.__x()
    };
    this.userdata = data;
    this.__color = this.__owner.__getAvailableColor(this)
};
EJSC.Point.__extendTo(EJSC.PiePoint);
EJSC.ErrorPoint = function(x, y, low, high, label, userdata, owner) {
    this.__owner = owner;
    this.x = (x.__label == undefined ? x: x.__label);
    this.__x_label = x;
    this.y = (y == null || y == undefined ? undefined: (y.__label == undefined ? parseFloat(y) : y.__label));
    this.__y_label = y;
    this.low = (low == null || low == undefined ? undefined: (low.__label == undefined ? parseFloat(low) : low.__label));
    this.high = (high == null || high == undefined ? undefined: (high.__label == undefined ? parseFloat(high) : high.__label));
    this.label = label;
    this.userdata = userdata;
    this.__x = function() {
        if (this.__x_label.__label == undefined) {
            this.__x = function() {
                return this.x
            }
        } else {
            this.__x = function() {
                return this.__x_label.__index
            }
        }
        return this.__x()
    };
    this.__y = function() {
        if (this.__y_label == undefined || this.__y_label.__label == undefined) {
            this.__y = function() {
                return this.y
            }
        } else {
            this.__y = function() {
                return this.__y_label.__index
            }
        }
        return this.__y()
    }
};
EJSC.Point.__extendTo(EJSC.ErrorPoint);
EJSC.GaugePoint = function(x, label, userdata, owner) {
    this.__owner = owner;
    this.x = x;
    this.label = label;
    this.userdata = userdata
};
EJSC.Point.__extendTo(EJSC.GaugePoint);
EJSC.StockPoint = function(x, high, low, open, close, label, userdata, owner) {
    this.__owner = owner;
    this.x = (x.__label == undefined ? x: x.__label);
    this.__x_label = x;
    this.high = (high.__label == undefined ? parseFloat(high) : high.__label);
    this.low = (low.__label == undefined ? parseFloat(low) : low.__label);
    this.open = (open.__label == undefined ? parseFloat(open) : open.__label);
    this.close = (close.__label == undefined ? parseFloat(close) : close.__label);
    this.y = (this.high + this.low) / 2;
    this.label = label;
    this.userdata = userdata;
    this.__x = function() {
        if (this.__x_label.__label == undefined) {
            this.__x = function() {
                return this.x
            }
        } else {
            this.__x = function() {
                return this.__x_label.__index
            }
        }
        return this.__x()
    };
    this.__y_label = this.y;
    this.__y = function() {
        return this.y
    }
};
EJSC.Point.__extendTo(EJSC.StockPoint);
EJSC.__CSVDataParser = {
    processCSV: function(csv) {
        this.__data = [];
        var points = csv.split(',');
        for (var i = 0; i < points.length; i++) {
            points[i] = points[i].split('|')
        }
        var point, p, prop, p1;
        if (this.__template == null) {
            return
        }
        for (p = 0; p < points.length; p++) {
            point = {};
            p1 = 0;
            for (prop in this.__template) {
                if (prop in Object.prototype) continue;
                point[prop] = points[p][p1++]
            }
            this.__data.push(point)
        }
        this.__dataAvailable()
    }
};
EJSC.Inheritable.__extendTo(EJSC.__CSVDataParser);
EJSC.__XMLDataParser = {
    processXML: function(xml, throwError) {
        var series_length = 0;
        var xml_type = 'unknown';
        try {
            series_length = xml.getElementsByTagName('plot').length;
            if (series_length > 0) {
                xml_type = 'full'
            } else {
                series_length = xml.getElementsByTagName('L').length;
                if (series_length > 0) {
                    if (xml.getElementsByTagName('L')[0].getAttribute('values') != null) {
                        xml_type = 'compact'
                    } else {
                        xml_type = 'short'
                    }
                } else {
                    if (throwError === true) {
                        throw "Unsupported XML File Format";
                    } else {
                        this.__showError("Unsupported XML File Format");
                        return
                    }
                }
            }
        } catch(e) {
            if (throwError === true) {
                throw "Invalid XML File";
            } else {
                this.__showError("Invalid XML File");
                return
            }
        }
        switch (xml_type) {
        case "full":
            var series = xml.getElementsByTagName('plot');
            var s;
            for (s = 0; s < series_length; s++) {
                this.processSeriesXML(xml_type, series[s]);
                if (s == 0) return
            }
            break;
        case "short":
            var series = xml.getElementsByTagName('L');
            var s;
            for (s = 0; s < series_length; s++) {
                this.processSeriesXML(xml_type, series[s]);
                if (s == 0) return
            }
            break;
        case "compact":
            var series = xml.getElementsByTagName('L');
            var s;
            for (s = 0; s < series_length; s++) {
                this.processSeriesXML(xml_type, series[s]);
                if (s == 0) return
            }
            break
        }
    },
    processSeriesXML: function(xmlType, xmlNode) {
        this.__data = [];
        switch (xmlType) {
        case "full":
            var points = xmlNode.getElementsByTagName('point');
            break;
        case "short":
            var points = xmlNode.getElementsByTagName('P');
            break;
        case "compact":
            this.processCSV(xmlNode.getAttribute('values'));
            return;
            break
        }
        var point, p, prop;
        if (this.__template == null) {
            return
        }
        for (p = 0; p < points.length; p++) {
            point = {};
            for (prop in this.__template) {
                if (prop in Object.prototype) continue;
                point[prop] = points[p].getAttribute(prop)
            }
            this.__data.push(point)
        }
        this.__dataAvailable()
    }
};
EJSC.__CSVDataParser.__extendTo(EJSC.__XMLDataParser);
EJSC.__JSONDataParser = {
    processJSON: function(json) {
        this.__data = [];
        var re1 = /^[\],:{}\s]*$/;
        var re2 = /\\["\\\/bfnrtu]/g;
        var re3 = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var re4 = /(?:^|:|,)(?:\s*\[)+/g;
        if (re1.test(json.replace(re2, "@").replace(re3, "]").replace(re4, ""))) {
            this.__data = eval('(' + json + ')')
        } else {
            this.__showError("Unsupported JSON Data");
            return
        }
        if (this.__data.length > 0) {
            this.__dataAvailable()
        }
    }
};
EJSC.Inheritable.__extendTo(EJSC.__JSONDataParser);
EJSC.__AjaxDataHandler = function() {};
EJSC.DataHandler.__extendTo(EJSC.__AjaxDataHandler);
var ___ajaxdatahandler = EJSC.__AjaxDataHandler.prototype;
___ajaxdatahandler.url = undefined;
___ajaxdatahandler.requestType = "GET";
___ajaxdatahandler.urlData = undefined;
___ajaxdatahandler.__doProcessData = undefined;
___ajaxdatahandler.onNeedsData = undefined;
___ajaxdatahandler.onDataReady = undefined;
___ajaxdatahandler.__doLoadData = function() {
    if (this.__loading || this.__loaded) return;
    this.__loading = true;
    if (this.onNeedsData != undefined) {
        var series = this.__owner != undefined ? this.__owner: null;
        var chart = (series != undefined && series.__getChart() != undefined) ? series.__getChart() : null;
        var r = this.onNeedsData(this, series, chart);
        if (r === true) {
            return
        } else if (r === false) {
            this.__loading = false;
            return
        } else {
            this.__doOnReadyStateChange(r, this)
        }
    } else {
        if (this.url == null || this.url == "") {
            this.__loading = false;
            return
        }
        var self = this;
        if (this.requestType == "GET") {
            EJSC.utility.XMLRequestPool.sendRequest(this.url + (this.urlData != null ? this.urlData: ""), self.__doOnReadyStateChange, null, this, this.__XMLRequestPoolError)
        } else if (this.requestType == "POST") {
            EJSC.utility.XMLRequestPool.sendRequest(this.url, self.__doOnReadyStateChange, (this.urlData == null ? "": this.urlData), this, this.__XMLRequestPoolError)
        } else {
            this.__loading = false;
            this.__showError("Undefined requestType: \"" + this.requestType + "\"")
        }
    }
    return null
};
___ajaxdatahandler.setXMLData = function(response) {
    this.__doOnReadyStateChange(response, this)
};
___ajaxdatahandler.getUrl = function() {
    return this.url
};
___ajaxdatahandler.setUrl = function(url, reload) {
    this.url = url;
    if (reload === true && this.__owner != undefined && this.__owner.__getChart() != undefined) {
        this.__loadData()
    }
};
___ajaxdatahandler.setRequestType = function(requestType, reload) {
    this.requestType = requestType;
    if (reload === true && this.__owner != undefined && this.__owner.__getChart() != undefined) {
        this.__loadData()
    }
};
___ajaxdatahandler.setUrlData = function(urlData, reload) {
    this.urlData = urlData;
    if (reload === true && this.__owner != undefined && this.__owner.__getChart() != undefined) {
        this.__loadData()
    }
};
___ajaxdatahandler.__doOnReadyStateChange = function(response, reference) {
    if (reference.__owner == undefined || reference.__owner.__getChart() == undefined) return;
    try {
        if (reference.onDataReady != undefined) {
            if (reference.onDataReady(response, this, reference.__owner, reference.__owner.__getChart()) == false) {
                return
            }
        }
        if (reference.__doProcessData != null) {
            reference.__loaded = reference.__doProcessData(response)
        }
    } catch(e) {} finally {
        reference.__loading = false
    }
};
___ajaxdatahandler.__XMLRequestPoolError = function(message, reference) {
    reference.__loading = false;
    reference.__showError(message)
};
EJSC.ArrayDataHandler = function(array, options) {
    this.__array = array;
    if (options != undefined) {
        this.__copyOptions(options)
    }
};
EJSC.DataHandler.__extendTo(EJSC.ArrayDataHandler);
var ___arraydatahandler = EJSC.ArrayDataHandler.prototype;
___arraydatahandler.getArray = function() {
    return this.__data
};
___arraydatahandler.setArray = function(data) {
    this.__array = data
};
___arraydatahandler.__doLoadData = function() {
    if (this.__loading) return;
    this.__loading = true;
    var points = this.__array.slice();
    var point, p, prop, p1;
    if (this.__template == null) {
        return
    }
    for (p = 0; p < points.length; p++) {
        point = {};
        p1 = 0;
        for (prop in this.__template) {
            if (prop in Object.prototype) continue;
            if (points[p].length > (p1)) {
                point[prop] = points[p][p1++]
            }
        }
        this.__data.push(point)
    }
    this.__dataAvailable();
    this.__loading = false;
    return true
};
EJSC.XMLStringDataHandler = function(xml, options) {
    this.__xml = xml;
    if (options != undefined) {
        this.__copyOptions(options)
    }
};
EJSC.__XMLDataParser.__extendTo(EJSC.XMLStringDataHandler);
EJSC.DataHandler.__extendTo(EJSC.XMLStringDataHandler);
var ___xmlstringdatahandler = EJSC.XMLStringDataHandler.prototype;
___xmlstringdatahandler.__createDocument = function() {
    if (window.DOMParser) {
        ___xmlstringdatahandler.__createDocument = function() {
            this.__xmlParser = new window.DOMParser();
            this.__createDocument = function() {
                return this.__xmlParser.parseFromString(this.__xml, "text/xml")
            };
            return this.__createDocument()
        }
    } else {
        ___xmlstringdatahandler.__createDocument = function() {
            this.__xmlParser = new ActiveXObject("Microsoft.XMLDOM");
            this.__xmlParser.async = false;
            this.__createDocument = function() {
                this.__xmlParser.loadXML(this.__xml);
                return this.__xmlParser
            };
            return this.__createDocument()
        }
    }
    this.__createDocument = ___xmlstringdatahandler.__createDocument;
    return this.__createDocument()
};
___xmlstringdatahandler.getXML = function() {
    return this.__xml
};
___xmlstringdatahandler.setXML = function(xml) {
    this.__xml = xml
};
___xmlstringdatahandler.__doLoadData = function() {
    if (this.__loading) return;
    this.__loading = true;
    var xmlContainer = this.__createDocument();
    this.processXML(xmlContainer);
    this.__loading = false;
    return true
};
EJSC.XMLDataHandler = function(url, options) {
    this.url = url;
    this.requestType = "GET";
    if (options != undefined) {
        this.__copyOptions(options)
    }
};
EJSC.__XMLDataParser.__extendTo(EJSC.XMLDataHandler);
EJSC.__AjaxDataHandler.prototype.__extendTo(EJSC.XMLDataHandler);
var ___xmldatahandler = EJSC.XMLDataHandler.prototype;
___xmldatahandler.__doProcessData = function(response) {
    try {
        this.processXML(response.responseXML, true)
    } catch(e) {
        this.__xml = response.responseText;
        this.processXML(this.__createDocument())
    }
    return true
};
___xmldatahandler.__createDocument = function() {
    if (window.DOMParser) {
        ___xmldatahandler.__createDocument = function() {
            this.__xmlParser = new window.DOMParser();
            this.__createDocument = function() {
                return this.__xmlParser.parseFromString(this.__xml, "text/xml")
            };
            return this.__createDocument()
        }
    } else {
        ___xmldatahandler.__createDocument = function() {
            this.__xmlParser = new ActiveXObject("Microsoft.XMLDOM");
            this.__xmlParser.async = false;
            this.__createDocument = function() {
                this.__xmlParser.loadXML(this.__xml);
                return this.__xmlParser
            };
            return this.__createDocument()
        }
    }
    this.__createDocument = ___xmldatahandler.__createDocument;
    return this.__createDocument()
};
EJSC.JSONStringDataHandler = function(json, options) {
    this.__json = json;
    if (options != undefined) {
        this.__copyOptions(options)
    }
};
EJSC.__JSONDataParser.__extendTo(EJSC.JSONStringDataHandler);
EJSC.DataHandler.__extendTo(EJSC.JSONStringDataHandler);
var ___jsonstringdatahandler = EJSC.JSONStringDataHandler.prototype;
___jsonstringdatahandler.getJSON = function() {
    return this.__json
};
___jsonstringdatahandler.setJSON = function(data) {
    this.__json = data
};
___jsonstringdatahandler.__doLoadData = function() {
    if (this.__loading) return;
    if (this.__owner.__getHasData()) return;
    this.__loading = true;
    var result = this.processJSON(this.__json);
    this.__loading = false;
    return result
};
EJSC.JSONFileDataHandler = function(url, options) {
    this.url = url;
    this.onBeforeProcessData = undefined;
    if (options != undefined) {
        this.__copyOptions(options)
    }
};
EJSC.__JSONDataParser.__extendTo(EJSC.JSONFileDataHandler);
EJSC.__AjaxDataHandler.prototype.__extendTo(EJSC.JSONFileDataHandler);
var ___jsonfiledatahandler = EJSC.JSONFileDataHandler.prototype;
___jsonfiledatahandler.__doProcessData = function(response) {
    var result = response.responseText;
    if (this.onBeforeProcessData != undefined) {
        result = this.onBeforeProcessData(result, this, this.__owner, this.__owner.__getChart())
    }
    if (result == false) {
        return false
    } else {
        return this.processJSON(response.responseText)
    }
};
EJSC.CSVStringDataHandler = function(csv, options) {
    this.__csv = csv;
    this.__data = [];
    this.__loading = false;
    this.onDataAvailable = null;
    this.__autoclear = true;
    if (options != undefined) {
        this.__copyOptions(options)
    }
};
EJSC.__CSVDataParser.__extendTo(EJSC.CSVStringDataHandler);
EJSC.DataHandler.__extendTo(EJSC.CSVStringDataHandler);
var ___csvstringdatahandler = EJSC.CSVStringDataHandler.prototype;
___csvstringdatahandler.getCSV = function() {
    return this.__csv
};
___csvstringdatahandler.setCSV = function(csv) {
    this.__csv = csv
};
___csvstringdatahandler.__doLoadData = function() {
    if (this.__loading) return;
    this.__loading = true;
    this.processCSV(this.__csv);
    this.__loading = false;
    return true
};
EJSC.CSVFileDataHandler = function(url, options) {
    this.url = url;
    this.requestType = "GET";
    this.urlData = null;
    if (options != undefined) {
        this.__copyOptions(options)
    }
};
EJSC.__CSVDataParser.__extendTo(EJSC.CSVFileDataHandler);
EJSC.__AjaxDataHandler.prototype.__extendTo(EJSC.CSVFileDataHandler);
var ___csvfiledatahandler = EJSC.CSVFileDataHandler.prototype;
___csvfiledatahandler.__doProcessData = function(response) {
    this.processCSV(response.responseText);
    return true
};
EJSC.LineSeries = function(dh, options) {
    this.__points = [];
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.__lineStyle = "solid";
    this.__padding = {
        x_min: undefined,
        x_max: undefined,
        y_min: undefined,
        y_max: undefined
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__type = "line";
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.__copyOptions(options);
    this.__doSetDataHandler(dh, false);
    var adj = 0;
    if (this.drawPoints) {
        adj = (this.pointSize + this.pointBorderSize);
        if (adj < this.lineWidth) {
            adj = this.lineWidth
        }
    } else {
        adj = this.lineWidth
    }
    this.__padding.x_min = this.__padding.x_min == undefined ? adj: this.__padding.x_min;
    this.__padding.x_max = this.__padding.x_max == undefined ? adj: this.__padding.x_max;
    this.__padding.y_min = this.__padding.y_min == undefined ? adj: this.__padding.y_min;
    this.__padding.y_max = this.__padding.y_max == undefined ? adj: this.__padding.y_max
};
EJSC.Series.__extendTo(EJSC.LineSeries);
var ___lineseries = EJSC.LineSeries.prototype;
___lineseries.drawPoints = false;
___lineseries.pointSize = undefined;
___lineseries.pointColor = undefined;
___lineseries.pointBorderSize = 0;
___lineseries.pointBorderColor = "rgb(255,255,255)";
___lineseries.__doOnDataAvailable = function(data) {
    if (data.length == 0) {
        this.__hasData = false;
        return
    }
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_string_values = x_axis.__text_values.__count() > 0 || x_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].x);
    var y_string_values = y_axis.__text_values.__count() > 0 || y_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].y);
    for (var i = 0; i < data.length; i++) {
        if (x_string_values) {
            data[i].x = x_axis.__text_values.__add(data[i].x)
        } else if (data[i].x === "") {
            if (i == 0) continue;
            data[i].x = data[i - 1].x;
            data[i].y = null
        } else {
            data[i].x = parseFloat(data[i].x)
        }
        if (y_string_values) {
            data[i].y = y_axis.__text_values.__add(data[i].y)
        } else if (data[i].y === "") {
            data[i].y = null
        } else if (data[i].y != null) {
            data[i].y = parseFloat(data[i].y)
        }
        this.__points.push(new EJSC.XYPoint(data[i].x, data[i].y, data[i].label, data[i].userdata, this))
    }
    this.__hasData = (this.__points.length > 0)
};
___lineseries.__doFindClosestByPoint = function(point) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    if (x_axis.__text_values.__count() > 0) {
        point.x = x_axis.__text_values.__find(point.x).__index
    }
    if (y_axis.__text_values.__count() > 0) {
        point.y = y_axis.__text_values.__find(point.y).__index
    }
    return this.__findClosestPoint({
        x: x_axis.__pt2px(point.x),
        y: y_axis.__pt2px(point.y)
    },
    false)
};
___lineseries.__doFindClosestByPixel = function(point) {
    var point = this.__findClosestPoint({
        x: point.x,
        y: point.y
    },
    false)
};
___lineseries.__doReload = function() {
    this.__points = [];
    this.__hasData = false;
    this.__dataHandler.__loading = false;
    this.__dataHandler.__loaded = false;
    this.__dataHandler.loadData()
};
___lineseries.__doSetDataHandler = function(handler, reload) {
    this.__points = [];
    this.__dataHandler = handler;
    this.__dataHandler.__init(this, {
        x: null,
        y: null,
        label: null,
        userdata: null
    });
    if (reload) {
        this.__dataHandler.__loadData()
    }
};
___lineseries.__doPoint2Px = function(point) {
    return {
        x: this.__getChart()["axis_" + this.x_axis].__pt2px(point.__x()),
        y: this.__getChart()["axis_" + this.y_axis].__pt2px(point.__y())
    }
};
___lineseries.__doResetExtremes = function() {
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined
};
___lineseries.__doCalculateExtremes = function() {
    if (this.__drawing || !this.__getHasData()) {
        return
    }
    var points = this.__points;
    for (var i = 0; i < points.length; i++) {
        if (this.__minX == undefined || points[i].__x() < this.__minX) this.__minX = points[i].__x();
        if (this.__maxX == undefined || points[i].__x() > this.__maxX) this.__maxX = points[i].__x();
        if (points[i].__y() == null) {
            continue
        }
        if (this.__minY == undefined || points[i].__y() < this.__minY) this.__minY = points[i].__y();
        if (this.__maxY == undefined || points[i].__y() > this.__maxY) this.__maxY = points[i].__y()
    }
};
___lineseries.__doSort = function(a, b) {
    return (a.__x() - b.__x())
};
___lineseries.__doAutoSort = function() {
    this.__points.sort(this.__doSort)
};
___lineseries.__calculateCross = function(start, end, axis) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var ox_min = x_axis.__current_min;
    var ox_max = x_axis.__current_max;
    var oy_min = y_axis.__current_min;
    var oy_max = y_axis.__current_max;
    var result = [];
    var x1 = start[0];
    var x2 = end[0];
    var y1 = start[1];
    var y2 = end[1];
    switch (axis) {
    case 'top':
        var y = oy_max;
        var x = (((y - y1) / (y2 - y1)) * (x2 - x1)) + x1;
        break;
    case 'bottom':
        var y = oy_min;
        var x = (((y - y1) / (y2 - y1)) * (x2 - x1)) + x1;
        break;
    case 'left':
        var x = ox_min;
        var y = (((x - x1) / (x2 - x1)) * (y2 - y1)) + y1;
        break;
    case 'right':
        var x = ox_max;
        var y = (((x - x1) / (x2 - x1)) * (y2 - y1)) + y1;
        break
    }
    return [x, y]
};
___lineseries.__doAbstractLineDraw = function(ctx, seriesType, drawMode, openClose) {
    var lineTo = "lineTo";
    var moveTo = "moveTo";
    if (seriesType == "area") {
        if (this.closeLine || openClose == "close") {
            moveTo = "lineTo"
        }
    } else {
        this.closeLine = false
    }
    ctx.lineWidth = this.lineWidth;
    ctx.dashStyle = this.__lineStyle;
    ctx.strokeStyle = EJSC.utility.__getColor(this.color, this.lineOpacity / 100).rgba;
    ctx.fillStyle = EJSC.utility.__getColor(this.color, this.opacity / 100).rgba;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var ox_min = x_axis.__current_min;
    var ox_max = x_axis.__current_max;
    var oy_min = y_axis.__current_min;
    var oy_max = y_axis.__current_max;
    var plen = this.__points.length;
    var found_x_min = false;
    var found_x_max = false;
    var hasDrawnFirst = false;
    var y, y1, y2;
    var x, x1, x2;
    var xd, yd;
    var t;
    var sx, sy;
    var p;
    var j = 0;
    var j_begin = 0;
    var pointsDrawn = 0;
    var last_point = [];
    var cur_point = [];
    var x_baseline = x_axis.__getZeroPlaneCoordinate();
    var y_baseline = y_axis.__getZeroPlaneCoordinate();
    while (j < plen && this.__points[j].__x() <= ox_min) {
        j++
    }
    if (j < plen) {
        ctx.beginPath();
        if (j > 0)--j;
        j_begin = j;
        if (this.closeLine == true || drawMode == "fill") {
            if (this.__points[j].__x() < ox_min) {
                sx = ox_min;
                sy = y_baseline;
                if (sy < oy_min) sy = oy_min;
                if (sy > oy_max) sy = oy_max
            } else {
                sx = this.__points[j].__x();
                if (y_baseline > oy_max) {
                    p = this.__calculateCross([this.__points[j].__x(), this.__points[j].__y()], [this.__points[j + 1].__x(), this.__points[j + 1].__y()], 'top');
                    sy = p[1]
                } else if (y_baseline < oy_min) {
                    p = this.__calculateCross([this.__points[j].__x(), this.__points[j].__y()], [this.__points[j + 1].__x(), this.__points[j + 1].__y()], 'bottom');
                    sy = p[1]
                } else {
                    sy = y_baseline
                }
            }
            ctx.moveTo(x_axis.__pt2px(sx), y_axis.__pt2px(sy));
            x = this.__points[j].__x();
            y = this.__points[j].__y();
            if (x < ox_min) {
                p = this.__calculateCross([this.__points[j].__x(), this.__points[j].__y()], [this.__points[j + 1].__x(), this.__points[j + 1].__y()], 'left');
                x = ox_min;
                y = p[1];
                if (y < oy_min) y = oy_min;
                if (y > oy_max) y = oy_max
            } else {
                if (y > oy_max) {
                    y = oy_max
                } else if (y < oy_min) {
                    y = oy_min
                } else {
                    y = y_baseline
                }
            }
            ctx.moveTo(x_axis.__pt2px(x), y_axis.__pt2px(y))
        }
        while (j < plen) {
            x = this.__points[j].__x();
            y = this.__points[j].__y();
            if (y == null) {
                if (seriesType == 'area') {
                    j++;
                    continue
                }
                hasDrawnFirst = false;
                cur_point = []
            } else if (last_point.length == 0 && (j + 1) < this.__points.length) {
                if (this.__points[j + 1].__y() > oy_max && y > oy_max) {} else if (this.__points[j + 1].__y() < oy_min && y < oy_min) {} else if (x < ox_min) {
                    cur_point = this.__calculateCross([x, y], [this.__points[j + 1].__x(), this.__points[j + 1].__y()], 'left');
                    if (cur_point[1] > oy_max) cur_point = this.__calculateCross([cur_point[0], cur_point[1]], [this.__points[j + 1].__x(), this.__points[j + 1].__y()], 'top');
                    if (cur_point[1] < oy_min) cur_point = this.__calculateCross([cur_point[0], cur_point[1]], [this.__points[j + 1].__x(), this.__points[j + 1].__y()], 'bottom');
                    if (cur_point[0] < ox_min) cur_point[0] = ox_min;
                    if (cur_point[0] > ox_max) cur_point[0] = ox_max;
                    if (cur_point[1] < oy_min) cur_point[1] = oy_min;
                    if (cur_point[1] > oy_max) cur_point[1] = oy_max;
                    ctx[moveTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]));
                    hasDrawnFirst = true
                } else if (y > oy_max || y < oy_min) {
                    if (this.__points[j + 1].__y() > oy_max && y > oy_max) {} else if (this.__points[j + 1].__y() < oy_min && y < oy_min) {} else {
                        cur_point = this.__calculateCross([x, y], [this.__points[j + 1].__x(), this.__points[j + 1].__y()], ((y > oy_max) ? ('top') : ('bottom')));
                        ctx[moveTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]));
                        hasDrawnFirst = true
                    }
                } else {
                    cur_point = [x, y];
                    if (hasDrawnFirst) {
                        ctx[lineTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]))
                    } else {
                        ctx[moveTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]));
                        hasDrawnFirst = true
                    }
                }
            } else if (x >= ox_max) {
                if (last_point[1] >= oy_max && y > oy_max) {} else if (last_point[1] <= oy_min && y < oy_min) {} else {
                    cur_point = this.__calculateCross([last_point[0], last_point[1]], [x, y], 'right');
                    if (cur_point[1] < oy_min) cur_point = this.__calculateCross([last_point[0], last_point[1]], [x, y], 'bottom');
                    if (cur_point[1] > oy_max) cur_point = this.__calculateCross([last_point[0], last_point[1]], [x, y], 'top');
                    if (hasDrawnFirst) {
                        ctx[lineTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]))
                    } else {
                        ctx[moveTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]));
                        hasDrawnFirst = true
                    }
                }
                last_point = cur_point;
                break
            } else if (y > oy_max || y < oy_min) {
                cur_point = this.__calculateCross([last_point[0], last_point[1]], [x, y], ((y > oy_max) ? ('top') : ('bottom')));
                if (cur_point[0] < ox_min) cur_point[0] = ox_min;
                if (cur_point[0] > ox_max) cur_point[0] = ox_max;
                if (cur_point[1] < oy_min) cur_point[1] = oy_min;
                if (cur_point[1] > oy_max) cur_point[1] = oy_max;
                if (hasDrawnFirst) {
                    ctx[lineTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]) + (y > oy_max ? -2 * this.lineWidth: 2 * this.lineWidth))
                } else {
                    ctx[moveTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]) + (y > oy_max ? -2 * this.lineWidth: 2 * this.lineWidth));
                    hasDrawnFirst = true
                }
                if (this.__points.length > j + 1) {
                    cur_point = this.__calculateCross([x, y], [this.__points[j + 1].__x(), this.__points[j + 1].__y()], ((y > oy_max) ? ('top') : ('bottom')));
                    if (cur_point[0] < ox_min) cur_point[0] = ox_min;
                    if (cur_point[0] > ox_max) cur_point[0] = ox_max;
                    if (cur_point[1] < oy_min) cur_point[1] = oy_min;
                    if (cur_point[1] > oy_max) cur_point[1] = oy_max;
                    ctx[lineTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]) + (y > oy_max ? -2 * this.lineWidth: 2 * this.lineWidth))
                }
            } else {
                cur_point = [x, y];
                if (hasDrawnFirst) {
                    ctx[lineTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]))
                } else {
                    ctx[moveTo](x_axis.__pt2px(cur_point[0]), y_axis.__pt2px(cur_point[1]));
                    hasDrawnFirst = true
                }
            }
            last_point = cur_point;
            if (++pointsDrawn > 5000 && EJSC.__isIE) {
                if (drawMode == 'line') {
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(x_axis.__pt2px(last_point[0]), y_axis.__pt2px(last_point[1]))
                } else {
                    x = last_point[0];
                    y = y_baseline;
                    if (y < oy_min) y = oy_min;
                    if (y > oy_max) y = oy_max;
                    ctx.lineTo(x_axis.__pt2px(x), y_axis.__pt2px(y));
                    ctx.lineTo(x_axis.__pt2px(sx), y_axis.__pt2px(sy));
                    ctx.fill();
                    sx = x_axis.__px2pt(x_axis.__pt2px(x) - 1);
                    sy = y;
                    ctx.beginPath();
                    ctx.moveTo(x_axis.__pt2px(sx), y_axis.__pt2px(sy));
                    ctx[moveTo](x_axis.__pt2px(sx), y_axis.__pt2px(last_point[1]))
                }
                pointsDrawn = 0;
                hasDrawnFirst = false;
                last_point = [];
                j--
            }
            j++
        }
        if (this.closeLine == true || drawMode == "fill") {
            if (last_point[0] < this.__points[this.__points.length - 1].__x()) {
                x = this.__points[this.__points.length - 1].__x();
                if (x > ox_max) x = ox_max;
                ctx.lineTo(x_axis.__pt2px(x), y_axis.__pt2px(last_point[1]))
            }
            y = y_baseline;
            if (y < oy_min) y = oy_min;
            if (y > oy_max) y = oy_max;
            ctx.lineTo(x_axis.__pt2px(x), y_axis.__pt2px(y));
            ctx[moveTo](x_axis.__pt2px(x), y_axis.__pt2px(y));
            ctx.lineTo(x_axis.__pt2px(sx), y_axis.__pt2px(sy));
            ctx[moveTo](x_axis.__pt2px(sx), y_axis.__pt2px(sy))
        }
        if (drawMode == 'line') ctx.stroke();
        else ctx.fill()
    }
};
___lineseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        0);
        return
    }
    this.__drawing = true;
    try {
        this.__doAbstractLineDraw(ctx, 'line', 'line', 'open');
        var x_axis = this.__getChart()["axis_" + this.x_axis];
        var y_axis = this.__getChart()["axis_" + this.y_axis];
        var ox_min = x_axis.__current_min;
        var ox_max = x_axis.__current_max;
        var oy_min = y_axis.__current_min;
        var oy_max = y_axis.__current_max;
        var plen = this.__points.length;
        var j = 0;
        while (j < plen && this.__points[j].__x() <= ox_min) {
            j++
        }
        this.__doDrawPoints(ctx, this.__points, ox_min, ox_max, oy_min, oy_max, j, plen)
    } catch(e) {
        console.error(e)
    } finally {
        this.__drawing = false
    }
};
___lineseries.pointStyle = 'circle';
___lineseries.__doDrawPoints = function(ctx, points, x_min, x_max, y_min, y_max, index, length) {
    if (this.drawPoints) {
        var x_axis = this.__getChart()["axis_" + this.x_axis];
        var y_axis = this.__getChart()["axis_" + this.y_axis];
        var ps = (this.pointSize == undefined ? this.lineWidth * 2 : this.pointSize);
        var canvas_top = this.__getDrawArea().top;
        var canvas_left = this.__getDrawArea().left;
        var canvas_height = this.__getDrawArea().height;
        var canvas_width = this.__getDrawArea().width;
        var j = 0;
        while (j < length && (x_axis.__pt2px(this.__points[j].__x()) + ps) < canvas_left) {
            j++
        }
        var index = j;
        ctx.lineWidth = 1;
        ctx.dashStyle = "solid";
        ctx.strokeStyle = EJSC.utility.__getColor(this.pointColor == undefined ? this.color: this.pointColor, (this.lineOpacity / 100)).rgba;
        ctx.fillStyle = EJSC.utility.__getColor(this.pointColor == undefined ? this.color: this.pointColor, (this.lineOpacity / 100)).rgba;
        ctx.lineCap = "round";
        var r = (this.pointSize == undefined ? this.lineWidth * 2 : this.pointSize);
        var plotX, plotY;
        while (j < length) {
            if ((x_axis.__pt2px(this.__points[j].__x()) - ps) <= canvas_left + canvas_width) {
                if (points[j].__y() !== null && (y_axis.__pt2px(this.__points[j].__y()) + ps) >= canvas_top && (y_axis.__pt2px(this.__points[j].__y()) - ps) <= canvas_top + canvas_height) {
                    ctx.beginPath();
                    plotX = x_axis.__pt2px(this.__points[j].__x());
                    plotY = y_axis.__pt2px(this.__points[j].__y());
                    switch (this.pointStyle) {
                    case 'circle':
                        ctx.moveTo(plotX + r, plotY);
                        ctx.arc(plotX, plotY, r, 0, m_PI, true);
                        ctx.arc(plotX, plotY, r, m_PI, m_PIx2, true);
                        break;
                    case 'triangle':
                        ctx.moveTo(plotX, plotY - r);
                        ctx.lineTo(plotX - r, plotY + r);
                        ctx.lineTo(plotX + r, plotY + r);
                        ctx.lineTo(plotX, plotY - r);
                        break;
                    case 'diamond':
                        ctx.moveTo(plotX, plotY + r);
                        ctx.lineTo(plotX - r, plotY);
                        ctx.lineTo(plotX, plotY - r);
                        ctx.lineTo(plotX + r, plotY);
                        ctx.lineTo(plotX, plotY + r);
                        break;
                    case 'box':
                        ctx.moveTo(plotX + r, plotY + r);
                        ctx.lineTo(plotX - r, plotY + r);
                        ctx.lineTo(plotX - r, plotY - r);
                        ctx.lineTo(plotX + r, plotY - r);
                        ctx.lineTo(plotX + r, plotY + r);
                        break;
                    default:
                        break
                    }
                    ctx.fill()
                }
            } else {
                break
            }
            j++
        }
        if (this.pointBorderSize > 0) {
            ctx.lineWidth = this.pointBorderSize;
            ctx.dashStyle = "solid";
            ctx.strokeStyle = EJSC.utility.__getColor(this.pointBorderColor == undefined ? this.color: this.pointBorderColor, (this.lineOpacity / 100)).rgba;
            ctx.beginPath();
            var r = (this.pointSize == undefined ? this.lineWidth * 2 : this.pointSize);
            j = index;
            while (j < length) {
                if (points[j].__x() < x_max) {
                    if (points[j].__y() !== null) {
                        plotX = x_axis.__pt2px(this.__points[j].__x());
                        plotY = y_axis.__pt2px(this.__points[j].__y());
                        switch (this.pointStyle) {
                        case 'circle':
                            ctx.moveTo(plotX + r, plotY);
                            ctx.arc(plotX, plotY, r, 0, m_PI, true);
                            ctx.arc(plotX, plotY, r, m_PI, m_PIx2, true);
                            break;
                        case 'triangle':
                            ctx.moveTo(plotX, plotY - r);
                            ctx.lineTo(plotX - r, plotY + r);
                            ctx.lineTo(plotX + r, plotY + r);
                            ctx.lineTo(plotX, plotY - r);
                            break;
                        case 'diamond':
                            ctx.moveTo(plotX, plotY + r);
                            ctx.lineTo(plotX - r, plotY);
                            ctx.lineTo(plotX, plotY - r);
                            ctx.lineTo(plotX + r, plotY);
                            ctx.lineTo(plotX, plotY + r);
                            break;
                        case 'box':
                            ctx.moveTo(plotX + r, plotY + r);
                            ctx.lineTo(plotX - r, plotY + r);
                            ctx.lineTo(plotX - r, plotY - r);
                            ctx.lineTo(plotX + r, plotY - r);
                            ctx.lineTo(plotX + r, plotY + r);
                            break;
                        default:
                            break
                        }
                    }
                } else {
                    break
                }
                j++
            }
            ctx.stroke()
        }
    }
};
___lineseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX);
    var i, minY, maxY;
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].__x() >= minX && this.__points[i].__x() <= maxX) {
            if (minY == undefined || minY > this.__points[i].__y()) minY = this.__points[i].__y();
            if (maxY == undefined || maxY < this.__points[i].__y()) maxY = this.__points[i].__y()
        }
    }
    if (minY == undefined || maxY == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxY) - chart.__draw_area.top,
            max: y_axis.__pt2px(minY)
        }
    }
};
___lineseries.__doGetXRange = function(screenMinY, screenMaxY) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minY = y_axis.__px2pt(screenMinY + chart.__draw_area.top);
    var maxY = y_axis.__px2pt(screenMaxY + chart.__draw_area.top);
    var i, minX, maxX;
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].__y() >= minY && this.__points[i].__y() <= maxY) {
            if (minX == undefined || minX > this.__points[i].__x()) minX = this.__points[i].__x();
            if (maxX == undefined || maxX < this.__points[i].__x()) maxX = this.__points[i].__x()
        }
    }
    if (minX == undefined || maxX == undefined) {
        return null
    } else {
        return {
            min: x_axis.__pt2px(minX) - chart.__draw_area.left,
            max: x_axis.__pt2px(maxX) - chart.__draw_area.left
        }
    }
};
___lineseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var points = this.__points;
    var pointsLen = points.length;
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    if (chart == null || points == null || pointsLen == 0) {
        return null
    }
    var distance = EJSC.math.__distance;
    var i;
    var currentDistance = null;
    var result = null;
    var tempDistance;
    var pointX, pointY;
    var x = x_axis.__px2pt(mouse.x + chart.__draw_area.left);
    var y = y_axis.__px2pt(mouse.y + chart.__draw_area.top);
    var x_min, x_max, y_min, y_max;
    if (use_proximity) {
        x_min = x_axis.__px2pt(mouse.x + chart.__draw_area.left - (chart.proximity_snap));
        x_max = x_axis.__px2pt(mouse.x + chart.__draw_area.left + (chart.proximity_snap));
        y_min = chart.auto_find_point_by_x ? y_axis.__min: y_axis.__px2pt(mouse.y + chart.__draw_area.top + (chart.proximity_snap));
        y_max = chart.auto_find_point_by_x ? y_axis.__max: y_axis.__px2pt(mouse.y + chart.__draw_area.top - (chart.proximity_snap));
        if (x_min < x_axis.__current_min) {
            x_min = x_axis.__current_min
        }
        if (x_max > x_axis.__current_max) {
            x_max = x_axis.__current_max
        }
        if (y_min < y_axis.__current_min) {
            y_min = y_axis.__current_min
        }
        if (y_max > y_axis.__current_max) {
            y_max = y_axis.__current_max
        }
    } else {
        x_min = x_axis.__current_min;
        x_max = x_axis.__current_max;
        y_min = y_axis.__current_min;
        y_max = y_axis.__current_max
    }
    for (i = 0; i < pointsLen; i++) {
        pointX = points[i].__x();
        pointY = points[i].__y();
        if (pointX < x_min || pointY < y_min || pointY > y_max) {
            continue
        }
        if (pointX > x_max) {
            break
        }
        tempDistance = distance(mouse.x, mouse.y, x_axis.__pt2px(pointX), y_axis.__pt2px(pointY));
        if (currentDistance == null || tempDistance < currentDistance) {
            currentDistance = tempDistance;
            result = {
                distance: currentDistance,
                point: points[i]
            }
        }
    }
    return result
};
___lineseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x = point.__x();
    var y = point.__y();
    if (x > x_axis.__current_max) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_max
        }
    } else if (x < x_axis.__current_min) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_min
        }
    }
    var result = {
        series_title: "<label>" + this.title + "</label>",
        xaxis: x_axis.__getHintCaption(),
        yaxis: y_axis.__getHintCaption(),
        x: x_axis.__getLabel(point.__x(), undefined, this.x_axis_formatter),
        y: y_axis.__getLabel(point.__y(), undefined, this.y_axis_formatter),
        label: point.label,
        __defaultHintString: this.__getHintString(point),
        __center: false
    };
    if (y > y_axis.__current_max) {
        y = y_axis.__current_max
    } else if (y < y_axis.__current_min) {
        y = y_axis.__current_min
    }
    result.__position = {
        x: x_axis.__pt2px(x),
        y: y_axis.__pt2px(y)
    };
    return result
};
___lineseries.__doSelectPrevious = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i--;
    if (i < 0 || points[i].__x() < x_axis.__current_min) {
        i = points.length - 1;
        while (points[i].__x() > x_axis.__current_max) i--
    }
    this.__owner.__selectPoint(points[i])
};
___lineseries.__doSelectNext = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i++;
    if (i >= points.length || points[i].__x() > x_axis.__current_max) {
        i = 0;
        while (points[i].__x() < x_axis.__current_min) i++
    }
    this.__owner.__selectPoint(points[i])
};
___lineseries.__doGetLegendIcon = function() {
    return "line"
};
___lineseries.__doFree = function() {
    this.__dataHandler = null;
    this.__points = []
};
EJSC.AreaSeries = function(dh, options) {
    this.__doSetDataHandler(dh, false);
    this.__points = [];
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = 0;
    this.__maxY = undefined;
    this.closeLine = true;
    this.__drawing = false;
    this.__lineStyle = 'solid';
    this.__padding = {
        x_min: 0,
        x_max: 5,
        y_min: 0,
        y_max: 0
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__type = 'area';
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.__copyOptions(options);
    this.__padding.x_max = (this.y_axis == "left") ? 5 : 0;
    this.__padding.x_min = (this.y_axis == "left") ? 0 : 5;
    var adj = 0;
    if (this.drawPoints) {
        adj = (this.pointSize + this.pointBorderSize);
        if (adj < this.lineWidth) {
            adj = this.lineWidth
        }
    } else {
        adj = this.lineWidth
    }
    this.__padding.x_min = this.__padding.x_min == undefined ? adj: this.__padding.x_min;
    this.__padding.x_max = this.__padding.x_max == undefined ? adj: this.__padding.x_max;
    this.__padding.y_min = this.__padding.y_min == undefined ? adj: this.__padding.y_min;
    this.__padding.y_max = this.__padding.y_max == undefined ? adj: this.__padding.y_max
};
EJSC.LineSeries.prototype.__extendTo(EJSC.AreaSeries);
var ___areaseries = EJSC.AreaSeries.prototype;
___areaseries.__doCalculateExtremes = function() {
    if (this.__drawing || !this.__getHasData()) {
        return
    }
    var points = this.__points;
    for (var i = 0; i < points.length; i++) {
        if (points[i].__y() == null) {
            continue
        }
        if (this.__minX == undefined || points[i].__x() < this.__minX) this.__minX = points[i].__x();
        if (this.__maxX == undefined || points[i].__x() > this.__maxX) this.__maxX = points[i].__x();
        if (this.__minY == undefined || points[i].__y() < this.__minY) this.__minY = points[i].__y();
        if (this.__maxY == undefined || points[i].__y() > this.__maxY) this.__maxY = points[i].__y()
    }
    var y_baseline = this.__getChart()["axis_" + this.y_axis].__getZeroPlaneCoordinate();
    if (this.__minY > y_baseline) {
        this.__minY = y_baseline
    } else if (this.__maxY < y_baseline) {
        this.__maxY = y_baseline
    }
};
___areaseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        0);
        return
    }
    this.__drawing = true;
    try {
        this.__doAbstractLineDraw(ctx, 'area', 'fill', 'close');
        this.__doAbstractLineDraw(ctx, 'area', 'line', 'open');
        var x_axis = this.__getChart()["axis_" + this.x_axis];
        var y_axis = this.__getChart()["axis_" + this.y_axis];
        var ox_min = x_axis.__current_min;
        var ox_max = x_axis.__current_max;
        var oy_min = y_axis.__current_min;
        var oy_max = y_axis.__current_max;
        var plen = this.__points.length;
        var j = 0;
        while (j < plen && this.__points[j].__x() <= ox_min) {
            j++
        }
        this.__doDrawPoints(ctx, this.__points, ox_min, ox_max, oy_min, oy_max, j, plen)
    } catch(e) {} finally {
        this.__drawing = false
    }
};
___areaseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX + chart.__draw_area.left);
    var i, minY, maxY;
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].__x() >= minX && this.__points[i].__x() <= maxX) {
            if (minY == undefined || minY > this.__points[i].__y()) minY = this.__points[i].__y();
            if (maxY == undefined || maxY < this.__points[i].__y()) maxY = this.__points[i].__y()
        }
    }
    var y_zero_coord = y_axis.__getZeroPlaneCoordinate();
    if (y_zero_coord > maxY) maxY = y_zero_coord;
    if (y_zero_coord < minY) minY = y_zero_coord;
    if (minY == undefined || maxY == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxY) - chart.__draw_area.top,
            max: y_axis.__pt2px(minY) - chart.__draw_area.top
        }
    }
};
___areaseries.__doGetLegendIcon = function() {
    return "area"
};
EJSC.ScatterSeries = function(dh, options) {
    this.__doSetDataHandler(dh, false);
    this.__points = [];
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.__filled = (EJSC.__isIE == true) ? false: true;
    this.__padding = {
        x_min: 5,
        x_max: 5,
        y_min: 5,
        y_max: 5
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.opacity = 80;
    this.lineWidth = 0;
    this.__type = "scatter";
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.__copyOptions(options)
};
EJSC.LineSeries.prototype.__extendTo(EJSC.ScatterSeries);
var ___scatterseries = EJSC.ScatterSeries.prototype;
___scatterseries.pointSize = 4;
___scatterseries.pointStyle = "triangle";
___scatterseries.setPointStyle = function(size, style) {
    if (size != undefined) {
        this.pointSize = size
    }
    if (style != undefined) {
        switch (style) {
        case "circle":
        case "box":
        case "diamond":
        case "triangle":
            this.pointStyle = style;
            break;
        default:
            alert("Invalid scatter style: '" + style + "'")
        }
    }
    this.__getChart().__draw(true)
};
___scatterseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        0);
        return
    }
    this.__drawing = true;
    try {
        var plen = this.__points.length;
        var ps = this.pointSize;
        var x_axis = this.__getChart()["axis_" + this.x_axis];
        var y_axis = this.__getChart()["axis_" + this.y_axis];
        var ox_min = x_axis.__current_min;
        var ox_max = x_axis.__current_max;
        var oy_min = y_axis.__current_min;
        var oy_max = y_axis.__current_max;
        var da = this.__getChart().__draw_area;
        var canvas_height = da.height;
        var canvas_width = da.width;
        var canvas_top = da.top;
        var canvas_left = da.left;
        var canvas_right = da.right;
        var canvas_bottom = da.bottom;
        var j = 0;
        while (j < plen && (x_axis.__pt2px(this.__points[j].__x()) + ps) < canvas_left) j++;
        var j_start = j;
        var pointsDrawn = 0;
        if (j < plen) {
            switch (this.pointStyle) {
            case "box":
                ctx.lineCap = "square";
                ps = ps * 2;
                break;
            case "circle":
                ctx.lineCap = "round";
                ps = ps * 2;
                break;
            case "diamond":
                ctx.lineCap = "square";
                break;
            case "triangle":
                ctx.lineCap = "butt";
                break
            }
            ctx.lineWidth = ps;
            ctx.strokeStyle = EJSC.utility.__getColor(this.color, (this.opacity / 100)).rgba;
            var r = ps / 2;
            if (!EJSC.__isIE) {
                ctx.beginPath()
            }
            while (j < plen) {
                if (this.__points[j].x !== null && this.__points[j].x !== NaN && this.__points[j].y !== null && this.__points[j].y !== NaN) {
                    plotX = x_axis.__pt2px(this.__points[j].__x());
                    plotY = y_axis.__pt2px(this.__points[j].__y());
                    if ((plotX - ps) > canvas_right) {
                        break
                    }
                    if ((plotY + ps) >= canvas_top && (plotY - ps) <= canvas_bottom) {
                        if (EJSC.__isIE && ++pointsDrawn > 4000) {
                            ctx.stroke();
                            pointsDrawn = 0;
                            ctx.beginPath()
                        }
                        switch (this.pointStyle) {
                        case 'box':
                            ctx.moveTo(plotX - 0.1, plotY);
                            ctx.lineTo(plotX, plotY);
                            break;
                        case 'circle':
                            ctx.moveTo(plotX - 0.1, plotY);
                            ctx.lineTo(plotX, plotY);
                            break;
                        case 'diamond':
                            ctx.moveTo(plotX, plotY - r);
                            ctx.lineTo(plotX - r, plotY);
                            ctx.lineTo(plotX, plotY + r);
                            ctx.lineTo(plotX + r, plotY);
                            ctx.lineTo(plotX, plotY - r);
                            break;
                        case 'triangle':
                            ctx.moveTo(plotX - r, plotY + r);
                            ctx.lineTo(plotX + r, plotY + r);
                            ctx.lineTo(plotX, plotY - r);
                            ctx.lineTo(plotX - r, plotY + r);
                            ctx.closePath();
                            break
                        }
                    }
                }
                j++
            }
            ctx.stroke()
        }
    } catch(e) {} finally {
        this.__drawing = false
    }
};
___scatterseries.__doGetLegendIcon = function() {
    return "scatter"
};
EJSC.PieSeries = function(dh, options) {
    this.__legendCreateInherited = this.__legendCreate;
    this.__legendCreate = this.__legendCreateNew;
    this.__doSetDataHandler(dh, false);
    this.__points = [];
    this.__availColors = [];
    this.__selected_piece = undefined;
    this.__total_value = 1;
    this.total_value = undefined;
    this.__needsXAxis = false;
    this.__needsYAxis = false;
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.defaultColors = EJSC.DefaultPieColors.slice();
    this.__padding = {
        x_min: 0,
        x_max: 0,
        y_min: 0,
        y_max: 0
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__type = 'pie';
    this.__defaultHintString = "[series_title]<br/>[x] of [total] ([percent]%)";
    this.opacity = 80;
    this.lineOpacity = 100;
    this.treeLegend = true;
    this.coloredLegend = false;
    this.position = "center";
    this.height = "100%";
    this.width = "100%";
    this.__copyOptions(options)
};
EJSC.Series.__extendTo(EJSC.PieSeries);
var ___pieseries = EJSC.PieSeries.prototype;
___pieseries.defaultColors = undefined;
___pieseries.onPieceNeedsColor = undefined;
___pieseries.__getAvailableColor = function(point, ignoreEvent) {
    if (this.__availColors.length == 0) {
        if (this.onPieceNeedsColor && ignoreEvent == undefined) {
            return this.onPieceNeedsColor(point, this, this.__owner)
        } else {
            this.__availColors = this.defaultColors.slice()
        }
    }
    return this.__availColors.pop()
};
___pieseries.setDefaultColors = function(colors, reload) {
    this.defaultColors = colors.slice();
    this.__availColors = this.defaultColors.slice();
    if (reload && this.__points.length > 0) {
        for (var i = 0; i < this.__points.length; i++) {
            this.__points[i].__color = this.__getAvailableColor(this.__points[i], true)
        }
        this.__getChart().__draw(true)
    }
};
___pieseries.__doPoint2Px = function(point) {
    var center = this.findCenter(point);
    return {
        x: center.x,
        y: center.y
    }
};
___pieseries.__doReload = function() {
    this.__points = [];
    this.__hasData = false;
    this.__availColors = this.defaultColors.slice();
    if (this.treeLegend == true) {
        for (j = EJSC.__events.length - 1; j > 0; j--) {
            if (EJSC.__events[j] != null && EJSC.__events[j][4] != null && EJSC.__events[j][4] == this) {
                EJSC.utility.__detachEvent(EJSC.__events[j][0], EJSC.__events[j][1], EJSC.__events[j][2], EJSC.__events[j][3]);
                var e = EJSC.__events.splice(j, 1);
                delete e
            }
        }
        this.__legendItems.innerHTML = ""
    }
    this.__dataHandler.__loading = false;
    this.__dataHandler.__loaded = false;
    this.__dataHandler.loadData()
};
___pieseries.__legendCreateNew = function() {
    this.__legendCreateInherited();
    if (this.treeLegend == true) {
        var series = this;
        this.__legend.className += " ejsc-legend-tree";
        this.__legend.appendChild(EJSC.utility.__createDOMArray(["div", {
            className: "ejsc-legend-tree-items",
            __ref: series,
            __refVar: "__legendItems"
        }]))
    }
};
___pieseries.__doAfterVisibilityChange = function() {
    if (this.treeLegend == true) {
        if (this.visible == true) {
            this.__legendItems.className = "ejsc-legend-tree-items"
        } else {
            this.__legendItems.className = "ejsc-legend-tree-items ejsc-hidden"
        }
    }
};
___pieseries.__getPhysicalDiameter = function() {
    var canvas = this.__getDrawArea();
    var w = canvas.width;
    var h = canvas.height;
    var perc = .9;
    var n0 = this.width;
    var n1 = this.height;
    if (typeof(n0) == "number") {
        n0 = this.width.toString()
    }
    if (typeof(n1) == "number") {
        n1 = this.height.toString()
    }
    if (n0.indexOf("%") == -1) {
        c = parseFloat(n0)
    } else {
        c = w * (parseFloat(n0.replace("%", "")) / 100)
    }
    if (n1.indexOf("%") == -1) {
        d = parseFloat(n1)
    } else {
        d = h * (parseFloat(n1.replace("%", "")) / 100)
    }
    return m_FLOOR((c < d) ? (c * perc) : (d * perc))
};
___pieseries.__getPhysicalCenter = function() {
    var canvas = this.__getDrawArea();
    var w = canvas.width;
    var h = canvas.height;
    var t = canvas.top;
    var l = canvas.left;
    var n0 = this.width;
    var n1 = this.height;
    if (typeof(n0) == "number") {
        n0 = this.width.toString()
    }
    if (typeof(n1) == "number") {
        n1 = this.height.toString()
    }
    if (n0.indexOf("%") == -1) {
        c = parseFloat(n0)
    } else {
        c = w * (parseFloat(n0.replace("%", "")) / 100)
    }
    if (n1.indexOf("%") == -1) {
        d = parseFloat(n1)
    } else {
        d = h * (parseFloat(n1.replace("%", "")) / 100)
    }
    var ret = {
        x: w / 2,
        y: w / 2
    };
    switch (this.position) {
    case "topLeft":
        ret = {
            x: c * .5,
            y: d * .5
        };
        break;
    case "topCenter":
        ret = {
            x: w / 2,
            y: d * .5
        };
        break;
    case "topRight":
        ret = {
            x: w - c * .5,
            y: d * .5
        };
        break;
    case "centerLeft":
        ret = {
            x: c * .5,
            y: h / 2
        };
        break;
    case "centerRight":
        ret = {
            x: w - c * .5,
            y: h / 2
        };
        break;
    case "bottomLeft":
        ret = {
            x: c * .5,
            y: h - d * .5
        };
        break;
    case "bottomCenter":
        ret = {
            x: w / 2,
            y: h - d * .5
        };
        break;
    case "bottomRight":
        ret = {
            x: w - c * .5,
            y: h - d * .5
        };
        break;
    case "center":
        ret = {
            x: w / 2,
            y: h / 2
        };
        break;
    case "left":
        ret = {
            x: (c < d) ? (c / 2) : (d / 2),
            y: h / 2
        };
        break;
    case "right":
        ret = {
            x: (c < d) ? w - (c / 2) : w - (d / 2),
            y: h / 2
        };
        break;
    default:
        alert("'" + this.position + "' is an invalid pie position, using 'center'.");
        ret = {
            x: w / 2,
            y: h / 2
        }
    }
    return {
        x: ret.x + l,
        y: ret.y + t
    }
};
___pieseries.__doSetDataHandler = function(handler, reload) {
    this.__points = [];
    if (this.treeLegend == true) {
        for (j = EJSC.__events.length - 1; j > 0; j--) {
            if (EJSC.__events[j] != null && EJSC.__events[j][4] != null && EJSC.__events[j][4] == this) {
                EJSC.utility.__detachEvent(EJSC.__events[j][0], EJSC.__events[j][1], EJSC.__events[j][2], EJSC.__events[j][3]);
                var e = EJSC.__events.splice(j, 1);
                delete e
            }
        }
        this.__legendItems.innerHTML = ""
    }
    this.__dataHandler = handler;
    this.__dataHandler.__init(this, {
        x: null,
        label: null,
        userdata: null
    });
    if (reload) {
        this.__dataHandler.loadData()
    }
};
___pieseries.findCenterOfCurve = function(point) {
    var points = this.__points;
    var minAngle = 0;
    var maxAngle = 0;
    var o_perc = 1;
    var total_value = (this.total_value != undefined) ? this.total_value: this.__total_value;
    var i = 0;
    while (i < points.length && points[i] != point) {
        minAngle += (m_PIx2 * (points[i].x / total_value) * o_perc);
        i++
    }
    maxAngle = minAngle + (m_PIx2 * (points[i].x / total_value) * o_perc);
    var diameter = this.__getPhysicalDiameter();
    var center = this.__getPhysicalCenter();
    var radius = diameter / 2;
    var drawAngle = (maxAngle + minAngle) / 2;
    var cLeft = m_ROUND((radius * m_SIN(drawAngle)) + center.x);
    var cTop = m_ROUND(center.y - (radius * m_COS(drawAngle)));
    return this.__getChart().__chartPt2ScreenPt({
        x: cLeft,
        y: cTop
    })
};
___pieseries.findCenter = function(point) {
    var points = this.__points;
    var minAngle = 0;
    var maxAngle = 0;
    var o_perc = 1;
    var total_value = (this.total_value != undefined) ? this.total_value: this.__total_value;
    var i = 0;
    while (i < points.length && points[i] != point) {
        minAngle += (m_PIx2 * (points[i].x / total_value) * o_perc);
        i++
    }
    maxAngle = minAngle + (m_PIx2 * (points[i].x / total_value) * o_perc);
    var diameter = this.__getPhysicalDiameter();
    var center = this.__getPhysicalCenter();
    var radius = m_FLOOR(diameter / 2);
    var drawAngle = ((maxAngle + minAngle) / 2);
    var drawDistance = ((radius * 3) / 4);
    var cLeft = (((drawDistance * m_SIN(drawAngle)) + center.x));
    var cTop = ((center.y - (drawDistance * m_COS(drawAngle))));
    return this.__getChart().__chartPt2ScreenPt({
        x: cLeft,
        y: cTop
    })
};
___pieseries.getPoints = function() {
    return this.__points
};
___pieseries.setTotalValue = function(value, redraw) {
    this.total_value = value;
    if (redraw == undefined || redraw == true) {
        this.__getChart().__draw(true)
    }
};
___pieseries.getTotalValue = function() {
    if (this.total_value == undefined) {
        return this.__total_value
    } else {
        return this.total_value
    }
};
___pieseries.resetTotalValue = function(redraw) {
    this.total_value = undefined;
    if (redraw == undefined || redraw == true) {
        this.__getChart().__draw(true)
    }
};
___pieseries.__doOnDataAvailable = function(data) {
    if (data.length == 0) {
        this.__hasData = false;
        return
    }
    var p, lc;
    var series = this;
    this.__total_value = 0;
    for (var i = 0; i < data.length; i++) {
        data[i].x = parseFloat(data[i].x);
        p = new EJSC.PiePoint(data[i].x, data[i].label, data[i].userdata, this);
        this.__points.push(p);
        this.__total_value += parseFloat(p.__x());
        if (this.treeLegend == true) {
            if (p.label != "" && p.label != undefined) {
                lc = p.label
            } else {
                lc = p.__x()
            }
            this.__legendItems.appendChild(EJSC.utility.__createDOMArray(["a", {
                innerHTML: lc,
                title: lc,
                className: "ejsc-legend-tree-item",
                pointIndex: i,
                __styles: {
                    color: EJSC.utility.__getColor(p.__color == undefined ? this.color: p.__color).hex
                },
                __ref: series,
                __events: {
                    click: function(e) {
                        if (!series.__getChart().allow_interactivity) {
                            return
                        }
                        var targ;
                        if (!e) var e = window.event;
                        if (e.target) targ = e.target;
                        else if (e.srcElement) targ = e.srcElement;
                        if (targ.nodeType == 3) targ = targ.parentNode;
                        series.__getChart().__selectPoint(series.__points[targ.pointIndex], true, true)
                    }
                }
            }]))
        }
    }
    this.__hasData = (this.__points.length > 0)
};
___pieseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        1);
        return
    }
    this.__drawing = true;
    try {
        var c = EJSC.utility.__getColor(this.color);
        ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.lineOpacity / 100) + ")";
        ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.opacity / 100) + ")";
        var totalVal = (this.total_value != undefined) ? this.total_value: this.__total_value;
        var o_start = 0;
        var o_end = 0;
        var o_perc = 1;
        var i;
        var canvas_width = this.__getDrawArea().width;
        var canvas_height = this.__getDrawArea().height;
        var plen = this.__points.length;
        var ps = this.pointSize;
        var diameter = this.__getPhysicalDiameter();
        var center = this.__getPhysicalCenter();
        var radius = m_FLOOR(diameter / 2);
        ctx.strokeStyle = 'rgb(255,255,255)';
        var pieceX = center.x;
        var pieceY = center.y;
        var offsetX = 0;
        var offsetY = 0;
        for (i = 0; i < plen; i++) {
            c = EJSC.utility.__getColor(this.__points[i].__color);
            ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.opacity / 100) + ")";
            o_start = o_end;
            o_end += ((m_PIx2 * (this.__points[i].__x() / totalVal)) * o_perc);
            if (this.__selected_piece != undefined && i == this.__selected_piece) {
                ctx.strokeStyle = 'rgba(0,0,0,' + (this.lineOpacity / 100) + ')';
                ctx.lineWidth = this.lineWidth;
                var drawDistance = radius * .1;
                var drawAngle = ((o_end + o_start) / 2);
                offsetY = (drawDistance * m_COS(drawAngle));
                offsetX = (drawDistance * m_SIN(drawAngle))
            } else {
                ctx.strokeStyle = 'rgba(255,255,255,' + (this.lineOpacity / 100) + ')';
                ctx.lineWidth = 1;
                offsetX = 0;
                offsetY = 0
            }
            ctx.beginPath();
            if (totalVal > 0 && this.__points[i].__x() == totalVal) {
                ctx.moveTo(pieceX + radius, pieceY);
                ctx.arc(pieceX, pieceY, radius, 0, m_PIx2, true)
            } else if (this.__points[i].__x() > 0) {
                ctx.moveTo(pieceX + offsetX, pieceY - offsetY);
                ctx.arc(pieceX + offsetX, pieceY - offsetY, radius, o_start - m_PId2, o_end - m_PId2, false);
                ctx.lineTo(pieceX + offsetX, pieceY - offsetY)
            }
            if (EJSC.__isIE) {
                var save_path = ctx.currentPath_;
                ctx.fill();
                ctx.currentPath_ = save_path;
                ctx.stroke()
            } else {
                ctx.fill();
                ctx.stroke()
            }
        }
    } catch(e) {} finally {
        this.__drawing = false
    }
};
___pieseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var points = this.__points;
    var diameter = this.__getPhysicalDiameter();
    var center = this.__getPhysicalCenter();
    var radius = m_FLOOR(diameter / 2);
    var xCenter = center.x - chart.__draw_area.left;
    var yCenter = center.y - chart.__draw_area.top;
    var dist = EJSC.math.__distance(xCenter, yCenter, mouse.x, mouse.y);
    if (dist > radius && use_proximity) {
        return null
    } else {
        var ang = m_ATAN((mouse.y - yCenter) / (mouse.x - xCenter)) + m_PId2;
        if (mouse.x < xCenter) {
            ang = ang + m_PI
        }
        var perc = (ang / (m_PIx2));
        var i = 0;
        var tot = (this.total_value != undefined) ? this.total_value: this.__total_value;
        var cur = 0;
        while (i < points.length && (cur / tot) < perc) {
            cur += points[i].__x();
            i++
        }--i;
        if (ang == 0) i = 0;
        var pointCenter = this.findCenter(points[i]);
        return {
            distance: EJSC.math.__distance(pointCenter.x, pointCenter.y, mouse.x, mouse.y),
            point: points[i]
        }
    }
    return undefined
};
___pieseries.__doUnselectSeries = function() {
    this.__selected_piece = undefined;
    if (this.__getChart().__hint_is_sticky == true) {
        this.__getChart().__draw(false)
    }
};
___pieseries.__doGetHintString = function(point) {
    return this.hint_string != undefined ? this.hint_string: "[series_title]<br/>" + (point.label != undefined && point.label != "" ? "[label]<br/>": "") + "[x] of [total] ([percent]%)"
};
___pieseries.__doSelectPoint = function(point, sticky) {
    var totalVal = (this.total_value != undefined) ? this.total_value: this.__total_value;
    var result = {
        series_title: "<label>" + this.title + "</label>",
        x: point.x,
        label: point.label,
        total: totalVal,
        percent: m_ROUND((point.x / totalVal) * 100),
        __defaultHintString: this.__getHintString(point),
        __center: true
    };
    var points = this.__points;
    var minAngle = 0;
    var maxAngle = 0;
    var o_perc = 1;
    var i = 0;
    while (i < points.length && points[i] != point) {
        minAngle += (((m_PIx2) * (points[i].__x() / totalVal)) * o_perc);
        i++
    }
    maxAngle = minAngle + (((m_PIx2) * (points[i].__x() / totalVal)) * o_perc);
    this.__selected_piece = i;
    var diameter = this.__getPhysicalDiameter();
    var center = this.__getPhysicalCenter();
    var radius = m_FLOOR(diameter / 2);
    var drawAngle = ((maxAngle + minAngle) / 2);
    var drawDistance = ((radius * 3) / 4);
    result.__position = {
        x: (drawDistance * m_SIN(drawAngle)) + center.x,
        y: center.y - (drawDistance * m_COS(drawAngle))
    };
    if (sticky) {
        this.__getChart().__draw(false)
    }
    return result
};
___pieseries.__doSelectPrevious = function(point) {
    var i;
    var points = this.__points;
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }--i;
    if (i < 0) i = points.length - 1;
    this.__owner.__selectPoint(points[i])
};
___pieseries.__doSelectNext = function(point) {
    var i;
    var points = this.__points;
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i++;
    if (i >= points.length) i = 0;
    this.__owner.__selectPoint(points[i])
};
___pieseries.__doGetLegendIcon = function() {
    return "pie"
};
___pieseries.__doFree = function() {
    this.__dataHandler = null;
    this.__points = [];
    if (this.treeLegend == true) {
        for (j = EJSC.__events.length - 1; j > 0; j--) {
            if (EJSC.__events[j] != null && EJSC.__events[j][4] != null && EJSC.__events[j][4] == this.__legendItems) {
                EJSC.utility.__detachEvent(EJSC.__events[j][0], EJSC.__events[j][1], EJSC.__events[j][2], EJSC.__events[j][3]);
                var e = EJSC.__events.splice(j, 1);
                delete e
            }
        }
        this.__legendItems.innerHTML = ""
    }
};
EJSC.BarSeries = function(dh, options) {
    this.__legendCreateInherited = this.__legendCreate;
    this.__legendCreate = this.__legendCreateNew;
    this.__points = [];
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.__lineStyle = 'solid';
    this.__padding = {
        x_min: 5,
        x_max: 5,
        y_min: 0,
        y_max: 5
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__type = 'bar';
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.orientation = 'vertical';
    this.__interval = undefined;
    this.__barSeriesCount = undefined;
    this.__barSeriesIndex = undefined;
    this.__groupWidth = undefined;
    this.__barWidth = undefined;
    this.__barMinOffset = undefined;
    this.__barMaxOffset = undefined;
    this.__interval_value = undefined;
    this.ranges = new Array();
    this.intervalOffset = 0.8;
    this.groupedBars = true;
    this.__availableColors = [];
    this.defaultColors = EJSC.DefaultBarColors.slice();
    this.useColorArray = false;
    this.treeLegend = false;
    this.onBarNeedsColor = undefined;
    this.__copyOptions(options);
    if (this.orientation == "vertical") {
        this.__padding = {
            x_min: (this.y_axis == "left" ? 5 : 0),
            x_max: (this.y_axis == "left" ? 0 : 5),
            y_min: 5,
            y_max: 5
        }
    } else {
        this.__padding = {
            x_min: 5,
            x_max: 5,
            y_min: (this.x_axis == "top" ? 5 : 0),
            y_max: (this.x_axis == "top" ? 0 : 5)
        }
    }
    this.__doSetDataHandler(dh, false);
    if (this.useColorArray && options["treeLegend"] == undefined) {
        this.treeLegend = true;
        this.coloredLegend = false
    }
};
EJSC.Series.__extendTo(EJSC.BarSeries);
var ___barseries = EJSC.BarSeries.prototype;
___barseries.__getAvailableColor = function(point, ignoreEvent) {
    if (this.__availableColors.length == 0) {
        if (this.onBarNeedsColor && ignoreEvent == undefined) {
            return this.onBarNeedsColor({
                __owner: point.__owner,
                x: point.x,
                y: point.y,
                userdata: point.userdata,
                __color: point.__color,
                __rangeIndex: point.__rangeIndex
            },
            this, this.__owner)
        } else {
            this.__availableColors = this.defaultColors.slice()
        }
    }
    return this.__availableColors.pop()
};
___barseries.getPoints = function() {
    return this.__points
};
___barseries.__getBaseline = function(point) {
    if (this.orientation == "vertical") {
        return this.__getChart()["axis_" + this.y_axis].__getZeroPlaneCoordinate()
    } else {
        return this.__getChart()["axis_" + this.x_axis].__getZeroPlaneCoordinate()
    }
};
___barseries.getBarSize = function() {
    this.__calculateSharedProperties();
    if (this.orientation == "horizontal") {
        return (this.__barWidth / this.__getChart()["axis_" + this.y_axis].__scale)
    } else {
        return (this.__barWidth / this.__getChart()["axis_" + this.x_axis].__scale)
    }
};
___barseries.setDefaultColors = function(colors, reload) {
    this.defaultColors = colors.slice();
    this.__availableColors = this.defaultColors.slice();
    if (reload && this.__points.length > 0) {
        for (var i = 0; i < this.__points.length; i++) {
            this.__points[i].__color = this.__getAvailableColor(this.__points[i], true)
        }
        this.__getChart().__draw(true)
    }
};
___barseries.__doPoint2Px = function(point) {
    var pointx, pointy;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    if (this.orientation == "vertical") {
        pointx = (point.__x() + this.__barOffsetMin + (this.__barWidth / 2));
        pointy = point.__y()
    } else {
        pointx = point.__x();
        pointy = (point.__y() - this.__barOffsetMin + (this.__barWidth / 2))
    }
    if (pointx > x_axis.__current_max) {
        pointx = x_axis.__current_max
    } else if (pointx < x_axis.__current_min) {
        pointx = x_axis.__current_min
    }
    if (pointy > y_axis.__current_max) {
        pointy = y_axis.__current_max
    } else if (pointy < y_axis.__current_min) {
        pointy = y_axis.__current_min
    }
    return {
        x: x_axis.__pt2px(pointx),
        y: y_axis.__pt2px(pointy)
    }
};
___barseries.__doReload = function() {
    this.__points = [];
    this.__hasData = false;
    if (this.treeLegend == true) {
        for (j = EJSC.__events.length - 1; j > 0; j--) {
            if (EJSC.__events[j] != null && EJSC.__events[j][4] != null && EJSC.__events[j][4] == this) {
                EJSC.utility.__detachEvent(EJSC.__events[j][0], EJSC.__events[j][1], EJSC.__events[j][2], EJSC.__events[j][3]);
                var e = EJSC.__events.splice(j, 1);
                delete e
            }
        }
        if (this.__legendItems != undefined) {
            this.__legendItems.innerHTML = ""
        }
    }
    this.__availableColors = this.defaultColors.slice();
    this.__dataHandler.__loading = false;
    this.__dataHandler.__loaded = false;
    this.__dataHandler.loadData()
};
___barseries.__legendCreateNew = function() {
    this.__legendCreateInherited();
    if (this.treeLegend == true) {
        var series = this;
        this.__legend.className += " ejsc-legend-tree";
        this.__legend.appendChild(EJSC.utility.__createDOMArray(["div", {
            className: "ejsc-legend-tree-items",
            __ref: series,
            __refVar: "__legendItems"
        }]))
    }
};
___barseries.__doAfterVisibilityChange = function() {
    if (this.treeLegend == true) {
        if (this.visible == true) {
            this.__legendItems.className = "ejsc-legend-tree-items"
        } else {
            this.__legendItems.className = "ejsc-legend-tree-items ejsc-hidden"
        }
    }
};
___barseries.__doSetDataHandler = function(handler, reload) {
    this.__points = [];
    if (this.treeLegend == true) {
        for (j = EJSC.__events.length - 1; j > 0; j--) {
            if (EJSC.__events[j] != null && EJSC.__events[j][4] != null && EJSC.__events[j][4] == this) {
                EJSC.utility.__detachEvent(EJSC.__events[j][0], EJSC.__events[j][1], EJSC.__events[j][2], EJSC.__events[j][3]);
                var e = EJSC.__events.splice(j, 1);
                delete e
            }
        }
        if (this.__legendItems != undefined) {
            this.__legendItems.innerHTML = ""
        }
    }
    this.__dataHandler = handler;
    this.__dataHandler.__init(this, {
        x: null,
        y: null,
        label: null,
        userdata: null
    });
    if (reload) {
        this.__dataHandler.__loadData()
    }
};
___barseries.addRange = function(rmin, rmax, rcolor, ropacity, rlineOpacity, rlineWidth, redraw) {
    var range = {
        min: rmin,
        max: rmax,
        color: rcolor,
        opacity: ropacity,
        lineOpacity: rlineOpacity,
        lineWidth: rlineWidth
    };
    this.ranges.push(range);
    var rangeIndex = this.ranges.length - 1;
    for (var i = 0; i < this.__points.length; i++) {
        if (this.orientation == "vertical") {
            if (this.__points[i].__y() > range.min && this.__points[i].__y() <= range.max) {
                this.__points[i].__rangeIndex = rangeIndex
            }
        } else {
            if (this.__points[i].__x() > range.min && this.__points[i].__x() <= range.max) {
                this.__points[i].__rangeIndex = rangeIndex
            }
        }
    }
    if (redraw == undefined || redraw == true) {
        this.__getChart().__draw(true)
    }
};
___barseries.deleteRange = function(rmin, rmax, redraw) {
    for (var i = 0; i < this.ranges.length; i++) {
        if (this.ranges[i].min == rmin && this.ranges[i].max == rmax) {
            this.ranges.splice(i, 1);
            for (var p = 0; p < this.__points.length; p++) {
                if (this.__points[p].__rangeIndex == i) this.__points[p].__rangeIndex = undefined;
                else if (this.__points[p].__rangeIndex > i) this.__points[p].__rangeIndex = this.__points[p].__rangeIndex - 1
            }
        }
    }
    if (redraw == undefined || redraw == true) {
        this.__getChart().__draw(true)
    }
};
___barseries.clearRanges = function(redraw) {
    this.ranges = new Array();
    for (var p = 0; p < this.__points.length; p++) this.__points[p].__rangeIndex = undefined;
    if (redraw == undefined || redraw == true) this.__getChart().__draw(true)
};
___barseries.setGroupedBars = function(grouped, redraw) {
    var series = this.__owner.__series;
    var seriesLength = series.length;
    var s = 0;
    for (; s < seriesLength; s++) {
        if ((series[s].__type == 'bar') && series[s].orientation == this.orientation && series[s].visible == true) {
            series[s].groupedBars = grouped
        }
    }
    if (redraw == undefined || redraw == true) {
        this.__getChart().__draw(true)
    }
};
___barseries.setIntervalOffset = function(offset, redraw) {
    var series = this.__owner.__series;
    var seriesLength = series.length;
    var s = 0;
    for (; s < seriesLength; s++) {
        if ((series[s].__type == 'bar') && series[s].orientation == this.orientation && series[s].visible == true) {
            series[s].intervalOffset = offset
        }
    }
    if (redraw == undefined || redraw == true) {
        this.__getChart().__draw(true)
    }
};
___barseries.__doResetExtremes = function() {
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined
};
___barseries.__doCalculateExtremes = function() {
    var points = this.__points;
    if (this.__drawing || !this.__getHasData()) {
        return
    }
    for (var i = 0; i < points.length; i++) {
        if (this.orientation == "vertical" && points[i].__x() == null) continue;
        if (this.orientation == "horizontal" && points[i].__y() == null) continue;
        if (this.__minX == undefined || points[i].__x() < this.__minX) this.__minX = points[i].__x();
        if (this.__maxX == undefined || points[i].__x() > this.__maxX) this.__maxX = points[i].__x();
        if (points[i].y != null) {
            if (this.__minY == undefined || points[i].__y() < this.__minY) this.__minY = points[i].__y();
            if (this.__maxY == undefined || points[i].__y() > this.__maxY) this.__maxY = points[i].__y()
        }
    }
    this.__calculateSharedProperties();
    var chart = this.__getChart();
    var x_baseline = chart["axis_" + this.x_axis].__getZeroPlaneCoordinate();
    var y_baseline = chart["axis_" + this.y_axis].__getZeroPlaneCoordinate();
    if (this.orientation == "vertical") {
        this.__minX = this.__minX - (this.__interval / 2);
        this.__maxX = this.__maxX + (this.__interval / 2);
        if (this.__minY > y_baseline) {
            this.__minY = y_baseline
        } else if (this.__maxY < y_baseline) {
            this.__maxY = y_baseline
        }
    } else {
        this.__minY = this.__minY - (this.__interval / 2);
        this.__maxY = this.__maxY + (this.__interval / 2);
        if (this.__minX > x_baseline) {
            this.__minX = x_baseline
        } else if (this.__maxX < x_baseline) {
            this.__maxX = x_baseline
        }
    }
};
___barseries.__doSort_horizontal = function(a, b) {
    return (a.__y() - b.__y())
};
___barseries.__doSort_vertical = function(a, b) {
    return (a.__x() - b.__x())
};
___barseries.__doAutoSort = function() {
    this.__points.sort(this["__doSort_" + this.orientation])
};
___barseries.__doOnDataAvailable = function(data) {
    if (data.length == 0) {
        this.__hasData = false;
        return
    }
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_string_values = x_axis.__text_values.__count() > 0 || x_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].x);
    var y_string_values = y_axis.__text_values.__count() > 0 || y_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].y);
    var range = 0;
    var ranges = this.ranges;
    var rangesLen = this.ranges.length;
    var p, lc;
    var series = this;
    for (var i = 0; i < data.length; i++) {
        if (x_string_values) {
            data[i].x = x_axis.__text_values.__add(data[i].x)
        } else {
            data[i].x = parseFloat(data[i].x)
        }
        if (y_string_values) {
            data[i].y = y_axis.__text_values.__add(data[i].y)
        } else {
            data[i].y = (data[i].y == null || data[i].y == undefined ? data[i].y: parseFloat(data[i].y))
        }
        p = new EJSC.BarPoint(data[i].x, data[i].y, data[i].label, data[i].userdata, this);
        if (rangesLen > 0) {
            for (range = 0; range < rangesLen; range++) {
                if (this.orientation == "vertical") {
                    if (p.__y() > ranges[range].min && p.__y() <= ranges[range].max) {
                        p.__rangeIndex = range;
                        break
                    }
                } else {
                    if (p.__x() > ranges[range].min && p.__x() <= ranges[range].max) {
                        p.__rangeIndex = range;
                        break
                    }
                }
            }
        }
        this.__points.push(p);
        if (this.treeLegend == true) {
            if (this.orientation == "vertical") {
                lc = x_axis.__getLabel(p.__x())
            } else {
                lc = y_axis.__getLabel(p.__y())
            }
            this.__legendItems.appendChild(EJSC.utility.__createDOMArray(["a", {
                innerHTML: lc,
                title: lc,
                className: "ejsc-legend-tree-item",
                pointIndex: i,
                __styles: {
                    color: EJSC.utility.__getColor(p.__color == undefined ? this.color: p.__color).hex
                },
                __ref: series,
                __events: {
                    click: function(e) {
                        if (!series.__getChart().allow_interactivity) {
                            return
                        }
                        var targ;
                        if (!e) var e = window.event;
                        if (e.target) targ = e.target;
                        else if (e.srcElement) targ = e.srcElement;
                        if (targ.nodeType == 3) targ = targ.parentNode;
                        series.__getChart().__selectPoint(series.__points[targ.pointIndex], true, true)
                    }
                }
            }]))
        }
    }
    this.__hasData = (this.__points.length > 0);
    this.__interval_value = undefined
};
___barseries.__calculateSharedProperties = function() {
    var series = this.__getChart().__series;
    var seriesLength = series.length;
    var thisSeriesFound = false;
    var s = 0;
    var sInterval = undefined;
    var newIndex = 0;
    this.__interval = undefined;
    this.__barSeriesCount = 0;
    this.__barSeriesIndex = 0;
    for (; s < seriesLength; s++) {
        if ((series[s].__type == 'bar') && series[s].orientation == this.orientation && series[s].visible == true) {
            if (this.__barSeriesCount == 0) {
                this.groupedBars = series[s].groupedBars;
                if (this.groupedBars) {
                    this.intervalOffset = series[s].intervalOffset
                }
            }
            sInterval = series[s].__getInterval();
            if (this.__interval == undefined || sInterval < this.__interval) {
                this.__interval = sInterval
            }
            this.__barSeriesCount++;
            if (!thisSeriesFound) {
                if (series[s] === this) {
                    thisSeriesFound = true
                } else {
                    newIndex++
                }
            }
        }
    }
    if (this.__interval == undefined) this.__interval = 1;
    if (thisSeriesFound) {
        this.__barSeriesIndex = newIndex
    }
    if (!this.groupedBars) {
        this.__barSeriesCount = 1;
        this.__barSeriesIndex = 0
    }
    this.__groupWidth = (this.__interval * this.intervalOffset);
    this.__barWidth = (this.__groupWidth) / this.__barSeriesCount;
    var groupMin = -(this.__groupWidth / 2);
    this.__barOffsetMin = (groupMin + (this.__barSeriesIndex * this.__barWidth));
    this.__barOffsetMax = (this.__barOffsetMin + this.__barWidth)
};
___barseries.__getInterval = function() {
    if (this.__interval_value !== undefined) return this.__interval_value;
    var result = undefined;
    var points = this.__points;
    var len = this.__points.length;
    var diff;
    var i = 0;
    for (; i < len - 1; i++) {
        if (this.orientation == "vertical") {
            diff = (points[i + 1].__x() - points[i].__x())
        } else {
            diff = (points[i + 1].__y() - points[i].__y())
        }
        if (result == undefined || (result > diff)) {
            if (diff != 0) {
                result = diff
            }
        }
    }
    this.__interval_value = result;
    return result
};
___barseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        0);
        return
    }
    this.__drawing = true;
    try {
        var saveBarNeedsColor = this.onBarNeedsColor;
        var saveUseColorArray = this.useColorArray;
        if (this.onBarNeedsColor != undefined || this.useColorArray) {
            this.onBarNeedsColor = undefined;
            this.useColorArray = false
        }
        var graph = this.__getChart();
        var points = this.__points;
        var pointsLength = points.length;
        var c;
        var x_axis = this.__getChart()["axis_" + this.x_axis];
        var y_axis = this.__getChart()["axis_" + this.y_axis];
        ctx.dashStyle = this.__lineStyle;
        this.__calculateSharedProperties();
        var x_min = x_axis.__current_min;
        var x_max = x_axis.__current_max;
        var y_min = y_axis.__current_min;
        var y_max = y_axis.__current_max;
        var canvas_width = this.__getDrawArea().width;
        var canvas_height = this.__getDrawArea().height;
        var canvas_top = this.__getDrawArea().top;
        var canvas_left = this.__getDrawArea().left;
        if (this.orientation == "vertical") {
            var plotWidth = (this.__barOffsetMax - this.__barOffsetMin) / x_axis.__scale;
            var seriesMinX = x_min - this.__barOffsetMax;
            var seriesMaxX = x_max - this.__barOffsetMin;
            var firstPoint = 0;
            while (firstPoint < pointsLength && points[firstPoint].__x() <= seriesMinX) {
                firstPoint++
            }
        } else {
            var plotWidth = (this.__barOffsetMax - this.__barOffsetMin) / y_axis.__scale;
            var seriesMinY = y_min - this.__barOffsetMax;
            var seriesMaxY = y_max - this.__barOffsetMin;
            var firstPoint = 0;
            while (firstPoint < pointsLength && points[firstPoint].__y() <= seriesMinY) {
                firstPoint++
            }
        }
        if (plotWidth < 1) plotWidth = 1;
        var plotYmax, plotYmin, plotXmin, plotXmax;
        var range, pcolor, r, p;
        for (p = 0; p < pointsLength; p++) {
            if (points[p].__rangeIndex != undefined) continue;
            pcolor = (points[p].__color == undefined ? this.color: points[p].__color);
            range = undefined;
            for (r = 0; r < this.ranges.length; r++) {
                if (pcolor == this.ranges[r].color) {
                    range = r
                }
            }
            if (range == undefined) {
                this.ranges.push({
                    min: 0,
                    max: 0,
                    color: pcolor,
                    opacity: (points[p].opacity == undefined ? this.opacity: points[p].opacity),
                    lineOpacity: (points[p].lineOpacity == undefined ? this.lineOpacity: points[p].lineOpacity),
                    lineWidth: (points[p].lineWidth == undefined ? this.lineWidth: points[p].lineWidth)
                });
                range = this.ranges.length - 1
            }
            points[p].__rangeIndex = range
        }
        if (this.orientation == "vertical") {
            if (firstPoint < pointsLength) {
                var drawingRanges = false;
                var rLen = this.ranges.length;
                for (var r = 0; r <= this.ranges.length; r++) {
                    if (r < this.ranges.length) {
                        c_line = EJSC.utility.__getColor(this.ranges[r].color, (this.ranges[r].lineOpacity / 100));
                        c_fill = EJSC.utility.__getColor(this.ranges[r].color, (this.ranges[r].opacity / 100));
                        if (plotWidth == 1) {
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = c_fill.rgba
                        } else {
                            ctx.lineWidth = this.ranges[r].lineWidth;
                            ctx.strokeStyle = c_line.rgba
                        }
                        ctx.fillStyle = c_fill.rgba;
                        drawingRanges = true
                    } else {
                        c_line = EJSC.utility.__getColor(this.color, (this.lineOpacity / 100));
                        c_fill = EJSC.utility.__getColor(this.color, (this.opacity / 100));
                        ctx.fillStyle = c_fill.rgba;
                        if (plotWidth == 1 && this.lineWidth == 0) {
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = c_fill.rgba
                        } else {
                            ctx.lineWidth = this.lineWidth;
                            ctx.strokeStyle = c_line.rgba
                        }
                    }
                    var j = firstPoint;
                    var pointsDrawn = false;
                    if (EJSC.__isIE && (this.onBarNeedsColor == undefined) && !this.useColorArray) ctx.beginPath();
                    while (j < pointsLength && points[j].__x() <= seriesMaxX) {
                        if (points[j].__y() == undefined || points[j].__y() == null) {
                            j++;
                            continue
                        }
                        if (r == rLen) {
                            if (points[j].__rangeIndex != undefined) {
                                j++;
                                continue
                            }
                        } else if (points[j].__rangeIndex != r) {
                            j++;
                            continue
                        }
                        if (this.onBarNeedsColor != undefined || this.useColorArray) {
                            c = EJSC.utility.__getColor(points[j].__color);
                            ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (points[j].__opacity / 100) + ")";
                            if (plotWidth == 1 && this.lineWidth == 0) {
                                ctx.lineWidth = 1;
                                ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (points[j].__opacity / 100) + ")"
                            } else {
                                ctx.lineWidth = points[j].__lineWidth;
                                ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (points[j].__lineOpacity / 100) + ")"
                            }
                        }
                        if (!EJSC.__isIE || (this.onBarNeedsColor != undefined) || this.useColorArray) ctx.beginPath();
                        plotYmax = y_axis.__pt2px(points[j].__y());
                        plotYmin = y_axis.__pt2px(this.__getBaseline(points[j]));
                        plotXmin = x_axis.__pt2px(points[j].__x() + this.__barOffsetMin);
                        plotXmax = plotXmin + plotWidth;
                        if (plotXmin < canvas_left) {
                            plotXmin = canvas_left - 1
                        } else if (plotXmin > canvas_left + canvas_width) {
                            plotXmin = canvas_left + canvas_width + 1
                        }
                        if (plotXmax < canvas_left) {
                            plotXmax = canvas_left - 1
                        } else if (plotXmax > canvas_left + canvas_width) {
                            plotXmax = canvas_left + canvas_width + 1
                        }
                        if (plotYmin < canvas_top) {
                            plotYmin = canvas_top - 1
                        } else if (plotYmin > canvas_top + canvas_height) {
                            plotYmin = canvas_top + canvas_height + 1
                        }
                        if (plotYmax < canvas_top) {
                            plotYmax = canvas_top - 1
                        } else if (plotYmax > canvas_top + canvas_height) {
                            plotYmax = canvas_top + canvas_height + 1
                        }
                        if ((plotYmin == -1 && plotYmax == -1) || (plotXmin == -1 && plotXmax == -1) || (plotYmin == (canvas_top + canvas_height + 1) && plotYmax == (canvas_top + canvas_height + 1)) || (plotXmin == (canvas_left + canvas_width + 1) && plotXmax == (canvas_left + canvas_width + 1))) {
                            j++;
                            continue
                        }
                        ctx.moveTo(plotXmin, plotYmin);
                        ctx.lineTo(plotXmin, plotYmax);
                        if (plotWidth > 1) {
                            ctx.lineTo(plotXmax, plotYmax);
                            ctx.lineTo(plotXmax, plotYmin);
                            ctx.lineTo(plotXmin, plotYmin)
                        }
                        pointsDrawn = true;
                        if (!EJSC.__isIE || (this.onBarNeedsColor != undefined) || this.useColorArray) {
                            ctx.closePath();
                            if (EJSC.__isIE) {
                                var save_path = ctx.currentPath_;
                                ctx.stroke();
                                if (plotWidth > 1) {
                                    ctx.currentPath_ = save_path;
                                    ctx.fill()
                                }
                            } else {
                                if (plotWidth > 1) ctx.fill();
                                ctx.stroke()
                            }
                        }
                        j++
                    }
                    if (EJSC.__isIE && pointsDrawn && (this.onBarNeedsColor == undefined) && !this.useColorArray) {
                        ctx.closePath();
                        var save_path = ctx.currentPath_;
                        ctx.stroke();
                        if (plotWidth > 1) {
                            ctx.currentPath_ = save_path;
                            ctx.fill()
                        }
                    }
                }
            }
        } else {
            if (firstPoint < pointsLength) {
                var drawingRanges = false;
                var rLen = this.ranges.length;
                for (var r = 0; r <= this.ranges.length; r++) {
                    if (r < this.ranges.length) {
                        c = EJSC.utility.__getColor(this.ranges[r].color);
                        if (plotWidth == 1) {
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.ranges[r].opacity / 100) + ")"
                        } else {
                            ctx.lineWidth = this.ranges[r].lineWidth;
                            ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.ranges[r].lineOpacity / 100) + ")"
                        }
                        ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.ranges[r].opacity / 100) + ")";
                        drawingRanges = true
                    } else {
                        c = EJSC.utility.__getColor(this.color);
                        ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.opacity / 100) + ")";
                        if (plotWidth == 1 && this.lineWidth == 0) {
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.opacity / 100) + ")"
                        } else {
                            ctx.lineWidth = this.lineWidth;
                            ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.lineOpacity / 100) + ")"
                        }
                    }
                    var j = firstPoint;
                    var pointsDrawn = false;
                    if (EJSC.__isIE && (this.onBarNeedsColor == undefined) && !this.useColorArray) ctx.beginPath();
                    while (j < pointsLength && points[j].__y() <= seriesMaxY) {
                        if (points[j].__x() == undefined || points[j].__x() == null) {
                            j++;
                            continue
                        }
                        if (r == rLen) {
                            if (points[j].__rangeIndex != undefined) {
                                j++;
                                continue
                            }
                        } else if (points[j].__rangeIndex != r) {
                            j++;
                            continue
                        }
                        if (this.onBarNeedsColor != undefined || this.useColorArray) {
                            c = EJSC.utility.__getColor(points[j].__color);
                            ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (points[j].__opacity / 100) + ")";
                            if (plotWidth == 1 && this.lineWidth == 0) {
                                ctx.lineWidth = 1;
                                ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (points[j].__opacity / 100) + ")"
                            } else {
                                ctx.lineWidth = points[j].__lineWidth;
                                ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (points[j].__lineOpacity / 100) + ")"
                            }
                        }
                        if (!EJSC.__isIE || (this.onBarNeedsColor != undefined) || this.useColorArray) ctx.beginPath();
                        plotXmax = x_axis.__pt2px(points[j].__x());
                        plotXmin = x_axis.__pt2px(this.__getBaseline(points[j]));
                        plotYmin = y_axis.__pt2px(points[j].__y() + this.__barOffsetMin);
                        plotYmax = plotYmin - plotWidth;
                        if (plotXmin < canvas_left) {
                            plotXmin = canvas_left - 1
                        } else if (plotXmin > canvas_left + canvas_width) {
                            plotXmin = canvas_left + canvas_width + 1
                        }
                        if (plotXmax < canvas_left) {
                            plotXmax = canvas_left - 1
                        } else if (plotXmax > canvas_left + canvas_width) {
                            plotXmax = canvas_left + canvas_width + 1
                        }
                        if (plotYmin < canvas_top) {
                            plotYmin = canvas_top - 1
                        } else if (plotYmin > canvas_top + canvas_height) {
                            plotYmin = canvas_top + canvas_height + 1
                        }
                        if (plotYmax < canvas_top) {
                            plotYmax = canvas_top - 1
                        } else if (plotYmax > canvas_top + canvas_height) {
                            plotYmax = canvas_top + canvas_height + 1
                        }
                        if ((plotYmin == -1 && plotYmax == -1) || (plotXmin == -1 && plotXmax == -1) || (plotYmin == (canvas_top + canvas_height + 1) && plotYmax == (canvas_top + canvas_height + 1)) || (plotXmin == (canvas_left + canvas_width + 1) && plotXmax == (canvas_top + canvas_width + 1))) {
                            j++;
                            continue
                        }
                        ctx.moveTo(plotXmin, plotYmin);
                        ctx.lineTo(plotXmax, plotYmin);
                        if (plotWidth > 1) {
                            ctx.lineTo(plotXmax, plotYmax);
                            ctx.lineTo(plotXmin, plotYmax);
                            ctx.lineTo(plotXmin, plotYmin)
                        }
                        pointsDrawn = true;
                        if (!EJSC.__isIE || (this.onBarNeedsColor != undefined) || this.useColorArray) {
                            ctx.closePath();
                            if (EJSC.__isIE) {
                                var save_path = ctx.currentPath_;
                                ctx.stroke();
                                if (plotWidth > 1) {
                                    ctx.currentPath_ = save_path;
                                    ctx.fill()
                                }
                            } else {
                                if (plotWidth > 1) ctx.fill();
                                ctx.stroke()
                            }
                        }
                        j++
                    }
                    if (EJSC.__isIE && pointsDrawn && (this.onBarNeedsColor == undefined) && !this.useColorArray) {
                        ctx.closePath();
                        var save_path = ctx.currentPath_;
                        ctx.stroke();
                        if (plotWidth > 1) {
                            ctx.currentPath_ = save_path;
                            ctx.fill()
                        }
                    }
                }
            }
        }
    } catch(e) {
        alert(e.message)
    } finally {
        this.onBarNeedsColor = saveBarNeedsColor;
        this.useColorArray = saveUseColorArray;
        this.__drawing = false
    }
};
___barseries.getBarSizeInPoints = function() {
    this.__calculateSharedProperties();
    return this.__barWidth
};
___barseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX + chart.__draw_area.left);
    var i, minY, maxY;
    for (i = 0; i < this.__points.length; i++) {
        pointMin = this.__points[i].__x() + this.__barOffsetMin;
        pointMax = this.__points[i].__x() + this.__barOffsetMax;
        if ((minX > pointMin && maxX < pointMax) || (minX > pointMin && maxX > pointMax && minX < pointMax) || (minX < pointMin && maxX > pointMax) || (minX < pointMin && maxX < pointMax && maxX > pointMin)) {
            if (minY == undefined || minY > this.__points[i].__y()) minY = this.__points[i].__y();
            if (maxY == undefined || maxY < this.__points[i].__y()) maxY = this.__points[i].__y()
        }
    }
    var y_baseline = y_axis.__getZeroPlaneCoordinate();
    if (y_baseline > maxY) maxY = y_baseline;
    if (y_baseline < minY) minY = y_baseline;
    if (minY == undefined || maxY == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxY) - chart.__draw_area.top,
            max: y_axis.__pt2px(minY) - chart.__draw_area.top
        }
    }
};
___barseries.__doGetXRange = function(screenMinY, screenMaxY) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minY = y_axis.__px2pt(screenMaxY + chart.__draw_area.top);
    var maxY = y_axis.__px2pt(screenMinY + chart.__draw_area.top);
    var i, minX, maxX, pointMax, pointMin;
    for (i = 0; i < this.__points.length; i++) {
        pointMin = this.__points[i].__y() + this.__barOffsetMin;
        pointMax = this.__points[i].__y() + this.__barOffsetMax;
        if ((minY > pointMin && maxY < pointMax) || (minY > pointMin && maxY > pointMax && minY < pointMax) || (minY < pointMin && maxY > pointMax) || (minY < pointMin && maxY < pointMax && maxY > pointMin)) {
            if (minX == undefined || minX > this.__points[i].__x()) minX = this.__points[i].__x();
            if (maxX == undefined || maxX < this.__points[i].__x()) maxX = this.__points[i].__x()
        }
    }
    var x_baseline = x_axis.__getZeroPlaneCoordinate();
    if (x_baseline > maxX) maxX = x_baseline;
    if (x_baseline < minX) minX = x_baseline;
    if (minX == undefined || maxX == undefined) {
        return null
    } else {
        return {
            min: x_axis.__pt2px(minX) - chart.__draw_area.left,
            max: x_axis.__pt2px(maxX) - chart.__draw_area.left
        }
    }
};
___barseries.__doFindClosestByPoint = function(point) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var area = chart.__draw_area;
    if (x_axis.__text_values.__count() > 0) {
        point.x = x_axis.__text_values.__find(point.x).__index
    }
    if (y_axis.__text_values.__count() > 0) {
        point.y = y_axis.__text_values.__find(point.y).__index
    }
    var result = this.__findClosestPoint({
        x: x_axis.__pt2px(point.x) - area.left,
        y: y_axis.__pt2px(point.y) - area.top
    },
    false);
    if (result != null) {
        return result.point
    }
};
___barseries.__doFindClosestByPixel = function(point) {
    var point = this.__findClosestPoint({
        x: point.x,
        y: point.y
    },
    false)
};
___barseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var points = this.__points;
    var pointsLength = points.length;
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var x_min = x_axis.__current_min;
    var x_max = x_axis.__current_max;
    var y_min = y_axis.__current_min;
    var y_max = y_axis.__current_max;
    var x_scale = x_axis.__scale;
    var y_scale = y_axis.__scale;
    var foundPoints = [];
    var closestPoint = undefined;
    var i;
    var distance = EJSC.math.__distance;
    var x = mouse.x == null ? null: x_axis.__px2pt(mouse.x);
    var y = mouse.y == null ? null: y_axis.__px2pt(mouse.y);
    mouse = {
        x: (mouse.x == null ? null: mouse.x + chart.__draw_area.left),
        y: (mouse.y == null ? null: mouse.y + chart.__draw_area.top)
    };
    if (use_proximity) {
        var x_px_adj = (this.lineWidth + chart.proximity_snap) * x_scale;
        var y_px_adj = (this.lineWidth + chart.proximity_snap) * y_scale;
        if (this.orientation == "vertical") {
            var seriesMinX = x_min - this.__barOffsetMax;
            var seriesMaxX = x_max - this.__barOffsetMin;
            var firstPoint = 0;
            while (firstPoint < pointsLength && points[firstPoint].__x() < seriesMinX) {
                firstPoint++
            }
            var plotYmax, plotYmin, plotXmin, plotXmax, NAplotYmax, NAplotYmin, NAplotXmin, NAplotXmax;
            if (firstPoint < pointsLength) {
                var p = firstPoint;
                while (p < pointsLength && points[p].__x() <= seriesMaxX) {
                    if (points[p].__y() > y_axis.__getZeroPlaneCoordinate()) {
                        NAplotYmax = y_axis.__getZeroPlaneCoordinate();
                        NAplotYmin = points[p].__y()
                    } else {
                        NAplotYmax = points[p].__y();
                        NAplotYmin = y_axis.__getZeroPlaneCoordinate()
                    }
                    plotYmin = y_axis.__pt2px(NAplotYmin + y_px_adj);
                    plotYmax = y_axis.__pt2px(NAplotYmax - y_px_adj);
                    NAplotXmin = (points[p].__x() + this.__barOffsetMin);
                    NAplotXmax = x_axis.__pt2px(NAplotXmin + this.__barWidth);
                    plotXmin = NAplotXmin - x_px_adj;
                    plotXmax = x_axis.__pt2px(plotXmin + this.__barWidth + (x_px_adj * 2));
                    plotXmin = x_axis.__pt2px(plotXmin);
                    NAplotYmin = y_axis.__pt2px(NAplotYmin);
                    NAplotYmax = y_axis.__pt2px(NAplotYmax);
                    NAplotXmin = x_axis.__pt2px(NAplotXmin);
                    if (mouse.x >= plotXmin && mouse.x <= plotXmax && mouse.y >= plotYmin && mouse.y <= plotYmax) {
                        if (mouse.x >= NAplotXmin && mouse.x <= NAplotXmax && mouse.y >= NAplotYmin && mouse.y <= NAplotYmax) {
                            return {
                                point: points[p],
                                distance: distance(x, y, ((NAplotXmin + NAplotXmax) / 2), ((NAplotYmin + NAplotYmax) / 2))
                            }
                        } else {
                            foundPoints.push([points[p], EJSC.math.__distance(mouse.x, mouse.y, x_axis.__pt2px(points[p].__x()), y_axis.__pt2px(points[p].__y()))])
                        }
                    }
                    p++
                }
                for (i = 0; i < foundPoints.length; i++) {
                    if (closestPoint == undefined) {
                        closestPoint = foundPoints[i]
                    } else {
                        if (closestPoint[1] > foundPoints[i][1]) {
                            closestPoint = foundPoints[i]
                        }
                    }
                }
                if (closestPoint != undefined) {
                    return {
                        point: closestPoint[0],
                        distance: closestPoint[1]
                    }
                }
            }
        } else {
            var seriesMinY = y_min - this.__barOffsetMax;
            var seriesMaxY = y_max - this.__barOffsetMin;
            var firstPoint = 0;
            while (firstPoint < pointsLength && points[firstPoint].__y() < seriesMinY) {
                firstPoint++
            }
            var plotYmax, plotYmin, plotXmin, plotXmax, NAplotYmax, NAplotYmin, NAplotXmin, NAplotXmax;
            if (firstPoint < pointsLength) {
                var p = firstPoint;
                while (p < pointsLength && points[p].__y() <= seriesMaxY) {
                    if (points[p].__x() < x_axis.__getZeroPlaneCoordinate()) {
                        NAplotXmax = x_axis.__getZeroPlaneCoordinate();
                        NAplotXmin = points[p].__x()
                    } else {
                        NAplotXmax = points[p].__x();
                        NAplotXmin = x_axis.__getZeroPlaneCoordinate()
                    }
                    plotXmax = x_axis.__pt2px(NAplotXmax + x_px_adj);
                    plotXmin = x_axis.__pt2px(NAplotXmin - x_px_adj);
                    NAplotYmax = (points[p].__y() + this.__barOffsetMin);
                    NAplotYmin = y_axis.__pt2px(NAplotYmax + this.__barWidth);
                    plotYmax = NAplotYmax - y_px_adj;
                    plotYmin = y_axis.__pt2px((plotYmax + this.__barWidth) + (y_px_adj * 2));
                    plotYmax = y_axis.__pt2px(plotYmax);
                    NAplotXmin = x_axis.__pt2px(NAplotXmin);
                    NAplotXmax = x_axis.__pt2px(NAplotXmax);
                    NAplotYmax = y_axis.__pt2px(NAplotYmax);
                    if (mouse.x >= plotXmin && mouse.x <= plotXmax && mouse.y >= plotYmin && mouse.y <= plotYmax) {
                        if (mouse.x >= NAplotXmin && mouse.x <= NAplotXmax && mouse.y >= NAplotYmin && mouse.y <= NAplotYmax) {
                            return {
                                point: points[p],
                                distance: distance(x, y, ((NAplotXmin + NAplotXmax) / 2), ((NAplotYmin + NAplotYmax) / 2))
                            }
                        } else {
                            foundPoints.push([points[p], EJSC.math.__distance(mouse.x, mouse.y, x_axis.__pt2px(points[p].__x()), y_axis.__pt2px(points[p].__y()))])
                        }
                    }
                    p++
                }
                for (i = 0; i < foundPoints.length; i++) {
                    if (closestPoint == undefined) {
                        closestPoint = foundPoints[i]
                    } else {
                        if (closestPoint[1] > foundPoints[i][1]) {
                            closestPoint = foundPoints[i]
                        }
                    }
                }
                if (closestPoint != undefined) {
                    return {
                        point: closestPoint[0],
                        distance: closestPoint[1]
                    }
                }
            }
        }
        return null
    } else {
        var distance = EJSC.math.__distance;
        var i;
        var currentDistance = null;
        var result = null;
        var tempDistance;
        var pointX, pointY;
        var x = mouse.x == null ? null: x_axis.__px2pt(mouse.x);
        var y = mouse.y == null ? null: y_axis.__px2pt(mouse.y);
        for (i = 0; i < pointsLength; i++) {
            pointX = points[i].__x();
            pointY = points[i].__y();
            if (pointX < x_min || pointY < y_min || pointY > y_max) {
                continue
            }
            if (pointX > x_max) {
                break
            }
            tempDistance = distance(mouse.x == null ? x_axis.__pt2px(pointX) : mouse.x, mouse.y == null ? null: y_axis.__pt2px(pointY), x_axis.__pt2px(pointX), y_axis.__pt2px(pointY));
            if (currentDistance == null || tempDistance < currentDistance) {
                currentDistance = tempDistance;
                result = {
                    distance: currentDistance,
                    point: points[i]
                }
            }
        }
        return result
    }
};
___barseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_min = x_axis.__current_min;
    var x_max = x_axis.__current_max;
    var y_min = y_axis.__current_min;
    var y_max = y_axis.__current_max;
    if (this.orientation == "vertical") {
        var pointMinX = point.__x() + this.__barOffsetMin;
        var pointMaxX = pointMinX + this.__barWidth;
        var pointMinY = this.__getBaseline();
        var pointMaxY = point.__y()
    } else {
        var pointMinX = this.__getBaseline();
        var pointMaxX = point.__x();
        var pointMinY = point.__y() + this.__barOffsetMin;
        var pointMaxY = pointMinY + this.__barWidth
    }
    if (pointMaxX < x_min) {
        if (!sticky) {
            return null
        } else {
            pointMaxX = x_min
        }
    } else if (pointMinX > x_max) {
        if (!sticky) {
            return null
        } else {
            pointMinX = x_max
        }
    }
    if (pointMaxY < y_min) {
        if (!sticky) {
            return null
        } else {
            pointMaxY = y_min
        }
    } else if (pointMinY > y_max) {
        if (!sticky) {
            return null
        } else {
            pointMinY = y_max
        }
    }
    var result = {
        series_title: "<label>" + this.title + "</label>",
        xaxis: x_axis.__getHintCaption(),
        yaxis: y_axis.__getHintCaption(),
        x: x_axis.__getLabel(point.__x(), undefined, this.x_axis_formatter),
        y: y_axis.__getLabel(point.__y(), undefined, this.y_axis_formatter),
        label: point.label,
        __defaultHintString: this.__getHintString(point),
        __center: false
    };
    var x, y;
    if (this.orientation == "horizontal") {
        y = pointMinY + ((pointMaxY - pointMinY) / 2)
    } else {
        y = point.__y()
    }
    if (y > y_max) {
        y = y_max
    } else if (y < y_min) {
        y = y_min
    }
    if (this.orientation == "vertical") {
        x = pointMinX + ((pointMaxX - pointMinX) / 2)
    } else {
        x = point.__x()
    }
    if (x > x_max) {
        x = x_max
    } else if (x < x_min) {
        x = x_min
    }
    result.__position = {
        x: x_axis.__pt2px(x),
        y: y_axis.__pt2px(y)
    };
    return result
};
___barseries.__doSelectPrevious = function(point) {
    var i = 0;
    var chart = this.__getChart();
    var points = this.__points;
    var pointsLength = points.length;
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    if (pointsLength < 2) {
        return
    }
    var x_min = x_axis.__current_min;
    var x_max = x_axis.__current_max;
    var y_min = y_axis.__current_min;
    var y_max = y_axis.__current_max;
    if (this.orientation == "vertical") {
        var seriesMinX = x_min - this.__barOffsetMax;
        var seriesMaxX = x_max - this.__barOffsetMin
    } else {
        var seriesMinY = y_min + this.__barOffsetMax;
        var seriesMaxY = y_max - this.__barOFfsetMin
    }
    for (i = 0; i < pointsLength; i++) {
        if (points[i] == point) break
    }
    if (this.orientation == "vertical") {
        i--;
        if (i < 0 || points[i].__x() < seriesMinX) {
            i = points.length - 1;
            while (points[i].__x() > seriesMaxX) i--
        }
    } else {
        i++;
        if (i >= points.length || points[i].__y() > seriesMaxY) {
            i = 0;
            while (points[i].__y() < seriesMinY) i++
        }
    }
    chart.__selectPoint(points[i])
};
___barseries.__doSelectNext = function(point) {
    var i = 0;
    var chart = this.__getChart();
    var points = this.__points;
    var pointsLength = points.length;
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    if (pointsLength < 2) {
        return
    }
    var x_min = x_axis.__current_min;
    var x_max = x_axis.__current_max;
    var y_min = y_axis.__current_min;
    var y_max = y_axis.__current_max;
    if (this.orientation == "vertical") {
        var seriesMinX = x_min - this.__barOffsetMax;
        var seriesMaxX = x_max - this.__barOffsetMin
    } else {
        var seriesMinY = y_min + this.__barOffsetMax;
        var seriesMaxY = y_max - this.__barOFfsetMin
    }
    for (i = 0; i < pointsLength; i++) {
        if (points[i] == point) break
    }
    if (this.orientation == "vertical") {
        i++;
        if (i >= points.length || points[i].__x() > seriesMaxX) {
            i = 0;
            while (points[i].__x() < seriesMinX) i++
        }
    } else {
        i--;
        if (i < 0 || points[i].__y() < seriesMinY) {
            i = points.length - 1;
            while (points[i].__y() > seriesMaxY) i--
        }
    }
    chart.__selectPoint(points[i])
};
___barseries.__doGetLegendIcon = function() {
    if (this.orientation == "vertical") {
        return "bar-vertical"
    } else {
        return "bar-horizontal"
    }
};
___barseries.__doFree = function() {
    this.__dataHandler = null;
    this.__points = [];
    if (this.treeLegend == true) {
        for (j = EJSC.__events.length - 1; j > 0; j--) {
            if (EJSC.__events[j] != null && EJSC.__events[j][4] != null && EJSC.__events[j][4] == this) {
                EJSC.utility.__detachEvent(EJSC.__events[j][0], EJSC.__events[j][1], EJSC.__events[j][2], EJSC.__events[j][3]);
                var e = EJSC.__events.splice(j, 1);
                delete e
            }
        }
    }
};
EJSC.FunctionSeries = function(fn, options) {
    this.__function = fn;
    this.__minX = -20;
    this.__maxX = 20;
    this.__minY = -20;
    this.__maxY = 20;
    this.__drawing = false;
    this.__lineStyle = 'solid';
    this.__padding = {
        x_min: 0,
        x_max: 0,
        y_min: 5,
        y_max: 5
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__type = 'function';
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.__hasData = true;
    this.__copyOptions(options)
};
EJSC.Series.__extendTo(EJSC.FunctionSeries);
var ___functionseries = EJSC.FunctionSeries.prototype;
___functionseries.__doDraw = function(ctx) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var canDraw = true;
    if (isNaN(x_axis.__scale)) {
        x_axis.__calculateExtremes();
        canDraw = false
    }
    if (isNaN(y_axis.__scale)) {
        y_axis.__calculateExtremes();
        canDraw = false
    }
    if (!canDraw) {
        var ref = this;
        window.setTimeout(function() {
            ref.__getChart().__calculateExtremes(true)
        },
        0);
        return
    }
    if (this.__doComputeFunction() == false || ctx == undefined) return;
    this.__doDrawPlot(ctx)
};
___functionseries.__doComputeFunction = function() {};
___functionseries.__doDrawPlot = function(ctx) {
    var chart = this.__getChart();
    if (chart["axis_" + this.x_axis].__current_min == undefined) {
        chart.__calculateExtremes();
        chart.__draw(true)
    }
    if (this.__drawing) return;
    if (!this.visible) return;
    this.__drawing = true;
    try {
        ctx.lineWidth = this.lineWidth;
        ctx.dashStyle = this.__lineStyle;
        ctx.strokeStyle = EJSC.utility.__getColor(this.color, this.lineOpacity / 100).rgba;
        ctx.fillStyle = EJSC.utility.__getColor(this.color, this.opacity / 100).rgba;
        var x_axis = chart["axis_" + this.x_axis];
        var y_axis = chart["axis_" + this.y_axis];
        var draw_area = chart.__draw_area;
        var oy_min = y_axis.__current_min;
        var oy_max = y_axis.__current_max;
        var fn = this.__function;
        var points = [];
        var i, x, y;
        for (i = draw_area.left; i < draw_area.right; i++) {
            x = x_axis.__px2pt(i);
            y = fn(x);
            if (y > oy_max) {
                y = y_axis.__px2pt(draw_area.top - 1)
            } else if (y < oy_min) {
                y = y_axis.__px2pt(draw_area.bottom + 1)
            }
            if (!isNaN(y)) {
                points.push([x, y])
            }
        }
        if (points.length > 0) {
            ctx.beginPath();
            ctx.moveTo(x_axis.__pt2px(points[0][0]), y_axis.__pt2px(points[0][1]));
            for (i = 0; i < points.length; i++) {
                ctx.lineTo(x_axis.__pt2px(points[i][0]), y_axis.__pt2px(points[i][1]))
            }
            ctx.stroke()
        }
    } catch(e) {} finally {
        this.__drawing = false
    }
};
___functionseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var fn = this.__function;
    if (chart == null) {
        return null
    }
    var distance = EJSC.math.__distance;
    var i;
    var currentDistance = null;
    var result = null;
    var tempDistance;
    var pointX, pointY;
    var x = x_axis.__px2pt(mouse.x + chart.__draw_area.left);
    var y = y_axis.__px2pt(mouse.y + chart.__draw_area.top);
    var x_min, x_max, y_min, y_max;
    if (use_proximity) {
        x_min = mouse.x + chart.__draw_area.left - (chart.proximity_snap);
        x_max = mouse.x + chart.__draw_area.left + (chart.proximity_snap);
        y_min = chart.auto_find_point_by_x ? y_axis.__min: y_axis.__px2pt(mouse.y + chart.__draw_area.top + (chart.proximity_snap));
        y_max = chart.auto_find_point_by_x ? y_axis.__max: y_axis.__px2pt(mouse.y + chart.__draw_area.top - (chart.proximity_snap));
        if (x_min < x_axis.__pt2px(x_axis.__current_min)) {
            x_min = x_axis.__pt2px(x_axis.__current_min)
        }
        if (x_max > x_axis.__pt2px(x_axis.__current_max)) {
            x_max = x_axis.__pt2px(x_axis.__current_max)
        }
        if (y_min < y_axis.__current_min) {
            y_min = y_axis.__current_min
        }
        if (y_max > y_axis.__current_max) {
            y_max = y_axis.__current_max
        }
    } else {
        x_min = x_axis.__pt2px(x_axis.__current_min);
        x_max = x_axis.__pt2px(x_axis.__current_max);
        y_min = y_axis.__current_min;
        y_max = y_axis.__current_max
    }
    for (i = x_min; i < x_max; i++) {
        pointX = x_axis.__px2pt(i);
        pointY = fn(pointX);
        if (isNaN(pointY) || pointY < y_min || pointY > y_max) {
            continue
        }
        tempDistance = distance(mouse.x, mouse.y, i, y_axis.__pt2px(pointY));
        if (currentDistance == null || tempDistance < currentDistance) {
            currentDistance = tempDistance;
            result = {
                distance: currentDistance,
                point: new EJSC.XYPoint(pointX, pointY, null, null, this)
            }
        }
    }
    return result
};
___functionseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x = point.__x();
    var y = point.__y();
    if (x > x_axis.__current_max) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_max
        }
    } else if (x < x_axis.__current_min) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_min
        }
    }
    var result = {
        series_title: "<label>" + this.title + "</label>",
        xaxis: x_axis.__getHintCaption(),
        yaxis: y_axis.__getHintCaption(),
        x: x_axis.__getLabel(point.__x(), undefined, this.x_axis_formatter),
        y: y_axis.__getLabel(point.__y(), undefined, this.y_axis_formatter),
        label: point.label,
        __defaultHintString: this.__getHintString(point),
        __center: false
    };
    if (y > y_axis.__current_max) {
        y = y_axis.__current_max
    } else if (y < y_axis.__current_min) {
        y = y_axis.__current_min
    }
    result.__position = {
        x: x_axis.__pt2px(x),
        y: y_axis.__pt2px(y)
    };
    return result
};
___functionseries.__doSelectPrevious = function(point) {
    var i;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var xPoint = x_axis.__px2pt(x_axis.__pt2px(point.x) - 1);
    var yPoint = this.__function(xPoint);
    if (isNaN(yPoint) || xPoint < x_axis.__current_min) {
        xPoint = x_axis.__current_max;
        yPoint = this.__function(xPoint);
        while (isNaN(yPoint) && xPoint > x_axis.__current_min) {
            xPoint = x_axis.__px2pt(x_axis.__pt2px(xPoint) - 1);
            yPoint = this.__function(xPoint)
        }
    }
    if (!isNaN(yPoint)) {
        this.__owner.__selectPoint(new EJSC.XYPoint(xPoint, yPoint, null, null, this))
    }
};
___functionseries.__doSelectNext = function(point) {
    var i;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var xPoint = x_axis.__px2pt(x_axis.__pt2px(point.x) + 1);
    var yPoint = this.__function(xPoint);
    if (isNaN(yPoint) || xPoint > x_axis.__current_max) {
        xPoint = x_axis.__current_min;
        yPoint = this.__function(xPoint);
        while (isNaN(yPoint) && xPoint < x_axis.__current_max) {
            xPoint = x_axis.__px2pt(x_axis.__pt2px(xPoint) + 1);
            yPoint = this.__function(xPoint)
        }
    }
    if (!isNaN(yPoint)) {
        this.__owner.__selectPoint(new EJSC.XYPoint(xPoint, yPoint, null, null, this))
    }
};
___functionseries.__doPoint2Px = function(point) {
    return {
        x: this.__getChart()["axis_" + this.x_axis].__pt2px(point.__x()),
        y: this.__getChart()["axis_" + this.y_axis].__pt2px(point.__y())
    }
};
___functionseries.__doFindClosestByPoint = function(point) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    if (x_axis.__text_values.__count() > 0) {
        point.x = x_axis.__text_values.__find(point.x).__index
    }
    if (y_axis.__text_values.__count() > 0) {
        point.y = y_axis.__text_values.__find(point.y).__index
    }
    return this.__findClosestPoint({
        x: x_axis.__pt2px(point.x),
        y: y_axis.__pt2px(point.y)
    },
    false)
};
___functionseries.__doFindClosestByPixel = function(point) {
    var point = this.__findClosestPoint({
        x: point.x,
        y: point.y
    },
    false)
};
___functionseries.__doGetYRange = function(screenMinX, screenMaxX) {
    return null
};
___functionseries.__doGetXRange = function(screenMinY, screenMaxY) {
    return null
};
___functionseries.__doGetLegendIcon = function() {
    return "function"
};
EJSC.StackedBarSeries = function(options) {
    this.__legendCreateInherited = this.__legendCreate;
    this.__legendCreate = this.__legendCreateNew;
    this.__series = new Array();
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.__type = 'bar';
    this.__subtype = 'stacked';
    this.__defaultHintString = "[parent_title]<br/>[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]<br/>[percent]% of [total]";
    this.orientation = 'vertical';
    this.__interval = undefined;
    this.__barSeriesCount = undefined;
    this.__barSeriesIndex = undefined;
    this.__groupWidth = undefined;
    this.__barWidth = undefined;
    this.__barMinOffset = undefined;
    this.__barMaxOffset = undefined;
    this.intervalOffset = 0.8;
    this.groupedBars = true;
    this.__availableColors = [];
    this.defaultColors = EJSC.DefaultBarColors.slice();
    this.useColorArray = false;
    this.onBarNeedsColor = undefined;
    this.treeLegendRoot = true;
    this.__copyOptions(options)
};
EJSC.BarSeries.prototype.__extendTo(EJSC.StackedBarSeries);
var ___stackedbarseries = EJSC.StackedBarSeries.prototype;
___stackedbarseries.getPoints = undefined;
___stackedbarseries.__legendCreateNew = function() {
    if (this.treeLegendRoot) {
        this.__legendCreateInherited();
        var series = this;
        this.__legend.className += " ejsc-legend-tree";
        this.__legend.appendChild(EJSC.utility.__createDOMArray(["div", {
            className: "ejsc-legend-tree-items",
            __ref: series,
            __refVar: "__legendItems"
        }]))
    }
};
___stackedbarseries.__calculateSharedProperties = function() {
    var series = this.__getChart().__series;
    var seriesLength = series.length;
    var thisSeriesFound = false;
    var s = 0;
    var sInterval = undefined;
    var newIndex = 0;
    this.__interval = undefined;
    this.__barSeriesCount = 0;
    this.__barSeriesIndex = 0;
    for (; s < seriesLength; s++) {
        if ((series[s].__type == 'bar') && series[s].orientation == this.orientation && series[s].visible == true) {
            if (this.__barSeriesCount == 0) {
                this.groupedBars = series[s].groupedBars;
                if (this.groupedBars) {
                    this.intervalOffset = series[s].intervalOffset
                }
            }
            sInterval = series[s].__getInterval();
            if (this.__interval == undefined || sInterval < this.__interval) {
                this.__interval = sInterval
            }
            this.__barSeriesCount++;
            if (!thisSeriesFound) {
                if (series[s] === this.__owner) {
                    thisSeriesFound = true
                } else {
                    newIndex++
                }
            }
        }
    }
    if (thisSeriesFound) {
        this.__barSeriesIndex = newIndex
    }
    if (!this.groupedBars) {
        this.__barSeriesCount = 1;
        this.__barSeriesIndex = 0
    }
    this.__groupWidth = (this.__interval * this.intervalOffset);
    this.__barWidth = (this.__groupWidth) / this.__barSeriesCount;
    var groupMin = -(this.__groupWidth / 2);
    this.__barOffsetMin = (groupMin + (this.__barSeriesIndex * this.__barWidth));
    this.__barOffsetMax = (this.__barOffsetMin + this.__barWidth)
};
___stackedbarseries.__series_doSelectNextSeries = function(point) {
    var found = false;
    for (var i = 0; i < this.__owner.__series.length; i++) {
        if (this.__owner.__series[i] == point.__owner) {
            found = true;
            break
        }
    }
    if (!found) {
        return true
    } else {
        if (i == (this.__owner.__series.length - 1) && this.__getChart().__series.length > 1) {
            return true
        } else {
            if (i == (this.__owner.__series.length - 1) && this.__getChart().__series.length == 1) {
                i = 0
            } else {
                i++
            }
            var series = this.__owner.__series[i];
            var chart = this.__getChart();
            var x_axis = chart["axis_" + this.x_axis];
            var y_axis = chart["axis_" + this.y_axis];
            var mouse = {};
            if (this.orientation == "vertical") {
                mouse.x = x_axis.__pt2px(point.__x());
                if (point.__min() < y_axis.__getZeroPlaneCoordinate()) {
                    mouse.y = y_axis.__pt2px(point.__min())
                } else {
                    mouse.y = y_axis.__pt2px(point.__max())
                }
            } else {
                mouse.y = y_axis.__pt2px(point.__y());
                if (point.__min() < x_axis.__getZeroPlaneCoordinate()) {
                    mouse.x = x_axis.__pt2px(point.__min())
                } else {
                    mouse.x = x_axis.__pt2px(point.__max())
                }
            }
            var point = series.__findClosestPoint(mouse, false);
            if (point != null) {
                chart.__selectPoint(point.point, true);
                return false
            } else {
                return true
            }
        }
    }
};
___stackedbarseries.__series_doSelectPreviousSeries = function(point) {
    var found = false;
    for (var i = 0; i < this.__owner.__series.length; i++) {
        if (this.__owner.__series[i] == point.__owner) {
            found = true;
            break
        }
    }
    if (!found) {
        return true
    } else {
        if (i == 0 && this.__getChart().__series.length > 1) {
            return true
        } else {
            if (i == 0 && this.__getChart().__series.length == 1) {
                i = this.__owner.__series.length - 1
            } else {
                i--
            }
            var series = this.__owner.__series[i];
            var chart = this.__getChart();
            var x_axis = chart["axis_" + this.x_axis];
            var y_axis = chart["axis_" + this.y_axis];
            var mouse = {};
            if (this.orientation == "vertical") {
                mouse.x = x_axis.__pt2px(point.__x());
                if (point.__min() < y_axis.__getZeroPlaneCoordinate()) {
                    mouse.y = y_axis.__pt2px(point.__min())
                } else {
                    mouse.y = y_axis.__pt2px(point.__max())
                }
            } else {
                mouse.y = y_axis.__pt2px(point.__y());
                if (point.__min() < x_axis.__getZeroPlaneCoordinate()) {
                    mouse.x = x_axis.__pt2px(point.__min())
                } else {
                    mouse.x = x_axis.__pt2px(point.__max())
                }
            }
            var point = series.__findClosestPoint(mouse, false);
            if (point != null) {
                chart.__selectPoint(point.point, true);
                return false
            } else {
                return true
            }
        }
    }
};
___stackedbarseries.__doAfterVisibilityChange = function() {
    if (this.visible == true) {
        this.__legendItems.className = "ejsc-legend-tree-items"
    } else {
        this.__legendItems.className = "ejsc-legend-tree-items ejsc-hidden"
    }
};
___stackedbarseries.__doCalculateExtremes = function() {
    var s;
    var series = this.__owner.__series;
    for (s = 0; s < series.length; s++) {
        if (series[s].__getHasData() == false) {
            return
        }
    }
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_baseline = y_axis.__getZeroPlaneCoordinate();
    var x_baseline = x_axis.__getZeroPlaneCoordinate();
    var i;
    for (s = 0; s < this.__series.length; s++) {
        this.__series[s].__doResetExtremes();
        this.__series[s].__doCalculateExtremes();
        if (this.orientation == "vertical") {
            if (this.__minX == undefined || this.__minX > this.__series[s].__minX) {
                this.__minX = this.__series[s].__minX
            }
            if (this.__maxX == undefined || this.__maxX < this.__series[s].__maxX) {
                this.__maxX = this.__series[s].__maxX
            }
            for (var p = 0; p < this.__series[s].__points.length; p++) {
                if (this.__minY == undefined || this.__minY > this.__series[s].__points[p].__bmin) {
                    this.__minY = this.__series[s].__points[p].__bmin
                }
                if (this.__maxY == undefined || this.__maxY < this.__series[s].__points[p].__bmax) {
                    this.__maxY = this.__series[s].__points[p].__bmax
                }
            }
        } else {
            for (var p = 0; p < this.__series[s].__points.length; p++) {
                if (this.__minX == undefined || this.__minX > this.__series[s].__points[p].__bmin) {
                    this.__minX = this.__series[s].__points[p].__bmin
                }
                if (this.__maxX == undefined || this.__maxX < this.__series[s].__points[p].__bmax) {
                    this.__maxX = this.__series[s].__points[p].__bmax
                }
            }
            if (this.__minY == undefined || this.__minY > this.__series[s].__minY) {
                this.__minY = this.__series[s].__minY
            }
            if (this.__maxY == undefined || this.__maxY < this.__series[s].__maxY) {
                this.__maxY = this.__series[s].__maxY
            }
        }
    }
    if (this.orientation == 'vertical') {
        if (this.__minY > y_baseline) {
            this.__minY = y_baseline
        } else if (this.__maxY < y_baseline) {
            this.__maxY = y_baseline
        }
        if (y_axis.__scale == undefined || isNaN(y_axis.__scale)) {
            y_axis.__calculateScale(true, false)
        } else {
            this.__minY = (this.__minY - (((this.lineWidth / 2) * this.__series.length) * y_axis.__scale));
            this.__maxY = (this.__maxY + (((this.lineWidth / 2) * this.__series.length) * y_axis.__scale))
        }
    } else {
        if (this.__minX > x_baseline) {
            this.__minX = x_baseline
        } else if (this.__maxX < x_baseline) {
            this.__maxX = x_baseline
        }
        if (x_axis.__scale == undefined || isNaN(x_axis.__scale)) {
            x_axis.__calculateScale(true, false)
        } else {
            this.__minX = (this.__minX - (((this.lineWidth / 2) * this.__series.length) * x_axis.__scale));
            this.__maxX = (this.__maxX + (((this.lineWidth / 2) * this.__series.length) * x_axis.__scale))
        }
    }
};
___stackedbarseries.__getInterval = function() {
    var result = undefined;
    var series = this.__series;
    var seriesLen = this.__series.length;
    var interval = undefined;
    for (var i = 0; i < seriesLen; i++) {
        interval = series[i].__getInterval();
        if (result == undefined || interval < result) {
            result = interval
        }
    }
    return (result == undefined ? 1 : result)
};
___stackedbarseries.__series_doOnDataAvailable = function(data) {
    this.__oldDoOnDataAvailable(data);
    this.__loading = true;
    var s, v, cp, p, points, oldPoint, newPoint;
    var chart = this.__owner.__owner;
    var series = this.__owner.__series;
    var zp = chart["axis_" + ((this.orientation == "vertical") ? this.y_axis: this.x_axis)].__getZeroPlaneCoordinate();
    for (s = 0; s < series.length; s++) {
        if (series[s].__getHasData() == false) {
            return
        }
    }
    var values = {
        values: [],
        add: function(value1, value2) {
            var v, min, max, pbmax;
            for (v = 0; v < this.values.length; v++) {
                if (this.values[v].v == value1) {
                    if (value2 >= zp) {
                        pbmax = this.values[v].bmax;
                        this.values[v].bmax = parseFloat(this.values[v].bmax) + parseFloat(value2)
                    } else {
                        this.values[v].bmin = parseFloat(this.values[v].bmin) + parseFloat(value2)
                    }
                    return
                }
            }
            if (value2 >= zp) {
                min = zp;
                max = value2
            } else {
                max = zp;
                min = value2
            }
            this.values.push({
                v: value1,
                bmin: min,
                bmax: max
            })
        }
    };
    for (s = 0; s < series.length; s++) {
        points = series[s].__points;
        if (this.orientation == "vertical") {
            for (p = 0; p < points.length; p++) {
                values.add(points[p].__x(), points[p].y)
            }
        } else {
            for (p = 0; p < points.length; p++) {
                values.add(points[p].__y(), points[p].x)
            }
        }
    }
    values.values.sort(function(a, b) {
        return (a.v - b.v)
    });
    for (s = 0; s < series.length; s++) {
        points = series[s].__points.slice();
        series[s].__points = [];
        if (this.orientation == "vertical") {
            cp = 0;
            for (v = 0; v < values.values.length; v++) {
                while (cp < points.length) {
                    if (points[cp].__x() == values.values[v].v) {
                        oldPoint = points[cp];
                        if (oldPoint.__oldFun != undefined) {
                            newPoint = oldPoint
                        } else {
                            newPoint = new EJSC.BarPoint(values.values[v].v, oldPoint.__y(), oldPoint.label, oldPoint.userdata, series[s], oldPoint.__color, oldPoint.__opacity, oldPoint.__lineWidth, oldPoint.__lineOpacity);
                            newPoint.__oldVal = newPoint.__y();
                            newPoint.__oldFun = newPoint.__y
                        }
                        if (newPoint.__oldVal < zp) {
                            newPoint.max = (s == 0) ? zp: series[s - 1].__points[v].__bcmin;
                            newPoint.min = newPoint.__oldVal + newPoint.max;
                            newPoint.__bcmin = newPoint.min;
                            newPoint.__bcmax = (s == 0) ? zp: series[s - 1].__points[v].__bcmax
                        } else {
                            newPoint.min = (s == 0) ? zp: series[s - 1].__points[v].__bcmax;
                            newPoint.max = newPoint.__oldVal + newPoint.min;
                            newPoint.__bcmin = (s == 0) ? zp: series[s - 1].__points[v].__bcmin;
                            newPoint.__bcmax = newPoint.max
                        }
                        newPoint.__min = function() {
                            return this.min
                        };
                        newPoint.__max = function() {
                            return this.max
                        };
                        newPoint.__bmin = values.values[v].bmin;
                        newPoint.__bmax = values.values[v].bmax;
                        newPoint.__y = function() {
                            return this.max
                        };
                        series[s].__points.push(newPoint);
                        break
                    }
                    cp++
                }
                if (cp == points.length) {
                    newPoint = new EJSC.BarPoint(values.values[v].v, zp, null, null, series[s]);
                    newPoint.__oldVal = newPoint.__y();
                    newPoint.__oldFun = newPoint.__y;
                    newPoint.max = (s == 0) ? zp: series[s - 1].__points[v].__bcmin;
                    newPoint.min = newPoint.max;
                    newPoint.__bcmin = (s == 0) ? zp: series[s - 1].__points[v].__bcmin;
                    newPoint.__bcmax = (s == 0) ? zp: series[s - 1].__points[v].__bcmax;
                    newPoint.__min = function() {
                        return this.min
                    };
                    newPoint.__max = function() {
                        return this.max
                    };
                    newPoint.__bmin = values.values[v].bmin;
                    newPoint.__bmax = values.values[v].bmax;
                    newPoint.__y = function() {
                        return this.max
                    };
                    series[s].__points.push(newPoint);
                    cp = 0
                }
            }
        } else {
            cp = 0;
            for (v = 0; v < values.values.length; v++) {
                while (cp < points.length) {
                    if (points[cp].__y() == values.values[v].v) {
                        oldPoint = points[cp];
                        if (oldPoint.__oldFun != undefined) {
                            newPoint = oldPoint
                        } else {
                            newPoint = new EJSC.BarPoint(oldPoint.__x(), values.values[v].v, oldPoint.label, oldPoint.userdata, series[s], oldPoint.__color, oldPoint.__opacity, oldPoint.__lineWidth, oldPoint.__lineOpacity);
                            newPoint.__oldVal = newPoint.__x();
                            newPoint.__oldFun = newPoint.__x
                        }
                        if (newPoint.__oldVal < zp) {
                            newPoint.max = (s == 0) ? zp: series[s - 1].__points[v].__bcmin;
                            newPoint.min = newPoint.__oldVal + newPoint.max;
                            newPoint.__bcmin = newPoint.min;
                            newPoint.__bcmax = (s == 0) ? zp: series[s - 1].__points[v].__bcmax
                        } else {
                            newPoint.min = (s == 0) ? zp: series[s - 1].__points[v].__bcmax;
                            newPoint.max = newPoint.__oldVal + newPoint.min;
                            newPoint.__bcmin = (s == 0) ? zp: series[s - 1].__points[v].__bcmin;
                            newPoint.__bcmax = newPoint.max
                        }
                        newPoint.__min = function() {
                            return this.min
                        };
                        newPoint.__max = function() {
                            return this.max
                        };
                        newPoint.__bmin = values.values[v].bmin;
                        newPoint.__bmax = values.values[v].bmax;
                        newPoint.__x = function() {
                            return this.max
                        };
                        series[s].__points.push(newPoint);
                        break
                    }
                    cp++
                }
                if (cp == points.length) {
                    newPoint = new EJSC.BarPoint(zp, values.values[v].v, null, null, series[s]);
                    newPoint.__oldVal = newPoint.__x();
                    newPoint.__oldFun = newPoint.__x;
                    newPoint.max = (s == 0) ? zp: series[s - 1].__points[v].__bcmin;
                    newPoint.min = newPoint.max;
                    newPoint.__bcmin = (s == 0) ? zp: series[s - 1].__points[v].__bcmin;
                    newPoint.__bcmax = (s == 0) ? zp: series[s - 1].__points[v].__bcmax;
                    newPoint.__min = function() {
                        return this.min
                    };
                    newPoint.__max = function() {
                        return this.max
                    };
                    newPoint.__bmin = values.values[v].bmin;
                    newPoint.__bmax = values.values[v].bmax;
                    newPoint.__x = function() {
                        return this.max
                    };
                    series[s].__points.push(newPoint);
                    cp = 0
                }
            }
        }
    }
    this.__owner.__doCalculateExtremes()
};
___stackedbarseries.__series_getAvailableColor = function(point, ignoreEvent) {
    if (!this.__owner.useColorArray) {
        return this.__oldGetAvailableColor(point, ignoreEvent)
    } else {
        if (this.__owner.__availableColors.length == 0) {
            if (this.__owner.onBarNeedsColor && ignoreEvent == undefined) {
                return this.__owner.onBarNeedsColor({
                    __owner: point.__owner,
                    x: point.x,
                    y: point.y,
                    userdata: point.userdata,
                    __color: point.__color,
                    __rangeIndex: point.__rangeIndex
                },
                this, this.__getChart())
            } else {
                this.__owner.__availableColors = this.__owner.defaultColors.slice()
            }
        }
        return this.__owner.__availableColors.pop()
    }
};
___stackedbarseries.__series_getBaseline = function(point) {
    if (point == undefined) {
        return undefined
    } else {
        return point.min
    }
};
___stackedbarseries.__doDraw = function(ctx) {
    if (this.__series.length == 0) return;
    var i;
    if (this.__drawing) return;
    if (!this.visible) return;
    this.__hasData = (this.__series.length > 0);
    for (i = 0; i < this.__series.length; i++) {
        if (!this.__series[i].__getHasData()) {
            this.__hasData = false;
            this.__series[i].reload()
        }
    }
    if (!this.__getHasData()) return;
    if (this.__minX == undefined || this.__maxX == undefined || this.__minY == undefined || this.__maxY == undefined) {
        var self = this;
        window.setTimeout(function() {
            self.__resetExtremes();
            self.__getChart().__calculateExtremes();
            self.__getChart().__draw()
        },
        0);
        return
    }
    for (i = 0; i < this.__series.length; i++) {
        this.__series[i].__doDraw(ctx)
    }
    return
};
___stackedbarseries.__doReload = function() {
    for (var i = 0; i < this.__series.length; i++) {
        this.__series[i].__doReload()
    }
};
___stackedbarseries.__doResetExtremes = function() {
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined
};
___stackedbarseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX + chart.__draw_area.left);
    var i, minY, maxY;
    if (this.orientation == 'vertical') {} else {}
    return null
};
___stackedbarseries.__doGetXRange = function(screenMinY, screenMaxY) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minY = y_axis.__px2pt(screenMinY + chart.__draw_area.top);
    var maxY = y_axis.__px2pt(screenMaxY + chart.__draw_area.top);
    var i, minX, maxX;
    if (this.orientation == 'vertical') {} else {}
    return null
};
___stackedbarseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var points = [];
    var p, i, d;
    for (i = 0; i < this.__series.length; i++) {
        p = this.__series[i].__findClosestPoint(mouse, use_proximity);
        if (p != null) {
            points.push(p)
        }
    }
    p = null;
    d = undefined;
    for (i = 0; i < points.length; i++) {
        if (d == undefined || points[i].distance < d) {
            d = points[i].distance;
            p = points[i]
        }
    }
    return p
};
___stackedbarseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var pIndex, sIndex;
    var points = point.__owner.__points;
    var series = point.__owner.__owner.__series;
    for (pIndex = 0; pIndex < points.length; pIndex++) {
        if (points[pIndex] == point) {
            break
        }
    }
    for (sIndex = 0; sIndex < series.length; sIndex++) {
        if (series[sIndex] == point.__owner) {
            break
        }
    }
    var total, percent;
    total = point.__bmax - point.__bmin;
    percent = m_ROUND((point.__max() - point.__min()) / total * 100, 2);
    var result = point.__owner.__oldDoSelectPoint(point, sticky);
    if (result == null) {
        return null
    }
    result.parent_title = "<label>" + point.__owner.__owner.title + "</label>";
    result.x = x_axis.__getLabel(point.__x(), undefined, this.x_axis_formatter);
    result.y = y_axis.__getLabel(point.__y(), undefined, this.y_axis_formatter);
    result.total = total;
    result.percent = percent;
    result.label = point.label;
    result.__defaultHintString = point.__owner.__owner.__getHintString(point);
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var zp = (this.orientation == "vertical" ? y_axis: x_axis).__getZeroPlaneCoordinate();
    var x_min = x_axis.__current_min;
    var x_max = x_axis.__current_max;
    var y_min = y_axis.__current_min;
    var y_max = y_axis.__current_max;
    if (point.__min() < zp) {
        if (this.orientation == "vertical") {
            y = point.__min();
            if (y < y_min) {
                y = y_min
            }
            result.__position.y = y_axis.__pt2px(y)
        } else {
            x = point.__min();
            if (x < x_min) {
                x = x_min
            }
            result.__position.x = x_axis.__pt2px(x)
        }
    }
    return result
};
___stackedbarseries.removeSeries = function(series, redraw) {
    this.__removeSeries(series, redraw)
};
___stackedbarseries.__removeSeries = function(series, redraw) {
    var s = undefined;
    for (var i = 0; i < this.__series.length; i++) {
        if (this.__series[i].__index == series.__index) {
            s = this.__series.splice(i, 1);
            break
        }
    }
    if (s != undefined) {
        s.__owner = undefined;
        s.__index = undefined;
        s.__getChart = series.__oldGetChart;
        s.__doOnDataAvailable = s.__oldDoOnDataAvailable;
        s.__getBaseline = s.__oldGetBaseline;
        s.__doFindClosestPoint = s.__oldDoFindClosestPoint;
        s.__doSelectPoint = s.__oldDoSelectPoint;
        s.__getAvailableColor = s.__oldGetAvailableColor;
        this.__resetExtremes();
        if (this.__series.length > 0) {
            this.__series[this.__series.length - 1].__calculateValues()
        }
        if (redraw == undefined || redraw == true) {
            this.__getChart().__draw(true)
        }
    }
};
___stackedbarseries.addSeries = function(series, redraw) {
    if (this.__getChart() == undefined) {
        alert("EJSC.StackedBarSeries must be added to a chart prior to adding series.");
        return
    }
    if (series.__type != 'bar') {
        alert("Unable to add series type '" + series.__type + "' to EJSC.StackedBarSeries.");
        return
    }
    if (series.orientation != this.orientation) {
        alert("Invalid Series Orientation.  Orientation of children series must match EJSC.StackedBarSeries.orientation.");
        return
    }
    this.__series.push(series);
    series.__owner = this;
    series.__index = this.__series.length - 1;
    series.__oldGetChart = series.__getChart;
    series.__getChart = function() {
        return series.__owner.__getChart()
    };
    if (this.useColorArray) {
        series.useColorArray = true
    }
    if (!series.x_axis_formatter) series.x_axis_formatter = this.x_axis_formatter;
    if (!series.y_axis_formatter) series.y_axis_formatter = this.y_axis_formatter;
    if (series.title == '') series.title = 'Series ' + this.__series.length;
    if (series.color == undefined) series.color = this.__getChart().__getNewSeriesColor();
    if (this.treeLegendRoot) {
        var owner = this;
        this.__legendItems.appendChild(EJSC.utility.__createDOMArray(["a", {
            innerHTML: series.title,
            title: series.title,
            className: "ejsc-legend-tree-item",
            __ref: series,
            __refVar: "__legend",
            __styles: {
                color: EJSC.utility.__getColor(series.color == undefined ? this.color: series.color).hex,
                cursor: "default"
            }
        }]));
        if (series.treeLegend) {
            this.__legendItems.appendChild(EJSC.utility.__createDOMArray(["div", {
                className: "ejsc-legend-tree-items",
                __ref: series,
                __refVar: "__legendItems"
            }]))
        }
    } else {
        series.__legendCreate();
        series.__legendInsert()
    }
    series.__oldDoOnDataAvailable = series.__doOnDataAvailable;
    series.__doOnDataAvailable = this.__series_doOnDataAvailable;
    series.__oldGetBaseline = series.__getBaseline;
    series.__getBaseline = EJSC.FloatingBarSeries.prototype.__getBaseline;
    series.__oldDoFindClosestPoint = series.__doFindClosestPoint;
    series.__doFindClosestPoint = EJSC.FloatingBarSeries.prototype.__doFindClosestPoint;
    series.__oldDoSelectPoint = series.__doSelectPoint;
    series.__doSelectPoint = this.__doSelectPoint;
    series.__oldDoSelectNextSeries = series.__doSelectNextSeries;
    series.__doSelectNextSeries = this.__series_doSelectNextSeries;
    series.__oldDoSelectPreviousSeries = series.__doSelectPreviousSeries;
    series.__doSelectPreviousSeries = this.__series_doSelectPreviousSeries;
    series.__calculateValues = this.__series_calculateValues;
    series.__calculateSharedProperties = this.__calculateSharedProperties;
    series.__oldGetAvailableColor = series.__getAvailableColor;
    series.__getAvailableColor = this.__series_getAvailableColor;
    this.__resetExtremes();
    if (redraw == undefined || redraw == true) {
        this.__canDraw = true;
        series.__doDraw()
    } else {
        this.__canDraw = false;
        if (series.delayLoad == false) {
            series.__getChart().__draw_series_on_load = false;
            series.__dataHandler.__loadData()
        }
    }
    return series
};
___stackedbarseries.__doGetLegendIcon = function() {
    if (this.orientation == "vertical") {
        return "stacked-bar-vertical"
    } else {
        return "stacked-bar-horizontal"
    }
};
EJSC.FloatingBarSeries = function(dh, options) {
    this.__legendCreateInherited = this.__legendCreate;
    this.__legendCreate = this.__legendCreateNew;
    this.__points = [];
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.__lineStyle = 'solid';
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__type = 'bar';
    this.__subtype = 'floating';
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x] <br/>[yaxis] [min] to [max]";
    this.orientation = 'vertical';
    this.__interval = undefined;
    this.__barSeriesCount = undefined;
    this.__barSeriesIndex = undefined;
    this.__groupWidth = undefined;
    this.__barWidth = undefined;
    this.__barMinOffset = undefined;
    this.__barMaxOffset = undefined;
    this.ranges = new Array();
    this.intervalOffset = 0.8;
    this.groupedBars = true;
    this.__availableColors = [];
    this.defaultColors = EJSC.DefaultBarColors.slice();
    this.useColorArray = false;
    this.treeLegend = false;
    this.onBarNeedsColor = undefined;
    this.__copyOptions(options);
    if (this.orientation == "vertical") {
        this.__padding = {
            x_min: (this.y_axis == "left" ? 5 : 0),
            x_max: (this.y_axis == "left" ? 0 : 5),
            y_min: 5,
            y_max: 5
        }
    } else {
        this.__padding = {
            x_min: 5,
            x_max: 5,
            y_min: (this.x_axis == "top" ? 5 : 0),
            y_max: (this.x_axis == "top" ? 0 : 5)
        }
    }
    if (this.useColorArray && options["treeLegend"] == undefined) {
        this.treeLegend = true;
        this.coloredLegend = false
    }
    this.__doSetDataHandler(dh, false)
};
EJSC.BarSeries.prototype.__extendTo(EJSC.FloatingBarSeries);
var ___floatingbarseries = EJSC.FloatingBarSeries.prototype;
___floatingbarseries.__getBaseline = function(point) {
    if (point == undefined) {
        return undefined
    } else {
        return point.__min()
    }
};
___floatingbarseries.__getAvailableColor = function(point, ignoreEvent) {
    if (this.__availableColors.length == 0) {
        if (this.onBarNeedsColor && ignoreEvent == undefined) {
            if (this.orientation == "vertical") {
                return this.onBarNeedsColor({
                    __owner: point.__owner,
                    x: point.x,
                    min: point.min,
                    max: point.max,
                    userdata: point.userdata,
                    __color: point.__color,
                    __rangeIndex: point.__rangeIndex
                },
                this, this.__owner)
            } else {
                return this.onBarNeedsColor({
                    __owner: point.__owner,
                    y: point.y,
                    min: point.min,
                    max: point.max,
                    userdata: point.userdata,
                    __color: point.__color,
                    __rangeIndex: point.__rangeIndex
                },
                this, this.__owner)
            }
        } else {
            this.__availableColors = this.defaultColors.slice()
        }
    }
    return this.__availableColors.pop()
};
___floatingbarseries.__doSetDataHandler = function(handler, reload) {
    this.__points = [];
    if (this.treeLegend == true) {
        for (j = EJSC.__events.length - 1; j > 0; j--) {
            if (EJSC.__events[j] != null && EJSC.__events[j][4] != null && EJSC.__events[j][4] == this.__legendItems) {
                EJSC.utility.__detachEvent(EJSC.__events[j][0], EJSC.__events[j][1], EJSC.__events[j][2], EJSC.__events[j][3]);
                var e = EJSC.__events.splice(j, 1);
                delete e
            }
        }
        if (this.__legendItems != undefined) {
            this.__legendItems.innerHTML = ""
        }
    }
    this.__dataHandler = handler;
    if (this.orientation == "vertical") {
        this.__dataHandler.__init(this, {
            x: null,
            min: null,
            max: null,
            label: null,
            userdata: null
        })
    } else {
        this.__dataHandler.__init(this, {
            y: null,
            min: null,
            max: null,
            label: null,
            userdata: null
        })
    }
    if (reload) {
        this.__dataHandler.__loadData()
    }
};
___floatingbarseries.__doOnDataAvailable = function(data) {
    if (data.length == 0) {
        this.__hasData = false;
        return
    }
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_string_values = x_axis.__text_values.__count() > 0 || x_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].x);
    var y_string_values = y_axis.__text_values.__count() > 0 || y_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].y);
    var range = 0;
    var ranges = this.ranges;
    var rangesLen = this.ranges.length;
    var i, p, li, lc;
    var ae = EJSC.utility.__attachEvent;
    for (i = 0; i < data.length; i++) {
        if (this.orientation == "vertical") {
            if (x_string_values) {
                data[i].x = x_axis.__text_values.__add(data[i].x)
            } else {
                data[i].x = parseFloat(data[i].x)
            }
            if (y_string_values) {
                data[i].y = y_axis.__text_values.__add(data[i].max);
                data[i].max = data[i].y;
                data[i].min = y_axis.__text_values.__add(data[i].min)
            } else {
                data[i].y = data[i].max;
                data[i].max = parseFloat(data[i].max);
                data[i].min = parseFloat(data[i].min)
            }
        } else {
            if (x_string_values) {
                data[i].x = x_axis.__text_values.__add(data[i].max);
                data[i].max = data[i].x;
                data[i].min = x_axis.__text_values.__add(data[i].min)
            } else {
                data[i].x = parseFloat(data[i].max);
                data[i].max = data[i].x;
                data[i].min = parseFloat(data[i].min)
            }
            if (y_string_values) {
                data[i].y = y_axis.__text_values.__add(data[i].y)
            } else {
                data[i].y = parseFloat(data[i].y)
            }
        }
        p = new EJSC.FloatingBarPoint(data[i].x, data[i].y, data[i].min, data[i].max, data[i].label, data[i].userdata, this);
        if (rangesLen > 0) {
            for (range = 0; range < rangesLen; range++) {
                if (this.orientation == "vertical") {
                    if (p.__y() > ranges[range].min && p.__y() <= ranges[range].max) {
                        p.__rangeIndex = range;
                        break
                    }
                } else {
                    if (p.__x() > ranges[range].min && p.__x() <= ranges[range].max) {
                        p.__rangeIndex = range;
                        break
                    }
                }
            }
        }
        this.__points.push(p);
        if (this.treeLegend == true) {
            if (this.orientation == "vertical") {
                lc = x_axis.__getLabel(p.__x())
            } else {
                lc = y_axis.__getLabel(p.__y())
            }
            var series = this;
            this.__legendItems.appendChild(EJSC.utility.__createDOMArray(["a", {
                innerHTML: lc,
                title: lc,
                className: "ejsc-legend-tree-item",
                pointIndex: i,
                __styles: {
                    color: EJSC.utility.__getColor(p.__color == undefined ? this.color: p.__color).hex
                },
                __ref: series,
                __events: {
                    click: function(e) {
                        if (!series.__getChart().allow_interactivity) {
                            return
                        }
                        var targ;
                        if (!e) var e = window.event;
                        if (e.target) targ = e.target;
                        else if (e.srcElement) targ = e.srcElement;
                        if (targ.nodeType == 3) targ = targ.parentNode;
                        series.__getChart().__selectPoint(series.__points[targ.pointIndex], true, true)
                    }
                }
            }]))
        }
    }
    this.__hasData = (this.__points.length > 0)
};
___floatingbarseries.__doCalculateExtremes = function() {
    var points = this.__points;
    if (this.__drawing || !this.__getHasData()) {
        return
    }
    for (var i = 0; i < points.length; i++) {
        if (this.orientation == "vertical" && points[i].__x() == null) continue;
        if (this.orientation == "horizontal" && points[i].__y() == null) continue;
        if (this.orientation == "horizontal") {
            if (this.__minX == undefined || points[i].min < this.__minX) this.__minX = points[i].min
        } else {
            if (this.__minX == undefined || points[i].__x() < this.__minX) this.__minX = points[i].__x()
        }
        if (this.__maxX == undefined || points[i].__x() > this.__maxX) this.__maxX = points[i].__x();
        if (this.orientation == "vertical") {
            if (this.__minY == undefined || points[i].min < this.__minY) this.__minY = points[i].min
        } else {
            if (this.__minY == undefined || points[i].__y() < this.__minY) this.__minY = points[i].__y()
        }
        if (this.__maxY == undefined || points[i].__y() > this.__maxY) this.__maxY = points[i].__y()
    }
    this.__calculateSharedProperties();
    var chart = this.__getChart();
    if (this.orientation == "vertical") {
        this.__minX = this.__minX - (this.__interval / 2);
        this.__maxX = this.__maxX + (this.__interval / 2)
    } else {
        this.__minY = this.__minY - (this.__interval / 2);
        this.__maxY = this.__maxY + (this.__interval / 2)
    }
};
___floatingbarseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX + chart.__draw_area.left);
    var i, minY, maxY;
    for (i = 0; i < this.__points.length; i++) {
        pointMin = this.__points[i].__x() + this.__barOffsetMin;
        pointMax = this.__points[i].__x() + this.__barOffsetMax;
        if ((minX > pointMin && maxX < pointMax) || (minX > pointMin && maxX > pointMax && minX < pointMax) || (minX < pointMin && maxX > pointMax) || (minX < pointMin && maxX < pointMax && maxX > pointMin)) {
            if (minY == undefined || minY > this.__points[i].__y()) minY = this.__points[i].__y();
            if (maxY == undefined || maxY < this.__points[i].__y()) maxY = this.__points[i].__y()
        }
    }
    if (minY == undefined || maxY == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxY) - chart.__draw_area.top,
            max: y_axis.__pt2px(minY) - chart.__draw_area.top
        }
    }
};
___floatingbarseries.__doGetXRange = function(screenMinY, screenMaxY) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minY = y_axis.__px2pt(screenMaxY + chart.__draw_area.top);
    var maxY = y_axis.__px2pt(screenMinY + chart.__draw_area.top);
    var i, minX, maxX, pointMax, pointMin;
    for (i = 0; i < this.__points.length; i++) {
        pointMin = this.__points[i].__y() + this.__barOffsetMin;
        pointMax = this.__points[i].__y() + this.__barOffsetMax;
        if ((minY > pointMin && maxY < pointMax) || (minY > pointMin && maxY > pointMax && minY < pointMax) || (minY < pointMin && maxY > pointMax) || (minY < pointMin && maxY < pointMax && maxY > pointMin)) {
            if (minX == undefined || minX > this.__points[i].__x()) minX = this.__points[i].__x();
            if (maxX == undefined || maxX < this.__points[i].__x()) maxX = this.__points[i].__x()
        }
    }
    if (minX == undefined || maxX == undefined) {
        return null
    } else {
        return {
            min: x_axis.__pt2px(minX) - chart.__draw_area.left,
            max: x_axis.__pt2px(maxX) - chart.__draw_area.left
        }
    }
};
___floatingbarseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var points = this.__points;
    var pointsLength = points.length;
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var x_min = x_axis.__current_min;
    var x_max = x_axis.__current_max;
    var y_min = y_axis.__current_min;
    var y_max = y_axis.__current_max;
    var x_scale = x_axis.__scale;
    var y_scale = y_axis.__scale;
    var foundPoints = [];
    var closestPoint = undefined;
    var i;
    var distance = EJSC.math.__distance;
    var x = mouse.x == null ? null: x_axis.__px2pt(mouse.x);
    var y = mouse.y == null ? null: y_axis.__px2pt(mouse.y);
    var zp = (this.orientation == "horizontal" ? chart["axis_" + this.x_axis].zero_plane.coordinate: chart["axis_" + this.y_axis].zero_plane.coordinate);
    if (use_proximity) {
        var x_px_adj = (this.lineWidth + chart.proximity_snap) * x_scale;
        var y_px_adj = (this.lineWidth + chart.proximity_snap) * y_scale;
        if (this.orientation == "vertical") {
            var seriesMinX = x_min - this.__barOffsetMax;
            var seriesMaxX = x_max - this.__barOffsetMin;
            var firstPoint = 0;
            while (firstPoint < pointsLength && points[firstPoint].__x() < seriesMinX) {
                firstPoint++
            }
            var plotYmax, plotYmin, plotXmin, plotXmax, NAplotYmax, NAplotYmin, NAplotXmin, NAplotXmax;
            if (firstPoint < pointsLength) {
                var p = firstPoint;
                while (p < pointsLength && points[p].__x() <= seriesMaxX) {
                    NAplotYmin = points[p].__max();
                    NAplotYmax = points[p].__min();
                    plotYmin = y_axis.__pt2px(NAplotYmin + y_px_adj) - chart.__draw_area.top;
                    plotYmax = y_axis.__pt2px(NAplotYmax - y_px_adj) - chart.__draw_area.top;
                    NAplotXmin = (points[p].__x() + this.__barOffsetMin);
                    NAplotXmax = x_axis.__pt2px(NAplotXmin + this.__barWidth) - chart.__draw_area.left;
                    plotXmin = NAplotXmin - x_px_adj;
                    plotXmax = x_axis.__pt2px(plotXmin + this.__barWidth + (x_px_adj * 2)) - chart.__draw_area.left;
                    plotXmin = x_axis.__pt2px(plotXmin) - chart.__draw_area.left;
                    NAplotYmin = y_axis.__pt2px(NAplotYmin) - chart.__draw_area.top;
                    NAplotYmax = y_axis.__pt2px(NAplotYmax) - chart.__draw_area.top;
                    NAplotXmin = x_axis.__pt2px(NAplotXmin) - chart.__draw_area.left;
                    if (mouse.x >= plotXmin && mouse.x <= plotXmax && mouse.y >= plotYmin && mouse.y <= plotYmax) {
                        if (mouse.x >= NAplotXmin && mouse.x <= NAplotXmax && mouse.y >= NAplotYmin && mouse.y <= NAplotYmax) {
                            return {
                                point: points[p],
                                distance: distance(x, y, ((NAplotXmin + NAplotXmax) / 2), ((NAplotYmin + NAplotYmax) / 2))
                            }
                        } else {
                            foundPoints.push([points[p], EJSC.math.__distance(mouse.x, mouse.y, x_axis.__pt2px(points[p].__x()), y_axis.__pt2px(points[p].__y()))])
                        }
                    }
                    p++
                }
                for (i = 0; i < foundPoints.length; i++) {
                    if (closestPoint == undefined) {
                        closestPoint = foundPoints[i]
                    } else {
                        if (closestPoint[1] > foundPoints[i][1]) {
                            closestPoint = foundPoints[i]
                        }
                    }
                }
                if (closestPoint != undefined) {
                    return {
                        point: closestPoint[0],
                        distance: closestPoint[1]
                    }
                }
            }
        } else {
            var seriesMinY = y_min - this.__barOffsetMax;
            var seriesMaxY = y_max - this.__barOffsetMin;
            var firstPoint = 0;
            while (firstPoint < pointsLength && points[firstPoint].__y() < seriesMinY) {
                firstPoint++
            }
            var plotYmax, plotYmin, plotXmin, plotXmax, NAplotYmax, NAplotYmin, NAplotXmin, NAplotXmax;
            if (firstPoint < pointsLength) {
                var p = firstPoint;
                while (p < pointsLength && points[p].__y() <= seriesMaxY) {
                    plotYmax = points[p].__y() + this.__barOffsetMin - y_px_adj;
                    plotYmin = y_axis.__pt2px((plotYmax + this.__barWidth) + (y_px_adj * 2)) - chart.__draw_area.top;
                    plotYmax = y_axis.__pt2px(plotYmax) - chart.__draw_area.top;
                    NAplotXmin = points[p].__min();
                    NAplotXmax = points[p].__max();
                    plotXmax = x_axis.__pt2px(NAplotXmax + x_px_adj) - chart.__draw_area.left;
                    plotXmin = x_axis.__pt2px(NAplotXmin - x_px_adj) - chart.__draw_area.left;
                    NAplotYmax = (points[p].__y() + this.__barOffsetMin);
                    NAplotYmin = y_axis.__pt2px(NAplotYmax + this.__barWidth) - chart.__draw_area.top;
                    plotYmax = NAplotYmax - y_px_adj;
                    plotYmin = y_axis.__pt2px((plotYmax + this.__barWidth) + (y_px_adj * 2)) - chart.__draw_area.top;
                    plotYmax = y_axis.__pt2px(plotYmax) - chart.__draw_area.top;
                    NAplotXmin = x_axis.__pt2px(NAplotXmin) - chart.__draw_area.left;
                    NAplotXmax = x_axis.__pt2px(NAplotXmax) - chart.__draw_area.left;
                    NAplotYmax = y_axis.__pt2px(NAplotYmax) - chart.__draw_area.top;
                    if (mouse.x >= plotXmin && mouse.x <= plotXmax && mouse.y >= plotYmin && mouse.y <= plotYmax) {
                        if (mouse.x >= NAplotXmin && mouse.x <= NAplotXmax && mouse.y >= NAplotYmin && mouse.y <= NAplotYmax) {
                            return {
                                point: points[p],
                                distance: distance(x, y, ((NAplotXmin + NAplotXmax) / 2), ((NAplotYmin + NAplotYmax) / 2))
                            }
                        } else {
                            foundPoints.push([points[p], EJSC.math.__distance(mouse.x, mouse.y, x_axis.__pt2px(points[p].__x()), y_axis.__pt2px(points[p].__y()))])
                        }
                    }
                    p++
                }
                for (i = 0; i < foundPoints.length; i++) {
                    if (closestPoint == undefined) {
                        closestPoint = foundPoints[i]
                    } else {
                        if (closestPoint[1] > foundPoints[i][1]) {
                            closestPoint = foundPoints[i]
                        }
                    }
                }
                if (closestPoint != undefined) {
                    return {
                        point: closestPoint[0],
                        distance: closestPoint[1]
                    }
                }
            }
        }
        return null
    } else {
        var distance = EJSC.math.__distance;
        var i;
        var currentDistance = null;
        var result = null;
        var tempDistance;
        var pointX, pointY;
        var x = mouse.x == null ? null: x_axis.__px2pt(mouse.x);
        var y = mouse.y == null ? null: y_axis.__px2pt(mouse.y);
        for (i = 0; i < pointsLength; i++) {
            if (this.orientation == "vertical") {
                pointY = (points[i].__y() < points[i].__min() ? points[i].__y() : points[i].__min());
                pointY = (pointY < zp ? pointY: points[i].__y());
                pointX = points[i].__x()
            } else {
                pointX = (this.orientation == "horizontal" && (points[i].__bcmin < zp) ? points[i].__bcmin: points[i].__x());
                pointY = (this.orientation == "vertical" && (points[i].__bcmin < zp) ? points[i].__bcmin: points[i].__y())
            }
            if (pointX < x_min || pointY < y_min || pointY > y_max) {
                continue
            }
            if (pointX > x_max) {
                break
            }
            tempDistance = distance(x, y, pointX, pointY);
            if (currentDistance == null || tempDistance < currentDistance) {
                currentDistance = tempDistance;
                result = {
                    distance: tempDistance,
                    point: points[i]
                }
            }
        }
        return result
    }
};
___floatingbarseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_min = x_axis.__current_min;
    var x_max = x_axis.__current_max;
    var y_min = y_axis.__current_min;
    var y_max = y_axis.__current_max;
    var pointMinX, pointMaxX, pointMinY, pointMaxY;
    if (this.orientation == "vertical") {
        pointMinX = point.__x() + this.__barOffsetMin;
        pointMaxX = pointMinX + this.__barWidth;
        pointMinY = point.__min();
        pointMaxY = point.__max()
    } else {
        pointMinX = point.__min();
        pointMaxX = point.__max();
        pointMinY = point.__y() + this.__barOffsetMin;
        pointMaxY = pointMinY + this.__barWidth
    }
    if (pointMaxX < x_min) {
        if (!sticky) {
            return null
        } else {
            pointMaxX = x_min
        }
    } else if (pointMinX > x_max) {
        if (!sticky) {
            return null
        } else {
            pointMinX = x_max
        }
    }
    if (pointMaxY < y_min) {
        if (!sticky) {
            return null
        } else {
            pointMaxY = y_min
        }
    } else if (pointMinY > y_max) {
        if (!sticky) {
            return null
        } else {
            pointMinY = y_max
        }
    }
    var result = {
        series_title: "<label>" + this.title + "</label>",
        xaxis: x_axis.__getHintCaption(),
        yaxis: y_axis.__getHintCaption(),
        x: x_axis.__getLabel(point.__x()),
        y: y_axis.__getLabel(point.__y()),
        min: point.min,
        max: point.max,
        label: point.label,
        __defaultHintString: this.__getHintString(point),
        __center: false
    };
    var x, y;
    if (this.orientation == "vertical") {
        x = pointMinX + ((pointMaxX - pointMinX) / 2);
        y = point.__min() + ((point.__max() - point.__min()) / 2)
    } else {
        x = point.__min() + ((point.__max() - point.__min()) / 2);
        y = pointMinY + ((pointMaxY - pointMinY) / 2)
    }
    if (y > y_max) {
        y = y_max
    } else if (y < y_min) {
        y = y_min
    }
    if (x > x_max) {
        x = x_max
    } else if (x < x_min) {
        x = x_min
    }
    result.__position = {
        x: x_axis.__pt2px(x),
        y: y_axis.__pt2px(y)
    };
    return result
};
___floatingbarseries.__doGetLegendIcon = function() {
    if (this.orientation == "vertical") {
        return "floating-bar-vertical"
    } else {
        return "floating-bar-horizontal"
    }
};
EJSC.TrendSeries = function(series, type, options) {
    var self = this;
    this.__points = [];
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.__lineStyle = 'solid';
    this.__type = 'trend';
    this.__dataSeries = series;
    this.__trendType = type;
    this.__slope = undefined;
    this.__intercept = undefined;
    this.__coefficient = undefined;
    this.title = this.__trendType.substr(0, 1).toUpperCase() + this.__trendType.substr(1, this.__trendType.length) + " Trend (" + series.title + ")";
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__copyOptions(options);
    this.__padding = {
        x_min: (this.y_axis == "left" ? 0 : 5),
        x_max: (this.y_axis == "left" ? 5 : 0),
        y_min: (this.x_axis == "top" ? 0 : 5),
        y_max: (this.x_axis == "top" ? 5 : 0)
    }
};
EJSC.FunctionSeries.prototype.__extendTo(EJSC.TrendSeries);
var ___trendseries = EJSC.TrendSeries.prototype;
___trendseries.__getHasData = function() {
    return this.__dataSeries.__getHasData()
};
___trendseries.__doComputeFunction = function() {
    if (!this.__dataSeries.__getHasData()) {
        var self = this;
        window.setTimeout(function() {
            self.__doDraw()
        },
        10);
        return false
    }
    var points = this.__dataSeries.__points;
    if (points.length == 0) {
        alert('No Points to Try');
        return false
    } else if (points.length == 1) {
        alert('Not Enough Points to Try');
        return false
    } else if (points[0].__y() == undefined) {
        alert('Need X and Y Values to Compute');
        return false
    }
    this.__function = undefined;
    switch (this.__trendType) {
    case 'linear':
        this.computeLinearTrend();
        break;
    case 'power':
        this.computePowerTrend();
        break;
    case 'exponential':
        this.computeExponentialTrend();
        break;
    case 'logarithmic':
        this.computeLogarithmicTrend();
        break;
    default:
        alert('Invalid Trend Type Specified');
        return false;
        break
    };
    if (this.__function == undefined) return false
};
___trendseries.computeLinearTrend = function() {
    var pts = this.__dataSeries.__points;
    var points = [];
    for (var i = 0; i < this.__dataSeries.__points.length; i++) {
        points[i] = {
            x: pts[i].__x(),
            y: pts[i].__y()
        }
    }
    var ave = this.computeLinearAverages(points);
    var A = ave.A;
    var B = ave.B;
    var a = A;
    var b = B;
    this.__intercept = a;
    this.__slope = b;
    eval("this.__function = function(x) { return " + b + "*x+" + a + "; };")
};
___trendseries.computePowerTrend = function() {
    var pts = this.__dataSeries.__points;
    var points = [];
    for (var i = 0; i < this.__dataSeries.__points.length; i++) {
        points[i] = {
            x: m_LOG(pts[i].__x()),
            y: m_LOG(pts[i].__y())
        }
    }
    var ave = this.computeLinearAverages(points);
    var A = ave.A;
    var B = ave.B;
    var a = m_EXP(A);
    var b = B;
    this.__intercept = a;
    this.__slope = b;
    eval("this.__function = function(x) { return " + a + "*Math.pow(x," + b + "); };")
};
___trendseries.compute2PowerTrend = function() {
    var points = this.__dataSeries.__points;
    for (var i = 0; i < points.length; i++) {
        if (points[i].__x() <= 0 || points[i].__y() <= 0) {
            alert('Invalid Data for Power Trend');
            return false
        }
    }
    var n = 0;
    var sum_LNxLNy = 0;
    var sum_LNx = 0;
    var sum_LNx2 = 0;
    var sum_LNy = 0;
    for (var i = 0; i < points.length; i++) {
        n++;
        sum_LNxLNy += (m_LOG(points[i].__x()) * m_LOG(points[i].__y()));
        sum_LNx += m_LOG(points[i].__x());
        sum_LNx2 += (m_LOG(points[i].__x()) * m_LOG(points[i].__x()));
        sum_LNy += m_LOG(points[i].__y())
    }
    var b = (((n * sum_LNxLNy) - (sum_LNx * sum_LNy)) / ((n * sum_LNx2) - (sum_LNx * sum_LNx)));
    var a = ((sum_LNy - (b * sum_LNx)) / n);
    var A = m_POW(Math.E, a);
    var B = b;
    eval("this.__function = function(x) { return " + A + "*Math.pow(x," + B + "); };")
};
___trendseries.computeExponentialTrend = function() {
    var pts = this.__dataSeries.__points;
    var points = [];
    for (var i = 0; i < this.__dataSeries.__points.length; i++) {
        points[i] = {
            x: pts[i].__x(),
            y: m_LOG(pts[i].__y())
        }
    }
    var ave = this.computeLinearAverages(points);
    var A = ave.A;
    var B = ave.B;
    var a = m_POW(Math.E, A);
    var b = B;
    eval("this.__function = function(x) { return " + a + "*Math.pow(Math.E," + b + "*x); };")
};
___trendseries.computeLogarithmicTrend = function() {
    var pts = this.__dataSeries.__points;
    var points = [];
    for (var i = 0; i < this.__dataSeries.__points.length; i++) {
        points[i] = {
            x: m_LOG(pts[i].__x()),
            y: pts[i].__y()
        }
    }
    var ave = this.computeLinearAverages(points);
    var A = ave.A;
    var B = ave.B;
    var a = A;
    var b = B;
    eval("this.__function = function(x) { return " + a + "+" + b + "*Math.log(x); };")
};
___trendseries.computeLinearAverages = function(points) {
    var n = 0;
    var sum_x = 0;
    var sum_y = 0;
    var sum_x2 = 0;
    var sum_y2 = 0;
    var sum_xy = 0;
    for (var i = 0; i < points.length; i++) {
        n++;
        sum_x += points[i].x;
        sum_y += points[i].y;
        sum_x2 += (points[i].x * points[i].x);
        sum_y2 += (points[i].y * points[i].y);
        sum_xy += (points[i].x * points[i].y)
    }
    var y_bar = (sum_y / n);
    var x_bar = (sum_x / n);
    var e = (sum_x2 - (n * x_bar * x_bar));
    if (e == 0) {
        alert('Invalid Data');
        return false
    }
    var A = (((y_bar * sum_x2) - (x_bar * sum_xy)) / (sum_x2 - (n * x_bar * x_bar)));
    var B = ((sum_xy - (n * x_bar * y_bar)) / (sum_x2 - (n * x_bar * x_bar)));
    return {
        A: A,
        B: B
    }
};
___trendseries.__doGetLegendIcon = function() {
    return "trend"
};
EJSC.GaugeSeries = function(dh, options) {
    EJSC.Series.__extendTo(this);
    this.__doSetDataHandler(dh, false);
    var self = this;
    this.__type = "gauge";
    this.__needsXAxis = false;
    this.__needsYAxis = false;
    this.__copyOptions(options)
};
EJSC.Series.__extendTo(EJSC.GaugeSeries);
var ___gaugeseries = EJSC.GaugeSeries.prototype;
___gaugeseries.__doReload = function() {
    this.__points = [];
    this.__hasData = false;
    this.__dataHandler.__loading = false;
    this.__dataHandler.__loaded = false;
    this.__dataHandler.loadData()
};
___gaugeseries.__doSetDataHandler = function(handler, reload) {
    var self = this;
    this.__points = [];
    this.__dataHandler = handler;
    this.__dataHandler.__init(this, {
        x: null,
        label: null,
        userdata: null
    });
    if (reload) {
        this.__dataHandler.__loadData()
    }
};
___gaugeseries.__doOnDataAvailable = function(data) {
    if (data.length == 0) {
        this.__hasData = false;
        return
    }
    data[0].x = parseFloat(data[0].x);
    this.__points.push(new EJSC.GaugePoint(data[0].x, data[0].label, data[0].userdata, this));
    this.__hasData = true
};
___gaugeseries.__free = function() {
    this.__dataHandler.onDataAvailable = null;
    this.__dataHandler.__data = [];
    this.__dataHandler = null;
    this.__points = []
};
EJSC.AnalogGaugeSeries = function(dh, options) {
    var self = this;
    this.__doSetDataHandler(dh, false);
    this.__type = 'analoggauge';
    this.__previousLabel = "";
    this.__points = [];
    this.__tickmarkers = [];
    this.__inverse = false;
    this.ranges = [];
    this.position = "center";
    this.marker_position = "outer";
    this.height = "100%";
    this.width = "100%";
    this.min = 0;
    this.max = 100;
    this.tickCount = 11;
    this.fillColor = undefined;
    this.fillOpacity = 100;
    this.anchor = {
        color: 'rgb(0,0,0)',
        opacity: 100,
        size: 10
    };
    this.axis = {
        color: 'rgb(255,255,255)',
        innerBorderColor: 'rgb(0,0,0)',
        innerBorderOpacity: 100,
        innerBorderWidth: 1,
        innerBorderVisible: true,
        opacity: 0,
        outerBorderColor: 'rgb(0,0,0)',
        outerBorderOpacity: 100,
        outerBorderWidth: 1,
        outerBorderVisible: true,
        thickness: 15
    };
    this.needle = {
        color: 'rgb(255,0,0)',
        opacity: 100,
        borderColor: 'rgb(255,0,0)',
        borderOpacity: 100,
        borderWidth: 1,
        size: 4
    };
    this.range = {
        borderColor: undefined,
        borderOpacity: 100,
        borderWidth: 1,
        offset: 0,
        opacity: 100,
        style: 'doughnut',
        thickness: 15
    };
    this.tick = {
        className: '',
        color: 'rgb(0,0,0)',
        offset: 0,
        opacity: 100,
        size: 1,
        thickness: undefined
    };
    this.minorTick = {
        color: 'rgb(150,150,150)',
        count: 4,
        offset: 0,
        opacity: 100,
        size: 1,
        thickness: undefined
    };
    this.lock = {
        color: 'rgb(0,0,0)',
        offset: 5,
        opacity: 100,
        size: 6,
        visible: false
    };
    this.start_degree = 270;
    this.range_degrees = 180;
    this.label = {
        className: '',
        textAlign: 'center',
        position: 'centerBottom',
        lines: 1
    };
    this.__labelcontainer = undefined;
    this.__label = undefined;
    this.__needsXAxis = false;
    this.__needsYAxis = false;
    this.__copyOptions(options)
};
EJSC.GaugeSeries.prototype.__extendTo(EJSC.AnalogGaugeSeries);
var ___analoggaugeseries = EJSC.AnalogGaugeSeries.prototype;
___analoggaugeseries.addRange = function(min, max, color, redraw) {
    var found = false;
    for (var i = 0; i < this.ranges.length; i++) {
        if (this.ranges[i][0] == min && this.ranges[i][1] == max) {
            this.ranges[i][2] = color;
            found = true;
            break
        }
    }
    if (!found) {
        this.ranges.push([min, max, color])
    }
    if (this.__owner && redraw) {
        this.__owner.__draw(true)
    }
};
___analoggaugeseries.deleteRange = function(min, max, redraw) {
    var found = false;
    for (var i = 0; i < this.ranges.length; i++) {
        if (this.ranges[i][0] == min && this.ranges[i][1] == max) {
            this.ranges.splice(i, 1);
            found = true;
            break
        }
    }
    if (this.__owner && redraw && found) {
        this.__owner.__draw(true)
    }
};
___analoggaugeseries.__doAfterVisibilityChange = ___analoggaugeseries.__doRemoveSeries = function() {
    this.__label.style.display = 'none';
    for (var i = 0; i < this.__tickmarkers.length; i++) {
        this.__tickmarkers[i].style.display = 'none'
    }
};
___analoggaugeseries.__doDraw = function(ctx) {
    if (this.__labelcontainer == undefined) {
        this.__labelcontainer = this.__getChart().__el_labels.appendChild(EJSC.utility.__createDOMArray(['DIV', {}]));
        this.__label = this.__labelcontainer.appendChild(EJSC.utility.__createDOMArray(['DIV', {},
        ['SPAN', {
            className: this.label.className
        }]]));
        this.__label.style.position = 'absolute';
        this.__label.style.textAlign = this.label.textAlign;
        this.__label.style.lineHeight = '14px';
        for (var i = 0; i < this.tickCount; i++) {
            this.__tickmarkers[i] = this.__labelcontainer.appendChild(EJSC.utility.__createDOMArray(['SPAN', {
                className: this.tick.className
            }]));
            this.__tickmarkers[i].style.position = 'absolute'
        }
    }
    this.__label.style.display = this.visible ? 'block': 'none';
    if (!this.visible) {
        for (var i = 0; i < this.__tickmarkers.length; i++) {
            this.__tickmarkers[i].style.display = 'none'
        }
    }
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        this.__dataHandler.loadData();
        return
    } else {
        this.__drawing = true;
        try {
            var canvas_height = this.__getChart().__getDrawArea().height;
            var canvas_width = this.__getChart().__getDrawArea().width;
            var diameter = this.__getPhysicalDiameter();
            var center = this.__getPhysicalCenter();
            var radius = m_FLOOR(diameter / 2);
            var x_center = center.x;
            var y_center = center.y;
            var x_min = 0;
            var x_max = 0;
            var y_min = ((this.label.position.match(/[bB]ottom/) != null) ? ( - 14 * this.label.lines) : (0));
            var y_max = ((this.label.position.match(/[tT]op/) != null) ? (14 * this.label.lines) : (0));
            var g, h, i, j, r, o, x, y;
            var comp_h, comp_w;
            var comp_ratio, grid_ratio, diff;
            var o_s, o_e;
            var o_start, o_end;
            var point_1_y, point_1_x;
            var point_2_y, point_2_x;
            var point_3_y, point_3_x;
            var nlength, perc, rang;
            var o_needle, o_needle_r, o_needle_l;
            var o_tick;
            var point_hint_y, point_hint_x, hint_text;
            var div;
            for (i = this.start_degree; i <= (this.start_degree + this.range_degrees); i++) {
                j = i;
                if (j >= 360) j = j - 360;
                if (j == 0) y_max = radius;
                if (j == 90) x_max = radius;
                if (j == 180) y_min = 0 - radius;
                if (j == 270) x_min = 0 - radius
            }
            o = (((this.start_degree - 90) / 180) * m_PI);
            x = radius * m_COS(o);
            y = -(radius * m_SIN(o));
            if (x > 0) {
                if (x > x_max) x_max = m_ROUND(x)
            } else {
                if (x < x_min) x_min = m_ROUND(x)
            }
            if (y > 0) {
                if (y > y_max) y_max = m_ROUND(y)
            } else {
                if (y < y_min) y_min = m_ROUND(y)
            }
            o = (((this.start_degree + this.range_degrees - 90) / 180) * m_PI);
            x = radius * m_COS(o);
            y = -(radius * m_SIN(o));
            if (x > 0) {
                if (x > x_max) x_max = m_ROUND(x)
            } else {
                if (x < x_min) x_min = m_ROUND(x)
            }
            if (y > 0) {
                if (y > y_max) y_max = m_ROUND(y)
            } else {
                if (y < y_min) y_min = m_ROUND(y)
            }
            comp_h = y_max - y_min;
            comp_w = x_max - x_min;
            comp_ratio = comp_w / comp_h;
            grid_ratio = canvas_width / canvas_height;
            if (comp_ratio < grid_ratio) {
                dif = diameter / comp_h
            } else {
                dif = diameter / comp_w
            }
            radius = radius * dif;
            x_center = x_center - ((x_max + x_min) / 2 * dif);
            y_center = y_center + ((y_max + y_min) / 2 * dif);
            if (this.fillColor != undefined) {
                o_start = (((this.start_degree - 90) / 180) * m_PI);
                o_end = (((this.start_degree + this.range_degrees - 90) / 180) * m_PI);
                point_1_y = y_center + ((radius) * m_SIN(o_start));
                point_1_x = (x_center + (radius) * m_COS(o_start));
                point_2_y = y_center + ((radius - this.axis.thickness) * m_SIN(o_start));
                point_2_x = (x_center + (radius - this.axis.thickness) * m_COS(o_start));
                var c = EJSC.utility.__getColor(this.fillColor);
                ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.fillOpacity / 100) + ")";
                ctx.beginPath();
                ctx.moveTo(x_center, y_center);
                ctx.lineTo(point_1_x, point_1_y);
                ctx.arc(x_center, y_center, radius, o_start, o_end, false);
                ctx.lineTo(x_center, y_center);
                ctx.fill();
                ctx.closePath()
            }
            r = this.ranges;
            o_s = this.start_degree;
            o_e = this.start_degree;
            for (var i = 0; i < r.length; i++) {
                o_s = this.start_degree + (((r[i][0] - this.min) / (this.max - this.min)) * this.range_degrees);
                o_e = this.start_degree + (((r[i][1] - this.min) / (this.max - this.min)) * this.range_degrees);
                o_start = (((o_s - 90) / 180) * m_PI);
                o_end = (((o_e - 90) / 180) * m_PI);
                point_1_y = y_center + ((radius - this.axis.thickness - this.range.offset - this.range.thickness) * m_SIN(o_start));
                point_1_x = (x_center + (radius - this.axis.thickness - this.range.offset - this.range.thickness) * m_COS(o_start));
                point_2_y = y_center + ((radius - this.axis.thickness - this.range.offset - this.range.thickness) * m_SIN(o_end));
                point_2_x = (x_center + (radius - this.axis.thickness - this.range.offset - this.range.thickness) * m_COS(o_end));
                point_3_y = y_center + ((radius - this.axis.thickness - this.range.offset) * m_SIN(o_start));
                point_3_x = (x_center + (radius - this.axis.thickness - this.range.offset) * m_COS(o_start));
                if (this.range.borderColor != undefined) {
                    var tColor = EJSC.utility.__getColor(this.range.borderColor);
                    var rc = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.range.borderOpacity / 100) + ")"
                } else {
                    var rc = r[i][2]
                }
                ctx.strokeStyle = rc;
                var tColor = EJSC.utility.__getColor(r[i][2]);
                ctx.fillStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.range.opacity / 100) + ")";
                ctx.lineWidth = this.range.borderWidth;
                ctx.beginPath();
                ctx.moveTo(point_3_x, point_3_y);
                ctx.arc(x_center, y_center, radius - this.axis.thickness - this.range.offset, o_start, o_end, false);
                if (this.range.style == 'doughnut') {
                    ctx.lineTo(point_2_x, point_2_y);
                    ctx.arc(x_center, y_center, radius - this.axis.thickness - this.range.offset - this.range.thickness, o_end, o_start, true);
                    ctx.lineTo(point_3_x, point_3_y)
                } else if (this.range.style == "pie") {
                    ctx.lineTo(x_center, y_center);
                    ctx.lineTo(point_1_x, point_1_y)
                }
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(point_1_x, point_1_y);
                ctx.arc(x_center, y_center, radius - this.axis.thickness - this.range.offset, o_start, o_end, false);
                if (this.range.style == 'doughnut') {
                    ctx.lineTo(point_2_x, point_2_y);
                    ctx.arc(x_center, y_center, radius - this.axis.thickness - this.range.offset - this.range.thickness, o_end, o_start, true);
                    ctx.lineTo(point_3_x, point_3_y)
                } else if (this.range.style == "pie") {
                    ctx.lineTo(x_center, y_center);
                    ctx.lineTo(point_1_x, point_1_y)
                }
                ctx.closePath();
                ctx.stroke()
            }
            o_start = (((this.start_degree - 90) / 180) * m_PI);
            o_end = (((this.start_degree + this.range_degrees - 90) / 180) * m_PI);
            point_1_y = y_center + ((radius) * m_SIN(o_start));
            point_1_x = (x_center + (radius) * m_COS(o_start));
            point_2_y = y_center + ((radius - this.axis.thickness) * m_SIN(o_start));
            point_2_x = (x_center + (radius - this.axis.thickness) * m_COS(o_start));
            var tColor = EJSC.utility.__getColor(this.axis.color);
            ctx.fillStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.axis.opacity / 100) + ")";
            ctx.beginPath();
            ctx.moveTo(point_1_x, point_1_y);
            if (this.range_degrees == 360) {
                o_end = (((this.start_degree + 180 - 90) / 180) * m_PI);
                ctx.arc(x_center, y_center, radius, o_start, o_end, false);
                ctx.arc(x_center, y_center, radius, o_end, o_start, false)
            } else {
                ctx.arc(x_center, y_center, radius, o_start, o_end, false)
            }
            ctx.arc(x_center, y_center, radius - this.axis.thickness, o_end, o_start, true);
            ctx.fill();
            ctx.closePath();
            if (this.axis.outerBorderVisible == true) {
                var tColor = EJSC.utility.__getColor(this.axis.outerBorderColor);
                ctx.strokeStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.axis.outerBorderOpacity / 100) + ")";
                ctx.lineWidth = this.axis.outerBorderWidth;
                ctx.beginPath();
                ctx.moveTo(point_1_x, point_1_y);
                ctx.arc(x_center, y_center, radius, o_start, o_end, false);
                ctx.arc(x_center, y_center, radius, o_end, o_start, ((this.range_degrees == 360) ? (false) : (true)));
                ctx.closePath();
                ctx.stroke()
            }
            if (this.axis.innerBorderVisible == true) {
                var tColor = EJSC.utility.__getColor(this.axis.innerBorderColor);
                ctx.strokeStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.axis.innerBorderOpacity / 100) + ")";
                ctx.lineWidth = this.axis.innerBorderWidth;
                ctx.beginPath();
                ctx.moveTo(point_2_x, point_2_y);
                if (this.range_degrees == 360) {
                    o_end = (((this.start_degree + 180 - 90) / 180) * m_PI)
                }
                ctx.arc(x_center, y_center, radius - this.axis.thickness, o_start, o_end, false);
                ctx.arc(x_center, y_center, radius - this.axis.thickness, o_end, o_start, ((this.range_degrees == 360) ? (false) : (true)));
                ctx.closePath();
                ctx.stroke()
            }
            var o = this.lock.offset / radius;
            var o_needle_min = (((this.start_degree - 90) / 180) * m_PI) - o;
            var o_needle_max = (((this.start_degree + this.range_degrees - 90) / 180) * m_PI) + o;
            o = (this.lock.offset + (this.lock.size / 2)) / radius;
            var o_first = (((this.start_degree - 90) / 180) * m_PI) - o;
            var point_l1_y = y_center + ((radius) * m_SIN(o_first));
            var point_l1_x = (x_center + (radius) * m_COS(o_first));
            var o_last = (((this.start_degree + this.range_degrees - 90) / 180) * m_PI) + o;
            var point_l2_y = y_center + ((radius) * m_SIN(o_last));
            var point_l2_x = (x_center + (radius) * m_COS(o_last));
            nlength = radius * 1.05;
            perc = ((this.__points[0].x - this.min) / (this.max - this.min));
            rang = this.range_degrees * perc;
            o_needle = (((this.start_degree + rang - 90) / 180) * m_PI);
            o_needle_r = (((this.start_degree + rang) / 180) * m_PI);
            o_needle_l = (((this.start_degree + rang - 180) / 180) * m_PI);
            if (o_needle < o_needle_min && this.range_degrees != 360) o_needle = o_needle_min;
            if (o_needle > o_needle_max && this.range_degrees != 360) o_needle = o_needle_max;
            point_1_y = y_center + ((nlength) * m_SIN(o_needle));
            point_1_x = (x_center + (nlength) * m_COS(o_needle));
            point_2_y = y_center + ((this.needle.size / 2) * m_SIN(o_needle_r));
            point_2_x = (x_center + (this.needle.size / 2) * m_COS(o_needle_r));
            point_3_y = y_center + ((this.needle.size / 2) * m_SIN(o_needle_l));
            point_3_x = (x_center + (this.needle.size / 2) * m_COS(o_needle_l));
            this.__drawLocks(ctx, point_l1_x, point_l1_y, point_l2_x, point_l2_y);
            this.__addMinorTickLines(ctx, y_center, x_center, radius, point_1_y, point_1_x, point_2_y, point_2_x);
            this.__addMajorTickLines(ctx, y_center, x_center, radius);
            this.__drawNeedle(ctx, point_1_x, point_1_y, point_2_x, point_2_y, point_3_x, point_3_y);
            this.__drawAnchor(ctx, x_center, y_center);
            this.__updateLabel(canvas_width, x_center, y_center, x_min, y_min, x_max, y_max, dif, ctx)
        } catch(e) {} finally {
            this.__drawing = false
        }
    }
};
___analoggaugeseries.__drawNeedle = function(ctx, point_1_x, point_1_y, point_2_x, point_2_y, point_3_x, point_3_y) {
    var tColor = EJSC.utility.__getColor(this.needle.borderColor);
    ctx.strokeStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.needle.borderOpacity / 100) + ")";
    tColor = EJSC.utility.__getColor(this.needle.color);
    ctx.fillStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.needle.opacity / 100) + ")";
    ctx.lineWidth = this.needle.borderWidth;
    ctx.beginPath();
    ctx.moveTo(point_1_x, point_1_y);
    ctx.lineTo(point_2_x, point_2_y);
    ctx.lineTo(point_3_x, point_3_y);
    ctx.lineTo(point_1_x, point_1_y);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(point_1_x, point_1_y);
    ctx.lineTo(point_2_x, point_2_y);
    ctx.lineTo(point_3_x, point_3_y);
    ctx.lineTo(point_1_x, point_1_y);
    ctx.stroke();
    ctx.closePath()
};
___analoggaugeseries.__drawLocks = function(ctx, point_l1_x, point_l1_y, point_l2_x, point_l2_y) {
    if (this.lock.visible == true && this.lock.offset != undefined && this.range_degrees != 360) {
        var tColor = EJSC.utility.__getColor(this.lock.color);
        ctx.fillStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.lock.opacity / 100) + ")";
        ctx.beginPath();
        ctx.moveTo(point_l1_x, point_l1_y);
        ctx.arc(point_l1_x, point_l1_y, this.lock.size / 2, 0, m_PI, false);
        ctx.arc(point_l1_x, point_l1_y, this.lock.size / 2, m_PI, m_PIx2, false);
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.lock.opacity / 100) + ")";
        ctx.beginPath();
        ctx.moveTo(point_l2_x, point_l2_y);
        ctx.arc(point_l2_x, point_l2_y, this.lock.size / 2, 0, m_PI, false);
        ctx.arc(point_l2_x, point_l2_y, this.lock.size / 2, m_PI, m_PIx2, false);
        ctx.fill();
        ctx.closePath()
    }
};
___analoggaugeseries.__drawAnchor = function(ctx, x_center, y_center) {
    var tColor = EJSC.utility.__getColor(this.anchor.color);
    ctx.fillStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.anchor.opacity / 100) + ")";
    ctx.beginPath();
    ctx.moveTo(x_center, y_center);
    ctx.arc(x_center, y_center, this.anchor.size / 2, 0, m_PI, false);
    ctx.arc(x_center, y_center, this.anchor.size / 2, m_PI, m_PIx2, false);
    ctx.fill();
    ctx.closePath()
};
___analoggaugeseries.__addMinorTickLines = function(ctx, y_center, x_center, radius, point_1_y, point_1_x, point_2_y, point_2_x) {
    var tColor = EJSC.utility.__getColor(this.minorTick.color);
    ctx.strokeStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.minorTick.opacity / 100) + ")";
    ctx.lineWidth = this.minorTick.size;
    var t_size = this.minorTick.thickness;
    if (t_size == undefined || t_size == null) t_size = this.axis.thickness;
    var a_thick = this.axis.thickness;
    var i, o_tick, e_tick, m_tick, dif;
    for (i = 0; i < this.tickCount - 1; i++) {
        o_tick = (((this.start_degree - 90 + (this.range_degrees / (this.tickCount - 1)) * i) / 180) * m_PI);
        e_tick = (((this.start_degree - 90 + (this.range_degrees / (this.tickCount - 1)) * (i + 1)) / 180) * m_PI);
        dif = ((e_tick - o_tick) / (this.minorTick.count + 1));
        this.__drawMinorTickLines(ctx, o_tick, dif, y_center, x_center, radius, a_thick, t_size, e_tick)
    }
};
___analoggaugeseries.__drawMinorTickLines = function(ctx, o_tick, dif, y_center, x_center, radius, a_thick, t_size, e_tick) {
    var m_tick, point_1_y, point_1_x, point_2_y, point_2_x;
    var r1 = radius - a_thick + this.minorTick.offset;
    var r2 = radius - a_thick + this.minorTick.offset + t_size;
    if (EJSC.__isIE) ctx.beginPath();
    for (var j = 1; j < this.minorTick.count + 1; j++) {
        if (!EJSC.__isIE) ctx.beginPath();
        m_tick = o_tick + (dif * j);
        point_1_y = y_center + (r1 * m_SIN(m_tick));
        point_1_x = x_center + (r1 * m_COS(m_tick));
        point_2_y = y_center + (r2 * m_SIN(m_tick));
        point_2_x = x_center + (r2 * m_COS(m_tick));
        ctx.moveTo(point_1_x, point_1_y);
        ctx.lineTo(point_2_x, point_2_y);
        if (!EJSC.__isIE) {
            ctx.stroke();
            ctx.closePath()
        }
    }
    if (EJSC.__isIE) {
        ctx.stroke();
        ctx.closePath()
    }
};
___analoggaugeseries.__addMajorTickLines = function(ctx, y_center, x_center, radius) {
    var o_tick, point_1_y, point_1_x, point_2_y, point_2_x;
    var point_hint_y, point_hint_x, hint_text, h;
    var tColor = EJSC.utility.__getColor(this.tick.color);
    ctx.strokeStyle = "rgba(" + tColor.red + "," + tColor.green + "," + tColor.blue + "," + (this.tick.opacity / 100) + ")";
    ctx.lineWidth = this.tick.size;
    var t_size = this.tick.thickness;
    if (t_size == undefined || t_size == null) t_size = this.axis.thickness;
    var a_thick = this.axis.thickness;
    var r1 = radius - a_thick + this.tick.offset;
    var r2 = radius - a_thick + this.tick.offset + t_size;
    if (EJSC.__isIE) ctx.beginPath();
    for (var i = 0; i < this.tickCount; i++) {
        if (!EJSC.__isIE) ctx.beginPath();
        o_tick = (((this.start_degree - 90 + (this.range_degrees / (this.tickCount - 1)) * i) / 180) * m_PI);
        point_1_y = y_center + ((r1) * m_SIN(o_tick));
        point_1_x = (x_center + (r1) * m_COS(o_tick));
        point_2_y = y_center + ((r2) * m_SIN(o_tick));
        point_2_x = (x_center + (r2) * m_COS(o_tick));
        ctx.moveTo(point_1_x, point_1_y);
        ctx.lineTo(point_2_x, point_2_y);
        point_hint_y = y_center + ((radius) * m_SIN(o_tick));
        point_hint_x = (x_center + (radius) * m_COS(o_tick));
        if (!EJSC.__isIE) {
            ctx.stroke();
            ctx.closePath()
        }
        hint_text = this.min + (((this.max - this.min) / (this.tickCount - 1)) * i);
        if (hint_text != this.min || this.range_degrees < 360) this.__updateMajorTickMarker(i, hint_text, point_hint_x, point_hint_y, o_tick, ctx)
    }
    if (EJSC.__isIE) {
        ctx.stroke();
        ctx.closePath()
    }
};
___analoggaugeseries.__updateMajorTickMarker = function(i, hint_text, point_hint_x, point_hint_y, o_tick) {
    var h = this.__tickmarkers[i];
    h.style.display = (this.visible ? 'block': 'none');
    if (this.x_axis_formatter !== undefined) h.innerHTML = this.x_axis_formatter.format(hint_text);
    else h.innerHTML = this.__getChart().axis_bottom.formatter.format(hint_text);
    var l = point_hint_x - (h.offsetWidth / 2);
    var t = point_hint_y - (h.offsetHeight / 2);
    var te = ((this.tick.extension > 0) ? (this.tick.extension / 1.8) : (0));
    var c = m_COS(o_tick);
    var s = m_SIN(o_tick);
    this.__moveMajorTickMarker(h, l, t, te, o_tick, c, s)
};
___analoggaugeseries.__moveMajorTickMarker = function(marker, left, top, tick_extension, o_tick, o_tick_cos, o_tick_sin) {
    if (this.marker_position == 'outer') {
        marker.style.left = (m_ROUND(left + ((marker.offsetWidth / 2 + tick_extension) * o_tick_cos * 1.5)) + 'px');
        marker.style.top = (m_ROUND(top + ((marker.offsetHeight / 2 + tick_extension) * o_tick_sin * 1.5)) + 'px')
    } else if (this.marker_position == 'inner') {
        marker.style.left = (m_ROUND(left - ((marker.offsetWidth / 2 + this.axis.thickness) * o_tick_cos * 1.2)) + 'px');
        marker.style.top = (m_ROUND(top - ((marker.offsetHeight / 2 + this.axis.thickness) * o_tick_sin * 1.2)) + 'px')
    }
};
___analoggaugeseries.__updateLabel = function(canvas_width, x_center, y_center, x_min, y_min, x_max, y_max, dif) {
    var div = this.__label;
    if (this.__previousLabel != this.__points[0].label) {
        div.firstChild.innerHTML = this.__points[0].label;
        this.__previousLabel = this.__points[0].label
    }
    div.style.height = ((14 * this.label.lines) + 'px');
    div.style.width = ((canvas_width) + 'px');
    div.style.width = ((div.firstChild.offsetWidth) + 'px');
    switch (this.label.position) {
    case "top":
        div.style.top = ((y_center - (y_max * dif)) + 'px');
        div.style.left = ((x_center - div.offsetWidth / 2) + 'px');
        break;
    case "left":
        div.style.top = ((y_center - div.offsetHeight / 2) + 'px');
        div.style.left = ((x_center + (x_min * dif)) + 'px');
        break;
    case "centerTop":
        div.style.top = ((y_center - 10 - div.offsetHeight) + 'px');
        div.style.left = ((x_center - div.offsetWidth / 2) + 'px');
        break;
    case "centerLeft":
        div.style.top = ((y_center - div.offsetHeight / 2) + 'px');
        div.style.left = ((x_center - 10 - div.offsetWidth) + 'px');
        break;
    case "centerRight":
        div.style.top = ((y_center - div.offsetHeight / 2) + 'px');
        div.style.left = ((x_center + 10) + 'px');
        break;
    case "centerBottom":
        div.style.top = ((y_center + 10) + 'px');
        div.style.left = ((x_center - div.offsetWidth / 2) + 'px');
        break;
    case "right":
        div.style.top = ((y_center - div.offsetHeight / 2) + 'px');
        div.style.left = ((x_center + (x_max * dif) - div.offsetWidth) + 'px');
        break;
    case "bottom":
        div.style.top = ((y_center - (y_min) - div.offsetHeight) + 'px');
        div.style.left = ((x_center - div.offsetWidth / 2) + 'px');
        break;
    default:
        alert("'" + this.label.position + "' is an invalid label position, using 'centerBottom'.");
        div.style.top = ((y_center + 10) + 'px');
        div.style.left = ((x_center - div.offsetWidth / 2) + 'px')
    }
};
___analoggaugeseries.__getPhysicalDiameter = function() {
    var h = this.__getChart().__getDrawArea().height;
    var w = this.__getChart().__getDrawArea().width;
    var perc = .8;
    var n0 = this.width;
    var n1 = this.height;
    if (typeof(n0) == 'number') {
        n0 = this.width.toString()
    }
    if (typeof(n1) == 'number') {
        n1 = this.height.toString()
    }
    if (n0.indexOf('%') == -1) {
        c = parseFloat(n0)
    } else {
        c = w * (parseFloat(n0.replace('%', '')) / 100)
    }
    if (n1.indexOf('%') == -1) {
        d = parseFloat(n1)
    } else {
        d = h * (parseFloat(n1.replace('%', '')) / 100)
    }
    return m_FLOOR((c < d) ? (c * perc) : (d * perc))
};
___analoggaugeseries.__getPhysicalCenter = function() {
    var h = this.__getChart().__getDrawArea().height;
    var w = this.__getChart().__getDrawArea().width;
    var l = this.__getChart().__getDrawArea().left;
    var t = this.__getChart().__getDrawArea().top;
    var n0 = this.width;
    var n1 = this.height;
    if (typeof(n0) == 'number') {
        n0 = this.width.toString()
    }
    if (typeof(n1) == 'number') {
        n1 = this.height.toString()
    }
    if (n0.indexOf('%') == -1) {
        c = parseFloat(n0)
    } else {
        c = w * (parseFloat(n0.replace('%', '')) / 100)
    }
    if (n1.indexOf('%') == -1) {
        d = parseFloat(n1)
    } else {
        d = h * (parseFloat(n1.replace('%', '')) / 100)
    }
    var ret = {
        x: w / 2,
        y: w / 2
    };
    switch (this.position) {
    case "topLeft":
        ret = {
            x: c * .5,
            y: d * .5
        };
        break;
    case "topCenter":
        ret = {
            x: w / 2,
            y: d * .5
        };
        break;
    case "topRight":
        ret = {
            x: w - c * .5,
            y: d * .5
        };
        break;
    case "centerLeft":
        ret = {
            x: c * .5,
            y: h / 2
        };
        break;
    case "centerRight":
        ret = {
            x: w - c * .5,
            y: h / 2
        };
        break;
    case "bottomLeft":
        ret = {
            x: c * .5,
            y: h - d * .5
        };
        break;
    case "bottomCenter":
        ret = {
            x: w / 2,
            y: h - d * .5
        };
        break;
    case "bottomRight":
        ret = {
            x: w - c * .5,
            y: h - d * .5
        };
        break;
    case "center":
        ret = {
            x: w / 2,
            y: h / 2
        };
        break;
    case "left":
        ret = {
            x: (c < d) ? (c / 2) : (d / 2),
            y: h / 2
        };
        break;
    case "right":
        ret = {
            x: (c < d) ? w - (c / 2) : w - (d / 2),
            y: h / 2
        };
        break;
    default:
        alert("'" + this.position + "' is an invalid gauge position, using 'center'.");
        ret = {
            x: w / 2,
            y: h / 2
        }
    }
    return {
        x: ret.x + l,
        y: ret.y + t
    }
};
___analoggaugeseries.doAfterVisibilityChange = function() {
    if (this.visible) {
        this.__labelcontainer.style.display = "block"
    } else {
        this.__labelcontainer.style.display = "none"
    }
};
___analoggaugeseries.__doGetLegendIcon = function() {
    return "analog-gauge"
};
EJSC.CandlestickSeries = function(dh, options) {
    EJSC.Series.__extendTo(this);
    this.__doSetDataHandler(dh, false);
    var self = this;
    this.__type = 'candle';
    this.__drawing = false;
    this.__hasData = false;
    this.color = 'rgb(0,0,0)';
    this.opacity = 100;
    this.__padding = {
        x_min: (this.y_axis == "left" ? 5 : 0),
        x_max: (this.y_axis == "left" ? 0 : 5),
        y_min: 5,
        y_max: 5
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.gain = {
        lineColor: 'rgb(151,183,247)',
        lineOpacity: 100,
        color: 'rgb(151,183,247)',
        opacity: 50
    };
    this.loss = {
        lineColor: 'rgb(249,95,95)',
        lineOpacity: 100,
        color: 'rgb(249,95,95)',
        opacity: 50
    };
    this.lineWidth = 1;
    this.intervalOffset = 0.5;
    this.__interval = undefined;
    this.__copyOptions(options)
};
EJSC.Series.__extendTo(EJSC.CandlestickSeries);
var ___candlestickseries = EJSC.CandlestickSeries.prototype;
___candlestickseries.__doReload = function() {
    this.__points = [];
    this.__hasData = false;
    this.__dataHandler.__loading = false;
    this.__dataHandler.__loaded = false;
    this.__dataHandler.loadData()
};
___candlestickseries.__doSetDataHandler = function(handler, reload) {
    var self = this;
    this.__points = [];
    this.__dataHandler = handler;
    this.__dataHandler.__init(this, {
        x: null,
        high: null,
        low: null,
        open: null,
        close: null,
        label: null,
        userdata: null
    });
    if (reload) {
        this.__dataHandler.__loadData()
    }
};
___candlestickseries.__doOnDataAvailable = function(data) {
    if (data.length == 0) {
        this.__hasData = false;
        return
    }
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_string_values = x_axis.__text_values.__count() > 0 || x_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].x);
    var y_string_values = y_axis.__text_values.__count() > 0 || y_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].y);
    for (var i = 0; i < data.length; i++) {
        if (x_string_values) {
            data[i].x = x_axis.__text_values.__add(data[i].x)
        } else {
            data[i].x = parseFloat(data[i].x)
        }
        data[i].low = parseFloat(data[i].low);
        data[i].high = parseFloat(data[i].high);
        if (data[i].open == 'null' || data[i].open === '') data[i].open = null;
        if (data[i].close == 'null' || data[i].close === '') data[i].close = null;
        this.__points.push(new EJSC.StockPoint(data[i].x, data[i].high, data[i].low, data[i].open, data[i].close, data[i].label, data[i].userdata, this))
    }
    this.__hasData = true
};
___candlestickseries.__doResetExtremes = function() {
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined
};
___candlestickseries.__doCalculateExtremes = function() {
    if (this.__drawing || !this.__getHasData()) {
        return
    }
    var points = this.__points;
    for (var i = 0; i < points.length; i++) {
        if (this.__minX == undefined || points[i].__x() < this.__minX) this.__minX = points[i].__x();
        if (this.__maxX == undefined || points[i].__x() > this.__maxX) this.__maxX = points[i].__x();
        if (this.__minY == undefined || points[i].low < this.__minY) this.__minY = points[i].low;
        if (this.__maxY == undefined || points[i].high > this.__maxY) this.__maxY = points[i].high
    }
    this.__interval = this.__getInterval();
    this.__minX = this.__minX - (this.__interval / 2);
    this.__maxX = this.__maxX + (this.__interval / 2)
};
___candlestickseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX + chart.__draw_area.left);
    var i, minY, maxY;
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].__x() >= minX && this.__points[i].__x() <= maxX) {
            if (minY == undefined || minY > this.__points[i].low) minY = this.__points[i].low;
            if (maxY == undefined || maxY < this.__points[i].high) maxY = this.__points[i].high
        }
    }
    if (minY == undefined || maxY == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxY) - chart.__draw_area.top,
            max: y_axis.__pt2px(minY) - chart.__draw_area.top
        }
    }
};
___candlestickseries.__doGetXRange = function(screenMinY, screenMaxY) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minY = y_axis.__px2pt(screenMinY + chart.__draw_area.top);
    var maxY = y_axis.__px2pt(screenMaxY + chart.__draw_area.top);
    var i, minX, maxX;
    var interval = this.__getInterval();
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].low <= maxY && this.__points[i].high >= minY) {
            if (minX == undefined || minX > this.__points[i].__x() - interval) minX = this.__points[i].__x() - interval;
            if (maxX == undefined || maxX < this.__points[i].__x() + interval) maxX = this.__points[i].__x() + interval
        }
    }
    if (minX == undefined || maxX == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxX) - chart.__draw_area.left,
            max: y_axis.__pt2px(minX) - chart.__draw_area.left
        }
    }
};
___candlestickseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var x = x_axis.__px2pt(mouse.x + chart.__draw_area.left);
    var y = y_axis.__px2pt(mouse.y + chart.__draw_area.top);
    var line_x = (x_axis.__scale * this.lineWidth);
    var line_y = (x_axis.__scale * this.lineWidth);
    var snap_x = (x_axis.__scale * chart.proximity_snap);
    var snap_y = (y_axis.__scale * chart.proximity_snap);
    var x1, x2, x3, y1, y2, y3, y4;
    var distance = EJSC.math.__distance;
    var plotWidth = (this.__interval * this.intervalOffset);
    for (var i = 0; i < this.__points.length; i++) {
        x2 = this.__points[i].__x();
        x1 = x2 - (plotWidth / 2);
        x3 = x2 + (plotWidth / 2);
        y1 = this.__points[i].low;
        if (this.__points[i].open == null && this.__points[i].close == null) {
            y2 = null;
            y3 = null
        } else if (this.__points[i].open == null || this.__points[i].close == null) {
            y2 = (this.__points[i].open == null) ? this.__points[i].close: this.__points[i].open;
            y3 = (this.__points[i].open == null) ? this.__points[i].close: this.__points[i].open
        } else {
            y2 = (this.__points[i].open > this.__points[i].close) ? this.__points[i].close: this.__points[i].open;
            y3 = (this.__points[i].open <= this.__points[i].close) ? this.__points[i].close: this.__points[i].open
        }
        y4 = this.__points[i].high;
        if (x >= (x2 - snap_x - line_x) && x <= (x2 + snap_x + line_x) && y >= (y1 - snap_y - line_y) && y <= (y4 + snap_y + line_y)) {
            return {
                distance: distance(mouse.x, mouse.y, x_axis.__pt2px(x2) - chart.__draw_area.left, y_axis.__pt2px((y4 + y1) / 2) - chart.__draw_area.top),
                point: this.__points[i]
            }
        } else if (y2 != null && y3 != null) {
            if (x >= (x1 - snap_x - line_x) && x <= (x3 + snap_x + line_x) && y >= (y2 - snap_y - line_y) && y <= (y3 + snap_y + line_y)) {
                return {
                    distance: distance(mouse.x, mouse.y, x_axis.__pt2px(x2) - chart.__draw_area.left, y_axis.__pt2px((y4 + y1) / 2) - chart.__draw_area.top),
                    point: this.__points[i]
                }
            }
        }
    }
    return null
};
___candlestickseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x = point.__x();
    var y = (point.high + point.low) / 2;
    var plotWidth = (this.__interval * this.intervalOffset);
    if (x - plotWidth > x_axis.__current_max) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_max
        }
    } else if (x + plotWidth < x_axis.__current_min) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_min
        }
    }
    var result = {
        series_title: "<label>" + this.title + "</label>",
        xaxis: x_axis.__getHintCaption(),
        yaxis: y_axis.__getHintCaption(),
        x: x_axis.__getLabel(point.__x()),
        low: point.low,
        high: point.high,
        open: point.open,
        close: point.close,
        label: point.label,
        __defaultHintString: "[series_title]<br/>[xaxis] [x]<br/>Low: [low]<br/>High: [high]<br/>Open: [open]<br/>Close: [close]",
        __center: false
    };
    if (y > y_axis.__current_max) {
        y = y_axis.__current_max
    } else if (y < y_axis.__current_min) {
        y = y_axis.__current_min
    }
    result.__position = {
        x: x_axis.__pt2px(x),
        y: y_axis.__pt2px(y)
    };
    return result
};
___candlestickseries.__doSelectPrevious = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i--;
    if (i < 0 || points[i].__x() < x_axis.__current_min) {
        i = points.length - 1;
        while (points[i].__x() > x_axis.__current_max) i--
    }
    this.__owner.__selectPoint(points[i])
};
___candlestickseries.__doSelectNext = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i++;
    if (i == points.length || points[i].__x() > x_axis.__current_max) {
        i = 0;
        while (points[i].__x() < x_axis.__current_min) i++
    }
    this.__owner.__selectPoint(points[i])
};
___candlestickseries.__free = function() {
    this.__dataHandler.onDataAvailable = null;
    this.__dataHandler.__data = [];
    this.__dataHandler = null;
    this.__points = []
};
___candlestickseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        1);
        return
    } else {
        this.__drawing = true;
        try {
            var points = this.__points;
            var x_axis = this.__getChart()["axis_" + this.x_axis];
            var y_axis = this.__getChart()["axis_" + this.y_axis];
            var x_min = x_axis.__current_min;
            var x_max = x_axis.__current_max;
            var y_min = y_axis.__current_min;
            var y_max = y_axis.__current_max;
            var canvas_width = this.__getDrawArea().width;
            var canvas_height = this.__getDrawArea().height;
            var canvas_top = this.__getDrawArea().top;
            var canvas_left = this.__getDrawArea().left;
            var plotWidth = (this.__interval * this.intervalOffset) / x_axis.__scale;
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = (EJSC.utility.__getColor(this.gain.lineColor, this.gain.lineOpacity / 100)).rgba;
            ctx.fillStyle = (EJSC.utility.__getColor(this.gain.color, this.gain.opacity / 100)).rgba;
            ctx.beginPath();
            for (var i = 0; i < points.length; i++) {
                if (points[i].open == null || points[i].close == null) continue;
                if (points[i].open > points[i].close) continue;
                var x1 = x_axis.__pt2px(points[i].__x()) - (plotWidth / 2);
                var x2 = x1 + (plotWidth / 2);
                var x3 = x1 + plotWidth;
                var y1 = y_axis.__pt2px(points[i].low);
                var y2 = y_axis.__pt2px(((points[i].open < points[i].close) ? (points[i].open) : (points[i].close)));
                var y3 = y_axis.__pt2px(((points[i].open >= points[i].close) ? (points[i].open) : (points[i].close)));
                var y4 = y_axis.__pt2px(points[i].high);
                if (x1 > canvas_left + canvas_width) continue;
                if (x3 < canvas_left) continue;
                if (y1 < canvas_top) continue;
                if (y4 > canvas_top + canvas_height) continue;
                if (x1 < canvas_left) x1 = canvas_left - this.lineWidth;
                if (x3 > canvas_left + canvas_width) x3 = canvas_left + canvas_width + this.lineWidth;
                if (y1 > canvas_top + canvas_height) y1 = canvas_top + canvas_height + this.lineWidth;
                if (y4 < canvas_top) y4 = canvas_top - this.lineWidth;
                if (x2 >= canvas_left && x2 < canvas_left + canvas_width) {
                    ctx.moveTo(x2, y1);
                    ctx.lineTo(x2, y2);
                    ctx.moveTo(x2, y3);
                    ctx.lineTo(x2, y4)
                }
                ctx.moveTo(x1, y2);
                ctx.lineTo(x3, y2);
                ctx.lineTo(x3, y3);
                ctx.lineTo(x1, y3);
                ctx.lineTo(x1, y2)
            }
            ctx.closePath();
            if (EJSC.__isIE) {
                var save_path = ctx.currentPath_;
                ctx.fill();
                ctx.currentPath_ = save_path;
                ctx.stroke()
            } else {
                ctx.fill();
                ctx.stroke()
            }
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = (EJSC.utility.__getColor(this.loss.lineColor, this.loss.lineOpacity / 100)).rgba;
            ctx.fillStyle = (EJSC.utility.__getColor(this.loss.color, this.loss.opacity / 100)).rgba;
            ctx.beginPath();
            for (var i = 0; i < points.length; i++) {
                if (points[i].open == null || points[i].close == null) continue;
                if (points[i].open <= points[i].close) continue;
                var x1 = x_axis.__pt2px(points[i].__x()) - (plotWidth / 2);
                var x2 = x1 + (plotWidth / 2);
                var x3 = x1 + plotWidth;
                var y1 = y_axis.__pt2px(points[i].low);
                var y2 = y_axis.__pt2px(((points[i].open < points[i].close) ? (points[i].open) : (points[i].close)));
                var y3 = y_axis.__pt2px(((points[i].open >= points[i].close) ? (points[i].open) : (points[i].close)));
                var y4 = y_axis.__pt2px(points[i].high);
                if (x1 > canvas_left + canvas_width) continue;
                if (x3 < canvas_left) continue;
                if (y1 < canvas_top) continue;
                if (y4 > canvas_top + canvas_height) continue;
                if (x1 < canvas_left) x1 = canvas_left - this.lineWidth;
                if (x3 > canvas_left + canvas_width) x3 = canvas_left + canvas_width + this.lineWidth;
                if (y1 > canvas_top + canvas_height) y1 = canvas_top + canvas_height + this.lineWidth;
                if (y4 < canvas_top) y4 = canvas_top - this.lineWidth;
                if (x2 >= canvas_left && x2 < canvas_left + canvas_width) {
                    ctx.moveTo(x2, y1);
                    ctx.lineTo(x2, y2);
                    ctx.moveTo(x2, y3);
                    ctx.lineTo(x2, y4)
                }
                ctx.moveTo(x1, y2);
                ctx.lineTo(x3, y2);
                ctx.lineTo(x3, y3);
                ctx.lineTo(x1, y3);
                ctx.lineTo(x1, y2)
            }
            ctx.closePath();
            if (EJSC.__isIE) {
                var save_path = ctx.currentPath_;
                ctx.fill();
                ctx.currentPath_ = save_path;
                ctx.stroke()
            } else {
                ctx.fill();
                ctx.stroke()
            }
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = (EJSC.utility.__getColor(this.color, this.opacity / 100)).rgba;
            ctx.beginPath();
            for (var i = 0; i < points.length; i++) {
                if (points[i].open != null && points[i].close != null) continue;
                var x1 = x_axis.__pt2px(points[i].__x()) - (plotWidth / 2);
                var x2 = x1 + (plotWidth / 2);
                var x3 = x1 + plotWidth;
                var y1 = y_axis.__pt2px(points[i].low);
                var y2 = ((points[i].open == null) ? (((points[i].close == null) ? (null) : (y_axis.__pt2px(points[i].close)))) : (y_axis.__pt2px(points[i].open)));
                var y4 = y_axis.__pt2px(points[i].high);
                if (x1 > canvas_left + canvas_width) continue;
                if (x3 < canvas_left) continue;
                if (y1 < canvas_top) continue;
                if (y4 > canvas_top + canvas_height) continue;
                if (x1 < canvas_left) x1 = canvas_left - this.lineWidth;
                if (x3 > canvas_left + canvas_width) x3 = canvas_left + canvas_width + this.lineWidth;
                if (y1 > canvas_top + canvas_height) y1 = canvas_top + canvas_height + this.lineWidth;
                if (y4 < canvas_top) y4 = canvas_top - this.lineWidth;
                if (x2 >= canvas_left && x2 < canvas_left + canvas_width) {
                    ctx.moveTo(x2, y1);
                    ctx.lineTo(x2, y4)
                }
                if (y2 != null) {
                    ctx.moveTo(x1, y2);
                    ctx.lineTo(x3, y2)
                }
            }
            ctx.closePath();
            ctx.stroke()
        } catch(e) {} finally {
            this.__drawing = false
        }
    }
};
___candlestickseries.__getInterval = function() {
    var result = undefined;
    var points = this.__points;
    var len = this.__points.length;
    var diff;
    var i = 0;
    for (; i < len - 1; i++) {
        diff = (points[i + 1].__x() - points[i].__x());
        if (result == undefined || (result > diff)) {
            if (diff != 0) {
                result = diff
            }
        }
    }
    if (result == undefined) {
        result = 1
    }
    return result
};
___candlestickseries.__doGetLegendIcon = function() {
    return "candlestick"
};
EJSC.OpenHighLowCloseSeries = function(dh, options) {
    EJSC.Series.__extendTo(this);
    this.__doSetDataHandler(dh, false);
    var self = this;
    this.__type = 'hloc';
    this.__drawing = false;
    this.__hasData = false;
    this.color = 'rgb(0,0,0)';
    this.opacity = 100;
    this.__padding = {
        x_min: (this.y_axis == "left" ? 5 : 0),
        x_max: (this.y_axis == "left" ? 0 : 5),
        y_min: 5,
        y_max: 5
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.gain = {
        lineColor: 'rgb(151,183,247)',
        lineOpacity: 100,
        color: 'rgb(151,183,247)',
        opacity: 50
    };
    this.loss = {
        lineColor: 'rgb(249,95,95)',
        lineOpacity: 100,
        color: 'rgb(249,95,95)',
        opacity: 50
    };
    this.lineWidth = 1;
    this.intervalOffset = 0.5;
    this.__interval = undefined;
    this.__copyOptions(options)
};
EJSC.Series.__extendTo(EJSC.OpenHighLowCloseSeries);
var ___ohlcseries = EJSC.OpenHighLowCloseSeries.prototype;
___ohlcseries.__doReload = function() {
    this.__points = [];
    this.__hasData = false;
    this.__dataHandler.__loading = false;
    this.__dataHandler.__loaded = false;
    this.__dataHandler.loadData()
};
___ohlcseries.__doSetDataHandler = function(handler, reload) {
    var self = this;
    this.__points = [];
    this.__dataHandler = handler;
    this.__dataHandler.__init(this, {
        x: null,
        high: null,
        low: null,
        open: null,
        close: null,
        label: null,
        userdata: null
    });
    if (reload) {
        this.__dataHandler.__loadData()
    }
};
___ohlcseries.__doOnDataAvailable = function(data) {
    if (data.length == 0) {
        this.__hasData = false;
        return
    }
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_string_values = x_axis.__text_values.__count() > 0 || x_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].x);
    var y_string_values = y_axis.__text_values.__count() > 0 || y_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].y);
    for (var i = 0; i < data.length; i++) {
        if (x_string_values) {
            data[i].x = x_axis.__text_values.__add(data[i].x)
        } else {
            data[i].x = parseFloat(data[i].x)
        }
        data[i].low = parseFloat(data[i].low);
        data[i].high = parseFloat(data[i].high);
        if (data[i].open == 'null' || data[i].open === '') data[i].open = null;
        if (data[i].close == 'null' || data[i].close === '') data[i].close = null;
        this.__points.push(new EJSC.StockPoint(data[i].x, data[i].high, data[i].low, data[i].open, data[i].close, data[i].label, data[i].userdata, this))
    }
    this.__hasData = true
};
___ohlcseries.__doResetExtremes = function() {
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined
};
___ohlcseries.__doCalculateExtremes = function() {
    if (this.__drawing || !this.__getHasData()) {
        return
    }
    var points = this.__points;
    for (var i = 0; i < points.length; i++) {
        if (this.__minX == undefined || points[i].__x() < this.__minX) this.__minX = points[i].__x();
        if (this.__maxX == undefined || points[i].__x() > this.__maxX) this.__maxX = points[i].__x();
        if (this.__minY == undefined || points[i].low < this.__minY) this.__minY = points[i].low;
        if (this.__maxY == undefined || points[i].high > this.__maxY) this.__maxY = points[i].high
    }
    this.__interval = this.__getInterval();
    this.__minX = this.__minX - (this.__interval / 2);
    this.__maxX = this.__maxX + (this.__interval / 2)
};
___ohlcseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX + chart.__draw_area.left);
    var i, minY, maxY;
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].__x() >= minX && this.__points[i].__x() <= maxX) {
            if (minY == undefined || minY > this.__points[i].low) minY = this.__points[i].low;
            if (maxY == undefined || maxY < this.__points[i].high) maxY = this.__points[i].high
        }
    }
    if (minY == undefined || maxY == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxY) - chart.__draw_area.top,
            max: y_axis.__pt2px(minY) - chart.__draw_area.top
        }
    }
};
___ohlcseries.__doGetXRange = function(minY, maxY) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minY = y_axis.__px2pt(screenMinY + chart.__draw_area.top);
    var maxY = y_axis.__px2pt(screenMaxY + chart.__draw_area.top);
    var i, minX, maxX;
    var interval = this.__getInterval();
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].low <= maxY && this.__points[i].high >= minY) {
            if (minX == undefined || minX > this.__points[i].__x() - interval) minX = this.__points[i].__x() - interval;
            if (maxX == undefined || maxX < this.__points[i].__x() + interval) maxX = this.__points[i].__x() + interval
        }
    }
    if (minX == undefined || maxX == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxX) - chart.__draw_area.left,
            max: y_axis.__pt2px(minX) - chart.__draw_area.left
        }
    }
};
___ohlcseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var x = x_axis.__px2pt(mouse.x + chart.__draw_area.left);
    var y = y_axis.__px2pt(mouse.y + chart.__draw_area.top);
    var line_x = (x_axis.__scale * this.lineWidth);
    var line_y = (x_axis.__scale * this.lineWidth);
    var snap_x = (x_axis.__scale * chart.proximity_snap);
    var snap_y = (y_axis.__scale * chart.proximity_snap);
    var x1, x2, x3, y1, y2, y3, y4;
    var distance = EJSC.math.__distance;
    var plotWidth = (this.__interval * this.intervalOffset);
    for (var i = 0; i < this.__points.length; i++) {
        x2 = this.__points[i].__x();
        x1 = x2 - (plotWidth / 2);
        x3 = x2 + (plotWidth / 2);
        y1 = this.__points[i].low;
        y2 = this.__points[i].open;
        y3 = this.__points[i].close;
        y4 = this.__points[i].high;
        if (x >= (x2 - snap_x - line_x) && x <= (x2 + snap_x + line_x) && y >= (y1 - snap_y - line_y) && y <= (y4 + snap_y + line_y)) {
            return {
                distance: distance(mouse.x, mouse.y, x_axis.__pt2px(x2) - chart.__draw_area.left, y_axis.__pt2px((y4 + y1) / 2) - chart.__draw_area.top),
                point: this.__points[i]
            }
        }
        if (y2 != null) {
            if (x >= (x1 - snap_x - line_x) && x <= (x2 + snap_x + line_x) && y >= (y2 - snap_y - line_y) && y <= (y2 + snap_y + line_y)) {
                return {
                    distance: distance(mouse.x, mouse.y, x_axis.__pt2px(x2) - chart.__draw_area.left, y_axis.__pt2px((y4 + y1) / 2) - chart.__draw_area.top),
                    point: this.__points[i]
                }
            }
        }
        if (y3 != null) {
            if (x >= (x2 - snap_x - line_x) && x <= (x3 + snap_x + line_x) && y >= (y3 - snap_y - line_y) && y <= (y3 + snap_y + line_y)) {
                return {
                    distance: distance(mouse.x, mouse.y, x_axis.__pt2px(x2), y_axis.__pt2px((y4 + y1) / 2)),
                    point: this.__points[i]
                }
            }
        }
    }
    return null
};
___ohlcseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x = point.__x();
    var y = (point.high + point.low) / 2;
    var plotWidth = (this.__interval * this.intervalOffset);
    if (x - plotWidth > x_axis.__current_max) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_max
        }
    } else if (x + plotWidth < x_axis.__current_min) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_min
        }
    }
    var result = {
        series_title: "<label>" + this.title + "</label>",
        xaxis: x_axis.__getHintCaption(),
        yaxis: y_axis.__getHintCaption(),
        x: x_axis.__getLabel(point.__x()),
        low: point.low,
        high: point.high,
        open: point.open,
        close: point.close,
        label: point.label,
        __defaultHintString: "[series_title]<br/>[xaxis] [x]<br/>Low: [low]<br/>High: [high]<br/>Open: [open]<br/>Close: [close]",
        __center: false
    };
    if (y > y_axis.__current_max) {
        y = y_axis.__current_max
    } else if (y < y_axis.__current_min) {
        y = y_axis.__current_min
    }
    result.__position = {
        x: x_axis.__pt2px(x),
        y: y_axis.__pt2px(y)
    };
    return result
};
___ohlcseries.__doSelectPrevious = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i--;
    if (i < 0 || points[i].__x() < x_axis.__current_min) {
        i = points.length - 1;
        while (points[i].__x() > x_axis.__current_max) i--
    }
    this.__owner.__selectPoint(points[i])
};
___ohlcseries.__doSelectNext = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i++;
    if (i == points.length || points[i].__x() > x_axis.__current_max) {
        i = 0;
        while (points[i].__x() < x_axis.__current_min) i++
    }
    this.__owner.__selectPoint(points[i])
};
___ohlcseries.__free = function() {
    this.__dataHandler.onDataAvailable = null;
    this.__dataHandler.__data = [];
    this.__dataHandler = null;
    this.__points = []
};
___ohlcseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        1);
        return
    } else {
        this.__drawing = true;
        try {
            var points = this.__points;
            var x_axis = this.__getChart()["axis_" + this.x_axis];
            var y_axis = this.__getChart()["axis_" + this.y_axis];
            var x_min = x_axis.__current_min;
            var x_max = x_axis.__current_max;
            var y_min = y_axis.__current_min;
            var y_max = y_axis.__current_max;
            var canvas_width = this.__getDrawArea().width;
            var canvas_height = this.__getDrawArea().height;
            var canvas_top = this.__getDrawArea().top;
            var canvas_left = this.__getDrawArea().left;
            var plotWidth = (this.__interval * this.intervalOffset) / x_axis.__scale;
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = (EJSC.utility.__getColor(this.gain.lineColor, this.gain.lineOpacity / 100)).rgba;
            ctx.beginPath();
            for (var i = 0; i < points.length; i++) {
                if (points[i].open == null || points[i].close == null) continue;
                if (points[i].open > points[i].close) continue;
                var x1 = x_axis.__pt2px(points[i].__x()) - (plotWidth / 2);
                var x2 = x1 + (plotWidth / 2);
                var x3 = x1 + plotWidth;
                var y1 = y_axis.__pt2px(points[i].low);
                var y2 = y_axis.__pt2px(points[i].open);
                var y3 = y_axis.__pt2px(points[i].close);
                var y4 = y_axis.__pt2px(points[i].high);
                if (x1 > canvas_left + canvas_width) continue;
                if (x3 < canvas_left) continue;
                if (y1 < canvas_top) continue;
                if (y4 > canvas_top + canvas_height) continue;
                if (x1 < canvas_left) x1 = canvas_left - this.lineWidth;
                if (x3 > canvas_left + canvas_width) x3 = canvas_left + canvas_width + this.lineWidth;
                if (y1 > canvas_top + canvas_height) y1 = canvas_top + canvas_height + this.lineWidth;
                if (y4 < canvas_top) y4 = canvas_top - this.lineWidth;
                if (x2 >= canvas_left && x2 < canvas_left + canvas_width) {
                    ctx.moveTo(x2, y1);
                    ctx.lineTo(x2, y4)
                }
                ctx.moveTo(x1, y2);
                ctx.lineTo(x2, y2);
                ctx.moveTo(x3, y3);
                ctx.lineTo(x2, y3)
            }
            ctx.closePath();
            ctx.stroke();
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = (EJSC.utility.__getColor(this.loss.lineColor, this.loss.lineOpacity / 100)).rgba;
            ctx.beginPath();
            for (var i = 0; i < points.length; i++) {
                if (points[i].open == null || points[i].close == null) continue;
                if (points[i].open <= points[i].close) continue;
                var x1 = x_axis.__pt2px(points[i].__x()) - (plotWidth / 2);
                var x2 = x1 + (plotWidth / 2);
                var x3 = x1 + plotWidth;
                var y1 = y_axis.__pt2px(points[i].low);
                var y2 = y_axis.__pt2px(points[i].open);
                var y3 = y_axis.__pt2px(points[i].close);
                var y4 = y_axis.__pt2px(points[i].high);
                if (x1 > canvas_left + canvas_width) continue;
                if (x3 < canvas_left) continue;
                if (y1 < canvas_top) continue;
                if (y4 > canvas_top + canvas_height) continue;
                if (x1 < canvas_left) x1 = canvas_left - this.lineWidth;
                if (x3 > canvas_left + canvas_width) x3 = canvas_left + canvas_width + this.lineWidth;
                if (y1 > canvas_top + canvas_height) y1 = canvas_top + canvas_height + this.lineWidth;
                if (y4 < canvas_top) y4 = canvas_top - this.lineWidth;
                if (x2 >= canvas_left && x2 < canvas_left + canvas_width) {
                    ctx.moveTo(x2, y1);
                    ctx.lineTo(x2, y4)
                }
                ctx.moveTo(x1, y2);
                ctx.lineTo(x2, y2);
                ctx.moveTo(x3, y3);
                ctx.lineTo(x2, y3)
            }
            ctx.closePath();
            ctx.stroke();
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = (EJSC.utility.__getColor(this.color, this.opacity / 100)).rgba;
            ctx.beginPath();
            for (var i = 0; i < points.length; i++) {
                if (points[i].open != null && points[i].close != null) continue;
                var x1 = x_axis.__pt2px(points[i].__x()) - (plotWidth / 2);
                var x2 = x1 + (plotWidth / 2);
                var x3 = x1 + plotWidth;
                var y1 = y_axis.__pt2px(points[i].low);
                var y2 = ((points[i].open == null) ? (null) : (y_axis.__pt2px(points[i].open)));
                var y3 = ((points[i].close == null) ? (null) : (y_axis.__pt2px(points[i].close)));
                var y4 = y_axis.__pt2px(points[i].high);
                if (x1 > canvas_left + canvas_width) continue;
                if (x3 < canvas_left) continue;
                if (y1 < canvas_top) continue;
                if (y4 > canvas_top + canvas_height) continue;
                if (x1 < canvas_left) x1 = canvas_left - this.lineWidth;
                if (x3 > canvas_left + canvas_width) x3 = canvas_left + canvas_width + this.lineWidth;
                if (y1 > canvas_top + canvas_height) y1 = canvas_top + canvas_height + this.lineWidth;
                if (y4 < canvas_top) y4 = canvas_top - this.lineWidth;
                if (x2 >= canvas_left && x2 < canvas_left + canvas_width) {
                    ctx.moveTo(x2, y1);
                    ctx.lineTo(x2, y4)
                }
                if (y2 != null) {
                    ctx.moveTo(x1, y2);
                    ctx.lineTo(x2, y2)
                } else if (y3 != null) {
                    ctx.moveTo(x3, y3);
                    ctx.lineTo(x2, y3)
                }
            }
            ctx.closePath();
            ctx.stroke()
        } catch(e) {} finally {
            this.__drawing = false
        }
    }
};
___ohlcseries.__getInterval = function() {
    var result = undefined;
    var points = this.__points;
    var len = this.__points.length;
    var diff;
    var i = 0;
    for (; i < len - 1; i++) {
        diff = (points[i + 1].__x() - points[i].__x());
        if (result == undefined || (result > diff)) {
            if (diff != 0) {
                result = diff
            }
        }
    }
    if (result == undefined) {
        result = 1
    }
    return result
};
___ohlcseries.__doGetLegendIcon = function() {
    return "ohlc"
};
EJSC.ErrorSeries = function(dh, options) {
    EJSC.Series.__extendTo(this);
    this.__doSetDataHandler(dh, false);
    var self = this;
    this.__type = 'error';
    this.__drawing = false;
    this.__hasData = false;
    this.color = 'rgb(0,0,0)';
    this.opacity = 100;
    this.lineWidth = 1;
    this.capSize = 10;
    this.capDist = 5;
    this.avgSize = 3;
    this.orientation = 'vertical';
    this.__padding = {
        x_min: 5,
        x_max: 5,
        y_min: 5,
        y_max: 5
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__interval = undefined;
    this.__barSeriesCount = undefined;
    this.__barSeriesIndex = undefined;
    this.__groupWidth = undefined;
    this.__barWidth = undefined;
    this.__barMinOffset = undefined;
    this.__barMaxOffset = undefined;
    this.__interval_value = undefined;
    this.__copyOptions(options);
    switch (this.orientation) {
    case 'vertical':
        this.__padding.x_min += this.capSize;
        this.__padding.x_max += this.capSize;
        break;
    case 'horizontal':
        this.__padding.y_min += this.capSize;
        this.__padding.y_max += this.capSize;
        break
    }
};
EJSC.Series.__extendTo(EJSC.ErrorSeries);
var ___errorseries = EJSC.ErrorSeries.prototype;
___errorseries.setCapSize = function(capSize) {
    this.capSize = capSize;
    this.__padding = {
        x_min: 5 + (this.orientation == 'vertical' ? capSize: 0),
        x_max: 5 + (this.orientation == 'vertical' ? capSize: 0),
        y_min: 5 + (this.orientation == 'horizontal' ? capSize: 0),
        y_max: 5 + (this.orientation == 'horizontal' ? capSize: 0)
    };
    this.__getChart().__calculateExtremes(true);
    this.__getChart().redraw()
};
___errorseries.setOrientation = function(orientation) {
    this.orientation = orientation;
    this.__padding = {
        x_min: 5 + (this.orientation == 'vertical' ? capSize: 0),
        x_max: 5 + (this.orientation == 'vertical' ? capSize: 0),
        y_min: 5 + (this.orientation == 'horizontal' ? capSize: 0),
        y_max: 5 + (this.orientation == 'horizontal' ? capSize: 0)
    };
    this.__getChart().__calculateExtremes(true);
    this.__getChart().redraw()
};
___errorseries.__doReload = function() {
    this.__points = [];
    this.__hasData = false;
    this.__dataHandler.__loading = false;
    this.__dataHandler.__loaded = false;
    this.__dataHandler.loadData()
};
___errorseries.__doSetDataHandler = function(handler, reload) {
    var self = this;
    this.__points = [];
    this.__dataHandler = handler;
    this.__dataHandler.__init(this, {
        x: null,
        y: null,
        low: null,
        high: null,
        label: null,
        userdata: null
    });
    if (reload) this.__dataHandler.__loadData()
};
___errorseries.__doOnDataAvailable = function(data) {
    if (data.length == 0) {
        this.__hasData = false;
        return
    }
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x_string_values = x_axis.__text_values.__count() > 0 || x_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].x);
    var y_string_values = y_axis.__text_values.__count() > 0 || y_axis.force_static_points || !EJSC.utility.__stringIsNumber(data[0].y);
    for (var i = 0; i < data.length; i++) {
        if (x_string_values) {
            data[i].x = x_axis.__text_values.__add(data[i].x)
        } else {
            data[i].x = parseFloat(data[i].x)
        }
        data[i].low = (data[i].low == null || data[i].low == undefined ? data[i].low: parseFloat(data[i].low));
        data[i].high = (data[i].high == null || data[i].high == undefined ? data[i].high: parseFloat(data[i].high));
        this.__points.push(new EJSC.ErrorPoint(data[i].x, data[i].y, data[i].low, data[i].high, data[i].label, data[i].userdata, this))
    }
    this.__hasData = true
};
___errorseries.__doResetExtremes = function() {
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined
};
___errorseries.__doCalculateExtremes = function() {
    if (this.__drawing || !this.__getHasData()) {
        return
    }
    var points = this.__points;
    for (var i = 0; i < points.length; i++) {
        if (this.orientation == 'vertical') {
            if (points[i].x != null) {
                if (this.__minX == undefined || points[i].__x() < this.__minX) this.__minX = points[i].__x();
                if (this.__maxX == undefined || points[i].__x() > this.__maxX) this.__maxX = points[i].__x()
            }
            if (points[i].y != null) {
                if (this.__minY == undefined || points[i].__y() < this.__minY) this.__minY = points[i].__y();
                if (this.__maxY == undefined || points[i].__y() > this.__maxY) this.__maxY = points[i].__y()
            }
            if (points[i].high != null) if (this.__maxY == undefined || points[i].high > this.__maxY) this.__maxY = points[i].high;
            if (points[i].low != null) if (this.__minY == undefined || points[i].low < this.__minY) this.__minY = points[i].low
        } else {
            if (points[i].x != null) {
                if (this.__minY == undefined || points[i].__x() < this.__minY) this.__minY = points[i].__x();
                if (this.__maxY == undefined || points[i].__x() > this.__maxY) this.__maxY = points[i].__x()
            }
            if (points[i].y != null) {
                if (this.__minX == undefined || points[i].__y() < this.__minX) this.__minX = points[i].__y();
                if (this.__maxX == undefined || points[i].__y() > this.__maxX) this.__maxX = points[i].__y()
            }
            if (points[i].high != null) if (this.__maxX == undefined || points[i].high > this.__maxX) this.__maxX = points[i].high;
            if (points[i].low != null) if (this.__minX == undefined || points[i].low < this.__minX) this.__minX = points[i].low
        }
    }
};
___errorseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX + chart.__draw_area.left);
    var i, minY, maxY;
    for (i = 0; i < this.__points.length; i++) {
        if (this.orientation == 'vertical') {
            if (this.__points[i].x >= minX && this.__points[i].x <= maxX) {
                if (this.__points[i].y != null) {
                    if (minY == undefined || this.__points[i].__y() < minY) minY = this.__points[i].__y();
                    if (maxY == undefined || this.__points[i].__y() > maxY) maxY = this.__points[i].__y()
                }
                if (this.__points[i].high != null) if (maxY == undefined || this.__points[i].high > maxY) maxY = this.__points[i].high;
                if (this.__points[i].low != null) if (minY == undefined || pthis.__oints[i].low < minY) minY = this.__points[i].low
            }
        } else {
            var _maxX = null;
            var _minX = null;
            if (this.__points[i].y != null) {
                if (_maxX == null || this.__points[i].y > _maxX) _maxX = this.__points[i].y;
                if (_minX == null || this.__points[i].y < _minX) _minX = this.__points[i].y
            }
            if (this.__points[i].high != null) {
                if (_maxX == null || this.__points[i].high > _maxX) _maxX = this.__points[i].high;
                if (_minX == null || this.__points[i].high < _minX) _minX = this.__points[i].high
            }
            if (this.__points[i].low != null) {
                if (_maxX == null || this.__points[i].low > _maxX) _maxX = this.__points[i].low;
                if (_minX == null || this.__points[i].low < _minX) _minX = this.__points[i].low
            }
            if (_minX == null || _maxX == null) continue;
            if (_minX <= maxX && _maxX >= minX) {
                if (minY == undefined || minY > this.__points[i].__x()) minY = this.__points[i].__x();
                if (maxY == undefined || maxY < this.__points[i].__x()) maxY = this.__points[i].__x()
            }
        }
    }
    if (minY == undefined || maxY == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxY) - chart.__draw_area.top,
            max: y_axis.__pt2px(minY) - chart.__draw_area.top
        }
    }
};
___errorseries.__doGetXRange = function(screenMinY, screenMaxY) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minY = y_axis.__px2pt(screenMinY + chart.__draw_area.top);
    var maxY = y_axis.__px2pt(screenMaxY + chart.__draw_area.top);
    var i, minX, maxX;
    for (i = 0; i < this.__points.length; i++) {
        if (this.orientation == 'vertical') {
            var _maxY = null;
            var _minY = null;
            if (this.__points[i].y != null) {
                if (_maxY == null || this.__points[i].y > _maxY) _maxY = this.__points[i].y;
                if (_minY == null || this.__points[i].y < _minY) _minY = this.__points[i].y
            }
            if (this.__points[i].high != null) {
                if (_maxY == null || this.__points[i].high > _maxY) _maxY = this.__points[i].high;
                if (_minY == null || this.__points[i].high < _minY) _minY = this.__points[i].high
            }
            if (this.__points[i].low != null) {
                if (_maxY == null || this.__points[i].low > _maxY) _maxY = this.__points[i].low;
                if (_minY == null || this.__points[i].low < _minY) _minY = this.__points[i].low
            }
            if (_minY == null || _maxY == null) continue;
            if (_minY <= maxY && _maxY >= minY) {
                if (minX == undefined || minX > this.__points[i].__x()) minX = this.__points[i].__x();
                if (maxX == undefined || maxX < this.__points[i].__x()) maxX = this.__points[i].__x()
            }
        } else {
            if (this.__points[i].x >= minX && this.__points[i].x <= maxX) {
                if (this.__points[i].y != null) {
                    if (minX == undefined || this.__points[i].__y() < minX) minX = this.__points[i].__y();
                    if (maxX == undefined || this.__points[i].__y() > maxX) maxX = this.__points[i].__y()
                }
                if (this.__points[i].high != null) if (maxX == undefined || this.__points[i].high > maxX) maxX = this.__points[i].high;
                if (this.__points[i].low != null) if (minX == undefined || this.__points[i].low < minX) minX = this.__points[i].low
            }
        }
    }
    if (minX == undefined || maxX == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxX) - chart.__draw_area.left,
            max: y_axis.__pt2px(minX) - chart.__draw_area.left
        }
    }
};
___errorseries.__doPoint2Px = function(point) {
    var pointx, pointy;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    if (this.orientation == "vertical") {
        pointx = point.__x();
        pointy = point.__y() || point.high || point.low
    } else {
        pointx = point.__y() || point.high || point.low;
        pointy = point.__x()
    }
    if (pointx > x_axis.__current_max) {
        pointx = x_axis.__current_max
    } else if (pointx < x_axis.__current_min) {
        pointx = x_axis.__current_min
    }
    if (pointy > y_axis.__current_max) {
        pointy = y_axis.__current_max
    } else if (pointy < y_axis.__current_min) {
        pointy = y_axis.__current_min
    }
    return {
        x: x_axis.__pt2px(pointx),
        y: y_axis.__pt2px(pointy)
    }
};
___errorseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var x = x_axis.__px2pt(mouse.x + chart.__draw_area.left);
    var y = y_axis.__px2pt(mouse.y + chart.__draw_area.top);
    var line_x = (x_axis.__scale * this.lineWidth);
    var line_y = (x_axis.__scale * this.lineWidth);
    var snap_x = (x_axis.__scale * chart.proximity_snap);
    var snap_y = (y_axis.__scale * chart.proximity_snap);
    var x1, x2, x3, x4, y1, y2, y3, y4;
    var distance = EJSC.math.__distance;
    var ret = {
        distance: null,
        point: null
    };
    for (var i = 0; i < this.__points.length; i++) {
        if ((this.__points[i].y === null || this.__points[i].y === undefined) && (this.__points[i].low === null || this.__points[i].low === undefined) && (this.__points[i].hign === null || this.__points[i].hign === undefined)) continue;
        if (this.orientation == 'horizontal') {
            var x_min = null;
            var x_max = null;
            if (this.__points[i].__y() != null && this.__points[i].__y() != undefined) {
                if (x_min == null || this.__points[i].__y() < x_min) x_min = this.__points[i].__y();
                if (x_max == null || this.__points[i].__y() > x_max) x_max = this.__points[i].__y()
            }
            if (this.__points[i].high != null && this.__points[i].high != undefined) {
                if (x_min == null || this.__points[i].high < x_min) x_min = this.__points[i].high;
                if (x_max == null || this.__points[i].high > x_max) x_max = this.__points[i].high
            }
            if (this.__points[i].low != null && this.__points[i].low != undefined) {
                if (x_min == null || this.__points[i].low < x_min) x_min = this.__points[i].low;
                if (x_max == null || this.__points[i].low > x_max) x_max = this.__points[i].low
            }
            y2 = this.__points[i].__x();
            y_min = y2;
            y_max = y2;
            if (this.__points[i].open == null && this.__points[i].close == null) {
                x2 = null;
                x3 = null
            } else if (this.__points[i].open == null || this.__points[i].close == null) {
                x2 = (this.__points[i].open == null) ? this.__points[i].close: this.__points[i].open;
                x3 = (this.__points[i].open == null) ? this.__points[i].close: this.__points[i].open
            } else {
                x2 = (this.__points[i].open > this.__points[i].close) ? this.__points[i].close: this.__points[i].open;
                x3 = (this.__points[i].open <= this.__points[i].close) ? this.__points[i].close: this.__points[i].open
            }
            y_min -= y_axis.__scale * this.capSize;
            y_max += y_axis.__scale * this.capSize;
            if (use_proximity == false || (x >= (x_min - snap_x - line_x) && x <= (x_max + snap_x + line_x) && y >= (y_min - snap_y - line_y) && y <= (y_max + snap_y + line_y))) {
                var dist = distance(mouse.x, mouse.y, x_axis.__pt2px((x_min + x_max) / 2) - chart.__draw_area.left, y_axis.__pt2px(y2) - chart.__draw_area.top);
                if (ret.distance == null || dist < ret.distance) ret = {
                    distance: dist,
                    point: this.__points[i]
                }
            }
        } else if (this.orientation == 'vertical') {
            var y_min = null;
            var y_max = null;
            if (this.__points[i].__y() != null && this.__points[i].__y() != undefined) {
                if (y_min == null || this.__points[i].__y() < y_min) y_min = this.__points[i].__y();
                if (y_max == null || this.__points[i].__y() > y_max) y_max = this.__points[i].__y()
            }
            if (this.__points[i].high != null && this.__points[i].high != undefined) {
                if (y_min == null || this.__points[i].high < y_min) y_min = this.__points[i].high;
                if (y_max == null || this.__points[i].high > y_max) y_max = this.__points[i].high
            }
            if (this.__points[i].low != null && this.__points[i].low != undefined) {
                if (y_min == null || this.__points[i].low < y_min) y_min = this.__points[i].low;
                if (y_max == null || this.__points[i].low > y_max) y_max = this.__points[i].low
            }
            x2 = this.__points[i].__x();
            x_min = x2;
            x_max = x2;
            if (this.__points[i].open == null && this.__points[i].close == null) {
                y2 = null;
                y3 = null
            } else if (this.__points[i].open == null || this.__points[i].close == null) {
                y2 = (this.__points[i].open == null) ? this.__points[i].close: this.__points[i].open;
                y3 = (this.__points[i].open == null) ? this.__points[i].close: this.__points[i].open
            } else {
                y2 = (this.__points[i].open > this.__points[i].close) ? this.__points[i].close: this.__points[i].open;
                y3 = (this.__points[i].open <= this.__points[i].close) ? this.__points[i].close: this.__points[i].open
            }
            x_min -= x_axis.__scale * this.capSize;
            x_max += x_axis.__scale * this.capSize;
            if (use_proximity == false || (x >= (x_min - snap_x - line_x) && x <= (x_max + snap_x + line_x) && y >= (y_min - snap_y - line_y) && y <= (y_max + snap_y + line_y))) {
                var dist = distance(mouse.x, mouse.y, x_axis.__pt2px(x2) - chart.__draw_area.left, y_axis.__pt2px((y_min + y_max) / 2) - chart.__draw_area.top);
                if (ret.distance == null || dist < ret.distance) ret = {
                    distance: dist,
                    point: this.__points[i]
                }
            }
        }
    }
    if (ret.point == null) return undefined;
    else return ret
};
___errorseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x = point.__x();
    if (point.__y() != null && point.__y() != undefined) {
        var y = point.__y()
    } else if (point.low !== null && point.low !== undefined && point.high !== null && point.high !== undefined) {
        var y = ((point.low + point.high) / 2)
    } else if (point.low !== null && point.low !== undefined) {
        var y = point.low
    } else if (point.high !== null && point.high !== undefined) {
        var y = point.high
    } else {
        return false
    }
    var result = {
        series_title: "<label>" + this.title + "</label>",
        xaxis: x_axis.__getHintCaption(),
        yaxis: y_axis.__getHintCaption(),
        x: x_axis.__getLabel(point.__x(), undefined, this.x_axis_formatter),
        y: y_axis.__getLabel(point.__y(), undefined, this.y_axis_formatter),
        low: y_axis.__getLabel(point.low, undefined, this.y_axis_formatter),
        high: y_axis.__getLabel(point.high, undefined, this.y_axis_formatter),
        label: point.label,
        __defaultHintString: "[series_title]<br/>[xaxis] [x]<br/>Average: [y]<br/>Low: [low]<br/>High: [high]",
        __center: false
    };
    if (this.orientation == 'horizontal') {
        var c = y;
        y = x;
        x = c
    }
    if (x > x_axis.__current_max) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_max
        }
    } else if (x < x_axis.__current_min) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_min
        }
    }
    if (y > y_axis.__current_max) {
        y = y_axis.__current_max
    } else if (y < y_axis.__current_min) {
        y = y_axis.__current_min
    }
    result.__position = {
        x: x_axis.__pt2px(x),
        y: y_axis.__pt2px(y)
    };
    return result
};
___errorseries.__doSelectPrevious = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i--;
    if (i < 0 || points[i].__x() < x_axis.__current_min) {
        i = points.length - 1;
        while (points[i].__x() > x_axis.__current_max) i--
    }
    if ((points[i].y === null || points[i].y === undefined) && (points[i].low === null || points[i].low === undefined) && (points[i].high === null || points[i].high === undefined)) {
        return this.__doSelectPrevious(points[i])
    }
    this.__owner.__selectPoint(points[i])
};
___errorseries.__doSelectNext = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i++;
    if (i == points.length || points[i].__x() > x_axis.__current_max) {
        i = 0;
        while (points[i].__x() < x_axis.__current_min) i++
    }
    if ((points[i].y === null || points[i].y === undefined) && (points[i].low === null || points[i].low === undefined) && (points[i].high === null || points[i].high === undefined)) {
        return this.__doSelectNext(points[i])
    }
    this.__owner.__selectPoint(points[i])
};
___errorseries.__free = function() {
    this.__dataHandler.onDataAvailable = null;
    this.__dataHandler.__data = [];
    this.__dataHandler = null;
    this.__points = []
};
___errorseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        1);
        return
    } else {
        this.__drawing = true;
        try {
            var points = this.__points;
            var x_axis = this.__getChart()["axis_" + this.x_axis];
            var y_axis = this.__getChart()["axis_" + this.y_axis];
            var x_min = x_axis.__current_min;
            var x_max = x_axis.__current_max;
            var y_min = y_axis.__current_min;
            var y_max = y_axis.__current_max;
            var canvas_width = this.__getDrawArea().width;
            var canvas_height = this.__getDrawArea().height;
            var canvas_top = this.__getDrawArea().top;
            var canvas_left = this.__getDrawArea().left;
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = (EJSC.utility.__getColor(this.color, this.opacity / 100)).rgba;
            ctx.beginPath();
            for (var i = 0; i < points.length; i++) {
                if (this.orientation == 'vertical') {
                    var x = x_axis.__pt2px(points[i].__x());
                    var y = undefined;
                    if (points[i].__y() == null || points[i].__y() == undefined) {} else {
                        var y = y_axis.__pt2px(points[i].__y());
                        var x1 = x - this.avgSize;
                        var x2 = x + this.avgSize;
                        var y1 = y - this.avgSize;
                        var y2 = y + this.avgSize;
                        ctx.moveTo(x, y1);
                        ctx.lineTo(x1, y);
                        ctx.lineTo(x, y2);
                        ctx.lineTo(x2, y);
                        ctx.lineTo(x, y1)
                    }
                    if (points[i].high == undefined || points[i].high == null) {} else {
                        var y1 = y_axis.__pt2px(points[i].high);
                        var y2 = (y == undefined ? y1 + this.capDist: y - this.avgSize);
                        var x1 = x - (this.capSize == 'auto' ? (0 - this.__barOffsetMin / x_axis.__scale) : this.capSize);
                        var x2 = x + (this.capSize == 'auto' ? this.__barOffsetMax / x_axis.__scale: this.capSize);
                        ctx.moveTo(x, y1);
                        ctx.lineTo(x, y2);
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y1)
                    }
                    if (points[i].low == undefined || points[i].low == null) {} else {
                        var y1 = y_axis.__pt2px(points[i].low);
                        var y2 = (y == undefined ? y1 - this.capDist: y + this.avgSize);
                        var x1 = x - (this.capSize == 'auto' ? 0 - (this.__barOffsetMin / x_axis.__scale) : this.capSize);
                        var x2 = x + (this.capSize == 'auto' ? this.__barOffsetMax / x_axis.__scale: this.capSize);
                        ctx.moveTo(x, y1);
                        ctx.lineTo(x, y2);
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y1)
                    }
                } else {
                    var x = y_axis.__pt2px(points[i].__x());
                    if (points[i].__y() == null || points[i].__y() == undefined) {} else {
                        var y = x_axis.__pt2px(points[i].__y());
                        var x1 = x - this.avgSize;
                        var x2 = x + this.avgSize;
                        var y1 = y - this.avgSize;
                        var y2 = y + this.avgSize;
                        ctx.moveTo(y1, x);
                        ctx.lineTo(y, x1);
                        ctx.lineTo(y2, x);
                        ctx.lineTo(y, x2);
                        ctx.lineTo(y1, x)
                    }
                    if (points[i].high == undefined || points[i].high == null) {} else {
                        var y1 = x_axis.__pt2px(points[i].high);
                        var y2 = (y == undefined ? y1 - this.capDist: y + this.avgSize);
                        var x1 = x - (this.capSize == 'auto' ? (0 - this.__barOffsetMin / y_axis.__scale) : this.capSize);
                        var x2 = x + (this.capSize == 'auto' ? this.__barOffsetMax / y_axis.__scale: this.capSize);
                        ctx.moveTo(y1, x);
                        ctx.lineTo(y2, x);
                        ctx.moveTo(y1, x1);
                        ctx.lineTo(y1, x2)
                    }
                    if (points[i].low == undefined || points[i].low == null) {} else {
                        var y1 = x_axis.__pt2px(points[i].low);
                        var y2 = (y == undefined ? y1 + this.capDist: y - this.avgSize);
                        var x1 = x - (this.capSize == 'auto' ? 0 - (this.__barOffsetMin / y_axis.__scale) : this.capSize);
                        var x2 = x + (this.capSize == 'auto' ? this.__barOffsetMax / y_axis.__scale: this.capSize);
                        ctx.moveTo(y1, x);
                        ctx.lineTo(y2, x);
                        ctx.moveTo(y1, x1);
                        ctx.lineTo(y1, x2)
                    }
                }
            }
            ctx.closePath();
            ctx.stroke()
        } catch(e) {} finally {
            this.__drawing = false
        }
    }
};
___errorseries.__doGetLegendIcon = function() {
    return "error"
};
EJSC.DoughnutSeries = EJSC.DonutSeries = function(dh, options) {
    this.__legendCreateInherited = this.__legendCreate;
    this.__legendCreate = this.__legendCreateNew;
    this.__doSetDataHandler(dh, false);
    this.__points = [];
    this.__availColors = [];
    this.__selected_piece = undefined;
    this.__total_value = 1;
    this.total_value = undefined;
    this.__needsXAxis = false;
    this.__needsYAxis = false;
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.defaultColors = EJSC.DefaultPieColors.slice();
    this.__padding = {
        x_min: 0,
        x_max: 0,
        y_min: 0,
        y_max: 0
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__type = 'doughnut';
    this.__defaultHintString = "[series_title]<br/>[x] of [total] ([percent]%)";
    this.opacity = 50;
    this.lineOpacity = 100;
    this.treeLegend = true;
    this.coloredLegend = false;
    this.doughnutOffset = .5;
    this.position = "center";
    this.height = "100%";
    this.width = "100%";
    this.__copyOptions(options)
};
EJSC.PieSeries.prototype.__extendTo(EJSC.DoughnutSeries);
var ___doughnutseries = EJSC.DoughnutSeries.prototype;
___doughnutseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    if (!this.__getHasData()) {
        var dh = this.__dataHandler;
        window.setTimeout(function() {
            dh.__loadData()
        },
        1);
        return
    }
    this.__drawing = true;
    try {
        var c = EJSC.utility.__getColor(this.color);
        ctx.strokeStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.lineOpacity / 100) + ")";
        ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.opacity / 100) + ")";
        var totalVal = (this.total_value != undefined) ? this.total_value: this.__total_value;
        var o_start = 0;
        var o_end = 0;
        var o_perc = 1;
        var i;
        var canvas_width = this.__getDrawArea().width;
        var canvas_height = this.__getDrawArea().height;
        var plen = this.__points.length;
        var ps = this.pointSize;
        var diameter = this.__getPhysicalDiameter();
        var center = this.__getPhysicalCenter();
        var radius = m_FLOOR(diameter / 2);
        ctx.strokeStyle = 'rgb(255,255,255)';
        var pieceX = center.x;
        var pieceY = center.y;
        var offsetX = 0;
        var offsetY = 0;
        for (i = 0; i < plen; i++) {
            c = EJSC.utility.__getColor(this.__points[i].__color);
            ctx.fillStyle = "rgba(" + c.red + "," + c.green + "," + c.blue + "," + (this.opacity / 100) + ")";
            o_start = o_end;
            o_end += ((m_PIx2 * (this.__points[i].__x() / totalVal)) * o_perc);
            if (this.__selected_piece != undefined && i == this.__selected_piece) {
                ctx.strokeStyle = 'rgba(0,0,0,' + (this.lineOpacity / 100) + ')';
                ctx.lineWidth = this.lineWidth;
                var drawDistance = radius * .1;
                var drawAngle = ((o_end + o_start) / 2);
                offsetY = (drawDistance * m_COS(drawAngle));
                offsetX = (drawDistance * m_SIN(drawAngle));
                offsetX2 = (drawDistance * this.doughnutOffset * m_COS(drawAngle));
                offsetY2 = (drawDistance * this.doughnutOffset * m_SIN(drawAngle))
            } else {
                ctx.strokeStyle = 'rgba(255,255,255,' + (this.lineOpacity / 100) + ')';
                ctx.lineWidth = 1;
                offsetX = 0;
                offsetY = 0;
                offsetX2 = radius * this.doughnutOffset;
                offsetY2 = radius * this.doughnutOffset
            }
            ctx.beginPath();
            if (totalVal > 0 && this.__points[i].__x() == totalVal) {
                ctx.moveTo(pieceX + radius, pieceY);
                ctx.arc(pieceX, pieceY, radius, 0, m_PIx2, true);
                ctx.moveTo(pieceX + radius * this.doughnutOffset, pieceY);
                ctx.arc(pieceX, pieceY, radius * this.doughnutOffset, m_PIx2, 0, false);
                ctx.moveTo(pieceX + radius, pieceY)
            } else if (this.__points[i].__x() > 0) {
                ctx.moveTo(pieceX + offsetX + (radius * m_SIN(o_start)), pieceY - offsetY - (radius * m_COS(o_start)));
                ctx.arc(pieceX + offsetX, pieceY - offsetY, radius, o_start - m_PId2, o_end - m_PId2, false);
                ctx.lineTo(pieceX + offsetX + (radius * this.doughnutOffset * m_SIN(o_end)), pieceY - offsetY - (radius * this.donutOffset * m_COS(o_end)));
                ctx.arc(pieceX + offsetX, pieceY - offsetY, radius * this.doughnutOffset, o_end - m_PId2, o_start - m_PId2, true);
                ctx.lineTo(pieceX + offsetX + (radius * m_SIN(o_start)), pieceY - offsetY - (radius * m_COS(o_start)))
            }
            if (EJSC.__isIE) {
                var save_path = ctx.currentPath_;
                ctx.fill();
                ctx.currentPath_ = save_path;
                ctx.stroke()
            } else {
                ctx.fill();
                ctx.stroke()
            }
        }
    } catch(e) {} finally {
        this.__drawing = false
    }
};
___doughnutseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var points = this.__points;
    var diameter = this.__getPhysicalDiameter();
    var center = this.__getPhysicalCenter();
    var radius = m_FLOOR(diameter / 2);
    var xCenter = center.x - chart.__draw_area.left;
    var yCenter = center.y - chart.__draw_area.top;
    var dist = EJSC.math.__distance(xCenter, yCenter, mouse.x, mouse.y);
    if ((dist > radius || dist < radius * this.doughnutOffset) && use_proximity) {
        return null
    } else {
        var ang = m_ATAN((mouse.y - yCenter) / (mouse.x - xCenter)) + m_PId2;
        if (mouse.x < xCenter) {
            ang = ang + m_PI
        }
        var perc = (ang / (m_PIx2));
        var i = 0;
        var tot = (this.total_value != undefined) ? this.total_value: this.__total_value;
        var cur = 0;
        while (i < points.length && (cur / tot) < perc) {
            cur += points[i].__x();
            i++
        }--i;
        if (ang == 0) i = 0;
        var pointCenter = this.findCenter(points[i]);
        return {
            distance: EJSC.math.__distance(pointCenter.x, pointCenter.y, mouse.x, mouse.y),
            point: points[i]
        }
    }
    return undefined
};
___doughnutseries.__doSelectPoint = function(point, sticky) {
    var totalVal = (this.total_value != undefined) ? this.total_value: this.__total_value;
    var result = {
        series_title: "<label>" + this.title + "</label>",
        x: point.x,
        label: point.label,
        total: totalVal,
        percent: m_ROUND((point.x / totalVal) * 100),
        __defaultHintString: this.__getHintString(point),
        __center: true
    };
    var points = this.__points;
    var minAngle = 0;
    var maxAngle = 0;
    var o_perc = 1;
    var i = 0;
    while (i < points.length && points[i] != point) {
        minAngle += (((m_PIx2) * (points[i].__x() / totalVal)) * o_perc);
        i++
    }
    maxAngle = minAngle + (((m_PIx2) * (points[i].__x() / totalVal)) * o_perc);
    this.__selected_piece = i;
    var diameter = this.__getPhysicalDiameter();
    var center = this.__getPhysicalCenter();
    var radius = m_FLOOR(diameter / 2);
    var drawAngle = ((maxAngle + minAngle) / 2);
    var drawDistance = radius * ((1 + this.doughnutOffset) / 2);
    result.__position = {
        x: (drawDistance * m_SIN(drawAngle)) + center.x,
        y: center.y - (drawDistance * m_COS(drawAngle))
    };
    if (sticky) {
        this.__getChart().__draw(false)
    }
    return result
};
EJSC.AlarmSeries = function(value, options) {
    this.value = value;
    this.axis = 'left';
    this.fill = undefined;
    this.fillTo = undefined;
    this.flag = {
        visible: false,
        axes: 'opposite',
        offset: 0,
        opacity: 100,
        fontColor: '#fff'
    };
    this.__drawing = false;
    this.__lineStyle = 'solid';
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: 20,
        y_axis_max: 20
    };
    this.__padding = {
        x_min: 0,
        x_max: 0,
        y_min: 20,
        y_max: 20
    };
    this.__type = 'alarm';
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.__hasData = true;
    this.__points = [];
    this.__canSelectPoints = false;
    this.__copyOptions(options);
    this.__minX = (this.axis == 'left' || this.axis == 'right' ? undefined: value);
    this.__maxX = (this.axis == 'left' || this.axis == 'right' ? undefined: value);
    this.__minY = (this.axis == 'left' || this.axis == 'right' ? value: undefined);
    this.__maxY = (this.axis == 'left' || this.axis == 'right' ? value: undefined)
};
EJSC.Series.__extendTo(EJSC.AlarmSeries);
var ___alarmseries = EJSC.AlarmSeries.prototype;
___alarmseries.__getHasData = function() {
    return true
};
___alarmseries.__calculateExtremes = function() {
    this.__points = [{
        x: null,
        y: this.value
    }];
    if (this.fillTo !== undefined) this.__points.push({
        x: null,
        y: this.fillTo
    })
};
___alarmseries.__doDraw = function(ctx) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var canDraw = true;
    if (isNaN(x_axis.__scale)) {
        x_axis.__calculateExtremes();
        canDraw = false
    }
    if (isNaN(y_axis.__scale)) {
        y_axis.__calculateExtremes();
        canDraw = false
    }
    if (!canDraw) {
        var ref = this;
        window.setTimeout(function() {
            ref.__getChart().__calculateExtremes(true)
        },
        0);
        return
    }
    this.__doDrawPlot(ctx)
};
___alarmseries.__changeVisibility = function() {
    if (this.__doBeforeVisibilityChange && !this.__doBeforeVisibilityChange()) {
        return
    }
    if (this.onBeforeVisibilityChange && this.onBeforeVisibilityChange(this, this.__getChart()) == false) {
        return
    }
    if (this.__legend_visible.className == "ejsc-legend-series-on") {
        this.__legend_visible.className = "ejsc-legend-series-off";
        this.visible = false
    } else {
        this.__legend_visible.className = "ejsc-legend-series-on";
        this.visible = true;
        if (!this.__getHasData()) this.reload()
    }
    if (this.__el_alarmlabel !== undefined) this.__el_alarmlabel.style.display = this.visible ? 'block': 'none';
    if (this.__doAfterVisibilityChange) {
        this.__doAfterVisibilityChange()
    }
    if (this.onAfterVisibilityChange && this.onAfterVisibilityChange(this, this.__getChart(), this.visible) == false) {
        return
    }
    this.__getChart().__draw(true)
};
___alarmseries.__doDrawPlot = function(ctx) {
    var chart = this.__getChart();
    if (chart["axis_" + this.axis].__current_min == undefined) {
        chart.__calculateExtremes();
        chart.__draw(true)
    }
    if (this.__drawing) return;
    if (!this.visible) return;
    if (ctx == undefined) return;
    this.__drawing = true;
    try {
        ctx.lineWidth = this.lineWidth;
        ctx.dashStyle = this.__lineStyle;
        ctx.fillStyle = EJSC.utility.__getColor(this.color, this.opacity / 100).rgba;
        var axis = chart["axis_" + this.axis];
        var draw_area = chart.__draw_area;
        if (this.fill !== undefined) {
            ctx.beginPath();
            ctx.fillStyle = EJSC.utility.__getColor(this.color, this.opacity / 100).rgba;
            if (axis.__orientation == 'v') {
                ctx.moveTo(draw_area.left, axis.__pt2px(this.value));
                ctx.lineTo(draw_area.right, axis.__pt2px(this.value));
                ctx.lineTo(draw_area.right, axis.__pt2px(this.fillTo));
                ctx.lineTo(draw_area.left, axis.__pt2px(this.fillTo));
                ctx.moveTo(draw_area.left, axis.__pt2px(this.value))
            } else if (axis.__orientation == 'h') {
                ctx.moveTo(axis.__pt2px(this.value), draw_area.top);
                ctx.lineTo(axis.__pt2px(this.value), draw_area.bottom);
                ctx.lineTo(axis.__pt2px(this.fillTo), draw_area.bottom);
                ctx.lineTo(axis.__pt2px(this.fillTo), draw_area.top);
                ctx.moveTo(axis.__pt2px(this.value), draw_area.top)
            }
            ctx.fill()
        }
        if (this.value > axis.__current_max || this.value < axis.__current_min) return;
        ctx.beginPath();
        ctx.strokeStyle = EJSC.utility.__getColor(this.color, this.lineOpacity / 100).rgba;
        if (axis.__orientation == 'v') {
            ctx.moveTo(draw_area.left, axis.__pt2px(this.value));
            ctx.lineTo(draw_area.right, axis.__pt2px(this.value))
        } else if (axis.__orientation == 'h') {
            ctx.moveTo(axis.__pt2px(this.value), draw_area.top);
            ctx.lineTo(axis.__pt2px(this.value), draw_area.bottom)
        }
        ctx.stroke();
        if (this.flag.visible) {
            ctx = this.__getChart().__el_axes_canvas_container.firstChild.getContext('2d');
            ctx.lineWidth = this.lineWidth;
            ctx.dashStyle = this.__lineStyle;
            ctx.strokeStyle = EJSC.utility.__getColor(this.color, this.lineOpacity / 100).rgba;
            ctx.fillStyle = EJSC.utility.__getColor(this.color, this.flag.opacity / 100).rgba;
            var x, y, a, dx, dy, dw, tx, ty, ta, tw;
            a = this.flag.axis == 'same' ? (axis.__side) : (axis.__orientation == 'h' ? (axis.__side == 'top' ? 'bottom': 'top') : (axis.__side == 'left' ? 'right': 'left'));
            var s = document.createElement('SPAN');
            s.innerHTML = this.value;
            s.style.fontFamily = 'Verdana';
            s.style.fontSize = '11px';
            s.style.fontWeight = 'normal';
            document.body.appendChild(s);
            tw = s.offsetWidth + 10;
            document.body.removeChild(s);
            switch (a) {
            case 'left':
                x = draw_area.left;
                y = Math.floor(axis.__pt2px(this.value));
                dx = -10;
                dy = this.flag.offset;
                dw = -tw;
                tx = x + dx - tw - 5;
                ty = y + dy - 7;
                ta = 'right';
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + dx, y + dy);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + dx, y + dy);
                ctx.lineTo(x + dx, y + dy + 8);
                ctx.lineTo(x + dx + dw, y + dy + 8);
                ctx.lineTo(x + dx + dw, y + dy - 8);
                ctx.lineTo(x + dx, y + dy - 8);
                ctx.lineTo(x + dx, y + dy);
                ctx.fill();
                ctx.fontFamily = 'Verdana';
                ctx.fontSize = '11px';
                ctx.fillStyle = this.flag.fontColor;
                ctx.fontWeight = 'normal';
                ctx.drawText(tx, ty, tx + tw, ty, this.value, ta, 'baseline-shift:-1em;');
                break;
            case 'right':
                x = draw_area.right;
                y = Math.floor(axis.__pt2px(this.value));
                dx = 10;
                dy = this.flag.offset;
                dw = tw;
                tx = x + dx + 5;
                ty = y + dy - 7;
                ta = 'left';
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + dx, y + dy);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + dx, y + dy);
                ctx.lineTo(x + dx, y + dy + 8);
                ctx.lineTo(x + dx + dw, y + dy + 8);
                ctx.lineTo(x + dx + dw, y + dy - 8);
                ctx.lineTo(x + dx, y + dy - 8);
                ctx.lineTo(x + dx, y + dy);
                ctx.fill();
                ctx.fontFamily = 'Verdana';
                ctx.fontSize = '11px';
                ctx.fillStyle = this.flag.fontColor;
                ctx.fontWeight = 'normal';
                ctx.drawText(tx, ty, tx + tw, ty, this.value, ta, 'baseline-shift:-1em;');
                break;
            case 'top':
                x = Math.floor(axis.__pt2px(this.value));
                y = draw_area.top;
                dx = this.flag.offset;
                dy = -17;
                dw = tw;
                tx = x + dx + 5;
                ty = y + dy - 15;
                ta = 'middle';
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + dx, y + dy);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + dx - dw / 2, y + dy);
                ctx.lineTo(x + dx - dw / 2, y + dy - 16);
                ctx.lineTo(x + dx + dw / 2, y + dy - 16);
                ctx.lineTo(x + dx + dw / 2, y + dy - 0);
                ctx.lineTo(x + dx - dw / 2, y + dy - 0);
                ctx.lineTo(x + dx - dw / 2, y + dy);
                ctx.fill();
                ctx.fontFamily = 'Verdana';
                ctx.fontSize = '11px';
                ctx.fillStyle = this.flag.fontColor;
                ctx.fontWeight = 'normal';
                ctx.drawText(tx - tw / 2, ty, tx + tw / 2, ty, this.value, ta, 'baseline-shift:-1em;');
                break;
            case 'bottom':
                x = Math.floor(axis.__pt2px(this.value));
                y = draw_area.bottom;
                dx = this.flag.offset;
                dy = 17;
                dw = tw;
                tx = x + dx + 5;
                ty = y + dy + 1;
                ta = 'middle';
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + dx, y + dy);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + dx - dw / 2, y + dy);
                ctx.lineTo(x + dx - dw / 2, y + dy + 16);
                ctx.lineTo(x + dx + dw / 2, y + dy + 16);
                ctx.lineTo(x + dx + dw / 2, y + dy - 0);
                ctx.lineTo(x + dx - dw / 2, y + dy - 0);
                ctx.lineTo(x + dx - dw / 2, y + dy);
                ctx.fill();
                ctx.fontFamily = 'Verdana';
                ctx.fontSize = '11px';
                ctx.fillStyle = this.flag.fontColor;
                ctx.fontWeight = 'normal';
                ctx.drawText(tx - tw / 2, ty, tx + tw / 2, ty, this.value, ta, 'baseline-shift:-1em;');
                break
            }
        }
    } catch(e) {} finally {
        this.__drawing = false
    }
};
EJSC.OverUnderSeries = function(baseSeries, compareSeries, options) {
    var self = this;
    this.baseSeries = baseSeries;
    this.compareSeries = compareSeries;
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.exceed = {
        visible: true,
        color: '#00ff00',
        opacity: 20
    };
    this.subsede = {
        visible: true,
        color: '#ff0000',
        opacity: 20
    };
    this.showOuterArea = false;
    this.__canSelectPoints = true;
    this.__drawpoints = [];
    this.__points = [];
    this.__drawing = false;
    this.__type = "overunder";
    this.__defaultHintString = "[series_title]<br/>Cross Point<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.__copyOptions(options);
    this.__padding = {
        x_min: (this.y_axis == "left" ? 0 : 5),
        x_max: (this.y_axis == "left" ? 5 : 0),
        y_min: (this.x_axis == "top" ? 0 : 5),
        y_max: (this.x_axis == "top" ? 5 : 0)
    }
};
EJSC.Series.__extendTo(EJSC.OverUnderSeries);
var ___overunderseries = EJSC.OverUnderSeries.prototype;
___overunderseries.__getHasData = function() {
    if (this.baseSeries == undefined) return false;
    if (this.compareSeries == undefined) return false;
    return this.baseSeries.__getHasData() && this.compareSeries.__getHasData()
};
___overunderseries.__doGetLegendIcon = function() {
    return "overunder"
};
___overunderseries.__doFindClosestPoint = function(mouse, use_proximity) {
    var chart = this.__getChart();
    var points = this.__points;
    var pointsLen = points.length;
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    if (chart == null || points == null || pointsLen == 0) {
        return null
    }
    var distance = EJSC.math.__distance;
    var i;
    var currentDistance = null;
    var result = null;
    var tempDistance;
    var pointX, pointY;
    var x = x_axis.__px2pt(mouse.x + chart.__draw_area.left);
    var y = y_axis.__px2pt(mouse.y + chart.__draw_area.top);
    var x_min, x_max, y_min, y_max;
    if (use_proximity) {
        x_min = x_axis.__px2pt(mouse.x + chart.__draw_area.left - (chart.proximity_snap));
        x_max = x_axis.__px2pt(mouse.x + chart.__draw_area.left + (chart.proximity_snap));
        y_min = chart.auto_find_point_by_x ? y_axis.__min: y_axis.__px2pt(mouse.y + chart.__draw_area.top + (chart.proximity_snap));
        y_max = chart.auto_find_point_by_x ? y_axis.__max: y_axis.__px2pt(mouse.y + chart.__draw_area.top - (chart.proximity_snap));
        if (x_min < x_axis.__current_min) {
            x_min = x_axis.__current_min
        }
        if (x_max > x_axis.__current_max) {
            x_max = x_axis.__current_max
        }
        if (y_min < y_axis.__current_min) {
            y_min = y_axis.__current_min
        }
        if (y_max > y_axis.__current_max) {
            y_max = y_axis.__current_max
        }
    } else {
        x_min = x_axis.__current_min;
        x_max = x_axis.__current_max;
        y_min = y_axis.__current_min;
        y_max = y_axis.__current_max
    }
    for (i = 0; i < pointsLen; i++) {
        pointX = points[i].__x();
        pointY = points[i].__y();
        if (pointX < x_min || pointY < y_min || pointY > y_max) {
            continue
        }
        if (pointX > x_max) {
            break
        }
        tempDistance = distance(mouse.x, mouse.y, x_axis.__pt2px(pointX), y_axis.__pt2px(pointY));
        if (currentDistance == null || tempDistance < currentDistance) {
            currentDistance = tempDistance;
            result = {
                distance: currentDistance,
                point: points[i]
            }
        }
    }
    return result
};
___overunderseries.__doSelectPoint = function(point, sticky) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var x = point.__x();
    var y = point.__y();
    if (x > x_axis.__current_max) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_max
        }
    } else if (x < x_axis.__current_min) {
        if (!sticky) {
            return null
        } else {
            x = x_axis.__current_min
        }
    }
    var result = {
        series_title: "<label>" + this.title + "</label>",
        xaxis: x_axis.__getHintCaption(),
        yaxis: y_axis.__getHintCaption(),
        x: x_axis.__getLabel(point.__x(), undefined, this.x_axis_formatter),
        y: y_axis.__getLabel(point.__y(), undefined, this.y_axis_formatter),
        label: point.label,
        __defaultHintString: this.__getHintString(point),
        __center: false
    };
    if (y > y_axis.__current_max) {
        y = y_axis.__current_max
    } else if (y < y_axis.__current_min) {
        y = y_axis.__current_min
    }
    result.__position = {
        x: x_axis.__pt2px(x),
        y: y_axis.__pt2px(y)
    };
    return result
};
___overunderseries.__doSelectPrevious = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i--;
    if (i < 0 || points[i].__x() < x_axis.__current_min) {
        i = points.length - 1;
        while (points[i].__x() > x_axis.__current_max) i--
    }
    this.__owner.__selectPoint(points[i])
};
___overunderseries.__doSelectNext = function(point) {
    var i;
    var points = this.__points;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    for (i = 0; i < points.length; i++) {
        if (points[i] == point) break
    }
    i++;
    if (i >= points.length || points[i].__x() > x_axis.__current_max) {
        i = 0;
        while (points[i].__x() < x_axis.__current_min) i++
    }
    this.__owner.__selectPoint(points[i])
};
___overunderseries.__doPoint2Px = function(point) {
    return {
        x: this.__getChart()["axis_" + this.x_axis].__pt2px(point.__x()),
        y: this.__getChart()["axis_" + this.y_axis].__pt2px(point.__y())
    }
};
___overunderseries.__doFindClosestByPoint = function(point) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    if (x_axis.__text_values.__count() > 0) {
        point.x = x_axis.__text_values.__find(point.x).__index
    }
    if (y_axis.__text_values.__count() > 0) {
        point.y = y_axis.__text_values.__find(point.y).__index
    }
    return this.__findClosestPoint({
        x: x_axis.__pt2px(point.x),
        y: y_axis.__pt2px(point.y)
    },
    false)
};
___overunderseries.__doFindClosestByPixel = function(point) {
    var point = this.__findClosestPoint({
        x: point.x,
        y: point.y
    },
    false)
};
___overunderseries.__doGetYRange = function(screenMinX, screenMaxX) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minX = x_axis.__px2pt(screenMinX + chart.__draw_area.left);
    var maxX = x_axis.__px2pt(screenMaxX);
    var i, minY, maxY;
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].__x() >= minX && this.__points[i].__x() <= maxX) {
            if (minY == undefined || minY > this.__points[i].__y()) minY = this.__points[i].__y();
            if (maxY == undefined || maxY < this.__points[i].__y()) maxY = this.__points[i].__y()
        }
    }
    if (minY == undefined || maxY == undefined) {
        return null
    } else {
        return {
            min: y_axis.__pt2px(maxY) - chart.__draw_area.top,
            max: y_axis.__pt2px(minY)
        }
    }
};
___overunderseries.__doGetXRange = function(screenMinY, screenMaxY) {
    var chart = this.__getChart();
    var x_axis = chart["axis_" + this.x_axis];
    var y_axis = chart["axis_" + this.y_axis];
    var minY = y_axis.__px2pt(screenMinY + chart.__draw_area.top);
    var maxY = y_axis.__px2pt(screenMaxY + chart.__draw_area.top);
    var i, minX, maxX;
    for (i = 0; i < this.__points.length; i++) {
        if (this.__points[i].__y() >= minY && this.__points[i].__y() <= maxY) {
            if (minX == undefined || minX > this.__points[i].__x()) minX = this.__points[i].__x();
            if (maxX == undefined || maxX < this.__points[i].__x()) maxX = this.__points[i].__x()
        }
    }
    if (minX == undefined || maxX == undefined) {
        return null
    } else {
        return {
            min: x_axis.__pt2px(minX) - chart.__draw_area.left,
            max: x_axis.__pt2px(maxX) - chart.__draw_area.left
        }
    }
};
___overunderseries.__build = function() {
    var a1 = this.compareSeries.__points;
    var a2 = this.baseSeries.__points;
    this.__points = [];
    function xy_cross(p1, p2, p3, p4) {
        var m1 = ((p2[1] - p1[1]) / (p2[0] - p1[0]));
        var y1 = (((p2[1] - p1[1]) / (p2[0] - p1[0])) * (0 - p1[0])) + p1[1];
        var m2 = ((p4[1] - p3[1]) / (p4[0] - p3[0]));
        var y2 = (((p4[1] - p3[1]) / (p4[0] - p3[0])) * (0 - p3[0])) + p3[1];
        var x = (y2 - y1) / (m1 - m2);
        var y = ((m1 * x) + y1);
        return [x, y]
    };
    function y_cross(p1, p2, x) {
        return (((p2[1] - p1[1]) / (p2[0] - p1[0])) * (x - p1[0])) + p1[1]
    };
    var v1 = [];
    var v2 = [];
    var i1 = 0;
    var i2 = 0;
    while (i1 < a1.length || i2 < a2.length) {
        if (i1 >= a1.length) {
            if (this.showOuterArea) {
                v1.push([a2[i2].x, undefined]);
                v2.push([a2[i2].x, a2[i2].y])
            }
            i2++
        } else if (i2 >= a2.length) {
            if (this.showOuterArea) {
                v2.push([a1[i1].x, undefined]);
                v1.push([a1[i1].x, a1[i1].y])
            }
            i1++
        } else if (a1[i1].x < a2[i2].x) {
            if (i2 == 0) {
                if (this.showOuterArea) {
                    v2.push([a1[i1].x, undefined]);
                    v1.push([a1[i1].x, a1[i1].y])
                }
            } else {
                v2.push([a1[i1].x, y_cross([a2[i2 - 1].x, a2[i2 - 1].y], [a2[i2].x, a2[i2].y], a1[i1].x)]);
                v1.push([a1[i1].x, a1[i1].y])
            }
            i1++
        } else if (a2[i2].x < a1[i1].x) {
            if (i1 == 0) {
                if (this.showOuterArea) {
                    v1.push([a2[i2].x, undefined]);
                    v2.push([a2[i2].x, a2[i2].y])
                }
            } else {
                v1.push([a2[i2].x, y_cross([a1[i1 - 1].x, a1[i1 - 1].y], [a1[i1].x, a1[i1].y], a2[i2].x)]);
                v2.push([a2[i2].x, a2[i2].y])
            }
            i2++
        } else {
            v1.push([a1[i1].x, a1[i1].y]);
            v2.push([a2[i2].x, a2[i2].y]);
            i1++;
            i2++
        }
    }
    var c1 = [];
    var c2 = [];
    var over = undefined;
    var o = undefined;
    for (var i = 0; i < v1.length; i++) {
        if (v1[i][1] !== undefined && v2[i][1] !== undefined) {
            o = v1[i][1] > v2[i][1];
            if (over != undefined && o != over) {
                c = xy_cross(v1[i - 1], v1[i], v2[i - 1], v2[i]);
                c1.push({
                    __x: c[0],
                    __y: c[1]
                });
                c2.push({
                    __x: c[0],
                    __y: c[1]
                });
                this.__points.push(new EJSC.XYPoint(c[0], c[1], null, null, this))
            }
            over = o
        }
        c1.push({
            __x: v1[i][0],
            __y: v1[i][1]
        });
        c2.push({
            __x: v2[i][0],
            __y: v2[i][1]
        })
    }
    var l1 = [];
    var l2 = [];
    var i = 0;
    var s = 0;
    var d = [];
    var ret = [];
    var dir = undefined;
    while (i < c1.length) {
        if (c1[i].__y == c2[i].__y) {
            for (var e = i; e >= s; e--) d.push(c2[e]);
            ret.push({
                data: d.slice(),
                dir: dir
            });
            d = [];
            s = i
        }
        if (c1[i].__y < c2[i].__y) dir = -1;
        else dir = 1;
        d.push(c1[i]);
        i++
    }
    for (var e = i - 1; e >= s; e--) d.push(c2[e]);
    ret.push({
        data: d.slice(),
        dir: dir
    });
    this.__drawpoints = ret
};
___overunderseries.__buildPointsToDraw = function(points) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var ox_min = x_axis.__current_min;
    var ox_max = x_axis.__current_max;
    var oy_min = y_axis.__current_min;
    var oy_max = y_axis.__current_max;
    var pts = [];
    var point1;
    var point2;
    var point1_in_area;
    var point2_in_area;
    var i;
    function crossesX(p1, p2, x) {
        if (p1.__x == p2.__x) return false;
        if (x < p1.__x && x < p2.__x) return false;
        if (x > p1.__x && x > p2.__x) return false;
        return (((p2.__y - p1.__y) / (p2.__x - p1.__x)) * (x - p1.__x)) + p1.__y
    }
    function crossesY(p1, p2, y) {
        if (p1.__y == p2.__y) return false;
        if (y < p1.__y && y < p2.__y) return false;
        if (y > p1.__y && y > p2.__y) return false;
        return (((p2.__x - p1.__x) / (p2.__y - p1.__y)) * (y - p1.__y)) + p1.__x
    }
    for (i = 0; i < points.length - 1; i++) {
        point1 = points[i];
        point2 = points[i + 1];
        point1_in_area = (point1.__x >= ox_min && point1.__x <= ox_max && point1.__y >= oy_min && point1.__y <= oy_max);
        point2_in_area = (point2.__x >= ox_min && point2.__x <= ox_max && point2.__y >= oy_min && point2.__y <= oy_max);
        if (point1_in_area && point2_in_area) {
            pts.push([point1.__x, point1.__y]);
            pts.push([point2.__x, point2.__y])
        } else if (point1_in_area) {
            pts.push([point1.__x, point1.__y]);
            if (crossesX(point1, point2, ox_min)) {
                pts.push([ox_min, crossesX(point1, point2, ox_min)]);
                if (point2.__y > oy_max) pts.push([ox_min, oy_max]);
                if (point2.__y < oy_min) pts.push([ox_min, oy_min])
            } else if (crossesX(point1, point2, ox_max)) {
                pts.push([ox_max, crossesX(point1, point2, ox_max)]);
                if (point2.__y > oy_max) pts.push([ox_max, oy_max]);
                if (point2.__y < oy_min) pts.push([ox_max, oy_min])
            } else if (crossesY(point1, point2, oy_min)) {
                pts.push([crossesY(point1, point2, oy_min), oy_min]);
                if (point2.__x > ox_max) pts.push([ox_max, oy_min]);
                if (point2.__x < ox_min) pts.push([ox_min, oy_min])
            } else if (crossesY(point1, point2, oy_max)) {
                pts.push([crossesY(point1, point2, oy_max), oy_max]);
                if (point2.__x > ox_max) pts.push([ox_max, oy_max]);
                if (point2.__x < ox_min) pts.push([ox_min, oy_max])
            }
        } else if (point2_in_area) {
            if (crossesX(point1, point2, ox_min)) {
                if (point1.__y > oy_max) pts.push([ox_min, oy_max]);
                if (point1.__y < oy_min) pts.push([ox_min, oy_min]);
                pts.push([ox_min, crossesX(point1, point2, ox_min)])
            } else if (crossesX(point1, point2, ox_max)) {
                if (point1.__y > oy_max) pts.push([ox_max, oy_max]);
                if (point1.__y < oy_min) pts.push([ox_max, oy_min]);
                pts.push([ox_max, crossesX(point1, point2, ox_max)])
            } else if (crossesY(point1, point2, oy_min)) {
                if (point1.__x > ox_max) pts.push([ox_max, oy_min]);
                if (point1.__x < ox_min) pts.push([ox_min, oy_min]);
                pts.push([crossesY(point1, point2, oy_min), oy_min])
            } else if (crossesY(point1, point2, oy_max)) {
                if (point1.__x > ox_max) pts.push([ox_max, oy_max]);
                if (point1.__x < ox_min) pts.push([ox_min, oy_max]);
                pts.push([crossesY(point1, point2, oy_max), oy_max])
            }
            pts.push([point2.__x, point2.__y])
        } else {
            if (crossesX(point1, point2, ox_min) && crossesX(point1, point2, ox_max)) {
                if (point1.__x < point2.__x) {
                    pts.push([ox_min, crossesX(point1, point2, ox_min)]);
                    pts.push([ox_max, crossesX(point1, point2, ox_max)])
                } else {
                    pts.push([ox_max, crossesX(point1, point2, ox_max)]);
                    pts.push([ox_min, crossesX(point1, point2, ox_min)])
                }
            } else if (crossesY(point1, point2, oy_min) && crossesY(point1, point2, oy_max)) {
                if (point1.__y < point2.__y) {
                    pts.push([crossesY(point1, point2, oy_min), oy_min]);
                    pts.push([crossesY(point1, point2, oy_max), oy_max])
                } else {
                    pts.push([crossesY(point1, point2, oy_max), oy_max]);
                    pts.push([crossesY(point1, point2, oy_min), oy_min])
                }
            } else if (crossesX(point1, point2, ox_min) && crossesY(point1, point2, oy_min)) {
                if (point1.__x < point2.__x) {
                    pts.push([ox_min, crossesX(point1, point2, ox_min)]);
                    pts.push([crossesY(point1, point2, oy_min), oy_min])
                } else {
                    pts.push([crossesY(point1, point2, oy_min), oy_min]);
                    pts.push([ox_min, crossesX(point1, point2, ox_min)])
                }
            } else if (crossesX(point1, point2, ox_min) && crossesY(point1, point2, oy_max)) {
                if (point1.__x < point2.__x) {
                    pts.push([ox_min, crossesX(point1, point2, ox_min)]);
                    pts.push([crossesY(point1, point2, oy_max), oy_max])
                } else {
                    pts.push([crossesY(point1, point2, oy_max), oy_max]);
                    pts.push([ox_min, crossesX(point1, point2, ox_min)])
                }
            } else if (crossesX(point1, point2, ox_max) && crossesY(point1, point2, oy_min)) {
                if (point1.__x < point2.__x) {
                    pts.push([crossesY(point1, point2, oy_min), oy_min]);
                    pts.push([ox_max, crossesX(point1, point2, ox_max)])
                } else {
                    pts.push([ox_max, crossesX(point1, point2, ox_max)]);
                    pts.push([crossesY(point1, point2, oy_min), oy_min])
                }
            } else if (crossesX(point1, point2, ox_max) && crossesY(point1, point2, oy_max)) {
                if (point1.__x < point2.__x) {
                    pts.push([crossesY(point1, point2, oy_max), oy_max]);
                    pts.push([ox_max, crossesX(point1, point2, ox_max)])
                } else {
                    pts.push([ox_max, crossesX(point1, point2, ox_max)]);
                    pts.push([crossesY(point1, point2, oy_max), oy_max])
                }
            } else {}
        }
    }
    return pts
};
___overunderseries.__paint = function(ctx) {
    if (this.__drawpoints.length == 0) return;
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    for (var i = 0; i < this.__drawpoints.length; i++) {
        if (this.__drawpoints[i].dir == 1) {
            if (!this.exceed.visible) continue;
            ctx.fillStyle = EJSC.utility.__getColor(this.exceed.color, this.exceed.opacity / 100).rgba;
            ctx.strokeStyle = EJSC.utility.__getColor(this.exceed.color, this.exceed.opacity / 100).rgba
        } else {
            if (!this.subsede.visible) continue;
            ctx.fillStyle = EJSC.utility.__getColor(this.subsede.color, this.subsede.opacity / 100).rgba;
            ctx.strokeStyle = EJSC.utility.__getColor(this.subsede.color, this.subsede.opacity / 100).rgba
        }
        var pts = this.__buildPointsToDraw(this.__drawpoints[i].data);
        if (pts.length == 0) continue;
        ctx.beginPath();
        ctx.moveTo(x_axis.__pt2px(pts[0][0]), y_axis.__pt2px(pts[0][1]));
        for (var j = 1; j < pts.length; j++) ctx.lineTo(x_axis.__pt2px(pts[j][0]), y_axis.__pt2px(pts[j][1]));
        ctx.fill()
    }
};
___overunderseries.__doDraw = function(ctx) {
    if (this.__drawing) return;
    if (!this.visible) return;
    this.__drawing = true;
    try {
        var chart = this.__getChart();
        var x_axis = chart["axis_" + this.x_axis];
        var y_axis = chart["axis_" + this.y_axis];
        var canDraw = true;
        if (isNaN(x_axis.__scale)) {
            x_axis.__calculateExtremes();
            canDraw = false
        }
        if (isNaN(y_axis.__scale)) {
            y_axis.__calculateExtremes();
            canDraw = false
        }
        if (!canDraw) {
            var ref = this;
            window.setTimeout(function() {
                ref.__getChart().__calculateExtremes(true)
            },
            0);
            return
        }
        this.__build();
        this.__paint(ctx)
    } catch(e) {} finally {
        this.__drawing = false
    }
};
EJSC.StepSeries = function(dh, options) {
    this.__points = [];
    this.__minX = undefined;
    this.__maxX = undefined;
    this.__minY = undefined;
    this.__maxY = undefined;
    this.__drawing = false;
    this.__lineStyle = "solid";
    this.__padding = {
        x_min: undefined,
        x_max: undefined,
        y_min: undefined,
        y_max: undefined
    };
    this.padding = {
        x_axis_min: undefined,
        x_axis_max: undefined,
        y_axis_min: undefined,
        y_axis_max: undefined
    };
    this.__type = "step";
    this.__defaultHintString = "[series_title]<br/>[xaxis] [x]<br/>[yaxis] [y]";
    this.__copyOptions(options);
    this.__doSetDataHandler(dh, false);
    var adj = 0;
    if (this.drawPoints) {
        adj = (this.pointSize + this.pointBorderSize);
        if (adj < this.lineWidth) {
            adj = this.lineWidth
        }
    } else {
        adj = this.lineWidth
    }
    this.__padding.x_min = this.__padding.x_min == undefined ? adj: this.__padding.x_min;
    this.__padding.x_max = this.__padding.x_max == undefined ? adj: this.__padding.x_max;
    this.__padding.y_min = this.__padding.y_min == undefined ? adj: this.__padding.y_min;
    this.__padding.y_max = this.__padding.y_max == undefined ? adj: this.__padding.y_max
};
EJSC.LineSeries.prototype.__extendTo(EJSC.StepSeries);
var ___stepseries = EJSC.StepSeries.prototype;
___stepseries.__doCalculatePoints = function() {
    var points = this.__points;
    var pts = [];
    for (var i = 0; i < points.length; i++) {
        pts.push({
            x: points[i].__x(),
            y: points[i].__y()
        });
        if (i < points.length - 1) pts.push({
            x: points[i + 1].__x(),
            y: points[i].__y()
        })
    }
    return pts
};
___stepseries.__doCalculatePointsToDraw = function(points, boundaries) {
    var x_min = boundaries.x_min,
    x_max = boundaries.x_max,
    y_min = boundaries.y_min,
    y_max = boundaries.y_max;
    var pts = [],
    p = undefined,
    l = undefined,
    c = undefined,
    axis = undefined,
    a = undefined;
    for (var i = 0; i < points.length; i++) {
        p = points[i];
        if (l == undefined) {
            if (p.y == null || p.y == undefined) {
                c = l = undefined;
                continue
            } else if (p.x < x_min || p.x > x_max || p.y < y_min || p.y > y_max) {
                l = p;
                continue
            } else {
                pts.push({
                    action: 'move',
                    x: p.x,
                    y: p.y
                });
                l = p;
                continue
            }
        } else {
            if (p.y == null || p.y == undefined) {
                c = l = undefined;
                continue
            } else if (p.x >= x_min && p.x <= x_max && p.y >= y_min && p.y <= y_max && l.x >= x_min && l.x <= x_max && l.y >= y_min && l.y <= y_max) {
                pts.push({
                    action: 'line',
                    x: p.x,
                    y: p.y
                });
                c = l = p;
                continue
            } else if (p.x >= x_min && p.x <= x_max && p.y >= y_min && p.y <= y_max) {
                a = (c == undefined ? 'move': 'line');
                if (l.x < x_min) c = this.__calculateCross(l, p, 'left');
                else if (l.x > x_max) c = this.__calculateCross(l, p, 'right');
                else c = l;
                if (c.y < y_min) c = this.__calculateCross(l, p, 'bottom');
                if (c.y > y_max) c = this.__calculateCross(l, p, 'top');
                pts.push({
                    action: a,
                    x: c.x,
                    y: c.y
                });
                pts.push({
                    action: 'line',
                    x: p.x,
                    y: p.y
                });
                c = l = p;
                continue
            } else if (l.x >= x_min && l.x <= x_max && l.y >= y_min && l.y <= y_max) {
                if (p.x < x_min) c = this.__calculateCross(p, l, 'left');
                else if (p.x > x_max) c = this.__calculateCross(p, l, 'right');
                else c = p;
                if (c.y < y_min) c = this.__calculateCross(p, l, 'bottom');
                else if (c.y > y_max) c = this.__calculateCross(p, l, 'top');
                pts.push({
                    action: 'line',
                    x: c.x,
                    y: c.y
                });
                l = p;
                continue
            } else if ((p.x < x_min && l.x < x_min) || (p.x > x_max && l.x > x_max) || (p.y < y_min && l.y < y_min) || (p.y > y_max && l.y > y_max)) {
                l = p;
                c = undefined;
                continue
            } else {
                a = (c == undefined ? 'move': 'line');
                if (l.x < x_min) c = this.__calculateCross(l, p, 'left');
                else if (l.x > x_max) c = this.__calculateCross(l, p, 'right');
                else c = l;
                if (c.y < y_min) c = this.__calculateCross(l, p, 'bottom');
                if (c.y > y_max) c = this.__calculateCross(l, p, 'top');
                pts.push({
                    action: a,
                    x: c.x,
                    y: c.y
                });
                if (p.x < x_min) c = this.__calculateCross(p, l, 'left');
                else if (p.x > x_max) c = this.__calculateCross(p, l, 'right');
                else c = p;
                if (c.y < y_min) c = this.__calculateCross(p, l, 'bottom');
                else if (c.y > y_max) c = this.__calculateCross(p, l, 'top');
                pts.push({
                    action: 'line',
                    x: c.x,
                    y: c.y
                });
                l = p;
                continue
            }
        }
    }
    return pts
};
___stepseries.__calculateCross = function(l, p, axis) {
    var x_axis = this.__getChart()["axis_" + this.x_axis];
    var y_axis = this.__getChart()["axis_" + this.y_axis];
    var ox_min = x_axis.__current_min;
    var ox_max = x_axis.__current_max;
    var oy_min = y_axis.__current_min;
    var oy_max = y_axis.__current_max;
    var result = [];
    var x1 = l.x;
    var x2 = p.x;
    var y1 = l.y;
    var y2 = p.y;
    switch (axis) {
    case 'top':
        var y = oy_max;
        var x = (((y - y1) / (y2 - y1)) * (x2 - x1)) + x1;
        break;
    case 'bottom':
        var y = oy_min;
        var x = (((y - y1) / (y2 - y1)) * (x2 - x1)) + x1;
        break;
    case 'left':
        var x = ox_min;
        var y = (((x - x1) / (x2 - x1)) * (y2 - y1)) + y1;
        break;
    case 'right':
        var x = ox_max;
        var y = (((x - x1) / (x2 - x1)) * (y2 - y1)) + y1;
        break
    }
    return {
        x: x,
        y: y
    }
};
___stepseries.__doAbstractLineDraw = function(ctx, seriesType, drawMode, openClose) {
    var x_axis = this.__getChart()["axis_" + this.x_axis],
    y_axis = this.__getChart()["axis_" + this.y_axis];
    var points = this.__doCalculatePoints();
    var boundaries = {
        x_min: x_axis.__current_min,
        x_max: x_axis.__current_max,
        y_min: y_axis.__current_min,
        y_max: y_axis.__current_max
    };
    var pts = this.__doCalculatePointsToDraw(points, boundaries);
    var actions = {
        'move': 'moveTo',
        'line': 'lineTo'
    };
    ctx.lineWidth = this.lineWidth;
    ctx.dashStyle = this.__lineStyle;
    ctx.strokeStyle = EJSC.utility.__getColor(this.color, this.lineOpacity / 100).rgba;
    ctx.fillStyle = EJSC.utility.__getColor(this.color, this.opacity / 100).rgba;
    ctx.beginPath();
    for (var i = 0; i < pts.length; i++) {
        ctx[actions[pts[i].action]](x_axis.__pt2px(pts[i].x), y_axis.__pt2px(pts[i].y))
    }
    ctx.stroke()
};