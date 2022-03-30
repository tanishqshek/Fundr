package model

type Pitch_description struct {
	UserId      string
	PitchId     string `gorm:"primary_key"`
	ImageUrl    string
	CompanyName string
	Description string
	Tags        string
}
