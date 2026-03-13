package org.javasbdemo.api.plans;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.javasbdemo.api.plans.dto.PlanRequestDto;
import org.javasbdemo.api.plans.dto.PlanResponseDto;
import org.javasbdemo.lib.ResponseId;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
@RequiredArgsConstructor
public class PlanController {
    private final PlanService planService;

    @PostMapping()
    public ResponseId create(@Valid @RequestBody PlanRequestDto payload) {
       return planService.create(payload);
    }

    @GetMapping()
    public List<PlanResponseDto> get() {
        return planService.getAll();
    }
}
