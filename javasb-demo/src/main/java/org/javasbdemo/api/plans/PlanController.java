package org.javasbdemo.api.plans;

import org.javasbdemo.api.plans.dto.PlanRequestDto;
import org.javasbdemo.api.plans.dto.PlanResponseDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/plans")
public class PlanController {
    @PostMapping()
    public String create(@RequestBody PlanRequestDto payload) {
        return "Tạo thành công";
    }
}
