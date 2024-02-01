package com.woolim.board.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// controller : 파일 컨트롤러 //
@RestController
@RequestMapping("/api/vi/file")
public class FileController {
  
  // API : 파일 업로드 메서드 //
  @PostMapping("/upload")
  public String upload() {
    return null;
  }

}
