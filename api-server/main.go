package main

import "strconv"

func main() {
	r := GetRouter()
	r.Run(":" + strconv.Itoa(API_SERVER_PORT))
}
