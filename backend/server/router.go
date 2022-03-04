package server

import (
	"github.com/tanishqshek/Fundr/backend/API"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"

	"net/http"

	"github.com/gin-contrib/sessions/cookie"

	"github.com/gin-gonic/gin"

	"github.com/gin-contrib/sessions"
)

func setRouter() *gin.Engine {
	// Creates default gin router with Logger and Recovery middleware already attached
	router := gin.Default()
	// store, _ := redis.NewStore(10, "tcp", "localhost:6379", "", []byte("secret"))
	// router.Use(sessions.Sessions("mysession", store))
	middleware.SessionMap = make(map[string]string)

	router.Use(sessions.Sessions("mysession", cookie.NewStore([]byte("secret"))))

	// Create API route group
	api := router.Group("/api")
	{
		// Add /hello GET route to router and define route handler function
		api.POST("/signup", API.SignUp)
		api.POST("/signin", API.SignIn)
		auth := api.Group("/auth")
		auth.Use(middleware.AuthRequired)
		{
			auth.POST("/swipe", API.HandleSwipe)
		}
	}

	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
