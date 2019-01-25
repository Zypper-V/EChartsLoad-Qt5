#pragma once

#include <QtWidgets/QMainWindow>
#include "ui_Mainwindow.h"
#include <QtWebEngineWidgets>
#include <qdebug.h>

class Mainwindow : public QMainWindow
{
	Q_OBJECT

public:
	Mainwindow(QWidget *parent = Q_NULLPTR);
	void test();
	
private:
	Ui::MainwindowClass ui;
	int m_test;
};
