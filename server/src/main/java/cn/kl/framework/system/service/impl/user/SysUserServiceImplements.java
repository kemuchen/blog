package cn.kl.framework.system.service.impl.user;

import cn.kl.Constants;
import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.security.exception.codes.SysErrorCode;
import cn.kl.framework.common.pojo.PageQueryPojo;
import cn.kl.framework.security.exception.AppException;
import cn.kl.framework.system.dao.auto.entity.SysUserEntity;
import cn.kl.framework.system.dao.auto.mapper.SysUserMapper;
import cn.kl.framework.system.service.inter.user.SysUserServiceInterface;
import cn.kl.framework.util.sys.SysUtil;
import org.apache.commons.codec.digest.DigestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;

/**
 * @ClassName UserServiceImplements
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-27 17:28
 * @Version 1.0
 */
@Service
public class SysUserServiceImplements implements SysUserServiceInterface {

    /**
     * 日志输出对象
     */
    Logger logger = LoggerFactory.getLogger(SysUserServiceImplements.class);

    /**
     * 用户信息CURD处理DAO对象
     */
    @Autowired
    SysUserMapper sysUserMapper;

    /**
     * @Description: 保存用户信息
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 17:41
     */
    @Override
    public ApiResponseResultEntity saveUser(SysUserEntity sysUserEntity) throws AppException {
        try {
            if (SysUtil.isEmpty(sysUserEntity.getId())) {
                // 新增用户设置默认值
                sysUserEntity.setValid(Constants.YES);
                sysUserEntity.setLast_login_time(new Date());
                sysUserEntity.setLogin_fail_count(0);
                sysUserEntity.setPassword(DigestUtils.md5Hex("a"));
                sysUserEntity.setCreate_user(sysUserEntity.getModify_user());
                // 新增
                sysUserMapper.insertSysUser(sysUserEntity);
            } else {
                // 修改
                sysUserMapper.updateSysUser(sysUserEntity);
            }
            return new ApiResponseResultEntity(SysErrorCode.SUCCESS);
        } catch (Exception e) {
            logger.error("【UserServiceImplements.saveUser】保存用户信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 根据id获取用户信息
     * @Params: [id]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-27 17:42
     */
    @Override
    public ApiResponseResultEntity getUserById(Integer id) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            apiResponseResultEntity.setData(sysUserMapper.selectSysUserById(id));
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【UserServiceImplements.getUserById】根据id获取用户信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 查询用户
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 11:22
     */
    @Override
    public ApiResponseResultEntity getUsers(SysUserEntity sysUserEntity) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            apiResponseResultEntity.setData(sysUserMapper.getSysUsers(sysUserEntity));
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【UserServiceImplements.getUsers】查询用户出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 查询用户数量
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-05-09 11:00
     */
    @Override
    public ApiResponseResultEntity getUserCount(SysUserEntity sysUserEntity) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            apiResponseResultEntity.setData(sysUserMapper.getSysUsersCount(sysUserEntity));
            return apiResponseResultEntity;
        } catch (Exception e) {
            logger.error("【UserServiceImplements.getUsers】查询用户出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }
}
