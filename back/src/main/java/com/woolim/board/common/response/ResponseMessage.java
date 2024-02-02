package com.woolim.board.common.response;

public interface ResponseMessage {
  String SUCCESS = "Success";

  String EXISTED_EMAIL = "Existed Email";
  String EXISTED_NICKNAME = "Existed Nickname";
  String EXISTED_TEL_NUMBER = "Existed Tel Number";

  String NO_EXISTED_USER = "Existed User";
  String NO_EXISTED_BOARD = "Existed Board";

  String NO_PERMISSION = "No Permission";

  String SIGN_IN_FAIL = "Sign In Data Mismatch";

  String DATABASE_ERROR = "Database Error";
}
