package API

import (
	"golang.org/x/crypto/bcrypt"

	"github.com/tanishqshek/Fundr/backend/model"

	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/google/uuid"
)

func SignUp(c *gin.Context) {

	var req struct {
		Name     string `json:"name" binding:"required"`
		Username string `json:"username" binding:"required,email"`
		Password string `json:"password" binding:"required"`
		Mobile   string `json:"mobile" binding:"required"`
		UserType string `json:"usertype" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	// password := sha256.Sum256([]byte(req.Password))

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(req.Password), 8)
	password := string(hashedPassword)

	user_id := uuid.NewString()

	user := model.User{
		UserId:   user_id,
		Name:     req.Name,
		Username: req.Username,
		Password: password,
		Mobile:   req.Mobile,
		UserType: req.UserType,
	}

	user_data := model.User_description{
		Id:       user_id,
		Name:     req.Name,
		Username: req.Username,
		Mobile:   req.Mobile,
		UserType: req.UserType,
	}

	createdUser := model.DB.DB.Create(user)
	var errMessage1 = createdUser.Error
	createdDescription := model.DB.DB.Create(user_data)
	var errMessage2 = createdUser.Error

	if createdUser.Error != nil {
		fmt.Println(errMessage1)
	}

	if createdDescription.Error != nil {
		fmt.Println(errMessage2)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": "Signed up successfully.",
	})

}