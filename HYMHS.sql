SET NAMES UTF8;
DROP DATABASE IF EXISTS HYMHS;
CREATE DATABASE HYMHS CHARSET=UTF8;
USE HYMHS;
#网站的基本信息
CREATE TABLE HYMHS_site_info(
    site_name VARCHAR(16),
    logo VARCHAR(64),
    copyright VARCHAR(64)
);
#导航条目
CREATE TABLE HYMHS_navbar_item(
    name VARCHAR(16),
    url VARCHAR(64), 
    title VARCHAR(32)
);
INSERT INTO HYMHS_navbar_item VALUES("首页","/index.html","华艺名画室首页"),
INSERT INTO HYMHS_navbar_item VALUES("美考定制","/index.html","华艺名画室发展方向"),
INSERT INTO HYMHS_navbar_item VALUES("名师团队","/index.html","华艺名画室团队"),
INSERT INTO HYMHS_navbar_item VALUES("美考成绩","/index.html","华艺名画室学生优秀成绩"),
INSERT INTO HYMHS_navbar_item VALUES("美考学院","/index.html","华艺名画室地址"),
INSERT INTO HYMHS_navbar_item VALUES("学姐学长","/index.html","华艺名画室前辈"),
INSERT INTO HYMHS_navbar_item VALUES("关于华艺名","/index.html","华艺名画室历史"),
INSERT INTO HYMHS_navbar_item VALUES("直播厅","/index.html","华艺名画室首页"),
INSERT INTO HYMHS_navbar_item VALUES("访问旧版","/index.html","华艺名画室旧版本"),
INSERT INTO HYMHS_navbar_item VALUES("免费咨询","/index.html","华艺名画室咨询"),

#轮播图
CREATE TABLE HYMHS_carousel_item(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  url VARCHAR(128),
  title VARCHAR(32)    
);
INSERT INTO HYMHS_carousel_item VALUES(NULL,"pic_1.jpg","/m1.html","美考定制家1");
INSERT INTO HYMHS_carousel_item VALUES(NULL,"pic_2.jpg","/m2.html","美考定制家2");
INSERT INTO HYMHS_carousel_item VALUES(NULL,"pic_3.jpg","/m3.html","美考定制家3");
#用户表
CREATE TABLE HYMHS_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(64),
    phone VARCHAR(11),
    avatar VARCHAR(128),
    user_name VARCHAR(32),
    gender INT
);
 INSERT INTO HYMHS_user VALUES("1","liangliang","123","liang@qq.com""12345678901","images/avarar/11.png","亮","1"),
