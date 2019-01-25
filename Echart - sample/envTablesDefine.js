function setDivWH(id_div, w, h) 
{
	document.getElementById(id_div).style.width = w + 'px';
	document.getElementById(id_div).style.height = h + 'px';
}

function styleStr(str, color, font_weight, font_size) {
    var s = '<span style="';
    if (color != undefined) {
        s += 'color:'+color+';';
    }
    if (font_weight != undefined) {
        s += 'font-weight:'+font_weight+';';
    }
    if (font_size != undefined) {
        s += 'font-size:'+font_size+';';
    }
    s += '">' + str + '</span>';
    return s;
}

function clusterString(c, s) {
    return styleStr(s, CLUSTER_COLOR[c]);
}

function chartTitle(s, color) {
    return styleStr('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+s, color, 'bold', '14px');
}

var BGCOLOR = '#2f4f4f';
var MAX_F = 360;
var LOCATION_CURVE_TYPE = ['1次','2-3次','4-6次','7-9次','>=10次'];
var CABLE_PHASE_COLOR = ['#ffaa00',  '#00ff00', '#ff0000'];
var SCATTER_COLOR_MAP = [{min:1,max:1,color:'#7f94cc'},{min:2,max:3,color:'#51c5dd'},{min:4,max:6,color:'#00a652'},{min:7,max:9,color:'#f9a96f'},{min:10, max:2147483647, color:'#eb1b3b'}];
var SCATTER_COLOR_NUM = SCATTER_COLOR_MAP.length;
//////////////////////////////////////////////////////////
var g_envAIDataChart = env_aidata_curve();
//加载loadEnvAIDataChart
function loadEnvAIDataChart()
{
	g_envAIDataChart.init("env_aidata_chart");
}
//清空EnvDataChart
function clearEnvAIDataChart()
{
	g_envAIDataChart.clear(); 
}
//重绘EnvDataChart
function redrawEnvAIDataChart()
{
	g_envAIDataChart.chart.redraw();
}
//绘制EnvDataChart
function drawEnvAIDataChart(rdata,type,unitname)
{
	g_envAIDataChart.draw(rdata,type,unitname); 
}

//env_aidata_curve
function env_aidata_curve()
{
	var envDataChart = new Object();
	envDataChart.chart = null;
	envDataChart.data = null;
	envDataChart.series = null;
	envDataChart.extremesX = {min:-1, max:-1};
	envDataChart.extremesY = {min:-1, max:-1};
	var myDate = new Date();
	var nSec = myDate.getTime();

	envDataChart.init = function(id_div)
	{
		this.data = new Array();
		this.series = new Array();
		this.chart = new EJSC.Chart(id_div,
		{
			show_legend: false,
			title: '',
			show_titlebar: false,
			show_messages: true,
			allow_mouse_wheel_zoom: true,
			allow_interactivity: true,
			allow_move: true,
			allow_zoom: true,
			border: {thickness:2, color:'#000000', opacity:50, show:true},
			background: {color:BGCOLOR, opacity:30, includeTitle:false},
			//X轴
			axis_bottom:
			{
				caption: styleStr('时间', '#15428b'),
				crosshair: {show: false},
				min_extreme: nSec-10000000,
				max_extreme: nSec+10000000,
				formatter: new EJSC.DateFormatter
				({
					format_string: "HH:NN:SS<br/>YYYY-MM-DD",
					useUTC: false
				})
			},
			//Y轴
			axis_left:
			{
				caption: styleStr('采集值', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100,
				size: 30
			}
		});
		this.series = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '采集值:[y]<br/>[x]',
			autosort:false
		}));
	};

	envDataChart.clear = function()
	{
		this.chart.removeSeries((this.series), false);
		this.series = null;
		this.data = null;
		this.chart.remove();
		this.chart = null;
	};

	envDataChart.draw = function(rdata,type,unitname)
	{
		this.series.getDataHandler = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '采集值:[y]'+unitname+'<br/>[x]',
			autosort:false
		}));
		
		for(var i=0; i<rdata.data.length; ++i)
		{
			this.data.push([rdata.data[i][0], rdata.data[i][1]]);
		}

		this.chart.axis_left.setCaption(styleStr(type, '#15428b'));
		this.chart.axis_left.setExtremes(rdata.Y_min, rdata.Y_max);
		this.chart.axis_bottom.setExtremes(rdata.X_min, rdata.X_max);
		this.series.getDataHandler().setArray(this.data);
		this.series.reload();
	};
	
    return envDataChart;
}

/////////////////////////////////////////////////
var g_envDIDataChart = env_didata_curve();
//加载loadEnvDIDataChart
function loadEnvDIDataChart()
{
	g_envDIDataChart.init("env_didata_chart");
}
//清空EnvDataChart
function clearEnvDIDataChart()
{
	g_envDIDataChart.clear();
}
//重绘EnvDIDataChart
function redrawEnvDIDataChart()
{
	g_envDIDataChart.chart.redraw();
}
//绘制EnvDIDataChart
function drawEnvDIDataChart(rdata,type)
{
	g_envDIDataChart.draw(rdata,type); 
}

