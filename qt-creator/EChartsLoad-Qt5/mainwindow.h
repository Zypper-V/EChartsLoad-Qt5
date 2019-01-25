#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

namespace Ui {
class MainWindow;
}
class QWebEngineView;
class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
private slots:
    void loadEchart();
private:
    Ui::MainWindow *ui;

     QWebEngineView *m_pWebEngineView;
};

#endif // MAINWINDOW_H
