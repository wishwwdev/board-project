package com.woolim.board.config;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.woolim.board.filter.JwtAuthenticationFilter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
  
  private final JwtAuthenticationFilter jwtAuthenticationFilter;

  @Bean
  protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {

    httpSecurity
      .cors(Customizer.withDefaults())
      .csrf(c -> c.disable())
      .httpBasic(b -> b.disable())
      .sessionManagement(m -> m.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      .authorizeHttpRequests(r -> {
        try {
          r
            .requestMatchers("/", "/api/v1/auth/**", "/api/v1/search/**", "/file/**").permitAll()
            .requestMatchers(HttpMethod.GET, "/api/v1/board/**").permitAll()
            .requestMatchers(HttpMethod.GET, "/api/v1/user/*").permitAll()
            .anyRequest().authenticated();
        } catch (Exception exception) {
          exception.printStackTrace();
        }
      }) 
      .exceptionHandling(e -> 
            e.authenticationEntryPoint(new FailedAuthenticationEntryPoint()))
      .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

    return httpSecurity.build();
  }

}

class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint {

  @Override
  public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
      throws IOException, ServletException {
    response.setContentType("application/json");
    response.setStatus(HttpServletResponse.SC_FORBIDDEN);
    // json코드로 결과를 받을 거라서, json코드를 적으려면 '\'를 사용해줘야함
    response.getWriter().write("{ \"code\": \"AF\", \"message\": \"Authorization Failed\" }");
  }
  
}