function env_didata_curve()
{
	var envDataChart = new Object();
	envDataChart.chart = null;
	envDataChart.data = null;
	envDataChart.series = null;
	envDataChart.extremesX = {min:-1, max:-1};
	envDataChart.extremesY = {min:-1, max:-1};
	var myDate = new Date();
	var nSec = myDate.getTime();

	envDataChart.init = function(id_div)
	{
		this.data = new Array();
		this.series = new Array();
		this.chart = new EJSC.Chart(id_div,
		{
			show_legend: false,
			title: '',
			show_titlebar: false,
			show_messages: true,
			allow_mouse_wheel_zoom: true,
			allow_interactivity: true,
			allow_move: true,
			allow_zoom: true,
			border: {thickness:2, color:'#000000', opacity:50, show:true},
			background: {color:BGCOLOR, opacity:30, includeTitle:false},
			//X轴
			axis_bottom:
			{
				caption:styleStr('时间', '#15428b'),
				crosshair: {show: false},
				min_extreme: nSec-10000000,
				max_extreme: nSec+10000000,
				formatter: new EJSC.DateFormatter
				({
					format_string: "HH:NN:SS<br/>YYYY-MM-DD",
					useUTC: false
				})
			},
			//Y轴
			axis_left:
			{
				caption: styleStr('采集值', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100,
				size: 30
			}
		});
		this.series = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '采集值:[y]<br/>[x]',
			autosort:false
		}));
	};
	
	envDataChart.clear = function()
	{
		this.chart.removeSeries((this.series), false);
		this.series = null;
		this.data = null;
		this.chart.remove();
		this.chart = null;
	};

	envDataChart.draw = function(rdata,type)
	{
		this.series.getDataHandler = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '采集值:[y]<br/>[x]',
			autosort:false
		}));
		
		for(var i=0; i<rdata.data.length; ++i)
		{
			this.data.push([rdata.data[i][0], rdata.data[i][1]]);
		}
		this.chart.axis_left.setCaption(styleStr(type, '#15428b'));
		this.chart.axis_left.setExtremes(rdata.Y_min, rdata.Y_max);
		this.chart.axis_bottom.setExtremes(rdata.X_min, rdata.X_max);
		this.series.getDataHandler().setArray(this.data);
		this.series.reload();
	};
    return envDataChart;
}

///////////////////////////////////////////////////
/////////////////////////////////////////////////
var g_envDTSDataChart = env_dtsdata_curve();
//加载loadEnvDIDataChart
function loadEnvDTSDataChart()
{
	g_envDTSDataChart.init("env_dtsdata_chart");
}
//清空EnvDataChart
function clearEnvDTSDataChart()
{
	g_envDTSDataChart.clear(); 
}
//重绘EnvDTSDataChart
function redrawEnvDTSDataChart()
{
	g_envDTSDataChart.chart.redraw();
}
//绘制EnvDTSDataChart
function drawEnvDTSDataChart(rdata,type,unitname)
{
	g_envDTSDataChart.draw(rdata,type,unitname); 
}

function env_dtsdata_curve()
{
	var envDataChart = new Object();
	envDataChart.chart = null;
	envDataChart.data = null;
	envDataChart.series = null;
	envDataChart.extremesX = {min:-1, max:-1};
	envDataChart.extremesY = {min:-1, max:-1};

	envDataChart.init = function(id_div)
	{
		this.data = new Array();
		this.series = new Array();
		this.chart = new EJSC.Chart(id_div,
		{
			show_legend: false,
			title: '',
			show_titlebar: false,
			show_messages: true,
			allow_mouse_wheel_zoom: true,
			allow_interactivity: true,
			allow_move: true,
			allow_zoom: true,
			border: {thickness:2, color:'#000000', opacity:50, show:true},
			background: {color:BGCOLOR, opacity:30, includeTitle:false},
			//X轴
			axis_bottom:
			{
				caption:styleStr('距离[米]', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100
			},
			//Y轴
			axis_left:
			{
				caption: styleStr('采集值[℃]', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100,
				size: 30
			}
		});
		this.series = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '采集值:[y]<br/>[x]',
			autosort:false
		}));
	};
	
	envDataChart.clear = function()
	{
		this.chart.removeSeries((this.series), false);
		this.series = null;
		this.data = null;
		this.chart.remove();
		this.chart = null;
	};

	envDataChart.draw = function(rdata,type,unitname)
	{
		this.series.getDataHandler = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '采集值:[y]'+unitname+'<br/>距离[x]米',
			autosort:false
		}));
		
		for(var i=0; i<rdata.data.length; ++i)
		{
			this.data.push([rdata.data[i][0], rdata.data[i][1]]);
		}

		this.chart.axis_left.setCaption(styleStr(type, '#15428b'));
		this.chart.axis_left.setExtremes(rdata.Y_min, rdata.Y_max);
		this.chart.axis_bottom.setExtremes(rdata.X_min, rdata.X_max);
		this.series.getDataHandler().setArray(this.data);
		this.series.reload();
	};
    return envDataChart;
}


