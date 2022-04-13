package API

import (
	"net/http"
	"strings"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func PostTags(c *gin.Context) {

	var req struct {
		Tags string `json:"tags" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}
	session := sessions.Default(c)
	key := session.Get(middleware.SESSIONKEY)

	UserId := middleware.SessionMap[key.(string)]

	var fetched_user model.User

	model.DB.DB.Find(&fetched_user, "user_id = ?", UserId)

	if fetched_user.UserType != "Investor" {
		c.JSON(http.StatusUnauthorized, gin.H{
			"status":  "401",
			"message": "Unauthorized",
		})
	}

	var user_tags model.User_tags
	tags := strings.Split(req.Tags, ",")
	for i := 0; i < len(tags); i++ {
		user_tags.UserId = UserId
		user_tags.TagId = strings.TrimSpace(tags[i])

		model.DB.DB.Save(&user_tags)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "201",
		"message": "tags added successfully.",
	})
	return
}
