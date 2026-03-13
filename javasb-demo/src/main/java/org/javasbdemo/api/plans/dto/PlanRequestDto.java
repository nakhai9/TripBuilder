package org.javasbdemo.api.plans.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlanRequestDto {
    @NotBlank(message = "Title is required")
    private String title;
    private String description;
    private boolean isPublic;
    private String accessCode;
    private String userId;
}
