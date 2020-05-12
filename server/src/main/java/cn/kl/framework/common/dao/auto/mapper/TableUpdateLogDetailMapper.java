package cn.kl.framework.common.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.common.dao.auto.entity.TableUpdateLogDetailEntity;

/**
 * @author ：Administrator
 * @ClassName:：TableUpdateLogDetailMapper
 * @Description：表记录修改明细Dao
 * @date ：2020/04/28 03:10
 */
@Repository
public interface TableUpdateLogDetailMapper {
    /***
     * @Description 新增表记录修改明细
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return void
     **/
    void insertTableUpdateLogDetail(TableUpdateLogDetailEntity table_update_log_detail);

    /**
     * @Description 删除表记录修改明细
     * @Date 2020/04/28 03:10
     * @Param [id]
     * @return void
     **/
    void deleteTableUpdateLogDetail(Integer id);

    /**
     * @Description 更新表记录修改明细
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return void
     **/
    void updateTableUpdateLogDetail(TableUpdateLogDetailEntity table_update_log_detail);

    /**
     * @Description 根据id查询表记录修改明细: 单条
     * @Date 2020/04/28 03:10
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    TableUpdateLogDetailEntity selectTableUpdateLogDetailById(Integer id);

    /**
     * @Description 根据条件查询表记录修改明细：多条
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return java.util.List
     **/
    List<TableUpdateLogDetailEntity> getTableUpdateLogDetails(TableUpdateLogDetailEntity table_update_log_detail);

    /***
     * @Description 查询数量
     * @Date 2020/04/28 03:10
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getTableUpdateLogDetailsCount(TableUpdateLogDetailEntity table_update_log_detail);
}