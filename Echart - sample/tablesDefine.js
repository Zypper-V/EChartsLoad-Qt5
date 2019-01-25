var CLUSTER_NUM = 8;
var CLUSTER_COLOR = ['#222222', '#ff0000', '#0000ff', '#00ff00', '#ff00ff', '#00ffff', '#ffa900', '#800080'];
var CABLE_PHASE_NUM = 3;
var CABLE_PHASE_COLOR = ['#ffaa00', '#00ff00', '#ff0000'];
var OP_CYCLE_SELECT = 0,
    OP_RECT_SELECT = 1;
var PHASE_NAME = ['A相', 'B相', 'C相'];
var PHASE_NAME_PO = ['正极', '负极'];
var JOINT_MONIT_TYPE = ['电流', '电压', '温度', '湿度'];
var JOINT_MONIT_TYPE_UNIT = ['A', 'V', '℃', '%'];
var CABLE_CORE_NAME = ['缆表曲线', '缆芯曲线'];
var CABLE_CORE_COLOR = ['#0000ff', '#ff0000'];
var APD_TIMEQ_NAME = ['放电量', '放电次数'];
var APD_TIMEQ_COLOR = ['#0000ff', '#00ff00'];
var LOCATION_CURVE_NUM = 5;
var LOCATION_CURVE_TYPE = ['1次', '2-3次', '4-6次', '7-9次', '>=10次'];
var LOCATION_CURVE_COLOR = ['#7f94cc', '#51c5dd', '#00a652', '#f9a96f', '#eb1b3b'];
var MAX_F = 360;
var SCATTER_COLOR_MAP = [{
        min: 1,
        max: 1,
        color: '#7f94cc'
    }, {
        min: 2,
        max: 3,
        color: '#51c5dd'
    },
    {
        min: 4,
        max: 6,
        color: '#00a652'
    }, {
        min: 7,
        max: 9,
        color: '#f9a96f'
    }, {
        min: 10,
        max: 2147483647,
        color: '#eb1b3b'
    }
];
var SCATTER_COLOR_NUM = SCATTER_COLOR_MAP.length;



var STR = {
    PHASE: '相位',
    PHASE_LINE: '相线',
    Q: '放电量',
    N_TH: '次',
    N: '放电次数',
    RANGE: '幅值',
    RATE: '频率',
    CABLE_DTS_CURVE: '电缆缆表不同位置温度曲线',
    CABLE_DTS_CURVE_POINT: '电缆缆表某点随时间温度曲线',
    CABLE_DTS_DISTANCE: '位置',
    CABLE_DTS_TEMP: '温度',
    CABLE_JOINT_CURVE: '电缆接头监测曲线',
    DATA_TIME: '时间',
    TIME_DOMAIN_CURVE: '信号时域图',
    RATE_CURVE: '频域图',
    TIME_DOMAIN_XAXIS: '时刻/ns',
    TIME_Q_CURVE: '放电趋势图',
    CABLE_CORE_CURVE: '电缆缆表缆芯对比曲线',
    APD_LOCATION_Q: '局放定位分析-放电量图',
    APD_LOCATION_N: '局放定位分析-放电次数图',
    PLEASE_WAIT: '请稍候...',
    ENV_TEMP: '温度',
    CURRENT_PLAN: '模拟电流计划曲线',
    CURRENT: '电流'
};

//测试数据
var g_testData = {
    data: [
        [98, 266],
        [33, 81],
        [37, 76],
        [39, 63],
        [56, 23],
        [40, 36],
        [40, 68],
        [36, 35],
        [37, 62], , [31, 50],
        [35, 51],
        [31, 43],
        [32, 74],
        [31, 92],
        [31, 1]
    ],
    q_min: 0,
    q_max: 327
};
var g_NFData = {
    data: [
        [98, 266],
        [33, 81],
        [37, 76],
        [39, 63],
        [34, null],
        [45, null],
        [56, 23],
        [40, 36],
        [40, 68],
        [36, 35],
        [37, 62]
    ],
    X_min: 0,
    X_max: 360,
    Y_min: 23,
    Y_max: 266
};
var g_QFData = {
    data: [
        [98, 266],
        [33, 81],
        [37, 76],
        [39, 63],
        [56, 23],
        [40, 36],
        [40, 68],
        [36, 35],
        [37, 62]
    ],
    X_min: 0,
    X_max: 360,
    Y_min: 23,
    Y_max: 266
};
var g_NQData = {
    data: [
        [98, 266],
        [33, 81],
        [37, 76],
        [39, 63],
        [56, 23],
        [40, 36],
        [40, 68],
        [36, 35],
        [37, 62]
    ],
    X_min: 33,
    X_max: 98,
    Y_min: 23,
    Y_max: 266
};

var g_cableDtsChartPoint = dts_three_phase_chart_point();
var g_cableDtsChart = dts_three_phase_chart();
var g_cableJointChart = cable_joint_chart();
var g_cableCoreChart = cable_core_chart();
var g_timeDomainChart_a = time_domain_chart();
var g_timeDomainChart_b = time_domain_chart();
var g_timeDomainChart_c = time_domain_chart();
var g_rateChart_a = apd_rate_chart();
var g_rateChart_b = apd_rate_chart();
var g_rateChart_c = apd_rate_chart();
var g_timeQChart_a = apd_timeQ_chart();
var g_timeQChart_b = apd_timeQ_chart();
var g_timeQChart_c = apd_timeQ_chart();
var g_locationQ = apd_location_Q_chart();
var g_locationN = apd_location_N_chart();
var g_chartNqf_a = apd_nqf();
var g_chartNqf_b = apd_nqf();
var g_chartNqf_c = apd_nqf();
var g_chartNf_a = apd_nf();
var g_chartNf_b = apd_nf();
var g_chartNf_c = apd_nf();
var g_chartQf_a = apd_qf();
var g_chartQf_b = apd_qf();
var g_chartQf_c = apd_qf();
var g_chartNq_a = apd_NQ();
var g_chartNq_b = apd_NQ();
var g_chartNq_c = apd_NQ();
var g_currentChart = Current_Plan_Chart();

function styleStr(str, color, font_weight, font_size) {
    var s = '<span style="';
    if (color != undefined) {
        s += 'color:' + color + ';';
    }
    if (font_weight != undefined) {
        s += 'font-weight:' + font_weight + ';';
    }
    if (font_size != undefined) {
        s += 'font-size:' + font_size + ';';
    }
    s += '">' + str + '</span>';
    return s;
}

function clusterString(c, s) {
    return styleStr(s, CLUSTER_COLOR[c]);
}

function chartTitle(s, color) {
    return styleStr('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + s, color, 'bold', '14px');
}

function scatterLegend(c) {
    if (SCATTER_COLOR_MAP[c].min == SCATTER_COLOR_MAP[c].max) {
        return SCATTER_COLOR_MAP[c].min + STR.N_TH;
    } else if (2147483647 == SCATTER_COLOR_MAP[c].max) {
        return '>' + SCATTER_COLOR_MAP[c].min + STR.N_TH;
    } else {
        return SCATTER_COLOR_MAP[c].min + '-' + SCATTER_COLOR_MAP[c].max + STR.N_TH;
    }
}

function legendNQF() {
    var leg = '';
    for (var g = 0; g < SCATTER_COLOR_MAP.length; ++g) {
        leg += styleStr('&nbsp;■' + scatterLegend(g), SCATTER_COLOR_MAP[g].color, undefined, '12px');
    }
    return leg;
}

function setDivWH(id_div, w, h) {
    document.getElementById(id_div).style.width = w + 'px';
    document.getElementById(id_div).style.height = h + 'px';
}

function loadCurrentPlanChart() {
    if (g_currentChart.chart == null)
        g_currentChart.init("current_plan_chart");
    else
        g_currentChart.destroy();
}

function drawCurrentPlanChart(rdata) {
    g_currentChart.draw(rdata);
}

function clearCurrentPlanChart() {
    g_currentChart.clear();
}

function resizeCurrentPlanChart() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("current_plan_chart", width - 30, height - 25);
}

// function loadCableDtsChart()
// {
//         if(g_cableDtsChart.chart == null)
//                 g_cableDtsChart.init("cable_dts_chart");
//         else
//         	g_cableDtsChart.destroy();
// }

