package cn.kl.framework.system.dao.auto.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import java.io.Serializable;

import java.util.Date;
import java.math.BigDecimal;
import cn.kl.framework.common.entity.BaseEntity;
import org.springframework.format.annotation.DateTimeFormat;

/***
 * @Description: 角色权限表
 * @Author: Administrator
 * @Date: 2020/04/27 05:18
 */
@ApiModel(value = "角色权限表", description = "数据库表反向工具生成对应表sys_role2right")
@Getter
@Setter
public class SysRole2rightEntity extends BaseEntity implements Serializable {

	private static final long serialVersionUID = 1L;

    // 主键
    @ApiModelProperty(value = "主键", hidden=true)
    private Integer id;

    // 菜单id
    @ApiModelProperty(value = "菜单id", hidden=true)
    private String rightid;

    // 角色id
    @ApiModelProperty(value = "角色id", hidden=true)
    private Integer roleid;

}