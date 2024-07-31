package kr.co.ict.aws;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api")
public class AxiosTestController {

    @GetMapping("/msg")
    public String getMethodName() {
        return "안녕하세요***ffgfdgfdgdg**. 나의 첫 Axios 배포입니다.";
    }

}
