package cn.kl.framework.system.dao.customize.mapper;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 *
 * @ClassName:：CommonMapper
 * @Description： 公共的处理DAO
 * @author ：柯雷
 * @date ：2018年9月25日 下午5:28:51
 *
 */
@Repository
public interface CustomizeSysCommonMapper {

    /**
     * @Title：getDynamicDicts
     * @Description：执行动态语句
     * @param ：@param sql
     * @param ：@return
     * @return ：String
     * @throws
     */
    List<Map<String, Object>> execDynamicSql(@Param("dynamicSql") String dynamicSql);
}