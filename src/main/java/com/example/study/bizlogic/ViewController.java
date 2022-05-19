package com.example.study.bizlogic;

import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/admin")
public class ViewController {


    @GetMapping
    public String home(Model model , HttpServletRequest reqeust ) {
        model.addAttribute("menuTitle", "대시보드1555");
        return "index";
    }

    @GetMapping("/test")
    public String test(Model model , HttpServletRequest reqeust ) {
        model.addAttribute("menuTitle", "대시보드");
        return "test";
    }



}