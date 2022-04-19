package API

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func VerifyTags(c *gin.Context) {

	session := sessions.Default(c)
	key := session.Get(middleware.SESSIONKEY)

	UserId := middleware.SessionMap[key.(string)]

	var fetched_user []model.User_tags

	model.DB.DB.First(&fetched_user, "user_id = ?", UserId)

	if len(fetched_user) > 0 {

		c.JSON(http.StatusOK, gin.H{
			"status":  "200",
			"message": "True",
		})
	} else {

		c.JSON(http.StatusOK, gin.H{
			"status":  "400",
			"message": "False",
		})

	}

}
