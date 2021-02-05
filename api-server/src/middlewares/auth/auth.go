package auth

import (
	cAuth "controllers/auth"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CheckUserToken(c *gin.Context) {
	token := c.GetHeader("Token")
	authSuccess, err := cAuth.CheckToken(token)
	if err != nil {
		c.JSON(http.StatusInternalServerError, cAuth.Response{
			Code:    http.StatusInternalServerError,
			Message: err.Error(),
		})
		c.Abort()
		return
	}
	if authSuccess {
		c.Next()
	} else {
		c.JSON(http.StatusUnauthorized, cAuth.Response{
			Code:    http.StatusUnauthorized,
			Message: "Wrong Authorization.",
		})
		c.Abort()
		return
	}
}
