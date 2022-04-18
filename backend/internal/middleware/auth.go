package middleware

import (
	"net/http"

	"github.com/gin-contrib/sessions"

	"github.com/gin-gonic/gin"
)

var SessionMap map[string]string
var ResetTokenMap map[string]string

const (
	SESSIONKEY = "SessionKey"
)

func AuthRequired(c *gin.Context) {
	session := sessions.Default(c)
	key := session.Get(SESSIONKEY)
	if key == nil {
		// Abort the request with the appropriate error code
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"status":  "401",
			"message": "Unauthorized Route"})
		return
	}
	b := SessionMap[key.(string)]
	if b == "" {

	}
	if SessionMap[key.(string)] == "" {

		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"status":  "401",
			"message": "Unauthorized Route"})
		return
	}

	c.Next()
}
