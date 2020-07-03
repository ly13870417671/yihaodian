/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : mydb2001

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-07-03 08:48:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ccc
-- ----------------------------
DROP TABLE IF EXISTS `ccc`;
CREATE TABLE `ccc` (
  `id` int(10) NOT NULL,
  `name` char(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of ccc
-- ----------------------------
INSERT INTO `ccc` VALUES ('1', '张三');
INSERT INTO `ccc` VALUES ('2', '李四');

-- ----------------------------
-- Table structure for data
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `name` char(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of data
-- ----------------------------
INSERT INTO `data` VALUES ('广告', '200');
INSERT INTO `data` VALUES ('贴吧', '150');
INSERT INTO `data` VALUES ('百度推广', '800');
INSERT INTO `data` VALUES ('白帽子', '400');
INSERT INTO `data` VALUES ('黑帽子', '1000');

-- ----------------------------
-- Table structure for eee
-- ----------------------------
DROP TABLE IF EXISTS `eee`;
CREATE TABLE `eee` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `sex` varchar(3) CHARACTER SET utf8 DEFAULT NULL,
  `user` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of eee
-- ----------------------------
INSERT INTO `eee` VALUES ('1', '张三', '24', '女', 'zhangsan', '123456');
INSERT INTO `eee` VALUES ('2', '李四', '20', '女', 'lisi', '666666');
INSERT INTO `eee` VALUES ('3', '王五', '25', '男', 'wangwu', '11111');
INSERT INTO `eee` VALUES ('5', '小明', '18', '男', 'xiaoming', '147147');
INSERT INTO `eee` VALUES ('9', 'aaaaa', '18', '男', 'aaaaa', '123123');
INSERT INTO `eee` VALUES ('8', '小红', '22', '女', 'xiaoghong', '123123');

-- ----------------------------
-- Table structure for goodsdata
-- ----------------------------
DROP TABLE IF EXISTS `goodsdata`;
CREATE TABLE `goodsdata` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `data` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of goodsdata
-- ----------------------------
INSERT INTO `goodsdata` VALUES ('1', '雪纺衫', '800');
INSERT INTO `goodsdata` VALUES ('2', '皮鞋', '1200');
INSERT INTO `goodsdata` VALUES ('3', '牛仔裤', '2000');

-- ----------------------------
-- Table structure for goodssale
-- ----------------------------
DROP TABLE IF EXISTS `goodssale`;
CREATE TABLE `goodssale` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `1月` int(10) DEFAULT NULL,
  `2月` int(10) DEFAULT NULL,
  `3月` int(10) DEFAULT NULL,
  `4月` int(10) DEFAULT NULL,
  `5月` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of goodssale
-- ----------------------------
INSERT INTO `goodssale` VALUES ('1', '雪纺衫', '20', '22', '25', '40', '80');
INSERT INTO `goodssale` VALUES ('2', '皮鞋', '30', '60', '15', '30', '20');
INSERT INTO `goodssale` VALUES ('3', 'T恤', '10', '8', '12', '30', '50');
INSERT INTO `goodssale` VALUES ('4', '牛仔裤', '40', '50', '70', '75', '60');

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music` (
  `id` char(3) COLLATE utf8_unicode_ci NOT NULL,
  `musicname` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of music
-- ----------------------------
INSERT INTO `music` VALUES ('002', '你笑起来真好看');
INSERT INTO `music` VALUES ('001', '你是我的眼');
INSERT INTO `music` VALUES ('003', '达拉崩吧');
INSERT INTO `music` VALUES ('004', '你瞒我瞒');
INSERT INTO `music` VALUES ('005', '疯人院');
INSERT INTO `music` VALUES ('006', '你的答案');
INSERT INTO `music` VALUES ('007', '夏天的风');
INSERT INTO `music` VALUES ('008', '是你');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `stuId` char(5) COLLATE utf8_unicode_ci NOT NULL,
  `stuName` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `stuSex` char(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  `stuAge` int(11) DEFAULT NULL,
  PRIMARY KEY (`stuId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('00001', '小红', '女', '20');
INSERT INTO `students` VALUES ('00002', '小明', '男', '18');
INSERT INTO `students` VALUES ('00003', '花花', '女', '16');
INSERT INTO `students` VALUES ('00004', '李雷', '男', '18');
INSERT INTO `students` VALUES ('00005', '韩梅梅', '女', '17');
INSERT INTO `students` VALUES ('006', '小鬼', '男', '20');

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(10) DEFAULT NULL,
  `name` char(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `age` tinyint(2) DEFAULT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', '张三', '20', '15900978807');
INSERT INTO `test` VALUES ('2', '李四', '32', '13866546699');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '张三', '123');
INSERT INTO `user` VALUES ('2', '李四', '123456');

-- ----------------------------
-- Table structure for vip
-- ----------------------------
DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `userpass` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of vip
-- ----------------------------
INSERT INTO `vip` VALUES ('5646', '123456');
INSERT INTO `vip` VALUES ('aaaaahaha', '123456');
INSERT INTO `vip` VALUES ('888999', '123456');
INSERT INTO `vip` VALUES ('wewewee', '123456');
INSERT INTO `vip` VALUES ('小臭臭啦', '123456qq!');
INSERT INTO `vip` VALUES ('', '');
INSERT INTO `vip` VALUES ('哈哈哈哈哈', '123456');
INSERT INTO `vip` VALUES ('aa123456', 'ly13870417671');
INSERT INTO `vip` VALUES ('22555', 'ly13870417671');
INSERT INTO `vip` VALUES ('252525', 'ly13870417671');
INSERT INTO `vip` VALUES ('abc1387041', 'ly13870417671');
INSERT INTO `vip` VALUES ('lululu123', '123456');
INSERT INTO `vip` VALUES ('刘洋哈哈哈', 'ly13870417671');
INSERT INTO `vip` VALUES ('qq123456', 'ly13870417671');
INSERT INTO `vip` VALUES ('我是刘洋', 'ly13870417671');
INSERT INTO `vip` VALUES ('77766', '123456');
INSERT INTO `vip` VALUES ('lll111', '111111');
INSERT INTO `vip` VALUES ('56566', '123123123');
INSERT INTO `vip` VALUES ('xiaosan', '123456');
INSERT INTO `vip` VALUES ('hahahahaha', '147258369');
INSERT INTO `vip` VALUES ('zhuanyeceshi', '123456');
INSERT INTO `vip` VALUES ('小米吗吗', '123456123l');
