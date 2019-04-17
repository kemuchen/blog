package cn.muchen.blog.web;


import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class TestController  {

    private static final int TOTAL_COUNT = 14;

    private static final int PAGE_SIZE = 3;

    Logger logger = LoggerFactory.getLogger(TestController.class);

    @RequestMapping("/home")
    public Map<String, Object> getHomeData(@RequestBody String param) {
        logger.info("获取首页数据");
        List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
        logger.info(param);
        Map<String, Object> inMap = JSONObject.parseObject(param);

        Integer currentPage = (Integer) inMap.get("currentPage");
        for (int i = 0; i < PAGE_SIZE && (currentPage - 1) * PAGE_SIZE + i < TOTAL_COUNT; i++) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("title", "标题" + ((currentPage - 1) * 3 + i + 1));
            map.put("description", "Ant Design, a design language for background applications, is refined by Ant UED Team.");
            map.put("content", "We supply a series of design principles, practical patterns and " +
                    "high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.");
            map.put("img", "http://localhost:8080/web/image/" + (i + 1) + ".jpg");
            list.add(map);
        }
        Map<String, Object> returnMap = new HashMap<String, Object>();
        returnMap.put("articleList", list);
        returnMap.put("total", TOTAL_COUNT);

        logger.info(returnMap.toString());
        return returnMap;
    }
}
