package cn.kl.framework.system.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.system.dao.auto.entity.SysRoleEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysRoleMapper
 * @Description：角色信息表Dao
 * @date ：2020/04/27 05:18
 */
@Repository
public interface SysRoleMapper {
    /***
     * @Description 新增角色信息表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void insertSysRole(SysRoleEntity sys_role);

    /**
     * @Description 删除角色信息表
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return void
     **/
    void deleteSysRole(Integer id);

    /**
     * @Description 更新角色信息表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void updateSysRole(SysRoleEntity sys_role);

    /**
     * @Description 根据id查询角色信息表: 单条
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysRoleEntity selectSysRoleById(Integer id);

    /**
     * @Description 根据条件查询角色信息表：多条
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.util.List
     **/
    List<SysRoleEntity> getSysRoles(SysRoleEntity sys_role);

    /***
     * @Description 查询数量
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysRolesCount(SysRoleEntity sys_role);
}