package cn.kl.framework.cache;

import java.util.Map;
import java.util.Set;

/**
 * @author ：柯雷
 * @ClassName:：CacheManagerInterface
 * @Description：
 * @date ：2020/3/28 14:42
 */
public interface CacheManagerInterface {

    /**
     * @Description 存入缓存
     * @Date 14:44 2020/3/28
     * @Param [key, data, cacheEntity]
     * @return void
     **/
    void putCache(String key, CacheEntity cacheEntity);

    /**
     * @Description 存入缓存
     * @Date 14:58 2020/3/28
     * @Param [key, datas, timeOut]
     * @return void
     **/
    void putCache(String key, Object datas, long timeOut);

    /**
     * @Description 获取对应缓存
     * @Date 14:45 2020/3/28
     * @Param [key]
     * @return cn.xpms.xpms.common.cache.CacheEntity
     **/
    CacheEntity getCacheByKey(String key);

    /**
     * @Description 获取对应缓存数据
     * @Date 15:02 2020/3/28
     * @Param [key]
     * @return java.lang.Object
     **/
    Object getCacheDataByKey(String key);
    
    /**
     * @Description 获取所有缓存
     * @Date 14:46 2020/3/28
     * @Param []
     * @return java.util.Map<java.lang.String,cn.xpms.xpms.common.cache.CacheEntity>
     **/
    Map<String, CacheEntity> getCacheAll();
    
    /**
     * @Description 判断是否在缓存中
     * @Date 14:46 2020/3/28
     * @Param [key]
     * @return boolean
     **/
    boolean isContains(String key);

    /**
     * @Description 清除所有缓存
     * @Date 14:47 2020/3/28
     * @Param []
     * @return void
     **/
    void clearAll();
    
    /**
     * @Description 清除对应缓存
     * @Date 14:47 2020/3/28
     * @Param [key]
     * @return void
     **/
    void clearByKey(String key);
    
    /**
     * @Description 缓存是否超时失效
     * @Date 14:48 2020/3/28
     * @Param [key]
     * @return boolean
     **/
    boolean isTimeOut(String key);

    /**
     * @Description 获取所有key
     * @Date 14:48 2020/3/28
     * @Param []
     * @return java.util.Set<java.lang.String>
     **/
    Set<String> getAllKeys();
}