function loadCableDtsChart(mode) {
    if (g_cableDtsChart.chart == null) {
        g_cableDtsChart.init("cable_dts_chart");
        g_cableDtsChart.setDisplayMode(mode);
    } else
        g_cableDtsChart.destroy();
}

function redrawCableDtsLegend(mode) {
    g_cableDtsChart.setDisplayMode(mode);
}

function redrawCableDtsChart() {
    g_cableDtsChart.chart.redraw();
}

function drawOnePhaseCurve(rdata, p) {
    g_cableDtsChart.draw(rdata, p);
}

function resizeCableDtsChart() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("cable_dts_chart", width - 30, height - 25);
}

function clearDtsCurve() {
    g_cableDtsChart.clear();
}

function loadCableDtsChartPoint() {
    if (g_cableDtsChartPoint.chart == null)
        g_cableDtsChartPoint.init("cable_dts_chart_point");
    else
        g_cableDtsChartPoint.destroy();
}

function redrawCableDtsChartPoint() {
    g_cableDtsChartPoint.chart.redraw();
}

function drawOnePhaseCurvePoint(rdata, p) {
    g_cableDtsChartPoint.draw(rdata, p);
}

function resizeCableDtsChartPoint() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("cable_dts_chart_point", width - 30, height - 25);
}

function clearDtsCurvePoint() {
    g_cableDtsChartPoint.clear();
}

function loadCableJointChart(t) {
    if (g_cableJointChart.chart == null)
        g_cableJointChart.init("cable_joint_chart", t);
    else
        g_cableJointChart.destroy();
}

function clearCableJointCurve() {
    g_cableJointChart.destroy();
}

function redrawCableJointCurve() {
    g_cableJointChart.chart.redraw();
}

function resizeCableJointChart() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("cable_joint_chart", width - 30, height - 25);
}

function drawJointCurve(rdata, p) {
    g_cableJointChart.draw(rdata, p);
}

function loadCableCoreChart() {
    if (g_cableCoreChart.chart == null)
        g_cableCoreChart.init("cable_core_chart");
    else
        g_cableCoreChart.destroy();
}

function redrawCoreCurve() {
    g_cableCoreChart.chart.redraw();
}

function drawCoreCurve(rdata, p) {
    g_cableCoreChart.draw(rdata, p);
}

function resizeCableCoreChart() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("cable_core_chart", width - 30, height - 25);
}

function clearCoreCurve() {
    g_cableCoreChart.destroy();
}

function loadTimeChart(t) {
    if (t == 0) {
        if (g_timeDomainChart_a.chart == null)
            g_timeDomainChart_a.init("time_domain_a", t);
        else
            g_timeDomainChart_a.destroy();
        g_timeDomainChart_a.setAxisBottomVisible(0);
    } else if (t == 1) {
        if (g_timeDomainChart_b.chart == null)
            g_timeDomainChart_b.init("time_domain_b", t);
        else
            g_timeDomainChart_b.destroy();
        g_timeDomainChart_b.setAxisBottomVisible(0);
    } else {
        if (g_timeDomainChart_c.chart == null)
            g_timeDomainChart_c.init("time_domain_c", t);
        else
            g_timeDomainChart_c.destroy();
        g_timeDomainChart_c.setAxisBottomVisible(1);
    }

}

function onAfterZoomChartTimeDomain(chart) {
    var zoom = chart.axis_bottom.getZoom();
    zoomTimeDomainChartPos(zoom.min, zoom.max);
}

function onBeforeDblClickChartTimeDomain(chart) {
    zoomTimeDomainChartPos(g_timeDomainChart_a.extremesX.min, g_timeDomainChart_a.extremesX.max);
    zoomTimeDomainChartPos(g_timeDomainChart_d.extremesX.min, g_timeDomainChart_b.extremesX.max);
    zoomTimeDomainChartPos(g_timeDomainChart_c.extremesX.min, g_timeDomainChart_c.extremesX.max);
}

function zoomTimeDomainChartPos(minL, maxL) {
    if (minL != -1 && maxL != -1) {
        g_timeDomainChart_a.chart.axis_left.setExtremes(g_timeDomainChart_a.extremesY.min, g_timeDomainChart_a.extremesY.max);
        g_timeDomainChart_a.chart.axis_bottom.setExtremes(minL, maxL);
        g_timeDomainChart_a.chart.redraw();
        g_timeDomainChart_b.chart.axis_left.setExtremes(g_timeDomainChart_b.extremesY.min, g_timeDomainChart_b.extremesY.max);
        g_timeDomainChart_b.chart.axis_bottom.setExtremes(minL, maxL);
        g_timeDomainChart_b.chart.redraw();
        g_timeDomainChart_c.chart.axis_left.setExtremes(g_timeDomainChart_c.extremesY.min, g_timeDomainChart_c.extremesY.max);
        g_timeDomainChart_c.chart.axis_bottom.setExtremes(minL, maxL);
        g_timeDomainChart_c.chart.redraw();
    }
}

function drawTimeDomainCurve(rdata, p) {
    if (p == 0)
        g_timeDomainChart_a.draw(rdata);
    else if (p == 1)
        g_timeDomainChart_b.draw(rdata);
    else
        g_timeDomainChart_c.draw(rdata);
}

function redrawTimeDomainChart() {
    g_timeDomainChart_a.chart.redraw();
    g_timeDomainChart_b.chart.redraw();
    g_timeDomainChart_c.chart.redraw();
}


function loadRateChart(t) {
    if (t == 0) {
        if (g_rateChart_a.chart == null)
            g_rateChart_a.init("rate_domain_a", t);
        else
            g_rateChart_a.destroy();
        g_rateChart_a.setAxisBottomVisible(0);
    } else if (t == 1) {
        if (g_rateChart_b.chart == null)
            g_rateChart_b.init("rate_domain_b", t);
        else
            g_rateChart_b.destroy();
        g_rateChart_b.setAxisBottomVisible(0);
    } else {
        if (g_rateChart_c.chart == null)
            g_rateChart_c.init("rate_domain_c", t);
        else
            g_rateChart_c.destroy();
        g_rateChart_c.setAxisBottomVisible(1);
    }

}

function onAfterZoomChartRateDomain(chart) {
    var zoom = chart.axis_bottom.getZoom();
    zoomRateDomainChartPos(zoom.min, zoom.max);
}

function onBeforeDblClickChartRateDomain(chart) {
    zoomRateDomainChartPos(g_rateChart_a.extremesX.min, g_rateChart_a.extremesX.max);
    zoomRateDomainChartPos(g_rateChart_b.extremesX.min, g_rateChart_b.extremesX.max);
    zoomRateDomainChartPos(g_rateChart_c.extremesX.min, g_rateChart_c.extremesX.max);
}

function zoomRateDomainChartPos(minL, maxL) {
    if (minL != -1 && maxL != -1) {
        g_rateChart_a.chart.axis_left.setExtremes(g_rateChart_a.extremesY.min, g_rateChart_a.extremesY.max);
        g_rateChart_a.chart.axis_bottom.setExtremes(minL, maxL);
        g_rateChart_a.chart.redraw();
        g_rateChart_b.chart.axis_left.setExtremes(g_rateChart_b.extremesY.min, g_rateChart_b.extremesY.max);
        g_rateChart_b.chart.axis_bottom.setExtremes(minL, maxL);
        g_rateChart_b.chart.redraw();
        g_rateChart_c.chart.axis_left.setExtremes(g_rateChart_c.extremesY.min, g_rateChart_c.extremesY.max);
        g_rateChart_c.chart.axis_bottom.setExtremes(minL, maxL);
        g_rateChart_c.chart.redraw();
    }
}

function redrawRateChart() {
    g_rateChart_a.chart.redraw();
    g_rateChart_b.chart.redraw();
    g_rateChart_c.chart.redraw();
}

function drawRateDomainCurve(rdata, p) {
    if (p == 0)
        g_rateChart_a.draw(rdata);
    else if (p == 1)
        g_rateChart_b.draw(rdata);
    else
        g_rateChart_c.draw(rdata);
}

function showRateChart() {
    $("#time_domain").hide();
    $("#rate_domain").hide();

    $("#rate_domain").show();
}

