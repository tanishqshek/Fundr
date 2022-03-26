package API

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func GetMatches(c *gin.Context) {

	session := sessions.Default(c)
	key := session.Get(middleware.SESSIONKEY)

	UserId := middleware.SessionMap[key.(string)]

	var fetched_user model.User

	var matches []model.Matches

	model.DB.DB.First(&fetched_user, "user_id = ?", UserId)

	if fetched_user.UserType == "Investor" {
		model.DB.DB.Find(&matches, "investor_id = ?", UserId)
	} else {
		model.DB.DB.Find(&matches, "founder_id = ?", UserId)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": matches,
	})
	return

}
