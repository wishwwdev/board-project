package com.woolim.board.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.woolim.board.filter.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
  
  private final JwtAuthenticationFilter jwtAuthenticationFilter;

  @Bean
  protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {

    httpSecurity
      .cors(cors -> cors.disable())
      .csrf(csrf -> csrf.disable())
      .httpBasic(basic -> basic.disable())
      .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      .authorizeHttpRequests(requests -> {
        try {
          requests
            .requestMatchers("/", "/api/v1/auth/**", "/api/v1/search/**", "/file/**").permitAll()
            .requestMatchers(HttpMethod.GET, "/api/v1/board/**").permitAll()
            .requestMatchers(HttpMethod.GET, "/api/v1/user/*").permitAll()
            .anyRequest().authenticated();
        } catch (Exception exception) {
          exception.printStackTrace();
        }
      }) 
      .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

    return httpSecurity.build();
  }

}
