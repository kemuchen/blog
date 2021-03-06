package cn.kl.framework.security.filter;

import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.common.service.inter.BusinessCommonServiceInterface;
import cn.kl.framework.security.exception.codes.LoginErrorCode;
import cn.kl.framework.security.exception.codes.SysErrorCode;
import cn.kl.framework.util.sys.SysUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

/**
 * @author ：柯雷
 * @ClassName:：CheckLoginInterceptor
 * @Description：
 * @date ：2020/3/26 9:38
 */
@Component
public class CheckLoginInterceptor  extends HandlerInterceptorAdapter {

    /** 日志输出对象 */
    Logger logger = LoggerFactory.getLogger(CheckLoginInterceptor.class);

    /** 公共业务处理service */
    @Autowired
    BusinessCommonServiceInterface businessCommonService;

    /**
     *
     * <p>Title：preHandle</p>
     * <p>Description：拦截器处理 </p>
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     * @see HandlerInterceptorAdapter#preHandle(HttpServletRequest, HttpServletResponse, Object)
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws
            Exception {
        logger.info("【CheckLoginInterceptor.preHandle】检查是否登录");
        String token = request.getParameter("token");
        Integer userid = Integer.parseInt(request.getParameter("modify_user"));

        /** 校验token */
        ApiResponseResultEntity apiResponseResultEntity = businessCommonService.checkToken(token, userid);
        if (!LoginErrorCode.LOGIN_SUCCESS.getError_code().equals(apiResponseResultEntity.getCode())) {
            PrintWriter writer = response.getWriter();
            writer.print(apiResponseResultEntity);
            return false;
        }
        return super.preHandle(request, response, handler);
    }
}
