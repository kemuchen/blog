package cn.kl.framework.cache;

import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author ：柯雷
 * @ClassName:：CacheMangerImplements
 * @Description：缓存管理
 * @date ：2020/3/28 14:48
 */
public class CacheMangerImplements implements CacheManagerInterface {

    /** 缓存容器 */
    private static Map<String, CacheEntity> caches = new ConcurrentHashMap<>();

    /** 缓存管理对象 */
    private static CacheMangerImplements cacheMangerImplements = null;

    /**
     * @Description 无参构造函数
     * @Date 14:51 2020/3/28
     * @Param []
     * @return
     **/
    public CacheMangerImplements() {
    }

    /**
     * @Description 单例模式
     * @Date 14:51 2020/3/28
     * @Param []
     * @return cn.xpms.xpms.common.cache.CacheMangerImplements
     **/
    public static synchronized CacheMangerImplements getInstance(){
        if(cacheMangerImplements == null){
            cacheMangerImplements = new CacheMangerImplements();
        }
        return cacheMangerImplements;
    }

    /**
     * @Description 存入缓存
     * @Date 14:52 2020/3/28
     * @Param [key, data, cacheEntity]
     * @return void
     **/
    @Override
    public void putCache(String key, CacheEntity cacheEntity) {
        caches.put(key, cacheEntity);
    }

    /**
     * @Description 存入缓存
     * @Date 14:59 2020/3/28
     * @Param [key, datas, timeOut]
     * @return void
     **/
    @Override
    public void putCache(String key, Object data, long timeOut) {
        timeOut = timeOut > 0 ? timeOut : 0L;
        putCache(key, new CacheEntity(data, timeOut, System.currentTimeMillis()));
    }

    /**
     * @Description
     * @Date 14:56 2020/3/28
     * @Param [key]
     * @return cn.xpms.xpms.common.cache.CacheEntity
     **/
    @Override
    public CacheEntity getCacheByKey(String key) {
        return caches.get(key);
    }

    /**
     * @Description 获取缓存对应数据
     * @Date 15:03 2020/3/28
     * @Param [key]
     * @return java.lang.Object
     **/
    @Override
    public Object getCacheDataByKey(String key) {
        if (this.isContains(key)) {
            return caches.get(key).getData();
        }
        return null;
    }
    
    /**
     * @Description 获取所有缓存数据
     * @Date 15:03 2020/3/28
     * @Param []
     * @return java.util.Map<java.lang.String,cn.xpms.xpms.common.cache.CacheEntity>
     **/
    @Override
    public Map<String, CacheEntity> getCacheAll() {
        return caches;
    }
    
    /**
     * @Description 判断是否在缓存中
     * @Date 15:03 2020/3/28
     * @Param [key]
     * @return boolean
     **/
    @Override
    public boolean isContains(String key) {
        return caches.containsKey(key);
    }
    
    /**
     * @Description 清楚所有缓存
     * @Date 15:04 2020/3/28
     * @Param []
     * @return void
     **/
    @Override
    public void clearAll() {
        caches.clear();
    }
    
    /**
     * @Description 清除对应缓存
     * @Date 15:04 2020/3/28
     * @Param [key]
     * @return void
     **/
    @Override
    public void clearByKey(String key) {
        if(this.isContains(key)) {
            caches.remove(key);
        }
    }
    
    /**
     * @Description 缓存是否失效
     * @Date 15:05 2020/3/28
     * @Param [key]
     * @return boolean
     **/
    @Override
    public boolean isTimeOut(String key) {
        if (!this.isContains(key)) {
            return true;
        }
        CacheEntity cacheEntity = caches.get(key);
        long timeOut = cacheEntity.getTimes();
        long lastRefreshTime = cacheEntity.getLastRefreshTime();
        if (timeOut != 0 && System.currentTimeMillis() - lastRefreshTime >= timeOut) {
            return true;
        }
        return false;
    }

    /**
     * @Description 获取所有key
     * @Date 15:05 2020/3/28
     * @Param []
     * @return java.util.Set<java.lang.String>
     **/
    @Override
    public Set<String> getAllKeys() {
        return caches.keySet();
    }
}
