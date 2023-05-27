package com.example.studentsystem;

import org.springframework.beans.factory.annotation.Autowired;

public class StudentServiceImpl implements StudentService{
    @Autowired
    private  StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student studentToBeSaved) {
        return studentRepository.save(studentToBeSaved);
    }
}
