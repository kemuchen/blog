package cn.kl.framework.system.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.system.dao.auto.entity.SysUser2roleEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysUser2roleMapper
 * @Description：用户角色表Dao
 * @date ：2020/05/12 05:32
 */
@Repository
public interface SysUser2roleMapper {
    /***
     * @Description 新增用户角色表
     * @Date 2020/05/12 05:32
     * @Param [params]
     * @return void
     **/
    void insertSysUser2role(SysUser2roleEntity sys_user2role);

    /**
     * @Description 删除用户角色表
     * @Date 2020/05/12 05:32
     * @Param [id]
     * @return void
     **/
    void deleteSysUser2role(Integer id);

    /**
     * @Description 更新用户角色表
     * @Date 2020/05/12 05:32
     * @Param [params]
     * @return void
     **/
    void updateSysUser2role(SysUser2roleEntity sys_user2role);

    /**
     * @Description 根据id查询用户角色表: 单条
     * @Date 2020/05/12 05:32
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysUser2roleEntity selectSysUser2roleById(Integer id);

    /**
     * @Description 根据条件查询用户角色表：多条
     * @Date 2020/05/12 05:32
     * @Param [params]
     * @return java.util.List
     **/
    List<SysUser2roleEntity> getSysUser2roles(SysUser2roleEntity sys_user2role);

    /***
     * @Description 查询数量
     * @Date 2020/05/12 05:32
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysUser2rolesCount(SysUser2roleEntity sys_user2role);
}