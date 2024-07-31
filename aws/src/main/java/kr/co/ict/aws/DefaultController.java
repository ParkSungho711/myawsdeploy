package kr.co.ict.aws;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultController {
    @RequestMapping(value = { "/", "/aws/**" })
    public String index() {
        System.out.println("Index가 호출이 됨!");
        return "forward:/index.html";
    }
}
