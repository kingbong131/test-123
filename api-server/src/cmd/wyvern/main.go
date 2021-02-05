package main

import (
	"server"
)

func main() {
	server.Start()
	defer server.Clear()
}