function showTimeChart() {
    $("#time_domain").hide();
    $("#rate_domain").hide();

    $("#time_domain").show();
}

function resizeTimeDoMain() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("time_domain_a", width - 40, (height - 15) / 3 - 15);
    setDivWH("time_domain_b", width - 40, (height - 15) / 3 - 15);
    setDivWH("time_domain_c", width - 40, (height - 15) / 3 + 30);

    setDivWH("rate_domain_a", width - 40, (height - 15) / 3 - 15);
    setDivWH("rate_domain_b", width - 40, (height - 15) / 3 - 15);
    setDivWH("rate_domain_c", width - 40, (height - 15) / 3 + 30);
}

function clearTimeDomainCurve() {
    g_timeDomainChart_a.clear();
    g_timeDomainChart_b.clear();
    g_timeDomainChart_c.clear();
    g_rateChart_a.clear();
    g_rateChart_b.clear();
    g_rateChart_c.clear();
}

function loadTimeQChart(p) {
    if (p == 0) {
        if (g_timeQChart_a.chart == null)
            g_timeQChart_a.init("time_q_a", p);
        else
            g_timeQChart_a.destroy();
    } else if (p == 1) {
        if (g_timeQChart_b.chart == null)
            g_timeQChart_b.init("time_q_b", p);
        else
            g_timeQChart_b.estroy();
    } else {
        if (g_timeQChart_c.chart == null)
            g_timeQChart_c.init("time_q_c", p);
        else
            g_timeQChart_c.destroy();
    }
}

function clearTimeQCurve() {
    g_timeQChart_a.destroy();
    g_timeQChart_b.destroy();
    g_timeQChart_c.destroy();
}

function redrawTimeQCurve() {
    g_timeQChart_a.chart.redraw();
    g_timeQChart_b.chart.redraw();
    g_timeQChart_c.chart.redraw();
}

function drawTimeQCurve(rdata, p, t) {
    if (p == 0)
        g_timeQChart_a.draw(rdata, t);
    else if (p == 1)
        g_timeQChart_b.draw(rdata, t);
    else
        g_timeQChart_c.draw(rdata, t);
}

function resizeTimeQ() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("time_q_a", width - 40, (height - 15) / 3);
    setDivWH("time_q_b", width - 40, (height - 15) / 3);
    setDivWH("time_q_c", width - 40, (height - 15) / 3);
}

function onAfterZoomChartTimeQ(chart) {
    var zoom = chart.axis_bottom.getZoom();
    zoomTimeQChartPos(zoom.min, zoom.max);
}

function onBeforeDblClickChartTimeQ(chart) {
    zoomTimeQChartPos(g_timeQChart_a.extremesX.min, g_timeQChart_a.extremesX.max);
    zoomTimeQChartPos(g_timeQChart_b.extremesX.min, g_timeQChart_b.extremesX.max);
    zoomTimeQChartPos(g_timeQChart_c.extremesX.min, g_timeQChart_c.extremesX.max);
}

function zoomTimeQChartPos(minX, maxX) {
    g_timeQChart_a.chart.axis_left.setExtremes(g_timeQChart_a.extremesLY.min, g_timeQChart_a.extremesLY.max);
    g_timeQChart_a.chart.axis_right.setExtremes(g_timeQChart_a.extremesRY.min, g_timeQChart_a.extremesRY.max);
    g_timeQChart_a.chart.axis_bottom.setExtremes(minX, maxX);
    g_timeQChart_a.chart.redraw();

    g_timeQChart_b.chart.axis_left.setExtremes(g_timeQChart_b.extremesLY.min, g_timeQChart_b.extremesLY.max);
    g_timeQChart_b.chart.axis_right.setExtremes(g_timeQChart_b.extremesRY.min, g_timeQChart_b.extremesRY.max);
    g_timeQChart_b.chart.axis_bottom.setExtremes(minX, maxX);
    g_timeQChart_b.chart.redraw();

    g_timeQChart_c.chart.axis_left.setExtremes(g_timeQChart_c.extremesLY.min, g_timeQChart_c.extremesLY.max);
    g_timeQChart_c.chart.axis_right.setExtremes(g_timeQChart_c.extremesRY.min, g_timeQChart_c.extremesRY.max);
    g_timeQChart_c.chart.axis_bottom.setExtremes(minX, maxX);
    g_timeQChart_c.chart.redraw();
}

//加载定位分析图表
function loadLocationChart() {
    if (g_locationQ.chart == null)
        g_locationQ.init("location_q");
    else
        g_locationQ.destroy();
    if (g_locationN.chart == null)
        g_locationN.init("location_n");
    else
        g_locationN.destroy();

}

function resizeLocation() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("location_q", width - 40, (height - 15) / 2);
    setDivWH("location_n", width - 40, (height - 15) / 2);
}

//清空定位分析曲线
function clearLocationNQ() {
    g_locationQ.destroy();
    g_locationN.destroy();
}

function redrawLocationNQ() {
    g_locationQ.chart.redraw();
    g_locationN.chart.redraw();
}

function drawLocationQ(rdata, c) {
    g_locationQ.draw(rdata, c);
}

function drawLocationN(rdata, c) {
    g_locationN.draw(rdata, c);
}

function onAfterZoomChartLQ(chart) {
    var zoom = chart.axis_bottom.getZoom();
    zoomChartPos(zoom.min, zoom.max);
}

function onBeforeDblClickChartLQ(chart) {
    zoomChartPos(g_locationQ.extremesX.min, g_locationQ.extremesX.max);
}

function onAfterZoomChartLN(chart) {
    var zoom = chart.axis_bottom.getZoom();
    zoomChartPos(zoom.min, zoom.max);
}

function onBeforeDblClickChartLN(chart) {
    zoomChartPos(g_locationN.extremesX.min, g_locationN.extremesX.max);
}

function zoomChartPos(minL, maxL) {
    g_locationQ.chart.axis_left.setExtremes(g_locationQ.extremesY.min, g_locationQ.extremesY.max);
    g_locationQ.chart.axis_bottom.setExtremes(minL, maxL);
    g_locationQ.chart.redraw();
    g_locationN.chart.axis_left.setExtremes(g_locationN.extremesY.min, g_locationN.extremesY.max);
    g_locationN.chart.axis_bottom.setExtremes(minL, maxL);
    g_locationN.chart.redraw();
}

function resizeNQF() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    setDivWH("nqf", width / 2 - 10, height);
    setDivWH("nqf_a", width / 2 - 10, (height - 15) / 3);
    setDivWH("nqf_b", width / 2 - 10, (height - 15) / 3);
    setDivWH("nqf_c", width / 2 - 10, (height - 15) / 3);

    setDivWH("nf", width / 2 - 20, height);
    setDivWH("nf_a", width / 2 - 30, (height - 15) / 3);
    setDivWH("nf_b", width / 2 - 30, (height - 15) / 3);
    setDivWH("nf_c", width / 2 - 30, (height - 15) / 3);

    setDivWH("qf", width / 2 - 20, height);
    setDivWH("qf_a", width / 2 - 30, (height - 15) / 3);
    setDivWH("qf_b", width / 2 - 30, (height - 15) / 3);
    setDivWH("qf_c", width / 2 - 30, (height - 15) / 3);

    setDivWH("nq", width / 2 - 20, height);
    setDivWH("nq_a", width / 2 - 30, (height - 15) / 3);
    setDivWH("nq_b", width / 2 - 30, (height - 15) / 3);
    setDivWH("nq_c", width / 2 - 30, (height - 15) / 3);
}

