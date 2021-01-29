package main

import (
	"log"

	"domain.com/config"
	"domain.com/server"
)

func main() {
	err := server.Init()
	if err != nil {
		panic(err)
	}
	log.Fatal(server.Run(config.PORT))
}
