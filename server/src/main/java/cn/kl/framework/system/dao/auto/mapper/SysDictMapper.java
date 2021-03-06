package cn.kl.framework.system.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.system.dao.auto.entity.SysDictEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysDictMapper
 * @Description：字典信息表Dao
 * @date ：2020/04/27 05:18
 */
@Repository
public interface SysDictMapper {
    /***
     * @Description 新增字典信息表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void insertSysDict(SysDictEntity sys_dict);

    /**
     * @Description 删除字典信息表
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return void
     **/
    void deleteSysDict(Integer id);

    /**
     * @Description 更新字典信息表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void updateSysDict(SysDictEntity sys_dict);

    /**
     * @Description 根据id查询字典信息表: 单条
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysDictEntity selectSysDictById(Integer id);

    /**
     * @Description 根据条件查询字典信息表：多条
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.util.List
     **/
    List<SysDictEntity> getSysDicts(SysDictEntity sys_dict);

    /***
     * @Description 查询数量
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysDictsCount(SysDictEntity sys_dict);
}