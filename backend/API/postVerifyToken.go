package API

import (
	//"github.com/gin-contrib/sessions"

	"github.com/tanishqshek/Fundr/backend/internal/middleware"

	"net/http"

	"github.com/gin-gonic/gin"
	//"time"
)

func PostVerifyToken(c *gin.Context) {

	// session := sessions.Default(c)

	// var w http.ResponseWriter
	var req struct {
		Token    string `json:"token"`
		Username string `json:"username" binding:"required,email"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	if middleware.ResetTokenMap[req.Username] == req.Token {

		c.JSON(http.StatusOK, gin.H{
			"status":  "200",
			"message": "Token successfully verified.",
			"user":    req.Username,
		})

	} else {

		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": "Bad Token.",
			"user":    req.Username,
		})

	}
	// generate random token
	return
}
