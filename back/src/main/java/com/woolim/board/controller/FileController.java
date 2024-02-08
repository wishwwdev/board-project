package com.woolim.board.controller;

import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.woolim.board.service.FileService;

import lombok.RequiredArgsConstructor;

// controller : 파일 컨트롤러 //
@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
public class FileController {

  private final FileService fileService;
  
  // API : 파일 업로드 메서드 //
  @PostMapping("/upload")
  public String upload(
    @RequestParam("file") MultipartFile file
  ) {
    String url = fileService.upload(file);
    return url;
  }
  
  // API : 이미지 불러오기 메서드 //
  @GetMapping("/{fileName}")
  public Resource getFile(
    @PathVariable(value = "fileName", required = true) String fileName
  ) {
    return null;
  }

}
