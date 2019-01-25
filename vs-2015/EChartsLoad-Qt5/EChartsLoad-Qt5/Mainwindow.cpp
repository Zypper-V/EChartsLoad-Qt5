#include "Mainwindow.h"

Mainwindow::Mainwindow(QWidget *parent)
	: QMainWindow(parent)
{
	ui.setupUi(this);
}

void Mainwindow::test()
{
	qDebug() << "hahah";
}
