package cn.kl.framework.system.service.impl.user;

import cn.kl.Constants;
import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.common.pojo.BasePojo;
import cn.kl.framework.common.pojo.PageQueryPojo;
import cn.kl.framework.security.exception.AppException;
import cn.kl.framework.security.exception.codes.LoginErrorCode;
import cn.kl.framework.security.exception.codes.SysErrorCode;
import cn.kl.framework.system.dao.auto.entity.SysLoginHistoryEntity;
import cn.kl.framework.system.dao.auto.entity.SysUserEntity;
import cn.kl.framework.system.dao.customize.vo.LoginResultVo;
import cn.kl.framework.system.service.inter.user.BusinessUserServiceInterface;
import cn.kl.framework.system.service.inter.user.SysLoginHistoryServiceInterface;
import cn.kl.framework.system.service.inter.user.SysUserServiceInterface;
import cn.kl.framework.util.sys.SysUtil;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * @ClassName BusinessUserServiceImplements
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-27 18:22
 * @Version 1.0
 */
@Service
public class BusinessUserServiceImplements implements BusinessUserServiceInterface {

    /**
     * 日志输出对象
     */
    Logger logger = LoggerFactory.getLogger(BusinessUserServiceImplements.class);

    /**
     * 用户信息基础操作service
     */
    @Autowired
    SysUserServiceInterface sysUserService;

    /**
     * 登录历史信息基础操作service
     */
    @Autowired
    SysLoginHistoryServiceInterface sysLoginHistoryService;

