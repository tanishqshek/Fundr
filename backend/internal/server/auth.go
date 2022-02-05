package server

import (
	"golang.org/x/crypto/bcrypt"

	"github.com/tanishqshek/Fundr/backend/internal/store"

	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func signUp(c *gin.Context) {

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

	user := store.User{
		Name:     req.Name,
		Username: req.Username,
		Password: password,
		Mobile:   req.Mobile,
		UserType: req.UserType,
	}

	createdUser := DB.DB.Create(user)
	var errMessage = createdUser.Error

	if createdUser.Error != nil {
		fmt.Println(errMessage)
	}

	// store.Users = append(store.Users, &user)

	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": "Signed up successfully.",
		//"users":   store.Users,
	})

}

func signIn(c *gin.Context) {

	var fetched_user store.User
	// var w http.ResponseWriter
	var req struct {
		Username string `json:"username" binding:"required,email"`
		Password string `json:"password" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	DB.DB.First(&fetched_user, "Username = ?", req.Username)

	if err := bcrypt.CompareHashAndPassword([]byte(fetched_user.Password), []byte(req.Password)); err != nil {
		// If the two passwords don't match, return a 401 status
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"status":  fetched_user.Username,
			"message": "Sign in failed.",
		})

		return
	}

	// sessionToken := uuid.NewV4().String()
	// session := sessions.Default(c)
	// session.Set("id", sessionToken)
	// session.Set("email", req.Username)
	// session.Save()

	// c.JSON(http.StatusOK, gin.H{
	// 	"status":  "200",
	// 	"message": "Signed in successfully.",
	// })
	// http.SetCookie(c.Writer, &http.Cookie{
	// 	Name:    "session_token",
	// 	Value:   sessionToken,
	// 	Expires: time.Now().Add(120 * time.Second),
	// })

}

// 	for _, u := range store.Users {

// 		if u.Username == req.Username && u.Password == password {

// 			sessionToken := uuid.NewV4().String()
// 			session := sessions.Default(c)
// 			session.Set("id", sessionToken)
// 			session.Set("email", req.Username)
// 			session.Save()

// 			c.JSON(http.StatusOK, gin.H{
// 				"status":  "200",
// 				"message": "Signed in successfully.",
// 			})
// 			http.SetCookie(c.Writer, &http.Cookie{
// 				Name:    "session_token",
// 				Value:   sessionToken,
// 				Expires: time.Now().Add(120 * time.Second),
// 			})
// 			return

// 		}
// 	}
// 	c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
// 		"status":  "500",
// 		"message": "Sign in failed.",
// 	})
// }
