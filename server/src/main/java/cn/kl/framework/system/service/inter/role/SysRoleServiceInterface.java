package cn.kl.framework.system.service.inter.role;

import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.security.exception.AppException;
import cn.kl.framework.system.dao.auto.entity.SysRoleEntity;

/**
 * @ClassName SysRoleServiceInterface
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-27 17:53
 * @Version 1.0
 */
public interface SysRoleServiceInterface {

    /**
     * @Description: 获取所有角色信息
     * @Params: [sysRoleEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 17:58
     */
    ApiResponseResultEntity getAllRoles(SysRoleEntity sysRoleEntity) throws AppException;

    /**
     * @Description: 保存角色信息
     * @Params: [sysRoleEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 17:59
     */
    ApiResponseResultEntity saveRole(SysRoleEntity sysRoleEntity) throws AppException;

    /**
     * @Description: 根据id查询角色信息
     * @Params: [id]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 18:00
     */
    ApiResponseResultEntity getRoleById(Integer id) throws AppException;
}
