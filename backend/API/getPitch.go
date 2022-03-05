package API

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/model"
)

func GetPitch(c *gin.Context) {

	id := c.Param("id")

	var fetched_user model.User

	model.DB.DB.First(&fetched_user, "user_id = ?", id)

	if fetched_user.UserType == "I" {

		var pitches []model.Pitch_description
		model.DB.DB.Find(&pitches)

		c.JSON(http.StatusOK, gin.H{
			"status":  "200",
			"message": pitches,
		})

	}

	// var pitch model.Pitch_master

	// if err := c.ShouldBindJSON(&pitch); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{
	// 		"status":  "400",
	// 		"message": err.Error(),
	// 	})
	// 	return
}

// session := sessions.Default(c)
// key := session.Get(middleware.SESSIONKEY)

// SessionId := middleware.SessionMap[key.(string)]
// UserId := middleware.SessionMap[SessionId]

// founder.Id = UserId
// model.DB.DB.Save(&founder)
