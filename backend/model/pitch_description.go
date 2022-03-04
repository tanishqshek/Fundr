package model

type Pitch_description struct {
	Id          string `gorm:"primaryKey"`
	Name        string
	Description string
}
