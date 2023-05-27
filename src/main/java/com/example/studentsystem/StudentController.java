package com.example.studentsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping
    public String saveStudent(@RequestBody Student studentToAdd) {
        studentService.saveStudent(studentToAdd);
        return "Added: " + studentToAdd.getName();
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
