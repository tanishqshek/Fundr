package API

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"

	"github.com/google/uuid"

	"net/http"
)

func HandleSwipe(c *gin.Context) {

	// var fetched_user model.User
	// var investor model.Investor
	// var founder model.Founder

	var req struct {
		// Username string `json:"username" binding:"required,email"`
		Action  string `json:"action" binding:"required"`
		Target  string `json:"target" binding:"required"`
		PitchId string `json:"pitch_id" binding:"required"`
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

	// model.DB.DB.First(&fetched_user, "Username = ?", req.Username)
	// model.DB.DB.Model(&investor).Association("user").Find(&investor.User)
	// model.DB.DB.First(&fetched_user, "Username = ?", req.Target)
	// model.DB.DB.Model(&founder).Association("user").Find(&founder.User)

	action := ""
	if req.Action == "right" {
		action = "Match"
		match := model.Matches{
			MatchId:    uuid.NewString(),
			InvestorId: UserId,
			FounderId:  req.Target,
			PitchId:    req.PitchId,
		}

		result := model.DB.DB.Create(match)
		err := result.Error

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "500",
				"message": err.Error(),
			})
			return
		}

	} else if req.Action == "left" {

		action = "Reject"
		match := model.Rejects{
			RejectId:   uuid.NewString(),
			InvestorId: UserId,
			FounderId:  req.Target,
			PitchId:    req.PitchId,
		}

		result := model.DB.DB.Create(match)
		err := result.Error

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "500",
				"message": err.Error(),
			})
			return
		}
	} else {

		action = "Archive"
		match := model.Archive{
			ArchiveId:  uuid.NewString(),
			InvestorId: UserId,
			FounderId:  req.Target,
			PitchId:    req.PitchId,
		}

		result := model.DB.DB.Create(match)
		err := result.Error

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "500",
				"message": err.Error(),
			})
			return
		}
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": action + " Succesfull",
	})
	return
}
