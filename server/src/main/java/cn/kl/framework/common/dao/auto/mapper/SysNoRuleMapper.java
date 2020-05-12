package cn.kl.framework.common.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.common.dao.auto.entity.SysNoRuleEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysNoRuleMapper
 * @Description：Dao
 * @date ：2020/04/29 09:36
 */
@Repository
public interface SysNoRuleMapper {
    /***
     * @Description 新增
     * @Date 2020/04/29 09:36
     * @Param [params]
     * @return void
     **/
    void insertSysNoRule(SysNoRuleEntity sys_no_rule);

    /**
     * @Description 删除
     * @Date 2020/04/29 09:36
     * @Param [id]
     * @return void
     **/
    void deleteSysNoRule(Integer id);

    /**
     * @Description 更新
     * @Date 2020/04/29 09:36
     * @Param [params]
     * @return void
     **/
    void updateSysNoRule(SysNoRuleEntity sys_no_rule);

    /**
     * @Description 根据id查询: 单条
     * @Date 2020/04/29 09:36
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysNoRuleEntity selectSysNoRuleById(Integer id);

    /**
     * @Description 根据条件查询：多条
     * @Date 2020/04/29 09:36
     * @Param [params]
     * @return java.util.List
     **/
    List<SysNoRuleEntity> getSysNoRules(SysNoRuleEntity sys_no_rule);

    /***
     * @Description 查询数量
     * @Date 2020/04/29 09:36
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysNoRulesCount(SysNoRuleEntity sys_no_rule);
}