package model

type User_description struct {
	UserId      string `gorm:"primary_key"`
	Username    string
	Name        string
	Mobile      string
	UserType    string
	Description string
	Gender      string
	Education   string
	City        string
	State       string
	Country     string
	Address     string
}