///////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
var g_envTURBDataChart = env_turbdata_curve();
//加载loadEnvTURBDataChart
function loadEnvTURBDataChart()
{
	g_envTURBDataChart.init("env_turbdata_chart");
}
//清空EnvTURBDataChart
function clearEnvTURBDataChart()
{
	g_envTURBDataChart.clear();
}
//重绘EnvTURBDataChart
function redrawEnvTURBDataChart()
{
	g_envTURBDataChart.chart.redraw();
}
//绘制EnvTURBDataChart
function drawEnvTURBDataChart(rdata,type)
{
	g_envTURBDataChart.draw(rdata,type); 
}

function env_turbdata_curve()
{
	var envDataChart = new Object();
	envDataChart.chart = null;
	envDataChart.data = null;
	envDataChart.series = null;
	var myDate = new Date();
	var nSec = myDate.getTime();

	envDataChart.init = function(id_div)
	{
		this.data = new Array();
		this.series = new Array();
		this.chart = new EJSC.Chart(id_div,
		{
			show_legend: false,
			title: '',
			show_titlebar: false,
			show_messages: true,
			allow_mouse_wheel_zoom: true,
			allow_interactivity: true,
			allow_move: true,
			allow_zoom: true,
			border: {thickness:2, color:'#000000', opacity:50, show:true},
			background: {color:BGCOLOR, opacity:30, includeTitle:false},
			//X轴
			axis_bottom:
			{
				caption:styleStr('位置[米]', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100
			},
			//Y轴
			axis_left:
			{
				caption: styleStr('采集值', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100,
				size: 30
			}
		});
		this.series = this.chart.addSeries(new EJSC.ScatterSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 2.5,
			hint_string: '采集值:[y]<br/>[x]',
			autosort:false
		}));
	};
	
	envDataChart.clear = function()
	{
		this.chart.removeSeries((this.series), false);
		this.series = null;
		this.data = null;
		this.chart.remove();
		this.chart = null;
	};

	envDataChart.draw = function(rdata,type)
	{
		this.series.getDataHandler = this.chart.addSeries(new EJSC.ScatterSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 2.5,
			hint_string: '采集值:[y]<br/>[x]',
			autosort:false
		}));
		
		for(var i=0; i<rdata.data.length; ++i)
		{
			this.data.push([rdata.data[i][0], rdata.data[i][1]]);
		}
		this.chart.axis_left.setCaption(styleStr(type, '#15428b'));
		this.chart.axis_left.setExtremes(rdata.Y_min, rdata.Y_max);
		this.chart.axis_bottom.setExtremes(rdata.X_min, rdata.X_max);
		this.series.getDataHandler().setArray(this.data);
		this.series.reload();
	};
    return envDataChart;
}

///////////////////////////////////////////////////
/////////////////////////////////////////////////
var g_envTURBChannelDataChart = env_turbchanneldata_curve();
//加载loadEnvTURBDataChart
function loadEnvTURBChannelDataChart()
{
	g_envTURBChannelDataChart.init("env_turbdata_chart");
}
//清空EnvTURBDataChart
function clearEnvTURBChannelDataChart()
{
	g_envTURBChannelDataChart.clear();
}
//重绘EnvTURBDataChart
function redrawEnvTURBChannelDataChart()
{
	g_envTURBChannelDataChart.chart.redraw();
}
//绘制EnvTURBDataChart
function drawEnvTURBChannelDataChart(rdata,type)
{
	g_envTURBChannelDataChart.draw(rdata,type); 
}

