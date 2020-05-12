package cn.kl.framework.system.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.system.dao.auto.entity.SysAdministrativeDivisionEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysAdministrativeDivisionMapper
 * @Description：行政区划信息表Dao
 * @date ：2020/04/27 05:18
 */
@Repository
public interface SysAdministrativeDivisionMapper {
    /***
     * @Description 新增行政区划信息表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void insertSysAdministrativeDivision(SysAdministrativeDivisionEntity sys_administrative_division);

    /**
     * @Description 删除行政区划信息表
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return void
     **/
    void deleteSysAdministrativeDivision(Integer id);

    /**
     * @Description 更新行政区划信息表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void updateSysAdministrativeDivision(SysAdministrativeDivisionEntity sys_administrative_division);

    /**
     * @Description 根据id查询行政区划信息表: 单条
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysAdministrativeDivisionEntity selectSysAdministrativeDivisionById(Integer id);

    /**
     * @Description 根据条件查询行政区划信息表：多条
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.util.List
     **/
    List<SysAdministrativeDivisionEntity> getSysAdministrativeDivisions(SysAdministrativeDivisionEntity sys_administrative_division);

    /***
     * @Description 查询数量
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysAdministrativeDivisionsCount(SysAdministrativeDivisionEntity sys_administrative_division);
}