package cn.kl.framework.common.web;

import cn.kl.framework.common.entity.ApiResponseResultEntity;
import cn.kl.framework.common.service.inter.BusinessCommonServiceInterface;
import cn.kl.framework.security.exception.AppException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

/**
 * @ClassName CommonMoldPostController
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-29 11:59
 * @Version 1.0
 */
@Api(tags = "公共新建接口")
@RestController
@RequestMapping("/api/system/")
public class CommonMoldPostController {

    /** 公共业务操作service */
    @Autowired
    BusinessCommonServiceInterface businessCommonServiceInterface;

    /**
     * @Description:
     * @Params: [dicttype]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-29 17:36
     */
    @ApiOperation("1.文件上传")
    @PostMapping(value = "file")
    public ApiResponseResultEntity file(@RequestParam String filePath, @RequestParam("file") MultipartFile[] files) throws AppException {
        return businessCommonServiceInterface.fileUpload(filePath, files);
    }

    /**
     * @Description: 文件上传(Base64格式)
     * @Params: [params]
     * @return: cn.kl.framework.common.entity.ApiResponseResultEntity
     * @Author: 柯雷
     * @Date: 2020-04-29 17:39
     */
    @ApiOperation("1.文件上传(Base64格式)")
    @PostMapping(value = "fileBase64")
    public ApiResponseResultEntity fileBase64(@RequestBody Map<String, Object> params) throws AppException {
        return businessCommonServiceInterface.fileUploadBase64(params);
    }
}
