package cn.kl.framework.common.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.common.dao.auto.entity.TableUpdateLogEntity;

/**
 * @author ：Administrator
 * @ClassName:：TableUpdateLogMapper
 * @Description：表记录修改日志Dao
 * @date ：2020/04/28 03:10
 */
@Repository
public interface TableUpdateLogMapper {
    /***
     * @Description 新增表记录修改日志
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return void
     **/
    void insertTableUpdateLog(TableUpdateLogEntity table_update_log);

    /**
     * @Description 删除表记录修改日志
     * @Date 2020/04/28 03:10
     * @Param [id]
     * @return void
     **/
    void deleteTableUpdateLog(Integer id);

    /**
     * @Description 更新表记录修改日志
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return void
     **/
    void updateTableUpdateLog(TableUpdateLogEntity table_update_log);

    /**
     * @Description 根据id查询表记录修改日志: 单条
     * @Date 2020/04/28 03:10
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    TableUpdateLogEntity selectTableUpdateLogById(Integer id);

    /**
     * @Description 根据条件查询表记录修改日志：多条
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return java.util.List
     **/
    List<TableUpdateLogEntity> getTableUpdateLogs(TableUpdateLogEntity table_update_log);

    /***
     * @Description 查询数量
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getTableUpdateLogsCount(TableUpdateLogEntity table_update_log);
}