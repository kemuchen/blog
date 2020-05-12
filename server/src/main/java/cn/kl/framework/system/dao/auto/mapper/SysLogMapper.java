package cn.kl.framework.system.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.system.dao.auto.entity.SysLogEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysLogMapper
 * @Description：系统日志表Dao
 * @date ：2020/04/27 05:18
 */
@Repository
public interface SysLogMapper {
    /***
     * @Description 新增系统日志表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void insertSysLog(SysLogEntity sys_log);

    /**
     * @Description 删除系统日志表
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return void
     **/
    void deleteSysLog(Integer id);

    /**
     * @Description 更新系统日志表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void updateSysLog(SysLogEntity sys_log);

    /**
     * @Description 根据id查询系统日志表: 单条
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysLogEntity selectSysLogById(Integer id);

    /**
     * @Description 根据条件查询系统日志表：多条
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.util.List
     **/
    List<SysLogEntity> getSysLogs(SysLogEntity sys_log);

    /***
     * @Description 查询数量
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysLogsCount(SysLogEntity sys_log);
}