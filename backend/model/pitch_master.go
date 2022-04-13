package model

import (
	"time"
)

type Pitch_master struct {
	PitchId   string `gorm:"primary_key" gorm:"ForeignKey:Id"`
	CreatedAt time.Time
	UserId    string
	Deleted   bool
}