function loadAllNQF() {
    if (g_chartNqf_a.chart == null)
        g_chartNqf_a.init("nqf_a", 0);
    else
        g_chartNqf_a.destroy();
    if (g_chartNqf_b.chart == null)
        g_chartNqf_b.init("nqf_b", 1);
    else
        g_chartNqf_b.destroy();
    if (g_chartNqf_c.chart == null)
        g_chartNqf_c.init("nqf_c", 2);
    else
        g_chartNqf_c.destroy();

    if (g_chartNf_a.chart == null)
        g_chartNf_a.init("nf_a", 0);
    else
        g_chartNf_a.destroy();
    if (g_chartNf_b.chart == null)
        g_chartNf_b.init("nf_b", 1);
    else
        g_chartNf_b.destroy();
    if (g_chartNf_c.chart == null)
        g_chartNf_c.init("nf_c", 2);
    else
        g_chartNf_c.destroy();
    if (g_chartNq_a.chart == null)
        g_chartNq_a.init("nq_a", 0);
    else
        g_chartNq_a.destroy();
    if (g_chartNq_b.chart == null)
        g_chartNq_b.init("nq_b", 1);
    else
        g_chartNq_b.destroy();
    if (g_chartNq_c.chart == null)
        g_chartNq_c.init("nq_c", 2);
    else
        g_chartNq_c.destroy();
    if (g_chartQf_a.chart == null)
        g_chartQf_a.init("qf_a", 0);
    else
        g_chartQf_a.destroy();
    if (g_chartQf_b.chart == null)
        g_chartQf_b.init("qf_b", 1);
    else
        g_chartQf_b.destroy();
    if (g_chartQf_c.chart == null)
        g_chartQf_c.init("qf_c", 2);
    else
        g_chartQf_c.destroy();
}

function showNF() {
    $("#qf").hide();
    $("#nq").hide();
    $("#nf").hide();

    $("#nf").show();
}

function showNQ() {
    $("#nf").hide();
    $("#qf").hide();
    $("#nq").hide();

    $("#nq").show();
}

function showQF() {
    $("#nf").hide();
    $("#nq").hide();
    $("#qf").hide();

    $("#qf").show();
}

function clearNQF() {
    g_chartNqf_a.clear();
    g_chartNqf_b.clear();
    g_chartNqf_c.clear();
    g_chartNf_a.clear();
    g_chartNf_b.clear();
    g_chartNf_c.clear();
    g_chartQf_a.clear();
    g_chartQf_b.clear();
    g_chartQf_c.clear();
    g_chartNq_a.clear();
    g_chartNq_b.clear();
    g_chartNq_c.clear();
}


function drawNF(rdata, p) {
    if (p == 0) {
        g_chartNf_a.draw(rdata);
    } else if (p == 1) {
        g_chartNf_b.draw(rdata);
    } else {
        g_chartNf_c.draw(rdata);
    }
}

function drawNQF(rdata, p) {
    if (p == 0) {
        g_chartNqf_a.draw(rdata);
    } else if (p == 1) {
        g_chartNqf_b.draw(rdata);
    } else {
        g_chartNqf_c.draw(rdata);
    }
}



function drawNQ(rdata, p) {
    if (p == 0) {
        g_chartNq_a.draw(rdata);
    } else if (p == 1) {
        g_chartNq_b.draw(rdata);
    } else {
        g_chartNq_c.draw(rdata);
    }
}


function drawQF(rdata, p) {
    if (p == 0) {
        g_chartQf_a.draw(rdata);
    } else if (p == 1) {
        g_chartQf_b.draw(rdata);
    } else {
        g_chartQf_c.draw(rdata);
    }
}

function redrawNF() {
    g_chartNf_a.chart.redraw();
    g_chartNf_b.chart.redraw();
    g_chartNf_c.chart.redraw();
}

function redrawNQ() {
    g_chartNq_a.chart.redraw();
    g_chartNq_b.chart.redraw();
    g_chartNq_c.chart.redraw();
}


function redrawQF() {
    g_chartQf_a.chart.redraw();
    g_chartQf_b.chart.redraw();
    g_chartQf_c.chart.redraw();
}


//电缆缆表三相曲线
function dts_three_phase_chart() {
    var DtsTPChart = new Object();
    DtsTPChart.chart = null;
    DtsTPChart.data = new Array(CABLE_PHASE_NUM);
    DtsTPChart.series = new Array(CABLE_PHASE_NUM);
    DtsTPChart.pointBeg = null;
    DtsTPChart.pointEnd = null;
    DtsTPChart.extremesX = {
        min: -1,
        max: -1
    };
    DtsTPChart.extremesY = {
        min: -1,
        max: -1
    };
    DtsTPChart.init = function (id_div) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: true,
            legend_title: '图例',
            title: STR.CABLE_DTS_CURVE, //chartTitle('#15428b'),
            show_titlebar: false,
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.CABLE_DTS_DISTANCE + '[米]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100
            },
            axis_left: {
                caption: styleStr(STR.CABLE_DTS_TEMP + '[℃]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 40
            }
        });
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.data[c] = new Array();
            this.series[c] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                color: CABLE_PHASE_COLOR[c],
                title: PHASE_NAME[c],
                drawPoints: true,
                pointStyle: "diamond",
                pointSize: 1.5,
                hint_string: STR.CABLE_DTS_DISTANCE + ':[x]米<br/>' + STR.CABLE_DTS_TEMP + ':[y]℃',
                autosort: false
            }));
        }
    };

    DtsTPChart.destroy = function () {
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    DtsTPChart.clear = function () {
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    DtsTPChart.draw = function (rdata, c) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data[c].push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min,
            max_x = rdata.X_max;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        this.extremesX.min = min_x;
        this.extremesX.max = max_x;
        this.extremesY.min = min_y;
        this.extremesY.max = max_y;
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series[c].getDataHandler().setArray(this.data[c]);
        this.series[c].reload();
    };

    DtsTPChart.clearLegend = function () {
        var sercount = this.series.length;
        for (var c = 0; c < sercount; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
    };

    DtsTPChart.setDisplayMode = function (mode) {
        this.clearLegend();
        if (mode == 1) //三芯
        {
            this.data[0] = new Array();
            this.series[0] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[0]), {
                color: CABLE_PHASE_COLOR[0],
                title: "三芯",
                drawPoints: true,
                pointStyle: "diamond",
                pointSize: 1.5,
                hint_string: STR.CABLE_DTS_DISTANCE + ':[x]米<br/>' + STR.CABLE_DTS_TEMP + ':[y]℃',
                autosort: false
            }));
        } else if (mode == 2) //正负极
        {
            for (var c = 0; c < 2; ++c) {
                this.data[c] = new Array();
                this.series[c] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                    color: CABLE_PHASE_COLOR[c],
                    title: PHASE_NAME_PO[c],
                    drawPoints: true,
                    pointStyle: "diamond",
                    pointSize: 1.5,
                    hint_string: STR.CABLE_DTS_DISTANCE + ':[x]米<br/>' + STR.CABLE_DTS_TEMP + ':[y]℃',
                    autosort: false
                }));
            }
        } else //abc三相
        {
            for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
                this.data[c] = new Array();
                this.series[c] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                    color: CABLE_PHASE_COLOR[c],
                    title: PHASE_NAME[c],
                    drawPoints: true,
                    pointStyle: "diamond",
                    pointSize: 1.5,
                    hint_string: STR.CABLE_DTS_DISTANCE + ':[x]米<br/>' + STR.CABLE_DTS_TEMP + ':[y]℃',
                    autosort: false
                }));
            }
        }
    };
    return DtsTPChart;
}

//电缆缆表三相某点随时间温度曲线
function dts_three_phase_chart_point() {
    var DtsTPChartPoint = new Object();
    DtsTPChartPoint.chart = null;
    DtsTPChartPoint.data = new Array(CABLE_PHASE_NUM);
    DtsTPChartPoint.series = new Array(CABLE_PHASE_NUM);
    //DtsTPChart.pointBeg = null;
    //DtsTPChart.pointEnd = null;
    DtsTPChartPoint.extremesX = {
        min: -1,
        max: -1
    };
    DtsTPChartPoint.extremesY = {
        min: -1,
        max: -1
    };

    var myDate = new Date();
    var nSec = myDate.getTime();

    DtsTPChartPoint.init = function (id_div) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: true,
            legend_title: STR.CABLE_DTS_CURVE_POINT + '图例',
            title: STR.CABLE_DTS_CURVE_POINT, //chartTitle('#15428b'),
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            auto_find_point_by_x: true,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.DATA_TIME, '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: nSec - 10000000,
                max_extreme: nSec + 10000000,
                formatter: new EJSC.DateFormatter({
                    format_string: "YYYY-MM-DD HH:NN:SS",
                    useUTC: false
                })
            },
            axis_left: {
                caption: styleStr(STR.CABLE_DTS_TEMP + '[℃]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 40
            }
        });
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.data[c] = new Array();
            this.series[c] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                color: CABLE_PHASE_COLOR[c],
                title: PHASE_NAME[c],
                drawPoints: true,
                pointStyle: "diamond",
                pointSize: 1.5,
                hint_string: STR.DATA_TIME + ':[x]<br/>' + STR.CABLE_DTS_TEMP + ':[y]℃',
                autosort: false
            }));
        }
    };

    DtsTPChartPoint.destroy = function () {
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    DtsTPChartPoint.clear = function () {
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    DtsTPChartPoint.draw = function (rdata, c) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data[c].push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.000001,
            max_x = rdata.X_max / 0.999999;;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        this.extremesX.min = min_x;
        this.extremesX.max = max_x;
        this.extremesY.min = min_y;
        this.extremesY.max = max_y;
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series[c].getDataHandler().setArray(this.data[c]);
        this.series[c].reload();
    };
    return DtsTPChartPoint;
}

