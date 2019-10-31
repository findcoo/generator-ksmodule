package com.mymodule

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MyClassApplication

fun main(args: Array<String>) {
	runApplication<MyClassApplication>(*args)
}

