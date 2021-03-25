package net.sonworks.vue

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class VueApplication

fun main(args: Array<String>) {
	runApplication<VueApplication>(*args)
}