//电缆缆表缆芯对比曲线
function cable_core_chart() {
    var coreTempChart = new Object();
    coreTempChart.chart = null;
    coreTempChart.data = new Array(2);
    coreTempChart.series = new Array(2);
    coreTempChart.pointBeg = null;
    coreTempChart.pointEnd = null;
    coreTempChart.extremesX = {
        min: -1,
        max: -1
    };
    coreTempChart.extremesY = {
        min: -1,
        max: -1
    };
    coreTempChart.init = function (id_div) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: true,
            legend_title: '图例',
            title: STR.CABLE_CORE_CURVE, //chartTitle('#15428b'),
            show_titlebar: false,
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.CABLE_DTS_DISTANCE + '[米]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 200
            },
            axis_left: {
                caption: styleStr(STR.CABLE_DTS_TEMP + '[℃]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 40
            }
        });
        for (var c = 0; c < 2; ++c) {
            this.data[c] = new Array();
            this.series[c] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                color: CABLE_CORE_COLOR[c],
                title: CABLE_CORE_NAME[c],
                drawPoints: true,
                pointStyle: "diamond",
                pointSize: 1.5,
                hint_string: STR.CABLE_DTS_DISTANCE + ':[x]米<br/>' + STR.CABLE_DTS_TEMP + ':[y]℃',
                autosort: false
            }));
        }
    };

    coreTempChart.destroy = function () {
        for (var c = 0; c < 2; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    coreTempChart.clear = function () {
        for (var c = 0; c < 2; ++c) {
            this.data[c] = [];
            this.series[c].getDataHandler().setArray(this.data[c]);
            this.series[c].reload();
        }
    };

    coreTempChart.draw = function (rdata, c) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data[c].push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min,
            max_x = rdata.X_max;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        this.extremesX.min = min_x;
        this.extremesX.max = max_x;
        this.extremesY.min = min_y;
        this.extremesY.max = max_y;
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series[c].getDataHandler().setArray(this.data[c]);
        this.series[c].reload();
    };
    return coreTempChart;
}

//电缆接头监测曲线
function cable_joint_chart() {
    var jointChart = new Object();
    jointChart.chart = null;
    jointChart.data = new Array(CABLE_PHASE_NUM);
    jointChart.series = new Array(CABLE_PHASE_NUM);
    jointChart.pointBeg = null;
    jointChart.pointEnd = null;
    jointChart.extremesX = {
        min: -1,
        max: -1
    };
    jointChart.extremesY = {
        min: -1,
        max: -1
    };
    var myDate = new Date();
    var nSec = myDate.getTime();

    jointChart.init = function (id_div, t) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: true,
            legend_title: STR.CABLE_JOINT_CURVE + '图例',
            title: STR.CABLE_JOINT_CURVE, //chartTitle('#15428b'),
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            // onBeforeZoom: onBeforeZoomChart,
            // onAfterZoom: onAfterZoomChart,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.DATA_TIME, '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: nSec - 10000,
                max_extreme: nSec,
                formatter: new EJSC.DateFormatter({
                    format_string: "YYYY-MM-DD</br> HH:NN:SS",
                    useUTC: false
                })
            },

            axis_left: {
                caption: styleStr(JOINT_MONIT_TYPE[t] + '[' + JOINT_MONIT_TYPE_UNIT[t] + ']', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 40
            }
        });
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.data[c] = new Array();
            this.series[c] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                color: CABLE_PHASE_COLOR[c],
                title: PHASE_NAME[c],
                drawPoints: true,
                pointStyle: "diamond",
                pointSize: 1.5,
                hint_string: STR.DATA_TIME + ':[x]<br/>' + JOINT_MONIT_TYPE[t] + ':[y]' + JOINT_MONIT_TYPE_UNIT[t],
                autosort: false
            }));
        }
    };

    jointChart.destroy = function () {
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    jointChart.clear = function () {
        for (var c = 0; c < CABLE_PHASE_NUM; ++c) {
            this.data[c] = [];
            this.series[c].getDataHandler().setArray(this.data[c]);
            this.series[c].reload();
        }
    };

    jointChart.draw = function (rdata, c) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data[c].push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.000001,
            max_x = rdata.X_max / 0.999999;
        var min_y = rdata.Y_min / 1.2,
            max_y = rdata.Y_max / 0.8;
        this.extremesX.min = min_x;
        this.extremesX.max = max_x;
        this.extremesY.min = min_y;
        this.extremesY.max = max_y;

        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series[c].getDataHandler().setArray(this.data[c]);
        this.series[c].reload();
    };

    return jointChart;
}

//局放时域图
function time_domain_chart() {
    var timeDomainChart = new Object();
    timeDomainChart.chart = null;
    timeDomainChart.data = new Array();
    timeDomainChart.series = new Array();
    timeDomainChart.pointBeg = null;
    timeDomainChart.pointEnd = null;
    timeDomainChart.extremesX = {
        min: -1,
        max: -1
    };
    timeDomainChart.extremesY = {
        min: -1,
        max: -1
    };

    timeDomainChart.init = function (id_div, p) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: false,
            title: chartTitle(PHASE_NAME[p] + STR.TIME_DOMAIN_CURVE, CABLE_PHASE_COLOR[p]),
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            onAfterZoom: onAfterZoomChartTimeDomain,
            onBeforeDblClick: onBeforeDblClickChartTimeDomain,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.TIME_DOMAIN_XAXIS, '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 200,
            },

            axis_left: {
                caption: styleStr(STR.RANGE + '[mv]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 40
            }
        });
        this.data = new Array();
        this.series = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data), {
            color: '#0000ff',
            title: PHASE_NAME[p],
            pointStyle: "diamond",
            pointSize: 1.5,
            hint_string: '时刻' + ':[x]ns<br/>' + STR.RANGE + ':[y]mv',
            autosort: false
        }));
    };

    timeDomainChart.destroy = function () {
        this.chart.removeSeries((this.series), false);
        this.series = null;
        this.data = null;
        this.chart.remove();
        this.chart = null;
    };

    timeDomainChart.clear = function () {
        this.data = [];
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    timeDomainChart.setAxisBottomVisible = function (flag) {
        if (flag == 0)
            this.chart.axis_bottom.visible = false;
        else
            this.chart.axis_bottom.visible = true;
    };

    timeDomainChart.draw = function (rdata) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data.push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.01,
            max_x = rdata.X_max / 0.99;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        if (this.extremesX.min < 0 || this.extremesX.min > min_x) {
            this.extremesX.min = min_x;
        }
        if (this.extremesX.max < 0 || this.extremesX.max < max_x) {
            this.extremesX.max = max_x;
        }
        if (this.extremesY.min < 0 || this.extremesY.min > min_y) {
            this.extremesY.min = min_y;
        }
        if (this.extremesY.max < 0 || this.extremesY.max < max_y) {
            this.extremesY.max = max_y;
        }
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    return timeDomainChart;
}

