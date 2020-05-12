package cn.kl.framework.security.exception.codes;

/**
 * @ClassName BaseErrorCode
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-28 10:50
 * @Version 1.0
 */
public interface BaseErrorCode {

    /** 错误代码 */
    String error_code = "";

    /** 错误描述 */
    String error_desc = "";

    /** 前台提示 */
    String tip = "";

    String getError_code();

    String getError_desc();

    String getTip();
}