    /**
     * @Description: 用户登录
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 9:38
     */
    @Override
    public ApiResponseResultEntity login(SysUserEntity sysUserEntity, HttpServletRequest request) throws AppException {
        try {
            return this.doLogin(sysUserEntity, request);
        } catch (AppException e) {
            logger.error("【BusinessUserServiceImplements.login】登录异常： " + e);
            throw e;
        } catch (Exception e) {
            logger.error("【BusinessUserServiceImplements.login】登录失败： " + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }


    /**
     * @Description: 根据登录id查询用户信息
     * @Params: [loginId]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 11:18
     */
    @Override
    public ApiResponseResultEntity getUserByLoginId(String loginId) throws AppException {
        try {
            SysUserEntity sysUserEntity = new SysUserEntity();
            sysUserEntity.setLoginid(loginId);
            sysUserEntity.setValid(Constants.YES);
            return sysUserService.getUsers(sysUserEntity);
        } catch (AppException e) {
            logger.error("【BusinessUserServiceImplements.getUserByLoginId】根据登录id查询用户信息出错： " + e);
            throw e;
        } catch (Exception e) {
            logger.error("【BusinessUserServiceImplements.getUserByLoginId】根据登录id查询用户信息出错： " + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description:
     * @Params: []
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 10:17
     */
    private ApiResponseResultEntity doLogin(SysUserEntity sysUserEntity, HttpServletRequest request) throws AppException {
        try {
            ApiResponseResultEntity apiResponseResult = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            UsernamePasswordToken usernamePasswordToken = new UsernamePasswordToken(sysUserEntity.getLoginid(), DigestUtils.md5Hex(sysUserEntity.getPassword()));
            Subject subject = SecurityUtils.getSubject();
            subject.login(usernamePasswordToken);   // 完成登录

            // 保存登录历史
            LoginResultVo loginResultVo = new LoginResultVo();
            loginResultVo.setToken(this.saveLoginHistory((SysUserEntity) subject.getPrincipal(), request));
            loginResultVo.setUser((SysUserEntity) subject.getPrincipal());
            apiResponseResult.setData(loginResultVo);

            return apiResponseResult;
        } catch (UnknownAccountException uae) {
            throw new AppException(LoginErrorCode.LOGIN_ID_ERROR);
        } catch (IncorrectCredentialsException ice) {
            throw new AppException(LoginErrorCode.LOGIN_ID_ERROR);
        } catch (LockedAccountException lae) {
            throw new AppException(LoginErrorCode.USERNAME_LOCKED);
        } catch (AuthenticationException ae) {
            throw new AppException(LoginErrorCode.LOGIN_ID_ERROR);
        } catch (Exception e) {
            logger.error("【BusinessUserServiceImplements.doLogin】登录失败： " + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 保存登录历史信息
     * @Params: [sysUserEntity, request]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 11:05
     */
    private String saveLoginHistory(SysUserEntity sysUserEntity, HttpServletRequest request) throws AppException {
        try {
            SysLoginHistoryEntity logEntity = new SysLoginHistoryEntity();
            logEntity.setUserid(sysUserEntity.getId());
            logEntity.setLogin_ip(SysUtil.getIpAddr(request));
            logEntity.setCreate_user(sysUserEntity.getId());
            logEntity.setModify_user(sysUserEntity.getId());

            String token = UUID.randomUUID().toString();
            logEntity.setToken(token);
            logEntity.setLogin_result("登录成功!");
            sysLoginHistoryService.saveLoginHistory(logEntity);

            return token;
        } catch (AppException e) {
            logger.error("【BusinessUserServiceImplements.doLogin】保存登录历史信息出错：" + e);
            throw e;
        } catch (Exception e) {
            logger.error("【BusinessUserServiceImplements.doLogin】保存登录历史信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 保存用户信息
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-05-05 11:46
     */
    @Override
    public ApiResponseResultEntity saveUser(SysUserEntity sysUserEntity, BasePojo basePojo) throws AppException {
        try {
            sysUserEntity.setModify_user(basePojo.getModify_user());
            return sysUserService.saveUser(sysUserEntity);
        } catch (AppException e) {
            logger.error("【BusinessUserServiceImplements.saveUser】保存用户信息出错： " + e);
            throw e;
        } catch (Exception e) {
            logger.error("【BusinessUserServiceImplements.saveUser】保存用户信息出错： " + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 删除用户信息
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-05-05 11:48
     */
    @Override
    public ApiResponseResultEntity deleteUser(List<Integer> ids, BasePojo basePojo) throws AppException {
        try {
            // 遍历用户并设置用户有效标志为无效
            SysUserEntity sysUserEntity = new SysUserEntity();
            sysUserEntity.setValid(Constants.NO);
            for (Integer id : ids) {
                sysUserEntity.setId(id);
                sysUserEntity.setModify_user(basePojo.getModify_user());
                sysUserEntity.setModify_time(new Date());
                sysUserService.saveUser(sysUserEntity);
            }
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity();
            apiResponseResultEntity.setCode(SysErrorCode.SUCCESS.getError_code());
            apiResponseResultEntity.setMessage("删除用户成功");
            return apiResponseResultEntity;
        } catch (AppException e) {
            logger.error("【BusinessUserServiceImplements.deleteUser】删除用户信息出错： " + e);
            throw e;
        } catch (Exception e) {
            logger.error("【BusinessUserServiceImplements.deleteUser】删除用户信息出错： " + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }

    /**
     * @Description: 分页查询用户信息
     * @Params: [sysUserEntity]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-28 17:35
     */
    @Override
    public ApiResponseResultEntity getUsersPage(SysUserEntity sysUserEntity) throws AppException {
        try {
            sysUserEntity.setModify_user(null);
            ApiResponseResultEntity apiResponseResultEntity = new ApiResponseResultEntity(SysErrorCode.SUCCESS);
            PageQueryPojo<SysUserEntity> sysUserEntityPageQueryPojo = new PageQueryPojo<>(
                    (Integer) sysUserService.getUserCount(sysUserEntity).getData(),
                    (List<SysUserEntity>) sysUserService.getUsers(sysUserEntity).getData());
            apiResponseResultEntity.setData(sysUserEntityPageQueryPojo);
            return apiResponseResultEntity;
        } catch (AppException e) {
            logger.error("【BusinessUserServiceImplements.getUsersPage】分页查询用户信息出错：" + e);
            throw e;
        } catch (Exception e) {
            logger.error("【BusinessUserServiceImplements.getUsersPage】分页查询用户信息出错：" + e);
            throw new AppException(SysErrorCode.SYSTEM_ERROR);
        }
    }
}
