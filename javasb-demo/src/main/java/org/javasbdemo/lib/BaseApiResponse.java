package org.javasbdemo.lib;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BaseApiResponse<T> {
    private boolean success;
    private String message;
    private T data;
}
