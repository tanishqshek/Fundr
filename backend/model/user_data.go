package model

type User_description struct {
	Id          string `gorm:"primaryKey"`
	Name        string
	Username    string
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
