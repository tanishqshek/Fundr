package model

import (
	"time"
)

type Pitch_master struct {
	// gorm.Model
	PitchId       string `gorm:"primary_key"`
	UserId        string
	Description   Pitch_description //`gorm:"ForeignKey:Id"`
	Creation_date time.Time
	Creation_time time.Time
	Deleted       bool
}