function env_turbchanneldata_curve()
{
	var envDataChart = new Object();
	envDataChart.chart = null;
	envDataChart.data = null;
	envDataChart.series = null;
	envDataChart.extremesX = {min:-1, max:-1};
	envDataChart.extremesY = {min:-1, max:-1};
	var myDate = new Date();
	var nSec = myDate.getTime();

	envDataChart.init = function(id_div)
	{
		this.data = new Array();
		this.series = new Array();
		this.chart = new EJSC.Chart(id_div,
		{
			show_legend: false,
			title: '',
			show_titlebar: false,
			show_messages: true,
			allow_mouse_wheel_zoom: true,
			allow_interactivity: true,
			allow_move: true,
			allow_zoom: true,
			border: {thickness:2, color:'#000000', opacity:50, show:true},
			background: {color:BGCOLOR, opacity:30, includeTitle:false},
			//X轴
			axis_bottom:
			{
				caption:styleStr('位置[米]', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100
			},
			//Y轴
			axis_left:
			{
				caption: styleStr('采集值', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100,
				size: 30
			}
		});
		this.series = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 1.0,
			hint_string: '采集值:[y]<br/>[x]',
			autosort:false
		}));
	};
	
	envDataChart.clear = function()
	{
		this.chart.removeSeries((this.series), false);
		this.series = null;
		this.data = null;
		this.chart.remove();
		this.chart = null;
	};

	envDataChart.draw = function(rdata,type)
	{
		this.series.getDataHandler = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data),
		{
			color: '#0000ff',
			pointStyle: "diamond",
			pointSize: 1.0,
			hint_string: '采集值:[y]<br/>[x]',
			autosort:false
		}));
		
		for(var i=0; i<rdata.data.length; ++i)
		{
			this.data.push([rdata.data[i][0], rdata.data[i][1]]);
		}
		this.chart.axis_left.setCaption(styleStr(type, '#15428b'));
		this.chart.axis_left.setExtremes(rdata.Y_min, rdata.Y_max);
		this.chart.axis_bottom.setExtremes(rdata.X_min, rdata.X_max);
		this.series.getDataHandler().setArray(this.data);
		this.series.reload();
	};
    return envDataChart;
}

///////////////////////
var g_envStressDataChart = env_stress_datacurve();
var g_envStressFreqChart = env_stress_freqcurve();
//应力数据曲线图
function env_stress_datacurve() 
{
	var chartsd = new Object();
	chartsd.chart = null;
	chartsd.data = null;
	chartsd.series = null;
	chartsd.init = function(id_div,p) {
		this.data = new Array();
		this.series = new Array();
		this.chart = new EJSC.Chart(id_div, {
			title: chartTitle('原始数据曲线',CABLE_PHASE_COLOR[p]),
			show_titlebar:false,
			show_legend: false,
			show_messages: true,
			allow_mouse_wheel_zoom: true,
			allow_interactivity: true,
			allow_move: true,
			allow_zoom: true,
			onDblClickPoint:onBeforeDblClickChartLN,
			border: {thickness:2, color:'#000000', opacity:50, show:true},
			background: {color:BGCOLOR, opacity:30, includeTitle:false},
			//X轴
			axis_bottom:
			{
				caption:styleStr('位置[米]', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100
			},
			//Y轴
			axis_left:
			{
				caption: styleStr('采集值', '#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100,
				size: 30
			}
		});
	
		this.series = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data), {
			color: "#0000ff",
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '位置:[x]米<br/>'+'采集值:[y]',
			autosort:false
		}));  
	};

	chartsd.clear = function()
	{
		this.chart.removeSeries((this.series), false);
		this.series = null;
		this.data = null;
		this.chart.remove();
		this.chart = null;
	};

	chartsd.draw = function(rdata)
	{
		for (var i=0; i<rdata.data.length; ++i)
		{
			this.data.push([rdata.data[i][0], rdata.data[i][1]]);
		}

		this.chart.axis_left.setExtremes(rdata.Y_min/1.01, rdata.Y_max/0.99);
		this.chart.axis_bottom.setExtremes(rdata.X_min/1.01, rdata.X_max/0.99);
		this.series.getDataHandler().setArray(this.data);
		this.series.reload();
	};
	return chartsd;
}

//应力频谱曲线图
function env_stress_freqcurve() {
	var chartsf = new Object();
	chartsf.chart = null;
	chartsf.data = null;
	chartsf.series = null;
	chartsf.init = function(id_div,p) {
		chartsf.data = new Array();
		chartsf.series = new Array();
		this.chart = new EJSC.Chart(id_div, {
			title: chartTitle('频谱曲线',CABLE_PHASE_COLOR[p]),
			show_titlebar:false,
			show_legend: false,
			show_messages: true,
			allow_mouse_wheel_zoom: true,
			allow_interactivity: true,
			allow_move: true,
			allow_zoom: true,
			border: {thickness:5, color:'#000000', opacity:50, show:true},
			background: {color:BGCOLOR, opacity:30, includeTitle:false},
			axis_bottom: {
				caption: styleStr('频率[GHz]','#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 360
			},
			axis_left: {
				caption: styleStr('幅度[uw]','#15428b'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100,
				size: 30
			}
		});

		this.series = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data), {
			color: "#0000ff",
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '频率:[x]GHz<br/>'+'幅度:[y]uw',
			autosort:false
		})); 	
	};

	chartsf.clear = function()
	{
		this.chart.removeSeries((this.series), false);
		this.series = null;
		this.data = null;
		this.chart.remove();
		this.chart = null;
	};

	chartsf.draw = function(rdata,p)
	{
		for (var i=0; i<rdata.data.length; ++i)
		{
			this.data.push([rdata.data[i][0], rdata.data[i][1]]);
		}
		this.chart.setTitle(p);
		this.chart.showTitlebar();
		this.chart.axis_left.setExtremes(rdata.Y_min/1.01, rdata.Y_max/0.99);
		this.chart.axis_bottom.setExtremes(rdata.X_min/1.01, rdata.X_max/0.99);
		this.series.getDataHandler().setArray(this.data);
		this.series.reload();
	};

	return chartsf;
}

