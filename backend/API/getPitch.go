package API

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/model"
)

func GetPitch(c *gin.Context) {

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
