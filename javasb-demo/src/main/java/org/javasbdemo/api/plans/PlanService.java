package org.javasbdemo.api.plans;

import lombok.RequiredArgsConstructor;
import org.javasbdemo.api.books.BookEntity;
import org.javasbdemo.api.books.BookResponseDto;
import org.javasbdemo.api.plans.dto.PlanRequestDto;
import org.javasbdemo.api.plans.dto.PlanResponseDto;
import org.javasbdemo.lib.ResponseId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlanService {
    private final PlanRepository planRepository;

    public static String USER_ID = "69a411236ef8aea7d9e0e96c";

    public ResponseId create(PlanRequestDto request) {
        PlanEntity plan = PlanEntity.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .isPublic(request.getAccessCode() != null)
                .accessCode(request.getAccessCode())
                .userId(request.getUserId() != null ? request.getUserId() : USER_ID)
                .build();

        PlanEntity savedPlan = planRepository.save(plan);

        return new ResponseId(savedPlan.getId().toString());
    }

    public List<PlanResponseDto> getAll() {
        return planRepository
                .findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private PlanResponseDto mapToResponse(PlanEntity plan) {
        return PlanResponseDto.builder()
                .id(plan.getId())
                .title(plan.getTitle())
                .build();
    }
}
