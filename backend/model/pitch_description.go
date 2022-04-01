package model

type Pitch_description struct {
	PitchId     string `gorm:"primary_key"`
	UserId      string
	ImageUrl    string
	CompanyName string
	Description string
	Tags        string
}
