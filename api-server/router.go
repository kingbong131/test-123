package main

import "github.com/gin-gonic/gin"

func GetRouter() *gin.Engine {
	r := gin.Default()
	api := r.Group("/api")
	{
		v1 := api.Group("/v1")
		{
			v1.POST("/auth") // Auth kakao token
			v1.POST("/register") // Add user information to database

			product := v1.Group("/product")
			{
				product.GET("/list") // Get product list
				product.GET("/detail") // Get product detail

				product.POST("/add") // Add new product
			}

			qna := v1.Group("/qna")
			{
				qna.GET("/list") // Get qna list

				qna.POST("/add") // Create new QnA
			}

			blog := v1.Group("/blog")
			{
				blog.GET("/list") // Get post list

				blog.POST("/new") // Make new post request
				blog.POST("/accept") // Accept new post request
			}
		}
	}
	return r
}
