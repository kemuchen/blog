/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : 127.0.0.1:3306
 Source Schema         : framework

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 09/05/2020 18:50:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_administrative_division
-- ----------------------------
DROP TABLE IF EXISTS `sys_administrative_division`;
CREATE TABLE `sys_administrative_division`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `division_no` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '行政区划号码',
  `division_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '行政区划名称',
  `full_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '全称',
  `latitude` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '精度',
  `longtitude` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '纬度',
  `parent_division_id` int(11) NULL DEFAULT NULL COMMENT '父行政区划id',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '行政区划信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `config_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '参数名称',
  `config_desc` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '参数说明',
  `config_value` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '参数值',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '系统参数配置表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_dict
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict`;
CREATE TABLE `sys_dict`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `dicttype` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '字典项类别',
  `typename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '字典项类型名称',
  `dictcode` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '字典项代码',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '字典项代码描述',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '字典信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_dict
-- ----------------------------
INSERT INTO `sys_dict` VALUES (1, 'SUB_SYS_TYPE', '系统类别', 'SYSTEM', '系统管理', '1', 1, '2020-04-27 17:10:31', 1, '2020-04-27 17:10:31', '后台添加');
INSERT INTO `sys_dict` VALUES (2, 'VALIDATE', '是否有效', '1', '有效', '1', 1, '2020-04-29 15:38:11', 1, '2020-04-29 15:38:11', '后台添加');
INSERT INTO `sys_dict` VALUES (3, 'VALIDATE', '是否有效', '0', '无效', '1', 1, '2020-04-29 15:38:18', 1, '2020-04-29 15:38:18', '后台添加');
INSERT INTO `sys_dict` VALUES (4, 'MESSAGE_TYPE', '消息类别', '1', '通知', '1', 1, '2020-05-05 10:32:14', 1, '2020-05-05 10:32:14', '后台添加');
INSERT INTO `sys_dict` VALUES (5, 'MESSAGE_TYPE', '消息类别', '2', '消息', '1', 1, '2020-05-05 10:32:33', 1, '2020-05-05 10:32:33', '后台添加');
INSERT INTO `sys_dict` VALUES (6, 'MESSAGE_TYPE', '消息类别', '3', '待办', '1', 1, '2020-05-05 10:33:01', 1, '2020-05-05 10:33:01', '后台添加');

-- ----------------------------
-- Table structure for sys_dynamic_dict_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_dynamic_dict_config`;
CREATE TABLE `sys_dynamic_dict_config`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `configid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '配置id',
  `multsql` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '多记录查询语句',
  `params` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '查询条件参数',
  `valid` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '有效标志',
  `description` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '动态字典描述',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '动态字典配置表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_dynamic_dict_config
-- ----------------------------
INSERT INTO `sys_dynamic_dict_config` VALUES (2, 'GET_OPERATOR', 'select id, username, phone, email from sys_user where valid = ? and status = ?', NULL, '1', '查询操作人', 1, '2020-04-29 14:51:12', 1, '2020-04-29 14:51:12', '测试');
INSERT INTO `sys_dynamic_dict_config` VALUES (3, 'GET_RIGHT', 'select id, right_name, right_url, sort_no, authed from sys_right where parent_id = ? and sub_sys_type = ?', NULL, '1', '查询菜单信息', 1, '2020-04-29 15:12:11', 1, '2020-04-29 15:12:11', '测试');

-- ----------------------------
-- Table structure for sys_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_log`;
CREATE TABLE `sys_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '用户名',
  `operatin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '用户操作',
  `method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '调用方法',
  `params` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '请求参数',
  `operation_time` bigint(15) NULL DEFAULT NULL COMMENT '执行时长',
  `ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'ip地址',
  `operation_result` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '执行结果',
  `error_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '错误代码',
  `error_desc` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '错误描述',
  `operation_return` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '返回信息',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '系统日志表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_login_history
