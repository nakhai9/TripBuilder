package org.javasbdemo.api.plans.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Builder
@Getter
@Setter
public class PlanResponseDto {
    private UUID id;
    private String title;
}
