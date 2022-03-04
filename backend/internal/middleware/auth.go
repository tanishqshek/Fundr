package middleware

import (
	"net/http"

	"github.com/gin-contrib/sessions"

	"github.com/gin-gonic/gin"
)

// func Authentication() gin.HandlerFunc {
// 	return func(c *gin.Context) {
// 		session := sessions.Default(c)
// 		sessionID := session.Get("id")
// 		if sessionID == nil {
// 			c.JSON(http.StatusNotFound, gin.H{
// 				"status":  "401",
// 				"message": "unauthorized",
// 			})
// 			c.Abort()
// 		}
// 	}
// }

var SessionMap map[string]string

const (
	SESSIONKEY = "SessionKey"
)

func AuthRequired(c *gin.Context) {
	session := sessions.Default(c)
	key := session.Get(SESSIONKEY)
	if key == nil {
		// Abort the request with the appropriate error code
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	if SessionMap[key.(string)] == "" {
		// Abort the request with the appropriate error code
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	// Continue down the chain to handler etc
	c.Next()
}
