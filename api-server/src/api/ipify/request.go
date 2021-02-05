package ipify

import (
	"io/ioutil"
	"net/http"
)

var (
	myIP string
)

func GetMyIP() (string, error) {
	if myIP != "" {
		return myIP, nil
	}
	url := "https://api.ipify.org?format=text"
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	ip, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}
	myIP = string(ip)
	return string(ip), nil
}