function onBeforeDblClickChartLN(point,series,chart)
{
	series.reload();
	if(point.x != null && point.y != null)
	{
		document.title = point.x;
	}
}

function resizeStressCurve()
{
	$("#stressdata").hide();
	$("#freqdata").hide();
	
	var width = $(document.body).width();
	var height = $(document.body).height();
	if(g_envStressFreqChart.chart == null)
	{
		setDivWH("stressdata",width,height);
		$("#stressdata").show();
	}
	else
	{
		setDivWH("stressdata",width,height*2/3);
		setDivWH("freqdata",width,height/3);
		$("#stressdata").show();
		$("#freqdata").show();
	}
	
	g_envStressDataChart.chart.redraw();
}

function loadStressCurve()
{
	g_envStressDataChart.init("stressdata",0);
}

function loadFreqCurve()
{
	g_envStressFreqChart.init("freqdata",0);
}

function clearStressCurve()
{
	g_envStressDataChart.clear();
}
function clearFreqCurve()
{
	g_envStressFreqChart.clear();
}

function drawStressData(rdata,p)
{
	g_envStressDataChart.draw(rdata);
}

function drawFreqData(rdata,p)
{
	g_envStressFreqChart.draw(rdata,p);
}

function redrawStressData()
{
	g_envStressDataChart.chart.redraw(); 
}

function redrawFreqData()
{
	g_envStressFreqChart.chart.redraw(); 
}
////////////////////
////////////////////////////////////////
var g_timeQChart_a = apd_timeQ_chart();
//局放TimeQ图
function apd_timeQ_chart() {
	var timeQChart = new Object();
	timeQChart.chart = null;
	timeQChart.data = new Array(2);
	timeQChart.series = new Array(2);
	timeQChart.pointBeg = null;
	timeQChart.pointEnd = null;
	var myDate = new Date();
	var nSec = myDate.getTime();

	timeQChart.init = function(id_div) {
		this.chart = new EJSC.Chart(id_div,{     
			show_legend: true,
			legend_title:'图例',
			title: '',
			show_messages: true,
			allow_mouse_wheel_zoom: true,
			allow_interactivity: true,
			allow_move: true,
			allow_zoom: true,
			border: {thickness:2, color:'#000000', opacity:50, show:true},
			background: {color:BGCOLOR, opacity:30, includeTitle:false},
			axis_bottom: 
			{
				grid:{show:false},
				caption: styleStr('时间', '#15428b'),
				crosshair: {show: false},
				min_extreme: nSec-10000,
				max_extreme: nSec,
				formatter: new EJSC.DateFormatter({
				format_string: "YYYY-MM-DD<br/>HH:NN:SS",
				useUTC: false})
			},
			axis_left: 
			{
				grid:{show:false},
				caption: styleStr('放电量[pC]','#0000ff'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 1000
			},
			axis_right:
			{
				grid:{show:false},
				caption: styleStr('放电次数[次]','#00ff00'),
				crosshair: {show: false},
				min_extreme: 0,
				max_extreme: 100
			}
		});
		
		this.data[0] = new Array();
		this.series[0] = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data[0]),{
			color: '#0000ff',
			title: '放电量',
			pointStyle: "diamond",
			pointSize: 1.5,
			hint_string: '时间'+':[x]<br/>放电量:[y]pC',
			autosort:false
		}));

		this.data[1] = new Array();
		this.series[1] = this.chart.addSeries(new EJSC.LineSeries(
		new EJSC.ArrayDataHandler(this.data[1]),{
			color: '#00ff00',
			title: '放电次数',
			pointStyle: "diamond",
			pointSize: 1.5,
			y_axis:'right',
			hint_string: '时间'+':[x]<br/>放电次数:[y]次',
			autosort:false
		}));
	};

	timeQChart.destroy = function() 
	{
		for (var c=0; c<2; ++c) 
		{
			this.chart.removeSeries((this.series[c]), false);
			this.series[c] = null;
			this.data[c] = null;
		}
		this.chart.remove();
		this.chart = null;
	};

	timeQChart.clear = function() 
	{
		for (var c=0; c<2; ++c) 
		{
			this.data[c] = [];
			this.series[c].getDataHandler().setArray(this.data[c]);
			this.series[c].reload();
		}
	};

	timeQChart.draw = function(rdata,c) 
	{
		for (var i=0; i<rdata.data.length; ++i) 
		{
			this.data[c].push([rdata.data[i][0], rdata.data[i][1]]);
		}
		
		if(c == 0)
		{
			this.chart.axis_left.setExtremes(rdata.Y_min, rdata.Y_max);
		}
		else
		{
			this.chart.axis_right.setExtremes(rdata.Y_min, rdata.Y_max);
		}
		this.chart.axis_bottom.setExtremes(rdata.X_min, rdata.X_max);

		this.series[c].getDataHandler().setArray(this.data[c]);
		this.series[c].reload();
	};

	return timeQChart;  
}

