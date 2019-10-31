package <%= group %>

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class <%= mainClass %>

fun main(args: Array<String>) {
	runApplication<<%= mainClass %>>(*args)
}

