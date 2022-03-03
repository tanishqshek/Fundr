package API

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func SetFounderData(c *gin.Context) {

	// var founder_targets model.Founder_targets
	// var founder model.User

	var req struct {
		Username  string `json:"username" binding:"required,email"`
		Authtoken string `json:"authtoken" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	// model.DB.DB.Find(&founder, "Username = ?", req.Username)
	// if founder.AuthId != req.Authtoken {
	// 	c.JSON(http.StatusBadRequest, gin.H{
	// 		"status":  "400",
	// 		"message": err.Error(),
	// 	})
	// 	return
	// }

	// model.DB.DB.Find(&founder_targets, "Founder_id = ?", req.Username)

	// password := sha256.Sum256([]byte(req.Password))

	// hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(req.Password), 8)
	// password := string(hashedPassword)

	// user_id := uuid.NewString()

	// user := model.User{
	// 	UserId:   user_id,
	// 	Name:     req.Name,
	// 	Username: req.Username,
	// 	Password: password,
	// 	Mobile:   req.Mobile,
	// 	UserType: req.UserType,
	// }

	// createdUser := model.DB.DB.Create(user)
	// var errMessage = createdUser.Error

	// if createdUser.Error != nil {
	// 	fmt.Println(errMessage)
	// }

	// c.JSON(http.StatusOK, gin.H{
	// 	"status":  "200",
	// 	"message": "Signed up successfully.",
	// })

}
