package com.woolim.board.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class MainController {

  // API : 서버오픈 여부 확인 메서드 //
  @GetMapping("")
  public String hello() {
    return "Server On...";
  }
  
}
