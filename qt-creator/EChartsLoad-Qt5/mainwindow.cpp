#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QtWebEngineWidgets>
#include <QWebEngineView>
#include <QDebug>
#include <QUrl>
#include <QDir>


MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    m_pWebEngineView(nullptr),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    m_pWebEngineView = new QWebEngineView(this);
    m_pWebEngineView->setContextMenuPolicy(Qt::NoContextMenu);

    QString htmlPath = "E:/GitProj/EChartsLoad-Qt5/qt-creator/Echart/cable_dts.html";

    m_pWebEngineView->load(QUrl(htmlPath));
    connect(m_pWebEngineView,SIGNAL(loadFinished(bool)),this,SLOT(loadEchart()));
    this->setCentralWidget(m_pWebEngineView);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::loadEchart()
{
    qDebug()<<"loadCableDtsChart called";
    QString strjavaFunction = QString("loadCableDtsChart(%1)").arg(2);
    //ui->webView->page()->mainFrame()->evaluateJavaScript(strjavaFunction).toString();
    m_pWebEngineView->page()->runJavaScript(strjavaFunction);
}
