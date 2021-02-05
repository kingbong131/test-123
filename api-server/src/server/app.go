package server

import (
	"config"
	cStatus "controllers/status"
	"data"
	"github.com/gin-gonic/gin"
)

func Start() {
	cStatus.InitStatusController()

	gin.SetMode(gin.ReleaseMode)
	router := getRouter()
	router.Run(":" + config.PORT)
}

func Clear() {
	data.CloseConnection()
}
