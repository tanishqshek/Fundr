package API

import (
	"net/http"
	"time"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func PostPitch(c *gin.Context) {

	var req struct {
		Id            string `json:"Id" binding:"required"`
		Creation_date time.Time
		Creation_time time.Time
		Pitch_Name    string
		Description   string
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

	pitch := model.Pitch_master{
		Id:     req.Id,
		UserId: UserId,
	}

	pitch_description := model.Pitch_description{
		Id:          req.Id,
		CompanyName: req.Pitch_Name,
		Description: req.Description,
	}

	model.DB.DB.Save(&pitch)
	model.DB.DB.Save(&pitch_description)
}
