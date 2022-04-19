package API

import (
	"net/http"
	"strings"

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

	var fetched_user model.User

	model.DB.DB.Find(&fetched_user, "user_id = ?", UserId)

	if fetched_user.UserType != "Founder" {
		c.JSON(http.StatusUnauthorized, gin.H{
			"status":  "401",
			"message": "Unauthorized",
		})
		return
	}

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

	var pitch_tags model.Pitch_tags
	tags := strings.Split(req.Tags, ",")
	for i := 0; i < len(tags); i++ {
		pitch_tags.PitchId = pitchId
		pitch_tags.TagId = strings.TrimSpace(tags[i])

		model.DB.DB.Save(&pitch_tags)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "201",
		"message": "Pitch added successfully.",
	})
	return
}
