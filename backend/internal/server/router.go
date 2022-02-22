package server

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"Fundr/backend/internal/session-redis/src/middleware"

	"github.com/gin-contrib/sessions"

	"github.com/gin-contrib/sessions/redis"
)

func setRouter() *gin.Engine {
	// Creates default gin router with Logger and Recovery middleware already attached
	router := gin.Default()
	store, _ := redis.NewStore(10, "tcp", "localhost:6379", "", []byte("secret"))
	router.Use(sessions.Sessions("mysession", store))
	// Create API route group
	api := router.Group("/api")
	{
		// Add /hello GET route to router and define route handler function
		api.POST("/signup", signUp)
		api.POST("/signin", signIn)
		auth := api.Group("/auth")
		auth.Use(middleware.Authentication())
		{
			auth.POST("/test")
		}
	}

	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