//局放频域图
function apd_rate_chart() {
    var rateChart = new Object();
    rateChart.chart = null;
    rateChart.data = new Array();
    rateChart.series = new Array();
    rateChart.extremesX = {
        min: -1,
        max: -1
    };
    rateChart.extremesY = {
        min: -1,
        max: -1
    };

    rateChart.init = function (id_div, p) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: false,
            title: chartTitle(PHASE_NAME[p] + STR.RATE_CURVE, CABLE_PHASE_COLOR[p]),
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            onAfterZoom: onAfterZoomChartRateDomain,
            onBeforeDblClick: onBeforeDblClickChartRateDomain,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.RATE + '[Hz]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 50,
            },

            axis_left: {
                caption: styleStr(STR.RANGE + '[mv]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 40
            }
        });
        this.data = new Array();
        this.series = this.chart.addSeries(new EJSC.BarSeries(new EJSC.ArrayDataHandler(this.data), {
            color: '#0000ff',
            title: PHASE_NAME[p],
            pointStyle: "diamond",
            pointSize: 1.5,
            hint_string: STR.RATE + ':[x]<br/>' + STR.RANGE + ':[y]mv',
            autosort: false
        }));
    };

    rateChart.destroy = function () {
        this.chart.removeSeries((this.series), false);
        this.series = null;
        this.data = null;
        this.chart.remove();
        this.chart = null;
    };

    rateChart.clear = function () {
        this.data = [];
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    rateChart.setAxisBottomVisible = function (flag) {
        if (flag == 0)
            this.chart.axis_bottom.visible = false;
        else
            this.chart.axis_bottom.visible = true;
    };

    rateChart.draw = function (rdata) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data.push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.01,
            max_x = rdata.X_max / 0.99;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        this.extremesX.min = min_x;
        this.extremesX.max = max_x;
        this.extremesY.min = min_y;
        this.extremesY.max = max_y;
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    return rateChart;
}

//局放TimeQ图
function apd_timeQ_chart() {
    var timeQChart = new Object();
    timeQChart.chart = null;
    timeQChart.data = new Array(2);
    timeQChart.series = new Array(2);
    timeQChart.pointBeg = null;
    timeQChart.pointEnd = null;
    timeQChart.extremesX = {
        min: -1,
        max: -1
    };
    timeQChart.extremesLY = {
        min: -1,
        max: -1
    };
    timeQChart.extremesRY = {
        min: -1,
        max: -1
    };
    var myDate = new Date();
    var nSec = myDate.getTime();

    timeQChart.init = function (id_div, p) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: true,
            legend_title: '图例',
            title: chartTitle(PHASE_NAME[p] + STR.TIME_Q_CURVE, CABLE_PHASE_COLOR[p]),
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: false,
            allow_zoom: true,
            auto_zoom: 'y',
            auto_find_point_by_x: true,
            onAfterZoom: onAfterZoomChartTimeQ,
            onBeforeDblClick: onBeforeDblClickChartTimeQ,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.DATA_TIME, '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: nSec - 10000,
                max_extreme: nSec,
                formatter: new EJSC.DateFormatter({
                    format_string: "YYYY-MM-DD<br/>HH:NN:SS",
                    useUTC: false
                })
            },

            axis_left: {
                caption: styleStr(STR.Q + '[pC]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 1000
            },
            axis_right: {
                caption: styleStr(STR.N + '[次]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100
            }
        });
        this.data[0] = new Array();
        this.series[0] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[0]), {
            color: APD_TIMEQ_COLOR[0],
            title: APD_TIMEQ_NAME[0],
            drawPoints: true,
            pointStyle: "diamond",
            pointSize: 1.5,
            y_axis: 'left',
            hint_string: '时间' + ':[x]<br/>' + STR.Q + ':[y]pC',
            autosort: false
        }));

        this.data[1] = new Array();
        this.series[1] = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data[1]), {
            color: APD_TIMEQ_COLOR[1],
            title: APD_TIMEQ_NAME[1],
            drawPoints: true,
            pointStyle: "diamond",
            pointSize: 1.5,
            y_axis: 'right',
            hint_string: '时间' + ':[x]<br/>' + STR.N + ':[y]次',
            autosort: false
        }));
        this.chart.setLegendPosition("right");
    };

    timeQChart.destroy = function () {
        for (var c = 0; c < 2; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    timeQChart.clear = function () {
        for (var c = 0; c < 2; ++c) {
            this.data[c] = [];
            this.series[c].getDataHandler().setArray(this.data[c]);
            this.series[c].reload();
        }
    };

    timeQChart.draw = function (rdata, c) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data[c].push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.000001,
            max_x = rdata.X_max / 0.999999;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        this.extremesX.min = min_x;
        this.extremesX.max = max_x;
        if (c == 0) {
            this.extremesLY.min = min_y;
            this.extremesLY.max = max_y;
        } else {
            this.extremesRY.min = min_y;
            this.extremesRY.max = max_y;
        }

        if (c == 0)
            this.chart.axis_left.setExtremes(this.extremesLY.min, this.extremesLY.max);
        else
            this.chart.axis_right.setExtremes(this.extremesRY.min, this.extremesRY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);

        this.series[c].getDataHandler().setArray(this.data[c]);
        this.series[c].reload();
    };

    return timeQChart;
}

//局放定位分析-放电量图
function apd_location_Q_chart() {
    var locationQ = new Object();
    locationQ.chart = null;
    locationQ.data = new Array(LOCATION_CURVE_NUM);
    locationQ.series = new Array(LOCATION_CURVE_NUM);
    locationQ.pointBeg = null;
    locationQ.pointEnd = null;
    locationQ.extremesX = {
        min: -1,
        max: -1
    };
    locationQ.extremesY = {
        min: -1,
        max: -1
    };

    locationQ.init = function (id_div) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: true,
            legend_title: '图例',
            title: chartTitle(STR.APD_LOCATION_Q, '#15428b'),
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            auto_zoom: 'y',
            auto_find_point_by_x: true,
            onAfterZoom: onAfterZoomChartLQ,
            onBeforeDblClick: onBeforeDblClickChartLQ,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.CABLE_DTS_DISTANCE + '[m]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 200,
                visible: false
            },

            axis_left: {
                caption: styleStr(STR.Q + '[pC]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 1000
            },
        });
        for (var c = 0; c < LOCATION_CURVE_NUM; ++c) {
            this.data[c] = new Array();
            this.series[c] = this.chart.addSeries(new EJSC.ScatterSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                color: LOCATION_CURVE_COLOR[c],
                title: LOCATION_CURVE_TYPE[c],
                pointStyle: "diamond",
                pointSize: 1.5,
                hint_string: STR.CABLE_DTS_DISTANCE + ':[x]米<br/>' + STR.Q + ':[y]pC',
                autosort: false
            }));
        }
        this.chart.setLegendPosition("bottom");
    };

    locationQ.destroy = function () {
        for (var c = 0; c < LOCATION_CURVE_NUM; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    locationQ.clear = function () {
        for (var c = 0; c < LOCATION_CURVE_NUM; ++c) {
            this.data[c] = [];
            this.series[c].getDataHandler().setArray(this.data[c]);
            this.series[c].reload();

        }
    };

    locationQ.draw = function (rdata, c) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data[c].push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.01,
            max_x = rdata.X_max / 0.99;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        if (this.extremesX.min < 0 || this.extremesX.min > min_x) {
            this.extremesX.min = min_x;
        }
        if (this.extremesX.max < 0 || this.extremesX.max < max_x) {
            this.extremesX.max = max_x;
        }
        if (this.extremesY.min < 0 || this.extremesY.min > min_y) {
            this.extremesY.min = min_y;
        }
        if (this.extremesY.max < 0 || this.extremesY.max < max_y) {
            this.extremesY.max = max_y;
        }
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series[c].getDataHandler().setArray(this.data[c]);
        this.series[c].reload();
    };

    return locationQ;
}

