package cn.kl.framework.system.service.inter.user;

import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.common.pojo.BasePojo;
import cn.kl.framework.security.exception.AppException;
import cn.kl.framework.system.dao.auto.entity.SysUserEntity;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @ClassName BusinessUserServiceInterface
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-27 18:22
 * @Version 1.0
 */
public interface BusinessUserServiceInterface {

    /**
     * @Description: 用户登录
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 9:35
     */
    ApiResponseResultEntity login(SysUserEntity sysUserEntity, HttpServletRequest request) throws AppException;


    /**
     * @Description: 根据登录id查询用户信息
     * @Params: [loginId]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 11:18
     */
    ApiResponseResultEntity getUserByLoginId(String loginId) throws AppException;

    /**
     * @Description: 保存用户信息
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 9:36
     */
    ApiResponseResultEntity saveUser(SysUserEntity sysUserEntity, BasePojo basePojo) throws AppException;

    /**
     * @Description: 删除用户信息
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 9:36
     */
    ApiResponseResultEntity deleteUser(List<Integer> ids, BasePojo basePojo) throws AppException;

    /**
     * @Description: 获取用户
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 9:36
     */
    ApiResponseResultEntity getUsersPage(SysUserEntity sysUserEntity)  throws AppException;
}