function loadTimeQChart()
{
	g_timeQChart_a.init("time_q");       
}

function clearTimeQCurve()
{
	g_timeQChart_a.clear();
}

function drawTimeQCurve(rdata,t)
{
	g_timeQChart_a.draw(rdata,t);     
}
////////////////////////////////////
//////////////////////////////////////
//综合分析
var g_chartNqf_a = apd_nqf();
var g_chartNf_a = apd_nf();
var g_chartQf_a = apd_qf();

//局放全图分析-NQF
function apd_nqf() {
        var charNQF = new Object();
        charNQF.chart = null;
        charNQF.data = null;
        charNQF.dataSin = new Array();
        charNQF.series = new Array(SCATTER_COLOR_NUM);
        charNQF.seriesSin = null;
        charNQF.extremesX = {min:-1, max:-1};
        charNQF.extremesY = {min:-1, max:-1};
        charNQF.init = function(id_div,p) {
            this.data = new Array(SCATTER_COLOR_NUM);
            for (var c=0; c<SCATTER_COLOR_NUM; ++c)
			{
                this.data[c] = new Array(); 
            }
			
            this.chart = new EJSC.Chart(id_div, {
                title: chartTitle('N-Q-φ图',CABLE_PHASE_COLOR[p]),
                show_titlebar: true,
                show_legend: false,
                show_messages: true,
                allow_mouse_wheel_zoom: true,
                allow_interactivity: true,
                allow_move: true,
                allow_zoom: true,
                border: {thickness:5, color:"#000000", opacity:50, show:true},
                background: {color:BGCOLOR, opacity:30, includeTitle:false},
                axis_bottom: {
                    caption: styleStr('相位[度]','#15428b'),
                    crosshair: {show: false},
                    min_extreme: 0,
                    max_extreme: 360
                },
                axis_left: {
                    caption: styleStr('放电量[pC]','#15428b'),
                    crosshair: {show: false},
                    min_extreme: 0,
                    max_extreme: 500,
                    size: 30
                }
            });
			
            for (var c=0; c<SCATTER_COLOR_NUM; ++c)
			{
                this.series[c] = this.chart.addSeries(new EJSC.ScatterSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                    color: SCATTER_COLOR_MAP[c].color,
                    title:LOCATION_CURVE_TYPE[c],
                    pointStyle: "diamond",
                    pointSize: 1.5,
                    hint_string: '相位:[x]°<br/>'+'放电量:[y]pC<br/>'+'放电次数:[label]',
                    autosort:false
                }));
            }
			
            var self = this;
            this.seriesSin = this.chart.addSeries(new EJSC.FunctionSeries(
                    function(x) {
                        var ex = self.chart.axis_left.getExtremes();
                        var offset = (ex.max+ex.min)/2;
                        var A = (ex.max-ex.min)*0.4;
                        return offset + A * Math.sin(Math.PI*x/180);
                    }, {title:'工频相位',color: "#6B8E23", lineWidth: 1.0, hint_string: '相位:[x]', autosort:false})
            );
            this.chart.setLegendPosition("bottom");
        };
		
        charNQF.destroy = function()
		{
            for (var c=0; c<SCATTER_COLOR_NUM; ++c)
			{
                if (this.chart != null) {
                    this.chart.removeSeries((this.series[c]), false);
                    this.series[c] = null;
                }
            }
            this.chart.removeSeries((this.seriesSin), false);
            this.chart.remove();
            this.chart = null;
            this.series = null;
            this.seriesSin = null;
            this.data = null;
        };

        charNQF.clear = function()
		{
            for (var c=0; c<SCATTER_COLOR_NUM; ++c)
			{
                this.data[c] = [];
                this.series[c].getDataHandler().setArray(this.data[c]);
                this.series[c].reload();
            }
        };
 
        charNQF.draw = function(rdata)
		{
            var height = this.chart.__draw_area.height;
            var hQ = (Math.abs(rdata.q_max)>Math.abs(rdata.q_min) ? Math.abs(rdata.q_max) : Math.abs(rdata.q_min));
            hQ /= 0.9;
            this.extremesY.max = hQ;
            this.extremesY.min = -hQ;
            var dQ = 1;
            var Hf = new Array(MAX_F);
            for (var f=0; f<MAX_F; ++f)
			{
                Hf[f] = new Array();
            }
			
            for (var i=0, q=0, f=0; i<rdata.data.length; ++i)
			{
                f = Math.round(rdata.data[i][1]); // '->deg
                q = Math.round(rdata.data[i][0]/dQ);
                if (0 == Hf[f].length)
				{
                    Hf[f].push({Q:q, N:1});
                }
				else
				{
                    for (var j=0; j<Hf[f].length; ++j)
					{
                        if (Hf[f][j].Q == q)
						{
                            Hf[f][j].N++;
                            break;
                        }
                    }
                    if (j == Hf[f].length)
					{
                        Hf[f].push({Q:q, N:1});
                    }
                }
            }
			
            for (var f=0; f<MAX_F; ++f)
			{
                for (var i=0; i<Hf[f].length; ++i)
				{
                    for (var c=0; c<SCATTER_COLOR_NUM; ++c)
					{
                        if (SCATTER_COLOR_MAP[c].min<=Hf[f][i].N && Hf[f][i].N<=SCATTER_COLOR_MAP[c].max)
						{
                            this.data[c].push([f, Hf[f][i].Q, Hf[f][i].N]);
                            break;
                        }
                    }
                }
            }
			
            this.chart.axis_left.setExtremes(-hQ, hQ);
            for (var c=0; c<SCATTER_COLOR_NUM; ++c)
			{
                this.series[c].getDataHandler().setArray(this.data[c]);
                this.series[c].reload();
            }
        };
        return charNQF;
}
//局放全图分析-NF
function apd_nf() {
        var chartNF = new Object();
        chartNF.chart = null;
        chartNF.data = new Array();
        chartNF.dataSin = new Array();
        chartNF.series = new Array();
        chartNF.seriesSin = new Array();
        chartNF.extremesX = {min:-1, max:-1};
        chartNF.extremesY = {min:-1, max:-1};
        chartNF.init = function(id_div,p) {
            this.chart = new EJSC.Chart(id_div, {
                title: chartTitle('N-φ图',CABLE_PHASE_COLOR[p]),
                show_titlebar:true,
                show_legend: false,
                show_messages: true,
                allow_mouse_wheel_zoom: true,
                allow_interactivity: true,
                allow_move: true,
                allow_zoom: true,
                border: {thickness:5, color:'#000000', opacity:50, show:true},
                background: {color:BGCOLOR, opacity:30, includeTitle:false},
                axis_bottom: {
                    caption: styleStr('相位[度]','#15428b'),
                    crosshair: {show: false},
                    min_extreme: 0,
                    max_extreme: 360
                },
                axis_left: {
                    caption: styleStr('放电次数[次]','#15428b'),
                    crosshair: {show: false},
                    min_extreme: 0,
                    max_extreme: 100,
                    size: 30
                }
            });
			
            var self = this;
            this.seriesSin = this.chart.addSeries(new EJSC.FunctionSeries(
                    function(x)
					{
                        var ex = self.chart.axis_left.getExtremes();
                        var offset = (ex.max+ex.min)/2;
                        var A = (ex.max-ex.min)*0.4;
                        return offset + A * Math.sin(Math.PI*x/180);
                    }, {color: "#6B8E23", lineWidth: 1.0, hint_string: '相位:[x]', autosort:false})
            );
			
			this.series = this.chart.addSeries(new EJSC.BarSeries(new EJSC.ArrayDataHandler(this.data), {
				color: "#0000ff",
				pointStyle: "diamond",
				pointSize: 1.5,
				hint_string: '相位:[x]°<br/>'+'放电次数:[y]次',
				autosort:false
			}));  
        };
        chartNF.destroy = function() {
            if (this.chart != null) {
                this.chart.removeSeries((this.series), false);
                this.series = null;
                this.chart.removeSeries((this.seriesSin), false);
                this.seriesSin = null;
            }
            this.chart.remove();
            this.chart = null;
            this.data = null;
            this.dataSin = null;
        };

        chartNF.clear = function() {
                this.data = [];
                this.series.getDataHandler().setArray(this.data);
                this.series.reload();
        };
 
        chartNF.draw = function(rdata) {
            for (var i=0; i<rdata.data.length; ++i) {
                this.data.push([rdata.data[i][0], rdata.data[i][1]]);
            }
            var min_x = rdata.X_min/1.01, max_x = rdata.X_max/0.99;
            var min_y = rdata.Y_min/1.01, max_y = rdata.Y_max/0.99;
            if (this.extremesX.min<0 || this.extremesX.min>min_x) {
                this.extremesX.min = min_x;
            }
            if (this.extremesX.max<0 || this.extremesX.max<max_x) {
                this.extremesX.max = max_x;
            }
            if (this.extremesY.min<0 || this.extremesY.min>min_y) {
                this.extremesY.min = min_y;
            }
            if (this.extremesY.max<0 || this.extremesY.max<max_y) {
                this.extremesY.max = max_y;
            }
            this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
            this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
            this.series.getDataHandler().setArray(this.data);
            this.series.reload();
        };
        return chartNF;
}

