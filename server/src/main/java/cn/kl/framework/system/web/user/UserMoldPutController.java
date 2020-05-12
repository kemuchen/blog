package cn.kl.framework.system.web.user;

import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.common.pojo.BasePojo;
import cn.kl.framework.security.exception.AppException;
import cn.kl.framework.system.dao.auto.entity.SysUserEntity;
import cn.kl.framework.system.service.inter.user.BusinessUserServiceInterface;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @ClassName UserMoldPutController
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-28 9:47
 * @Version 1.0
 */
@Api(tags = "用户信息更新接口")
@RestController
@RequestMapping("/api/system/")
public class UserMoldPutController {

    /** 用户业务操作service */
    @Autowired
    BusinessUserServiceInterface businessUserService;

    /**
     * @Description:
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-05-05 11:26
     */
    @ApiOperation("1.新增用户信息")
    @PutMapping("user")
    public ApiResponseResultEntity user(@RequestBody SysUserEntity sysUserEntity, BasePojo basePojo) throws AppException {
        return businessUserService.saveUser(sysUserEntity, basePojo);
    }
}
