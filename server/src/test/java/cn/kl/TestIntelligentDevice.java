package cn.kl;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ImportResource;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @ClassName TestIntelligentDevice
 * @Desc
 * @Author 柯雷
 * @Date 2020-04-24 16:42
 * @Version 1.0
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ImportResource(locations = "cn.xpms.**.*.xml")
public class TestIntelligentDevice {

    @Test
    public void testDevice() {
        System.err.println(1);
    }
}
