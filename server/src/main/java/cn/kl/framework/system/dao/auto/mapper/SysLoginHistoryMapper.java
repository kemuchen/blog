package cn.kl.framework.system.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.system.dao.auto.entity.SysLoginHistoryEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysLoginHistoryMapper
 * @Description：登录历史信息表Dao
 * @date ：2020/05/11 09:59
 */
@Repository
public interface SysLoginHistoryMapper {
    /***
     * @Description 新增登录历史信息表
     * @Date 2020/05/11 09:59
     * @Param [params]
     * @return void
     **/
    void insertSysLoginHistory(SysLoginHistoryEntity sys_login_history);

    /**
     * @Description 删除登录历史信息表
     * @Date 2020/05/11 09:59
     * @Param [id]
     * @return void
     **/
    void deleteSysLoginHistory(Integer id);

    /**
     * @Description 更新登录历史信息表
     * @Date 2020/05/11 09:59
     * @Param [params]
     * @return void
     **/
    void updateSysLoginHistory(SysLoginHistoryEntity sys_login_history);

    /**
     * @Description 根据id查询登录历史信息表: 单条
     * @Date 2020/05/11 09:59
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysLoginHistoryEntity selectSysLoginHistoryById(Integer id);

    /**
     * @Description 根据条件查询登录历史信息表：多条
     * @Date 2020/05/11 09:59
     * @Param [params]
     * @return java.util.List
     **/
    List<SysLoginHistoryEntity> getSysLoginHistorys(SysLoginHistoryEntity sys_login_history);

    /***
     * @Description 查询数量
     * @Date 2020/05/11 09:59
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysLoginHistorysCount(SysLoginHistoryEntity sys_login_history);
}