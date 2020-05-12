package cn.kl.framework.common.dao.auto.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;
import cn.kl.framework.common.dao.auto.entity.SysDynamicDictConfigEntity;

/**
 * @author ：Administrator
 * @ClassName:：SysDynamicDictConfigMapper
 * @Description：动态字典配置表Dao
 * @date ：2020/04/29 12:18
 */
@Repository
public interface SysDynamicDictConfigMapper {
    /***
     * @Description 新增动态字典配置表
     * @Date 2020/04/29 12:18
     * @Param [params]
     * @return void
     **/
    void insertSysDynamicDictConfig(SysDynamicDictConfigEntity sys_dynamic_dict_config);

    /**
     * @Description 删除动态字典配置表
     * @Date 2020/04/29 12:18
     * @Param [id]
     * @return void
     **/
    void deleteSysDynamicDictConfig(Integer id);

    /**
     * @Description 更新动态字典配置表
     * @Date 2020/04/29 12:18
     * @Param [params]
     * @return void
     **/
    void updateSysDynamicDictConfig(SysDynamicDictConfigEntity sys_dynamic_dict_config);

    /**
     * @Description 根据id查询动态字典配置表: 单条
     * @Date 2020/04/29 12:18
     * @Param [id]
     * @return java.util.Map<java.lang.Integer>
     **/
    SysDynamicDictConfigEntity selectSysDynamicDictConfigById(Integer id);

    /**
     * @Description 根据条件查询动态字典配置表：多条
     * @Date 2020/04/29 12:18
     * @Param [params]
     * @return java.util.List
     **/
    List<SysDynamicDictConfigEntity> getSysDynamicDictConfigs(SysDynamicDictConfigEntity sys_dynamic_dict_config);

    /***
     * @Description 查询数量
     * @Date 2020/04/29 12:18
     * @Param [params]
     * @return java.lang.Integer
     **/
    Integer getSysDynamicDictConfigsCount(SysDynamicDictConfigEntity sys_dynamic_dict_config);
}