package cn.kl.framework.system.service.impl.right;

import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.security.exception.codes.SysErrorCode;
import cn.kl.framework.common.pojo.PageQueryPojo;
import cn.kl.framework.security.exception.AppException;
import cn.kl.framework.system.dao.auto.entity.SysRightEntity;
import cn.kl.framework.system.dao.auto.mapper.SysRightMapper;
import cn.kl.framework.system.dao.customize.mapper.CustomizeSysRightMapper;
import cn.kl.framework.system.dao.customize.vo.SysRightVo;
import cn.kl.framework.system.dao.customize.vo.SysRightSelectVo;
import cn.kl.framework.system.service.impl.role.SysRoleServiceImplements;
import cn.kl.framework.system.service.inter.right.SysRightServiceInterface;
import cn.kl.framework.util.sys.SysUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName SysRightServiceImplements
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-27 18:15
 * @Version 1.0
 */
@Service
public class SysRightServiceImplements implements SysRightServiceInterface {

    /** 日志输出对象 */
    Logger logger = LoggerFactory.getLogger(SysRoleServiceImplements.class);

    /** 菜单CURD操作对象 */
    @Autowired
    SysRightMapper sysRightMapper;

    /** 自定义菜单CURD操作对象 */
    @Autowired
    CustomizeSysRightMapper customizeSysRightMapper;

    /**
     * @Description: 分页查询菜单信息
     * @Params: [sysRightEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 18:18
     */
    @Override
    public ApiResponseResultEntity getAllRights(SysRightEntity sysRightEntity) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            // 分页查询
            PageQueryPojo<SysRightEntity> pageQueryPojo = new PageQueryPojo<>();
            pageQueryPojo.setData(sysRightMapper.getSysRights(sysRightEntity));
            pageQueryPojo.setTotal(sysRightMapper.getSysRightsCount(sysRightEntity));
            apiResponseResultEntity.setData(pageQueryPojo);
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【SysRightServiceImplements.getAllRight】分页查询菜单信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 保存菜单信息
     * @Params: [sysRightEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 18:19
     */
    @Override
    public ApiResponseResultEntity saveRight(SysRightEntity sysRightEntity) throws AppException {
        try {
            if (SysUtil.isEmpty(sysRightEntity.getId())) {
                // 新增
                sysRightMapper.insertSysRight(sysRightEntity);
            } else {
                // 修改
                sysRightMapper.updateSysRight(sysRightEntity);
            }
            return new ApiResponseResultEntity(SysErrorCode.SUCCESS);
        } catch (Exception e) {
            logger.error("【SysRightServiceImplements.saveRight】保存菜单信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 根据id查询菜单信息
     * @Params: [id]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 18:21
     */
    @Override
    public ApiResponseResultEntity getRightById(Integer id) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            apiResponseResultEntity.setData(sysRightMapper.selectSysRightById(id));
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【SysRightServiceImplements.getRightById】根据id查询菜单信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 查询菜单信息
     * @Params: [sysRightEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 11:38
     */
    @Override
    public ApiResponseResultEntity getRights(SysRightEntity sysRightEntity) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            apiResponseResultEntity.setData(sysRightMapper.getSysRights(sysRightEntity));
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【SysRightServiceImplements.getAllRight】分页查询菜单信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 根据id查询用户菜单信息
     * @Params: [user_id]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 11:50
     */
    @Override
    public ApiResponseResultEntity getRightsByUserId(Integer user_id) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            List<SysRightVo> rights = new ArrayList<>();

            // 查询一级菜单
            SysRightSelectVo selectPojo = new SysRightSelectVo();
            selectPojo.setUser_id(user_id);
            selectPojo.setParent_id(0);

            List<SysRightEntity> firstRights = customizeSysRightMapper.getRightsByUserId(selectPojo);

            // 二级菜单
            List<SysRightEntity> secondRights;
            // 遍历一级菜单获取二级菜单
            for (SysRightEntity rightEntity : firstRights) {
                selectPojo.setParent_id(rightEntity.getId());
                secondRights = customizeSysRightMapper.getRightsByUserId(selectPojo);
                SysRightVo sysRightPojo = new SysRightVo();
                sysRightPojo.setRight(rightEntity);
                sysRightPojo.setSub_sys_right(secondRights);
                rights.add(sysRightPojo);
            }

            apiResponseResultEntity.setData(rights);
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【BusinessRightServiceImplements.getRightsByFormat】查询格式化菜单信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }
}