//局放全图分析-QF
function apd_qf() {
        var chartQF = new Object();
        chartQF.chart = null;
        chartQF.data = new Array();
        chartQF.dataSin = new Array();
        chartQF.series = new Array();
        chartQF.seriesSin = new Array();
        chartQF.extremesX = {min:-1, max:-1};
        chartQF.extremesY = {min:-1, max:-1};
        chartQF.init = function(id_div,p) {
            this.chart = new EJSC.Chart(id_div, {
                title: chartTitle('Q-φ图',CABLE_PHASE_COLOR[p]),
                show_titlebar:true,
                show_legend: false,
                show_messages: true,
                allow_mouse_wheel_zoom: true,
                allow_interactivity: true,
                allow_move: true,
                allow_zoom: true,
                border: {thickness:5, color:'#000000', opacity:50, show:true},
                background: {color:BGCOLOR, opacity:30, includeTitle:false},
                axis_bottom: {
                    caption: styleStr('相位[度]','#15428b'),
                    crosshair: {show: false},
                    min_extreme: 0,
                    max_extreme: 360
                },
                axis_left: {
                    caption: styleStr('放电量[pC]','#15428b'),
                    crosshair: {show: false},
                    min_extreme: 0,
                    max_extreme: 100,
                    size: 30
                }
            });
            var self = this;
            this.seriesSin = this.chart.addSeries(new EJSC.FunctionSeries(
                    function(x) {
                        var ex = self.chart.axis_left.getExtremes();
                        var offset = (ex.max+ex.min)/2;
                        var A = (ex.max-ex.min)*0.4;
                        return offset + A * Math.sin(Math.PI*x/180);
                    }, {color: "#6B8E23", lineWidth: 1.0, hint_string: '相位:[x]', autosort:false})
            );
                this.series = this.chart.addSeries(new EJSC.BarSeries(new EJSC.ArrayDataHandler(this.data), {
                    color: "#0000ff",
                    pointStyle: "diamond",
                    pointSize: 1.5,
                    hint_string: '相位:[x]°<br/>'+'放电量:[y]pC',
                    autosort:false
                }));  
        };
        chartQF.destroy = function() {
            if (this.chart != null) {
                this.chart.removeSeries((this.series), false);
                this.series = null;
                this.chart.removeSeries((this.seriesSin), false);
                this.seriesSin = null;
            }
            this.chart.remove();
            this.chart = null;
            this.data = null;
            this.dataSin = null;
        };

        chartQF.clear = function() {
                this.data = [];
                this.series.getDataHandler().setArray(this.data);
                this.series.reload();
        };
 
        chartQF.draw = function(rdata) {
            for (var i=0; i<rdata.data.length; ++i) {
                this.data.push([rdata.data[i][0], rdata.data[i][1]]);
            }
            var min_x = rdata.X_min/1.01, max_x = rdata.X_max/0.99;
            var min_y = rdata.Y_min/1.01, max_y = rdata.Y_max/0.99;
            if (this.extremesX.min<0 || this.extremesX.min>min_x) {
                this.extremesX.min = min_x;
            }
            if (this.extremesX.max<0 || this.extremesX.max<max_x) {
                this.extremesX.max = max_x;
            }
            if (this.extremesY.min<0 || this.extremesY.min>min_y) {
                this.extremesY.min = min_y;
            }
            if (this.extremesY.max<0 || this.extremesY.max<max_y) {
                this.extremesY.max = max_y;
            }
            this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
            this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
            this.series.getDataHandler().setArray(this.data);
            this.series.reload();
        };

        return chartQF;
}

