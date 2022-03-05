package API

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/model"
)

func GetPitch(c *gin.Context) {

	id := c.Param("id")

	var fetched_user model.User

	model.DB.DB.First(&fetched_user, "UserId = ?", id)

	if fetched_user.UserType == "Investor" {
		DisplayCards(id)
	}

	var pitch model.Pitch_master

	if err := c.ShouldBindJSON(&pitch); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	// session := sessions.Default(c)
	// key := session.Get(middleware.SESSIONKEY)

	// SessionId := middleware.SessionMap[key.(string)]
	// UserId := middleware.SessionMap[SessionId]

	// founder.Id = UserId
	// model.DB.DB.Save(&founder)
}

func DisplayCards(id string) {

	var pitch model.Pitch_master

	model.DB.DB.Find(&pitch)

	fmt.Print(pitch)

}