//局放定位分析-放电次数图
function apd_location_N_chart() {
    var locationN = new Object();
    locationN.chart = null;
    locationN.data = new Array(LOCATION_CURVE_NUM);
    locationN.series = new Array(LOCATION_CURVE_NUM);
    locationN.pointBeg = null;
    locationN.pointEnd = null;
    locationN.extremesX = {
        min: -1,
        max: -1
    };
    locationN.extremesY = {
        min: -1,
        max: -1
    };

    locationN.init = function (id_div) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: true,
            legend_title: '图例',
            title: chartTitle(STR.APD_LOCATION_N, '#15428b'),
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            auto_zoom: 'y',
            onAfterZoom: onAfterZoomChartLN,
            onBeforeDblClick: onBeforeDblClickChartLN,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.CABLE_DTS_DISTANCE + '[m]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 200
            },

            axis_left: {
                caption: styleStr(STR.N + '[次]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 1000
            },
        });
        for (var c = 0; c < LOCATION_CURVE_NUM; ++c) {
            this.data[c] = new Array();
            this.series[c] = this.chart.addSeries(new EJSC.BarSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                intervalOffset: .9,
                title: LOCATION_CURVE_TYPE[c],
                hint_string: STR.CABLE_DTS_DISTANCE + ':[x]米<br/>' + STR.N + ':[y]次',
            }));
            var min = (0 == c) ? 0 : SCATTER_COLOR_MAP[c - 1].max;
            var max = SCATTER_COLOR_MAP[c].max;
            this.series[c].addRange(min, max, SCATTER_COLOR_MAP[c].color, 100, 100, 0, false);
        }
        this.chart.setLegendPosition("bottom");
    };

    locationN.destroy = function () {
        for (var c = 0; c < LOCATION_CURVE_NUM; ++c) {
            this.chart.removeSeries((this.series[c]), false);
            this.series[c] = null;
            this.data[c] = null;
        }
        this.chart.remove();
        this.chart = null;
    };

    locationN.clear = function () {
        for (var c = 0; c < LOCATION_CURVE_NUM; ++c) {
            this.data[c] = [];
            this.series[c].getDataHandler().setArray(this.data[c]);
            this.series[c].reload();
        }
    };

    locationN.draw = function (rdata, c) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data[c].push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.01,
            max_x = rdata.X_max / 0.99;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        if (this.extremesX.min < 0 || this.extremesX.min > min_x) {
            this.extremesX.min = min_x;
        }
        if (this.extremesX.max < 0 || this.extremesX.max < max_x) {
            this.extremesX.max = max_x;
        }
        if (this.extremesY.min < 0 || this.extremesY.min > min_y) {
            this.extremesY.min = min_y;
        }
        if (this.extremesY.max < 0 || this.extremesY.max < max_y) {
            this.extremesY.max = max_y;
        }
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series[c].getDataHandler().setArray(this.data[c]);
        this.series[c].reload();
    };

    return locationN;
}

