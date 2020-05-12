package cn.kl.framework.system.service.impl.role;

import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.security.exception.codes.SysErrorCode;
import cn.kl.framework.common.pojo.PageQueryPojo;
import cn.kl.framework.security.exception.AppException;
import cn.kl.framework.system.dao.auto.entity.SysRoleEntity;
import cn.kl.framework.system.dao.auto.mapper.SysRoleMapper;
import cn.kl.framework.system.service.inter.role.SysRoleServiceInterface;
import cn.kl.framework.util.sys.SysUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName SysRoleServiceImplements
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-27 18:03
 * @Version 1.0
 */
@Service
public class SysRoleServiceImplements implements SysRoleServiceInterface {

    /** 日志输出对象 */
    Logger logger = LoggerFactory.getLogger(SysRoleServiceImplements.class);

    /** 角色信息CURD操作对象 */
    @Autowired
    SysRoleMapper sysRoleMapper;

    /**
     * @Description: 分页查询角色新
     * @Params: [sysRoleEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 18:04
     */
    @Override
    public ApiResponseResultEntity getAllRoles(SysRoleEntity sysRoleEntity) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            // 分页查询
            PageQueryPojo<SysRoleEntity> pageQueryPojo = new PageQueryPojo<>(sysRoleMapper.getSysRolesCount(sysRoleEntity),
                    sysRoleMapper.getSysRoles(sysRoleEntity));
            apiResponseResultEntity.setData(pageQueryPojo);
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【SysRoleServiceImplements.getAllRoles】分页查询角色新：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 保存角色信息
     * @Params: [sysRoleEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 18:05
     */
    @Override
    public ApiResponseResultEntity saveRole(SysRoleEntity sysRoleEntity) throws AppException {
        try {
            if (SysUtil.isEmpty(sysRoleEntity.getId())) {
                // 新增
                sysRoleMapper.insertSysRole(sysRoleEntity);
            } else {
                // 修改
                sysRoleMapper.updateSysRole(sysRoleEntity);
            }
            return new ApiResponseResultEntity(SysErrorCode.SUCCESS);
        } catch (Exception e) {
            logger.error("【SysRoleServiceImplements.saveRole】保存角色信息：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 根据id查询角色信息
     * @Params: [id]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 18:06
     */
    @Override
    public ApiResponseResultEntity getRoleById(Integer id) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            apiResponseResultEntity.setData(sysRoleMapper.selectSysRoleById(id));
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【SysRoleServiceImplements.getRoleById】根据id查询角色信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }
}
