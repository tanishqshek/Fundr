package API

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func PostUserData(c *gin.Context) {

	var req struct {
		Name        string `json:"name"`
		Description string `json:"description"`
		Gender      string `json:"gender"`
		Education   string `json:"education"`
		City        string `json:"city"`
		State       string `json:"state"`
		Country     string `json:"country"`
		Address     string `json:"address"`
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

	var fetched_user model.User_description

	model.DB.DB.Find(&fetched_user, "user_id = ?", UserId)

	// if fetched_user.UserType != "Founder" {
	// 	c.JSON(http.StatusUnauthorized, gin.H{
	// 		"status":  "401",
	// 		"message": "Unauthorized",
	// 	})
	// }

	if req.Name != "" {
		fetched_user.Name = req.Name
	}

	if req.Description != "" {
		fetched_user.Description = req.Name
	}

	if req.Gender != "" {
		fetched_user.Gender = req.Name
	}

	if req.Address != "" {
		fetched_user.Address = req.Name
	}

	if req.Country != "" {
		fetched_user.Country = req.Name
	}

	if req.City != "" {
		fetched_user.City = req.Name
	}

	if req.State != "" {
		fetched_user.State = req.Name
	}

	if req.Education != "" {
		fetched_user.Education = req.Name
	}

	res := model.DB.DB.Save(&fetched_user)

	if res.Error != nil {
		fmt.Println(res.Error)
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": "User could not be updated.",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "201",
		"message": "User updated successfully.",
	})
	return
}
