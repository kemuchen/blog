package cn.muchen.blog.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * @author ：柯雷
 * @ClassName:：WebCorsConfig
 * @Description：跨域访问控制
 * @date ：2019-04-17 16:54
 */
@Configuration
public class WebCorsConfig {
    
    /*
     * @Author 柯雷
     * @Description 设置跨域访问控制
     * @Date 2019-04-17 16:58 
     * @Param
     * @return 
     *
     **/
    private CorsConfiguration buildConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*"); // 1 设置访问源地址
        corsConfiguration.addAllowedHeader("*"); // 2 设置访问源请求头
        corsConfiguration.addAllowedMethod("*"); // 3 设置访问源请求方法
        corsConfiguration.setAllowCredentials(true);
        return corsConfiguration;
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", buildConfig()); // 4 对接口配置跨域设置
        return new CorsFilter(source);
    }
}
