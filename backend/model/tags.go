package model

type tags_pitches struct {
	TagId   string `gorm:"primary_key"`
	PitchId string `gorm:"primary_key"`
}