-- ----------------------------
DROP TABLE IF EXISTS `sys_login_history`;
CREATE TABLE `sys_login_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` int(11) NOT NULL COMMENT '用户id',
  `login_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间',
  `login_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '登录IP',
  `login_result` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '登录结果',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '登录历史信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_login_history
-- ----------------------------
INSERT INTO `sys_login_history` VALUES (1, 1, '2020-04-28 15:22:33', '192.168.1.4', '登录成功!', '1', 1, '2020-04-28 15:21:21', 1, '2020-04-28 15:21:21', '');
INSERT INTO `sys_login_history` VALUES (2, 1, '2020-04-28 15:23:20', '192.168.1.4', '登录成功!', '1', 1, '2020-04-28 15:23:20', 1, '2020-04-28 15:23:20', '');
INSERT INTO `sys_login_history` VALUES (3, 1, '2020-04-28 15:24:55', '192.168.1.4', '登录成功!', '1', 1, '2020-04-28 15:24:55', 1, '2020-04-28 15:24:55', '');
INSERT INTO `sys_login_history` VALUES (4, 1, '2020-04-28 15:26:05', '192.168.1.4', '登录成功!', '1', 1, '2020-04-28 15:26:05', 1, '2020-04-28 15:26:05', '');
INSERT INTO `sys_login_history` VALUES (5, 1, '2020-04-28 15:27:00', '192.168.1.4', '登录成功!', '1', 1, '2020-04-28 15:27:00', 1, '2020-04-28 15:27:00', '');
INSERT INTO `sys_login_history` VALUES (6, 1, '2020-04-28 15:29:40', '192.168.1.4', '登录成功!', '1', 1, '2020-04-28 15:29:40', 1, '2020-04-28 15:29:40', '');
INSERT INTO `sys_login_history` VALUES (7, 1, '2020-04-28 15:30:39', '192.168.1.4', '登录成功!', '1', 1, '2020-04-28 15:30:39', 1, '2020-04-28 15:30:39', '');
INSERT INTO `sys_login_history` VALUES (8, 1, '2020-04-29 15:31:52', '192.168.1.2', '登录成功!', '1', 1, '2020-04-29 15:31:52', 1, '2020-04-29 15:31:52', '');
INSERT INTO `sys_login_history` VALUES (9, 1, '2020-04-29 18:00:04', '192.168.1.2', '登录成功!', '1', 1, '2020-04-29 18:00:04', 1, '2020-04-29 18:00:04', '');
INSERT INTO `sys_login_history` VALUES (10, 1, '2020-04-29 18:35:58', '192.168.1.2', '登录成功!', '1', 1, '2020-04-29 18:35:58', 1, '2020-04-29 18:35:58', '');
INSERT INTO `sys_login_history` VALUES (11, 1, '2020-04-30 10:37:23', '192.168.1.6', '登录成功!', '1', 1, '2020-04-30 10:37:23', 1, '2020-04-30 10:37:23', '');
INSERT INTO `sys_login_history` VALUES (12, 1, '2020-05-04 17:36:47', '192.168.1.2', '登录成功!', '1', 1, '2020-05-04 17:36:47', 1, '2020-05-04 17:36:47', '');
INSERT INTO `sys_login_history` VALUES (13, 1, '2020-05-05 10:24:31', '192.168.1.6', '登录成功!', '1', 1, '2020-05-05 10:24:31', 1, '2020-05-05 10:24:31', '');
INSERT INTO `sys_login_history` VALUES (14, 1, '2020-05-05 14:45:15', '192.168.1.6', '登录成功!', '1', 1, '2020-05-05 14:45:15', 1, '2020-05-05 14:45:15', '');
INSERT INTO `sys_login_history` VALUES (15, 1, '2020-05-06 08:41:39', '192.168.1.6', '登录成功!', '1', 1, '2020-05-06 08:41:39', 1, '2020-05-06 08:41:39', '');
INSERT INTO `sys_login_history` VALUES (16, 1, '2020-05-06 10:14:09', '192.168.1.6', '登录成功!', '1', 1, '2020-05-06 10:14:09', 1, '2020-05-06 10:14:09', '');
INSERT INTO `sys_login_history` VALUES (17, 1, '2020-05-06 10:58:01', '192.168.1.6', '登录成功!', '1', 1, '2020-05-06 10:58:01', 1, '2020-05-06 10:58:01', '');
INSERT INTO `sys_login_history` VALUES (18, 1, '2020-05-06 11:34:43', '192.168.1.6', '登录成功!', '1', 1, '2020-05-06 11:34:43', 1, '2020-05-06 11:34:43', '');
INSERT INTO `sys_login_history` VALUES (19, 1, '2020-05-06 11:50:45', '192.168.1.6', '登录成功!', '1', 1, '2020-05-06 11:50:45', 1, '2020-05-06 11:50:45', '');
INSERT INTO `sys_login_history` VALUES (20, 1, '2020-05-07 09:35:27', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 09:35:27', 1, '2020-05-07 09:35:27', '');
INSERT INTO `sys_login_history` VALUES (21, 1, '2020-05-07 14:37:01', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 14:37:01', 1, '2020-05-07 14:37:01', '');
INSERT INTO `sys_login_history` VALUES (22, 1, '2020-05-07 17:11:17', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 17:11:17', 1, '2020-05-07 17:11:17', '');
INSERT INTO `sys_login_history` VALUES (23, 1, '2020-05-07 17:19:19', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 17:19:19', 1, '2020-05-07 17:19:19', '');
INSERT INTO `sys_login_history` VALUES (24, 1, '2020-05-07 17:26:12', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 17:26:12', 1, '2020-05-07 17:26:12', '');
INSERT INTO `sys_login_history` VALUES (25, 1, '2020-05-07 17:43:01', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 17:43:01', 1, '2020-05-07 17:43:01', '');
INSERT INTO `sys_login_history` VALUES (26, 1, '2020-05-07 17:54:32', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 17:54:32', 1, '2020-05-07 17:54:32', '');
INSERT INTO `sys_login_history` VALUES (27, 1, '2020-05-07 17:58:56', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 17:58:56', 1, '2020-05-07 17:58:56', '');
INSERT INTO `sys_login_history` VALUES (28, 1, '2020-05-07 18:00:44', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 18:00:44', 1, '2020-05-07 18:00:44', '');
INSERT INTO `sys_login_history` VALUES (29, 1, '2020-05-07 18:02:06', '192.168.1.6', '登录成功!', '1', 1, '2020-05-07 18:02:06', 1, '2020-05-07 18:02:06', '');
INSERT INTO `sys_login_history` VALUES (30, 1, '2020-05-08 08:06:24', '192.168.1.6', '登录成功!', '1', 1, '2020-05-08 08:06:24', 1, '2020-05-08 08:06:24', '');
INSERT INTO `sys_login_history` VALUES (31, 1, '2020-05-08 08:08:16', '192.168.1.6', '登录成功!', '1', 1, '2020-05-08 08:08:16', 1, '2020-05-08 08:08:16', '');
INSERT INTO `sys_login_history` VALUES (32, 1, '2020-05-08 08:33:45', '192.168.1.6', '登录成功!', '1', 1, '2020-05-08 08:33:45', 1, '2020-05-08 08:33:45', '');
INSERT INTO `sys_login_history` VALUES (33, 1, '2020-05-08 14:26:59', '192.168.1.6', '登录成功!', '1', 1, '2020-05-08 14:26:59', 1, '2020-05-08 14:26:59', '');
INSERT INTO `sys_login_history` VALUES (34, 1, '2020-05-08 14:28:29', '192.168.1.6', '登录成功!', '1', 1, '2020-05-08 14:28:29', 1, '2020-05-08 14:28:29', '');
INSERT INTO `sys_login_history` VALUES (35, 1, '2020-05-09 15:25:44', '192.168.1.6', '登录成功!', '1', 1, '2020-05-09 15:25:44', 1, '2020-05-09 15:25:44', '');
INSERT INTO `sys_login_history` VALUES (36, 1, '2020-05-09 15:48:56', '192.168.1.6', '登录成功!', '1', 1, '2020-05-09 15:48:56', 1, '2020-05-09 15:48:56', '');

-- ----------------------------
-- Table structure for sys_message
-- ----------------------------
DROP TABLE IF EXISTS `sys_message`;
CREATE TABLE `sys_message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `message_type` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '消息类别 sys_dict',
  `title` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '消息标题',
  `content` varchar(4000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '消息内容',
  `is_send` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '是否发送',
  `send_time` datetime(0) NULL DEFAULT NULL COMMENT '消息发送时间',
  `receive_man` int(11) NULL DEFAULT NULL COMMENT '消息接收人 外键，对应sys_user表主键',
  `is_read` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '是否阅读 1-是，0-否',
  `read_time` datetime(0) NULL DEFAULT NULL COMMENT '阅读时间',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效 1-是，0-否',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人 外键 对应sys_user表主键',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '系统消息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_no_rule
-- ----------------------------
DROP TABLE IF EXISTS `sys_no_rule`;
CREATE TABLE `sys_no_rule`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '单号代码',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '单号描述',
  `rule` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '生成规则',
  `prefix_rule` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '前缀规则',
  `suffix_rule` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '后缀规则',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_quartz_job
-- ----------------------------
DROP TABLE IF EXISTS `sys_quartz_job`;
CREATE TABLE `sys_quartz_job`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `job_group` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务组',
  `job_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务类型',
  `task` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '执行任务',
  `schedule` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '执行计划',
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '描述',
  `params` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '参数',
  `start_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP,
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '酒店定时器定时器配置' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_right
-- ----------------------------
DROP TABLE IF EXISTS `sys_right`;
CREATE TABLE `sys_right`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `sub_sys_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '子系统类别',
  `parent_id` int(11) NULL DEFAULT NULL COMMENT '父菜单id',
  `right_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '权限名称',
  `right_type` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '权限类别',
  `right_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '权限链接',
  `icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '权限图标',
  `sort_no` int(6) NULL DEFAULT NULL COMMENT '权限排序',
  `authed` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '是否校验权限',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '权限信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_right
-- ----------------------------
INSERT INTO `sys_right` VALUES (1, 'SYSTEM', 0, '系统管理', '1', '/system', NULL, 0, '1', '1', 1, '2020-04-27 17:12:14', 1, '2020-04-27 17:12:14', '后台添加');
INSERT INTO `sys_right` VALUES (2, 'SYSTEM', 1, '用户管理', '1', '/system/user', '', 5, '1', '1', 1, '2020-04-27 17:12:43', 1, '2020-04-27 17:12:43', '后台添加');
INSERT INTO `sys_right` VALUES (3, 'SYSTEM', 0, '公共组件', '1', '/component', NULL, 10, '1', '1', 1, '2020-04-27 17:14:01', 1, '2020-04-27 17:14:01', '后台添加');
INSERT INTO `sys_right` VALUES (4, 'SYSTEM', 3, '拖动组件', '1', '/component/draggable', NULL, 15, '1', '1', 1, '2020-04-27 17:14:33', 1, '2020-04-27 17:14:33', '后台添加');
INSERT INTO `sys_right` VALUES (5, 'SYSTEM', 3, '树形组件', '1', '/component/searchtree', NULL, 20, '1', '1', 1, '2020-04-28 16:50:38', 1, '2020-04-28 16:50:38', '后台添加');
INSERT INTO `sys_right` VALUES (6, 'SYSTEM', 3, '超级树形组件', '1', '/component/supertree', NULL, 25, '1', '1', 1, '2020-04-28 16:51:09', 1, '2020-04-28 16:51:09', '后台添加');
INSERT INTO `sys_right` VALUES (7, 'SYSTEM', 3, '右键树形组件', '1', '/component/rightclicktree', NULL, 30, '1', '1', 1, '2020-04-29 17:56:19', 1, '2020-04-29 17:56:19', '后台添加');
INSERT INTO `sys_right` VALUES (8, 'SYSTEM', 3, '下拉组件', '1', '/component/select', NULL, 35, '1', '1', 1, '2020-05-06 11:20:16', 1, '2020-05-06 11:20:16', '后台添加');
INSERT INTO `sys_right` VALUES (9, 'SYSTEM', 3, '富文本', '1', '/component/brafteditor', NULL, 40, '1', '1', 1, '2020-05-07 10:02:06', 1, '2020-05-07 10:02:06', '后台添加');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '角色名称',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '角色描述',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '角色信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, 'admin', '超级管理员', '1', 1, '2020-04-27 17:11:15', 1, '2020-04-27 17:11:15', '后台添加');

-- ----------------------------
-- Table structure for sys_role2right
-- ----------------------------
DROP TABLE IF EXISTS `sys_role2right`;
CREATE TABLE `sys_role2right`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `roleid` int(11) NOT NULL COMMENT '角色id',
  `rightid` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '菜单id',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '角色权限表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role2right
-- ----------------------------
INSERT INTO `sys_role2right` VALUES (1, 1, '1', '1', 1, '2020-04-27 17:15:08', 1, '2020-04-27 17:15:08', '后台添加');
INSERT INTO `sys_role2right` VALUES (2, 1, '2', '1', 1, '2020-04-27 17:15:18', 1, '2020-04-27 17:15:18', '后台添加');
INSERT INTO `sys_role2right` VALUES (3, 1, '3', '1', 1, '2020-04-27 17:15:30', 1, '2020-04-27 17:15:30', '后台添加');
INSERT INTO `sys_role2right` VALUES (4, 1, '4', '1', 1, '2020-04-27 17:15:39', 1, '2020-04-27 17:15:39', '后台添加');
INSERT INTO `sys_role2right` VALUES (5, 1, '5', '1', 1, '2020-04-28 16:54:03', 1, '2020-04-28 16:54:03', '后台添加');
INSERT INTO `sys_role2right` VALUES (6, 1, '6', '1', 1, '2020-04-28 16:54:14', 1, '2020-04-28 16:54:14', '后台添加');
INSERT INTO `sys_role2right` VALUES (7, 1, '7', '1', 1, '2020-04-29 17:56:38', 1, '2020-04-29 17:56:38', '后台添加');
INSERT INTO `sys_role2right` VALUES (8, 1, '8', '1', 1, '2020-05-06 11:20:46', 1, '2020-05-06 11:20:46', '后台添加');
INSERT INTO `sys_role2right` VALUES (9, 1, '9', '1', 1, '2020-05-07 10:02:21', 1, '2020-05-07 10:02:21', '后台添加');

-- ----------------------------
-- Table structure for sys_sequence
-- ----------------------------
DROP TABLE IF EXISTS `sys_sequence`;
CREATE TABLE `sys_sequence`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `sequence` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '序列',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '序列名称',
  `current_value` int(11) NULL DEFAULT NULL COMMENT '序列当前值',
  `increment` int(11) NULL DEFAULT NULL COMMENT '序列增长量',
  `max_value` int(11) NULL DEFAULT NULL COMMENT '序列最大值',
  `circle` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '是否循环序列',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '序列信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '用户名',
  `loginid` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '登录id',
  `password` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '登录密码',
  `phone` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '手机号码',
  `user_type` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '用户类型',
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '邮箱',
  `photo` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '头像',
  `status` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '用户状态',
  `login_fail_count` int(11) NULL DEFAULT NULL COMMENT '登录失败次数',
  `last_login_time` datetime(0) NULL DEFAULT NULL COMMENT '最近一次登录时间',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '用户信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, '超级管理员', 'admin', '0cc175b9c0f1b6a831c399e269772661', '18230121452', '1', '1204504102@qq.com', NULL, '1', 0, '2020-04-27 17:09:37', '1', 1, '2020-04-27 17:09:50', 1, '2020-05-05 17:11:42', '后台添加');
INSERT INTO `sys_user` VALUES (3, '张三', 'zhangsan', '0cc175b9c0f1b6a831c399e269772661', '18302145236', '2', '254152100@qq.com', NULL, '1', 0, '2020-04-27 17:09:37', '1', 1, '2020-05-05 17:13:51', 1, '2020-05-05 17:13:51', '');
INSERT INTO `sys_user` VALUES (4, '李四', 'lisi', '0cc175b9c0f1b6a831c399e269772661', '18302145236', '3', '25051d45622@qq.com', NULL, '2', 0, '2020-05-05 17:24:26', '1', 1, '2020-05-05 17:24:25', 1, '2020-05-05 18:02:25', '');
INSERT INTO `sys_user` VALUES (5, '王五', 'wangwu', '0cc175b9c0f1b6a831c399e269772661', '18204001121', '3', '114522411@163.com', NULL, '1', 0, '2020-05-05 17:53:01', '1', 1, '2020-05-05 17:53:01', 1, '2020-05-06 08:46:21', '');
INSERT INTO `sys_user` VALUES (6, '赵柳', 'zhaoliu', '0cc175b9c0f1b6a831c399e269772661', '18302101452', '3', '04040025@163.com', NULL, '2', 0, '2020-05-05 18:08:42', '1', 1, '2020-05-05 18:08:41', 1, '2020-05-06 08:46:12', '');
INSERT INTO `sys_user` VALUES (7, '小明', 'xiaoming', '0cc175b9c0f1b6a831c399e269772661', '18210241320', '2', '2425123135@qq.com', NULL, '1', 0, '2020-05-06 08:47:15', '1', 1, '2020-05-06 08:47:14', 1, '2020-05-06 08:47:14', '');
INSERT INTO `sys_user` VALUES (8, '小黄', 'xiaohuang', '0cc175b9c0f1b6a831c399e269772661', '18302145236', '2', '21521125011@qq.com', NULL, '2', 0, '2020-05-06 08:47:39', '1', 1, '2020-05-06 08:47:39', 1, '2020-05-06 08:47:39', '');
INSERT INTO `sys_user` VALUES (9, '小兰', 'xiaolan', '0cc175b9c0f1b6a831c399e269772661', '18230214521', '1', '25410221012@qq.com', NULL, '1', 0, '2020-05-06 08:48:35', '1', 1, '2020-05-06 08:48:35', 1, '2020-05-06 10:47:55', '');

-- ----------------------------
-- Table structure for sys_user2role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user2role`;
CREATE TABLE `sys_user2role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` int(11) NOT NULL COMMENT '用户id',
  `roleid` int(11) NOT NULL COMMENT '角色id',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '用户角色表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user2role
-- ----------------------------
INSERT INTO `sys_user2role` VALUES (1, 1, 1, '1', 1, '2020-04-27 17:11:28', 1, '2020-04-27 17:11:35', '后台添加');

-- ----------------------------
-- Table structure for table_update_log
-- ----------------------------
DROP TABLE IF EXISTS `table_update_log`;
CREATE TABLE `table_update_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `table_name` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '修改表名',
  `table_name_desc` varchar(48) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '表名中文描述',
  `update_table_id` int(11) NULL DEFAULT NULL COMMENT '修改表的主键  外键，对应修改表的主键',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人 外键 对应sys_user表主键',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '表记录修改日志' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for table_update_log_detail
-- ----------------------------
DROP TABLE IF EXISTS `table_update_log_detail`;
CREATE TABLE `table_update_log_detail`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `table_update_log_id` int(11) NULL DEFAULT NULL COMMENT '代码操作日志表id 外键，对应code_update_log表主键',
  `field` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '修改字段',
  `field_name` varchar(48) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '字段中文描述',
  `is_dict` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '是否字典项 1-是，0-否',
  `old_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '修改前值',
  `new_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '修改后值',
  `old_value_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '修改前字典中文描述',
  `new_value_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '修改后字典中文描述',
  `valid` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '是否有效 1-是，0-否',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人 外键，对应sys_user表主键',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_user` int(11) NULL DEFAULT NULL COMMENT '修改人 外键，对应sys_user表主键',
  `modify_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '表记录修改明细' ROW_FORMAT = Dynamic;

-- ----------------------------
-- View structure for v_user_right
-- ----------------------------
DROP VIEW IF EXISTS `v_user_right`;
CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`localhost` SQL SECURITY DEFINER VIEW `v_user_right` AS select `a`.`id` AS `userid`,`a`.`username` AS `username`,`a`.`loginid` AS `loginid`,`a`.`password` AS `password`,`a`.`phone` AS `phone`,`a`.`user_type` AS `user_type`,`a`.`email` AS `email`,`a`.`photo` AS `photo`,`a`.`status` AS `status`,`e`.`id` AS `rightid`,`e`.`sub_sys_type` AS `sub_sys_type`,`e`.`parent_id` AS `parent_id`,`e`.`right_name` AS `right_name`,`e`.`right_type` AS `right_type`,`e`.`right_url` AS `right_url`,`e`.`icon` AS `icon`,`e`.`sort_no` AS `sort_no`,`e`.`authed` AS `authed` from ((((`sys_user` `a` join `sys_user2role` `b`) join `sys_role` `c`) join `sys_role2right` `d`) join `sys_right` `e`) where ((`a`.`id` = `b`.`userid`) and (`b`.`roleid` = `c`.`id`) and (`c`.`id` = `d`.`roleid`) and (`d`.`rightid` = `e`.`id`) and (`a`.`valid` = '1') and (`b`.`valid` = '1') and (`c`.`valid` = '1') and (`d`.`valid` = '1') and (`e`.`valid` = '1'));

-- ----------------------------
-- Function structure for currval
-- ----------------------------
DROP FUNCTION IF EXISTS `currval`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `currval`(seq_name varchar(50)) RETURNS int(11)
    DETERMINISTIC
begin
	declare v_value int; 
	select current_value
	  from sys_sequence
	where sequence = seq_name
	 into v_value; 
	return v_value; 
end
;;
delimiter ;

-- ----------------------------
-- Function structure for nextval
-- ----------------------------
DROP FUNCTION IF EXISTS `nextval`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `nextval`(seq_name varchar(50)) RETURNS int(11)
    DETERMINISTIC
begin
    declare v_current_value int;
    declare v_max_value int;
    declare v_increment int;
		declare v_circle varchar(6);
    
    -- 查询当前值和最大值
    select current_value, max_value, increment, circle
				from sys_sequence
	 where sequence = seq_name 
				into v_current_value, v_max_value, v_increment, v_circle;
	 
		 if v_current_value + v_increment > v_max_value then
					if v_circle = '1' then
							update sys_sequence
								set current_value = 1
								where sequence = seq_name; 	
					else 
							return 0;
					end if;
		 else
				update sys_sequence
						set current_value = current_value + increment 
						where sequence = seq_name; 
		end if;
	return currval(seq_name); 
end
;;
delimiter ;

-- ----------------------------
-- Function structure for setval
-- ----------------------------
DROP FUNCTION IF EXISTS `setval`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `setval`(seq_name varchar(50), value integer) RETURNS int(11)
    DETERMINISTIC
begin
	update sys_sequence
	   set current_value = value 
	 where name = seq_name; 
	return currval(seq_name); 
end
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
