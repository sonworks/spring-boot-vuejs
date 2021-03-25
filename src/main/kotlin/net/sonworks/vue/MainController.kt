package net.sonworks.vue

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MainController {

    @GetMapping("/greeting")
    fun greeting() = "Hello World!"
}