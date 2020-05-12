package cn.kl.framework.system.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.system.dao.auto.entity.SysSequenceEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysSequenceMapper
 * @Description：序列信息表Dao
 * @date ：2020/04/27 05:18
 */
@Repository
public interface SysSequenceMapper {
    /***
     * @Description 新增序列信息表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void insertSysSequence(SysSequenceEntity sys_sequence);

    /**
     * @Description 删除序列信息表
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return void
     **/
    void deleteSysSequence(Integer id);

    /**
     * @Description 更新序列信息表
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return void
     **/
    void updateSysSequence(SysSequenceEntity sys_sequence);

    /**
     * @Description 根据id查询序列信息表: 单条
     * @Date 2020/04/27 05:18
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysSequenceEntity selectSysSequenceById(Integer id);

    /**
     * @Description 根据条件查询序列信息表：多条
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.util.List
     **/
    List<SysSequenceEntity> getSysSequences(SysSequenceEntity sys_sequence);

    /***
     * @Description 查询数量
     * @Date 2020/04/27 05:18
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysSequencesCount(SysSequenceEntity sys_sequence);
}