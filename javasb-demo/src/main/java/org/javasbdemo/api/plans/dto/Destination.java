package org.javasbdemo.api.plans.dto;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Destination {
    private String codeName;
    private List<String> activities;
    private Integer day;
    private String name;
}

