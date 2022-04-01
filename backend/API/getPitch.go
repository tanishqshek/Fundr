package API

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func GetPitch(c *gin.Context) {

	session := sessions.Default(c)
	key := session.Get(middleware.SESSIONKEY)

	UserId := middleware.SessionMap[key.(string)]

	var fetched_user model.User

	model.DB.DB.First(&fetched_user, "user_id = ?", UserId)

	// if fetched_user.UserType == "Investor" {

	var pitches []model.Pitch_description

	sub1 := model.DB.DB.Table("matches").Select("pitch_id").Where("investor_id = ?", UserId).SubQuery()

	sub2 := model.DB.DB.Table("rejects").Select("pitch_id").Where("investor_id = ?", UserId).SubQuery()

	sub3 := model.DB.DB.Table("archives").Select("pitch_id").Where("investor_id = ?", UserId).SubQuery()

	model.DB.DB.Table("pitch_descriptions").Where("pitch_id NOT IN ?", sub1).Where("pitch_id NOT IN ?", sub2).Where("pitch_id NOT IN ?", sub3).Find(&pitches)

	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": pitches,
	})
	return
	// } else {
	// 	c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
	// 		"status":  "401",
	// 		"message": "You cannot view this page",
	// 	})
		return
	}

	// var pitch model.Pitch_master

	// if err := c.ShouldBindJSON(&pitch); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{
	// 		"status":  "400",
	// 		"message": err.Error(),
	// 	})
	// 	return
// }

// session := sessions.Default(c)
// key := session.Get(middleware.SESSIONKEY)

// SessionId := middleware.SessionMap[key.(string)]
// UserId := middleware.SessionMap[SessionId]

// founder.Id = UserId
// model.DB.DB.Save(&founder)