//局放全图分析-NQF
function apd_nqf() {
    var charNQF = new Object();
    charNQF.chart = null;
    charNQF.data = null;
    charNQF.dataSin = new Array();
    charNQF.series = new Array(SCATTER_COLOR_NUM);
    charNQF.seriesSin = null;
    charNQF.extremesX = {
        min: -1,
        max: -1
    };
    charNQF.extremesY = {
        min: -1,
        max: -1
    };
    charNQF.init = function (id_div, p) {
        this.data = new Array(SCATTER_COLOR_NUM);
        for (var c = 0; c < SCATTER_COLOR_NUM; ++c) {
            this.data[c] = new Array(); /*this.data[c].push([0,0]);*/
        }
        this.chart = new EJSC.Chart(id_div, {
            title: chartTitle(PHASE_NAME[p] + 'N-Q-φ图', CABLE_PHASE_COLOR[p]) + legendNQF(),
            show_titlebar: true,
            show_legend: false,
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            border: {
                thickness: 5,
                color: "#000000",
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            },
            axis_bottom: {
                caption: styleStr(STR.PHASE + '[度]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 360
            },
            axis_left: {
                caption: styleStr(STR.Q + '[pC]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 500,
                size: 30
            }
        });
        for (var c = 0; c < SCATTER_COLOR_NUM; ++c) {
            this.series[c] = this.chart.addSeries(new EJSC.ScatterSeries(new EJSC.ArrayDataHandler(this.data[c]), {
                color: SCATTER_COLOR_MAP[c].color,
                title: LOCATION_CURVE_TYPE[c],
                pointStyle: "diamond",
                pointSize: 1.5,
                hint_string: STR.PHASE + ':[x]°<br/>' + STR.Q + ':[y]pC<br/>' + STR.N + ':[label]',
                autosort: false
            }));
        }
        var self = this;
        this.seriesSin = this.chart.addSeries(new EJSC.FunctionSeries(
            function (x) {
                var ex = self.chart.axis_left.getExtremes();
                var offset = (ex.max + ex.min) / 2;
                var A = (ex.max - ex.min) * 0.4;
                return offset + A * Math.sin(Math.PI * x / 180);
            }, {
                title: '工频相位',
                color: "#6B8E23",
                lineWidth: 1.0,
                hint_string: STR.PHASE + ':[x]',
                autosort: false
            }));
        this.chart.setLegendPosition("bottom");
    };
    charNQF.destroy = function () {
        for (var c = 0; c < SCATTER_COLOR_NUM; ++c) {
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

    charNQF.clear = function () {
        for (var c = 0; c < SCATTER_COLOR_NUM; ++c) {
            this.data[c] = [];
            this.series[c].getDataHandler().setArray(this.data[c]);
            this.series[c].reload();
        }
    };

    charNQF.draw = function (rdata) {
        var height = this.chart.__draw_area.height;
        var hQ = (Math.abs(rdata.q_max) > Math.abs(rdata.q_min) ? Math.abs(rdata.q_max) : Math.abs(rdata.q_min));
        hQ /= 0.9;
        this.extremesY.max = hQ;
        this.extremesY.min = -hQ;
        var dQ = 1; //Math.ceil((this.extremesY.max-this.extremesY.min)/height);
        var Hf = new Array(MAX_F);
        for (var f = 0; f < MAX_F; ++f) {
            Hf[f] = new Array();
        }
        for (var i = 0, q = 0, f = 0; i < rdata.data.length; ++i) {
            f = Math.round(rdata.data[i][1]); // '->deg
            q = Math.round(rdata.data[i][0] / dQ);
            if (0 == Hf[f].length) {
                Hf[f].push({
                    Q: q,
                    N: 1
                });
            } else {
                for (var j = 0; j < Hf[f].length; ++j) {
                    if (Hf[f][j].Q == q) {
                        Hf[f][j].N++;
                        break;
                    }
                }
                if (j == Hf[f].length) {
                    Hf[f].push({
                        Q: q,
                        N: 1
                    });
                }
            }
        }
        for (var f = 0; f < MAX_F; ++f) {
            for (var i = 0; i < Hf[f].length; ++i) {
                for (var c = 0; c < SCATTER_COLOR_NUM; ++c) {
                    if (SCATTER_COLOR_MAP[c].min <= Hf[f][i].N && Hf[f][i].N <= SCATTER_COLOR_MAP[c].max) {
                        this.data[c].push([f, Hf[f][i].Q, Hf[f][i].N]);
                        break;
                    }
                }
            }
        }
        this.chart.axis_left.setExtremes(-hQ, hQ);
        for (var c = 0; c < SCATTER_COLOR_NUM; ++c) {
            this.series[c].getDataHandler().setArray(this.data[c]);
            this.series[c].reload();
        }
    };
    return charNQF;
}
//局放全图分析-NQ
function apd_NQ() {
    var chartNQ = new Object();
    chartNQ.chart = null;
    chartNQ.data = new Array();
    chartNQ.series = new Array();
    chartNQ.extremesX = {
        min: -1,
        max: -1
    };
    chartNQ.extremesY = {
        min: -1,
        max: -1
    };
    chartNQ.init = function (id_div, p) {
        this.chart = new EJSC.Chart(id_div, {
            title: chartTitle(PHASE_NAME[p] + 'N-Q图', CABLE_PHASE_COLOR[p]),
            show_titlebar: true,
            show_legend: false,
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            border: {
                thickness: 5,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            },
            axis_bottom: {
                caption: styleStr(STR.Q + '[pC]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 500
            },
            axis_left: {
                caption: styleStr(STR.N + '[次]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 30
            }
        });
        this.series = this.chart.addSeries(new EJSC.BarSeries(new EJSC.ArrayDataHandler(this.data), {
            color: "#0000ff",
            pointStyle: "diamond",
            pointSize: 1.5,
            hint_string: STR.Q + ':[x]pC<br/>' + STR.N + ':[y]次',
            autosort: false
        }));
    };
    chartNQ.destroy = function () {
        if (this.chart != null) {
            this.chart.removeSeries((this.series), false);
            this.series = null;
        }
        this.chart.remove();
        this.chart = null;
        this.data = null;
    };

    chartNQ.clear = function () {
        this.data = [];
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    chartNQ.draw = function (rdata) {
        for (var i = 0; i < rdata.data.length; ++i) {
            this.data.push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.01,
            max_x = rdata.X_max / 0.99;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        if (this.extremesX.min < 0 || this.extremesX.min > min_x) {
            this.extremesX.min = min_x;
        }
        if (this.extremesX.max < 0 || this.extremesX.max < max_x) {
            this.extremesX.max = max_x;
        }
        if (this.extremesY.min < 0 || this.extremesY.min > min_y) {
            this.extremesY.min = min_y;
        }
        if (this.extremesY.max < 0 || this.extremesY.max < max_y) {
            this.extremesY.max = max_y;
        }
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };
    return chartNQ;
}
//局放全图分析-NF
function apd_nf() {
    var chartNF = new Object();
    chartNF.chart = null;
    chartNF.data = new Array();
    chartNF.dataSin = new Array();
    chartNF.series = new Array();
    chartNF.seriesSin = new Array();
    chartNF.extremesX = {
        min: -1,
        max: -1
    };
    chartNF.extremesY = {
        min: -1,
        max: -1
    };
    chartNF.init = function (id_div, p) {
        this.chart = new EJSC.Chart(id_div, {
            title: chartTitle(PHASE_NAME[p] + 'N-φ图', CABLE_PHASE_COLOR[p]),
            show_titlebar: true,
            show_legend: false,
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            border: {
                thickness: 5,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            },
            axis_bottom: {
                caption: styleStr(STR.PHASE + '[度]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 360
            },
            axis_left: {
                caption: styleStr(STR.N + '[次]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 30
            }
        });
        var self = this;
        this.seriesSin = this.chart.addSeries(new EJSC.FunctionSeries(
            function (x) {
                var ex = self.chart.axis_left.getExtremes();
                var offset = (ex.max + ex.min) / 2;
                var A = (ex.max - ex.min) * 0.4;
                return offset + A * Math.sin(Math.PI * x / 180);
            }, {
                color: "#6B8E23",
                lineWidth: 1.0,
                hint_string: STR.PHASE + ':[x]',
                autosort: false
            }));
        this.series = this.chart.addSeries(new EJSC.BarSeries(new EJSC.ArrayDataHandler(this.data), {
            color: "#0000ff",
            pointStyle: "diamond",
            pointSize: 1.5,
            hint_string: STR.PHASE + ':[x]°<br/>' + STR.N + ':[y]次',
            autosort: false
        }));
    };
    chartNF.destroy = function () {
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

    chartNF.clear = function () {
        this.data = [];
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    chartNF.draw = function (rdata) {
        for (var i = 0; i < rdata.data.length; ++i) {
            this.data.push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.01,
            max_x = rdata.X_max / 0.99;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        if (this.extremesX.min < 0 || this.extremesX.min > min_x) {
            this.extremesX.min = min_x;
        }
        if (this.extremesX.max < 0 || this.extremesX.max < max_x) {
            this.extremesX.max = max_x;
        }
        if (this.extremesY.min < 0 || this.extremesY.min > min_y) {
            this.extremesY.min = min_y;
        }
        if (this.extremesY.max < 0 || this.extremesY.max < max_y) {
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
    chartQF.extremesX = {
        min: -1,
        max: -1
    };
    chartQF.extremesY = {
        min: -1,
        max: -1
    };
    chartQF.init = function (id_div, p) {
        this.chart = new EJSC.Chart(id_div, {
            title: chartTitle(PHASE_NAME[p] + 'Q-φ图', CABLE_PHASE_COLOR[p]),
            show_titlebar: true,
            show_legend: false,
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            border: {
                thickness: 5,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            },
            axis_bottom: {
                caption: styleStr(STR.PHASE + '[度]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 360
            },
            axis_left: {
                caption: styleStr(STR.Q + '[pC]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 30
            }
        });
        var self = this;
        this.seriesSin = this.chart.addSeries(new EJSC.FunctionSeries(
            function (x) {
                var ex = self.chart.axis_left.getExtremes();
                var offset = (ex.max + ex.min) / 2;
                var A = (ex.max - ex.min) * 0.4;
                return offset + A * Math.sin(Math.PI * x / 180);
            }, {
                color: "#6B8E23",
                lineWidth: 1.0,
                hint_string: STR.PHASE + ':[x]',
                autosort: false
            }));
        this.series = this.chart.addSeries(new EJSC.BarSeries(new EJSC.ArrayDataHandler(this.data), {
            color: "#0000ff",
            pointStyle: "diamond",
            pointSize: 1.5,
            hint_string: STR.PHASE + ':[x]°<br/>' + STR.Q + ':[y]pC',
            autosort: false
        }));
    };
    chartQF.destroy = function () {
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

    chartQF.clear = function () {
        this.data = [];
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    chartQF.draw = function (rdata) {
        for (var i = 0; i < rdata.data.length; ++i) {
            this.data.push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min / 1.01,
            max_x = rdata.X_max / 0.99;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        if (this.extremesX.min < 0 || this.extremesX.min > min_x) {
            this.extremesX.min = min_x;
        }
        if (this.extremesX.max < 0 || this.extremesX.max < max_x) {
            this.extremesX.max = max_x;
        }
        if (this.extremesY.min < 0 || this.extremesY.min > min_y) {
            this.extremesY.min = min_y;
        }
        if (this.extremesY.max < 0 || this.extremesY.max < max_y) {
            this.extremesY.max = max_y;
        }
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    return chartQF;
}

//模拟电流计划曲线
function Current_Plan_Chart() {
    var currentPlanChart = new Object();
    currentPlanChart.chart = null;
    currentPlanChart.data = new Array();
    currentPlanChart.series = new Array();
    currentPlanChart.extremesX = {
        min: -1,
        max: -1
    };
    currentPlanChart.extremesY = {
        min: -1,
        max: -1
    };

    currentPlanChart.init = function (id_div) {
        this.chart = new EJSC.Chart(id_div, {
            show_legend: false,
            title: chartTitle(STR.CURRENT_PLAN, '#15428b'),
            show_messages: true,
            allow_mouse_wheel_zoom: true,
            allow_interactivity: true,
            allow_move: true,
            allow_zoom: true,
            border: {
                thickness: 2,
                color: '#000000',
                opacity: 50,
                show: true
            },
            background: {
                color: "#2f4f4f",
                opacity: 30,
                includeTitle: false
            }, //"#2f4f4f"
            axis_bottom: {
                caption: styleStr(STR.DATA_TIME + '[分钟]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 1440
            },
            axis_left: {
                caption: styleStr(STR.CURRENT + '[A]', '#15428b'),
                crosshair: {
                    show: false
                },
                min_extreme: 0,
                max_extreme: 100,
                size: 40
            }
        });
        this.data = new Array();
        this.series = this.chart.addSeries(new EJSC.LineSeries(new EJSC.ArrayDataHandler(this.data), {
            color: '#ff0000',
            title: '电流计划',
            pointStyle: "diamond",
            pointSize: 1.5,
            hint_string: STR.DATA_TIME + ':[x]分钟<br/>' + STR.CURRENT + ':[y]A',
            autosort: false
        }));

    };

    currentPlanChart.destroy = function () {
        this.chart.removeSeries((this.series), false);
        this.series = null;
        this.data = null;
        this.chart.remove();
        this.chart = null;
    };

    currentPlanChart.clear = function () {
        this.data = [];
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };

    currentPlanChart.draw = function (rdata) {

        for (var i = 0; i < rdata.data.length; ++i) {
            this.data.push([rdata.data[i][0], rdata.data[i][1]]);
        }
        var min_x = rdata.X_min,
            max_x = rdata.X_max;
        var min_y = rdata.Y_min / 1.01,
            max_y = rdata.Y_max / 0.99;
        this.extremesX.min = min_x;
        this.extremesX.max = max_x;
        this.extremesY.min = min_y;
        this.extremesY.max = max_y;
        this.chart.axis_left.setExtremes(this.extremesY.min, this.extremesY.max);
        this.chart.axis_bottom.setExtremes(this.extremesX.min, this.extremesX.max);
        this.series.getDataHandler().setArray(this.data);
        this.series.reload();
    };
    return currentPlanChart;
}