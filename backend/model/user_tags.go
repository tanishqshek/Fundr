package model

type User_tags struct {
	TagId  string `gorm:"primary_key"`
	UserId string `gorm:"primary_key"`
}
