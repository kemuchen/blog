package cn.kl.framework.system.dao.customize.mapper;

import cn.kl.framework.system.dao.auto.entity.SysRightEntity;
import cn.kl.framework.system.dao.customize.vo.SysRightSelectVo;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * 菜单权限dao
 * @author YCJ
 */
@Repository
public interface CustomizeSysRightMapper {
    /**
     * @Title：getRightsByLoginid
     * @Description：根据登录id查询用户权限
     * @param ：@param loginid
     * @return ：List<Map<String,Object>>
     * @throws
     */
    List<SysRightEntity> getRightsByUserId(SysRightSelectVo sysRightSelectPojo);
}