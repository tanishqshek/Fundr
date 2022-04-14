package server

import (
	"github.com/tanishqshek/Fundr/backend/API"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"

	"net/http"

	"github.com/gin-contrib/sessions/cookie"

	"github.com/gin-gonic/gin"

	"github.com/gin-contrib/sessions"
)

func SetRouter() *gin.Engine {
	// Creates default gin router with Logger and Recovery middleware already attached
	router := gin.Default()

	middleware.SessionMap = make(map[string]string)
	middleware.ResetTokenMap = make(map[string]string)
	router.Use(sessions.Sessions("mysession", cookie.NewStore([]byte("secret"))))

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	// Create API route group
	api := router.Group("/api")
	{
		// Add /hello GET route to router and define route handler function

		api.POST("/signup", API.SignUp)
		api.POST("/signin", API.SignIn)
		api.POST("/genresettoken", API.GenResetToken)
		api.POST("/verifytoken", API.VerifyToken)
		auth := api.Group("/auth")
		auth.Use(middleware.AuthRequired)
		{
			auth.POST("/swipe", API.HandleSwipe)
			auth.POST("/postfdata", API.PostFounderData)
			auth.POST("/postpitch", API.PostPitch)
			auth.GET("/getpitch", API.GetPitch)
			auth.GET("/getmatches", API.GetMatches)
			auth.GET("/getmypitches", API.GetMyPitch)
			auth.POST("/posttags", API.PostTags)
			auth.GET("/getuserdata", API.GetUserData)
			auth.GET("/verifytags", API.VerifyTags)
		}
	}

	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
