package model

import (
	"time"
)

type Pitch_master struct {
	Id            string `gorm:"primaryKey"`
	UserId        string
	Creation_date time.Time
	Creation_time time.Time
	Deleted       bool
}
