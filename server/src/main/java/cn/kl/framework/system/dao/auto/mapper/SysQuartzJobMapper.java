package cn.kl.framework.system.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.system.dao.auto.entity.SysQuartzJobEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysQuartzJobMapper
 * @Description：酒店定时器定时器配置Dao
 * @date ：2020/04/28 03:10
 */
@Repository
public interface SysQuartzJobMapper {
    /***
     * @Description 新增酒店定时器定时器配置
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return void
     **/
    void insertSysQuartzJob(SysQuartzJobEntity sys_quartz_job);

    /**
     * @Description 删除酒店定时器定时器配置
     * @Date 2020/04/28 03:10
     * @Param [id]
     * @return void
     **/
    void deleteSysQuartzJob(Integer id);

    /**
     * @Description 更新酒店定时器定时器配置
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return void
     **/
    void updateSysQuartzJob(SysQuartzJobEntity sys_quartz_job);

    /**
     * @Description 根据id查询酒店定时器定时器配置: 单条
     * @Date 2020/04/28 03:10
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysQuartzJobEntity selectSysQuartzJobById(Integer id);

    /**
     * @Description 根据条件查询酒店定时器定时器配置：多条
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return java.util.List
     **/
    List<SysQuartzJobEntity> getSysQuartzJobs(SysQuartzJobEntity sys_quartz_job);

    /***
     * @Description 查询数量
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysQuartzJobsCount(SysQuartzJobEntity sys_quartz_job);
}