package socks

import (
	"config"
	"fmt"
	"io/ioutil"
	"net/http"
)

func GetPortFromTag(tag string) (string, error) {
	resp, err := http.Get(fmt.Sprintf("http://%s:8083/rs/%s",
		config.REVERSE_SOCKS_HOSTNAME, tag))
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	port, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}
	return string(port), nil
}
