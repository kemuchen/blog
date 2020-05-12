package cn.kl.framework.system.web.user;

import cn.kl.framework.annotation.PageQuery;
import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.security.exception.AppException;
import cn.kl.framework.system.dao.auto.entity.SysUserEntity;
import cn.kl.framework.system.service.inter.user.BusinessUserServiceInterface;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @ClassName UserMoldGetController
 * @Desc 用户管理controller
 * @Author 柯雷
 * @Date 2020-04-27 17:20
 * @Version 1.0
 */
@Api(tags = "用户信息查询接口")
@RestController
@RequestMapping("/api/system/")
public class UserMoldGetController {

    /** 用户业务操作service */
    @Autowired
    BusinessUserServiceInterface businessUserService;
    
    /** 
     * @Description: 查询用户列表
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 17:37
     */ 
    @ApiOperation(("1.查询用户列表"))
    @GetMapping("users")
    @PageQuery
    public ApiResponseResultEntity users(SysUserEntity sysUserEntity) throws AppException {
        return businessUserService.getUsersPage(sysUserEntity);
    }
}
