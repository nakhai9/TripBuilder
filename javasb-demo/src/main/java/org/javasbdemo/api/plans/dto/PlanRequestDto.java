package org.javasbdemo.api.plans.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PlanRequestDto {
    private String title;
    private String description;
    private List<Destination> destinations;
    private boolean isPublic;
    private String accessCode;
    private String userId;
}
