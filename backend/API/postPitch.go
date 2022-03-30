package API

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func PostPitch(c *gin.Context) {

	var req struct {
		CompanyName string `json:"company_name" binding:"required"`
		Description string `json:"description" binding:"required"`
		ImageUrl    string `json:"image_url" binding:"required"`
		Tags        string `json:"tags" binding:"required"`
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

	pitchId := uuid.NewString()
	pitch := model.Pitch_master{
		PitchId: pitchId,
		UserId:  UserId,
	}

	pitch_description := model.Pitch_description{
		UserId:      UserId,
		PitchId:     pitchId,
		ImageUrl:    req.ImageUrl,
		CompanyName: req.CompanyName,
		Description: req.Description,
		Tags:        req.Tags,
	}

	model.DB.DB.Save(&pitch)
	model.DB.DB.Save(&pitch_description)
	c.JSON(http.StatusOK, gin.H{
		"status":  "201",
		"message": "Pitch added successfully.",
	})
	return
}
