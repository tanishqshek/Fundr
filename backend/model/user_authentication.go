package model

import "time"

type User struct {
	Username  string `gorm:"primary_key" json:"username" binding:"required,email"`
	CreatedAt time.Time
	UserId    string
	AuthId    string
	Name      string `json:"name" binding:"required"`
	Password  string `json:"password" binding:"required"`
	Mobile    string `json:"mobile" binding:"required"`
	UserType  string `json:"usertype" binding:"required"`
}
