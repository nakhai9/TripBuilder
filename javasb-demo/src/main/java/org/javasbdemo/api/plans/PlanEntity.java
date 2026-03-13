package org.javasbdemo.api.plans;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.javasbdemo.lib.BaseEntity;

@Entity
@Table(name = "plans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlanEntity extends BaseEntity {
    @Column(nullable = false)
    private String title;

    @Column(nullable = true)
    private String description;

    @Column(nullable = true)
    private String accessCode;

    @Column(nullable = false)
    private boolean isPublic = false;

    @Column(nullable = false)
    private String userId;
}
