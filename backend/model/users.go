package model

type User struct {
	// UserId   string `json:"userid"`
	Name     string `json:"name" binding:"required"`
	Username string `json:"username" binding:"required,email"`
	Password string `json:"password" binding:"required"`
	Mobile   string `json:"mobile" binding:"required"`
	UserType string `json:"usertype" binding:"required"`
}

var Users []*User
