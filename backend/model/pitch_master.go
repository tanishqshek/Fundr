package model

import (
	"time"
)

type Pitch_master struct {
	PitchId       string //`gorm:"primaryKey"`
	UserId        string
	Description   Pitch_description //`gorm:"ForeignKey:Id"`
	Creation_date time.Time
	Creation_time time.Time
	Deleted       bool
}