function resizeNQF()
{
	var width = $(document.body).width();
	var height = $(document.body).height();
	setDivWH("nqf",width/2,height);
	setDivWH("nf",width/2,height);
	setDivWH("qf",width/2,height);
	setDivWH("nq",width/2,height);    
}

function loadAllNQF()
{
	if(g_chartNqf_a.chart == null)
			g_chartNqf_a.init("nqf_a",0);
	else
			g_chartNqf_a.destroy();
	
	if(g_chartNf_a.chart == null)
			g_chartNf_a.init("nf_a",0);
	else
			g_chartNf_a.destroy();

	if(g_chartQf_a.chart == null)
			g_chartQf_a.init("qf_a",0);
	else
			g_chartQf_a.destroy();
}

function showNF()
{
     $("#qf").hide();
     $("#nq").hide();
     $("#nf").hide();

     $("#nf").show();
}

function showQF()
{
     $("#nf").hide();
     $("#nq").hide();
     $("#qf").hide();

     $("#qf").show();
}

function clearNQF()
{
	g_chartNqf_a.clear();
	g_chartNf_a.clear();
	g_chartQf_a.clear(); 
}

function drawNQF(rdata,p)
{
	g_chartNqf_a.draw(rdata);
}

function drawNF(rdata,p)
{
	g_chartNf_a.draw(rdata);
}

function drawQF(rdata,p)
{
	g_chartQf_a.draw(rdata);
}

function redrawNF()
{
	g_chartNf_a.chart.redraw(); 
}

function redrawQF()
{
	g_chartQf_a.chart.redraw(); 
}

