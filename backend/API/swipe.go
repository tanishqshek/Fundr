package API

import (
	"github.com/tanishqshek/Fundr/backend/model"

	"github.com/gin-gonic/gin"
)

func HandleSwipe(c *gin.Context) {

	var fetched_user model.User
	var investor model.Investor

	var req struct {
		Username string `json:"username" binding:"required,email"`
		Action   string `json:"action" binding:"required"`
		Target   string `json:"target" binding:"required"`
	}

	model.DB.DB.First(&fetched_user, "Username = ?", req.Username)
	model.DB.DB.First(&investor, "User_id = ?", fetched_user.UserId)

	if req.Action == "right" {
		investor.Matches = investor.Matches + "," + req.Target
		var founder model.Founder
		model.DB.DB.First(&founder, "User_id = ?", fetched_user.UserId)
		founder.Matches = founder.Matches + "," + req.Username
	} else if req.Action == "left" {
		investor.Rejects = investor.Rejects + "," + req.Target
	} else {
		investor.Archive = investor.Archive + "," + req.Target
	}
}
